
/*

https://github.com/h4kst3r/php-awesome-snippets

Change ${0} into ${99}
Change $n to ${n}
Remove //

*/

const snippet_php_h4kst3r = 
{
    "Array": {
        "prefix": "arr",
        "body": [
            "[${1:value}, ${2:value}, ${3:value}];"
        ],
        "description": "Array [] block"
    },
    "Array key ... value": {
        "prefix": "ark",
        "body": [
            "[",
            "\t'${1:key}' => ${2:value},",
            "\t'${3:key}' => ${4:value}, ${5:next}",
            "]"
        ],
        "description": "Array [] key => value block"
    },
    "Key ... value": {
        "prefix": "kv",
        "body": [
            "'${1:key}' => ${2:value},"
        ],
        "description": "key => value statement"
    },
    "Array ... value": {
        "prefix": "va",
        "body": [
            "${1:value}, "
        ],
        "description": "Array value statement"
    },
    "Class": {
        "prefix": "cl",
        "body": [
            "class ${1:ClassName}",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "PHP Class block"
    },
    "Class extends": {
        "prefix": "clx",
        "body": [
            "class ${1:ClassName} extends ${2:MotherClass}",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "PHP Class extends block"
    },
    "Class implements": {
        "prefix": "cli",
        "body": [
            "class ${1:ClassName} implements ${2:Interfaces}",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "PHP Class implements block"
    },
    "Class extends implements": {
        "prefix": "clxi",
        "body": [
            "class ${1:ClassName} extends ${2:MotherClass} implements ${3:Interfaces}",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "PHP Class extends and implements block"
    },
    "Abstract class": {
        "prefix": "acl",
        "body": [
            "abstract class ${1:ClassName}",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "PHP abstract Class block"
    },
    "Abstract class extends": {
        "prefix": "aclx",
        "body": [
            "abstract class ${1:ClassName} extends ${2:MotherClass}",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "PHP abstract Class extends block"
    },
    "Abstract class implements": {
        "prefix": "acli",
        "body": [
            "abstract class ${1:ClassName} implements ${2:Interfaces}",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "PHP abstract Class implements block"
    },
    "Abstract class extends implements": {
        "prefix": "aclxi",
        "body": [
            "abstract class ${1:ClassName} extends ${2:MotherClass} implements ${3:Interfaces}",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "PHP abstract Class extends and implements block"
    },
    "Final class": {
        "prefix": "fcl",
        "body": [
            "final class ${1:ClassName}",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "PHP final Class block"
    },
    "Final class extends": {
        "prefix": "fclx",
        "body": [
            "final class ${1:ClassName} extends ${2:MotherClass}",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "PHP final Class extends block"
    },
    "Final class implements": {
        "prefix": "fcli",
        "body": [
            "final class ${1:ClassName} implements ${2:Interfaces}",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "PHP final Class implements block"
    },
    "Final class extends implements": {
        "prefix": "fclxi",
        "body": [
            "final class ${1:ClassName} extends ${2:MotherClass} implements ${3:Interfaces}",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "PHP final Class extends and implements block"
    },
    "Interface": {
        "prefix": "in",
        "body": [
            "interface ${1:InterfaceName}",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "PHP Interface block"
    },
    "Interface extends": {
        "prefix": "inx",
        "body": [
            "interface ${1:InterfaceName} extends ${2:Interfaces}",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "PHP Interface extends block"
    },
    "Trait": {
        "prefix": "trt",
        "body": [
            "trait ${1:TraitName}",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "PHP Trait block"
    },
    "If ... endif": {
        "prefix": "ifen",
        "body": [
            "if (${1:condition}):",
            "\t${99:# code...}",
            "endif;"
        ],
        "description": "If endif block"
    },
    "If ... else ... endif": {
        "prefix": "ifelen",
        "body": [
            "if (${1:condition}):",
            "\t${2:# code...}",
            "else:",
            "\t${99:# code...}",
            "endif;"
        ],
        "description": "If else endif block"
    },
    "If ... elseif ... else ... endif": {
        "prefix": "ifelifen",
        "body": [
            "if (${1:condition}):",
            "\t${2:# code...}",
            "elseif (${3:condition}):",
            "\t${4:# code...}",
            "else:",
            "\t${99:# code...}",
            "endif;"
        ],
        "description": "If elseif else endif block"
    },
    "If block": {
        "prefix": "ifb",
        "body": [
            "if (${1:condition}) {",
            "\t${99:# code...}",
            "}"
        ],
        "description": "If  block"
    },
    "If ... else": {
        "prefix": "ifel",
        "body": [
            "if (${1:condition}) {",
            "\t${2:# code...}",
            "} else {",
            "\t${99:# code...}",
            "}"
        ],
        "description": "If else block"
    },
    "If ... elseif ... else": {
        "prefix": "ifelif",
        "body": [
            "if (${1:condition}) {",
            "\t${2:# code...}",
            "} elseif (${3:condition}) {",
            "\t${4:# code...}",
            "} else {",
            "\t${99:# code...}",
            "}"
        ],
        "description": "If elseif else block"
    },
    "Switch block": {
        "prefix": "sw",
        "body": [
            "switch ($${1:variable}) {",
            "\tcase '${2:label}':",
            "\t\t${3:# code...}",
            "\t\tbreak;",
            "\tcase '${4:label}':",
            "\t\t${5:# code...}",
            "\t\tbreak;$6",
            "\tdefault:",
            "\t\t${99:# code...}",
            "\t\tbreak;",
            "}"
        ],
        "description": "Switch block"
    },
    "Case statement": {
        "prefix": "cs",
        "body": [
            "case '${1:label}':",
            "\t${2:# code...}",
            "\tbreak;"
        ],
        "description": "Case addon block"
    },
    "Ternary operator": {
        "prefix": "tern",
        "body": [
            "${1:condition} ? ${2:if_true} : ${3:if_false};"
        ],
        "description": "Ternary statement"
    },
    "Try ... catch": {
        "prefix": "tryc",
        "body": [
            "try {",
            "\t${1:# code...}",
            "} catch (${2:Throwable} $${3:e}) {",
            "\t${4:# code...}",
            "}"
        ],
        "description": "Try catch block"
    },
    "Try ... catch ... finally": {
        "prefix": "tryf",
        "body": [
            "try {",
            "\t${1:# code...}",
            "} catch (${2:Throwable} $${3:e}) {",
            "\t${4:# code...}",
            "} finally {",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Try catch finally block"
    },
    "Catch": {
        "prefix": "cat",
        "body": [
            "catch (${1:Throwable} $${2:e}) {",
            "\t${3:# code...}",
            "}"
        ],
        "description": "Catch block"
    },
    "Finally": {
        "prefix": "fy",
        "body": [
            "finally {",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Finally block"
    },
    "Throw new Exception": {
        "prefix": "thr",
        "body": [
            "throw new ${1:Some}Exception(\"${2:Error statement}\");"
        ],
        "description": "Throw new exception statement"
    },
    "Function": {
        "prefix": "fn",
        "body": [
            "function ${1:func_name}(${2:Type} $${3:args}): ${4:void} {",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Function block"
    },
    "Anonymous function": {
        "prefix": "fna",
        "body": [
            "function (${1:Type} $${2:args}): ${3:void} {",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Anonymous function block"
    },
    "Anonymous function ... use": {
        "prefix": "fnu",
        "body": [
            "function (${1:Type} $${2:args}) use ($${3:vars}): ${4:void} {",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Anonymous function with use block"
    },
    "Function PHP5": {
        "prefix": "-fn",
        "body": [
            "function ${1:func_name}($${2:args}) {",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Function block PHP5"
    },
    "Anonymous function PHP5": {
        "prefix": "-fna",
        "body": [
            "function ($${1:args}) {",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Anonymous function block PHP5"
    },
    "Anonymous function ... use PHP5": {
        "prefix": "-fnu",
        "body": [
            "function ($${1:args}) use ($${2:vars}) {",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Anonymous function with use block PHP5"
    },
    "GLOBAL array": {
        "prefix": "gglob",
        "body": [
            "$GLOBALS[\"${1:key}\"]"
        ],
        "description": "$GLOBALS array"
    },
    "SERVER array": {
        "prefix": "gser",
        "body": [
            "$_SERVER[\"${1:key}\"]"
        ],
        "description": "$_SERVER array"
    },
    "REQUEST array": {
        "prefix": "greq",
        "body": [
            "$_REQUEST[\"${1:key}\"]"
        ],
        "description": "$_REQUEST array"
    },
    "POST array": {
        "prefix": "gpost",
        "body": [
            "$_POST[\"${1:key}\"]"
        ],
        "description": "$_POST array"
    },
    "GET array": {
        "prefix": "gget",
        "body": [
            "$_GET[\"${1:key}\"]"
        ],
        "description": "$_GET array"
    },
    "FILES array": {
        "prefix": "gfile",
        "body": [
            "$_FILES['${1:userfile}']['${2:key}']"
        ],
        "description": "$_FILES array"
    },
    "ENV array": {
        "prefix": "genv",
        "body": [
            "$_ENV[\"${1:key}\"]"
        ],
        "description": "$_ENV array"
    },
    "COOKIE array": {
        "prefix": "gcook",
        "body": [
            "$_COOKIE[\"${1:key}\"]"
        ],
        "description": "$_COOKIE array"
    },
    "SESSION array": {
        "prefix": "gss",
        "body": [
            "$_SESSION[\"${1:key}\"]"
        ],
        "description": "$_SESSION array"
    },
    "Foreach loop": {
        "prefix": "fore",
        "body": [
            "foreach ($${1:iterable} as $${2:item}) {",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Foreach as $item block"
    },
    "Foreach ... key ... item": {
        "prefix": "forek",
        "body": [
            "foreach ($${1:iterable} as $${2:key} => $${3:item}) {",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Foreach as $key => $item block"
    },
    "Foreach ... end": {
        "prefix": "foren",
        "body": [
            "foreach ($${1:iterable} as $${2:item}):",
            "\t${99:# code...}",
            "endforeach;"
        ],
        "description": "Foreach end as $item block"
    },
    "Foreach ... key ... item ... end": {
        "prefix": "forenk",
        "body": [
            "foreach ($${1:iterable} as $${2:key} => $${3:item}):",
            "\t${99:# code...}",
            "endforeach;"
        ],
        "description": "Foreach end as $key => $item block"
    },
    "For loop": {
        "prefix": "forl",
        "body": [
            "for ($${1:i} = ${2:0}; $${1:i} < $${3:limit}; $${1:i}++) {",
            "\t${99:# code...}",
            "}"
        ],
        "description": "For loop"
    },
    "For ... end": {
        "prefix": "forlen",
        "body": [
            "for ($${1:i} = ${2:0}; $${1:i} < $${3:limit}; $${1:i}++):",
            "\t${99:# code...}",
            "endfor;"
        ],
        "description": "For end loop"
    },
    "While loop": {
        "prefix": "wl",
        "body": [
            "while ($${1:variable} ${2:<=} $${3:limit}) {",
            "\t${99:# code...}",
            "}"
        ],
        "description": "While loop"
    },
    "While ... end": {
        "prefix": "wlen",
        "body": [
            "while ($${1:variable} ${2:<=} $${3:limit}):",
            "\t${99:# code...}",
            "endwhile;"
        ],
        "description": "While end loop"
    },
    "Do ... while": {
        "prefix": "dowl",
        "body": [
            "do {",
            "\t${99:# code...}",
            "} while ($${1:variable} ${2:<=} $${3:limit});"
        ],
        "description": "Do while loop"
    },
    "Class constructor": {
        "prefix": "pubc",
        "body": [
            "public function __construct(${1:Type} $${2:args})",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Class public constructor block"
    },
    "Class private constructor": {
        "prefix": "pric",
        "body": [
            "private function __construct(${1:Type} $${2:args})",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Class private constructor block"
    },
    "Class protected constructor": {
        "prefix": "proc",
        "body": [
            "protected function __construct(${1:Type} $${2:args})",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Class protected constructor block"
    },
    "Private method": {
        "prefix": "prif",
        "body": [
            "private function ${1:methodName}(${2:Type} $${3:args}): ${4:void}",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Private method block"
    },
    "Private static method": {
        "prefix": "prisf",
        "body": [
            "private static function ${1:methodName}(${2:Type} $${3:args}): ${4:void}",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Private static method block"
    },
    "Final private method": {
        "prefix": "fprif",
        "body": [
            "final private function ${1:methodName}(${2:Type} $${3:args}): ${4:void}",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Final private method block"
    },
    "Final private static method": {
        "prefix": "fprisf",
        "body": [
            "final private static function ${1:methodName}(${2:Type} $${3:args}): ${4:void}",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Final private static method block"
    },
    "Protected method": {
        "prefix": "prof",
        "body": [
            "protected function ${1:methodName}(${2:Type} $${3:args}): ${4:void}",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Protected method block"
    },
    "Protected static method": {
        "prefix": "prosf",
        "body": [
            "protected static function ${1:methodName}(${2:Type} $${3:args}): ${4:void}",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Protected static method block"
    },
    "Final protected method": {
        "prefix": "fprof",
        "body": [
            "final protected function ${1:methodName}(${2:Type} $${3:args}): ${4:void}",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Final protected method block"
    },
    "Final protected static method": {
        "prefix": "fprosf",
        "body": [
            "final protected static function ${1:methodName}(${2:Type} $${3:args}): ${4:void}",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Final protected static method block"
    },
    "Abstract protected method": {
        "prefix": "aprof",
        "body": [
            "abstract protected function ${1:methodName}(${2:Type} $${3:args}): ${4:void};"
        ],
        "description": "Abstract protected method statement"
    },
    "Abstract protected static method": {
        "prefix": "aprosf",
        "body": [
            "abstract protected static function ${1:methodName}(${2:Type} $${3:args}): ${4:void};"
        ],
        "description": "Abstract protected static method statement"
    },
    "Public method": {
        "prefix": "pubf",
        "body": [
            "public function ${1:methodName}(${2:Type} $${3:args}): ${4:void}",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Public method block"
    },
    "Public static method": {
        "prefix": "pubsf",
        "body": [
            "public static function ${1:methodName}(${2:Type} $${3:args}): ${4:void}",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Public static method block"
    },
    "Final public method": {
        "prefix": "fpubf",
        "body": [
            "final public function ${1:methodName}(${2:Type} $${3:args}): ${4:void}",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Final public method block"
    },
    "Final public static method": {
        "prefix": "fpubsf",
        "body": [
            "final public static function ${1:methodName}(${2:Type} $${3:args}): ${4:void}",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Final public static method block"
    },
    "Abstract public method": {
        "prefix": "apubf",
        "body": [
            "abstract public function ${1:methodName}(${2:Type} $${3:args}): ${4:void};"
        ],
        "description": "Abstract public method statement"
    },
    "Abstract public static method": {
        "prefix": "apubsf",
        "body": [
            "abstract public static function ${1:methodName}(${2:Type} $${3:args}): ${4:void};"
        ],
        "description": "Abstract public static method statement"
    },
    "Private method PHP5": {
        "prefix": "-prif",
        "body": [
            "private function ${1:methodName}(${2:parameters})",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Private method block PHP5"
    },
    "Private static method PHP5": {
        "prefix": "-prisf",
        "body": [
            "private static function ${1:methodName}(${2:parameters})",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Private static method block PHP5"
    },
    "Final private method PHP5": {
        "prefix": "-fprif",
        "body": [
            "final private function ${1:methodName}(${2:parameters})",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Final private method block PHP5"
    },
    "Final private static method PHP5": {
        "prefix": "-fprisf",
        "body": [
            "final private static function ${1:methodName}(${2:parameters})",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Final private static method block PHP5"
    },
    "Protected method PHP5": {
        "prefix": "-prof",
        "body": [
            "protected function ${1:methodName}(${2:parameters})",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Protected method block PHP5"
    },
    "Protected static method PHP5": {
        "prefix": "-prosf",
        "body": [
            "protected static function ${1:methodName}(${2:parameters})",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Protected static method block PHP5"
    },
    "Final protected method PHP5": {
        "prefix": "-fprof",
        "body": [
            "final protected function ${1:methodName}(${2:parameters})",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Final protected method block PHP5"
    },
    "Final protected static method PHP5": {
        "prefix": "-fprosf",
        "body": [
            "final protected static function ${1:methodName}(${2:parameters})",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Final protected static method block PHP5"
    },
    "Abstract protected method PHP5": {
        "prefix": "-aprof",
        "body": [
            "abstract protected function ${1:methodName}(${2:parameters});"
        ],
        "description": "Abstract protected method statement PHP5"
    },
    "Abstract protected static method PHP5": {
        "prefix": "-aprosf",
        "body": [
            "abstract protected static function ${1:methodName}(${2:parameters});"
        ],
        "description": "Abstract protected static method statement PHP5"
    },
    "Public method PHP5": {
        "prefix": "-pubf",
        "body": [
            "public function ${1:methodName}(${2:parameters})",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Public method block PHP5"
    },
    "Public static method PHP5": {
        "prefix": "-pubsf",
        "body": [
            "public static function ${1:methodName}(${2:parameters})",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Public static method block PHP5"
    },
    "Final public method PHP5": {
        "prefix": "-fpubf",
        "body": [
            "final public function ${1:methodName}(${2:parameters})",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Final public method block PHP5"
    },
    "Final public static method PHP5": {
        "prefix": "-fpubsf",
        "body": [
            "final public static function ${1:methodName}(${2:parameters})",
            "{",
            "\t${99:# code...}",
            "}"
        ],
        "description": "Final public static method block PHP5"
    },
    "Abstract public method PHP5": {
        "prefix": "-apubf",
        "body": [
            "abstract public function ${1:methodName}(${2:parameters});"
        ],
        "description": "Abstract public method statement PHP5"
    },
    "Abstract public static method PHP5": {
        "prefix": "-apubsf",
        "body": [
            "abstract public static function ${1:methodName}(${2:parameters});"
        ],
        "description": "Abstract public static method statement PHP5"
    },
    "define": {
        "prefix": "df",
        "body": [
            "define(\"${1:CONSTANT}\", \"${2:value}\");"
        ],
        "description": "'define' call"
    },
    "include": {
        "prefix": "inc",
        "body": [
            "include ${1:__DIR__.}'${2:path_to_filename}';"
        ],
        "description": "'include' statement"
    },
    "include_once": {
        "prefix": "inco",
        "body": [
            "include_once ${1:__DIR__.}'${2:path_to_filename}';"
        ],
        "description": "'include_once' statement"
    },
    "require": {
        "prefix": "rqr",
        "body": [
            "require ${1:__DIR__.}'${2:path_to_filename}';"
        ],
        "description": "'require' statement"
    },
    "require_once": {
        "prefix": "rqro",
        "body": [
            "require_once ${1:__DIR__.}'${2:path_to_filename}';"
        ],
        "description": "'require_once' statement"
    },
    "echo": {
        "prefix": "eco",
        "body": [
            "echo \"${1:text}\";"
        ],
        "description": "'echo' statement"
    },
    "print_r": {
        "prefix": "pr",
        "body": [
            "print_r($${1:variable});"
        ],
        "description": "'print_r' call"
    },
    "var_dump": {
        "prefix": "vd",
        "body": [
            "var_dump($${1:variable});"
        ],
        "description": "'var_dump' call"
    },
    "var_export": {
        "prefix": "vx",
        "body": [
            "var_export($${1:variable});"
        ],
        "description": "'var_export' call"
    },
    "PHP tags": {
        "prefix": "php",
        "body": [
            "<?php $0?>"
        ],
        "description": "PHP open tag"
    },
    "PHP open tag": {
        "prefix": "po",
        "body": [
            "<?php"
        ],
        "description": "PHP open tag"
    },
    "PHP close tag": {
        "prefix": "pc",
        "body": [
            "?>"
        ],
        "description": "PHP close tag"
    },
    "PHP echo short tag": {
        "prefix": "peco",
        "body": [
            "<?= $${1:variable} ?>"
        ],
        "description": "PHP echo short tag"
    }
};


export default snippet_php_h4kst3r
