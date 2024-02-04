const sum = require('./sum');

test('sums two numbers', () => {
    expect(sum(4, 3)).toBe(7);
});