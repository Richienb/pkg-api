# pkg-api [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/pkg-api/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/pkg-api)

API for [pkg](https://github.com/vercel/pkg).

[![NPM Badge](https://nodei.co/npm/pkg-api.png)](https://npmjs.com/package/pkg-api)

## Install

```sh
npm install pkg pkg-api
```

## Usage

```js
const pkg = require("pkg-api");

await pkg("index.js", {
	targets: "node10-win",
	output: "dist/output.exe"
});
```

## API

### pkg(input, options?)

#### input

Type: `string`

The entry file to build.

#### options

Type: `object`

##### build

Type: `boolean`\
Default: `false`

Whether to compile base binaries instead of downloading them.

##### debug

Type: `boolean`\
Default: `false`

Whether to log the packaging process.

##### config

Type: `string`\
Default: `package.json`

A `package.json` or any other json file containing the top-level config.

##### options

Type: `string`

A space-separated list of runtime options to pass to Node.js/V8.

##### output

Type: `string`

If only 1 executable is created, set its path.

##### outDir

The output directory to place the executables for multiple targets.

##### targets

A command-separated list of targets to build for.

## Related

- [pkg](https://github.com/vercel/pkg) - CLI used by this API.
