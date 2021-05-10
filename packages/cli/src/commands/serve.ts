import path from 'path';
import { Command } from 'commander';

import { serve } from 'local-api';

export const serveCommand = new Command()
  .command('serve [filename]')
  .description('Open a file for editing')
  .option('-p, --port <number>', 'port to run server on', '4005')
  .action( async (filename = 'notebook.js', options: { port: string }) => {
    try {
      const dir = path.join(process.cwd(), path.dirname(filename));
      await serve(options.port, path.basename(filename), dir);
      console.log(`
        Opened ${filename}. Please navigate to http://localhost:${options.port} to edit the file.
      `)
    } catch (err) {
      if (err.code === 'EADDRINUSE') {
        console.log(`This port ${options.port} is in use. Use a different port`)
      } else {
        console.log('This is the problem...', err.message);
      }
      // force program exit
      process.exit(1);
    }
  });