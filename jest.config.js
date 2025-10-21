module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-native-vector-icons|@react-navigation)/)',
  ],
  moduleNameMapper: {
    // Mock for static files
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    // Mock for styles files
    '@react-native-vector-icons/evil-icons': '<rootDir>/__mocks__/iconMock.js',
    '@react-native-vector-icons/ant-design': '<rootDir>/__mocks__/iconMock.js',
  },
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts', '!src/types/**'],
};
