import React, {
  useRef,
  useState,
  useEffect,
  useReducer,
  useMemo,
  useCallback,
} from 'react';
import WebCola from 'react-cola';
import { useStore, useSubscription } from '@rx-store/react-rx-store';
import { rootContext } from './Manager';

import { Canvas, useFrame, useThree, useResource } from 'react-three-fiber';
import * as THREE from 'three';
import { OrbitControls } from 'drei';
import { useSpring } from '@react-spring/core';
import { animated } from '@react-spring/three';
import { Layout } from 'webcola';
import { tap, delay, map, filter, throttleTime } from 'rxjs/operators';

// Geometry
function GroundPlane() {
  return (
    <mesh receiveShadow rotation={[5, 0, 0]} position={[0, 0, -15]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="gray" />
    </mesh>
  );
}
function BackDrop() {
  return (
    <mesh receiveShadow position={[0, -1, -5]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}

function Effect(props, i) {
  return <BoxWithText text={props.name} {...props} boxColor="hotpink" />;
}

function Subject(props, i) {
  const store = useStore(rootContext);

  // subscribe to the rx store subject that this 3D object represents
  const [next, error, complete] = useSubscription(store[props.name]);

  return (
    <BoxWithText text={`${props.name}: ${next}`} {...props} boxColor="red" />
  );
}

function BoxWithText({ x, y, z, width, height, text, boxColor }, i) {
  // This reference will give us direct access to the mesh
  const boxMeshRef = useRef();

  const { viewport } = useThree();

  const [font, setFont] = useState<any>();
  useEffect(() => {
    const loader = new THREE.FontLoader();
    loader.load('/assets/helvetiker_regular.typeface.json', function (_font) {
      setFont(_font);
    });
  }, []);

  const { textPos, boxPos } = useSpring({
    textPos: [x - width / 2, y, 1],
    boxPos: [x, y, 0],
    // config: { mass: 10, tension: 10, friction: 100, precision: 0.00001 }
  });

  if (!font) return null;

  return (
    <group>
      <animated.mesh position={textPos}>
        <textBufferGeometry
          attach="geometry"
          args={[
            text,
            {
              font: font,
              size: 2,
              height: 0.01,
            },
          ]}
        />
        <animated.meshStandardMaterial attach="material" color="black" />
      </animated.mesh>
      <animated.mesh position={boxPos} ref={boxMeshRef}>
        <boxBufferGeometry attach="geometry" args={[width, height, 1]} />
        <meshStandardMaterial attach="material" color={boxColor} wireframe />
      </animated.mesh>
    </group>
  );
}

function Line({ x0, y0, x1, y1, isActive }, i) {
  const { viewport, size } = useThree();

  const { pos1 } = useSpring({
    pos1: [x1 - x0, y1 - y0, 0],
    // config: { mass: 100, tension: 100, friction: 100, precision: 0.00001 }
  });

  const points = useMemo(
    () => [new THREE.Vector3(0, 0, 0), new THREE.Vector3(x1 - x0, y1 - y0, 0)],
    [x0, x1, y0, y1]
  );
  const { color } = useSpring({
    color: isActive ? 'red' : 'black',
  });

  const { pos } = useSpring({
    pos: [x0, y0, 0],
    // config: { mass: 100, tension: 100, friction: 100, precision: 0.00001 }
  });
  // const pos = [x0, y0, 0];

  const onUpdate = useCallback((self) => self.setFromPoints(points), [points]);

  const deltaX = x1 - x0;
  const deltaY = y1 - y0;
  const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  const normX = deltaX / dist;
  const normY = deltaY / dist;

  return (
    <animated.mesh position={pos}>
      {/* <bufferGeometry attach="geometry" onUpdate={onUpdate} /> */}
      {/* <animated.standardMaterial attach="material" color={color} /> */}
      <arrowHelper
        args={[
          new THREE.Vector3(normX, normY, 0),
          undefined,
          dist - 5,
          'black',
          2,
          2,
        ]}
      />
    </animated.mesh>
  );
}

export const Visual = () => {
  return (
    <div style={{ border: '1px red solid', width: 1000, height: 1000 }}>
      <Canvas
        style={{ background: '#aaccee' }}
        camera={{ position: [0, 0, 10] }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <New />
        {/* <GroundPlane />
        <BackDrop /> */}
        <OrbitControls
          target={[0, 0, 0]}
          maxDistance={1000}
          minDistance={100}
        />
      </Canvas>
    </div>
  );
};

export const New = () => {
  const store = useStore(rootContext);
  const [_, forceRender] = useReducer((n) => n + 1, 0);
  const { size } = useThree();

  const nodes = useRef([]);
  const links = useRef([]);

  const layout = useMemo(() => {
    console.log('create layout!', nodes.current);
    return new Layout()
      .nodes(nodes.current)
      .links(links.current)
      .size([size.width, size.height])
      .flowLayout('y', 0)
      .linkDistance(50)
      .avoidOverlaps(true)
      .handleDisconnected(true)
      .on('end', forceRender);
  }, []);

  useEffect(() => {
    if (!window.__rxStoreEffects) return;
    const subscription = window.__rxStoreEffects
      .pipe(
        tap(({ name, event }) => {
          if (event === 'spawn') {
            nodes.current.push({
              name,
              width: 30,
              height: 5,
              effect: true,
            });
            console.log('effects add', name);
          } else {
            const index = nodes.current.findIndex((o) => name === o.name);
            nodes.current.splice(index, 1);

            Object.entries(links.current)
              .reduce((acc, [i, link]) => {
                if (
                  (link.source.effect && link.source.name === name) ||
                  (link.target.effect && link.target.name === name)
                ) {
                  return [...acc, i];
                }
                return acc;
              }, [])
              .reverse()
              .forEach((i) => {
                console.log(i);

                links.current.splice(i, 1);
              });
            console.log('effects delete', name);
          }
        }),
        throttleTime(100, undefined, { trailing: true }),
        tap(() => {
          // forceRender();
          layout.stop();
          layout.start(10);
        })
      )
      .subscribe();
    return () => subscription.unsubscribe();
  }, [window.__rxStoreEffects]);

  useEffect(() => {
    const subjects = Object.keys(store).reduce(
      (acc, name) => [...acc, name],
      []
    );
    console.log('subjects changed', subjects);
    subjects.forEach((subject) => {
      nodes.current.push({
        name: subject,
        width: 30,
        height: 5,
        subject: true,
      });
    });
  }, [store]);

  useEffect(() => {
    if (!window.__rxStoreLinks) return;
    const subscription = window.__rxStoreLinks
      .pipe(
        map(({ from, to }) => {
          console.log('links add', from, to);

          // debugger;
          const findIndex = ({ type, name }) => {
            switch (type) {
              case 'effect':
                return nodes.current.find(
                  (node) => node.effect && node.name === name
                );
              case 'subject':
                return nodes.current.find(
                  (node) => node.subject && node.name === name
                );
            }
          };

          if (!findIndex(from) || !findIndex(to)) {
            // debugger;
            console.warn(from, to);
            return null;
          }

          return {
            source: findIndex(from),
            target: findIndex(to),
          };
        }),
        filter((v) => !!v),
        tap((link) => {
          links.current.push(link);
        }),
        throttleTime(100, undefined, { trailing: true }),
        tap(() => {
          // forceRender()
          console.log('run layout', links.current.length, nodes.current.length);
          layout.stop();
          layout.start();
        })
      )
      .subscribe();
    return () => subscription.unsubscribe();
  }, [window.__rxStoreLinks]);

  useEffect(() => {
    layout.stop();
    layout.start(10);
  }, [layout]);
  // console.log(JSON.stringify(layout.nodes(), null, 2), layout.nodes().length);

  // return null;
  return (
    <>
      {layout
        .nodes()
        .map((obj) => ({
          ...obj,
          x: obj.x - size.width / 2,
          y: obj.y - size.height / 2,
        }))
        .map((props, i) =>
          props.subject ? (
            <Subject key={props.name} {...props} />
          ) : (
            <Effect key={props.name} {...props} />
          )
        )}
      {layout.links().map(({ source, target }, i) => {
        // const isActive =
        //   Array.from(activeLinks).findIndex(
        //     (obj) =>
        //       obj.subjectName === target.name &&
        //       obj.debugKey === source.name
        //   ) !== -1;

        const { x, y } = source;
        const { x: x2, y: y2 } = target;

        return (
          <Line
            key={i}
            x0={x - size.width / 2}
            y0={y - size.height / 2}
            x1={x2 - size.width / 2}
            y1={y2 - size.height / 2}
            isActive={false}
          />
        );
      })}
    </>
  );
};
