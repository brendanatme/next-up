/**
 * _app.js
 * 
 * overwrite next.js' default _app.js
 * so that we can connect redux,
 * google analytics,
 * and our screen component
 */
import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import Router from 'next/router';
import withGA from 'next-ga';
import withReduxStore from '../store/with-redux-store';
import Screen from '../components/screen';

// polyfill for viewport units
if (typeof window !== 'undefined') {
  require('viewport-units-buggyfill').init();
}

class ReduxApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props;
    
    return (
      <Container>
        <Provider store={reduxStore}>
          <Screen>
            <Component {...pageProps} />
          </Screen>
        </Provider>
      </Container>
    )
  }
}

/**
 * TODO: get these outta here and into env vars
 * see env-config.js for more 
 */
const gaId = process.env.NODE_ENV === 'production'
  ? 'UA-131275310-1'   // dontbesorry.org
  : 'UA-115472285-2';  // dont-be-sorry-sandbox
const ConnectedApp = withReduxStore(ReduxApp);

export default gaId 
  ? withGA(gaId, Router)(ConnectedApp)
  : ConnectedApp;
