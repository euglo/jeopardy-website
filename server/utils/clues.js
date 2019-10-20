const request = require('request');

const url = 'http://jservice.io/api/clues';

const getClues = (offset,  callback) => {
    request({uri: `${url}?offset=${offset}`, json: true}, (error, response, body) => {
        if (error) {
            callback('Unable to connect to location services.', undefined);
        } else {
            callback(undefined, body);
        }
    })
}

// const getAllClues = (callback) => {
//     let clues = [];
//     getClues(0, clues, (error, data) => {
//         if (error) {
//             callback(error, undefined);
//         } else {
//             callback(undefined, data);
//         }     
//     })
// }
module.exports = {
    getClues
}