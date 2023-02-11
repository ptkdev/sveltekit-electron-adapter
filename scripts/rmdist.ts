/**
 * Delete dist folder
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *                Alì Shadman [@AliShadman95] (https://github.com/AliShadman95)
 *
 * @license: MIT License
 *
 */
import * as shell from "shelljs";
import { dirname } from "path";

const __dirname = dirname;

const path = `${__dirname}/../dist`;

shell.rm("-Rf", path);
