var crypto = require('crypto');

function securerandomstring(options, cb) {
	if (typeof(options) === 'function') {
		cb = options;
		options = {};
	} else {
		options = options || {};
	}
	var length = options['length'] || 32;

	crypto.randomBytes(length, function(ex, buf) {
		if (ex) throw ex;

		var string = buf.toString('base64');
		if (options.urlsafe) {
			string = string.replace(/\//g,'_').replace(/\+/g,'-');
		}

		cb(string.substr(0, length));
	});

};


module.exports = securerandomstring;
