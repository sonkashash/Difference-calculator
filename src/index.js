import { program } from 'commander';
import parser from './utils.js';

program
  .name('gendiff')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) =>{
    parser(filepath1);
    parser(filepath2);
  })
  .parse()

  export default program;