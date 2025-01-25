import { describe } from 'vitest';
import { delay } from './delay';

describe('delay', () => {
	test('should delay the execution of the callback', async () => {
		const result = await delay(() => 5 + 5, 1000);
		expect(result).toBe(10);
	});
});
