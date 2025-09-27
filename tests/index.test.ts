import {
  greet,
  greetWithOptions,
  isValidName,
  packageInfo,
  version,
  name,
  type GreetingOptions,
} from '../src/index';

describe('Package Exports', () => {
  describe('function exports', () => {
    it('should export greet function', () => {
      expect(typeof greet).toBe('function');
      expect(greet()).toBe('Hello, World!');
      expect(greet('Alice')).toBe('Hello, Alice!');
    });

    it('should export greetWithOptions function', () => {
      expect(typeof greetWithOptions).toBe('function');
      expect(greetWithOptions()).toBe('Hello, World!');
      expect(greetWithOptions('Alice', { prefix: 'Hi' })).toBe('Hi, Alice!');
    });

    it('should export isValidName function', () => {
      expect(typeof isValidName).toBe('function');
      expect(isValidName('Alice')).toBe(true);
      expect(isValidName('')).toBe(false);
    });
  });

  describe('type exports', () => {
    it('should export GreetingOptions type', () => {
      // Test that the type can be used
      const options: GreetingOptions = {
        prefix: 'Hi',
        suffix: '!',
        capitalize: true,
      };

      expect(greetWithOptions('Alice', options)).toBe('Hi, Alice!');
    });

    it('should allow partial GreetingOptions', () => {
      const options1: GreetingOptions = { prefix: 'Hey' };
      const options2: GreetingOptions = { suffix: '.' };
      const options3: GreetingOptions = { capitalize: false };

      expect(greetWithOptions('Alice', options1)).toBe('Hey, Alice!');
      expect(greetWithOptions('Alice', options2)).toBe('Hello, Alice.');
      expect(greetWithOptions('alice', options3)).toBe('Hello, alice!');
    });
  });

  describe('metadata exports', () => {
    it('should export version', () => {
      expect(typeof version).toBe('string');
      expect(version).toBe('1.0.0');
    });

    it('should export name', () => {
      expect(typeof name).toBe('string');
      expect(name).toBe('@rumenx/sandbox-npm-package');
    });

    it('should export packageInfo', () => {
      expect(typeof packageInfo).toBe('object');
      expect(packageInfo.name).toBe('@rumenx/sandbox-npm-package');
      expect(packageInfo.version).toBe('1.0.0');
      expect(packageInfo.description).toBe(
        'A demo npm package showcasing TypeScript best practices'
      );
      expect(packageInfo.author).toBe('Rumen Damyanov <contact@rumenx.com>');
      expect(packageInfo.repository).toBe('https://github.com/RumenDamyanov/sandbox-npm-package');
      expect(packageInfo.license).toBe('MIT');
    });

    it('should have immutable packageInfo', () => {
      // Test that packageInfo is readonly at runtime
      const originalName = packageInfo.name;

      // Try to modify it (should silently fail in strict mode)
      try {
        (packageInfo as any).name = 'different-name';
      } catch (error) {
        // Object.freeze should prevent modification
      }

      // The actual value should remain unchanged
      expect(packageInfo.name).toBe(originalName);
      expect(packageInfo.name).toBe('@rumenx/sandbox-npm-package');
    });
  });

  describe('integration tests', () => {
    it('should work with all features together', () => {
      // Test a complete workflow
      const userName = '  alice  ';

      if (isValidName(userName)) {
        const standardGreeting = greet(userName);
        const customGreeting = greetWithOptions(userName, {
          prefix: 'Welcome',
          suffix: ' to our demo package!',
          capitalize: true,
        });

        expect(standardGreeting).toBe('Hello, Alice!');
        expect(customGreeting).toBe('Welcome, Alice to our demo package!');
      }
    });

    it('should handle edge cases consistently', () => {
      const testCases = ['', '   ', undefined];

      testCases.forEach(testCase => {
        expect(isValidName(testCase)).toBe(false);
        expect(greet(testCase)).toBe('Hello, World!');
        expect(greetWithOptions(testCase, { prefix: 'Hi' })).toBe('Hi, World!');
      });
    });
  });
});
