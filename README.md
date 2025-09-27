# @rumenx/sandbox-npm-package

[![npm version](https://badge.fury.io/js/%40rumenx%2Fsandbox-npm-package.svg)](https://badge.fury.io/js/%40rumenx%2Fsandbox-npm-package)
[![CI](https://github.com/RumenDamyanov/sandbox-npm-package/workflows/CI/badge.svg)](https://github.com/RumenDamyanov/sandbox-npm-package/actions)
[![codecov](https://codecov.io/gh/RumenDamyanov/sandbox-npm-package/branch/master/graph/badge.svg)](https://codecov.io/gh/RumenDamyanov/sandbox-npm-package)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

> A demo npm package showcasing TypeScript best practices for development,
> testing, and publishing.

## 📖 Overview

This package serves as a comprehensive demonstration of modern npm package
development using TypeScript. While functionally minimal (implementing simple
greeting functionality), it showcases industry best practices for:

- ✨ **TypeScript Development**: Strict typing, modern ES features, and proper
  module exports
- 🧪 **Comprehensive Testing**: Unit tests, integration tests, and 95%+ coverage
- 🔍 **Code Quality**: ESLint, Prettier, and automated formatting
- 🚀 **CI/CD Pipeline**: GitHub Actions for testing, building, and publishing
- 📚 **Documentation**: JSDoc comments, usage examples, and API documentation
- 🔧 **Automation**: Dependabot for dependency updates and security patches

## 🚨 Important Disclaimer

**This package is intentionally minimal in functionality.** Its value lies in
demonstrating proper package structure, development practices, and automation
workflows rather than solving complex problems. It's a "Hello, World" for the
npm ecosystem - simple in purpose, comprehensive in implementation.

## 📦 Installation

```bash
# Using npm
npm install @rumenx/sandbox-npm-package

# Using yarn
yarn add @rumenx/sandbox-npm-package

# Using pnpm
pnpm add @rumenx/sandbox-npm-package
```

## 🚀 Quick Start

```typescript
import {
  greet,
  greetWithOptions,
  isValidName,
} from '@rumenx/sandbox-npm-package';

// Basic greeting
console.log(greet()); // "Hello, World!"
console.log(greet('Alice')); // "Hello, Alice!"

// Advanced greeting with options
console.log(
  greetWithOptions('Bob', {
    prefix: 'Good morning',
    suffix: '!',
    capitalize: true,
  })
); // "Good morning, Bob!"

// Name validation
console.log(isValidName('Alice')); // true
console.log(isValidName('')); // false
```

## 📋 API Reference

### `greet(name?: string): string`

Generates a simple greeting message.

**Parameters:**

- `name` (optional): The name to include in the greeting. Defaults to "World" if
  not provided.

**Returns:** A formatted greeting string.

**Examples:**

```typescript
greet(); // "Hello, World!"
greet('Alice'); // "Hello, Alice!"
greet('  bob  '); // "Hello, Bob!" (trims and capitalizes)
```

### `greetWithOptions(name?: string, options?: GreetingOptions): string`

Generates a customizable greeting message with advanced options.

**Parameters:**

- `name` (optional): The name to include in the greeting
- `options` (optional): Configuration object for customizing the greeting

**Options:**

```typescript
interface GreetingOptions {
  prefix?: string; // Default: "Hello"
  suffix?: string; // Default: "!"
  capitalize?: boolean; // Default: true
}
```

**Examples:**

```typescript
greetWithOptions('Alice', { prefix: 'Hi' }); // "Hi, Alice!"
greetWithOptions('bob', { capitalize: false }); // "Hello, bob!"
```

### `isValidName(name?: string): boolean`

Validates if a name is considered valid for greeting.

**Parameters:**

- `name` (optional): The name to validate

**Returns:** `true` if the name is valid (non-empty after trimming), `false`
otherwise.

**Examples:**

```typescript
isValidName('Alice'); // true
isValidName('  '); // false
isValidName(undefined); // false
```

### Types

```typescript
interface GreetingOptions {
  prefix?: string;
  suffix?: string;
  capitalize?: boolean;
}
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm 8+

### Setup

```bash
# Clone the repository
git clone https://github.com/RumenDamyanov/sandbox-npm-package.git
cd sandbox-npm-package

# Install dependencies
npm install

# Build the project
npm run build
```

### Development Scripts

```bash
# Development
npm run dev          # Watch mode development
npm run build        # Build the package
npm run clean        # Clean build artifacts

# Testing
npm test             # Run tests
npm run test:watch   # Watch mode testing
npm run test:coverage # Generate coverage report

# Code Quality
npm run lint         # Check linting rules
npm run lint:fix     # Fix auto-fixable linting issues
npm run format       # Format code with Prettier
npm run format:check # Check if code is formatted
npm run typecheck    # Run TypeScript type checking

# Package Management
npm run prepare      # Pre-commit build
npm run prepublishOnly # Pre-publish checks
```

### Project Structure

```
sandbox-npm-package/
├── .github/
│   ├── workflows/           # GitHub Actions
│   └── dependabot.yml      # Dependency updates
├── .ai/
│   └── instructions.md     # AI/Human instructions
├── src/
│   ├── index.ts           # Main entry point
│   ├── greet.ts           # Core functionality
│   └── types.ts           # Type definitions
├── tests/
│   ├── greet.test.ts      # Unit tests
│   └── index.test.ts      # Integration tests
├── dist/                  # Built files (generated)
├── Configuration files...
└── Documentation files...
```

## 🧪 Testing

This package maintains high testing standards:

- **95%+ Code Coverage**: Comprehensive test suite covering all functionality
- **Multiple Test Types**: Unit tests, integration tests, edge cases
- **Automated Testing**: CI pipeline runs tests on multiple Node.js versions and
  operating systems

Run tests locally:

```bash
npm test                    # Run all tests
npm run test:coverage      # Generate coverage report
npm run test:watch         # Watch mode for development
```

## 🔍 Code Quality

### Linting & Formatting

- **ESLint**: TypeScript-aware rules with strict configuration
- **Prettier**: Consistent code formatting
- **Automated**: Pre-commit hooks and CI pipeline enforcement

### Type Safety

- **Strict TypeScript**: No `any` types, comprehensive type definitions
- **Type Exports**: Full TypeScript support for consumers
- **Documentation**: JSDoc comments for all public APIs

## 🚀 CI/CD Pipeline

### GitHub Actions Workflows

1. **CI Pipeline** (`ci.yml`):
   - Linting and formatting checks
   - Tests on multiple Node.js versions (18, 20, 22)
   - Tests on multiple operating systems (Ubuntu, Windows, macOS)
   - Code coverage reporting
   - Security auditing

2. **Publishing** (`publish.yml`):
   - Automated npm publishing on GitHub releases
   - Package verification and validation
   - Release asset generation

3. **Security** (`codeql.yml`):
   - Weekly security analysis
   - Vulnerability scanning
   - Automated security updates

### Dependabot

Automated dependency updates for:

- npm packages (weekly)
- GitHub Actions (weekly)
- Security patches (immediate)

## 📄 License

This project is licensed under the MIT License - see the
[LICENSE.md](LICENSE.md) file for details.

## 🤝 Contributing

Contributions are welcome! Please read our
[Contributing Guidelines](CONTRIBUTING.md) and
[Code of Conduct](CODE_OF_CONDUCT.md) before getting started.

### Development Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests for your changes
5. Ensure all tests pass and code is formatted
6. Commit your changes (`git commit -m 'feat: add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

## 📞 Support

- **Issues**:
  [GitHub Issues](https://github.com/RumenDamyanov/sandbox-npm-package/issues)
- **Discussions**:
  [GitHub Discussions](https://github.com/RumenDamyanov/sandbox-npm-package/discussions)
- **Email**: [contact@rumenx.com](mailto:contact@rumenx.com)

## 🏆 Educational Value

This package demonstrates:

### For Beginners

- Modern npm package structure
- TypeScript development workflow
- Testing strategies with Jest
- Code quality tools setup

### For Intermediate Developers

- Advanced TypeScript configurations
- CI/CD pipeline implementation
- Automated dependency management
- Professional documentation practices

### For Advanced Developers

- Package publishing strategies
- Multi-format module exports
- Security automation
- Open source maintenance workflows

## 🔗 Related Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Jest Testing Framework](https://jestjs.io/docs/getting-started)
- [ESLint Configuration](https://eslint.org/docs/user-guide/configuring/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [npm Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)

## 📊 Package Stats

- **Bundle Size**: < 5KB minified
- **Dependencies**: Zero runtime dependencies
- **Node.js Support**: 18+ (LTS)
- **TypeScript Support**: Full type definitions included
- **Test Coverage**: 95%+

---

**Made with ❤️ by [Rumen Damyanov](https://github.com/RumenDamyanov)**

_This package exists to bridge the gap between simple tutorials and complex
real-world packages. It provides a complete, production-ready example of how
modern npm packages should be structured, developed, and maintained while
keeping the actual functionality intentionally simple._
