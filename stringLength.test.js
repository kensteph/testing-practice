const stringLength = require('./js/stringLength');

test('Should return correct length', () => {
  // Arrange
  const string = 'Testing';

  // Act
  const length = stringLength(string);

  // Assert
  expect(length).toEqual(7);
});

test('Should throw error if string length <1 or >10', () => {
  // Arrange
  const string = 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';

  // Act
  // const length = stringLength(string);

  // Assert
  expect(() => stringLength(string)).toThrow();
});
