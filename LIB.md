# install handlebars .hbs
yarn add handlebars


# Coverage test
- in jest.config.ts
    - collectCoverage: true.
    - collectCoverageFrom: "<rootDir>/src/modules/**/useCases/**/*.ts"
    - coverageDirectory: 'coverage'
    - coverageReporters: [
        'text-summary',
        'lcov',
    ]


