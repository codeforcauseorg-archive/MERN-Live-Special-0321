const admin = require('../utils/admin');

const auth =
  (...requiredRights) =>
  async (req, res, next) => {
    if (req.token) {
      let user = await admin.auth().verifyIdToken(req.token);
      if (user && user.uid) {
        req.user = user;
        next();
      } else {
        res.sendStatus(401);
      }
    } else {
      res.sendStatus(401);
    }
  };

module.exports = auth;
