
/*

https://github.com/heberalmeida/php-snippets/blob/master/snippets/php.json

Not complete

*/

const snippet_php_heberalmeida = {
    "define": {
        "prefix": "def",
        "body": [
            "define(\"${1:value}\", \"${2:value}\");"
        ],
        "description": "define"
    },
    "ifend": {
        "prefix": "ifend",
        "body": [
            "if (${1:cond}):",
            "endif;"
        ],
        "description": "ifend"
    },
    "ifelseend": {
        "prefix": "ifelseend",
        "body": [
            "if (${1:cond}):",
            "else:",
            "endif;"
        ],
        "description": "ifelseend"
    },
    "ifelseifend": {
        "prefix": "ifelseifend",
        "body": [
            "if (${1:cond}):",
            "elseif (${2:cond}):",
            "else:",
            "endif;"
        ],
        "description": "ifelseifend"
    },
    "if": {
        "prefix": "if",
        "body": [
            "if (${1:cond}) {",
            "",
            "}"
        ],
        "description": "if"
    },
    "ifelse": {
        "prefix": "ifelse",
        "body": [
            "if (${1:cond}) {",
            "} else {",
            "",
            "}"
        ],
        "description": "ifelse"
    },
    "ifelseif": {
        "prefix": "ifelseif",
        "body": [
            "if (${1:cond}) {",
            "} elseif(${2:cond}) {",
            "",
            "} else {",
            "",
            "}"
        ],
        "description": "ifelseif"
    },
    "foreach": {
        "prefix": "foreachend",
        "body": [
            "foreach ($${1:variable} as $${2:key} => $${3:value}):",
            "",
            "endforeach;"
        ],
        "description": "foreach"
    },
    "for": {
        "prefix": "forend",
        "body": [
            "for ($${1:i}=0; $${1:i} < ; $${1:i}++):",
            "\t",
            "endfor;"
        ],
        "description": "for"
    },
    "while": {
        "prefix": "whileend",
        "body": [
            "while ($${1:variable} <= 10):",
            "\t",
            "endwhile;"
        ],
        "description": "while"
    },
    "dowhile": {
        "prefix": "dowhile",
        "body": [
            "do {",
            "\t",
            "} while ($${1:variable} <= 10);"
        ],
        "description": "dowhile"
    },
    "switch": {
        "prefix": "switch",
        "body": [
            "switch ($${1:cond}) {",
            "\tcase ${2:label}:",
            "\t\tbreak;",
            "\tcase ${3:label}:",
            "\t\tbreak;",
            "\tcase ${4:label}:",
            "\t\tbreak;",
            "\tdefault:",
            "}"
        ],
        "description": "switch"
    },
    "globals": {
        "prefix": "$G",
        "body": [
            "$GLOBALS[\"${1:name}\"]"
        ],
        "description": "globals"
    },
    "server": {
        "prefix": "$se",
        "body": [
            "$_SERVER[\"${1:name}\"]"
        ],
        "description": "server"
    },
    "request": {
        "prefix": "$r",
        "body": [
            "$_REQUEST[\"${1:name}\"]"
        ],
        "description": "request"
    },
    "post": {
        "prefix": "$p",
        "body": [
            "$$_POST[\"${1:name}\"]"
        ],
        "description": "post"
    },
    "get": {
        "prefix": "$g",
        "body": [
            "$$_GET[\"${1:name}\"]"
        ],
        "description": "get"
    },
    "files": {
        "prefix": "$f",
        "body": [
            "$$_FILES[\"${1:name}\"]"
        ],
        "description": "files"
    },
    "env": {
        "prefix": "$e",
        "body": [
            "$$_ENV[\"${1:name}\"]"
        ],
        "description": "env"
    },
    "cookie": {
        "prefix": "$c",
        "body": [
            "$$_COOKIE[\"${1:name}\"]"
        ],
        "description": "cookie"
    },
    "session": {
        "prefix": "$s",
        "body": [
            "$$_SESSION[\"${1:name}\"]"
        ],
        "description": "session"
    },
    "date": {
        "prefix": "date",
        "body": [
            "date(\"${1:format}\",${2:timestamp})"
        ],
        "description": "date"
    },
    "include": {
        "prefix": "in",
        "body": [
            "include \"${1:filename}\";"
        ],
        "description": "include"
    },
    "require": {
        "prefix": "req",
        "body": [
            "require \"${1:filename}\";"
        ],
        "description": "require"
    },
    "function": {
        "prefix": "function",
        "body": [
            "function ${1:item}() {",
            "",
            "}"
        ],
        "description": "function"
    }
};

export default snippet_php_heberalmeida