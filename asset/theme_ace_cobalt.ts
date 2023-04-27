import { EditorView } from '@codemirror/view'
import { HighlightStyle, syntaxHighlighting } from "@codemirror/language"
import { tags as t } from "@lezer/highlight"

/*

Mix-and-match from 2 themes : Material Darker and Ace Cobalt

https://cdnjs.cloudflare.com/ajax/libs/ace/1.9.6/theme-cobalt.js
ivqonsanada/codemirror6-themes
https://github.com/ivqonsanada/codemirror6-themes/blob/main/src/material-darker.ts

*/

const base00 = '#2e3235', base01 = '#505d64', base02 = '#606f7a', base03 = '#707d8b', base04 = '#a0a4ae', base05 = '#bdbdbd', base06 = '#e0e0e0', base07 = '#fdf6e3', base_red = '#ff5f52', base_deeporange = '#ff6e40', base_pink = '#fa5788', base_yellow = '#facf4e', base_orange = '#ffad42', base_cyan = '#56c8d8', base_indigo = '#7186f0', base_purple = '#cf6edf', base_green = '#6abf69', base_lightgreen = '#99d066', base_teal = '#4ebaaa'

const invalid = base_red,
darkBackground = '#202325',
highlightBackground = 'rgba(0, 0, 0, 0.35)', // '#545b61',
background = base00, tooltipBackground = base01, selection = base01, cursor = base04,

acecursor = '#FFFFFF', aceselection = 'rgba(179, 101, 57, 0.75)'

/*

*/

// The editor theme styles for Material Dark.
const aceCobaltTheme = EditorView.theme(
  {
    '&': {
      color: '#FFFFFF', // base05,
      backgroundColor: '#002240' // background
    },

    '.cm-content': {
      caretColor: acecursor
    },

    '.cm-cursor, .cm-dropCursor': { borderLeftColor: acecursor },
    '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
      { backgroundColor: aceselection },

    '.cm-panels': { backgroundColor: darkBackground, color: base03 },
    '.cm-panels.cm-panels-top': { borderBottom: '2px solid black' },
    '.cm-panels.cm-panels-bottom': { borderTop: '2px solid black' },

    '.cm-searchMatch': {
      outline: `1px solid ${base_yellow}`,
      backgroundColor: 'transparent'
    },
    '.cm-searchMatch.cm-searchMatch-selected': {
      backgroundColor: highlightBackground
    },

    '.cm-activeLine': { backgroundColor: highlightBackground },
    '.cm-selectionMatch': {
      backgroundColor: darkBackground,
      outline: `1px solid ${base_teal}`
    },

    '&.cm-focused .cm-matchingBracket': {
      color: base06,
      outline: `1px solid ${base_teal}`
    },

    '&.cm-focused .cm-nonmatchingBracket': {
      color: base_red
    },

    '.cm-gutters': {
      backgroundColor: '#011e3a', //base00,
      borderRight: '1px solid #555555', // #4f5b66
      color: `rgb(128,145,160)` // base02
    },

    '.cm-activeLineGutter': {
      backgroundColor: highlightBackground,
      color: base07
    },

    '.cm-foldPlaceholder': {
      backgroundColor: '#FF9D00', //'transparent',
      border: 'none',
      color: '#FFFFFF' //'#ddd'
    },

    '.cm-tooltip': {
      border: 'none',
      backgroundColor: tooltipBackground
    },
    '.cm-tooltip .cm-tooltip-arrow:before': {
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent'
    },
    '.cm-tooltip .cm-tooltip-arrow:after': {
      borderTopColor: tooltipBackground,
      borderBottomColor: tooltipBackground
    },
    '.cm-tooltip-autocomplete': {
      '& > ul > li[aria-selected]': {
        backgroundColor: highlightBackground,
        // color: base03
      }
    }
  },
  { dark: true }
)

/*

*/

