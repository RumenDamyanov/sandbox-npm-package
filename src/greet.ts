import type { GreetingOptions } from './types';

/**
 * Generates a simple greeting message
 *
 * @param name - The name to include in the greeting. If not provided, defaults to "World"
 * @returns A formatted greeting string
 *
 * @example
 * ```typescript
 * import { greet } from '@rumenx/sandbox-npm-package';
 *
 * console.log(greet()); // "Hello, World!"
 * console.log(greet("Alice")); // "Hello, Alice!"
 * console.log(greet("  bob  ")); // "Hello, Bob!"
 * ```
 *
 * @public
 */
export function greet(name?: string): string {
  // Sanitize input: trim whitespace and handle empty strings
  const sanitizedName = name?.trim();
  const targetName = sanitizedName && sanitizedName.length > 0 ? sanitizedName : 'World';

  // Capitalize first letter for better presentation
  const capitalizedName = targetName.charAt(0).toUpperCase() + targetName.slice(1).toLowerCase();

  return `Hello, ${capitalizedName}!`;
}

/**
 * Generates a customizable greeting message with advanced options
 *
 * @param name - The name to include in the greeting. If not provided, defaults to "World"
 * @param options - Configuration options for customizing the greeting
 * @returns A formatted greeting string based on the provided options
 *
 * @example
 * ```typescript
 * import { greetWithOptions } from '@rumenx/sandbox-npm-package';
 *
 * console.log(greetWithOptions("Alice")); // "Hello, Alice!"
 * console.log(greetWithOptions("bob", { prefix: "Hi" })); // "Hi, Bob!"
 * console.log(greetWithOptions("charlie", {
 *   prefix: "Good morning",
 *   suffix: "."
 * })); // "Good morning, Charlie."
 * console.log(greetWithOptions("DAVID", { capitalize: false })); // "Hello, DAVID!"
 * ```
 *
 * @public
 */
export function greetWithOptions(name?: string, options: GreetingOptions = {}): string {
  // Default options
  const { prefix = 'Hello', suffix = '!', capitalize = true } = options;

  // Sanitize input
  const sanitizedName = name?.trim();
  let targetName = sanitizedName && sanitizedName.length > 0 ? sanitizedName : 'World';

  // Apply capitalization if requested
  if (capitalize) {
    targetName = targetName.charAt(0).toUpperCase() + targetName.slice(1).toLowerCase();
  }

  return `${prefix}, ${targetName}${suffix}`;
}

/**
 * Validates if a name is considered valid for greeting
 *
 * @param name - The name to validate
 * @returns True if the name is valid (non-empty after trimming), false otherwise
 *
 * @example
 * ```typescript
 * import { isValidName } from '@rumenx/sandbox-npm-package';
 *
 * console.log(isValidName("Alice")); // true
 * console.log(isValidName("  bob  ")); // true
 * console.log(isValidName("")); // false
 * console.log(isValidName("   ")); // false
 * console.log(isValidName(undefined)); // false
 * ```
 *
 * @public
 */
export function isValidName(name?: string): boolean {
  return Boolean(name?.trim() && name.trim().length > 0);
}
