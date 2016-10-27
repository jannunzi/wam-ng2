# WebAppMaker Frontend Built on Angular 2

This is the Frontend component for Web App Maker App built using [angular-cli](https://github.com/angular/angular-cli) - a command-line utility developed by [angular](https://github.com/angular).

I would **highly recommend** you to get a feel of ** [Angular-CLI](https://github.com/angular/angular-cli)** before starting up with this project.

The project is a very much work in progress.

## Prerequisites

Both the CLI and generated project have dependencies that require Node 4 or higher, together with NPM 3 or higher.

You can update your Node/NPM versions using a simple utility [nvm](https://github.com/creationix/nvm).

## Setting Up

**BEFORE YOU SET UP:** please read the [prerequisites](#prerequisites).

* Install the angular-cli **globally**:
```bash
npm install -g angular-cli
```

* Ensure that the CLI is setup by trying the usage:
```bash
ng --help
```

* Clone the [wam-ng2](https://github.com/parthahluwalia/wam-ng2) repo:
```bash
git clone https://github.com/parthahluwalia/wam-ng2.git
```

* Install the required packages:
```bash
npm install
```

## WAM ng2 Development

If you wish to collaborate on development in the project, please request access to the repo by emailing us at:
ahluwalia.p@husky.neu.edu | jannunzi@gmail.com

## App Architecture Overview

We build the Frontend and Middleware components of the app separately. 

Middleware app is served off of a Node.js express server and hosts all of our API and relevant backend data. You can find our APIs and database [here](https://github.com/jannunzi/WebAppMaker).

The Frontend app, as scaffolded by [angular-cli](https://github.com/angular/angular-cli) uses [webpack](https://webpack.github.io/docs/) as its build system since it comes with a lot of benefits as compared to conventional frontend package management systems like bower, browserify, etc. 

Hence the Frontend app is served on the [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) which in itself is a lite Node.js Express server.

In _Dev Environment_, we run our **frontend** server at `http://localhost:4200` and **middleware** server at `http://localhost:3000`.

### Proxy to Backend

Since our Frontend and Middleware apps live on different servers, we use the **proxying support** in webpack's dev server through which we hijack the url calls to our APIs and send them to the backend server.
We do this by passing the file containing the proxy config to `--proxy-config`. This file is called `proxy.conf.json` and lives in the root folder of our app structure right next to `package.json`. 

```javascript
{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false
  }
}
```

So any calls to `/api` on the frontend server (`http://localhost:4200`) will be proxied to our middleware server running at `http://localhost:3000`. 

We then configure the npm start script by editing `package.json' file:
```javascript
"start": "ng serve --proxy-config proxy.conf.json",
```

So we'll run our frontend app by using `npm start` instead of plain old `ng serve`.
