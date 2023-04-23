import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};

export default config;
