#!/usr/bin/env node
import program from 'commander';

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type] ', 'Output format')
  .action((firstPath, secondPath) => {
    console.log(`Test gendiff ${firstPath} ${secondPath}`);
  })
  .parse(process.argv);
