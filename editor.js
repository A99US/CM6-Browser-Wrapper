/*

https://github.com/A99US/CM6-Browser-Wrapper

*/

// import { basicSetup } from "codemirror"
import { EditorView, lineNumbers, highlightActiveLineGutter, highlightSpecialChars, drawSelection, dropCursor, rectangularSelection, crosshairCursor, highlightActiveLine, keymap, Decoration, showPanel } from "@codemirror/view" // DecorationSet Panel
import { EditorState, StateEffect, StateField, Compartment } from "@codemirror/state"
import { language, foldGutter, indentOnInput, syntaxHighlighting, defaultHighlightStyle, bracketMatching, foldKeymap, indentUnit } from "@codemirror/language"
import { openSearchPanel, closeSearchPanel, searchPanelOpen, highlightSelectionMatches, searchKeymap, search, getSearchQuery } from '@codemirror/search'
import { indentMore, indentLess, undo, redo, undoDepth, redoDepth, selectAll, history, defaultKeymap, historyKeymap, indentWithTab } from '@codemirror/commands'
import { htmlLanguage, html } from "@codemirror/lang-html"
import { javascriptLanguage, javascript, esLint } from "@codemirror/lang-javascript"
import { phpLanguage, php } from '@codemirror/lang-php'
import { cssLanguage, css } from '@codemirror/lang-css'
import { jsonLanguage, json } from '@codemirror/lang-json'
import { autocompletion, CompletionContext, startCompletion, currentCompletions, completionStatus, completeFromList, acceptCompletion, closeBrackets, closeBracketsKeymap, completionKeymap, snippetCompletion } from "@codemirror/autocomplete" // CompletionSource

// JS Linter is too heavy, not priority
// import { linter, lintGutter, lintKeymap, openLintPanel } from '@codemirror/lint' // Diagnostic
// import Linter from "eslint4b-prebuilt"

// import snippetmaker from './snippet.js'
import snippetmaker from 'codemirror-6-snippetbuilder'
import snippet_php_h4kst3r from './asset/snippet_php_h4kst3r.ts'
import snippet_html_abusaidm from './asset/snippet_html_abusaidm.ts'
import snippet_jquery_DonJayamanne from './asset/snippet_jquery_DonJayamanne.ts'
// import snippet_js_xabikos from './asset/snippet_js_xabikos.ts'
import snippet_js_capaj from './asset/snippet_js_capaj.ts'
// import snippet_js_jabacchetta from './asset/snippet_js_jabacchetta.ts'
// import snippet_js_nathanchapman from './asset/snippet_js_nathanchapman.ts'

import { aceCobalt as DefaultTheme } from './asset/theme_ace_cobalt.ts'
import { materialDarker } from './asset/theme_material_darker.ts'
import {
    amy as amy,
    barf as barf,
    bespin as bespin,
    birdsOfParadise as birdsOfParadise,
    boysAndGirls as boysAndGirls,
    cobalt as cobalt,
    coolGlow as coolGlow,
    dracula as dracula
} from 'thememirror'
import { basicDark } from 'cm6-theme-basic-dark'
import { basicLight } from 'cm6-theme-basic-light'
import { gruvboxDark } from 'cm6-theme-gruvbox-dark'
import { gruvboxLight } from 'cm6-theme-gruvbox-light'
import { materialDark } from 'cm6-theme-material-dark'
import { nord } from 'cm6-theme-nord'
import { solarizedDark } from 'cm6-theme-solarized-dark'
import { solarizedLight } from 'cm6-theme-solarized-light'

let languageConf = new Compartment,
    themeConf = new Compartment,
    linewrapConf = new Compartment,
    readonlyConf = new Compartment,
    langopt = {
        text: [],
        html: html(),
        javascript: javascript(),
        php: php(),
        css: css(),
        json: json()
    },
    themeopt = {
        DefaultTheme: DefaultTheme,
        amy: amy,
        barf: barf,
        bespin: bespin,
        birdsOfParadise: birdsOfParadise,
        boysAndGirls: boysAndGirls,
        cobalt: cobalt,
        coolGlow: coolGlow,
        dracula: dracula,
        basicDark: basicDark,
        basicLight: basicLight,
        gruvboxDark: gruvboxDark,
        gruvboxLight: gruvboxLight,
        materialDark: materialDark,
        materialDarker: materialDarker,
        nord: nord,
        solarizedDark: solarizedDark,
        solarizedLight: solarizedLight
    };

