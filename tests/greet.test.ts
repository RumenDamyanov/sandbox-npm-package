import { greet, greetWithOptions, isValidName } from '../src/greet';

describe('greet', () => {
  describe('basic functionality', () => {
    it('should return "Hello, World!" when called without arguments', () => {
      expect(greet()).toBe('Hello, World!');
    });

    it('should return personalized greeting with provided name', () => {
      expect(greet('Alice')).toBe('Hello, Alice!');
      expect(greet('Bob')).toBe('Hello, Bob!');
      expect(greet('Charlie')).toBe('Hello, Charlie!');
    });

    it('should capitalize the first letter of the name', () => {
      expect(greet('alice')).toBe('Hello, Alice!');
      expect(greet('bOB')).toBe('Hello, Bob!');
      expect(greet('CHARLIE')).toBe('Hello, Charlie!');
    });
  });

  describe('input sanitization', () => {
    it('should trim whitespace from names', () => {
      expect(greet('  Alice  ')).toBe('Hello, Alice!');
      expect(greet('\t\nBob\r\n')).toBe('Hello, Bob!');
      expect(greet('   Charlie   ')).toBe('Hello, Charlie!');
    });

    it('should default to "World" for empty strings', () => {
      expect(greet('')).toBe('Hello, World!');
      expect(greet('   ')).toBe('Hello, World!');
      expect(greet('\t\n\r')).toBe('Hello, World!');
    });

    it('should handle undefined and null gracefully', () => {
      expect(greet(undefined)).toBe('Hello, World!');
      // TypeScript would catch this, but testing runtime behavior
      expect(greet(null as any)).toBe('Hello, World!');
    });
  });

  describe('edge cases', () => {
    it('should handle single character names', () => {
      expect(greet('a')).toBe('Hello, A!');
      expect(greet('X')).toBe('Hello, X!');
    });

    it('should handle names with numbers', () => {
      expect(greet('alice123')).toBe('Hello, Alice123!');
      expect(greet('123bob')).toBe('Hello, 123bob!');
    });

    it('should handle names with special characters', () => {
      expect(greet('alice-bob')).toBe('Hello, Alice-bob!');
      expect(greet("o'connor")).toBe("Hello, O'connor!");
      expect(greet('jean-claude')).toBe('Hello, Jean-claude!');
    });

    it('should handle unicode characters', () => {
      expect(greet('josé')).toBe('Hello, José!');
      expect(greet('naïve')).toBe('Hello, Naïve!');
      expect(greet('王伟')).toBe('Hello, 王伟!');
    });
  });
});

describe('greetWithOptions', () => {
  describe('default behavior', () => {
    it('should behave like greet() when called without options', () => {
      expect(greetWithOptions()).toBe('Hello, World!');
      expect(greetWithOptions('Alice')).toBe('Hello, Alice!');
    });
  });

  describe('prefix customization', () => {
    it('should use custom prefix', () => {
      expect(greetWithOptions('Alice', { prefix: 'Hi' })).toBe('Hi, Alice!');
      expect(greetWithOptions('Bob', { prefix: 'Good morning' })).toBe('Good morning, Bob!');
      expect(greetWithOptions('Charlie', { prefix: 'Hey' })).toBe('Hey, Charlie!');
    });

    it('should handle empty prefix', () => {
      expect(greetWithOptions('Alice', { prefix: '' })).toBe(', Alice!');
    });
  });

  describe('suffix customization', () => {
    it('should use custom suffix', () => {
      expect(greetWithOptions('Alice', { suffix: '.' })).toBe('Hello, Alice.');
      expect(greetWithOptions('Bob', { suffix: '!!!' })).toBe('Hello, Bob!!!');
      expect(greetWithOptions('Charlie', { suffix: '' })).toBe('Hello, Charlie');
    });
  });

  describe('capitalization control', () => {
    it('should not capitalize when capitalize is false', () => {
      expect(greetWithOptions('alice', { capitalize: false })).toBe('Hello, alice!');
      expect(greetWithOptions('BOB', { capitalize: false })).toBe('Hello, BOB!');
      expect(greetWithOptions('ChArLiE', { capitalize: false })).toBe('Hello, ChArLiE!');
    });

    it('should capitalize when capitalize is true (default)', () => {
      expect(greetWithOptions('alice', { capitalize: true })).toBe('Hello, Alice!');
      expect(greetWithOptions('alice')).toBe('Hello, Alice!'); // default behavior
    });
  });

  describe('combined options', () => {
    it('should handle multiple options together', () => {
      expect(
        greetWithOptions('alice', {
          prefix: 'Good morning',
          suffix: '.',
          capitalize: true,
        })
      ).toBe('Good morning, Alice.');

      expect(
        greetWithOptions('BOB', {
          prefix: 'Hey',
          suffix: '!!!',
          capitalize: false,
        })
      ).toBe('Hey, BOB!!!');
    });
  });

  describe('input sanitization', () => {
    it('should sanitize input like greet()', () => {
      expect(greetWithOptions('  alice  ', { prefix: 'Hi' })).toBe('Hi, Alice!');
      expect(greetWithOptions('', { prefix: 'Hello' })).toBe('Hello, World!');
    });
  });
});

describe('isValidName', () => {
  describe('valid names', () => {
    it('should return true for non-empty strings', () => {
      expect(isValidName('Alice')).toBe(true);
      expect(isValidName('Bob')).toBe(true);
      expect(isValidName('a')).toBe(true);
      expect(isValidName('123')).toBe(true);
    });

    it('should return true for strings with content after trimming', () => {
      expect(isValidName('  Alice  ')).toBe(true);
      expect(isValidName('\\tBob\\n')).toBe(true);
      expect(isValidName('   a   ')).toBe(true);
    });

    it('should return true for names with special characters', () => {
      expect(isValidName("o'connor")).toBe(true);
      expect(isValidName('jean-claude')).toBe(true);
      expect(isValidName('josé')).toBe(true);
    });
  });

  describe('invalid names', () => {
    it('should return false for empty strings', () => {
      expect(isValidName('')).toBe(false);
    });

    it('should return false for whitespace-only strings', () => {
      expect(isValidName('   ')).toBe(false);
      expect(isValidName('\t\n\r')).toBe(false);
      expect(isValidName('\t   \n')).toBe(false);
    });

    it('should return false for undefined', () => {
      expect(isValidName(undefined)).toBe(false);
    });

    it('should return false for null', () => {
      // TypeScript would catch this, but testing runtime behavior
      expect(isValidName(null as any)).toBe(false);
    });
  });
});
