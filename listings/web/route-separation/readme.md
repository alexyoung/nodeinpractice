## Node in Practice

### Express Route Separation Example

The `app_monolithic.js` file contains an example of an Express application that uses a single file.

This has been separated out into routes files, and an additional server file.  The server file makes it easier to require the main `app.js` module without starting a server, so you can write tests, or load `app.js` from other modules.
