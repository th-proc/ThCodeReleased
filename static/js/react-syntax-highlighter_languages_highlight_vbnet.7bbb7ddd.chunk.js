(this["webpackJsonpantd-thcode"]=this["webpackJsonpantd-thcode"]||[]).push([[173],{2179:function(e,n){function t(e){return e?"string"===typeof e?e:e.source:null}function a(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];var i=n.map((function(e){return t(e)})).join("");return i}function i(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];var i="("+n.map((function(e){return t(e)})).join("|")+")";return i}e.exports=function(e){var n=/\d{1,2}\/\d{1,2}\/\d{4}/,t=/\d{4}-\d{1,2}-\d{1,2}/,r=/(\d|1[012])(:\d+){0,2} *(AM|PM)/,s=/\d{1,2}(:\d{1,2}){1,2}/,o={className:"literal",variants:[{begin:a(/# */,i(t,n),/ *#/)},{begin:a(/# */,s,/ *#/)},{begin:a(/# */,r,/ *#/)},{begin:a(/# */,i(t,n),/ +/,i(r,s),/ *#/)}]},l=e.COMMENT(/'''/,/$/,{contains:[{className:"doctag",begin:/<\/?/,end:/>/}]}),c=e.COMMENT(null,/$/,{variants:[{begin:/'/},{begin:/([\t ]|^)REM(?=\s)/}]});return{name:"Visual Basic .NET",aliases:["vb"],case_insensitive:!0,classNameAliases:{label:"symbol"},keywords:{keyword:"addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",built_in:"addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",type:"boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",literal:"true false nothing"},illegal:"//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",contains:[{className:"string",begin:/"(""|[^/n])"C\b/},{className:"string",begin:/"/,end:/"/,illegal:/\n/,contains:[{begin:/""/}]},o,{className:"number",relevance:0,variants:[{begin:/\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/},{begin:/\b\d[\d_]*((U?[SIL])|[%&])?/},{begin:/&H[\dA-F_]+((U?[SIL])|[%&])?/},{begin:/&O[0-7_]+((U?[SIL])|[%&])?/},{begin:/&B[01_]+((U?[SIL])|[%&])?/}]},{className:"label",begin:/^\w+:/},l,c,{className:"meta",begin:/[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,end:/$/,keywords:{"meta-keyword":"const disable else elseif enable end externalsource if region then"},contains:[c]}]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_vbnet.7bbb7ddd.chunk.js.map