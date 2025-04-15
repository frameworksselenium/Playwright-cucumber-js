const Crypt = require('crypt');
const crypt = new Crypt('mySecureKey123!', { encoding: 'base64', pbkdf2Iterations: 10000, saltLength: 10 });

class EncryptDecrypt {
    encrypt(text) {
        const encryptedString = crypt.encrypt(text);
        console.log(encryptedString);
        return encryptedString;
    }

    decrypt(text) {
        const decryptedString = crypt.decrypt(text);
        return decryptedString;
    }
}

module.exports = new EncryptDecrypt();