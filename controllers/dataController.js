const db = require("../models");
const request = require("request");
const convert = require('xml-js');
// Controller for handling the collection 
module.exports = {
	getGamesDB: function() {
		request("http://thegamesdb.net/api/GetPlatformsList.php", function(error, response, xml) {
			const result = convert.xml2json(xml);
			console.log(result);
		});
	},
}