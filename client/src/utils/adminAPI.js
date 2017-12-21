import axios from 'axios';

export default {
	getGames: function(options = {}) {
		return axios.get('/api/admin/games/', { params: options } );
	},
	getPlatforms: function(options = {}) {
		return axios.get('/api/admin/platforms/', { params: options });
	},
}