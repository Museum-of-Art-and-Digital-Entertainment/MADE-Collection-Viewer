import axios from 'axios';

export default {
	getGames: function(options = {}) {
		return axios.get('/api/admin/games/', { params: options });
	},
	getPlatforms: function(options = {}) {
		return axios.get('/api/admin/platforms/', { params: options });
	},
	getCount: function(options = {}) {
		return axios.get('/api/admin/games/count', { params: options });
	},
	updateGame: function(game) {
		return axios.put('/api/admin/game/update/' + game.id, game );
	},
	downloadDetails: function(id) {
		return axios.get('/api/admin/game/download/' + id); 
	}
}