import { snippetCompletion } from "@codemirror/autocomplete"

export default function snippetmaker(data){
  let prefix = (data['prefix'] || ''), scope = (data['scope'] || '').trim(),
      result = [], detailtext = '', bodytext = '', labeltext = '';
  for (const [key, value] of Object.entries(data['source'])) {
    if(!(['','*'].includes(scope)) && typeof value["scope"] !== 'undefined' && !(value["scope"].includes(scope))){
      continue;
    }
    bodytext = (Array.isArray(value["body"])) ?
                value["body"].join("\n") :
                value["body"];
    labeltext = prefix + key;
    detailtext = (typeof value["description"] !== 'undefined' && (typeof data["description"] === 'undefined' || data["description"] != false)) ?
                  ': '+ value["description"] :
                  '';
    result.push(
        snippetCompletion(bodytext, {
          label: labeltext,
          detail: detailtext,
          type: "keyword"
        })
    );
  }
  return result;
}

/*

import snippet_php_h4kst3r from './snippet_php_h4kst3r.ts'
import snippet_html_abusaidm from './snippet_html_abusaidm.ts'
import snippet_jquery_DonJayamanne from './snippet_jquery_DonJayamanne.ts'
import snippet_js_xabikos from './snippet_js_xabikos.ts'
import snippet_js_capaj from './snippet_js_capaj.ts'
import snippet_js_jabacchetta from './snippet_js_jabacchetta.ts'
import snippet_js_nathanchapman from './snippet_js_nathanchapman.ts'

import snippet_php_heberalmeida from './snippet_php_heberalmeida.ts'
import snippet_php_microsoft_vscode from './snippet_php_microsoft_vscode.ts'

snippet_php_heberalmeida : Not complete, Not best, ignore description
snippet_php_microsoft_vscode is error, find others php snippet

BEST
JS : snippet_js_capaj, snippet_js_nathanchapman, snippet_js_jabacchetta, snippet_js_xabikos
PHP : h4kst3r_php_awesome

snippet_js_capaj, add unavailable ones from nathanchapman and jabacchetta

{ ...snippet_js_jabacchetta, ...snippet_js_nathanchapman }

*/

/*

var opt = {
						// lang : [ scope, sourcearray, |0,1| (1 to ignore description) ]
						js: ['javascript', snippet_js_capaj, 0],
						jquery: ['jquery', snippet_jquery_DonJayamanne, 0],
						php: ['php', snippet_php_h4kst3r, 0],
						html: ['html', snippet_html_abusaidm, 0]
					}
		;// ,snippetlist = {js: '', jquery: '', php: '', html: ''};

const makelist = (arr) => {
	var customchar = "_ ", // Append to popup option, to differentiate with native snippets
			result = [], detailtext = '', bodytext = '', labeltext = '';
	for (const [key, value] of Object.entries(arr[1])) {
		if(typeof value["scope"] !== 'undefined' && !(value["scope"].includes(arr[0]))){
			continue;
		}
		bodytext = (Array.isArray(value["body"])) ?
								value["body"].join("\n") :
								value["body"];
		labeltext = customchar + key;
		detailtext = (arr[2] == 1 || typeof value["description"] === 'undefined') ?
									'' :
									': '+ value["description"];
		result.push(
				snippetCompletion(bodytext, {
					label: labeltext,
					detail: detailtext,
					type: "keyword"
				})
		);
	}
	return result;
}

snippetlist['js'] = makelist(opt['js']);
snippetlist['jquery'] = makelist(opt['jquery']);
snippetlist['php'] = makelist(opt['php']);
snippetlist['html'] = makelist(opt['html']);

// export default snippetlist


/*

*/