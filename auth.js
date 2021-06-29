const { User } = require('./db/models');

const loginUser = (req, res, user) => {
  req.session.auth = {
    userId: user.id,
  };
  req.session.save(() => console.log('LOG IN!!!!!!!!!!', req.session.auth));

};

const logoutUser = (req, res) => {
  delete req.session.auth;

  req.session.save(() => res.redirect('/'));
  // console.log('LOGOUT!!!!!!!!!!', req.session.auth)
};

const requireAuth = (req, res, next) => {
  if (!res.locals.authenticated) {
    return res.redirect('/users/log-in');
  }
  return next();
};
const restoreUser = async (req, res, next) => {
  // Log the session object to the console
  // to assist with debugging.
  console.log(req.session);
  if (req.session.auth !== null) {
    const { userId } = req.session.auth;
    try {
      const user = await db.User.findByPk(userId);
      if (user) {
        res.locals.authenticated = true;
        res.locals.user = user;
        next();
      }
    } catch (err) {
      res.locals.authenticated = false;
      next(err);
    }
  } else {
    res.locals.authenticated = false;
    next();
  }
};

module.exports = {
    loginUser,
    logoutUser,
    restoreUser,
    requireAuth
};
