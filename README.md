# Monster Box

A Candy Box style game where you catch monsters!

TODO: Write more into description here

## Installation

Install [Node](https://nodejs.org/en/download/package-manager/) on your local machine.

Install [MongoDB](https://docs.mongodb.org/manual/installation/) on your local machine.

Install the following Node tools:

* [Express](http://expressjs.com/): `npm install -g express`
* [Express code generator](http://expressjs.com/en/starter/generator.html): `npm install -g express-generator`
* [Yeoman](http://yeoman.io/) and pals: `npm install -g grunt-cli bower yo generator-karma generator-angular`
* [Nodemon](https://github.com/remy/nodemon): `npm install -g nodemon`

(You also need to install [Compass](http://thesassway.com/beginner/getting-started-with-sass-and-compass) and Live Reload onto your machine.)

Once you have all of those, go into the `client` directory and run `bower install` and `npm install`. Inside the `server` directory, run `npm install`.

## Usage

You will need multiple command line tabs open. At least three.

### Tab 1

Start MongoDB in the root directory with `mongod --dbpath data/db/ --logpath data/logs/mongodb.log --logappend`. 

If you're on Windows using Git Bash, run `C:/Mongodb/bin/mongod.exe --dbpath=data\\db\\ --logpath=data\\logs\\mongodb.log --logappend` where `C:/Mongodb/bin/mongod.exe` is where you installed your local version of Mongo. 

(If it doesn't start, you may need to create the `data`, `data/db` and `data/log` directories by hand.)

### Tab 2

Inside of the `client` directory, run `grunt serve` to build the client side.

(It will open a browser tab at `localhost:9000`, but you can close that.)

This process will monitor your files and rebuild the Angular app whenever it detects a file change. To stop it, use `ctrl+c` (sometimes you will need to if Grunt gets confused when you add in new modules or the like).

### Tab 3

Inside of the `server` directory, run `npm test`. Nodemon will monitor your files and restart npm whenever it detects a change (Note: this will destroy passport session data).

The website will now be served at `localhost:3000`.

Use `ctrl+c` to stop the server when you're done.


## Production Build

To build for production, inside of the client directory run `grunt --force`. To run the production distribution, inside of the server directory run `npm start`. 
For live server deployment, only the `server` directory with the latest grunt build is required.

## Dev Tips

### Angular

To create new Angular routes, inside of the client directory run `yo angular:route name` where `name` would be the name of the route you want to create.

### Express

Follow these steps to create a new route on the server side:

1. Create a new file at `server/router/routes/routename.js` where `routename` is the name of your new route.
2. Add your new route to the `server/router/index.js` file: `app.use('/routename', require('./routes/routename'));`

### MongoDB & Mongoose

To add a schema to the database, create a new file in `server/database/schemas` and include/export it in `server/database/index.js`. See `server/database/schemas/users.js` for an example.

### CSS

To modify the Bootstrap style variables, you can edit the `client/app/styles/_variables.scss` [SCSS file](http://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html).

To keep things nice and clean, create new stylesheet files in the `client/app/styles/partials/` directory named `_view.scss` where `view` would be the name of the view the styles are for. 
Include the partial into `client/app/styles/main.scss` using the [Sass `@import` directive](http://sass-lang.com/guide#topic-5):

```
@import "partials/view";
```

If you do not see your changes reflected in the site, restart your Grunt server (inside of `client`, `ctrl+c` if it's already running and then `grunt serve`).

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

TODO: Write history

## Credits

[Building an Angular and Express App](http://start.jcolemorrison.com/building-an-angular-and-express-app-part-1/) by J Cole Morrison

[Easy Node Authentication](https://scotch.io/tutorials/easy-node-authentication-setup-and-local) by Chris Sevilleja

[Anatomy of an Idle Game](http://www.gamedev.net/page/resources/_/technical/game-programming/anatomy-of-an-idle-game-a-starters-guide-to-angularjs-r3767) by Alexander Ballard

## Copyright and license

Code released under [the MIT license](https://github.com/KasiKarra/cs360PokeBox/blob/master/LICENSE.txt).
