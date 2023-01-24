const reverseString = require('./js/reverseString');

test('Should reverse the string', () => {
  // Arrange
  const string = 'JavaScript';

  // Act
  const reversedString = reverseString(string);
  
  // Assert
  expect(reversedString).toBe('tpircSavaJ');
});
