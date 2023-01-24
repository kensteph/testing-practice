const capitalize = require('./js/capitalize');

test('should return a capitalize string', () => {
  let string = 'HaiTI';

  string = capitalize(string);

  expect(string).toBe('Haiti');
});
