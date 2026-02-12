if (typeof window !== "undefined" && typeof window.global === "undefined") { window.global = window; }
//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
	return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys$3 = __getOwnPropNames(from), i = 0, n = keys$3.length, key; i < n; i++) {
		key = keys$3[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion
const obsidian = __toESM(require("obsidian"));
const __codemirror_view = __toESM(require("@codemirror/view"));
const __codemirror_state = __toESM(require("@codemirror/state"));

//#region src/settings.ts
const DEFAULT_SETTINGS = {
	useDescriptiveNames: false,
	isAutosuggestEnabled: true
};
var UnitConverterSettingTab = class extends obsidian.PluginSettingTab {
	plugin;
	constructor(plugin) {
		super(plugin.app, plugin);
		this.plugin = plugin;
	}
	display() {
		const { containerEl } = this;
		containerEl.empty();
		new obsidian.Setting(containerEl).setName("Use descriptive unit names").setDesc("Display full unit names (e.g., \"kilometers\" instead of \"km\")").addToggle((toggle) => toggle.setValue(this.plugin.settings.useDescriptiveNames).onChange(async (value) => {
			this.plugin.settings.useDescriptiveNames = value;
			await this.plugin.saveSettings();
		}));
		new obsidian.Setting(containerEl).setName("To Unit Autosuggest").setDesc("Enable or disable autosuggest for destination units").addToggle((toggle) => toggle.setValue(this.plugin.settings.isAutosuggestEnabled).onChange(async (value) => {
			this.plugin.settings.isAutosuggestEnabled = value;
			await this.plugin.saveSettings();
		}));
	}
};

//#endregion
//#region node_modules/.pnpm/lodash._objecttypes@2.3.0/node_modules/lodash._objecttypes/index.js
var require_lodash$18 = __commonJS({ "node_modules/.pnpm/lodash._objecttypes@2.3.0/node_modules/lodash._objecttypes/index.js"(exports, module) {
	/**
	* Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
	* Build: `lodash modularize modern exports="npm" -o ./npm/`
	* Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	* Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	* Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	* Available under MIT license <http://lodash.com/license>
	*/
	/** Used to determine if values are of the language type Object */
	var objectTypes$3 = {
		"boolean": false,
		"function": true,
		"object": true,
		"number": false,
		"string": false,
		"undefined": false
	};
	module.exports = objectTypes$3;
} });

//#endregion
//#region node_modules/.pnpm/lodash.isobject@2.3.0/node_modules/lodash.isobject/index.js
var require_lodash$17 = __commonJS({ "node_modules/.pnpm/lodash.isobject@2.3.0/node_modules/lodash.isobject/index.js"(exports, module) {
	/**
	* Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
	* Build: `lodash modularize modern exports="npm" -o ./npm/`
	* Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	* Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	* Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	* Available under MIT license <http://lodash.com/license>
	*/
	var objectTypes$2 = require_lodash$18();
	/**
	* Checks if `value` is the language type of Object.
	* (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	*
	* @static
	* @memberOf _
	* @category Objects
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if the `value` is an object, else `false`.
	* @example
	*
	* _.isObject({});
	* // => true
	*
	* _.isObject([1, 2, 3]);
	* // => true
	*
	* _.isObject(1);
	* // => false
	*/
	function isObject$4(value) {
		return !!(value && objectTypes$2[typeof value]);
	}
	module.exports = isObject$4;
} });

//#endregion
//#region node_modules/.pnpm/lodash._renative@2.3.0/node_modules/lodash._renative/index.js
var require_lodash$16 = __commonJS({ "node_modules/.pnpm/lodash._renative@2.3.0/node_modules/lodash._renative/index.js"(exports, module) {
	/**
	* Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
	* Build: `lodash modularize modern exports="npm" -o ./npm/`
	* Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	* Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	* Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	* Available under MIT license <http://lodash.com/license>
	*/
	/** Used for native method references */
	var objectProto$1 = Object.prototype;
	/** Used to resolve the internal [[Class]] of values */
	var toString = objectProto$1.toString;
	/** Used to detect if a method is native */
	var reNative$5 = RegExp("^" + String(toString).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$");
	module.exports = reNative$5;
} });

//#endregion
//#region node_modules/.pnpm/lodash._shimkeys@2.3.0/node_modules/lodash._shimkeys/index.js
var require_lodash$15 = __commonJS({ "node_modules/.pnpm/lodash._shimkeys@2.3.0/node_modules/lodash._shimkeys/index.js"(exports, module) {
	/**
	* Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
	* Build: `lodash modularize modern exports="npm" -o ./npm/`
	* Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	* Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	* Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	* Available under MIT license <http://lodash.com/license>
	*/
	var objectTypes$1 = require_lodash$18();
	/** Used for native method references */
	var objectProto = Object.prototype;
	/** Native method shortcuts */
	var hasOwnProperty = objectProto.hasOwnProperty;
	/**
	* A fallback implementation of `Object.keys` which produces an array of the
	* given object's own enumerable property names.
	*
	* @private
	* @type Function
	* @param {Object} object The object to inspect.
	* @returns {Array} Returns an array of property names.
	*/
	var shimKeys$1 = function(object) {
		var index, iterable = object, result = [];
		if (!iterable) return result;
		if (!objectTypes$1[typeof object]) return result;
		for (index in iterable) if (hasOwnProperty.call(iterable, index)) result.push(index);
		return result;
	};
	module.exports = shimKeys$1;
} });

//#endregion
//#region node_modules/.pnpm/lodash.keys@2.3.0/node_modules/lodash.keys/index.js
var require_lodash$14 = __commonJS({ "node_modules/.pnpm/lodash.keys@2.3.0/node_modules/lodash.keys/index.js"(exports, module) {
	/**
	* Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
	* Build: `lodash modularize modern exports="npm" -o ./npm/`
	* Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	* Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	* Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	* Available under MIT license <http://lodash.com/license>
	*/
	var isObject$3 = require_lodash$17(), reNative$4 = require_lodash$16(), shimKeys = require_lodash$15();
	var nativeKeys = reNative$4.test(nativeKeys = Object.keys) && nativeKeys;
	/**
	* Creates an array composed of the own enumerable property names of an object.
	*
	* @static
	* @memberOf _
	* @category Objects
	* @param {Object} object The object to inspect.
	* @returns {Array} Returns an array of property names.
	* @example
	*
	* _.keys({ 'one': 1, 'two': 2, 'three': 3 });
	* // => ['one', 'two', 'three'] (property order is not guaranteed across environments)
	*/
	var keys$2 = !nativeKeys ? shimKeys : function(object) {
		if (!isObject$3(object)) return [];
		return nativeKeys(object);
	};
	module.exports = keys$2;
} });

//#endregion
//#region node_modules/.pnpm/lodash.noop@2.3.0/node_modules/lodash.noop/index.js
var require_lodash$13 = __commonJS({ "node_modules/.pnpm/lodash.noop@2.3.0/node_modules/lodash.noop/index.js"(exports, module) {
	/**
	* Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
	* Build: `lodash modularize modern exports="npm" -o ./npm/`
	* Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	* Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	* Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	* Available under MIT license <http://lodash.com/license>
	*/
	/**
	* A no-operation function.
	*
	* @static
	* @memberOf _
	* @category Utilities
	* @example
	*
	* var object = { 'name': 'fred' };
	* _.noop(object) === undefined;
	* // => true
	*/
	function noop$2() {}
	module.exports = noop$2;
} });

//#endregion
//#region node_modules/.pnpm/lodash._basecreate@2.3.0/node_modules/lodash._basecreate/index.js
var require_lodash$12 = __commonJS({ "node_modules/.pnpm/lodash._basecreate@2.3.0/node_modules/lodash._basecreate/index.js"(exports, module) {
	/**
	* Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
	* Build: `lodash modularize modern exports="npm" -o ./npm/`
	* Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	* Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	* Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	* Available under MIT license <http://lodash.com/license>
	*/
	var isObject$2 = require_lodash$17(), noop$1 = require_lodash$13(), reNative$3 = require_lodash$16();
	var nativeCreate = reNative$3.test(nativeCreate = Object.create) && nativeCreate;
	/**
	* The base implementation of `_.create` without support for assigning
	* properties to the created object.
	*
	* @private
	* @param {Object} prototype The object to inherit from.
	* @returns {Object} Returns the new object.
	*/
	function baseCreate$2(prototype, properties) {
		return isObject$2(prototype) ? nativeCreate(prototype) : {};
	}
	if (!nativeCreate) baseCreate$2 = function() {
		function Object$1() {}
		return function(prototype) {
			if (isObject$2(prototype)) {
				Object$1.prototype = prototype;
				var result = new Object$1();
				Object$1.prototype = null;
			}
			return result || global.Object();
		};
	}();
	module.exports = baseCreate$2;
} });

//#endregion
//#region node_modules/.pnpm/lodash._setbinddata@2.3.0/node_modules/lodash._setbinddata/index.js
var require_lodash$11 = __commonJS({ "node_modules/.pnpm/lodash._setbinddata@2.3.0/node_modules/lodash._setbinddata/index.js"(exports, module) {
	/**
	* Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
	* Build: `lodash modularize modern exports="npm" -o ./npm/`
	* Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	* Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	* Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	* Available under MIT license <http://lodash.com/license>
	*/
	var noop = require_lodash$13(), reNative$2 = require_lodash$16();
	/** Used as the property descriptor for `__bindData__` */
	var descriptor = {
		"configurable": false,
		"enumerable": false,
		"value": null,
		"writable": false
	};
	/** Used to set meta data on functions */
	var defineProperty = function() {
		try {
			var o = {}, func = reNative$2.test(func = Object.defineProperty) && func, result = func(o, o, o) && func;
		} catch (e) {}
		return result;
	}();
	/**
	* Sets `this` binding data on a given function.
	*
	* @private
	* @param {Function} func The function to set data on.
	* @param {Array} value The data array to set.
	*/
	var setBindData$3 = !defineProperty ? noop : function(func, value) {
		descriptor.value = value;
		defineProperty(func, "__bindData__", descriptor);
	};
	module.exports = setBindData$3;
} });

//#endregion
//#region node_modules/.pnpm/lodash._basebind@2.3.0/node_modules/lodash._basebind/index.js
var require_lodash$10 = __commonJS({ "node_modules/.pnpm/lodash._basebind@2.3.0/node_modules/lodash._basebind/index.js"(exports, module) {
	/**
	* Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
	* Build: `lodash modularize modern exports="npm" -o ./npm/`
	* Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	* Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	* Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	* Available under MIT license <http://lodash.com/license>
	*/
	var baseCreate$1 = require_lodash$12(), isObject$1 = require_lodash$17(), setBindData$2 = require_lodash$11();
	/**
	* Used for `Array` method references.
	*
	* Normally `Array.prototype` would suffice, however, using an array literal
	* avoids issues in Narwhal.
	*/
	var arrayRef$2 = [];
	/** Native method shortcuts */
	var push$2 = arrayRef$2.push;
	/**
	* The base implementation of `_.bind` that creates the bound function and
	* sets its meta data.
	*
	* @private
	* @param {Array} bindData The bind data array.
	* @returns {Function} Returns the new bound function.
	*/
	function baseBind$1(bindData) {
		var func = bindData[0], partialArgs = bindData[2], thisArg = bindData[4];
		function bound() {
			if (partialArgs) {
				var args = partialArgs.slice();
				push$2.apply(args, arguments);
			}
			if (this instanceof bound) {
				var thisBinding = baseCreate$1(func.prototype), result = func.apply(thisBinding, args || arguments);
				return isObject$1(result) ? result : thisBinding;
			}
			return func.apply(thisArg, args || arguments);
		}
		setBindData$2(bound, bindData);
		return bound;
	}
	module.exports = baseBind$1;
} });

//#endregion
//#region node_modules/.pnpm/lodash._slice@2.3.0/node_modules/lodash._slice/index.js
var require_lodash$9 = __commonJS({ "node_modules/.pnpm/lodash._slice@2.3.0/node_modules/lodash._slice/index.js"(exports, module) {
	/**
	* Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
	* Build: `lodash modularize modern exports="npm" -o ./npm/`
	* Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	* Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	* Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	* Available under MIT license <http://lodash.com/license>
	*/
	/**
	* Slices the `collection` from the `start` index up to, but not including,
	* the `end` index.
	*
	* Note: This function is used instead of `Array#slice` to support node lists
	* in IE < 9 and to ensure dense arrays are returned.
	*
	* @private
	* @param {Array|Object|string} collection The collection to slice.
	* @param {number} start The start index.
	* @param {number} end The end index.
	* @returns {Array} Returns the new array.
	*/
	function slice$2(array, start, end) {
		start || (start = 0);
		if (typeof end == "undefined") end = array ? array.length : 0;
		var index = -1, length = end - start || 0, result = Array(length < 0 ? 0 : length);
		while (++index < length) result[index] = array[start + index];
		return result;
	}
	module.exports = slice$2;
} });

//#endregion
//#region node_modules/.pnpm/lodash._basecreatewrapper@2.3.0/node_modules/lodash._basecreatewrapper/index.js
var require_lodash$8 = __commonJS({ "node_modules/.pnpm/lodash._basecreatewrapper@2.3.0/node_modules/lodash._basecreatewrapper/index.js"(exports, module) {
	/**
	* Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
	* Build: `lodash modularize modern exports="npm" -o ./npm/`
	* Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	* Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	* Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	* Available under MIT license <http://lodash.com/license>
	*/
	var baseCreate = require_lodash$12(), isObject = require_lodash$17(), setBindData$1 = require_lodash$11(), slice$1 = require_lodash$9();
	/**
	* Used for `Array` method references.
	*
	* Normally `Array.prototype` would suffice, however, using an array literal
	* avoids issues in Narwhal.
	*/
	var arrayRef$1 = [];
	/** Native method shortcuts */
	var push$1 = arrayRef$1.push;
	/**
	* The base implementation of `createWrapper` that creates the wrapper and
	* sets its meta data.
	*
	* @private
	* @param {Array} bindData The bind data array.
	* @returns {Function} Returns the new function.
	*/
	function baseCreateWrapper$1(bindData) {
		var func = bindData[0], bitmask = bindData[1], partialArgs = bindData[2], partialRightArgs = bindData[3], thisArg = bindData[4], arity = bindData[5];
		var isBind = bitmask & 1, isBindKey = bitmask & 2, isCurry = bitmask & 4, isCurryBound = bitmask & 8, key = func;
		function bound() {
			var thisBinding = isBind ? thisArg : this;
			if (partialArgs) {
				var args = partialArgs.slice();
				push$1.apply(args, arguments);
			}
			if (partialRightArgs || isCurry) {
				args || (args = slice$1(arguments));
				if (partialRightArgs) push$1.apply(args, partialRightArgs);
				if (isCurry && args.length < arity) {
					bitmask |= 16;
					return baseCreateWrapper$1([
						func,
						isCurryBound ? bitmask : bitmask & -4,
						args,
						null,
						thisArg,
						arity
					]);
				}
			}
			args || (args = arguments);
			if (isBindKey) func = thisBinding[key];
			if (this instanceof bound) {
				thisBinding = baseCreate(func.prototype);
				var result = func.apply(thisBinding, args);
				return isObject(result) ? result : thisBinding;
			}
			return func.apply(thisBinding, args);
		}
		setBindData$1(bound, bindData);
		return bound;
	}
	module.exports = baseCreateWrapper$1;
} });

//#endregion
//#region node_modules/.pnpm/lodash.isfunction@2.3.0/node_modules/lodash.isfunction/index.js
var require_lodash$7 = __commonJS({ "node_modules/.pnpm/lodash.isfunction@2.3.0/node_modules/lodash.isfunction/index.js"(exports, module) {
	/**
	* Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
	* Build: `lodash modularize modern exports="npm" -o ./npm/`
	* Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	* Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	* Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	* Available under MIT license <http://lodash.com/license>
	*/
	/**
	* Checks if `value` is a function.
	*
	* @static
	* @memberOf _
	* @category Objects
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if the `value` is a function, else `false`.
	* @example
	*
	* _.isFunction(_);
	* // => true
	*/
	function isFunction$1(value) {
		return typeof value == "function";
	}
	module.exports = isFunction$1;
} });

//#endregion
//#region node_modules/.pnpm/lodash._createwrapper@2.3.0/node_modules/lodash._createwrapper/index.js
var require_lodash$6 = __commonJS({ "node_modules/.pnpm/lodash._createwrapper@2.3.0/node_modules/lodash._createwrapper/index.js"(exports, module) {
	/**
	* Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
	* Build: `lodash modularize modern exports="npm" -o ./npm/`
	* Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	* Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	* Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	* Available under MIT license <http://lodash.com/license>
	*/
	var baseBind = require_lodash$10(), baseCreateWrapper = require_lodash$8(), isFunction = require_lodash$7();
	/**
	* Used for `Array` method references.
	*
	* Normally `Array.prototype` would suffice, however, using an array literal
	* avoids issues in Narwhal.
	*/
	var arrayRef = [];
	/** Native method shortcuts */
	var push = arrayRef.push;
	/**
	* Creates a function that, when called, either curries or invokes `func`
	* with an optional `this` binding and partially applied arguments.
	*
	* @private
	* @param {Function|string} func The function or method name to reference.
	* @param {number} bitmask The bitmask of method flags to compose.
	*  The bitmask may be composed of the following flags:
	*  1 - `_.bind`
	*  2 - `_.bindKey`
	*  4 - `_.curry`
	*  8 - `_.curry` (bound)
	*  16 - `_.partial`
	*  32 - `_.partialRight`
	* @param {Array} [partialArgs] An array of arguments to prepend to those
	*  provided to the new function.
	* @param {Array} [partialRightArgs] An array of arguments to append to those
	*  provided to the new function.
	* @param {*} [thisArg] The `this` binding of `func`.
	* @param {number} [arity] The arity of `func`.
	* @returns {Function} Returns the new function.
	*/
	function createWrapper$1(func, bitmask, partialArgs, partialRightArgs, thisArg, arity) {
		var isBind = bitmask & 1, isBindKey = bitmask & 2, isCurry = bitmask & 4, isCurryBound = bitmask & 8, isPartial = bitmask & 16, isPartialRight = bitmask & 32;
		if (!isBindKey && !isFunction(func)) throw new TypeError();
		if (isPartial && !partialArgs.length) {
			bitmask &= -17;
			isPartial = partialArgs = false;
		}
		if (isPartialRight && !partialRightArgs.length) {
			bitmask &= -33;
			isPartialRight = partialRightArgs = false;
		}
		var bindData = func && func.__bindData__;
		if (bindData && bindData !== true) {
			bindData = bindData.slice();
			if (isBind && !(bindData[1] & 1)) bindData[4] = thisArg;
			if (!isBind && bindData[1] & 1) bitmask |= 8;
			if (isCurry && !(bindData[1] & 4)) bindData[5] = arity;
			if (isPartial) push.apply(bindData[2] || (bindData[2] = []), partialArgs);
			if (isPartialRight) push.apply(bindData[3] || (bindData[3] = []), partialRightArgs);
			bindData[1] |= bitmask;
			return createWrapper$1.apply(null, bindData);
		}
		var creater = bitmask == 1 || bitmask === 17 ? baseBind : baseCreateWrapper;
		return creater([
			func,
			bitmask,
			partialArgs,
			partialRightArgs,
			thisArg,
			arity
		]);
	}
	module.exports = createWrapper$1;
} });

//#endregion
//#region node_modules/.pnpm/lodash.bind@2.3.0/node_modules/lodash.bind/index.js
var require_lodash$5 = __commonJS({ "node_modules/.pnpm/lodash.bind@2.3.0/node_modules/lodash.bind/index.js"(exports, module) {
	/**
	* Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
	* Build: `lodash modularize modern exports="npm" -o ./npm/`
	* Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	* Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	* Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	* Available under MIT license <http://lodash.com/license>
	*/
	var createWrapper = require_lodash$6(), reNative$1 = require_lodash$16(), slice = require_lodash$9();
	/**
	* Creates a function that, when called, invokes `func` with the `this`
	* binding of `thisArg` and prepends any additional `bind` arguments to those
	* provided to the bound function.
	*
	* @static
	* @memberOf _
	* @category Functions
	* @param {Function} func The function to bind.
	* @param {*} [thisArg] The `this` binding of `func`.
	* @param {...*} [arg] Arguments to be partially applied.
	* @returns {Function} Returns the new bound function.
	* @example
	*
	* var func = function(greeting) {
	*   return greeting + ' ' + this.name;
	* };
	*
	* func = _.bind(func, { 'name': 'fred' }, 'hi');
	* func();
	* // => 'hi fred'
	*/
	function bind$1(func, thisArg) {
		return arguments.length > 2 ? createWrapper(func, 17, slice(arguments, 2), null, thisArg) : createWrapper(func, 1, null, null, thisArg);
	}
	module.exports = bind$1;
} });

//#endregion
//#region node_modules/.pnpm/lodash.identity@2.3.0/node_modules/lodash.identity/index.js
var require_lodash$4 = __commonJS({ "node_modules/.pnpm/lodash.identity@2.3.0/node_modules/lodash.identity/index.js"(exports, module) {
	/**
	* Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
	* Build: `lodash modularize modern exports="npm" -o ./npm/`
	* Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	* Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	* Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	* Available under MIT license <http://lodash.com/license>
	*/
	/**
	* This method returns the first argument provided to it.
	*
	* @static
	* @memberOf _
	* @category Utilities
	* @param {*} value Any value.
	* @returns {*} Returns `value`.
	* @example
	*
	* var object = { 'name': 'fred' };
	* _.identity(object) === object;
	* // => true
	*/
	function identity$1(value) {
		return value;
	}
	module.exports = identity$1;
} });

//#endregion
//#region node_modules/.pnpm/lodash.support@2.3.0/node_modules/lodash.support/index.js
var require_lodash$3 = __commonJS({ "node_modules/.pnpm/lodash.support@2.3.0/node_modules/lodash.support/index.js"(exports, module) {
	/**
	* Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
	* Build: `lodash modularize modern exports="npm" -o ./npm/`
	* Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	* Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	* Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	* Available under MIT license <http://lodash.com/license>
	*/
	var reNative = require_lodash$16();
	/** Used to detect functions containing a `this` reference */
	var reThis$1 = /\bthis\b/;
	/**
	* An object used to flag environments features.
	*
	* @static
	* @memberOf _
	* @type Object
	*/
	var support$1 = {};
	/**
	* Detect if functions can be decompiled by `Function#toString`
	* (all but PS3 and older Opera mobile browsers & avoided in Windows 8 apps).
	*
	* @memberOf _.support
	* @type boolean
	*/
	support$1.funcDecomp = !reNative.test(global.WinRTError) && reThis$1.test(function() {
		return this;
	});
	/**
	* Detect if `Function#name` is supported (all but IE).
	*
	* @memberOf _.support
	* @type boolean
	*/
	support$1.funcNames = typeof Function.name == "string";
	module.exports = support$1;
} });

//#endregion
//#region node_modules/.pnpm/lodash._basecreatecallback@2.3.0/node_modules/lodash._basecreatecallback/index.js
var require_lodash$2 = __commonJS({ "node_modules/.pnpm/lodash._basecreatecallback@2.3.0/node_modules/lodash._basecreatecallback/index.js"(exports, module) {
	/**
	* Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
	* Build: `lodash modularize modern exports="npm" -o ./npm/`
	* Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	* Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	* Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	* Available under MIT license <http://lodash.com/license>
	*/
	var bind = require_lodash$5(), identity = require_lodash$4(), setBindData = require_lodash$11(), support = require_lodash$3();
	/** Used to detected named functions */
	var reFuncName = /^\s*function[ \n\r\t]+\w/;
	/** Used to detect functions containing a `this` reference */
	var reThis = /\bthis\b/;
	/** Native method shortcuts */
	var fnToString = Function.prototype.toString;
	/**
	* The base implementation of `_.createCallback` without support for creating
	* "_.pluck" or "_.where" style callbacks.
	*
	* @private
	* @param {*} [func=identity] The value to convert to a callback.
	* @param {*} [thisArg] The `this` binding of the created callback.
	* @param {number} [argCount] The number of arguments the callback accepts.
	* @returns {Function} Returns a callback function.
	*/
	function baseCreateCallback$2(func, thisArg, argCount) {
		if (typeof func != "function") return identity;
		if (typeof thisArg == "undefined" || !("prototype" in func)) return func;
		var bindData = func.__bindData__;
		if (typeof bindData == "undefined") {
			if (support.funcNames) bindData = !func.name;
			bindData = bindData || !support.funcDecomp;
			if (!bindData) {
				var source = fnToString.call(func);
				if (!support.funcNames) bindData = !reFuncName.test(source);
				if (!bindData) {
					bindData = reThis.test(source);
					setBindData(func, bindData);
				}
			}
		}
		if (bindData === false || bindData !== true && bindData[1] & 1) return func;
		switch (argCount) {
			case 1: return function(value) {
				return func.call(thisArg, value);
			};
			case 2: return function(a, b) {
				return func.call(thisArg, a, b);
			};
			case 3: return function(value, index, collection) {
				return func.call(thisArg, value, index, collection);
			};
			case 4: return function(accumulator, value, index, collection) {
				return func.call(thisArg, accumulator, value, index, collection);
			};
		}
		return bind(func, thisArg);
	}
	module.exports = baseCreateCallback$2;
} });

//#endregion
//#region node_modules/.pnpm/lodash.forown@2.3.0/node_modules/lodash.forown/index.js
var require_lodash$1 = __commonJS({ "node_modules/.pnpm/lodash.forown@2.3.0/node_modules/lodash.forown/index.js"(exports, module) {
	/**
	* Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
	* Build: `lodash modularize modern exports="npm" -o ./npm/`
	* Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	* Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	* Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	* Available under MIT license <http://lodash.com/license>
	*/
	var baseCreateCallback$1 = require_lodash$2(), keys$1 = require_lodash$14(), objectTypes = require_lodash$18();
	/**
	* Iterates over own enumerable properties of an object, executing the callback
	* for each property. The callback is bound to `thisArg` and invoked with three
	* arguments; (value, key, object). Callbacks may exit iteration early by
	* explicitly returning `false`.
	*
	* @static
	* @memberOf _
	* @type Function
	* @category Objects
	* @param {Object} object The object to iterate over.
	* @param {Function} [callback=identity] The function called per iteration.
	* @param {*} [thisArg] The `this` binding of `callback`.
	* @returns {Object} Returns `object`.
	* @example
	*
	* _.forOwn({ '0': 'zero', '1': 'one', 'length': 2 }, function(num, key) {
	*   console.log(key);
	* });
	* // => logs '0', '1', and 'length' (property order is not guaranteed across environments)
	*/
	var forOwn$1 = function(collection, callback, thisArg) {
		var index, iterable = collection, result = iterable;
		if (!iterable) return result;
		if (!objectTypes[typeof iterable]) return result;
		callback = callback && typeof thisArg == "undefined" ? callback : baseCreateCallback$1(callback, thisArg, 3);
		var ownIndex = -1, ownProps = objectTypes[typeof iterable] && keys$1(iterable), length = ownProps ? ownProps.length : 0;
		while (++ownIndex < length) {
			index = ownProps[ownIndex];
			if (callback(iterable[index], index, collection) === false) return result;
		}
		return result;
	};
	module.exports = forOwn$1;
} });

//#endregion
//#region node_modules/.pnpm/lodash.foreach@2.3.0/node_modules/lodash.foreach/index.js
var require_lodash = __commonJS({ "node_modules/.pnpm/lodash.foreach@2.3.0/node_modules/lodash.foreach/index.js"(exports, module) {
	/**
	* Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
	* Build: `lodash modularize modern exports="npm" -o ./npm/`
	* Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	* Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	* Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	* Available under MIT license <http://lodash.com/license>
	*/
	var baseCreateCallback = require_lodash$2(), forOwn = require_lodash$1();
	/**
	* Iterates over elements of a collection, executing the callback for each
	* element. The callback is bound to `thisArg` and invoked with three arguments;
	* (value, index|key, collection). Callbacks may exit iteration early by
	* explicitly returning `false`.
	*
	* Note: As with other "Collections" methods, objects with a `length` property
	* are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
	* may be used for object iteration.
	*
	* @static
	* @memberOf _
	* @alias each
	* @category Collections
	* @param {Array|Object|string} collection The collection to iterate over.
	* @param {Function} [callback=identity] The function called per iteration.
	* @param {*} [thisArg] The `this` binding of `callback`.
	* @returns {Array|Object|string} Returns `collection`.
	* @example
	*
	* _([1, 2, 3]).forEach(function(num) { console.log(num); }).join(',');
	* // => logs each number and returns '1,2,3'
	*
	* _.forEach({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { console.log(num); });
	* // => logs each number and returns the object (property order is not guaranteed across environments)
	*/
	function forEach(collection, callback, thisArg) {
		var index = -1, length = collection ? collection.length : 0;
		callback = callback && typeof thisArg == "undefined" ? callback : baseCreateCallback(callback, thisArg, 3);
		if (typeof length == "number") {
			while (++index < length) if (callback(collection[index], index, collection) === false) break;
		} else forOwn(collection, callback);
		return collection;
	}
	module.exports = forEach;
} });

//#endregion
//#region node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/length.js
var require_length = __commonJS({ "node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/length.js"(exports, module) {
	var metric$11, imperial$11;
	metric$11 = {
		mm: {
			name: {
				singular: "Millimeter",
				plural: "Millimeters"
			},
			to_anchor: 1 / 1e3
		},
		cm: {
			name: {
				singular: "Centimeter",
				plural: "Centimeters"
			},
			to_anchor: 1 / 100
		},
		m: {
			name: {
				singular: "Meter",
				plural: "Meters"
			},
			to_anchor: 1
		},
		km: {
			name: {
				singular: "Kilometer",
				plural: "Kilometers"
			},
			to_anchor: 1e3
		}
	};
	imperial$11 = {
		"in": {
			name: {
				singular: "Inch",
				plural: "Inches"
			},
			to_anchor: 1 / 12
		},
		yd: {
			name: {
				singular: "Yard",
				plural: "Yards"
			},
			to_anchor: 3
		},
		"ft-us": {
			name: {
				singular: "US Survey Foot",
				plural: "US Survey Feet"
			},
			to_anchor: 1.000002
		},
		ft: {
			name: {
				singular: "Foot",
				plural: "Feet"
			},
			to_anchor: 1
		},
		mi: {
			name: {
				singular: "Mile",
				plural: "Miles"
			},
			to_anchor: 5280
		}
	};
	module.exports = {
		metric: metric$11,
		imperial: imperial$11,
		_anchors: {
			metric: {
				unit: "m",
				ratio: 3.28084
			},
			imperial: {
				unit: "ft",
				ratio: 1 / 3.28084
			}
		}
	};
} });

//#endregion
//#region node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/area.js
var require_area = __commonJS({ "node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/area.js"(exports, module) {
	var metric$10, imperial$10;
	metric$10 = {
		mm2: {
			name: {
				singular: "Square Millimeter",
				plural: "Square Millimeters"
			},
			to_anchor: 1 / 1e6
		},
		cm2: {
			name: {
				singular: "Centimeter",
				plural: "Centimeters"
			},
			to_anchor: 1 / 1e4
		},
		m2: {
			name: {
				singular: "Square Meter",
				plural: "Square Meters"
			},
			to_anchor: 1
		},
		ha: {
			name: {
				singular: "Hectare",
				plural: "Hectares"
			},
			to_anchor: 1e4
		},
		km2: {
			name: {
				singular: "Square Kilometer",
				plural: "Square Kilometers"
			},
			to_anchor: 1e6
		}
	};
	imperial$10 = {
		"in2": {
			name: {
				singular: "Square Inch",
				plural: "Square Inches"
			},
			to_anchor: 1 / 144
		},
		yd2: {
			name: {
				singular: "Square Yard",
				plural: "Square Yards"
			},
			to_anchor: 9
		},
		ft2: {
			name: {
				singular: "Square Foot",
				plural: "Square Feet"
			},
			to_anchor: 1
		},
		ac: {
			name: {
				singular: "Acre",
				plural: "Acres"
			},
			to_anchor: 43560
		},
		mi2: {
			name: {
				singular: "Square Mile",
				plural: "Square Miles"
			},
			to_anchor: 27878400
		}
	};
	module.exports = {
		metric: metric$10,
		imperial: imperial$10,
		_anchors: {
			metric: {
				unit: "m2",
				ratio: 10.7639
			},
			imperial: {
				unit: "ft2",
				ratio: 1 / 10.7639
			}
		}
	};
} });

//#endregion
//#region node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/mass.js
var require_mass = __commonJS({ "node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/mass.js"(exports, module) {
	var metric$9, imperial$9;
	metric$9 = {
		mcg: {
			name: {
				singular: "Microgram",
				plural: "Micrograms"
			},
			to_anchor: 1 / 1e6
		},
		mg: {
			name: {
				singular: "Milligram",
				plural: "Milligrams"
			},
			to_anchor: 1 / 1e3
		},
		g: {
			name: {
				singular: "Gram",
				plural: "Grams"
			},
			to_anchor: 1
		},
		kg: {
			name: {
				singular: "Kilogram",
				plural: "Kilograms"
			},
			to_anchor: 1e3
		},
		mt: {
			name: {
				singular: "Metric Tonne",
				plural: "Metric Tonnes"
			},
			to_anchor: 1e6
		}
	};
	imperial$9 = {
		oz: {
			name: {
				singular: "Ounce",
				plural: "Ounces"
			},
			to_anchor: 1 / 16
		},
		lb: {
			name: {
				singular: "Pound",
				plural: "Pounds"
			},
			to_anchor: 1
		},
		t: {
			name: {
				singular: "Ton",
				plural: "Tons"
			},
			to_anchor: 2e3
		}
	};
	module.exports = {
		metric: metric$9,
		imperial: imperial$9,
		_anchors: {
			metric: {
				unit: "g",
				ratio: 1 / 453.592
			},
			imperial: {
				unit: "lb",
				ratio: 453.592
			}
		}
	};
} });

//#endregion
//#region node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/volume.js
var require_volume = __commonJS({ "node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/volume.js"(exports, module) {
	var metric$8, imperial$8;
	metric$8 = {
		mm3: {
			name: {
				singular: "Cubic Millimeter",
				plural: "Cubic Millimeters"
			},
			to_anchor: 1 / 1e6
		},
		cm3: {
			name: {
				singular: "Cubic Centimeter",
				plural: "Cubic Centimeters"
			},
			to_anchor: 1 / 1e3
		},
		ml: {
			name: {
				singular: "Millilitre",
				plural: "Millilitres"
			},
			to_anchor: 1 / 1e3
		},
		cl: {
			name: {
				singular: "Centilitre",
				plural: "Centilitres"
			},
			to_anchor: 1 / 100
		},
		dl: {
			name: {
				singular: "Decilitre",
				plural: "Decilitres"
			},
			to_anchor: 1 / 10
		},
		l: {
			name: {
				singular: "Litre",
				plural: "Litres"
			},
			to_anchor: 1
		},
		kl: {
			name: {
				singular: "Kilolitre",
				plural: "Kilolitres"
			},
			to_anchor: 1e3
		},
		m3: {
			name: {
				singular: "Cubic meter",
				plural: "Cubic meters"
			},
			to_anchor: 1e3
		},
		km3: {
			name: {
				singular: "Cubic kilometer",
				plural: "Cubic kilometers"
			},
			to_anchor: 1e12
		},
		krm: {
			name: {
				singular: "Matsked",
				plural: "Matskedar"
			},
			to_anchor: 1 / 1e3
		},
		tsk: {
			name: {
				singular: "Tesked",
				plural: "Teskedar"
			},
			to_anchor: 5 / 1e3
		},
		msk: {
			name: {
				singular: "Matsked",
				plural: "Matskedar"
			},
			to_anchor: 15 / 1e3
		},
		kkp: {
			name: {
				singular: "Kaffekopp",
				plural: "Kaffekoppar"
			},
			to_anchor: 150 / 1e3
		},
		glas: {
			name: {
				singular: "Glas",
				plural: "Glas"
			},
			to_anchor: 200 / 1e3
		},
		kanna: {
			name: {
				singular: "Kanna",
				plural: "Kannor"
			},
			to_anchor: 2.617
		}
	};
	imperial$8 = {
		tsp: {
			name: {
				singular: "Teaspoon",
				plural: "Teaspoons"
			},
			to_anchor: 1 / 6
		},
		Tbs: {
			name: {
				singular: "Tablespoon",
				plural: "Tablespoons"
			},
			to_anchor: 1 / 2
		},
		in3: {
			name: {
				singular: "Cubic inch",
				plural: "Cubic inches"
			},
			to_anchor: .55411
		},
		"fl-oz": {
			name: {
				singular: "Fluid Ounce",
				plural: "Fluid Ounces"
			},
			to_anchor: 1
		},
		cup: {
			name: {
				singular: "Cup",
				plural: "Cups"
			},
			to_anchor: 8
		},
		pnt: {
			name: {
				singular: "Pint",
				plural: "Pints"
			},
			to_anchor: 16
		},
		qt: {
			name: {
				singular: "Quart",
				plural: "Quarts"
			},
			to_anchor: 32
		},
		gal: {
			name: {
				singular: "Gallon",
				plural: "Gallons"
			},
			to_anchor: 128
		},
		ft3: {
			name: {
				singular: "Cubic foot",
				plural: "Cubic feet"
			},
			to_anchor: 957.506
		},
		yd3: {
			name: {
				singular: "Cubic yard",
				plural: "Cubic yards"
			},
			to_anchor: 25852.7
		}
	};
	module.exports = {
		metric: metric$8,
		imperial: imperial$8,
		_anchors: {
			metric: {
				unit: "l",
				ratio: 33.8140226
			},
			imperial: {
				unit: "fl-oz",
				ratio: 1 / 33.8140226
			}
		}
	};
} });

//#endregion
//#region node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/each.js
var require_each = __commonJS({ "node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/each.js"(exports, module) {
	var metric$7, imperial$7;
	metric$7 = {
		ea: {
			name: {
				singular: "Each",
				plural: "Each"
			},
			to_anchor: 1
		},
		dz: {
			name: {
				singular: "Dozen",
				plural: "Dozens"
			},
			to_anchor: 12
		}
	};
	module.exports = {
		metric: metric$7,
		imperial: {},
		_anchors: { metric: {
			unit: "ea",
			ratio: 1
		} }
	};
} });

//#endregion
//#region node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/temperature.js
var require_temperature = __commonJS({ "node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/temperature.js"(exports, module) {
	var metric$6, imperial$6;
	metric$6 = {
		C: {
			name: {
				singular: "degree Celsius",
				plural: "degrees Celsius"
			},
			to_anchor: 1,
			anchor_shift: 0
		},
		K: {
			name: {
				singular: "degree Kelvin",
				plural: "degrees Kelvin"
			},
			to_anchor: 1,
			anchor_shift: 273.15
		}
	};
	imperial$6 = {
		F: {
			name: {
				singular: "degree Fahrenheit",
				plural: "degrees Fahrenheit"
			},
			to_anchor: 1
		},
		R: {
			name: {
				singular: "degree Rankine",
				plural: "degrees Rankine"
			},
			to_anchor: 1,
			anchor_shift: 459.67
		}
	};
	module.exports = {
		metric: metric$6,
		imperial: imperial$6,
		_anchors: {
			metric: {
				unit: "C",
				transform: function(C) {
					return C / (5 / 9) + 32;
				}
			},
			imperial: {
				unit: "F",
				transform: function(F) {
					return (F - 32) * (5 / 9);
				}
			}
		}
	};
} });

//#endregion
//#region node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/time.js
var require_time = __commonJS({ "node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/time.js"(exports, module) {
	var time;
	var daysInYear = 365.25;
	time = {
		ns: {
			name: {
				singular: "Nanosecond",
				plural: "Nanoseconds"
			},
			to_anchor: 1 / 1e9
		},
		mu: {
			name: {
				singular: "Microsecond",
				plural: "Microseconds"
			},
			to_anchor: 1 / 1e6
		},
		ms: {
			name: {
				singular: "Millisecond",
				plural: "Milliseconds"
			},
			to_anchor: 1 / 1e3
		},
		s: {
			name: {
				singular: "Second",
				plural: "Seconds"
			},
			to_anchor: 1
		},
		min: {
			name: {
				singular: "Minute",
				plural: "Minutes"
			},
			to_anchor: 60
		},
		h: {
			name: {
				singular: "Hour",
				plural: "Hours"
			},
			to_anchor: 60 * 60
		},
		d: {
			name: {
				singular: "Day",
				plural: "Days"
			},
			to_anchor: 60 * 60 * 24
		},
		week: {
			name: {
				singular: "Week",
				plural: "Weeks"
			},
			to_anchor: 60 * 60 * 24 * 7
		},
		month: {
			name: {
				singular: "Month",
				plural: "Months"
			},
			to_anchor: 60 * 60 * 24 * daysInYear / 12
		},
		year: {
			name: {
				singular: "Year",
				plural: "Years"
			},
			to_anchor: 60 * 60 * 24 * daysInYear
		}
	};
	module.exports = {
		metric: time,
		_anchors: { metric: {
			unit: "s",
			ratio: 1
		} }
	};
} });

//#endregion
//#region node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/digital.js
var require_digital = __commonJS({ "node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/digital.js"(exports, module) {
	var bits, bytes;
	bits = {
		b: {
			name: {
				singular: "Bit",
				plural: "Bits"
			},
			to_anchor: 1
		},
		Kb: {
			name: {
				singular: "Kilobit",
				plural: "Kilobits"
			},
			to_anchor: 1024
		},
		Mb: {
			name: {
				singular: "Megabit",
				plural: "Megabits"
			},
			to_anchor: 1048576
		},
		Gb: {
			name: {
				singular: "Gigabit",
				plural: "Gigabits"
			},
			to_anchor: 1073741824
		},
		Tb: {
			name: {
				singular: "Terabit",
				plural: "Terabits"
			},
			to_anchor: 1099511627776
		}
	};
	bytes = {
		B: {
			name: {
				singular: "Byte",
				plural: "Bytes"
			},
			to_anchor: 1
		},
		KB: {
			name: {
				singular: "Kilobyte",
				plural: "Kilobytes"
			},
			to_anchor: 1024
		},
		MB: {
			name: {
				singular: "Megabyte",
				plural: "Megabytes"
			},
			to_anchor: 1048576
		},
		GB: {
			name: {
				singular: "Gigabyte",
				plural: "Gigabytes"
			},
			to_anchor: 1073741824
		},
		TB: {
			name: {
				singular: "Terabyte",
				plural: "Terabytes"
			},
			to_anchor: 1099511627776
		}
	};
	module.exports = {
		bits,
		bytes,
		_anchors: {
			bits: {
				unit: "b",
				ratio: 1 / 8
			},
			bytes: {
				unit: "B",
				ratio: 8
			}
		}
	};
} });

//#endregion
//#region node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/partsPer.js
var require_partsPer = __commonJS({ "node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/partsPer.js"(exports, module) {
	var metric$5, imperial$5;
	metric$5 = {
		ppm: {
			name: {
				singular: "Part-per Million",
				plural: "Parts-per Million"
			},
			to_anchor: 1
		},
		ppb: {
			name: {
				singular: "Part-per Billion",
				plural: "Parts-per Billion"
			},
			to_anchor: .001
		},
		ppt: {
			name: {
				singular: "Part-per Trillion",
				plural: "Parts-per Trillion"
			},
			to_anchor: 1e-6
		},
		ppq: {
			name: {
				singular: "Part-per Quadrillion",
				plural: "Parts-per Quadrillion"
			},
			to_anchor: 1e-9
		}
	};
	module.exports = {
		metric: metric$5,
		imperial: {},
		_anchors: { metric: {
			unit: "ppm",
			ratio: 1e-6
		} }
	};
} });

//#endregion
//#region node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/speed.js
var require_speed = __commonJS({ "node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/speed.js"(exports, module) {
	var metric$4, imperial$4;
	metric$4 = {
		"m/s": {
			name: {
				singular: "Metre per second",
				plural: "Metres per second"
			},
			to_anchor: 3.6
		},
		"km/h": {
			name: {
				singular: "Kilometre per hour",
				plural: "Kilometres per hour"
			},
			to_anchor: 1
		}
	};
	imperial$4 = {
		"m/h": {
			name: {
				singular: "Mile per hour",
				plural: "Miles per hour"
			},
			to_anchor: 1
		},
		knot: {
			name: {
				singular: "Knot",
				plural: "Knots"
			},
			to_anchor: 1.150779
		},
		"ft/s": {
			name: {
				singular: "Foot per second",
				plural: "Feet per second"
			},
			to_anchor: .681818
		}
	};
	module.exports = {
		metric: metric$4,
		imperial: imperial$4,
		_anchors: {
			metric: {
				unit: "km/h",
				ratio: 1 / 1.609344
			},
			imperial: {
				unit: "m/h",
				ratio: 1.609344
			}
		}
	};
} });

//#endregion
//#region node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/pace.js
var require_pace = __commonJS({ "node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/pace.js"(exports, module) {
	var metric$3, imperial$3;
	metric$3 = {
		"min/km": {
			name: {
				singular: "Minute per kilometre",
				plural: "Minutes per kilometre"
			},
			to_anchor: .06
		},
		"s/m": {
			name: {
				singular: "Second per metre",
				plural: "Seconds per metre"
			},
			to_anchor: 1
		}
	};
	imperial$3 = {
		"min/mi": {
			name: {
				singular: "Minute per mile",
				plural: "Minutes per mile"
			},
			to_anchor: .0113636
		},
		"s/ft": {
			name: {
				singular: "Second per foot",
				plural: "Seconds per foot"
			},
			to_anchor: 1
		}
	};
	module.exports = {
		metric: metric$3,
		imperial: imperial$3,
		_anchors: {
			metric: {
				unit: "s/m",
				ratio: .3048
			},
			imperial: {
				unit: "s/ft",
				ratio: 1 / .3048
			}
		}
	};
} });

//#endregion
//#region node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/pressure.js
var require_pressure = __commonJS({ "node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/pressure.js"(exports, module) {
	var metric$2, imperial$2;
	metric$2 = {
		Pa: {
			name: {
				singular: "pascal",
				plural: "pascals"
			},
			to_anchor: 1 / 1e3
		},
		kPa: {
			name: {
				singular: "kilopascal",
				plural: "kilopascals"
			},
			to_anchor: 1
		},
		MPa: {
			name: {
				singular: "megapascal",
				plural: "megapascals"
			},
			to_anchor: 1e3
		},
		hPa: {
			name: {
				singular: "hectopascal",
				plural: "hectopascals"
			},
			to_anchor: 1 / 10
		},
		bar: {
			name: {
				singular: "bar",
				plural: "bar"
			},
			to_anchor: 100
		},
		torr: {
			name: {
				singular: "torr",
				plural: "torr"
			},
			to_anchor: 101325 / 76e4
		}
	};
	imperial$2 = {
		psi: {
			name: {
				singular: "pound per square inch",
				plural: "pounds per square inch"
			},
			to_anchor: 1 / 1e3
		},
		ksi: {
			name: {
				singular: "kilopound per square inch",
				plural: "kilopound per square inch"
			},
			to_anchor: 1
		}
	};
	module.exports = {
		metric: metric$2,
		imperial: imperial$2,
		_anchors: {
			metric: {
				unit: "kPa",
				ratio: .00014503768078
			},
			imperial: {
				unit: "psi",
				ratio: 1 / .00014503768078
			}
		}
	};
} });

//#endregion
//#region node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/current.js
var require_current = __commonJS({ "node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/current.js"(exports, module) {
	var current;
	current = {
		A: {
			name: {
				singular: "Ampere",
				plural: "Amperes"
			},
			to_anchor: 1
		},
		mA: {
			name: {
				singular: "Milliampere",
				plural: "Milliamperes"
			},
			to_anchor: .001
		},
		kA: {
			name: {
				singular: "Kiloampere",
				plural: "Kiloamperes"
			},
			to_anchor: 1e3
		}
	};
	module.exports = {
		metric: current,
		_anchors: { metric: {
			unit: "A",
			ratio: 1
		} }
	};
} });

//#endregion
//#region node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/voltage.js
var require_voltage = __commonJS({ "node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/voltage.js"(exports, module) {
	var voltage;
	voltage = {
		V: {
			name: {
				singular: "Volt",
				plural: "Volts"
			},
			to_anchor: 1
		},
		mV: {
			name: {
				singular: "Millivolt",
				plural: "Millivolts"
			},
			to_anchor: .001
		},
		kV: {
			name: {
				singular: "Kilovolt",
				plural: "Kilovolts"
			},
			to_anchor: 1e3
		}
	};
	module.exports = {
		metric: voltage,
		_anchors: { metric: {
			unit: "V",
			ratio: 1
		} }
	};
} });

//#endregion
//#region node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/power.js
var require_power = __commonJS({ "node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/power.js"(exports, module) {
	var power;
	power = {
		W: {
			name: {
				singular: "Watt",
				plural: "Watts"
			},
			to_anchor: 1
		},
		mW: {
			name: {
				singular: "Milliwatt",
				plural: "Milliwatts"
			},
			to_anchor: .001
		},
		kW: {
			name: {
				singular: "Kilowatt",
				plural: "Kilowatts"
			},
			to_anchor: 1e3
		},
		MW: {
			name: {
				singular: "Megawatt",
				plural: "Megawatts"
			},
			to_anchor: 1e6
		},
		GW: {
			name: {
				singular: "Gigawatt",
				plural: "Gigawatts"
			},
			to_anchor: 1e9
		}
	};
	module.exports = {
		metric: power,
		_anchors: { metric: {
			unit: "W",
			ratio: 1
		} }
	};
} });

//#endregion
//#region node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/reactivePower.js
var require_reactivePower = __commonJS({ "node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/reactivePower.js"(exports, module) {
	var reactivePower;
	reactivePower = {
		VAR: {
			name: {
				singular: "Volt-Ampere Reactive",
				plural: "Volt-Amperes Reactive"
			},
			to_anchor: 1
		},
		mVAR: {
			name: {
				singular: "Millivolt-Ampere Reactive",
				plural: "Millivolt-Amperes Reactive"
			},
			to_anchor: .001
		},
		kVAR: {
			name: {
				singular: "Kilovolt-Ampere Reactive",
				plural: "Kilovolt-Amperes Reactive"
			},
			to_anchor: 1e3
		},
		MVAR: {
			name: {
				singular: "Megavolt-Ampere Reactive",
				plural: "Megavolt-Amperes Reactive"
			},
			to_anchor: 1e6
		},
		GVAR: {
			name: {
				singular: "Gigavolt-Ampere Reactive",
				plural: "Gigavolt-Amperes Reactive"
			},
			to_anchor: 1e9
		}
	};
	module.exports = {
		metric: reactivePower,
		_anchors: { metric: {
			unit: "VAR",
			ratio: 1
		} }
	};
} });

//#endregion
//#region node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/apparentPower.js
var require_apparentPower = __commonJS({ "node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/apparentPower.js"(exports, module) {
	var apparentPower;
	apparentPower = {
		VA: {
			name: {
				singular: "Volt-Ampere",
				plural: "Volt-Amperes"
			},
			to_anchor: 1
		},
		mVA: {
			name: {
				singular: "Millivolt-Ampere",
				plural: "Millivolt-Amperes"
			},
			to_anchor: .001
		},
		kVA: {
			name: {
				singular: "Kilovolt-Ampere",
				plural: "Kilovolt-Amperes"
			},
			to_anchor: 1e3
		},
		MVA: {
			name: {
				singular: "Megavolt-Ampere",
				plural: "Megavolt-Amperes"
			},
			to_anchor: 1e6
		},
		GVA: {
			name: {
				singular: "Gigavolt-Ampere",
				plural: "Gigavolt-Amperes"
			},
			to_anchor: 1e9
		}
	};
	module.exports = {
		metric: apparentPower,
		_anchors: { metric: {
			unit: "VA",
			ratio: 1
		} }
	};
} });

//#endregion
//#region node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/energy.js
var require_energy = __commonJS({ "node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/energy.js"(exports, module) {
	var energy;
	energy = {
		Wh: {
			name: {
				singular: "Watt-hour",
				plural: "Watt-hours"
			},
			to_anchor: 3600
		},
		mWh: {
			name: {
				singular: "Milliwatt-hour",
				plural: "Milliwatt-hours"
			},
			to_anchor: 3.6
		},
		kWh: {
			name: {
				singular: "Kilowatt-hour",
				plural: "Kilowatt-hours"
			},
			to_anchor: 36e5
		},
		MWh: {
			name: {
				singular: "Megawatt-hour",
				plural: "Megawatt-hours"
			},
			to_anchor: 36e8
		},
		GWh: {
			name: {
				singular: "Gigawatt-hour",
				plural: "Gigawatt-hours"
			},
			to_anchor: 36e11
		},
		J: {
			name: {
				singular: "Joule",
				plural: "Joules"
			},
			to_anchor: 1
		},
		kJ: {
			name: {
				singular: "Kilojoule",
				plural: "Kilojoules"
			},
			to_anchor: 1e3
		}
	};
	module.exports = {
		metric: energy,
		_anchors: { metric: {
			unit: "J",
			ratio: 1
		} }
	};
} });

//#endregion
//#region node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/reactiveEnergy.js
var require_reactiveEnergy = __commonJS({ "node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/reactiveEnergy.js"(exports, module) {
	var reactiveEnergy;
	reactiveEnergy = {
		VARh: {
			name: {
				singular: "Volt-Ampere Reactive Hour",
				plural: "Volt-Amperes Reactive Hour"
			},
			to_anchor: 1
		},
		mVARh: {
			name: {
				singular: "Millivolt-Ampere Reactive Hour",
				plural: "Millivolt-Amperes Reactive Hour"
			},
			to_anchor: .001
		},
		kVARh: {
			name: {
				singular: "Kilovolt-Ampere Reactive Hour",
				plural: "Kilovolt-Amperes Reactive Hour"
			},
			to_anchor: 1e3
		},
		MVARh: {
			name: {
				singular: "Megavolt-Ampere Reactive Hour",
				plural: "Megavolt-Amperes Reactive Hour"
			},
			to_anchor: 1e6
		},
		GVARh: {
			name: {
				singular: "Gigavolt-Ampere Reactive Hour",
				plural: "Gigavolt-Amperes Reactive Hour"
			},
			to_anchor: 1e9
		}
	};
	module.exports = {
		metric: reactiveEnergy,
		_anchors: { metric: {
			unit: "VARh",
			ratio: 1
		} }
	};
} });

//#endregion
//#region node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/volumeFlowRate.js
var require_volumeFlowRate = __commonJS({ "node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/volumeFlowRate.js"(exports, module) {
	var metric$1, imperial$1;
	metric$1 = {
		"mm3/s": {
			name: {
				singular: "Cubic Millimeter per second",
				plural: "Cubic Millimeters per second"
			},
			to_anchor: 1 / 1e6
		},
		"cm3/s": {
			name: {
				singular: "Cubic Centimeter per second",
				plural: "Cubic Centimeters per second"
			},
			to_anchor: 1 / 1e3
		},
		"ml/s": {
			name: {
				singular: "Millilitre per second",
				plural: "Millilitres per second"
			},
			to_anchor: 1 / 1e3
		},
		"cl/s": {
			name: {
				singular: "Centilitre per second",
				plural: "Centilitres per second"
			},
			to_anchor: 1 / 100
		},
		"dl/s": {
			name: {
				singular: "Decilitre per second",
				plural: "Decilitres per second"
			},
			to_anchor: 1 / 10
		},
		"l/s": {
			name: {
				singular: "Litre per second",
				plural: "Litres per second"
			},
			to_anchor: 1
		},
		"l/min": {
			name: {
				singular: "Litre per minute",
				plural: "Litres per minute"
			},
			to_anchor: 1 / 60
		},
		"l/h": {
			name: {
				singular: "Litre per hour",
				plural: "Litres per hour"
			},
			to_anchor: 1 / 3600
		},
		"kl/s": {
			name: {
				singular: "Kilolitre per second",
				plural: "Kilolitres per second"
			},
			to_anchor: 1e3
		},
		"kl/min": {
			name: {
				singular: "Kilolitre per minute",
				plural: "Kilolitres per minute"
			},
			to_anchor: 50 / 3
		},
		"kl/h": {
			name: {
				singular: "Kilolitre per hour",
				plural: "Kilolitres per hour"
			},
			to_anchor: 5 / 18
		},
		"m3/s": {
			name: {
				singular: "Cubic meter per second",
				plural: "Cubic meters per second"
			},
			to_anchor: 1e3
		},
		"m3/min": {
			name: {
				singular: "Cubic meter per minute",
				plural: "Cubic meters per minute"
			},
			to_anchor: 50 / 3
		},
		"m3/h": {
			name: {
				singular: "Cubic meter per hour",
				plural: "Cubic meters per hour"
			},
			to_anchor: 5 / 18
		},
		"km3/s": {
			name: {
				singular: "Cubic kilometer per second",
				plural: "Cubic kilometers per second"
			},
			to_anchor: 1e12
		}
	};
	imperial$1 = {
		"tsp/s": {
			name: {
				singular: "Teaspoon per second",
				plural: "Teaspoons per second"
			},
			to_anchor: 1 / 6
		},
		"Tbs/s": {
			name: {
				singular: "Tablespoon per second",
				plural: "Tablespoons per second"
			},
			to_anchor: 1 / 2
		},
		"in3/s": {
			name: {
				singular: "Cubic inch per second",
				plural: "Cubic inches per second"
			},
			to_anchor: .55411
		},
		"in3/min": {
			name: {
				singular: "Cubic inch per minute",
				plural: "Cubic inches per minute"
			},
			to_anchor: .55411 / 60
		},
		"in3/h": {
			name: {
				singular: "Cubic inch per hour",
				plural: "Cubic inches per hour"
			},
			to_anchor: .55411 / 3600
		},
		"fl-oz/s": {
			name: {
				singular: "Fluid Ounce per second",
				plural: "Fluid Ounces per second"
			},
			to_anchor: 1
		},
		"fl-oz/min": {
			name: {
				singular: "Fluid Ounce per minute",
				plural: "Fluid Ounces per minute"
			},
			to_anchor: 1 / 60
		},
		"fl-oz/h": {
			name: {
				singular: "Fluid Ounce per hour",
				plural: "Fluid Ounces per hour"
			},
			to_anchor: 1 / 3600
		},
		"cup/s": {
			name: {
				singular: "Cup per second",
				plural: "Cups per second"
			},
			to_anchor: 8
		},
		"pnt/s": {
			name: {
				singular: "Pint per second",
				plural: "Pints per second"
			},
			to_anchor: 16
		},
		"pnt/min": {
			name: {
				singular: "Pint per minute",
				plural: "Pints per minute"
			},
			to_anchor: 4 / 15
		},
		"pnt/h": {
			name: {
				singular: "Pint per hour",
				plural: "Pints per hour"
			},
			to_anchor: 1 / 225
		},
		"qt/s": {
			name: {
				singular: "Quart per second",
				plural: "Quarts per second"
			},
			to_anchor: 32
		},
		"gal/s": {
			name: {
				singular: "Gallon per second",
				plural: "Gallons per second"
			},
			to_anchor: 128
		},
		"gal/min": {
			name: {
				singular: "Gallon per minute",
				plural: "Gallons per minute"
			},
			to_anchor: 32 / 15
		},
		"gal/h": {
			name: {
				singular: "Gallon per hour",
				plural: "Gallons per hour"
			},
			to_anchor: 8 / 225
		},
		"ft3/s": {
			name: {
				singular: "Cubic foot per second",
				plural: "Cubic feet per second"
			},
			to_anchor: 957.506
		},
		"ft3/min": {
			name: {
				singular: "Cubic foot per minute",
				plural: "Cubic feet per minute"
			},
			to_anchor: 957.506 / 60
		},
		"ft3/h": {
			name: {
				singular: "Cubic foot per hour",
				plural: "Cubic feet per hour"
			},
			to_anchor: 957.506 / 3600
		},
		"yd3/s": {
			name: {
				singular: "Cubic yard per second",
				plural: "Cubic yards per second"
			},
			to_anchor: 25852.7
		},
		"yd3/min": {
			name: {
				singular: "Cubic yard per minute",
				plural: "Cubic yards per minute"
			},
			to_anchor: 25852.7 / 60
		},
		"yd3/h": {
			name: {
				singular: "Cubic yard per hour",
				plural: "Cubic yards per hour"
			},
			to_anchor: 25852.7 / 3600
		}
	};
	module.exports = {
		metric: metric$1,
		imperial: imperial$1,
		_anchors: {
			metric: {
				unit: "l/s",
				ratio: 33.8140227
			},
			imperial: {
				unit: "fl-oz/s",
				ratio: 1 / 33.8140227
			}
		}
	};
} });

//#endregion
//#region node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/illuminance.js
var require_illuminance = __commonJS({ "node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/illuminance.js"(exports, module) {
	var metric, imperial;
	metric = { "lx": {
		name: {
			singular: "Lux",
			plural: "Lux"
		},
		to_anchor: 1
	} };
	imperial = { "ft-cd": {
		name: {
			singular: "Foot-candle",
			plural: "Foot-candles"
		},
		to_anchor: 1
	} };
	module.exports = {
		metric,
		imperial,
		_anchors: {
			metric: {
				unit: "lx",
				ratio: 1 / 10.76391
			},
			imperial: {
				unit: "ft-cd",
				ratio: 10.76391
			}
		}
	};
} });

//#endregion
//#region node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/frequency.js
var require_frequency = __commonJS({ "node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/frequency.js"(exports, module) {
	var frequency;
	frequency = {
		mHz: {
			name: {
				singular: "millihertz",
				plural: "millihertz"
			},
			to_anchor: 1 / 1e3
		},
		Hz: {
			name: {
				singular: "hertz",
				plural: "hertz"
			},
			to_anchor: 1
		},
		kHz: {
			name: {
				singular: "kilohertz",
				plural: "kilohertz"
			},
			to_anchor: 1e3
		},
		MHz: {
			name: {
				singular: "megahertz",
				plural: "megahertz"
			},
			to_anchor: 1e3 * 1e3
		},
		GHz: {
			name: {
				singular: "gigahertz",
				plural: "gigahertz"
			},
			to_anchor: 1e3 * 1e3 * 1e3
		},
		THz: {
			name: {
				singular: "terahertz",
				plural: "terahertz"
			},
			to_anchor: 1e3 * 1e3 * 1e3 * 1e3
		},
		rpm: {
			name: {
				singular: "rotation per minute",
				plural: "rotations per minute"
			},
			to_anchor: 1 / 60
		},
		"deg/s": {
			name: {
				singular: "degree per second",
				plural: "degrees per second"
			},
			to_anchor: 1 / 360
		},
		"rad/s": {
			name: {
				singular: "radian per second",
				plural: "radians per second"
			},
			to_anchor: 1 / (Math.PI * 2)
		}
	};
	module.exports = {
		metric: frequency,
		_anchors: { frequency: {
			unit: "hz",
			ratio: 1
		} }
	};
} });

//#endregion
//#region node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/angle.js
var require_angle = __commonJS({ "node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/definitions/angle.js"(exports, module) {
	var angle;
	angle = {
		rad: {
			name: {
				singular: "radian",
				plural: "radians"
			},
			to_anchor: 180 / Math.PI
		},
		deg: {
			name: {
				singular: "degree",
				plural: "degrees"
			},
			to_anchor: 1
		},
		grad: {
			name: {
				singular: "gradian",
				plural: "gradians"
			},
			to_anchor: 9 / 10
		},
		arcmin: {
			name: {
				singular: "arcminute",
				plural: "arcminutes"
			},
			to_anchor: 1 / 60
		},
		arcsec: {
			name: {
				singular: "arcsecond",
				plural: "arcseconds"
			},
			to_anchor: 1 / 3600
		}
	};
	module.exports = {
		metric: angle,
		_anchors: { metric: {
			unit: "deg",
			ratio: 1
		} }
	};
} });

//#endregion
//#region node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/index.js
var require_lib = __commonJS({ "node_modules/.pnpm/convert-units@2.3.4/node_modules/convert-units/lib/index.js"(exports, module) {
	var convert, keys = require_lodash$14(), each = require_lodash(), measures = {
		length: require_length(),
		area: require_area(),
		mass: require_mass(),
		volume: require_volume(),
		each: require_each(),
		temperature: require_temperature(),
		time: require_time(),
		digital: require_digital(),
		partsPer: require_partsPer(),
		speed: require_speed(),
		pace: require_pace(),
		pressure: require_pressure(),
		current: require_current(),
		voltage: require_voltage(),
		power: require_power(),
		reactivePower: require_reactivePower(),
		apparentPower: require_apparentPower(),
		energy: require_energy(),
		reactiveEnergy: require_reactiveEnergy(),
		volumeFlowRate: require_volumeFlowRate(),
		illuminance: require_illuminance(),
		frequency: require_frequency(),
		angle: require_angle()
	}, Converter;
	Converter = function(numerator, denominator) {
		if (denominator) this.val = numerator / denominator;
		else this.val = numerator;
	};
	/**
	* Lets the converter know the source unit abbreviation
	*/
	Converter.prototype.from = function(from) {
		if (this.destination) throw new Error(".from must be called before .to");
		this.origin = this.getUnit(from);
		if (!this.origin) this.throwUnsupportedUnitError(from);
		return this;
	};
	/**
	* Converts the unit and returns the value
	*/
	Converter.prototype.to = function(to) {
		if (!this.origin) throw new Error(".to must be called after .from");
		this.destination = this.getUnit(to);
		var result, transform;
		if (!this.destination) this.throwUnsupportedUnitError(to);
		if (this.origin.abbr === this.destination.abbr) return this.val;
		if (this.destination.measure != this.origin.measure) throw new Error("Cannot convert incompatible measures of " + this.destination.measure + " and " + this.origin.measure);
		/**
		* Convert from the source value to its anchor inside the system
		*/
		result = this.val * this.origin.unit.to_anchor;
		/**
		* For some changes it's a simple shift (C to K)
		* So we'll add it when convering into the unit (later)
		* and subtract it when converting from the unit
		*/
		if (this.origin.unit.anchor_shift) result -= this.origin.unit.anchor_shift;
		/**
		* Convert from one system to another through the anchor ratio. Some conversions
		* aren't ratio based or require more than a simple shift. We can provide a custom
		* transform here to provide the direct result
		*/
		if (this.origin.system != this.destination.system) {
			transform = measures[this.origin.measure]._anchors[this.origin.system].transform;
			if (typeof transform === "function") result = transform(result);
			else result *= measures[this.origin.measure]._anchors[this.origin.system].ratio;
		}
		/**
		* This shift has to be done after the system conversion business
		*/
		if (this.destination.unit.anchor_shift) result += this.destination.unit.anchor_shift;
		/**
		* Convert to another unit inside the destination system
		*/
		return result / this.destination.unit.to_anchor;
	};
	/**
	* Converts the unit to the best available unit.
	*/
	Converter.prototype.toBest = function(options) {
		if (!this.origin) throw new Error(".toBest must be called after .from");
		var options = Object.assign({
			exclude: [],
			cutOffNumber: 1
		}, options);
		var best;
		/**
		Looks through every possibility for the 'best' available unit.
		i.e. Where the value has the fewest numbers before the decimal point,
		but is still higher than 1.
		*/
		each(this.possibilities(), function(possibility) {
			var unit = this.describe(possibility);
			var isIncluded = options.exclude.indexOf(possibility) === -1;
			if (isIncluded && unit.system === this.origin.system) {
				var result = this.to(possibility);
				if (!best || result >= options.cutOffNumber && result < best.val) best = {
					val: result,
					unit: possibility,
					singular: unit.singular,
					plural: unit.plural
				};
			}
		}.bind(this));
		return best;
	};
	/**
	* Finds the unit
	*/
	Converter.prototype.getUnit = function(abbr) {
		var found;
		each(measures, function(systems, measure) {
			each(systems, function(units, system) {
				if (system == "_anchors") return false;
				each(units, function(unit, testAbbr) {
					if (testAbbr == abbr) {
						found = {
							abbr,
							measure,
							system,
							unit
						};
						return false;
					}
				});
				if (found) return false;
			});
			if (found) return false;
		});
		return found;
	};
	var describe = function(resp) {
		return {
			abbr: resp.abbr,
			measure: resp.measure,
			system: resp.system,
			singular: resp.unit.name.singular,
			plural: resp.unit.name.plural
		};
	};
	/**
	* An alias for getUnit
	*/
	Converter.prototype.describe = function(abbr) {
		var resp = Converter.prototype.getUnit(abbr);
		var desc = null;
		try {
			desc = describe(resp);
		} catch (err) {
			this.throwUnsupportedUnitError(abbr);
		}
		return desc;
	};
	/**
	* Detailed list of all supported units
	*/
	Converter.prototype.list = function(measure) {
		var list = [];
		each(measures, function(systems, testMeasure) {
			if (measure && measure !== testMeasure) return;
			each(systems, function(units, system) {
				if (system == "_anchors") return false;
				each(units, function(unit, abbr) {
					list = list.concat(describe({
						abbr,
						measure: testMeasure,
						system,
						unit
					}));
				});
			});
		});
		return list;
	};
	Converter.prototype.throwUnsupportedUnitError = function(what) {
		var validUnits = [];
		each(measures, function(systems, measure) {
			each(systems, function(units, system) {
				if (system == "_anchors") return false;
				validUnits = validUnits.concat(keys(units));
			});
		});
		throw new Error("Unsupported unit " + what + ", use one of: " + validUnits.join(", "));
	};
	/**
	* Returns the abbreviated measures that the value can be
	* converted to.
	*/
	Converter.prototype.possibilities = function(measure) {
		var possibilities = [];
		if (!this.origin && !measure) each(keys(measures), function(measure$1) {
			each(measures[measure$1], function(units, system) {
				if (system == "_anchors") return false;
				possibilities = possibilities.concat(keys(units));
			});
		});
		else {
			measure = measure || this.origin.measure;
			each(measures[measure], function(units, system) {
				if (system == "_anchors") return false;
				possibilities = possibilities.concat(keys(units));
			});
		}
		return possibilities;
	};
	/**
	* Returns the abbreviated measures that the value can be
	* converted to.
	*/
	Converter.prototype.measures = function() {
		return keys(measures);
	};
	convert = function(value) {
		return new Converter(value);
	};
	module.exports = convert;
} });
var import_lib = __toESM(require_lib(), 1);

//#endregion
//#region src/suggest/to-unit-suggest.ts
var DestinationUnitSuggest = class extends obsidian.EditorSuggest {
	constructor(plugin) {
		super(plugin.app);
	}
	onTrigger(cursor, editor) {
		const line = editor.getLine(cursor.line);
		const subString = line.substring(0, cursor.ch);
		const match = subString.match(/\[([\d.]+)([a-zA-Z0-9\-/]+)\|([a-zA-Z0-9-]*)/);
		if (!match) return null;
		const [, , fromUnit] = match;
		try {
			(0, import_lib.default)().from(fromUnit);
			const pipeIndex = subString.lastIndexOf("|");
			return {
				start: {
					line: cursor.line,
					ch: pipeIndex + 1
				},
				end: {
					line: cursor.line,
					ch: cursor.ch
				},
				query: fromUnit
			};
		} catch {
			return null;
		}
	}
	getSuggestions(context) {
		const fromUnit = context.query;
		try {
			const line = context.editor.getLine(context.start.line);
			const toUnitPartial = line.substring(context.start.ch, context.end.ch).toLowerCase();
			const possibilities = (0, import_lib.default)().from(fromUnit).possibilities();
			return possibilities.map((unit) => {
				const measure = (0, import_lib.default)().describe(unit);
				return {
					label: measure.plural.toLowerCase(),
					value: unit
				};
			}).filter((suggestion) => suggestion.label.toLowerCase().includes(toUnitPartial) || suggestion.value.toLowerCase().includes(toUnitPartial));
		} catch {
			return [];
		}
	}
	renderSuggestion(value, el) {
		el.createSpan({ text: value.label });
	}
	selectSuggestion(value) {
		if (!this.context) return;
		const { editor, start, end } = this.context;
		editor.replaceRange(value.value, start, end);
		const cursorPos = {
			line: start.line,
			ch: start.ch + value.value.length
		};
		const line = editor.getLine(cursorPos.line);
		if (line.length > cursorPos.ch && line[cursorPos.ch] === "]") cursorPos.ch += 1;
		else if (line.length > cursorPos.ch && line[cursorPos.ch] !== "]") {
			editor.replaceRange("]", cursorPos, cursorPos);
			cursorPos.ch += 1;
		} else {
			editor.replaceRange("]", cursorPos, cursorPos);
			cursorPos.ch += 1;
		}
		editor.setCursor(cursorPos);
	}
};

//#endregion
//#region src/modal/conversion-modal.ts
var ConversionModal = class extends obsidian.Modal {
	value;
	fromUnit;
	toUnit;
	fromUnitDropdown;
	toUnitDropdown;
	onSubmit;
	constructor(app, onSubmit) {
		super(app);
		this.onSubmit = onSubmit;
	}
	getCompatibleUnits(measure) {
		try {
			return (0, import_lib.default)().possibilities(measure);
		} catch {
			return [];
		}
	}
	updateFromUnitDropdown(measure) {
		if (!this.fromUnitDropdown) return;
		this.fromUnitDropdown.selectEl.empty();
		const compatibleUnits = this.getCompatibleUnits(measure);
		compatibleUnits.forEach((unit) => {
			const unitDesc = (0, import_lib.default)().describe(unit);
			this.fromUnitDropdown.addOption(unit, unitDesc.plural.toLowerCase());
		});
		this.fromUnitDropdown.setValue(compatibleUnits[0]);
		this.fromUnit = compatibleUnits[0];
	}
	updateToUnitDropdown(measure) {
		if (!this.toUnitDropdown) return;
		this.toUnitDropdown.selectEl.empty();
		const compatibleUnits = this.getCompatibleUnits(measure);
		compatibleUnits.forEach((unit) => {
			const measure$1 = (0, import_lib.default)().describe(unit);
			this.toUnitDropdown.addOption(unit, measure$1.plural.toLowerCase());
		});
		this.toUnitDropdown.setValue(compatibleUnits[0]);
		this.toUnit = compatibleUnits[0];
	}
	onOpen() {
		const { contentEl } = this;
		contentEl.createEl("h2", { text: "Convert units" });
		new obsidian.Setting(contentEl).setName("Value").addText((text) => {
			text.setPlaceholder("Enter a number").inputEl.setAttribute("type", "number");
			text.onChange((value) => {
				this.value = parseFloat(value);
			});
		});
		const measures$1 = (0, import_lib.default)().measures();
		const initialMeasure = measures$1[0];
		const measureFromContainer = contentEl.createDiv({ cls: "measure-from-container" });
		new obsidian.Setting(measureFromContainer).setName("Measure").addDropdown((dropdown) => {
			measures$1.forEach((measure) => {
				dropdown.addOption(measure, measure);
			});
			dropdown.setValue(initialMeasure);
			dropdown.onChange((measure) => {
				this.updateFromUnitDropdown(measure);
				this.updateToUnitDropdown(measure);
			});
		});
		new obsidian.Setting(measureFromContainer).setName("From Unit").addDropdown((dropdown) => {
			this.fromUnitDropdown = dropdown;
			const compatibleUnits = this.getCompatibleUnits(initialMeasure);
			compatibleUnits.forEach((unit) => {
				dropdown.addOption(unit, (0, import_lib.default)().describe(unit).plural.toLowerCase());
			});
			dropdown.setValue(compatibleUnits[0]);
			this.fromUnit = compatibleUnits[0];
			dropdown.onChange((value) => {
				this.fromUnit = value;
			});
		});
		new obsidian.Setting(contentEl).setName("To Unit").addDropdown((dropdown) => {
			this.toUnitDropdown = dropdown;
			const compatibleUnits = this.getCompatibleUnits(initialMeasure);
			compatibleUnits.forEach((unit) => {
				const measure = (0, import_lib.default)().describe(unit);
				dropdown.addOption(unit, measure.plural.toLowerCase());
			});
			dropdown.setValue(compatibleUnits[0]);
			this.toUnit = compatibleUnits[0];
			dropdown.onChange((value) => {
				this.toUnit = value;
			});
		});
		new obsidian.Setting(contentEl).addButton((btn) => btn.setButtonText("Insert").setCta().onClick(() => {
			if (this.value && this.fromUnit && this.toUnit) {
				this.onSubmit(this.value, this.fromUnit, this.toUnit);
				this.close();
			}
		}));
	}
	onClose() {
		const { contentEl } = this;
		contentEl.empty();
	}
};

//#endregion
//#region src/utils/conversion.ts
function convertValue(value, fromUnit, toUnit) {
	return (0, import_lib.default)(value).from(fromUnit).to(toUnit);
}
function getDisplayUnit(value, unit, useDescriptiveNames) {
	if (!useDescriptiveNames) return unit.toString();
	try {
		const measure = (0, import_lib.default)().describe(unit);
		if (measure && measure.plural) return (value === 1 ? measure.singular : measure.plural).toLowerCase();
	} catch (e) {
		console.error("Error getting descriptive name:", e);
	}
	return unit.toString();
}
function formatConversion(value, fromUnit, toUnit, useDescriptiveNames, precision = 2) {
	try {
		const convertedValue = convertValue(value, fromUnit, toUnit);
		const displayUnit = getDisplayUnit(convertedValue, toUnit, useDescriptiveNames);
		return `${convertedValue.toFixed(precision)} ${displayUnit}`;
	} catch (e) {
		console.error("Conversion error:", e);
		return `[${value}${fromUnit}|${toUnit}]`;
	}
}
const CONVERSION_REGEX = /\[([\d.]+)([a-zA-Z0-9\-/]+)\|([a-zA-Z0-9\-/]+)\]/g;

//#endregion
//#region src/editor/extension.ts
var ConversionWidget = class extends __codemirror_view.WidgetType {
	constructor(value, fromUnit, toUnit, plugin, view, from, to) {
		super();
		this.value = value;
		this.fromUnit = fromUnit;
		this.toUnit = toUnit;
		this.plugin = plugin;
		this.view = view;
		this.from = from;
		this.to = to;
	}
	toDOM() {
		const span = document.createElement("span");
		span.textContent = formatConversion(this.value, this.fromUnit, this.toUnit, this.plugin.settings.useDescriptiveNames);
		span.style.cursor = "pointer";
		span.addEventListener("click", (e) => {
			e.preventDefault();
			this.view.dispatch({ selection: {
				anchor: this.from + 1,
				head: this.to - 1
			} });
		});
		return span;
	}
};
function createUnitConversionExtension(plugin) {
	return __codemirror_view.ViewPlugin.fromClass(class {
		decorations;
		isLivePreview = false;
		constructor(view) {
			this.isLivePreview = this.detectEditorMode();
			this.decorations = this.buildDecorations(view);
		}
		detectEditorMode() {
			const view = plugin.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
			if (!view) return false;
			const currentMode = view.currentMode;
			return "sourceMode" in currentMode && !currentMode.sourceMode;
		}
		update(update) {
			const newMode = this.detectEditorMode();
			const modeChanged = newMode !== this.isLivePreview;
			if (update.docChanged || update.selectionSet || update.viewportChanged || modeChanged) {
				this.isLivePreview = newMode;
				this.decorations = this.buildDecorations(update.view);
			}
		}
		buildDecorations(view) {
			if (!this.isLivePreview) return __codemirror_view.Decoration.none;
			const builder = new __codemirror_state.RangeSetBuilder();
			const cursorPos = view.state.selection.main.head;
			const cursorLine = view.state.doc.lineAt(cursorPos).number;
			for (const { from, to } of view.visibleRanges) {
				const text = view.state.doc.sliceString(from, to);
				let match;
				while ((match = CONVERSION_REGEX.exec(text)) !== null) {
					const start = from + match.index;
					const end = start + match[0].length;
					const lineAtMatch = view.state.doc.lineAt(start).number;
					if (lineAtMatch !== cursorLine) {
						const value = parseFloat(match[1]);
						const fromUnit = match[2];
						const toUnit = match[3];
						try {
							convertValue(value, fromUnit, toUnit);
							builder.add(start, end, __codemirror_view.Decoration.replace({ widget: new ConversionWidget(value, fromUnit, toUnit, plugin, view, start, end) }));
						} catch (e) {
							console.debug("Invalid conversion:", e);
						}
					}
				}
			}
			return builder.finish();
		}
	}, { decorations: (v) => v.decorations });
}

//#endregion
//#region src/editor/md-post-processor.ts
function createMarkdownPostProcessor(settings) {
	return (element) => {
		const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null);
		let node = walker.nextNode();
		while (node) {
			const text = node.nodeValue;
			if (!text) {
				node = walker.nextNode();
				continue;
			}
			const newText = text.replace(CONVERSION_REGEX, (match, valueStr, fromUnit, toUnit) => {
				const value = parseFloat(valueStr);
				return formatConversion(value, fromUnit, toUnit, settings.useDescriptiveNames);
			});
			if (newText !== text) node.nodeValue = newText;
			node = walker.nextNode();
		}
	};
}

//#endregion
//#region src/main.ts
var UnitConverterPlugin = class extends obsidian.Plugin {
	settings;
	async onload() {
		await this.loadSettings();
		this.addSettingTab(new UnitConverterSettingTab(this));
		if (this.settings.isAutosuggestEnabled) this.registerEditorSuggest(new DestinationUnitSuggest(this));
		this.registerMarkdownPostProcessor(createMarkdownPostProcessor(this.settings));
		this.registerEditorExtension(createUnitConversionExtension(this));
		this.addCommand({
			id: "convert-units",
			name: "Convert units",
			editorCallback: (editor) => {
				new ConversionModal(this.app, (value, fromUnit, toUnit) => {
					const conversionString = `[${value}${fromUnit}|${toUnit}]`;
					editor.replaceSelection(conversionString);
				}).open();
			}
		});
	}
	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}
	async saveSettings() {
		await this.saveData(this.settings);
	}
};

//#endregion
module.exports = UnitConverterPlugin;
//# sourceMappingURL=main.js.map
/* nosourcemap */