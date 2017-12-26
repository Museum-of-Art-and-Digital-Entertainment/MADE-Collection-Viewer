import axios from "axios";

export default {
  // Gets all books
  searchGet: function(options = {}) {
  	options.collected = true;
    return axios.get("/api/user/search/", { params:options });
  },
  // Gets the book with the given id
  getGame: function(id) {
    return axios.get("/api/game/" + id);
  },
  //TODO: Add call to user api where collected is true. 
  getPlatforms: function(options = {}) {
		return axios.get('/api/admin/platforms/', { params: options });
	}
};