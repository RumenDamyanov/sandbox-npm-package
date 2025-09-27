/**
 * Configuration options for greeting behavior
 * @public
 */
export interface GreetingOptions {
  /** The prefix to use before the greeting (default: "Hello") */
  prefix?: string;
  /** The suffix to use after the name (default: "!") */
  suffix?: string;
  /** Whether to capitalize the first letter of the name */
  capitalize?: boolean;
}

// No default options defined - handled inline in functions
