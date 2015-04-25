# secure-random-string
a node module that generates a secure random string with a given length

## Usage
`require` it

```
var srs = require('secure-random-string');
```


generate a random string that is 32 chars long (the default)
```
srs(function(sr) {
	console.log(sr);
});
```


generate a random string that is 256 chars long
```
srs({length: 256}, function(sr) {
	console.log(sr);
});
```


generate a random string that is 20 chars long and is url safe (can be used as a url token)
```
srs({length: 20, urlsafe: true}, function(sr) {
	console.log(sr);
});
```
