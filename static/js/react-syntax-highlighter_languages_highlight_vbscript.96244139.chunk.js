(this["webpackJsonpantd-thcode"]=this["webpackJsonpantd-thcode"]||[]).push([[174],{1976:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},1977:function(e,t,r){var n=r(1976);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},1978:function(e,t,r){var n=r(1979),i=r(1980),o=r(1977),a=r(1981);e.exports=function(e){return n(e)||i(e)||o(e)||a()}},1979:function(e,t,r){var n=r(1976);e.exports=function(e){if(Array.isArray(e))return n(e)}},1980:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},1981:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},2181:function(e,t,r){var n=r(1978);function i(e){return e?"string"===typeof e?e:e.source:null}function o(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t.map((function(e){return i(e)})).join("");return n}function a(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n="("+t.map((function(e){return i(e)})).join("|")+")";return n}e.exports=function(e){var t="lcase month vartype instrrev ubound setlocale getobject rgb getref string weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency conversions csng timevalue second year space abs clng timeserial fixs len asc isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim strcomp int createobject loadpicture tan formatnumber mid split  cint sin datepart ltrim sqr time derived eval date formatpercent exp inputbox left ascw chrw regexp cstr err".split(" "),r={begin:o(a.apply(void 0,n(t)),"\\s*\\("),relevance:0,keywords:{built_in:t.join(" ")}};return{name:"VBScript",aliases:["vbs"],case_insensitive:!0,keywords:{keyword:"call class const dim do loop erase execute executeglobal exit for each next function if then else on error option explicit new private property let get public randomize redim rem select case set stop sub while wend with end to elseif is or xor and not class_initialize class_terminate default preserve in me byval byref step resume goto",built_in:["server","response","request","scriptengine","scriptenginebuildversion","scriptengineminorversion","scriptenginemajorversion"].join(" "),literal:"true false null nothing empty"},illegal:"//",contains:[r,e.inherit(e.QUOTE_STRING_MODE,{contains:[{begin:'""'}]}),e.COMMENT(/'/,/$/,{relevance:0}),e.C_NUMBER_MODE]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_vbscript.96244139.chunk.js.map