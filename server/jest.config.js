const { pathsToModuleNameMapper } = require('ts-jest');

const config = {
  rootDir: '.',
  preset: 'ts-jest',
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testPathIgnorePatterns: ['.d.ts', '.js'],
  moduleNameMapper: pathsToModuleNameMapper(
    {
      '@services/*': ['src/api/services/*'],
      '@app/*': ['src/*'],
    },
    {
      prefix: '<rootDir>/',
    }
  ),
  setupFilesAfterEnv: ['<rootDir>/tests/fixtures/jest.setup.redis-mock.ts'],
};

module.exports = config;
