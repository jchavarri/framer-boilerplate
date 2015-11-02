# framer-boilerplate
A boilerplate Framer project that uses Gulp for live reload and Coffescript compilation + Browserify to include modules

## Get started

- Run `npm install` from the project folder
- Run `gulp`. If you have not installed it: `npm install -g gulp`
- Open `http://localhost:3000` on Chrome
- Start working in `app/app.coffee`. Any changes on the Framer code will refresh the browser

## Submodules

You can include submodules in any folder structure you want. In the sample code included, you can see a module called `myModule` on the `modules` folder. To include it:

`MyModule = require("./modules/myModule.coffee")`

## About the 'framerjs' npm package

The version of the framer npm package is pointing to a very old commit, due to the npm version of Framer not being updated. If you want to work with a more advanced version than the one provided with `framer-boilerplate`, just replace the commit sha in the package.json file.