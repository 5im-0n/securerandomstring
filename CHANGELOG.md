
# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [1.0.0] 2015-08-27

### New Features

 - New sync API was added. Like crypto.getRandomBytes(), it can throw an exception if the system 
   is short on entropy. (#1, @markstos)

### Breaking changes

- Async API now follows the Node.js convention of returning an error as the first argument
  to the callback. The error might be populated if the system runs out of entropy. (#2, @markstos)
