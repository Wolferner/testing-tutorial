import { afterAll, afterEach, beforeAll, describe, vitest } from 'vitest';
import { square } from './square';

describe('square', () => {
	let mockValue;
	beforeEach(() => {});
	beforeAll(() => {});
	test('should return the square of a number', () => {
		const result = square(5);
		expect(result).toBe(25);
		expect(result).toBeLessThan(26);
		expect(result).toBeGreaterThan(24);
		expect(result).not.toBeUndefined();
	});

	test('pow must work once', () => {
		const spyMathPow = vitest.spyOn(Math, 'pow');
		square(2);
		expect(spyMathPow).toBeCalledTimes(1);
	});

	test('no call of pow', () => {
		const spyMathPow = vitest.spyOn(Math, 'pow');
		square(1);
		expect(spyMathPow).toBeCalledTimes(0);
	});

	afterEach(() => {
		vitest.clearAllMocks();
	});

	afterAll(() => {});
});
