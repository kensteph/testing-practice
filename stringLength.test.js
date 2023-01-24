const stringLength = require('./js/stringLength');

test('Should return correct length', () => {
  // Arrange
  const string = 'Testing';

  // Act
  const length = stringLength(string);

  // Assert
  expect(length).toEqual(7);
});

test('Should throw error if string length <1', () => {
  // Arrange
  const string = '';

  // Act
  // const length = stringLength(string);

  // Assert
  expect(() => stringLength(string)).toThrow();
});

test('Should throw error if string length >10', () => {
  // Arrange
  const string = '12345678911';

  // Act
  // const length = stringLength(string);

  // Assert
  expect(() => stringLength(string)).toThrow();
});
