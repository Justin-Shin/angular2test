# Angular (Angular 2, AngularJS 2.x)
I chose to look at Angular 2 because we already learned Angular, and I wanted to see the differences.  Needless to say, they are about as similar as Java and Javascript are to each other.

I didn't look too much into Angular 2, but I know it is used where I work, so I wanted to look at it.

Angular 2 is a component based front-end framework, and it's pretty cool, as it gets rid of the idea of $scope and controllers, the "components" basically taking on that role.  One might use this instead of AngularJS if they wanted something that was more modular for greater separation of concerns.

As AngularJS gained popularity and more functionality was added to its library, Google and Angular contributors decided to rewrite/rebuild the Framework with the goal of reducing the learning curve and increasing performance (very contentious).  In the end, Angular 2 and AngularJS are completely different animals with little in common between the two.   AngularJS utilized an MVC framework, utilizing controllers, views, services, etc., that are tightly knit together, but Angular 2 is component based, which are loosely connected.  It eschews the traditional model of controllers etc. and has a tree-like structure with components that aren't strictly dependent on each other.  This allows for greater modularity.  yay!

I don't like it.  But maybe that's because it's different from what I'm used to, and it's something I thought would be more similar to AngularJS.  As a standalone, I might appreciate it more, since (using the ng CLI) it was much easier to set up on the whole, but harder to grasp conceptually.  Once again, probably because I was still in the Angular mindset!

I built my example app off this website: https://www.sitepoint.com/angular-2-tutorial/

The structure is almost the same as what they give you, but I added small changes to the code to add additional toggles, and relationships between them.

What are 3 interview questions one might be asked about this technology?


## To Run my example:
Install the angular-cli by typing `$ npm install -g angular-cli` into the terminal
Clone down the repo and cd into the directory
run `$ ng serve`
Go to http://localhost:4200/




# Ang2Library

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