// The highlighting style for code in the Material Dark theme.
const aceCobaltHighlightStyle = HighlightStyle.define([
  {
    tag: t.keyword,
    color: '#FF9D00' //base_purple
  },
  {
    tag: [t.name, t.deleted, t.macroName],
    color: base_cyan
  },
  {
    tag: t.character,
    color: '#FF628C' //base_cyan
  },
  { tag: [t.propertyName], color: base_yellow },
  {
    tag: [t.variableName],
    color: '#CCCCCC' //base05
  },
  {
    tag: [t.function(t.variableName)],
    color: '#FFB054' //base_cyan
  },
  { tag: [t.labelName], color: base_purple },
  {
    tag: [t.color, t.standard(t.name)],
    color: base_yellow
  },
  {
    tag: t.constant(t.name),
    color: '#FF628C' //base_yellow
  },
  { tag: [t.definition(t.name), t.separator], color: base_pink },
  {
    tag: [t.brace],
    color: 'white' // base_purple
  },
  {
    tag: [t.annotation],
    color: invalid
  },
  {
    tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
    color: base_orange
  },
  {
    tag: [t.typeName, t.className],
    color: base_orange
  },
  {
    tag: [t.operator, t.operatorKeyword],
    color: base_indigo
  },
  {
    tag: [t.tagName],
    color: '#9EFFFF' //base_deeporange
  },
  {
    tag: [t.squareBracket],
    color: base_red
  },
  {
    tag: [t.angleBracket],
    color: base02
  },
  {
    tag: [t.attributeName],
    color: base05
  },
  {
    tag: [t.regexp],
    color: invalid
  },
  {
    tag: [t.quote],
    color: base_green
  },
  { tag: [t.string], color: '#3AD900' /*base_lightgreen*/ },
  {
    tag: t.link,
    color: base_cyan,
    textDecoration: 'underline',
    textUnderlinePosition: 'under'
  },
  {
    tag: [t.url, t.escape, t.special(t.string)],
    color: '#FF628C' //base_yellow
  },
  {
    tag: [t.meta],
    color: '#FF9D00' // base03
  },
  {
    tag: [t.comment],
    color: '#0088FF', //base03,
    fontStyle: 'italic'
  },
  { tag: t.monospace, color: base05 },
  { tag: t.strong, fontWeight: 'bold', color: base_red },
  { tag: t.emphasis, fontStyle: 'italic', color: base_lightgreen },
  { tag: t.strikethrough, textDecoration: 'line-through' },
  {
    tag: t.heading,
    fontWeight: 'bold',
    color: '#C8E4FD' //base_yellow
  },
  { tag: t.heading1, fontWeight: 'bold', color: base_yellow },
  {
    tag: [t.heading2, t.heading3, t.heading4],
    fontWeight: 'bold',
    color: base_yellow
  },
  {
    tag: [t.heading5, t.heading6],
    color: base_yellow
  },
  { tag: [t.atom, t.bool, t.special(t.variableName)], color: base_cyan },
  {
    tag: [t.processingInstruction, t.inserted],
    color: base_red
  },
  {
    tag: [t.contentSeparator],
    color: base_cyan
  },
  {
    tag: t.invalid,
    color: '#F8F8F8', //base02,
    borderBottom: `1px dotted #800F00` //${base_red}
  }
])

// Extension to enable the Material Dark theme (both the editor theme and
// the highlight style).
export const aceCobalt = [
  aceCobaltTheme,
  syntaxHighlighting(aceCobaltHighlightStyle)
]

/*

------------------------------------------------------

.ace-cobalt .ace_marker-layer .ace_step {
  background: rgb(127, 111, 19)
}

.ace-cobalt.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #002240;
}

.ace-cobalt .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(255, 255, 255, 0.15)
}

.ace-cobalt .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(179, 101, 57, 0.75)
}

.ace-cobalt .ace_invisible {
  color: rgba(255, 255, 255, 0.15)
}



.ace-cobalt .ace_support {
  color: #80FFBB
}

.ace-cobalt .ace_support.ace_constant {
  color: #EB939A
}

*/
