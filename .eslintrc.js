module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    // Convierte errores en warnings temporalmente
    '@typescript-eslint/no-unused-vars': 'warn',
    'react-native/no-inline-styles': 'warn',
    'no-unused-vars': 'warn',
  },
};
