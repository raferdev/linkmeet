import chalk from 'chalk';

import app from './app.js';
import server from './config/server.js';

app.listen(server.PORT, () => {
  console.log(
    `${chalk.green('SERVER ONLINE')} :D listening on port ${server.PORT} :D`,
  );
});
