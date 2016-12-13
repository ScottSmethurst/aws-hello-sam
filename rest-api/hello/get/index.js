'use strict';

exports.handler = function (event, context, callback) {
    let firstName = process.env.FIRST_NAME;

    callback(null, `Hello ${firstName}!`);
}