const entries = require('./entries');

const sendData = () => {
    return new Promise((resolve, reject) => {
        if (entries.length === 0) {
            reject(null);
        } else {
            resolve(entries);
        }
    })
}

module.exports = {
    sendData
} 
