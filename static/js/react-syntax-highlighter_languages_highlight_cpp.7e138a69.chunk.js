(this["webpackJsonpantd-thcode"]=this["webpackJsonpantd-thcode"]||[]).push([[34],{2173:function(e,t){function n(e){return e?"string"===typeof e?e:e.source:null}function r(e){return function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.map((function(e){return n(e)})).join("")}("(",e,")?")}e.exports=function(e){var t=function(e){var t=e.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),n="decltype\\(auto\\)",a="[a-zA-Z_]\\w*::",i="(decltype\\(auto\\)|"+r(a)+"[a-zA-Z_]\\w*"+r("<[^<>]+>")+")",s={className:"keyword",begin:"\\b[a-z\\d_]*_t\\b"},o={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",end:"'",illegal:"."},e.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},c={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},l={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{"meta-keyword":"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},e.inherit(o,{className:"meta-string"}),{className:"meta-string",begin:/<.*?>/,end:/$/,illegal:"\\n"},t,e.C_BLOCK_COMMENT_MODE]},d={className:"title",begin:r(a)+e.IDENT_RE,relevance:0},u=r(a)+e.IDENT_RE+"\\s*\\(",p={keyword:"int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary",literal:"true false nullptr NULL"},m=[l,s,t,e.C_BLOCK_COMMENT_MODE,c,o],_={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:p,contains:m.concat([{begin:/\(/,end:/\)/,keywords:p,contains:m.concat(["self"]),relevance:0}]),relevance:0},g={className:"function",begin:"("+i+"[\\*&\\s]+)+"+u,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:p,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:n,keywords:p,relevance:0},{begin:u,returnBegin:!0,contains:[d],relevance:0},{className:"params",begin:/\(/,end:/\)/,keywords:p,relevance:0,contains:[t,e.C_BLOCK_COMMENT_MODE,o,c,s,{begin:/\(/,end:/\)/,keywords:p,relevance:0,contains:["self",t,e.C_BLOCK_COMMENT_MODE,o,c,s]}]},s,t,e.C_BLOCK_COMMENT_MODE,l]};return{aliases:["c","cc","h","c++","h++","hpp","hh","hxx","cxx"],keywords:p,disableAutodetect:!0,illegal:"</",contains:[].concat(_,g,m,[l,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",end:">",keywords:p,contains:["self",s]},{begin:e.IDENT_RE+"::",keywords:p},{className:"class",beginKeywords:"enum class struct union",end:/[{;:<>=]/,contains:[{beginKeywords:"final class struct"},e.TITLE_MODE]}]),exports:{preprocessor:l,strings:o,keywords:p}}}(e);return t.disableAutodetect=!1,t.name="C++",t.aliases=["cc","c++","h++","hpp","hh","hxx","cxx"],t}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_cpp.7e138a69.chunk.js.map