let extensionArray = [],
    EditorVar = {},
    StateVar,
    EditorPrefix = (window.EditorPrefix || 'CMEditorPrefix'),
    EditorDefaultLang = 'text',
    EditorDefaultTheme = 'DefaultTheme',
    DocEditTimer, HistoryTimer,
    DefaultUpdateDelay = 300,
    DefaultHistoryDelay = 10;

if (!(window.EditorPrefix)) {
    window.EditorPrefix = EditorPrefix;
}
if (!(window.EditorSetting)) {
    window.EditorSetting = {};
}

extensionArray = [
    // EditorView.lineWrapping, // Customizable
    // linter(esLint(new Linter())),
    // lintGutter(),
    search(),
    foldGutter({
        closedText: '▶',
        openText: '▼'
    }),
    // ====================== Basic-Setup ======================
    // lineNumbers(), // Customizable
    highlightActiveLineGutter(),
    highlightSpecialChars(),
    history(),
    drawSelection(),
    dropCursor(),
    EditorState.allowMultipleSelections.of(true),
    indentOnInput(),
    syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
    bracketMatching(),
    closeBrackets(),
    autocompletion(),
    rectangularSelection(),
    crosshairCursor(),
    highlightActiveLine(),
    highlightSelectionMatches(),
    keymap.of([
        ...closeBracketsKeymap,
        ...defaultKeymap,
        // ...searchKeymap, // Customizable
        ...historyKeymap,
        ...foldKeymap,
        // ...completionKeymap, // Customizable
        // ...lintKeymap
    ])
];

/*
Command Button Auto Init
If not manually added
*/
if (!(document.getElementById(EditorPrefix + "-command"))) {
    let btn = document.createElement("button");
    btn.id = EditorPrefix + "-command";
    btn.value = 'neweditor-editor';
    btn.hidden = true;
    btn.innerHTML = "Command Button";
    document.body.appendChild(btn);
}

/*
Command Button
*/
$(document).on('click', '[id^="' + EditorPrefix + '-"]', function() {
    let ThisButton = $(this);
    // this.id.split('-'),
    let CommandId = ThisButton.attr('id').split('-'), // History Button, Search, etc
        CommandValue = ThisButton.val().split('-'); // Command Button
    let parent = CommandId[2] || CommandValue[1];
    if (CommandId[1] == 'command') {
        if (CommandValue[0] == 'neweditor') {
            // Create new editor
            neweditor(parent);
        } else if (CommandValue[0] == 'newstate') {
            // Update a state of existing editor
            newstate(parent, true);
        } else if (CommandValue[0] == 'updatedoc') {
            // Update editor doc
            updatedoc(parent);
            blurrit(parent);
        } else if (CommandValue[0] == 'savedoc') {
            // Save state doc into designated variable
            savedoc(parent);
        }
    } else if (CommandId[1] == 'spancontrolpanel') {
        $('#spancontrolpanel' + parent).toggle();
        ThisButton.val(
            (ThisButton.val() == 'Hide') ? 'Show' : 'Hide'
        );
    } else if (CommandId[1] == 'undo') {
        // Single-Undo Button
        undo(EditorVar[parent]);
        blurrit(parent);
    } else if (CommandId[1] == 'redo') {
        // Single-Redo Button
        redo(EditorVar[parent]);
        blurrit(parent);
    } else if (CommandId[1] == 'undoall') {
        // Full-Undo Button
        while (undoDepth(EditorVar[parent].state) > 0) {
            undo(EditorVar[parent]);
        };
        blurrit(parent);
    } else if (CommandId[1] == 'redoall') {
        // Full-Redo Button
        while (redoDepth(EditorVar[parent].state) > 0) {
            redo(EditorVar[parent]);
        };
        blurrit(parent);
    } else if (CommandId[1] == 'selectall') {
        // Select All Button
        selectAll(EditorVar[parent]);
        EditorVar[parent].focus();
    } else if (CommandId[1] == 'indentmore') {
        // Increase indentation
        indentMore(EditorVar[parent]);
    } else if (CommandId[1] == 'indentless') {
        // Decrease indentation
        indentLess(EditorVar[parent]);
    } else if (CommandId[1] == 'search') {
        // Search Button
        let editorselected = EditorVar[parent].state.sliceDoc(EditorVar[parent].state.selection.main.from, EditorVar[parent].state.selection.main.to),
            editorsearchquery = getSearchQuery(EditorVar[parent].state).search;
        if (!searchPanelOpen(EditorVar[parent].state) || (editorselected.length > 0 && editorselected != editorsearchquery)) {
            openSearchPanel(EditorVar[parent]);
        } else {
            closeSearchPanel(EditorVar[parent]);
        }
    } else if (CommandId[1] == 'linewrap') {
        // LineWrap Button
        EditorVar[parent].dispatch({
            effects: linewrapConf.reconfigure(
                (ThisButton.val().split(' ').pop() == 'Off') ? EditorView.lineWrapping : []
            )
        });
        let lwtext;
        if (ThisButton.val().split(' ').pop() == 'Off') {
            lwtext = 'LineWrap On';
            window.EditorSetting[parent]["linewrap"] = 1;
        } else {
            lwtext = 'LineWrap Off';
            window.EditorSetting[parent]["linewrap"] = 0;
        }
        $("[id=" + this.id + "]").val(lwtext);
    } else if (CommandId[1] == 'readonly') {
        // ReadOnly Button
        EditorVar[parent].dispatch({
            effects: readonlyConf.reconfigure(
                EditorView.editable.of(
                    (ThisButton.val().split(' ').pop() == 'Off') ? false : true
                )
            )
        });
        let rotext;
        if (ThisButton.val().split(' ').pop() == 'Off') {
            rotext = 'ReadOnly On';
            window.EditorSetting[parent]["readonly"] = 1;
        } else {
            rotext = 'ReadOnly Off';
            window.EditorSetting[parent]["readonly"] = 0;
        }
        $("[id=" + this.id + "]").val(rotext);
    }
});

