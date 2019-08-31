
class TypeScalar {}
class TypeBoolean extends TypeScalar {}
class TypeNumber extends TypeScalar {}
class TypeNumberInteger extends TypeNumber {}
class TypeNumberFloat extends TypeNumber {}
class TypeString extends TypeScalar {}

class TypeName {
	constructor(name) {
		this.name = name;
	}
}

class TypeVariants {
	constructor(types) {
		this.types = types;
	}
}
class TypeArray {
	constructor(itemType) {
		this.itemType = itemType;
	}
}

class TypeProperty {
	constructor(name, type, optional = false, description = null) {
		this.name = name;
		this.type = type;
		this.optional = optional;
		this.description = description;
	}
}
class TypeStructure {
	constructor(properties, comments) {
		this.properties = properties;
		this.comments = comments;
	}
}

module.exports = {
	TypeScalar, TypeBoolean, TypeNumber, TypeNumberInteger, TypeNumberFloat, TypeString,
	TypeName, TypeVariants, TypeArray, TypeProperty, TypeStructure
};