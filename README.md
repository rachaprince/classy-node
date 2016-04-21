# [Classy Node](https://www.npmjs.com/package/classy-node) [![Build Status](https://travis-ci.org/classy-org/classy-node.png?branch=master)](https://travis-ci.org/classy-org/classy-node)

Built for the creativity and flexibility of the world's most innovative minds, create impactful apps and integrations that make social enterprises more efficient and effective. Engineer the world for good with the Classy API.

Request access and learn more by visiting [developers.classy.org](https://developers.classy.org/overview/welcome).

## Important notice

Classy Node is currently in development and is not ready for use on production.

## Installation

`npm install classy-node`

## Overview

Start by instantiating your `classy` instance. We recommend storing your client ID and client secret as environment variables.

```
var Classy = require('classy-node');

var classy = new Classy({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
});
```

Then, use `classy.app()` obtain an application token and make calls as a trusted Classy application:

```
classy.app().then(function() {
  // Make calls on behalf of the application
});
```

In order to make calls on behalf of a member, first set the member context by passing either a `refreshToken` or a `username` & `password` into the `oauth` resource's `auth` endpoint:

```
// With a username & password
classy.oauth.auth({
  username: 'USERNAME_GOES_HERE',
  password: 'PASSWORD_GOES_HERE'
});

// With a refresh token
classy.oauth.auth({
  refreshToken: 'REFRESH_TOKEN_GOES_HERE'
});
```

Every resource method returns a promise:

```
classy.campaigns.retrieve(19).then(function(response) {
  // Do something with the response
}).catch(function(error) {
  // Do something with the error
});
```

Each resource can contain several basic methods, and might also include additional custom methods that act upon related resources or perform specialized operations:

- `create()`
- `retrieve()`
- `update()`
- `del()`
- `create{RelatedResource}()` e.g., `createCampaign()`
- `list{RelatedResources}()` e.g. `listCampaigns()`
- Other/specialized e.g., `publish()`, `unpublish()`, & `deactivate()`

## Contributing

When submitting a pull request, please make sure that you've written [good commit messages](http://chris.beams.io/posts/git-commit/) that include references to issues and clearly describe what the commit achieves. Use the commit body to explain what you did and why you did it. Thanks!

You can run our tests with `npm test` and get coverage reports with `npm run coverage`.

You can run the example with `babel-node example/index.js`. Make sure you have your environment variables for `CLIENT_ID` and `CLIENT_SECRET` set up!


## More information

Classy Node was built by the developers at [Classy](https://classy.org) in San Diego, CA.

The code was heavily inspired by Stripe's awesome [stripe-node](https://github.com/stripe/stripe-node).
