import jsonPH from '../apis/jsonPH';
import _ from 'lodash';

export const fetchPosts = () => {
	return async (dispatch) => {
		const response = await jsonPH.get('/posts');

		dispatch({
			type: 'FETCH_POST',
			payload: response.data
		});
	};
};

// export const fetchUser = (id) => {
// 	return async (dispatch) => {
// 		const response = await jsonPH.get(`/users/${id}`);

// 		dispatch({
// 			type: 'FETCH_USER',
// 			payload: response.data
// 		});
// 	};
// };

export const fetchUser = (id) => {
	return (dispatch) => {
		_fetchUser(id, dispatch);
	};
};

const _fetchUser = _.memoize(async (id, dispatch) => {
	const response = await jsonPH.get(`/users/${id}`);

	dispatch({
		type: 'FETCH_USER',
		payload: response.data
	});
});
