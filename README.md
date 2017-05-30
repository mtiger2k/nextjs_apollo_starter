# react-redux-graphql-passport-starter

[![npm version](https://badge.fury.io/js/react-apollo.svg)](https://badge.fury.io/js/react-apollo)
[![Get on Slack](https://img.shields.io/badge/slack-join-orange.svg)](http://www.apollostack.com/#slack)
[![Build Status](https://travis-ci.org/apollostack/react-apollo.svg?branch=master)](https://travis-ci.org/apollostack/react-apollo)

an example for next.js AdminLTE react-redux apollo/graphql application, with mongo backend support.

## About

This is a starter boilerplate app I've put together using the following technologies:

* [next.js](https://github.com/zeit/next.js)
* [MERGE-Stack](https://github.com/thebillkidy/MERGE-Stack)
* [AdminLTE](https://github.com/almasaeed2010/AdminLTE)
* [admin-lte-react](https://github.com/ucokfm/admin-lte-react)
* [redux-form](https://github.com/erikras/redux-form) to manage form state in Redux
* [graphql](https://github.com/facebook/graphql) GraphQL is a query language and execution engine tied to any backend service.
* [graphql-server-express](https://github.com/apollostack/graphql-server) GraphQL Server is a community-maintained open-source GraphQL server.
* [react-apollo](https://github.com/apollostack/react-apollo) Use your GraphQL server data in your React components, with the Apollo Client.
* [apollo-client](https://github.com/apollostack/apollo-client) Apollo Client can be used in any JavaScript frontend where you want to use data from a GraphQL server.
* [Express](http://expressjs.com)
* [Mongoose](https://github.com/Automattic/mongoose)
* [Redux Dev Tools](https://github.com/gaearon/redux-devtools) for next generation DX (developer experience). Watch [Dan Abramov's talk](https://www.youtube.com/watch?v=xsSnOQynTHs).

### Installation

## Running Dev Server

```bash
cd server
npm install
install mongo
npm run dev
```

## Running Client

```bash
cd client
npm install
copy node_modules/admin-lte to static folder
npm run dev
/register to sign up
/login to log in
```

## Explanation

#### Client Side

Use react-apollo and apollo-client to fetch data via graphql api.

#### API Server

Express with apollo server, using passport to authenticate.

---
Thanks for checking this out.

– Scott, Tian, [shaoqin.tian@hpe.com]