/*
Set cursor off of the editor
for mobile usage
*/
function blurrit(parent) {
    EditorVar[parent].contentDOM.blur();
}

/*
Select Option to change language and theme
*/
$(document).on('change', '[id^="' + EditorPrefix + '-set"]', function() {
    let Command = this.id.split('-');
    let parent = Command[2];
    window.EditorSetting[parent][Command[1].slice(3)] = this.value;
    EditorVar[parent].dispatch({
        effects: ((Command[1] == 'setlang') ?
            languageConf.reconfigure(langopt[this.value]) :
            themeConf.reconfigure(themeopt[this.value])
        )
    })
    // Change All Existing Select Option With The Same ID To The Same Value
    $("[id=" + this.id + "]").val(this.value);
});

/*
Function to start a new editor
*/
function neweditor(parent) {
    if (EditorVar[parent]) {
        // If editor already exist, destroy Var
        EditorVar[parent].destroy();
        // Resetting parent element in case there are buttons appended/prepended
        $('#' + parent).html('');
    }
    EditorVar[parent] = new EditorView({
        state: newstate(parent),
        parent: document.querySelector('#' + parent)
    });
    let setting = window.EditorSetting[parent];
    if (setting['control']) {
        // Append / Prepend Control, If Any
        buildcontrol(parent);
        // Add Control Panel, If Any
        if (setting['control']['panel'])
            buildcontrol(parent, true);
    }
    // Reset History Button
    buttonstatus(parent);
}

/*
Function to start a new state
*/
function newstate(parent, updatestate = false) {
    initeditorsetting(parent);
    let setting = window.EditorSetting[parent];
    StateVar = EditorState.create({
        extensions: buildextension(parent),
        doc: (window[setting['data']] || '')
    });
    // If updating state, not setting state for new editor
    if (updatestate) {
        EditorVar[parent].setState(StateVar);
        if (setting['control'] && setting['control']['panel'])
            buildcontrol(parent, true);
        buttonstatus(parent);
        return;
    }
    // If setting state for new editor, return StateVar
    return StateVar;
}

/*
Function to update doc
*/
function updatedoc(parent) {
    EditorVar[parent].dispatch({
        changes: {
            from: 0,
            to: EditorVar[parent].state.doc.length,
            insert: (window[window.EditorSetting[parent]['data']] || '')
        }
    });
}

/*
Function to manually save state doc to designated variable
In case updatelistener is set to false
*/
function savedoc(parent) {
    window[window.EditorSetting[parent]['data']] = EditorVar[parent].state.doc.toString()
}

