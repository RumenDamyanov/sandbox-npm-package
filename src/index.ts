/**
 * @rumenx/sandbox-npm-package
 *
 * A demo package showcasing TypeScript best practices for npm package development.
 *
 * This package provides simple greeting functionality to demonstrate:
 * - TypeScript development patterns
 * - Comprehensive testing strategies
 * - Code quality enforcement
 * - Professional documentation
 * - Modern build and publishing workflows
 *
 * @packageDocumentation
 */

// Re-export all public functionality
export { greet, greetWithOptions, isValidName } from './greet';
export type { GreetingOptions } from './types';

// Package metadata
export const version = '1.0.0';
export const name = '@rumenx/sandbox-npm-package';

/**
 * Package information and metadata
 * @public
 */
export const packageInfo = Object.freeze({
  name,
  version,
  description: 'A demo npm package showcasing TypeScript best practices',
  author: 'Rumen Damyanov <contact@rumenx.com>',
  repository: 'https://github.com/RumenDamyanov/sandbox-npm-package',
  license: 'MIT',
} as const);
