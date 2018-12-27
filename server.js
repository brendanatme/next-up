/**
 * server.js
 * 
 * this boots up our application
 * using next.js
 * which handles things like server-side rendering
 * 
 * we need this script so we can add dynamic routing to our next.js app
 * with SSR
 * 
 * and GZIP compression via 'compression' lib
 * 
 * also, let's manually serve up a sitemap.xml file on request
 * for google to check
 * NOTE: the file needs to be manually generated, stored in the repo, and the changes deployed
 * after any routes are changed or added 
 */
const fs = require('fs');
const path = require('path');
const express = require('express');
const compression = require('compression');
const next = require('next');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);
const PORT = process.env.PORT || 3000;

/**
 * boot up next app
 * and use express to serve it
 * with all our additional routes
 * and middlewares
 */
app.prepare().then(() => {
  express()
    .use(compression())
    .use(handler)
    .listen(PORT, (err) => {
      if (err) {
        throw err;
      }

      console.log(`Server listening at port ${PORT}`);
    });
});
