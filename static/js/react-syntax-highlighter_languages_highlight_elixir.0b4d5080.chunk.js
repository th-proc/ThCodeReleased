(this["webpackJsonpantd-thcode"]=this["webpackJsonpantd-thcode"]||[]).push([[52],{2053:function(e,n){e.exports=function(e){var n="[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?",i={$pattern:n,keyword:"and false then defined module in return redo retry end for true self when next until do begin unless nil break not case cond alias while ensure or include use alias fn quote require import with|0"},a={className:"subst",begin:/#\{/,end:/\}/,keywords:i},s={className:"number",begin:"(\\b0o[0-7_]+)|(\\b0b[01_]+)|(\\b0x[0-9a-fA-F_]+)|(-?\\b[1-9][0-9_]*(\\.[0-9_]+([eE][-+]?[0-9]+)?)?)",relevance:0},d={className:"string",begin:"~[a-z](?=[/|([{<\"'])",contains:[{endsParent:!0,contains:[{contains:[e.BACKSLASH_ESCAPE,a],variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/\//,end:/\//},{begin:/\|/,end:/\|/},{begin:/\(/,end:/\)/},{begin:/\[/,end:/\]/},{begin:/\{/,end:/\}/},{begin:/</,end:/>/}]}]}]},b={className:"string",begin:"~[A-Z](?=[/|([{<\"'])",contains:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/\//,end:/\//},{begin:/\|/,end:/\|/},{begin:/\(/,end:/\)/},{begin:/\[/,end:/\]/},{begin:/\{/,end:/\}/},{begin:/</,end:/>/}]},t={className:"string",contains:[e.BACKSLASH_ESCAPE,a],variants:[{begin:/"""/,end:/"""/},{begin:/'''/,end:/'''/},{begin:/~S"""/,end:/"""/,contains:[]},{begin:/~S"/,end:/"/,contains:[]},{begin:/~S'''/,end:/'''/,contains:[]},{begin:/~S'/,end:/'/,contains:[]},{begin:/'/,end:/'/},{begin:/"/,end:/"/}]},o={className:"function",beginKeywords:"def defp defmacro",end:/\B\b/,contains:[e.inherit(e.TITLE_MODE,{begin:n,endsParent:!0})]},g=e.inherit(o,{className:"class",beginKeywords:"defimpl defmodule defprotocol defrecord",end:/\bdo\b|$|;/}),r=[t,b,d,e.HASH_COMMENT_MODE,g,o,{begin:"::"},{className:"symbol",begin:":(?![\\s:])",contains:[t,{begin:"[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?"}],relevance:0},{className:"symbol",begin:n+":(?!:)",relevance:0},s,{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))"},{begin:"->"},{begin:"("+e.RE_STARTERS_RE+")\\s*",contains:[e.HASH_COMMENT_MODE,{begin:/\/: (?=\d+\s*[,\]])/,relevance:0,contains:[s]},{className:"regexp",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE,a],variants:[{begin:"/",end:"/[a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}],relevance:0}];return a.contains=r,{name:"Elixir",keywords:i,contains:r}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_elixir.0b4d5080.chunk.js.map