/*
Init EditorSetting if not already set
*/
function initeditorsetting(parent) {
    // EditorSetting not set
    if (!window.EditorSetting[parent]) {
        window.EditorSetting[parent] = { "data": parent + "data", "history": false };
    }
    // EditorSetting already set, Check important var
    else {
        let setting = window.EditorSetting[parent];
        if (setting["data"] == "" || typeof setting["data"] === 'undefined') {
            window.EditorSetting[parent]["data"] = parent + "data";
        }
        if (setting["history"] == "" || typeof setting["history"] === 'undefined') {
            window.EditorSetting[parent]["history"] = (setting['control'] && ((setting['control']['panelitem'] && setting['control']['panelitem'].includes("history")) || (setting['control']['prependitem'] && setting['control']['prependitem'].includes("history")) || (setting['control']['appenditem'] && setting['control']['appenditem'].includes("history")) || (setting['control']['elementitem'] && setting['control']['elementitem'].includes("history")))) ? true : false;
        }
    }
}

/*
Function to populate extensions
*/
function buildextension(parent) {
    let setting = window.EditorSetting[parent];
    let customExt = [extensionArray].concat([
        languageConf.of(langopt[(setting['lang'] || EditorDefaultLang)]),
        themeConf.of(themeopt[(setting['theme'] || EditorDefaultTheme)]),
        readonlyConf.of(EditorView.editable.of(
            (setting['readonly']) ? !(setting['readonly']) : true
        )),
        linewrapConf.of(
            (setting['linewrap']) ? EditorView.lineWrapping : []
        )
    ]);
    if (typeof setting['lineNumbers'] === 'undefined' || setting['lineNumbers'] == true)
        customExt.push(lineNumbers());
    if (setting['css'])
        customExt.push(EditorView.theme(setting['css']));
    if (setting['indentunit'])
        customExt.push(indentUnit.of(' '.repeat(setting['indentunit'])));
    if (setting['updatelistener'] || setting['history']) {
        customExt.push(
            EditorView.updateListener.of((v) => {
                if (v.docChanged) {
                    if (setting['updatelistener']) {
                        if (DocEditTimer) clearTimeout(DocEditTimer);
                        DocEditTimer = setTimeout(() => {
                            window[setting['data']] = v.state.doc.toString();
                        }, (setting['updatelistener']));
                    }
                    if (setting['history']) {
                        if (HistoryTimer) clearTimeout(HistoryTimer);
                        HistoryTimer = setTimeout(() => {
                            buttonstatus(parent);
                        }, (setting['historydelay'] || DefaultHistoryDelay));
                    }
                }
            })
        );
    }
    if (setting['snippets']) {
        if (setting['snippets'].includes('js') || setting['snippets'].includes('javascript')) {
            customExt.push(javascriptLanguage.data.of({
                autocomplete: snippetmaker({
                    scope: 'js',
                    source: snippet_js_capaj,
                    prefix: ''
                })
            }));
        }
        if (setting['snippets'].includes('jquery')) {
            customExt.push(javascriptLanguage.data.of({
                autocomplete: snippetmaker({
                    scope: 'jquery',
                    source: snippet_jquery_DonJayamanne,
                    prefix: ''
                })
            }));
        }
        if (setting['snippets'].includes('html')) {
            customExt.push(htmlLanguage.data.of({
                autocomplete: snippetmaker({
                    scope: 'html',
                    source: snippet_html_abusaidm,
                    prefix: ''
                })
            }));
        }
        if (setting['snippets'].includes('php')) {
            customExt.push(phpLanguage.data.of({
                autocomplete: snippetmaker({
                    scope: 'php',
                    source: snippet_php_h4kst3r,
                    prefix: ''
                })
            }));
        }
    }
    if (setting['keymap']) {
        if (setting['keymap'].includes('indentWithTab'))
            customExt.push(keymap.of([indentWithTab]));
        if (setting['keymap'].includes('searchKeymap'))
            customExt.push(keymap.of([...searchKeymap]));
        if (setting['keymap'].includes('completionKeymap'))
            customExt.push(keymap.of([...completionKeymap]));
    }
    return customExt;
}

