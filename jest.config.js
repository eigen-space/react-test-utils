module.exports = {
    clearMocks: true,
    preset: 'ts-jest',
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/index.ts'
    ],
    coveragePathIgnorePatterns: [
        '.*\\.d\\.ts'
    ],
    testMatch: [
        '<rootDir>/src/**/*.spec.(ts|tsx)'
    ],
    setupFiles: [
        '<rootDir>/config/jest/setup/enzyme.setup.ts',
        '<rootDir>/config/jest/setup/console.setup.ts'
    ],
    setupFilesAfterEnv: [
        '<rootDir>/config/jest/env-setup/check-assertions-number.ts',
        '<rootDir>/config/jest/env-setup/jest-patchers.ts'
    ],
    testURL: 'http://localhost',
    globals: {
        'ts-jest': { tsConfig: 'tsconfig.spec.json' }
    },
    collectCoverage: true,
    coverageThreshold: {
        global: {
            statements: 38,
            branches: 36,
            lines: 41,
            functions: 10
        }
    }
};
