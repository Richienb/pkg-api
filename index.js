"use strict"

const dargs = require("dargs")
const { exec } = require("pkg")

module.exports = (input, options) => exec(dargs({
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
