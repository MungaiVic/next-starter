const dns = require('dns');

dns.lookup('www.google.com', (err) => {
    if (err) {
        console.error('Unable to reach the internet:', err);
    } else {
        console.log('Internet connection is active.');
    }
});
