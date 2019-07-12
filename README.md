# secure-random-string

Node.js module that generates a cryptographically secure random string with a given length

## Usage

```javascript
var srs = require('secure-random-string');
```

### Default behavior: Generate a random Base64 encoded string 32 characters long.

This may include alphanumeric characters as well as the following characters: +, /, =.

```javascript
// Sync
var result = srs();

// Async
srs(function(err, sr) {
	console.log(sr);
});

```

### Options: length

Optionally, you can specify a 'length' option to specify a length.

```javascript
// sync
var result = srs({length: 256});

// async
srs({length: 256}, function(err, sr) {
	console.log(sr);
});
```
### Options: alphanumeric

Optionally, you can specify a 'alphanumeric' option to get a alphanumerical chars only.

```javascript
// sync
var result = srs({alphanumeric: true});

// async
srs({alphanumeric: true}, function(err, sr) {
	console.log(sr);
});
```
## Error handling


An error is possible if there is not enough accumulated entropy to generate cryptographically strong data. In other words, this will not block even if all entropy sources are drained. Note that the sync API throws an exception, while
the async API returns the error to the callback.

## Author

 [Simon Santoro](https://github.com/S2-)

## Contributors

 [Mark Stosberg](https://github.com/markstos)  
 [Sandro Gomez](https://github.com/mrsangrin)

## License

[MIT](https://opensource.org/licenses/MIT)
