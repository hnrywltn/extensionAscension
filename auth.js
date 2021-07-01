const { User } = require('./db/models');

const loginUser = (req, res, user) => {
  req.session.auth = {
    userId: user.id,
  };
  req.session.save(() => res.redirect('/'));

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
  console.log('LOOOOOOOOOOOOOOOOOOOKKKKKK')
  if (req.session.auth) {
    console.log('inside restore', req.session.auth)
    const { userId } = req.session.auth;
    try {
      const user = await User.findByPk(userId);
      if (user) {
        res.locals.authenticated = true;
        res.locals.user = user;
        res.locals.imgUrl = user.profileImg;
        res.locals.userId = user.id;
        console.log('HELLLLLLOOOOOOOO', res.locals);
        next();
      }
    } catch (err) {
      res.locals.authenticated = false;
      next(err);
    }
  } else {
    res.locals.imgUrl = 'https://freepikpsd.com/media/2019/11/1230424_black-lightning-bolt-png-Images.png';
    console.log('OOOOOOOOOOHHHWWWOOOOOOOOOOOWWdang')
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
