import Validator from '../app';

test('should find invalid letters in name', () => {
  const validator = new Validator();
  const result = () => validator.validateUsername('Has$htag');
  expect(result).toThrowError('name contains invalid characters');
});

test('should find exceed usage of numbers in name', () => {
  const validator = new Validator();
  const result = () => validator.validateUsername('hash12354tag');
  expect(result).toThrowError('name contains too many numbers');
});

test('should find invalid characters in beginning of name', () => {
  const validator = new Validator();
  const result = () => validator.validateUsername('1Hashtag');
  expect(result).toThrowError('name starts with invalid characters');
});

test('should find invalid characters at the end of name', () => {
  const validator = new Validator();
  const result = () => validator.validateUsername('Hashtag2');
  expect(result).toThrowError('name ends with invalid characters');
});
test('s^s', () => {
  const validator = new Validator();
  const result = () => validator.validateUsername('s^s');
  expect(result).toThrowError('name contains invalid characters');
});
test('s6s', () => {
  const validator = new Validator();
  validator.validateUsername('s6s');
  expect(true).toBe(true);
});
test('s333s', () => {
  const validator = new Validator();
  validator.validateUsername('s333s');
  expect(true).toBe(true);
});