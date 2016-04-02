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

(You may also need to install [Compass](http://thesassway.com/beginner/getting-started-with-sass-and-compass) onto your machine.)

## Usage

(Note: you will need multiple command line tabs open. At least three.)

Start MongoDB in the root directory with `mongod --dbpath data/db/ --logpath data/logs/mongodb.log --logappend`.

Inside of the client directory, run `grunt serve` to build the client side. Use `ctrl+c` to stop the builder.

Inside of the `server` directory, run `npm test`. Use `ctrl+c` to stop the server when you're done.

To build for production, inside of the client directory run `grunt --force`. To run the production distribution, inside of the server directory run `npm start`. 
For live server deployment, only the `server` directory with the latest grunt build is required.

TODO: Write more usage instructions here

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

## Copyright and license

Code released under [the MIT license](https://github.com/KasiKarra/cs360PokeBox/blob/master/LICENSE.txt).