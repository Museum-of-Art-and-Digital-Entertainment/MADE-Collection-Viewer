module.exports = {
	/* Sanitizes queries users may enter so they can't mess with the database */
	escapeRegex: text => text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"),
}