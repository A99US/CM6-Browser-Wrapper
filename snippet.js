/*
https://github.com/A99US/codemirror-6-snippetbuilder
*/

import { snippetCompletion } from "@codemirror/autocomplete"

export default function snippetbuilder(data){
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
