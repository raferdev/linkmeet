import 'dotenv/config';

let PORT = 4444;
let SALT = 10;

if (process.env.PORT) {
  PORT = +process.env.PORT;
}
if (process.env.SALT) {
  SALT = +process.env.SALT;
}

const __server = {
  PORT,
  SALT,
};

export default __server;
