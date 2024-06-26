#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../src/genDiff.js';

program
  .name('gendiff')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2) => {
    // const { format } = program.opts();
    const diff = genDiff(filepath1, filepath2);
    console.log(diff);
  })
  .parse();
