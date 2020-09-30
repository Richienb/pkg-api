"use strict"

const dargs = require("dargs")
const { exec: pkg } = require("pkg")

module.exports = (input, options) => pkg(dargs({
	_: [input],
	...options
}, {
	includes: [
		"_",
		"build",
		"debug",
		"config",
		"options",
		"output",
		"outDir",
		"targets"
	],
	aliases: {
		build: "b",
		debug: "d",
		config: "c",
		options: "o",
		targets: "t"
	}
}))
