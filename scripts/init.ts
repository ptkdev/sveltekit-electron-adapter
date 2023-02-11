/**
 * Init
 * =====================
 * Configure telegram token and username
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *                Alì Shadman [@AliShadman95] (https://github.com/AliShadman95)
 *
 * @license: MIT License
 *
 */
import * as fs from "fs";
import * as shell from "shelljs";
import yargs from "yargs";

import { dirname } from "path";
const argv: any = yargs(process.argv.slice(2)).argv;
const __dirname = dirname;
console.log(argv, argv._[0]);
const path = `${__dirname}/../app/configs/config.js`;

if (fs.existsSync(path)) {
	shell.sed("-i", "BOT_USERNAME", `${argv._[0]}`, path);
	shell.sed("-i", "BOT_TOKEN", `${argv._[1]}`, path);
}
