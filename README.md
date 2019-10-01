# auth-service

> Auth service.

[![CircleCI](https://img.shields.io/circleci/project/github/stefanwalther/auth-service.svg)](https://circleci.com/gh/stefanwalther/auth-service)
[![XO code style](https://img.shields.io/badge/code_style-XO--space-5ed9c7.svg)](https://github.com/sindresorhus/eslint-config-xo-space)

---
<br/>
<br/>
## !!! NOTHING TO SHOW, YET. WORK IN PROGRESS. !!!
<br/>
<br/>
---

## Summary
_auth-service_ is a tiny, re-usable authentication service to be used in any microservices environment.

It is built on top of [express](https://expressjs.com/) , [passport](http://passportjs.org/) and [JWT](https://jwt.io/), therefore easy to extend and integrate.

### Basic functionality

- [x] Registration of a user
- [x] Login (and return a JWT token)
- [x] Verify JWT token
- [x] Logout
- [x] Mark a user as deleted (cannot login anymore)
- [x] Mark a user as undeleted (can login again)
- [x] Verify the users email
- [ ] Send password reset email
- [ ] Password reset
- [ ] Return the user's profile

### Authentication Providers

- [x] Local

### Social Authentication Providers

As currently only GitHub is implemented, is should be pretty straightforward to extend _auth-service_ with other authentication provider, such as:

- GitHub 
- auth0
- saml
- oauth/oauth2
- DropBox
- Google
- Facebook
- LinkedIn
- OpenId
- ...

Just have a look at [passports.js](http://passportjs.org/) and the supported strategies.

## Installation
```bash
$ docker run -it stefanwalther/auth-service
```

## Configuration
_auth-service_ can be configured by the following environment variables:

**General:**

- `PORT` - The port to run the REST API (defaults to `3010`).
- `JWT_SECRET` - The secret used for JWT, defaults to `foo`'
- `NODE_ENV` - Environment settings for the service (`production`, `development` or `test`), defaults to `development`.

**MongoDB:**

Provide the connection to MongoDB either by providing a full connection string:

- `MONGODB_CONNECTION_STRING` - The full MongoDB connection string.

or by providing details of the connection:

- `MONGODB_DATABASE` - The MongoDB database, defaults to `db`.
- `MONGODB_HOST` - MongoDB host, defaults to `localhost`.
- `MONGODB_PORT` - MongoDB port, defaults to `27017`. 
- `MONGODB_DEBUG` - Whether to use the Mongoose debug mode or not, defaults to `false`.

**NATS-Streaming:**

- `NATS_STREAMING_HOST` - The NATS-Streaming host, defaults to `localhost`.
- `NATS_STREAMING_PORT` - The NATS-Streaming port, defaults to `4222`.

**Nodemailer:**
(e.g for sending an account verification message):

- `NODEMAILER_TRANSPORT` - The transport for Nodemailer (possible options: `postmark`).

Depending on the transporter for Nodemailer the following options can be set:

Postmark:

- `POSTMARK_API_TOKEN` - Postmark`s Server API Token.

Nodemailer settings only need to be set if **one** of the following options are set to `true`:

## Usage

## API

All endpoints are documented through OpenApi/Swagger using

http://localhost:3010/api-docs

## Contribute

<details>
<summary>Development environment</summary>

### Start the development environment

To start the development environment, go for

```sh
$ make up
```

This will essentially:

- Start MongoDB
- Start RabbitMQ (management UI available at: http://localhost:15672/)
- Start a server running the auth-service (http://localhost:3010)
- Watch changes and re-start the server

### Only required services

If you only want to run required services (e.g. MongoDB, RabbitMQ, etc.) and run the node.js process on your machine, then go for

```sh
$ make up-deps
```

Then start the server using

```sh
$ npm run start:watch
```

The API is available at http://localhost:3010
</details>

<details>
<summary>Run tests</summary>

### Run tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

**Start MongoDB**:  
The following command will spin up a MongoDB instance to be used in the **integration tests** at port 27018 (to prevent conflicts with the default port).

```sh
$ npm run dc-dev-up
```

---

Then run one of the following options:

**Run integration tests**:

Spins up all required dependent services to run the integration tests and runs the integration tests:

```sh
$ make build-run-integration-tests
```

**Run unit tests**:
```sh
$ make build-run-unit-tests
```

---

</details>

<details>
<summary>Update docs & readme</summary>

### Building docs

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
make gen-readme
```
</details>

## About

### Author
**Stefan Walther**

* [github/stefanwalther](https://github.com/stefanwalther)
* [twitter/waltherstefan](http://twitter.com/waltherstefan)

## License
MIT

