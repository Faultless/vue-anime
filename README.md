# Todo Challenge

A torrenting web application built mainly with [Vue](https://vuejs.org) for the frontend, [mongoose](http://mongoosejs.com/) for the Database, and Node's [Express](https://expressjs.com/) framework for the server-side code and API. 

## Getting Started

To **install** this simply run 

```
git clone https://github.com/Faultless/vue-anime.git
```

to get a copy of the repository locally.
Then simply **execute the following commands** at the **root** of the application:

```
npm install
npm start
```
> Note that the first command will take a while to execute especially on slow connections since the project has a lot of dependencies.

The second command will **start our express server**. You can then **navigate to** `localhost:3000/` in order to test the application.

### Prerequisites

Please note that you will need the latest version of Node available [here](https://nodejs.org/en/) in order to run this application, as well as node's package manager [npm](https://www.npmjs.com/).

The database used is hosted on [MLab](https://mlab.com) and requires no further configuration. 

### Installing

In order to **setup a development environment** for this project, do the following.

This project uses [webpack](https://webpack.js.org/guides/installation/) in order to **bundle all Scripts as well as Styles and Assets automatically**.

To make use of this bundler, first we need to **install webpack globally**

```
npm install webpack -g
```

then run

```
webpack -w
```

in the root folder of our application for **webpack to watch** for any changes in the files.

## Documentation

Checkout the [Docs](docs) for a quick overview of the important methods in use as well as variables.

## Improvements and Fixes Checklist

- [ ] Generate Documentation using [JSDocs](http://usejsdoc.org/).
- [ ] Add Authentication mechanism.
- [ ] Anime/videos API building.
- [ ] Testing Modules for the API.
- [ ] Responsive Design.
- [ ] Code Clean-up.
- [ ] Separate Prod and Dev bundling (webpack).

## Author

* **Serge R. Kamel** - *Initial work* - [Faultless](https://github.com/Faultless)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Inspired by Vue's TodoMVC example. 