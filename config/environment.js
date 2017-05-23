/* eslint-env node*/

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'red-audiencias-publicas',
    environment: environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    // FB: {
    //   appId: '134794956606359',
    //   version: 'v2.9',
    //   xfbml: true
    // },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      spreadsheetUrl: 'https://docs.google.com/spreadsheets/d/1RY31Gx5APehd4cJ2wDUvdrvgiZkz8F6PTWp36NWOuP4/pubhtml',
      staticFilesUrl: null
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.googleAnalytics = {
      webPropertyId: 'UA-99762276-1'
    };
  }

  return ENV;
};
