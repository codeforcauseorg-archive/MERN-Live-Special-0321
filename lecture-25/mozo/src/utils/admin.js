let admin = require('firebase-admin');
var serviceAccount = require('../private/service.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
