(this["webpackJsonpantd-thcode"]=this["webpackJsonpantd-thcode"]||[]).push([[77],{2188:function(n,e){function a(n){return n?"string"===typeof n?n:n.source:null}function t(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var s=e.map((function(n){return a(n)})).join("");return s}n.exports=function(n){var e="HTTP/(2|1\\.[01])",a=[{className:"attribute",begin:t("^",/[A-Za-z][A-Za-z0-9-]*/,"(?=\\:\\s)"),starts:{contains:[{className:"punctuation",begin:/: /,relevance:0,starts:{end:"$",relevance:0}}]}},{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}}];return{name:"HTTP",aliases:["https"],illegal:/\S/,contains:[{begin:"^(?="+e+" \\d{3})",end:/$/,contains:[{className:"meta",begin:e},{className:"number",begin:"\\b\\d{3}\\b"}],starts:{end:/\b\B/,illegal:/\S/,contains:a}},{begin:"(?=^[A-Z]+ (.*?) "+e+"$)",end:/$/,contains:[{className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{className:"meta",begin:e},{className:"keyword",begin:"[A-Z]+"}],starts:{end:/\b\B/,illegal:/\S/,contains:a}}]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_http.bfbd81ad.chunk.js.map