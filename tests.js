var srs = require('./lib/secure-random-string.js');


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



// async tests
srs(function(err, sr) {
	test('generate a random string 32 chars long',
		sr.length,
		32
	);
});

srs({length: 1}, function(err, sr) {
	test('generate a random string 1 char long',
		sr.length,
		1
	);
});

srs({length: 256}, function(err, sr) {
	test('generate a random string 256 chars long',
		sr.length,
		256
	);
});


// sync tests
test('generate a random string 32 chars long (sync)', srs().length, 32);
test('generate a random string 1 chars long (sync)', srs({length:1}).length, 1);
test('generate a random string 256 chars long (sync)', srs({length:256}).length, 256);


//in 2000 chars there should be at least one substitution
test('check that the random string is urlsafe', (function() {
	var s = srs({length: 2000});
	return s.indexOf('+') + s.indexOf('/') === -2;
})(), true);
