import { program } from 'commander';

program
  .name('gendiff')
  .argument('filepath1')
  .argument('filepath2')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format')
  .parse()

  export default program;