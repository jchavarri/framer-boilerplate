# framer-boilerplate
A boilerplate FramerJS project that uses Gulp for live reload and CoffeScript transpilation<sup>1</sup> + Browserify to include modules

## Why?

This project will help you if you:

- Work usually editing Framer modules, that you need to change and test quickly
- Have projects that depend on MANY Framer modules, and need to reorganize them in subfolders inside the `modules` folder
- Need to work and transpile Framer CoffeeScript projects on operating systems different than OSX (mainly Windows and Linux).
- Love Sublime, vi, *your_favorite_editor_here* and won't move to anything else :)

## Before starting

To use this project, you will first need to install NodeJS. You can do it from [the official website](https://nodejs.org/en/download/). 

## Get started

- Run `npm install` from the project folder. This will install all the required dependencies
- Run `gulp`. If you have not installed it: `npm install -g gulp`
- Open `http://localhost:3000` on Chrome
- Start working in `app/app.coffee`. Any changes on the Framer code will refresh the browser

## Exporting a project to Framer Studio

If you want to create a Framer Studio project to be shared, you just need to:

- Run `gulp export` when you think your project is ready to be exported
- Open the `framer-boilerplate.framer` in the `exports` folder with Framer Studio
- Update the project if asked

There are two known limitations for this export process:

1. Your prototype can have errors if the versions of Framer are not aligned, depending on the Framer features you are using
2. If you use complex submodules folder structure, your submodules won't be loaded (see 'Submodules' below)

## Submodules

You can add as many submodules as you want in the `modules` folder. In the sample code included, you can see a module called `myModule`. To include it:

`MyModule = require("myModule")` (same as in Framer Studio)

You can create subfolders in the `modules` folder and include it using:

`MyModule = require("subfolder/myModule")`

**NOTE:** At the moment, Framer Studio expects all submodules to be in a flat `modules` folder. If you create complex folder hierarchies inside the `modules` folder, you won't be able to open your project on Framer Studio.

## About the 'framerjs-prebuilt' npm package

To avoid compiling Framer on Windows machine, where the `make` command is not available by default, this boilerplate includes a precompiled version of Framer that I keep updating on [this repo](https://github.com/jchavarri/framerjs-prebuilt). This process is done manually at the moment, so let me know if you run into problems with the current version of FramerJS included. If you have any idea to make this process cleaner or easier, please let me know.

<sup>1</sup>Does this word even exist??