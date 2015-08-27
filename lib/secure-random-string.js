var crypto = require('crypto');

function srs(options, cb) {
	if (typeof(options) === 'function') {
		cb = options;
		options = {};
	} else {
		options = options || {};
	}

	var length = options['length'] || 32;

	// async path
	if (cb) {
		crypto.randomBytes(length, function(err, buf) {
			if (err) {
				return cb(err);
			}
			return cb(null,_finish(buf));
		});
	}
	// sync path
	else {
		return _finish(crypto.randomBytes(length));
	}

	function _finish (buf) {
		var string = buf.toString('base64');
		string = string.replace(/\//g,'_').replace(/\+/g,'-');
		return string.substr(0, length);
	}

};



module.exports = srs;
