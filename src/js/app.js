export default class Validator {
  constructor() {
    this.letters = /[^\w-]/;
    this.moreThanThreeNumbers = /\d{4,}/;
    this.startsWithInvalidCharacters = /^[\d-_][A-z-_]/;
    this.endsWithInvalidCharacters = /[A-z-_][\d-_]$/;
  }

  validateUsername(name) {
    if (this.letters.test(name)) {
      throw new Error('name contains invalid characters');
    }
    if (this.moreThanThreeNumbers.test(name)) {
      throw new Error('name contains too many numbers');
    }
    if (this.startsWithInvalidCharacters.test(name)) {
      throw new Error('name starts with invalid characters');
    }
    if (this.endsWithInvalidCharacters.test(name)) {
      throw new Error('name ends with invalid characters');
    }
  }
}
