# Front-End-Tools: GulpJS, Live Reload, JavaScript, ReactJSX, CSS and Sass

State-of-the-art development boilerplate, with all the set-up done for you :)

## Quick start

1. Clone the git repo — `git clone https://github.com/jsa41394/Front-End-Tools`;
2. Install dependences - `npm install`;
3. Enjoy!

## Features

* Gulp ready;
* Browser sync;
* Placeholder crossbrowser ready;
* Comes with twitter bootstrap;

####Browser Sync with dynamic files

If you want to work with dynamic files like `.php`, it's necessary make some changes on gulpfile.js.

Change the value of `var extension` - Line 28 - to `'php'`.

Remove (or make a comment) on these lines:

```
70	server: {
71		baseDir: "./"
72	}

...

109	server: {
110		baseDir: "./"
111	}
```

Uncomment the lines below:

```
74	//proxy: "localhost/html-skeleton-gulp/"

...

113 //proxy: "localhost/html-skeleton-gulp/"
```

*Note: You must have an apache server running (like WAMP, MAMP, LAMP or native). Declare as the value of the proxy, the directory of your project folder located in the files of apache.*

####Adapted from https://github.com/samwx/html-skeleton-gulp.git