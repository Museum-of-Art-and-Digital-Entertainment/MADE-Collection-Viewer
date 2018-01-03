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
		return axios.put('/api/admin/game/update/' + game._id, game);
	},
	// Download the details of a game from thegamesDB.net
	// id is the game id parameter referencing thegamesDB.net game id
	downloadDetails: function(id) {
		return axios.get('/api/admin/game/download/' + id); 
	},

	createGame: function(game) {
		return axios.post('/api/admin/game/create', game);
	},
}