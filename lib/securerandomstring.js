var crypto = require('crypto');

function securerandomstring(cb, options) {
	options = options || {};
	var length = options['length'] || 32;

	crypto.randomBytes(length, function(ex, buf) {
		if (ex) throw ex;

		var string = buf.toString('base64');
		cb(string.substr(0, length));
	});

};


module.exports = securerandomstring;
