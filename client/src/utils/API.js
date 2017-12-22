import axios from "axios";

export default {
  // Gets all books
  searchGet: function(options = {}) {
    return axios.get("/api/user/search/", { params:options });
  },
  // Gets the book with the given id
  getGame: function(id) {
    return axios.get("/api/game/" + id);
  }
};