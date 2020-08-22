module.exports = {
  someSidebar: {
    Introduction: [
      'introduction/getting-started',
      'introduction/rxjs-concepts',
      'introduction/installation',
      'basics/effects',
    ],
    ['RxJS Concepts']: ['basics/subjects', 'basics/observables'],
    React: [
      'react/react-installation',
      { Guides: ['react/guides/counter'] },
      'react/react',
      {
        'API Reference': [
          'react/api-reference/store',
          'react/api-reference/manager',
          'react/api-reference/use-store',
          'react/api-reference/use-subscription',
          'react/api-reference/with-subscription',
        ],
      },
    ],
    Angular: ['angular/angular'],
    Other: ['faq', 'principles', 'motivation'],
  },
};
