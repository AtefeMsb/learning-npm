var unsecurePlainTextPassword = "password";
const saltRounds = 10;


const bcrypt = require('bcrypt');
const colors = require('colors');
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(unsecurePlainTextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
        console.log("salt", salt);
        console.log("myPlaintextPassword:", unsecurePlainTextPassword);
        console.log("hash generated from Password and Salt:", hash.green);
    });
});