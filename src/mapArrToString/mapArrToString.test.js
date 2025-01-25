import { mapArrToString } from './mapArrToString';

describe('mapArrToString', () => {
	test('should return an array of strings', () => {
		const arr = [1, 2, 3, 4, 5];
		const result = mapArrToString(arr);
		expect(result).toEqual(['1', '2', '3', '4', '5']);
	});
	test('Random value', () => {
		const arr = [1, null, '', 2, 3, undefined, 4, 'dsdfsdf', 5];
		const result = mapArrToString(arr);
		expect(result).toEqual(['1', '2', '3', '4', '5']);
	});
	test('empty arr', () => {
		const arr = [];
		const result = mapArrToString(arr);
		expect(result).toEqual([]);
	});
	test('rejection', () => {
		const arr = [1, 2, 3];
		const result = mapArrToString(arr);
		expect(result).not.toEqual([1, 2, 3]);
	});
});
