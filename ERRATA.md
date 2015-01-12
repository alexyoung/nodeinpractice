# Node In Practice Errata

If you find any any errors in Node.js in Practice not listed below, or just find something that you think is not well explained, it would be most appreciated if you would post in the book's [Google Group](https://groups.google.com/forum/#!forum/nodejsinpractice) forum so that they may be collected here for everyone's benefit. Thanks!

### Formatting of newline characters

Some newline (`\n`) characters were truncated to simply an `n` character during production in various code examples in the book.  For instance:

Page 97, Listing 5.6

```js
lineIndex = this._buffer.indexOf('n');
```

should be

```js
lineIndex = this._buffer.indexOf('\n');
```
