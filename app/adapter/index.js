/* eslint-disable @typescript-eslint/ban-ts-comment */
import path from "path";
import glob from "tiny-glob";
import replace from "replace-in-file";
import { platforms } from "./platforms.js";

/** @type {import('.').default} */
export default function (options) {
	return {
		name: "@ptkdev/sveltekit-electron-adapter",

		async adapt(builder) {
			if (!options?.fallback) {
				/** @type {string[]} */
				const dynamic_routes = [];

				// this is a bit of a hack — it allows us to know whether there are dynamic
				// (i.e. prerender = false/'auto') routes without having dedicated API
				// surface area for it
				builder.createEntries((route) => {
					dynamic_routes.push(route.id);

					return {
						id: "",
						filter: () => false,
						// eslint-disable-next-line @typescript-eslint/no-empty-function
						complete: () => {},
					};
				});

				if (dynamic_routes.length > 0 && options?.strict !== false) {
					const prefix = path.relative(".", builder.config.kit.files.routes);
					const has_param_routes = dynamic_routes.some((route) => route.includes("["));
					const config_option =
						has_param_routes || JSON.stringify(builder.config.kit.prerender.entries) !== '["*"]'
							? `  - adjust the \`prerender.entries\` config option ${
									has_param_routes
										? "(routes with parameters are not part of entry points by default)"
										: ""
							  } — see https://kit.svelte.dev/docs/configuration#prerender for more info.`
							: "";

					builder.log.error(
						`@ptkdev/sveltekit-electron-adapter: all routes must be fully prerenderable, but found the following routes that are dynamic:
${dynamic_routes.map((id) => `  - ${path.posix.join(prefix, id)}`).join("\n")}

You have the following options:
  - set the \`fallback\` option — see https://github.com/sveltejs/kit/tree/master/packages/adapter-static#spa-mode for more info.
  - add \`export const prerender = true\` to your root \`+layout.js/.ts\` or \`+layout.server.js/.ts\` file. This will try to prerender all pages.
  - add \`export const prerender = true\` to any \`+server.js/ts\` files that are not fetched by page \`load\` functions.
${config_option}
  - pass \`strict: false\` to \`adapter-static\` to ignore this error. Only do this if you are sure you don't need the routes in question in your final app, as they will be unavailable. See https://github.com/sveltejs/kit/tree/master/packages/adapter-static#strict for more info.

If this doesn't help, you may need to use a different adapter. @ptkdev/sveltekit-electron-adapter can only be used for sites that don't need a server for dynamic rendering, and can run on just a static file server.
See https://kit.svelte.dev/docs/page-options#prerender for more details`,
					);
					throw new Error("Encountered dynamic routes");
				}
			}

			const platform = platforms.find((platform) => platform.test());

			if (platform) {
				if (options) {
					builder.log.warn(
						`Detected ${platform.name}. Please remove adapter-static options to enable zero-config mode`,
					);
				} else {
					builder.log.info(`Detected ${platform.name}, using zero-config mode`);
				}
			}

			const {
				pages = "build",
				assets = pages,
				fallback,
				precompress,
			} = options ?? platform?.defaults ?? /** @type {import('./index').AdapterOptions} */ ({});

			builder.rimraf(assets);
			builder.rimraf(pages);

			builder.writeClient(assets);
			builder.writePrerendered(pages);

			const HTML_pages = await glob("**/*.html", {
				cwd: pages,
				dot: true,
				absolute: true,
				filesOnly: true,
			});

			HTML_pages.forEach(async (path) => {
				let href = path.split("/").pop();

				let regex_input = new RegExp(`href="/${href.replace(".html", "")}"`, "g");
				let regex_replace = `href="${`./${href}`}"`;

				if (href === "index.html") {
					regex_input = new RegExp(`href="/"`, "g");
					regex_replace = `href="./index.html"`;
				}

				await replace.sync({
					files: [`${pages}/**/*.html`],
					// @ts-ignore
					processor: (input) => input.replace(regex_input, regex_replace),
				});
			});

			let regex_input = new RegExp(`http-equiv="content-security-policy" content=""`, "g");
			const policy = "";
			let regex_replace = `http-equiv="content-security-policy" content="${
				options?.policy ? options.policy : policy
			}"`;

			await replace.sync({
				files: [`${pages}/**/*.html`],
				// @ts-ignore
				processor: (input) => input.replace(regex_input, regex_replace),
			});

			const HTML_assets = await glob(builder.getAppPath()+"/**/*", {
				cwd: pages,
				dot: true,
				absolute: false,
				filesOnly: true,
			});

			HTML_assets.forEach(async () => {
				let regex_input = new RegExp(`([^.])(/${builder.getAppPath()}/immutable)`, "g");

				await replace.sync({
					files: [`${pages}/**/*`],
					// @ts-ignore
					processor: (input) => input.replace(regex_input, "$1.$2"),
				});
			});

			regex_input = new RegExp(`name="viewport" content="width=device-width"`, "g");
			const viewport = "width=device-width, initial-scale=1.0, viewport-fit=cover";
			regex_replace = `name="viewport" content="${options?.viewport ? options.viewport : viewport}"`;

			await replace.sync({
				files: [`${pages}/**/*.html`],
				// @ts-ignore
				processor: (input) => input.replace(regex_input, regex_replace),
			});

			if (fallback) {
				builder.generateFallback(path.join(pages, fallback));
			}

			if (precompress) {
				builder.log.minor("Compressing assets and pages");
				if (pages === assets) {
					await builder.compress(assets);
				} else {
					await Promise.all([builder.compress(assets), builder.compress(pages)]);
				}
			}

			if (pages === assets) {
				builder.log(`Wrote site to "${pages}"`);
			} else {
				builder.log(`Wrote pages to "${pages}" and assets to "${assets}"`);
			}

			if (!options) {
				platform?.done(builder);
			}
		},
	};
}
