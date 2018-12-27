/**
 * env-config
 * 
 * this was created as a way to get env vars into our app
 * via babel (see .babelrc.js)
 * the problem is, our env vars only show up on the server,
 * not the client
 * so this doesn't do anything currently
 * 
 * TODO: implement env vars in client
 */
const prod = process.env.NODE_ENV === 'production';

if (!prod) {
  require('dotenv').config();
}

module.exports = {
  'process.env.NODE_ENV': process.env.NODE_ENV,
};
