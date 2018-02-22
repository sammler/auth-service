# auth-service

> Auth service (for sammler).

[![CircleCI](https://img.shields.io/circleci/project/github/sammler/auth-service.svg)](https://circleci.com/gh/sammler/auth-service)

---
<br/>
<br/>
## !!! NOTHING TO SHOW, YET. WORK IN PROGRESS. !!!
<br/>
<br/>
---

## About
_auth-service_ is a tiny, re-usable authentication service to be used in any microservices environment.

It is built on top of [express](https://expressjs.com/) , [passport](http://passportjs.org/) and [JWT](https://jwt.io/), therefore easy to extend and integrate.

### Basic functionality

- Registration of a user
- Login (and return a JWT token)
- Verify JWT token
- Logout
- Send password reset email
- Password reset
- Return the user's profile

## Social Authentication Providers

- GitHub

As currently only GitHub is implemented, is should be pretty straightforward to extend _auth-service_ with other authentication provider, such as:
 
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

## Configuration
_auth-service_ can be configured by the following environment variables:

- `PORT` - The port to run the REST API (defaults to `3010`).
- `JWT_SECRET` - The secret uses for JWT.

**MongoDB:**

- `MONGODB_DEBUG` - Whether to use the Mongoose debug mode or not, defaults to `false`
- `MONGODB_HOST` - MongoDB host, defaults to `localhost`.
- `MONGODB_PORT` - MongoDB port, defaults to `27017`. 

**Nodemailer:**   
(e.g for sending an account verification message):

- `NODEMAILER_API_USER` - 
- `NODEMAILER_API_KEY` - 
- `NODEMAILER_FROM` - 
- `NODEMAILER_BCC` - 

Nodemailer settings only need to be set if **one** of the following options are set to `true`:

- `ENABLE_ACCOUNT_VERIFICATION` - Force users to verify their accounts.
- `ENABLE_PWD_RESET` - Allow to reset the account's password.

## Usage

### Routes
Once the Http server is up and listening, the following routes can be used:

- `GET /health-check`
- `POST /v1/user/register`
- `GET /v1/user/status`
- `POST /v1/user/details`
- `POST /v1/verify-token`

## About

### Buildings docs
_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

### Tests
### Run tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

**Start MongoDB**:  
The following command will spin up a MongoDB instance to be used in the **integration tests** at port 27018 (to prevent conflicts with the default port).

```sh
$ npm run dc-dev-up
```

---

Then run one of the following options:

**Run all tests** (both unit and integration tests):
```sh
$ npm run test
```

**Run integration tests**:

```sh
// A running MongoDB instance is required
$ npm run test:integration
```

**Run unit tests**:
```sh
$ npm run test:unit
```

**Run all tests and generate code-coverage**:
```sh
$ npm run test:coverage
```

---

### Author
**Stefan Walther**

* [github/stefanwalther](https://github.com/stefanwalther)
* [twitter/waltherstefan](http://twitter.com/waltherstefan)

## License
MIT

