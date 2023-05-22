
# CodeMirror 6 Browser Wrapper

This is a CodeMirror 6 Wrapper for browser so you don't need to rollup a new one everytime you want to try different setting. It was *rollup'd* and *terser'd* and it is customizable by global var of array **EditorSetting**. You can also communicate with wrapper using button.

### Section
 - **[Demo](#demo)**
 - **[How To Use](#how-to-use)**
 - **[Example Code](#example-code)**
 - **[Credits](#credits)**

## Demo

**[Demo On GitHub Page](https://a99us.github.io/CM6-Browser-Wrapper/)**

You can try different setting by editing the **EditorSetting** JSON data in the editor and then click **Refresh Editor** or **Refresh State**. Clicking the **Reset Editor** button will reset editor with original setting.


## How To Use

You need to include JQuery file because it needs JQuery to function. Use bellow code or any other source you preferred.

```html
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
```

Add the CodeMirror 6 wrapper file. You can use the following URL (**687KB**), or you can rollup your own file from **editor.js** from this repository.

```html
<!--
GitHub Page
https://a99us.github.io/CM6-Browser-Wrapper/cm6-browser-wrapper.min.js
JSDelivr CDN
https://cdn.jsdelivr.net/gh/A99US/CM6-Browser-Wrapper/cm6-browser-wrapper.min.js
-->
<script type="text/javascript" src="https://a99us.github.io/CM6-Browser-Wrapper/cm6-browser-wrapper.min.js"></script>
```

Let say you want to add CodeMirror into an element of **#editordiv**. You should create global var **EditorSetting['editordiv']**. Key of the array is the name of parent element / ParentName, in this case it is **editordiv**. If variable doesn't exist, wrapper will use default setting.

```javascript
// Prefix use in button ID naming
// Default : CMEditorPrefix
// More explanation on Buttons Section
var EditorPrefix = 'CMEditorPrefix';
// EditorSetting[ParentName]
var EditorSetting = {
editordiv : {
    // Global var to save editor doc into, if updatelistener is true
    // In wrapper will be : window[EditorSetting['editor']['data']]
    // Default : ParentName + "data"
    data: "editordoc",
    // Editor doc update listener, in miliseconds
    // Default : false
    updatelistener: 300,
    // Delay to update history button (Undo Redo), in miliseconds
    // Default : 10
    historydelay: 50,
    // Language of editor : text , html , javascript , css , json , php
    // Default : text (no language)
    lang: 'json',
    // Snippets to be used in editor
    // Array : ['html', 'javascript', 'jquery', 'php']
    snippets: ['html', 'javascript'],
    // Default : DefaultTheme (Ace Cobalt)
    theme: 'DefaultTheme',
    // Enable extension
    extension: [ "cm6-texttolink" ],
    // IndenUnit default : 2
    indentunit: 2,
    // linewrap default : false
    linewrap: true,
    // lineNumbers default : true
    lineNumbers: true,
    // Default line where the cursor would be on editor load
    defaultline: 12,
    // readonly default : false
    readonly: 0,
    // KeyMap to be used : 'indentWithTab' , 'searchKeymap' , 'completionKeymap'
    keymap: ['indentWithTab', 'searchKeymap', 'completionKeymap'],
    control: {
	// Control button on panel
	// Default : False
	// panel: 'top' => Panel on top position of editor
	// panel: true => Panel on bottom position of editor
        panel: 1,
	// Show / hide panel button (Not the panel itself)
	// Default : true
	panelshow: false,
	// List of buttons to add
        // 'history' , 'linewrap' , 'readonly' , 'indent' , 'selectall' , 'search' , 'lang' , 'theme'
        panelitem: ['history', 'linewrap', 'readonly', 'lang', 'theme'],
	// Control button prepended into parent element
	// Default : False
	// Also as an amount of newline in between
        prepend: 1,
        prependitem: ['history', 'linewrap', 'readonly', 'lang', 'theme'],
	// Control button appended into parent element
	// Default : False
	// Also as an amount of newline in between
        append: 0,
        appenditem: ['history', 'linewrap', 'search'],
	// Control button added into certain element
	// Element will be emptied first => element.html('')
	// Default : False
        element: 'editorbutton',
        elementitem: ['lang', 'theme'],
    },
    // Add CSS Style into CodeMirror
    // Read more on https://codemirror.net/examples/styling/
    css: {
        '&.cm-editor': {
            outline: '1px solid cyan',
            height: '515px', // 500 525
            // width: '990px',
            fontSize: '19px'
        }
    }
}
};
```

And then lastly you can command the wrapper to add CM6 editor by using the command button after document fully ready (read more about that on [Command Button Section](#1-command-button)).

```javascript
$(document).ready(function() {
    // Editor init
    $("#CMEditorPrefix-command").val('neweditor-editordiv').click();
});
```

## Control Buttons
There are 2 type of control button for you to communicate with the wrapper :

### 1. Command Button

The wrapper will automatically add a hidden command button into your page.

```html
<!--
id : EditorPrefix + "-command"
value : command +"-"+ ParentElement
-->
<input type='button' id='CMEditorPrefix-command'>
```

This button is used to run some spicific tasks in the wrapper. The command ran by the wrapper depends on the button's value. The way to use it is by changing the value and then clicking it.

There are 4 available command :

 - **neweditor** : Create / refresh editor
 - **newstate** : Update state of an editor
 - **updatedoc** : Update doc of an editor
 - **savedoc** : Manually save editor doc into designated variable, in case updalistener is false

You can make a command by changing its value and clicking it using javascript or jquery. Example below will use JQuery :

```javascript
// Make new editor in element of #editordiv
$("#CMEditorPrefix-command").val('neweditor-editordiv').click();
// Update the state
$("#CMEditorPrefix-command").val('newstate-editordiv').click();
```

Or you can make a function to make it shorter :

```javascript
function cmdfunc(editor, command) {
    $('#CMEditorPrefix-command').val(command +'-'+ editor).click();
}
// Manually save #editordiv doc into designated variable
cmdfunc('editordiv','savedoc');
```

### 2. Editor Buttons & Select Options

These buttons and select options are used to control the editor and appearance. You can add them automatically (read the **EditorSetting** section), or manually. The command ran by the wrapper depends on the button's ID. If you add the buttons manually, you can use anything in the value.

If you choose to add them manually, here are the rule :

#### Editor Button

The naming of its ID would be **EditorPrefix+"-"+command+"-"+ParentName** (ie. 'CMEditorPrefix-undoall-editordiv').

 - **undoall** : Undo Until Initial Doc State
 - **undo** : Undo 1 Time
 - **redo** : Redo 1 Time
 - **redoall** : Redo Until The Last Doc State
 - **indentmore** : Increase Indent
 - **indentless** : Decrease Indent
 - **selectall** : Select All Text
 - **search** : Open Search Panel
 - **gotoline** : Move The Cursor To Certain Line
 - **linewrap** : Enable / Disable LineWrap
 - **readonly** : Enable / Disable ReadOnly

```html
<!--
ID : EditorPrefix +"-"+ command +"-"+ ParentName
-->
<!-- Undo Until Initial Doc State -->
<input type='button' id='CMEditorPrefix-undoall-editordiv' value='Undo All'>
<!-- Select All Text -->
<input type='button' id='CMEditorPrefix-selectall-editordiv' value=''>
```

Additionally, you can use **gotoline** programatically by changing the button's property of **lineval** and then click the button like so :

```javascript
// Go to line 45
let LineTarget = 45;
$("CMEditorPrefix-gotoline-editordiv").prop("lineval", LineTarget).click();
```

#### Select Options

There 2 select options to communicate with the editor : **setlang** (to change editor language) and **settheme** (to change editor theme).

```html
<!--
SELECT OPTION FOR LANGUAGE
Available languages : text (no language), html, javascript, php, json, css
You can use all of them or only some
-->
<select id="CMEditorPrefix-setlang-editordiv">
    <option value="html">html</option>
    <option value="php">php</option>
</select>

<!--
SELECT OPTION FOR THEME
Available themes :
DefaultTheme (aceCobalt, mix of ivqonsanada/codemirror6-themes material-darker.ts and Ace Editor's Cobalt)
materialLight, materialDark, solarizedLight, solarizedDark, dracula, githubLight, githubDark, aura, tokyoNight, tokyoNightStorm, tokyoNightDay (By @dennis84/codemirror-themes)
You can use all of them or only some
-->
<select id="CMEditorPrefix-settheme-editordiv">
    <option value="DefaultTheme">DefaultTheme</option>
    <option value="materialLight">materialLight</option>
    <option value="tokyoNight">tokyoNight</option>
</select>
```

## Example Code

```html
<!--
- Add editor to #editordiv
- Append control buttons on editor panel
- 'strData' as a designated variable for the doc to be saved
-->
<div id="editordiv"></div>
<input type='button' id='CM6-selectall-editordiv' value='Select All'>
&nbsp;&nbsp;&nbsp;
<input type='button' id='CM6-search-editordiv' value='Search'>
&nbsp;&nbsp;&nbsp;
<input type='button' id='CM6-linewrap-editordiv' value='LineWrap'>
&nbsp;&nbsp;&nbsp;
<input type='button' id='CM6-readonly-editordiv' value='ReadOnly'>
<script type="text/javascript">
var EditorPrefix = 'CM6',
    strData = "Data sample\nData sample",
    EditorSetting = { editordiv : {
    	data: "strData",
	updatelistener: 200,
	control: {
	    panel: 1,
	    panelitem: ['history', 'indent'],
	}
    }};
function cmdfunc(editor, command) {
    $('#'+EditorPrefix+'-command').val(command +'-'+ editor).click();
}
// Function to update editor doc
function updatedata(){
    strData = "Data sample changed\nData sample changed";
    cmdfunc('editordiv', 'updatedoc');
}
$(document).ready(function() {
    // Editor init
    cmdfunc('editordiv', 'neweditor');
});
</script>
```

## Credits

 - [CodeMirror 6](https://codemirror.net/)
 - CM6 Themes by [@dennis84/codemirror-themes](https://github.com/dennis84/codemirror-themes)
 - HTML Snippets from [abusaidm/html-snippets](https://github.com/abusaidm/html-snippets)
 - JQuery Snippets from [DonJayamanne/jquerysnippets](https://github.com/DonJayamanne/jquerysnippets)
 - JavaScript Snippets from [jabacchetta/vscode-javascript-snippets](https://github.com/jabacchetta/vscode-javascript-snippets), [capaj/vscode-standardjs-snippets](https://github.com/capaj/vscode-standardjs-snippets), [xabikos/vscode-javascript](https://github.com/xabikos/vscode-javascript) and [nathanchapman/vscode-javascript-snippets](https://github.com/nathanchapman/vscode-javascript-snippets)
 - PHP Snippets from [microsoft/vscode](https://github.com/microsoft/vscode/blob/main/extensions/php/snippets/php.code-snippets), [heberalmeida/php-snippets](https://github.com/heberalmeida/php-snippets) and [h4kst3r/php-awesome-snippets](https://github.com/h4kst3r/php-awesome-snippets)

## License

MIT
