import axios from 'axios';
import { mapArrToString } from '../mapArrToString/mapArrToString';

export const getData = async () => {
	try {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/posts'
		);
		const userIds = response.data.map(post => post.userId);
		const strUserIds = mapArrToString(userIds);

		return strUserIds;
	} catch (error) {
		console.error(error);
	}
};
