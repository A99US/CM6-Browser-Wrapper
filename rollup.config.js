import {nodeResolve} from "@rollup/plugin-node-resolve"

let fileopt = {
  editor: ["./editor.js", "./cm6-browser-wrapper.rollup.js"],
  rare: ["./editorrare.js", "./editorrare.rollup.js"]
},
opt = 'editor';

export default {
  input: fileopt[opt][0],
  output: {
    file: fileopt[opt][1],
    format: "iife"
  },
  plugins: [nodeResolve()]
}
