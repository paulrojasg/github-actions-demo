const sum = require('./sum');

test('sums two numbers', () => {
    throw new Error('hey')
    expect(sum(4, 5)).toBe(7);
});