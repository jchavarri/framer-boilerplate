# framer-boilerplate
A boilerplate FramerJS project that uses Gulp for live reload and CoffeScript transpilation<sup>1</sup> + Browserify to include modules.

This project is forked from [jchavarri/framer-boilerplate](https://github.com/jchavarri/framer-boilerplate) which appears to have gone quiet for the time being. I'll keep it up to date and will add some Windows Fluent Design goodies by default courtesy of the [Windows Framer Toolkit](https://github.com/Microsoft/windows-framer-toolkit).

## Why?

This project will help you if you:

- Use Framer modules
- Have projects that depend on MANY Framer modules, and need to reorganize them in subfolders inside the `modules` folder
- Are unable to use Framer Studio for whatever reason. This should work on any OS. 
- Love VS Code, Atom, *your_favorite_editor_here* and don't feel like moving to anything else :)

## Before starting

1. Install [NodeJS](https://nodejs.org/en/download/)
2. Install [Git](https://git-scm.com/)

## Get started

- Run `npm install` from the project folder. This will install all the required dependencies
- Run `gulp`. If you have not installed it: `npm install -g gulp`
- Open `http://localhost:3000` in a browser (Edge, Chrome, Firefox, etc...)
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

You can add as many submodules as you want in the `modules` folder. In the sample code included, there are a few modules from the [Windows Framer Toolkit](https://github.com/Microsoft/windows-framer-toolkit). At the top of `app.coffee` you can see how we reference the modules in the modules forlder: for instance:

`{SystemColor} = require 'SystemColor'`

You can create subfolders in the `modules` folder and include it using:

`{MyModule} = require("subfolder/MyModule")`

**NOTE:** At the moment, Framer Studio expects all submodules to be in a flat `modules` folder. If you create complex folder hierarchies inside the `modules` folder, you won't be able to open your project in Framer Studio.

## About the 'framerjs-prebuilt' github package

To avoid compiling Framer on Windows machine, where the `make` command is not available by default, this boilerplate includes a precompiled version of Framer that I keep updating on [this repo](https://github.com/joeday/framerjs-prebuilt). If you notice the current version of Framer is out of date, feel free to send a pull request there with the latest. Instructions are included in [that repository's README.md](https://github.com/joetheday/framerjs-prebuilt/blob/master/README.md).

<sup>1</sup>Does this word even exist??