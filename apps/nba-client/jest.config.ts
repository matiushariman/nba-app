/* eslint-disable */
export default {
  displayName: 'nba-client',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: true,
  coverageDirectory: '../../coverage/apps/nba-client',
  coverageReporters: ['clover', 'json', 'lcov', ['text', { skipFull: true }]],
  setupFilesAfterEnv: ['./jest.setup.ts'],
};
