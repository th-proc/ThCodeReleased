(this["webpackJsonpantd-thcode"]=this["webpackJsonpantd-thcode"]||[]).push([[85],{2225:function(n,e){n.exports=function(n){var e={literal:"true false null"},t=[n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE],i=[n.QUOTE_STRING_MODE,n.C_NUMBER_MODE],a={end:",",endsWithParent:!0,excludeEnd:!0,contains:i,keywords:e},l={begin:/\{/,end:/\}/,contains:[{className:"attr",begin:/"/,end:/"/,contains:[n.BACKSLASH_ESCAPE],illegal:"\\n"},n.inherit(a,{begin:/:/})].concat(t),illegal:"\\S"},s={begin:"\\[",end:"\\]",contains:[n.inherit(a)],illegal:"\\S"};return i.push(l,s),t.forEach((function(n){i.push(n)})),{name:"JSON",contains:i,keywords:e,illegal:"\\S"}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_json.11740af4.chunk.js.map