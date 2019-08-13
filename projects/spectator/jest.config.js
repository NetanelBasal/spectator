module.exports = {
  preset: 'jest-preset-angular',
  globals: {
    'ts-jest': {
      tsConfig: 'projects/spectator/jest/tsconfig.spec.json'
    }
  },
  roots: ['projects/spectator'],
  testMatch: ['**/jest/**/*.spec.ts'],
  setupFilesAfterEnv: ['<rootDir>/projects/spectator/setup-jest.ts'],
  moduleNameMapper: {
    '@netbasal/spectator/jest': '<rootDir>/projects/spectator/jest/src/public_api.ts',
    '@netbasal/spectator': '<rootDir>/projects/spectator/src/public_api.ts'
  }
};
