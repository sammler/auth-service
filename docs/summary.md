_{%= name%}_ is a tiny, re-usable authentication service to be used in any microservices' environment.

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

- [x] Local database (MongoDB)

### Social Authentication Providers

Current, only the local strategy is implemented (saving the user in the given MongoDB instance), but it should be pretty straightforward to extend _{%= name%}_ with other authentication provider, such as:

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
