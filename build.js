const { JSDOM } = require("jsdom")
const fetch = require("node-fetch")
const fs = require("fs")

const {Parser} = require("./lib/parser.js")
const TypeScriptPrinter = require("./lib/typeScriptPrinter.js")



const URL_BOTS_API = `https://core.telegram.org/bots/api`;

(async() => {
	console.log(`Load html data from '${URL_BOTS_API}'`);
	const html = await (await fetch(URL_BOTS_API)).text();
	
	console.log(`Create dom from html data`);
	const dom = new JSDOM(html);
	
	console.log(`Parse types from dom`);
	const types = (new Parser()).parse(dom.window);
	console.log(`Successfully parsed ${types.size} types`);
	
	console.log(`Create ts code`);
	const typesTSCode = (new TypeScriptPrinter(types)).printer(types);

	console.log(`Save ts code`);
	fs.writeFileSync("./javascript/index.d.ts", typesTSCode);
	fs.writeFileSync("./javascript/index.js.flow", typesTSCode);
})();
