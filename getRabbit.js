'use strict';

// モジュールを読込む。
const Cloudant = require('@cloudant/cloudant');

const cloudant = new Cloudant({
    url: 'https://27974bb1-84f7-4d8f-8444-1cc4caea91c1-bluemix:dfbe04d545c0aad8aff0e3c1f49943a2e4927e15c6470aefc661c8cca11c7bd8@27974bb1-84f7-4d8f-8444-1cc4caea91c1-bluemix.cloudant.com',
    maxAttempt: 5,
    plugins: [
      {
        retry: {
          retryDelayMultiplier: 4
        }
      }
    ]
  }),
  db = cloudant.use('alice');

db.get('rabbit', (e, v) => {
  if (e) {
    console.log('error:', e);
  } else {
    console.log(v);
  }
});
