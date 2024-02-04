const sum = require('./sum');

test('sums two numbers', () => {
    expect(sum(4, 8)).toBe(7);
});