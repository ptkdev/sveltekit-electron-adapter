/**
 * Disable debug
 * =====================
 * Check if configs/config.js has debug to off
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
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

const path = `${__dirname}/../app/configs/config.js`;

if (fs.existsSync(path)) {
	if (argv.enable) {
		shell.sed("-i", 'debug: "disabled"', 'debug: "enabled"', path);
	} else {
		shell.sed("-i", 'debug: "enabled"', 'debug: "disabled"', path);
	}
}
