
/*

https://github.com/jabacchetta/vscode-javascript-snippets/blob/master/snippets/snippets.json

Change ${0* into ${99*
Change $0 into ${99:// Type here}
Change $n into ${n}

*/

const snippet_js_jabacchetta = {
  "arrayMerge": {
    "scope": "javascript,typescript",
    "prefix": ["am"],
    "body": ["[...${99:array}]"],
    "description": "Shallow-copy a single array (clone) or multiple arrays (merge) to a new array literal via the spread operator."
  },

  "uniq": {
    "scope": "javascript,typescript",
    "prefix": ["uniq"],
    "body": ["[...new Set(${99:array})]"],
    "description": "Creates a duplicate-free version of an array."
  },

  "range": {
    "scope": "javascript,typescript",
    "prefix": ["range"],
    "body": ["[...Array(${99:length}).keys()]"],
    "description": "An array containing a sequence of numbers from 0 up to, but not including, length."
  },

  "forEach": {
    "scope": "javascript,typescript",
    "prefix": ["foreach"],
    "body": ["${1:array}.forEach((${2}) => {", "  ${99:// Type here}", "});"],
    "description": "Array.prototype.forEach() method."
  },

  "map": {
    "scope": "javascript,typescript",
    "prefix": ["map"],
    "body": ["${1:array}.map((${2:element}) => {", "  ${99:// Type here}", "});"],
    "description": "Array.prototype.map() method."
  },

  "reduce": {
    "scope": "javascript,typescript",
    "prefix": ["reduce"],
    "body": ["${1:array}.reduce((${2:accumulator}, ${3:currentValue}) => {", "  ${99:// Type here}", "}${4:// Type here});"],
    "description": "Array.prototype.reduce() method."
  },

  "reduceRight": {
    "scope": "javascript,typescript",
    "prefix": ["reduceright"],
    "body": ["${1:array}.reduceRight((${2:accumulator}, ${3:currentValue}) => {", "  ${99:// Type here}", "}${4:// Type here});"],
    "description": "Array.prototype.reduceRight() method."
  },

  "filter": {
    "scope": "javascript,typescript",
    "prefix": ["filter"],
    "body": ["${1:array}.filter((${2:element}) => {", "  ${99:// Type here}", "});"],
    "description": "Array.prototype.filter() method."
  },

  "find": {
    "scope": "javascript,typescript",
    "prefix": ["find"],
    "body": ["${1:array}.find((${2:element}) => {", "  ${99:// Type here}", "});"],
    "description": "Array.prototype.find() method."
  },

  "findIndex": {
    "scope": "javascript,typescript",
    "prefix": ["findindex"],
    "body": ["${1:array}.findIndex((${2:element}) => {", "  ${99:// Type here}", "});"],
    "description": "Array.prototype.findIndex() method."
  },

  "some": {
    "scope": "javascript,typescript",
    "prefix": ["some"],
    "body": ["${1:array}.some((${2:element}) => {", "  ${99:// Type here}", "});"],
    "description": "Array.prototype.some() method."
  },

  "every": {
    "scope": "javascript,typescript",
    "prefix": ["every"],
    "body": ["${1:array}.every((${2:element}) => {", "  ${99:// Type here}", "});"],
    "description": "Array.prototype.every() method."
  },

  "flatMap": {
    "scope": "javascript,typescript",
    "prefix": ["flatmap"],
    "body": ["${1:array}.flatMap((${2:element}) => {", "  ${99:// Type here}", "});"],
    "description": "Array.prototype.flatMap() method."
  },

  "constAssignment": {
    "scope": "javascript,typescript",
    "prefix": ["ca"],
    "body": ["const ${1:name} = ${99:// Type here}"],
    "description": "Const assignment."
  },

  "letAssignment": {
    "scope": "javascript,typescript",
    "prefix": ["la"],
    "body": ["let ${1:name} = ${99:// Type here}"],
    "description": "Let assignment."
  },

  "constAssignmentDestructuring": {
    "scope": "javascript,typescript",
    "prefix": ["cad"],
    "body": ["const { ${99:key} } = ${1:object};"],
    "description": "Const object destructuring assignment."
  },

  "letAssignmentDestructuring": {
    "scope": "javascript,typescript",
    "prefix": ["lad"],
    "body": ["let { ${99:key} } = ${1:object};"],
    "description": "Let object destructuring assignment."
  },

  "class": {
    "scope": "javascript,typescript",
    "prefix": ["cs"],
    "body": [
      "class ${1:${TM_FILEPATH/.*[\\/\\\\]([^\\/\\\\]+)[\\/\\\\]index\\.[jt]s$|.*[\\/\\\\](.*?)(?:\\.[^.]*)$/${1:// Type here}${2:// Type here}/}} {",
      "  ${99:// Type here}",
      "}",
      "",
      "export default ${1: ${TM_FILEPATH/.*[\\/\\\\]([^\\/\\\\]+)[\\/\\\\]index\\.[jt]s$|.*[\\/\\\\](.*?)(?:\\.[^.]*)$/${1:// Type here}${2:// Type here}/}};"
    ],
    "description": "Class exported as default and named after the file (if file is not named index, in which case the class is named after the parent folder)."
  },

  "classExtends": {
    "scope": "javascript,typescript",
    "prefix": ["cse"],
    "body": [
      "class ${1:${TM_FILEPATH/.*[\\/\\\\]([^\\/\\\\]+)[\\/\\\\]index\\.[jt]s$|.*[\\/\\\\](.*?)(?:\\.[^.]*)$/${1:// Type here}${2:// Type here}/}} extends ${2:SuperClass} {",
      "  ${99:// Type here}",
      "}",
      "",
      "export default ${1: ${TM_FILEPATH/.*[\\/\\\\]([^\\/\\\\]+)[\\/\\\\]index\\.[jt]s$|.*[\\/\\\\](.*?)(?:\\.[^.]*)$/${1:// Type here}${2:// Type here}/}};"
    ],
    "description": "Subclass exported as default and named after the file (if file is not named index, in which case the class is named after the parent folder)."
  },

  "constructor": {
    "scope": "javascript,typescript",
    "prefix": ["ctr"],
    "body": ["constructor(${1:// Type here}) {", "  super(${2:// Type here});", "  ${99:// Type here}", "}"],
    "description": "Class constructor."
  },

  "method": {
    "scope": "javascript,typescript",
    "prefix": ["met"],
    "body": ["${1:name}(${2:// Type here}) {", "  ${99:// Type here}", "}"],
    "description": "Class method."
  },

  "if": {
    "scope": "javascript,typescript",
    "prefix": ["if"],
    "body": ["if (${1:condition}) {", "  ${99:// Type here}", "}"],
    "description": "If statement."
  },

  "else": {
    "scope": "javascript,typescript",
    "prefix": ["el"],
    "body": ["else {", "  ${99:// Type here}", "}"],
    "description": "Else statement."
  },

  "elseIf": {
    "scope": "javascript,typescript",
    "prefix": ["ei"],
    "body": ["else if (${1:condition}) {", "  ${99:// Type here}", "}"],
    "description": "Else-if statement."
  },

  "ternary": {
    "scope": "javascript,typescript",
    "prefix": ["ter"],
    "body": ["${1:condition} ? ${2:expressionIfTrue} : ${99:expressionIfFalse}"],
    "description": "Ternary operator."
  },

  "switch": {
    "scope": "javascript,typescript",
    "prefix": ["switch"],
    "body": [
      "switch (${1:key}) {",
      "  case ${2:value}:",
      "    ${99:// Type here}",
      "    break;",
      "",
      "  default:",
      "    break;",
      "}"
    ],
    "description": "Switch statement."
  },

  "case": {
    "scope": "javascript,typescript",
    "prefix": ["case"],
    "body": ["case ${1:value}:", "  ${99:// Type here}", "  break;"],
    "description": "Case clause."
  },

  "consoleLog": {
    "scope": "javascript,typescript",
    "prefix": ["cl"],
    "body": ["console.log(${99});"],
    "description": "Console log."
  },

  "consoleLogReturn": {
    "scope": "javascript,typescript",
    "prefix": ["clr"],
    "body": [" console.log(${99}) ||"],
    "description": "Console log. Appended by the logical OR operator (for convenient logging in front of an arrow function's implicit return value)."
  },

  "consoleError": {
    "scope": "javascript,typescript",
    "prefix": ["ce"],
    "body": ["console.error(${99});"],
    "description": "Console error."
  },

  "consoleWarn": {
    "scope": "javascript,typescript",
    "prefix": ["cw"],
    "body": ["console.warn(${99});"],
    "description": "Console warn."
  },

  "consoleLogClipboard": {
    "scope": "javascript,typescript",
    "prefix": ["clc"],
    "body": ["console.log({ $CLIPBOARD });${99}"],
    "description": "Console log the value you have copied to your clipboard, inside of an object (for an automatic label)."
  },

  "consoleLogMessage": {
    "scope": "javascript,typescript",
    "prefix": ["clm"],
    "body": ["console.log('${99}');"],
    "description": "Console log message."
  },

  "consoleLogMessageReturn": {
    "scope": "javascript,typescript",
    "prefix": ["clmr"],
    "body": [" console.log('${99}') ||"],
    "description": "Console log message. Appended by the logical OR operator (for convenient logging in front of an arrow function's implicit return value)."
  },

  "consoleLogObject": {
    "scope": "javascript,typescript",
    "prefix": ["clo"],
    "body": ["console.log({ ${99} });"],
    "description": "Console log an object, in which variables can be inserted (for automatic labels)."
  },

  "consoleLogObjectReturn": {
    "scope": "javascript,typescript",
    "prefix": ["clor"],
    "body": [" console.log({ ${99} }) ||"],
    "description": "Console log an object, in which variables can be inserted (for automatic labels). Appended by the logical OR operator (for convenient logging in front of an arrow function's implicit return value)."
  },

  "consoleLogGroup": {
    "scope": "javascript,typescript",
    "prefix": ["clg"],
    "body": [
      "// ====== LOG START ======",
      "console.log('\\n');",
      "console.group('Log');",
      "console.log(${1});",
      "console.groupEnd();",
      "console.log('\\n');",
      "// ====== LOG END ======",
      "${99}"
    ],
    "description": "Console log, wrapped in a formatted and styled console group."
  },

  "consoleLogAnalysis": {
    "scope": "javascript,typescript",
    "prefix": ["cla"],
    "body": [
      "// ====== LOG START ======",
      "const logStandardDetails = (key, value) => {",
      "  console.group('value');",
      "  console.log(value);",
      "  console.groupEnd();",
      "  console.group('type');",
      "  console.log(typeof value);",
      "  console.groupEnd();",
      "  console.group('count');",
      "  console.count(key);",
      "  console.groupEnd();",
      "  console.group('trace');",
      "  console.trace();",
      "  console.groupEnd();",
      "}",
      "",
      "const logObjectDetails = (value) => {",
      "  let logValue = value;",
      "  let isCircularStructure = false;",
      "",
      "  try {",
      "    // Snapshot of log-time value, rather than current (potentially-mutated) value.",
      "    logValue = JSON.parse(JSON.stringify(value));",
      "  } catch (error) {",
      "    // Handle values that can't be converted to JSON (e.g.window).",
      "    isCircularStructure = true;",
      "  }",
      "",
      "  console.group('log-time value (before any potential mutations)');",
      "",
      "  if (isCircularStructure) {",
      "    console.log('Not determined (object is a circular structure).');",
      "  } else {",
      "    console.log(logValue);",
      "  }",
      "",
      "  console.groupEnd();",
      "  console.group('table');",
      "  console.table(logValue);",
      "  console.groupEnd();",
      "}",
      "",
      "const logDetails = (key, value) => {",
      "  logStandardDetails(key, value);",
      "  ",
      "  if (typeof value === 'object' && value !== null) {",
      "    logObjectDetails(value);",
      "  }",
      "}",
      "",
      "const logAllValues = () => {",
      "  Object.entries({ ${1} }).forEach(([key, value]) => {",
      "    console.groupCollapsed(`%c\\${key}`, 'color: blue;');",
      "    logDetails(key, value)",
      "    console.groupEnd();",
      "  });",
      "}",
      "",
      "console.log('\\n');",
      "console.group('Log');",
      "logAllValues()",
      "console.groupEnd();",
      "console.log('\\n');",
      "// ====== LOG END ======",
      "${99}"
    ],
    "description": "Console log an object, in which variables can be inserted. Includes value, type, count, and trace for all values. Includes log-time value and table for objects. Wrapped in a formatted and styled console group."
  },

  "tryCatch": {
    "scope": "javascript,typescript",
    "prefix": ["tc"],
    "body": ["try {", "  ${99:// Type here}", "} catch (error) {", "", "}"],
    "description": "Try-catch statement."
  },

  "tryCatchFinally": {
    "scope": "javascript,typescript",
    "prefix": ["tcf"],
    "body": ["try {", "  ${99:// Type here}", "} catch (error) {", "", "} finally {", "", "}"],
    "description": "Try-catch-finally statement."
  },

  "tryFinally": {
    "scope": "javascript,typescript",
    "prefix": ["tf"],
    "body": ["try {", "  ${99:// Type here}", "} finally {", "", "}"],
    "description": "Try-finally statement."
  },

  "throwError": {
    "scope": "javascript,typescript",
    "prefix": ["te"],
    "body": ["throw new ${1:|Error,TypeError,RangeError|}(${99});"],
    "description": "Throw error object exception."
  },

  "function": {
    "scope": "javascript,typescript",
    "prefix": ["function"],
    "body": ["function ${1:name}(${2:// Type here}) {", "  ${99:// Type here}", "}"],
    "description": "Named function declaration."
  },

  "arrowFunction": {
    "scope": "javascript,typescript",
    "prefix": ["af"],
    "body": ["(${1:// Type here}) => ${99:// Type here}"],
    "description": "Anonymous arrow function expression."
  },

  "jsonParse": {
    "scope": "javascript,typescript",
    "prefix": ["jp"],
    "body": ["JSON.parse(${1:json})${99:// Type here}"],
    "description": "JSON.parse() method."
  },

  "jsonStringify": {
    "scope": "javascript,typescript",
    "prefix": ["js"],
    "body": ["JSON.stringify(${1:value})${99:// Type here}"],
    "description": "JSON.stringify() method."
  },

  "doWhile": {
    "scope": "javascript,typescript",
    "prefix": ["dowhile"],
    "body": ["do {", "  ${99:// Type here}", "} while (${1:condition});"],
    "description": "Do-while loop."
  },

  "while": {
    "scope": "javascript,typescript",
    "prefix": ["while"],
    "body": ["while (${1:condition}) {", "  ${99:// Type here}", "}"],
    "description": "While loop."
  },

  "for": {
    "scope": "javascript,typescript",
    "prefix": ["for"],
    "body": [
      "for (let ${1:index} = 0; ${1:// Type here} < ${2:array}.length; ${1:// Type here}++) {",
      "  const ${3:element} = ${2:// Type here}[${1:// Type here}];",
      "  ${99:// Type here}",
      "}"
    ],
    "description": "For loop."
  },

  "forIn": {
    "scope": "javascript,typescript",
    "prefix": ["forin"],
    "body": [
      "for (const ${1:key} in ${2:object}) {",
      "  if (${2:// Type here}.hasOwnProperty(${1:// Type here})) {",
      "    const ${3:element} = ${2:// Type here}[${1:// Type here}];",
      "    ${99:// Type here}",
      "  }",
      "}"
    ],
    "description": "For-in loop."
  },

  "forOf": {
    "scope": "javascript,typescript",
    "prefix": ["forof"],
    "body": ["for (const ${1:iterator} of ${2:object}) {", "  ${99:// Type here}", "}"],
    "description": "For-of loop."
  },

  "useStrict": {
    "scope": "javascript,typescript",
    "prefix": ["use"],
    "body": ["'use strict';${99:// Type here}"],
    "description": "Use strict statement."
  },

  "import": {
    "scope": "javascript,typescript",
    "prefix": ["imp"],
    "body": ["import ${99:module} from '${1}';"],
    "description": "Import module."
  },

  "exportDefault": {
    "scope": "javascript,typescript",
    "prefix": ["expd"],
    "body": ["export default ${99:// Type here}"],
    "description": "Default export."
  },

  "export": {
    "scope": "javascript,typescript",
    "prefix": ["exp"],
    "body": ["export ${99:// Type here}"],
    "description": "Named export."
  },

  "objectMerge": {
    "scope": "javascript,typescript",
    "prefix": ["om"],
    "body": ["{ ...${99:object} }"],
    "description": "Shallow-copy a single object (clone) or multiple objects (merge) to a new object literal via the spread operator. Similar to the Object.assign() method, but has the added benefit of not allowing for shallow mutations."
  },

  "objectEntries": {
    "scope": "javascript,typescript",
    "prefix": ["oe"],
    "body": ["Object.entries(${99:object})"],
    "description": "Object.entries() method."
  },

  "objectFromEntries": {
    "scope": "javascript,typescript",
    "prefix": ["ofe"],
    "body": ["Object.fromEntries(${99:iterable})"],
    "description": "Object.fromEntries() method."
  },

  "objectKeys": {
    "scope": "javascript,typescript",
    "prefix": ["ok"],
    "body": ["Object.keys(${99:object})"],
    "description": "Object.keys() method."
  },

  "objectValues": {
    "scope": "javascript,typescript",
    "prefix": ["ov"],
    "body": ["Object.values(${99:object})"],
    "description": "Object.values() method."
  },

  "return": {
    "scope": "javascript,typescript",
    "prefix": ["ret"],
    "body": ["return ${99:// Type here}"],
    "description": "Return statement."
  },

  "returnMultiline": {
    "scope": "javascript,typescript",
    "prefix": ["retm"],
    "body": ["return (", "  ${99:// Type here}", ");"],
    "description": "Return statement for multiline expression that includes complex values (e.g. JSX)."
  },

  "setTimeout": {
    "scope": "javascript,typescript",
    "prefix": ["st"],
    "body": ["setTimeout(() => {", "  ${99:// Type here}", "}, ${1:delay});"],
    "description": "setTimeout() method."
  },

  "setInterval": {
    "scope": "javascript,typescript",
    "prefix": ["si"],
    "body": ["setInterval(() => {", "  ${99:// Type here}", "}, ${1:delay});"],
    "description": "setInterval() method."
  },

  "typeof": {
    "scope": "javascript,typescript",
    "prefix": ["to"],
    "body": [
      "typeof ${1:operand} === '${2:|bigint,boolean,function,number,object,string,symbol,undefined|}'"
    ],
    "description": "typeof operator."
  },

  "instanceof": {
    "scope": "javascript,typescript",
    "prefix": ["io"],
    "body": ["${1:object} instanceof ${99:constructor}"],
    "description": "instanceof operator."
  },

  "arrayIsArray": {
    "scope": "javascript,typescript",
    "prefix": ["aia"],
    "body": ["Array.isArray(${99:value})"],
    "description": "Array.isArray() method."
  },

  "isPlainObject": {
    "scope": "javascript,typescript",
    "prefix": ["isPlainObject"],
    "body": ["typeof ${99:value} === 'object' && !Array.isArray(${99:value}) && ${99:value} !== null"],
    "description": "Check if value is a plain object."
  },

  "isNil": {
    "scope": "javascript,typescript",
    "prefix": ["isNil"],
    "body": ["typeof ${99:value} === 'undefined' || ${99:value} === null"],
    "description": "Check if value is null or undefined."
  }
}

export default snippet_js_jabacchetta

