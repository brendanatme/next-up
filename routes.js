/**
 * routes.js
 * 
 * define our application routes here
 * to be rendered on server
 * and client
 * 
 * NOTE: load in the { Link } component from this file
 * see next-routes docs for more
 */
const routes = require('next-routes');

module.exports = routes()
  .add('home', '/', 'index')
  .add('entity', '/entities/:id', 'entity');
