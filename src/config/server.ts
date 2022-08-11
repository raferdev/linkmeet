import 'dotenv/config';

let PORT = 4444;
let SALT = 10;
let JWT_SECRET = 'DEFAULT_SECRET';
let NODE_ENV = 'development';

if (process.env.PORT) {
  PORT = +process.env.PORT;
}
if (process.env.SALT) {
  SALT = +process.env.SALT;
}
if (process.env.JWT_SECRET) {
  JWT_SECRET = process.env.JWT_SECRET;
}
if (process.env.NODE_ENV) {
  NODE_ENV = process.env.NODE_ENV;
}

const __server = {
  PORT,
  SALT,
  JWT_SECRET,
  NODE_ENV,
};

export default __server;
