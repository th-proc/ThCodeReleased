(this["webpackJsonpantd-thcode"]=this["webpackJsonpantd-thcode"]||[]).push([[132],{2246:function(e,n){e.exports=function(e){var n="[ \\t\\f]*",a=n+"[:=]"+n,t="[ \\t\\f]+",s="("+a+"|"+"[ \\t\\f]+)",r="([^\\\\\\W:= \\t\\f\\n]|\\\\.)+",i="([^\\\\:= \\t\\f\\n]|\\\\.)+",c={end:s,relevance:0,starts:{className:"string",end:/$/,relevance:0,contains:[{begin:"\\\\\\\\"},{begin:"\\\\\\n"}]}};return{name:".properties",case_insensitive:!0,illegal:/\S/,contains:[e.COMMENT("^\\s*[!#]","$"),{returnBegin:!0,variants:[{begin:r+a,relevance:1},{begin:r+t,relevance:0}],contains:[{className:"attr",begin:r,endsParent:!0,relevance:0}],starts:c},{begin:i+s,returnBegin:!0,relevance:0,contains:[{className:"meta",begin:i,endsParent:!0,relevance:0}],starts:c},{className:"attr",relevance:0,begin:i+n+"$"}]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_properties.badfdef6.chunk.js.map