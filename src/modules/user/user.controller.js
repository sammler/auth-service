const ExpressResult = require('express-result');
const HttpStatus = require('http-status-codes');
const passport = require('passport');

const UserModel = require('./user.model').Model;

class UserController {

  // Todo: Validation could be generalized and probably broken out.
  static register(req, res, next) {

    const validationErrors = new ExpressResult.ValidationErrors();
    if (!req.body.username) {
      validationErrors.add('Property <username> missing.');
    }
    if (!req.body.password) {
      validationErrors.add('Property <password> missing.');
    }
    if (!req.body.email) {
      validationErrors.add('Property <email> missing.');
    }

    if (validationErrors.length > 0) {
      return ExpressResult.error(res, validationErrors);
    }

    const user = new UserModel();
    user.username = req.body.username;
    user.email = req.body.email;
    user.setPassword(req.body.password);

    // Todo: as promise
    user.save(err => {

      // Todo: Test error handling
      if (err) {
        return next(err);
      }

      const token = user.generateJwt();
      res.status(HttpStatus.CREATED);
      res.json({
        token
      });
    });
  }

  // Todo: What should a failed login return, 400
  // Todo: Investigate how to properly use next() here
  static login(req, res) {

    const validationErrors = new ExpressResult.ValidationErrors();
    if (!req.body.username) {
      validationErrors.add('Property <username> missing.');
    }

    if (!req.body.password) {
      validationErrors.add('Property <password> missing.');
    }

    if (validationErrors.length > 0) {
      return ExpressResult.error(res, validationErrors);
    }

    passport.authenticate('local', (err, user, info) => {

      // If Passport throws/catches an error
      if (err) {
        return ExpressResult.err(err);
      }

      // If a user is found
      if (user) {
        const token = user.generateJwt();
        return ExpressResult.ok(res, {token});
      }

      // No user found
      return ExpressResult.unauthorized(res, info);

    })(req, res);
  }

  /**
   * Removes the session token and redirects the user to /
   *
   * @Todo: Make configurable where to redirect to.
   *
   * @param req
   * @param res
   * @param next
   */
  static logout(req, res, next) {
    next();
  }

  /**
   * Returns application/json with the user details for the cookie/token passed in the request.
   *
   * @param req
   * @param res
   * @param next
   */
  static status(req, res, next) {
    next();
  }

  static verifyToken(req, res, next) {
    next();
  }

  static details(req, res, next) {
    next();
  }

}

module.exports = UserController;