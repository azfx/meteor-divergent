Package.describe({
  name: 'yamb:randomusers',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'https://randomuser.me/ packaged for meteor',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use("http" , 'server');
  api.addFiles('randomusers.js' , 'server');

  api.export("RandomUsers");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('randomusers');
  api.addFiles('randomusers-tests.js');
});
