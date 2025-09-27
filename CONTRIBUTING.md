# Contributing to @rumenx/sandbox-npm-package

Thank you for your interest in contributing to this project! This guide will
help you understand how to contribute effectively.

## 📋 Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Standards](#code-standards)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)
- [Submitting Changes](#submitting-changes)
- [Release Process](#release-process)
- [Getting Help](#getting-help)

## 🎯 Overview

This project serves as a demonstration of npm package best practices. While the
functionality is intentionally minimal, we maintain high standards for:

- Code quality and consistency
- Comprehensive testing
- Clear documentation
- Professional development practices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm 8+
- Git

### Initial Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/sandbox-npm-package.git
   cd sandbox-npm-package
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/RumenDamyanov/sandbox-npm-package.git
   ```
4. **Install dependencies**:
   ```bash
   npm install
   ```
5. **Verify setup**:
   ```bash
   npm run build
   npm test
   npm run lint
   ```

## 🔄 Development Workflow

### 1. Create a Feature Branch

```bash
# Fetch latest changes
git fetch upstream
git checkout master
git merge upstream/master

# Create feature branch
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes

- Write your code following our [code standards](#code-standards)
- Add or update tests as needed
- Update documentation if necessary
- Run tests frequently during development

### 3. Test Your Changes

```bash
# Run all quality checks
npm run lint          # Check code style
npm run typecheck     # Verify TypeScript types
npm test             # Run test suite
npm run build        # Verify build works
```

### 4. Commit Your Changes

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git add .
git commit -m "feat: add new greeting customization option"
```

**Commit Types:**

- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

## 📏 Code Standards

### TypeScript Guidelines

- **Strict Mode**: All TypeScript code must pass strict type checking
- **No `any` Types**: Avoid `any` unless absolutely necessary with justification
- **Explicit Types**: Prefer explicit return types for functions
- **JSDoc Comments**: Document all public APIs

**Example:**

```typescript
/**
 * Validates if a name is considered valid for greeting
 * @param name - The name to validate
 * @returns True if valid, false otherwise
 */
export function isValidName(name?: string): boolean {
  return Boolean(name?.trim() && name.trim().length > 0);
}
```

### Code Style

- **ESLint**: All code must pass ESLint checks
- **Prettier**: Use Prettier for consistent formatting
- **Naming**: Use camelCase for variables/functions, PascalCase for
  types/interfaces

### File Organization

```
src/
├── index.ts          # Main exports
├── types.ts          # Type definitions
└── [feature].ts      # Feature implementations

tests/
├── [feature].test.ts # Unit tests
└── index.test.ts     # Integration tests
```

## 🧪 Testing Guidelines

### Test Requirements

- **Coverage**: Maintain 95%+ code coverage
- **Test Types**: Include unit tests, integration tests, and edge cases
- **Naming**: Use descriptive test names that explain the scenario

### Test Structure

```typescript
describe('greet', () => {
  describe('basic functionality', () => {
    it('should return "Hello, World!" when called without arguments', () => {
      expect(greet()).toBe('Hello, World!');
    });
  });

  describe('input sanitization', () => {
    it('should trim whitespace from names', () => {
      expect(greet('  Alice  ')).toBe('Hello, Alice!');
    });
  });

  describe('edge cases', () => {
    it('should handle empty strings', () => {
      expect(greet('')).toBe('Hello, World!');
    });
  });
});
```

### Running Tests

```bash
npm test                    # Run all tests
npm run test:watch         # Watch mode
npm run test:coverage      # Generate coverage report
```

## 📚 Documentation

### Code Documentation

- **JSDoc**: All public functions must have JSDoc comments
- **Examples**: Include usage examples in JSDoc
- **Types**: Document complex types and interfaces

### README Updates

When adding new features:

1. Update API reference section
2. Add usage examples
3. Update any affected documentation

## 📤 Submitting Changes

### Pull Request Process

1. **Push your branch** to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create Pull Request** on GitHub with:
   - Clear title describing the change
   - Detailed description of what was changed and why
   - Link to any related issues
   - Screenshots/examples if applicable

### Review Process

1. **Automated Checks**: CI pipeline must pass
2. **Code Review**: Maintainer review and approval
3. **Merge**: Squash and merge to main branch

## 🚀 Release Process

Releases are automated through GitHub Actions:

1. **Create Release**: Maintainers create GitHub release with semantic version
2. **Automated Publishing**: GitHub Actions publishes to npm
3. **Changelog**: Generated from commit messages

### Version Bumping

Follow [Semantic Versioning](https://semver.org/):

- **Patch** (`1.0.1`): Bug fixes, minor improvements
- **Minor** (`1.1.0`): New features, backward compatible
- **Major** (`2.0.0`): Breaking changes

## 🆘 Getting Help

### Communication Channels

- **Issues**:
  [GitHub Issues](https://github.com/RumenDamyanov/sandbox-npm-package/issues)
  for bugs and feature requests
- **Discussions**:
  [GitHub Discussions](https://github.com/RumenDamyanov/sandbox-npm-package/discussions)
  for questions and ideas
- **Email**: [contact@rumenx.com](mailto:contact@rumenx.com) for private matters

### Common Questions

**Q: How do I run just one test?**

```bash
npm test -- --testNamePattern="greet"
```

**Q: How do I fix formatting issues?**

```bash
npm run format
```

**Q: How do I check what files will be published?**

```bash
npm pack --dry-run
```

## 🏆 Recognition

Contributors will be:

- Listed in release notes
- Mentioned in the README (for significant contributions)
- Invited to be maintainers (for ongoing contributors)

## 📜 Code of Conduct

This project follows the
[Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating,
you are expected to uphold this code.

---

Thank you for contributing to make this project a better example of npm package
best practices! 🎉
