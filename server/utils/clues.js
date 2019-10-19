const request = require('request');

const getClues = (callback) => {
    const url = 'http://jservice.io/api/clues';

    request({url, json: true}, (error, response, body) => {
        if (error) {
            callback('Unable to connect to location services.', undefined);
        } else {
            callback(undefined, body);
        }
    })
}

module.exports = {
    getClues
}