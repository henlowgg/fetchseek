module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    testRegex: '(/__tests__/.*\\.(ts|tsx|js|jsx)$)|\\.(test|spec)\\.(ts|tsx|js|jsx)$',
    modulePathIgnorePatterns: ["<rootDir>/node_modules/"],
    "modulePaths": ["<rootDir>/src", "<rootDir>/src/app/utils"]
  };