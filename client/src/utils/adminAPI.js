import axios from 'axios';

export default {
	getGames: function() {
		let options = {}
		if(typeof arguments[0] === Object) {
			options = arguments[0];
		}
		return axios.get('/api/admin/games/', options);
	},
}