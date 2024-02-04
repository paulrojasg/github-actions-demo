const sum = require('./sum');

test('sums two numbers', () => {
    expect(sum(4, 5)).toBe(7);
});