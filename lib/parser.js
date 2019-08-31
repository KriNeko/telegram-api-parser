
const {
	TypeScalar, TypeBoolean, TypeNumber, TypeNumberInteger, TypeNumberFloat, TypeString,
	TypeName, TypeVariants, TypeArray, TypeProperty, TypeStructure
} = require("./abstractNodesTypes.js");

const $nextElemsTag = (el, tag) => {
	const ret = [];
	el = el.nextElementSibling;
	while(el && el.tagName.toUpperCase() === tag.toUpperCase()) {
		ret.push(el);
		el = el.nextElementSibling;
	}
	return ret;
}
const $nextTag = (el, tag, stopTag) => {
	el = el.nextElementSibling;
	while(el && el.tagName.toUpperCase() !== tag.toUpperCase()) {
		if ( el.tagName.toUpperCase() === stopTag.toUpperCase() )
			return null;
		el = el.nextElementSibling;
	}
	return el;
}
const scalarTypesMap = new Map([
	["Boolean"     , TypeBoolean],
	["Float"       , TypeNumberFloat],
	["Float number", TypeNumberFloat],
	["Integer"     , TypeNumberInteger],
	["String"      , TypeString],
	["True"        , TypeBoolean],
]);

class HtmlNodeText {
	constructor(html, text) {
		this.html = html;
		this.text = text;
	}
	
	static fromElem(el) {
		return new this(el.innerHTML, el.textContent);
	}
}
class ParserTableType {
	constructor(elTable) {
		this.elTable = elTable;
		
		this.parseFunctionsMap = new Map([
			["Parameter"  , this.parseParameter],
			["Field"      , this.parseField],
			["Type"       , this.parseType],
			["Required"   , this.parseRequired],
			["Description", this.parseDescription],
		].map(([k, f]) => [k, f.bind(this)]));
	}
	
	parseParameter(el) {
		const name = el.innerHTML;
		if ( !/^[a-zA-Z0-9_]+$/.test(name) )
			throw new Error(`Invalid property name '${name}'`);
		return name;
	}
	parseField(el) {
		return this.parseParameter(el);
	}
	parseType(el) {
		let typeHTMLOrigin = el.innerHTML;
		
		let arrayLvl = 0;
		let typeHTML = typeHTMLOrigin;
		for(let prevArrayLv; prevArrayLv !== arrayLvl; ) {
			prevArrayLv = arrayLvl;
			typeHTML = typeHTML.replace(/^Array of\s*/i, () => {
				arrayLvl++;
				return "";
			});
		}
		
		const types = typeHTML
		.split(" or ")
		.map(type => {
			if ( /^[a-zA-Z0-9_\s]+$/.test(type) ) {
				if ( !scalarTypesMap.has(type) )
					throw new Error(`Scalar type '${type}' not found`);

				return new (scalarTypesMap.get(type));
			}
			
			const m = type.match(/^<a href\="#([a-zA-Z0-9_]+)">([a-zA-Z0-9_]+)<\/a>$/);
			if ( !m )
				throw new Error(`Invalid type '{el.textContent}'`);

			return new TypeName(m[2]);
		});
		
		let type = ( types.length > 1 ) ? new TypeVariants(types) : types[0];
		while(arrayLvl-- > 0) {
			type = new TypeArray(type);
		}

		return type;
	}
	parseRequired(el) {
		const req = el.innerHTML;
		if ( !["Yes", "Optional"].includes(req) )
			throw new Error(`Invalid reqired params '${req}'`);
		return req;
	}
	parseDescription(el) {
		return HtmlNodeText.fromElem(el);
	}

	parseTableProps() {
		return [...this.elTable.querySelectorAll("thead > tr > th")]
		.map(p => p.innerHTML)
		.map(p => {
			if ( !/^[a-zA-Z0-9_]+$/.test(p) )
				throw new Error(`Invalid prop name '${p}'`);
			return p;
		});
	}
	parseTableTypes() {
		const props = this.parseTableProps();
		
		const properties = [...this.elTable.querySelectorAll("tbody > tr")]
		.map(tr => [...tr.querySelectorAll("td")])
		.map(tr => props.reduce((obj, prop, i) => {
			const td = tr[i];
	
			if ( !this.parseFunctionsMap.has(prop) )
				throw new Error(`Invalid property name '${prop}'`);
			
			obj[prop] = this.parseFunctionsMap.get(prop)(td);
			return obj;
		}, {}));
		
		for(const p of properties)
			p.Optional = p.Description ? 
				/^Optional\./.test(p.Description.text) : false;

		return properties
			.map(p => 
				new TypeProperty(p.Field, p.Type, p.Optional, p.Description));
	}
	parse() {
		return this.parseTableTypes();
	}
}
class Parser {
	parse(window) {
		const {document} = window;
		const nodes = [...document.querySelectorAll("h4")];
		const methods = nodes.filter(node => node.textContent.match(/^[a-z]+[a-zA-Z]*$/));

		const types = new Map(
			nodes
			.filter(node => node.textContent.match(/^[A-Z]+[a-zA-Z]*$/))
			.map(el => {
				const name = el.textContent;
				const comments = $nextElemsTag(el, "p").map(el => HtmlNodeText.fromElem(el));
				const table = $nextTag(el, "table", "h4");
				
				return [name, 
					new TypeStructure(table ? 
						(new ParserTableType(table)).parse() : [],
						comments)];
			})
		);

		this.checkTypes(types);
		return types;
	}

	checkTypes(types) {
		const checkType = (type) => {
			if ( type instanceof TypeStructure )
				type.properties.forEach(p => 
					checkType(p.type));
		
			if ( type instanceof TypeVariants )
				type.types.forEach(type => 
					checkType(type));
					
			if ( type instanceof TypeArray )
				checkType(type.itemType);
			
			if ( type instanceof TypeName ) {
				if ( !types.has(type.name) )
					throw new Error(`Type '${type.name}' not found`);
				
				//console.log(type.name)
			}
		}
			
		[...types].forEach(([name, type]) =>
			checkType(type));
	}
}

module.exports = {HtmlNodeText, ParserTableType, Parser};