const Calculator = require('./js/Calculator');

describe('Calculator', () => {
  test('Add 3+3, should return 6', () => {
    const cal = new Calculator();

    cal.a = 3;
    cal.b = 3;

    expect(cal.add()).toBe(6);
  });
  test('Substract 10-20 should return -10', () => {
    const cal = new Calculator();

    cal.a = 10;
    cal.b = -20;

    expect(cal.substract()).toBe(-10);
  });
  test('Divide 10/20 should return 0.5', () => {
    const cal = new Calculator();

    cal.a = 10;
    cal.b = 20;

    expect(cal.divide()).toBe(0.5);
  });
  test('Multiply 4*5 should return 20', () => {
    const cal = new Calculator();

    cal.a = 4;
    cal.b = 5;

    expect(cal.multiply()).toBe(20);
  });
});
