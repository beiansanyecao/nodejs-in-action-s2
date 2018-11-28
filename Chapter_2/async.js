// async.js
'user script'

const async = require('async');

function callback() {
    console.log('cb');
}

async.series([
    callback => {
        setTimeout(() => {
            console.log('I execute first.');
            callback();
          }, 1000);
    },
    callback => {
        setTimeout(() => {
          console.log('I execute next.');
          callback();
        }, 500);
      },
    callback => {
        setTimeout(() => {
          console.log('I execute last.');
          callback();
        }, 100);
    }
], function(err, results){
    console.log(results);
})