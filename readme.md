# login-text

> Set the login window text in *(OS X)*

*This will ask for sudo password*


## Install

```
$ npm install --save login-text
```


## CLI

```
$ npm install --global login-text
```

```
$ login-text --help

  Example
    $ login-text "Welcome to my computer"
```


## Usage

```js
const loginText = require('login-text');

loginText('Welcome to my computer').then(() => {
	console.log('Login text is now set');
});
```


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
