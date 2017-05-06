# Todo Challenge

A simple Todo application built mainly with [Vue](https://vuejs.org) for the frontend, [mongoose](http://mongoosejs.com/) for the Database, and Node's [Express](https://expressjs.com/) framework for the server-side code and API. 

## Getting Started

To **install** this simply run 

```
git clone https://github.com/Faultless/todo-challenge.git
```

to get a copy of the repository locally.
Then simply **execute the following command** at the root of the application:

```
npm start
```

This command will **start our express server**. You can then **navigate to** `localhost:3000/` in order to test the application.

### Prerequisites

Please note that you will need the latest version of Node available [here](https://nodejs.org/en/) in order to run this application, as well as node's package manager [npm](https://www.npmjs.com/).

The database used is hosted on [MLab](https://mlab.com) and requires no further configuration. 

### Installing

In order to **setup a development environment** for this project, simply run the following command after cloning the repo:

```
npm install
```

> Note that this will take a while especially on slow connections since the project has a lot of dependencies.

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

## Improvements and Fixes Checklist

- [ ] Testing Modules for the API.
- [ ] Editing of Todos.
- [ ] Generate Documentation using [JSDocs](http://usejsdoc.org/).

## Author

* **Serge R. Kamel** - *Initial work* - [Faultless](https://github.com/Faultless)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* This challenge was provided by **Georges Haddad**.
* Inspired by Vue's TodoMVC example. 