/*
Function to build control buttons
*/
function buildcontrol(parent, panelonly = false) {
    let setting = window.EditorSetting[parent],
        nbsp = "&nbsp;&nbsp;&nbsp;",
        selected, // control = '', 
        button = (id, value, data = '') => {
            return "<input type='button' id='" + EditorPrefix + id + parent + "' value='" + value + "' " + data + ">" + nbsp;
        };
    let control = (controlarray) => {
        let controlstr = '',
            str, controlopt = {};
        controlopt['history'] = () => {
            return button('-undoall-', '<< UndoAll') +
                button('-undo-', '<< Undo') +
                button('-redo-', 'Redo >>') +
                button('-redoall-', 'RedoAll >>');
        };
        controlopt['indent'] = () => {
            return button('-indentmore-', 'indentMore') +
                button('-indentless-', 'indentLess');
        };
        controlopt['selectall'] = () => {
            return button('-selectall-', 'Select All');
        };
        controlopt['search'] = () => {
            return button('-search-', 'Search / Replace');
        };
        controlopt['linewrap'] = () => {
            return button('-linewrap-', 'LineWrap ' + (
                (setting['linewrap']) ? 'On' : 'Off'
            ));
        };
        controlopt['readonly'] = () => {
            return button('-readonly-', 'ReadOnly ' + (
                (setting['readonly']) ? 'On' : 'Off'
            ));
        };
        controlopt['lang'] = () => {
            str = "";
            str += "<select id='" + EditorPrefix + '-setlang-' + parent + "'>";
            for (const [key, value] of Object.entries(langopt)) {
                selected = (key == setting['lang']) ? ' selected' : '';
                str += "<option value='" + key + "' " + selected + ">" + key + "</option>";
            }
            str += "</select>" + nbsp;
            return str;
        };
        controlopt['theme'] = () => {
            str = "";
            str += "<select id='" + EditorPrefix + '-settheme-' + parent + "'>";
            for (const [key, value] of Object.entries(themeopt)) {
                selected = (key == setting['theme']) ? ' selected' : '';
                str += "<option value='" + key + "' " + selected + ">" + key + "</option>";
            }
            str += "</select>" + nbsp;
            return str;
        }

        for (let i = 0; i < controlarray.length; i++) {
            controlstr += controlopt[controlarray[i]]();
        }

        return controlstr;
    };

    // Add Control To Panel
    if (panelonly == true) {
        let topposition = (setting['control']['panel'] == 'top') ? true : false;

        function createpaneldiv() {
            let dom = document.createElement("div");
            dom.id = 'panelcontrol' + parent;
            dom.innerHTML =
                button('-spancontrolpanel-', 'Hide') +
                "<span id='spancontrolpanel" + parent + "' style='" +
                (setting['control']['panelstyle'] || "line-height: 175%;") + "'>" +
                control(setting['control']['panelitem']) +
                "</span>";
            return { top: topposition, dom };
        }
        EditorVar[parent].dispatch({
            effects: StateEffect.appendConfig.of(showPanel.of(createpaneldiv))
        })
    }

    // Add Control To Element
    else if (panelonly == false) {
        let br = (ite) => {
            return '<BR>'.repeat(ite - 1);
        };
        // Prepend Control Into Editor Parent Element
        if (setting['control']['prepend']) {
            $("#" + parent).prepend(control(setting['control']['prependitem']) + br(setting['control']['prepend']) + '<BR>');
        }
        // Append Control Into Editor Parent Element
        if (setting['control']['append']) {
            $("#" + parent).append(br(setting['control']['append']) + control(setting['control']['appenditem']));
        }
        // Append Control To A Certain Element
        if (setting['control']['element']) {
            $("#" + setting['control']['element']).html('').html(control(setting['control']['elementitem']));
        }
    }
}

/*
Function to check and update the disability of the history button
*/
function buttonstatus(parent) {
    let disableundo = (undoDepth(EditorVar[parent].state) > 0) ? false : true;
    let disableredo = (redoDepth(EditorVar[parent].state) > 0) ? false : true;
    $('[id="' + EditorPrefix + '-undo-' + parent + '"]').attr('disabled', disableundo);
    $('[id="' + EditorPrefix + '-undoall-' + parent + '"]').attr('disabled', disableundo);
    $('[id="' + EditorPrefix + '-redo-' + parent + '"]').attr('disabled', disableredo);
    $('[id="' + EditorPrefix + '-redoall-' + parent + '"]').attr('disabled', disableredo);
}
