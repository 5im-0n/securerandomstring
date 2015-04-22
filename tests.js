var securerandomstring = require('./lib/securerandomstring.js');


//my awesome test framework
var test = function(name, what, ref, c) {
	process.stdout.write(name);

	if (typeof(c) !== 'boolean') {
		c = true;
	}

	if (typeof(what) === 'function') {
		what = what();
	}
	if (typeof(ref) === 'function') {
		ref = ref();
	}

	if ((what === ref) === c) {
		process.stdout.write(' ✓');
	} else {
		process.stdout.write(' ⛝\n');
		process.stdout.write('    ----> expected | ' + (typeof(ref) === 'string' ? ref.replace(/ /g, '·') + '\n' : ref + '\n'));
		process.stdout.write('    ----> got      | ' + (typeof(what) === 'string' ? what.replace(/ /g, '·') + '\n' : what + '\n'));
	}
	process.stdout.write('\n');
};



//the actual tests
securerandomstring(function(sr) {
	test('generate a random string 32 chars long',
		sr.length,
		32
	);
});

securerandomstring({length: 1}, function(sr) {
	test('generate a random string 1 char long',
		sr.length,
		1
	);
});

securerandomstring({length: 256}, function(sr) {
	test('generate a random string 256 chars long',
		sr.length,
		256
	);
});

securerandomstring({length: 256, urlsafe: true}, function(sr) {
	test('generate a urlsafe random string 256 chars long',
		sr.length,
		256
	);
});


