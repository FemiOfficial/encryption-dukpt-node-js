const express = require('express');

const dukpt = require('./config/config');

const decryptionConfig = require('./handlers/decryptionHandler');

const encryptionConfig = require('./handlers/encryptionHandler');

const app = express();

const PORT = 2000;

app.listen(PORT, console.log(`server is running from ${PORT}`));

const plainTextCardData = '1234AB';

for(let i = 0; i<=10; i++) {
    const encryptedData = dukpt.dukptEncrypt(plainTextCardData, encryptionConfig);

    const decryptedData = dukpt.dukptDecrypt(encryptedData, decryptionConfig)

    console.log(`Plain text Card Data: ${plainTextCardData}`);

    console.log(`Encrypted Card Data: ${encryptedData}`);

    console.log(`Decrypted card data: ${decryptedData}`);

}

