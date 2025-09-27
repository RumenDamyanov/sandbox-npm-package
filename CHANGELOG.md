# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2025-09-27

### Fixed

- Fixed npm publish workflow version conflict error
- Resolved CI security audit command syntax issues
- Updated GitHub Actions checkout to v5 for compatibility

### Changed

- Updated TypeScript ecosystem dependencies via Dependabot
- Updated @types/node in build-tools group
- Updated eslint-config-prettier in linting-tools group
- Updated testing framework dependencies
- Updated codecov-action to v5
- Updated actions/setup-node to v5

### Maintenance

- Automated dependency updates through Dependabot pull requests
- Improved CI/CD pipeline reliability and modern action versions

## [1.0.1] - 2025-09-27

### Fixed

- Updated GitHub Actions workflows for better reliability
- Fixed CI security audit command syntax
- Modernized release asset upload using GitHub CLI
- Updated permissions for release workflow

### Added

- Initial project structure and configuration
- TypeScript setup with strict mode
- Jest testing framework with 95%+ coverage requirement
- ESLint and Prettier code quality tools
- GitHub Actions CI/CD pipeline
- Dependabot configuration for automated dependency updates
- Comprehensive documentation (README, CONTRIBUTING, CODE_OF_CONDUCT)

### Features

- `greet(name?: string)` - Basic greeting function
- `greetWithOptions(name?: string, options?: GreetingOptions)` - Advanced
  greeting with customization
- `isValidName(name?: string)` - Name validation utility
- Full TypeScript type definitions
- Zero runtime dependencies

## [1.0.0] - 2025-01-01

### Added

- Initial release of the sandbox npm package
- Complete demonstration of TypeScript npm package best practices
- Educational resource for package development workflows

### Technical Details

- Node.js 18+ support
- TypeScript 5.x with strict mode
- Jest testing with comprehensive coverage
- ESLint + Prettier code quality
- GitHub Actions automation
- NPM publishing workflow

---

**Note**: This changelog will be automatically updated as part of the release
process. Each release will document new features, bug fixes, and breaking
changes following conventional commit standards.
