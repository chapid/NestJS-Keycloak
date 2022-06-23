const base64Url = require('base64-url');

const header = {
    alg: 'HS256',//Hmac + sha256
    typ: 'JWT',

}

//cuerpo de datos
const payload = {
    username: 'user1@user.com',
    name: 'Carlos Yesid',
    exp: new Date().getTime(),//timestamp
}

const headerEncoded = base64Url.encode(JSON.stringify(header)).toString("base64");
const payloadEncoded = base64Url.encode(JSON.stringify(payload)).toString("base64");

console.log(headerEncoded, payloadEncoded);

const key = "abcd123456";

const crypt = require('crypto');

const signature = crypt
.createHmac('sha256',key)
.update(`${headerEncoded}.${payloadEncoded}`)
.digest('bin');

console.log(signature);



console.log(`${headerEncoded}.${payloadEncoded}.${base64Url.encode(signature)}`);
