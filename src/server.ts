import chalk from 'chalk';

import app from './app.js';
import __server from './config/server.js';

app.listen(__server.PORT, () => {
  console.log(
    `${chalk.green('SERVER ONLINE')} :D listening on port ${__server.PORT} :D`,
  );
});
