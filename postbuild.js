const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

const pathDist = path.join(__dirname, 'dist');
const pathPublic = path.join(__dirname, 'public');
const basePathDist = path.join(__dirname, 'dist', 'static');
const destinationDirStatic = path.join(
  pathDist,
  'standalone',
  'public',
  '_next',
  'static'
);
const destinationPublicStatic = path.join(pathDist, 'standalone', 'public');

async function copyStaticFiles() {
  try {
    const distPath = await fs.pathExists(pathDist);
    if (distPath) {
      await fs.copy(basePathDist, destinationDirStatic);
      console.log(chalk.green('✔ Files static copied successfully!'));
    } else {
      console.log(chalk.red(`✖ The folder "${pathDist}" does not exist.`));
    }
  } catch (error) {
    console.error(chalk.red('✖ Error copying static files:'), error);
  }
}

async function copyPublicFiles() {
  try {
    const publicPath = await fs.pathExists(pathPublic);
    if (publicPath) {
      await fs.copy(pathPublic, destinationPublicStatic);
      console.log(chalk.green('✔ Files public copied successfully!'));
    } else {
      console.log(chalk.red(`✖ The folder "${pathPublic}" does not exist.`));
    }
  } catch (error) {
    console.error(chalk.red('✖ Error copying public files:'), error);
  }
}

/**
 * sequence run from copyPublicFiles and then copyStaticFiles
 * parallel run happing problem 2 action access folder dist/standalone/public
 */
async function postbuild() {
  console.log(chalk.blue('Copy files are starting....'));
  await copyPublicFiles();
  await copyStaticFiles();
  console.log(chalk.blue('Copy files done.'));
}

postbuild();
