const test = require("ava")
const pathExists = require("path-exists")
const pkg = require(".")

test("main", async t => {
	await pkg("fixture.js", {
		targets: "node10-win",
		output: "dist/output.exe"
	})

	t.true(await pathExists("dist/output.exe"))
})
