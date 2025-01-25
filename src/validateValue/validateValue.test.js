import { validateValue } from './validateValue';

describe('validateValue tests', () => {
	test('Validation correct value', () => {
		expect(validateValue(50)).toBe(true);
	});
	test('Validation negative incorrect value', () => {
		expect(validateValue(-110)).toBe(false);
	});
	test('Validation positive incorrect value', () => {
		expect(validateValue(110)).toBe(false);
	});
	test('Validation of corner case 1', () => {
		expect(validateValue(0)).toBe(true);
	});
	test('Validation of corner case 2', () => {
		expect(validateValue(100)).toBe(true);
	});
});
