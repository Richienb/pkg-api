declare namespace pkgApi {
	export interface Options {
		/**
		Whether to compile base binaries instead of downloading them.
		@default false
		*/
		build?: boolean

		/**
		Whether to log the packaging process.
		@default false
		*/
		debug?: boolean

		/**
		A `package.json` or any other json file containing the top-level config.
		@default "package.json"
		*/
		config?: string

		/**
		A space-separated list of runtime options to pass to Node.js/V8.
		*/
		options?: string

		/**
		If only 1 executable is created, set its path.
		*/
		output?: string

		/**
		The output directory to place the executables for multiple targets.
		*/
		outDir?: string

		/**
		A command-separated list of targets to build for.
		*/
		targets?: string
	}
}

/**
API for [pkg](https://github.com/vercel/pkg).
@param input The entry file to build.
@example
```
const pkg = require("pkg-api");

await pkg("index.js", {
	targets: "node10-win",
	output: "dist/output.exe"
});
```
*/
declare function pkgApi(input: string, options?: pkgApi.Options): Promise<void>

export = pkgApi
