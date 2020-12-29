const CryptoJS = require('crypto-js');

const SECRET_KEY = 'something...'
const data = {
  cartId: "12345",
  identifyDevice: "abc1234567890"
}

// Encrypt
const ciphertext = CryptoJS.AES
  .encrypt(JSON.stringify(data), SECRET_KEY)
  .toString();

// Decrypt
const bytes  = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

console.log('ciphertext', ciphertext)
console.log('bytes', bytes)
console.log('decryptedData', decryptedData)
