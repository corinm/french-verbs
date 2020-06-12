(this["webpackJsonpfrench-verbs"]=this["webpackJsonpfrench-verbs"]||[]).push([[0],{193:function(e,n,t){e.exports=t(330)},330:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(45),c=t.n(o),l=(t(198),t(57)),s=t(60),i=t(37),u=t(15),h=t(346),m=t(347),f=t(344),g=function(){var e=Object(u.f)();return a.a.createElement(f.a,{pointing:!0},a.a.createElement(i.b,{to:"/french-verbs/"},a.a.createElement(f.a.Item,{name:"Test me",active:"/french-verbs/"===e.pathname})),a.a.createElement(i.b,{to:"/french-verbs/history"},a.a.createElement(f.a.Item,{name:"Answer history",active:"/french-verbs/history"===e.pathname})),a.a.createElement(i.b,{to:"/french-verbs/list"},a.a.createElement(f.a.Item,{name:"List of verbs",active:"/french-verbs/list"===e.pathname})))},v=t(340),b=t(339),d=t(68),E=function(e){var n=e.hasSubmittedAnswer,t=e.isCorrect,r=e.answer;return n?t?a.a.createElement(d.a,{pointing:"left",color:"green"},"\u2705"):a.a.createElement(d.a,{pointing:"left",color:"red"},"\u2573 ".concat(r)):null},P=t(345),j=function(e){var n=e.correct,t=e.total;return 0===t?null:a.a.createElement(P.a,null,a.a.createElement(P.a.Value,null,n," / ",t),a.a.createElement(P.a.Label,null,"Correct"))},w=function(e){var n=e.setGuess,t=e.onSubmit,r=e.question,o=e.answer,c=e.guess,l=e.hasSubmittedAnswer,s=e.isCorrect,i=e.total,u=e.correctCount;return a.a.createElement("div",null,a.a.createElement(h.a,{as:"h1"},r),a.a.createElement(v.a.Field,{inline:!0},a.a.createElement(b.a,{placeholder:"Answer",value:c,onChange:l?function(){}:function(e){return n(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&t()}}),a.a.createElement(E,{hasSubmittedAnswer:l,isCorrect:s,answer:o})),a.a.createElement(j,{correct:u,total:i}))},S=function(){return a.a.createElement("span",null,"Nothing to display, try ",a.a.createElement(i.b,{to:"/"},"answering some questions!"))},O=t(342),p=function(e){var n=e.answerHistory;return a.a.createElement(O.a,null,n.map((function(e,n){return a.a.createElement(O.a.Item,{key:n},a.a.createElement(O.a.Icon,{name:e.wasCorrect?"check":"times"}),a.a.createElement(O.a.Content,null,e.question))})))},y=t(343),k=t(22),C=function(e){return Math.floor(Math.random()*(e-0+1)+0)},q=["infinitive","firstPersonSingular","secondPersonSingular","thirdPersonSingular","firstPersonPlural","secondPersonPlural","thirdPersonPlural"],H={secondPersonSingular:"tu ",thirdPersonSingular:"il/elle ",firstPersonPlural:"nous ",secondPersonPlural:"vous ",thirdPersonPlural:"ils/elles "},L={firstPersonSingular:"I ",secondPersonSingular:"you ",thirdPersonSingular:"he/she ",firstPersonPlural:"we ",secondPersonPlural:"you (p) ",thirdPersonPlural:"they "},I=function(e,n,t){return"french"===n?function(e,n){return"firstPersonSingular"===e?n?"j'":"je ":H[e]}(e,t)||"":function(e){return L[e]}(e)||""},R=function(e,n){return e.score>n.score?1:e.score<n.score?-1:0},A=function(e){var n=e.verbs,t=e.questionRankings;return a.a.createElement(y.a,{basic:"very",celled:!0,collapsing:!0},a.a.createElement(y.a.Header,null,a.a.createElement(y.a.Row,null,a.a.createElement(y.a.HeaderCell,null,"Verb/Conjugation/Language"),a.a.createElement(y.a.HeaderCell,null,"Ranking (Higher = better)"))),a.a.createElement(y.a.Body,null,function(e){return Object.entries(e).map((function(e){var n=Object(k.a)(e,2),t=n[0],r=n[1];return{hash:t,meta:r.meta,score:r.score}}))}(t).sort(R).map((function(e,t){return a.a.createElement(y.a.Row,{key:t},a.a.createElement(y.a.Cell,null,function(e,n){var t=e[n.verbIndex][n.conjugation],r=I(n.conjugation,n.questionLanguage,!!t.concatenate),a=t[n.questionLanguage];return"".concat(r).concat(a)}(n,e.meta)),a.a.createElement(y.a.Cell,null,e.score))}))))},x=function(e){var n=e.answerHistory,t=e.questionRankings,r=e.verbs;return 0===n.length?a.a.createElement(S,null):a.a.createElement("div",null,a.a.createElement(A,{verbs:r,questionRankings:t}),a.a.createElement(p,{answerHistory:n}))};function G(){var e=Object(l.a)(["\n  color: red;\n"]);return G=function(){return e},e}function z(){var e=Object(l.a)(["\n  color: grey;\n"]);return z=function(){return e},e}function W(){var e=Object(l.a)(["\n  margin-bottom: 10px;\n"]);return W=function(){return e},e}var B=s.a.div(W()),M=s.a.span(z()),F=s.a.span(G()),J=function(e){var n=e.pronoun,t=e.verb;return a.a.createElement("div",null,a.a.createElement(M,null,n),a.a.createElement(F,null,t))},Q=function(e){var n=e.infinitive,t=e.firstPersonSingular,r=e.secondPersonSingular,o=e.thirdPersonSingular,c=e.firstPersonPlural,l=e.secondPersonPlural,s=e.thirdPersonPlural;return a.a.createElement(B,null,a.a.createElement(m.a.Group,null,a.a.createElement(m.a,null,a.a.createElement(h.a,{as:"h2"},n.french)),a.a.createElement(m.a.Group,{horizontal:!0},a.a.createElement(m.a,null,a.a.createElement(J,{pronoun:t.concatenate?"j'":"je ",verb:t.french}),a.a.createElement(J,{pronoun:"tu ",verb:r.french}),a.a.createElement(J,{pronoun:"il/elle ",verb:o.french})),a.a.createElement(m.a,null,a.a.createElement(J,{pronoun:"nous ",verb:c.french}),a.a.createElement(J,{pronoun:"vous ",verb:l.french}),a.a.createElement(J,{pronoun:"ils/elles ",verb:s.french})))))},V=function(e){var n=e.verbs;return a.a.createElement("div",null,n.map((function(e,n){return a.a.createElement(Q,Object.assign({key:n},e))})))},K=t(182),N=t(67),T=t(61),$={verbIndex:0,conjugation:"",questionLanguage:"",answerLanguage:""},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(T.a)({},$),t=Object(r.useState)([]),a=Object(k.a)(t,2),o=a[0],c=a[1],l=Object(r.useState)({}),s=Object(k.a)(l,2),i=s[0],u=s[1],h=function(e,n){var t="".concat(e.questionLanguage,"-").concat(e.verbIndex,"-").concat(e.conjugation),r=n?1:-1;if(void 0!==i[t]){var a=i[t].score+r;u(Object(T.a)(Object(T.a)({},i),{},Object(N.a)({},t,{meta:e,score:a})))}else u(Object(T.a)(Object(T.a)({},i),{},Object(N.a)({},t,{meta:e,score:r})))},m=function(t){c([].concat(Object(K.a)(o),[{question:e,meta:n,wasCorrect:t}])),h(n,t)};return{answerHistory:o,questionRankings:i,recordOutcome:m}},U=function(e){var n=Object(r.useState)(),t=Object(k.a)(n,2),a=t[0],o=t[1],c=Object(r.useState)(""),l=Object(k.a)(c,2),s=l[0],i=l[1],u=Object(r.useState)(),h=Object(k.a)(u,2),m=h[0],f=h[1],g=D(a,m),v=g.answerHistory,b=g.questionRankings,d=g.recordOutcome,E=function(){var n=function(e){return C(e.length-1)}(e),t=e[n],r=q[C(q.length-1)],a=t[r],c=0===C(1)?["french","english"]:["english","french"],l=Object(k.a)(c,2),s=l[0],u=l[1],h=I(r,s,a.concatenate),m=I(r,u,a.concatenate),g=e[n][r][s],v=e[n][r][u],b="".concat(h).concat(g),d="".concat(m).concat(v);o(b),i(d),f({verbIndex:n,conjugation:r,questionLanguage:s,answerLanguage:u})};return a||E(),{question:a,answer:s,newQuestion:E,recordOutcome:d,answerHistory:v,questionRankings:b}},X=function(){var e=Object(r.useState)(0),n=Object(k.a)(e,2),t=n[0],a=n[1],o=Object(r.useState)(0),c=Object(k.a)(o,2),l=c[0],s=c[1];return{correctCount:t,incrementCorrect:function(){return a(t+1)},wrongCount:l,incrementWrong:function(){return s(l+1)},total:t+l}},Y=function(e,n,t,a,o){var c=Object(r.useState)(""),l=Object(k.a)(c,2),s=l[0],i=l[1],u=Object(r.useState)(!1),h=Object(k.a)(u,2),m=h[0],f=h[1],g=Object(r.useState)(!1),v=Object(k.a)(g,2),b=v[0],d=v[1];return{guess:s,setGuess:i,hasSubmittedAnswer:m,isCorrect:b,onSubmit:function(){m?(i(""),f(!1),a()):""!==s&&(f(!0),!function(e,n){var t=n.replace(" (p) "," ");return e.toLowerCase()===t.toLowerCase()}(s,e)?(d(!1),o(!1),t()):(d(!0),o(!0),n()))}}},Z=[{infinitive:{french:"aimer",english:"to like"},firstPersonSingular:{french:"aime",english:"like",concatenate:!0},secondPersonSingular:{french:"aimes",english:"like"},thirdPersonSingular:{french:"aime",english:"likes"},firstPersonPlural:{french:"aimons",english:"like"},secondPersonPlural:{french:"aimez",english:"like"},thirdPersonPlural:{french:"aiment",english:"like"}},{infinitive:{french:"avoir",english:"to have"},firstPersonSingular:{french:"ai",english:"have",concatenate:!0},secondPersonSingular:{french:"as",english:"have"},thirdPersonSingular:{french:"a",english:"has"},firstPersonPlural:{french:"avons",english:"have"},secondPersonPlural:{french:"avez",english:"have"},thirdPersonPlural:{french:"ont",english:"have"}},{infinitive:{french:"aller",english:"to go"},firstPersonSingular:{french:"vais",english:"go"},secondPersonSingular:{french:"vas",english:"go"},thirdPersonSingular:{french:"va",english:"goes"},firstPersonPlural:{french:"allons",english:"go"},secondPersonPlural:{french:"allez",english:"go"},thirdPersonPlural:{french:"vont",english:"go"}}];function _(){var e=Object(l.a)(["\n  * {\n    font-family: Arial;\n  }\n"]);return _=function(){return e},e}var ee=s.a.div(_()),ne=function(){var e=X(),n=U(Z),t=Y(n.answer,e.incrementCorrect,e.incrementWrong,n.newQuestion,n.recordOutcome);return a.a.createElement(ee,null,a.a.createElement(h.a,{as:"h1"},"French verbs"),a.a.createElement(i.a,null,a.a.createElement(g,null),a.a.createElement(m.a,null,a.a.createElement(u.c,null,a.a.createElement(u.a,{exact:!0,path:"/french-verbs/",render:function(){return a.a.createElement(w,{correctCount:e.correctCount,total:e.total,question:n.question,answer:n.answer,guess:t.guess,setGuess:t.setGuess,onSubmit:t.onSubmit,hasSubmittedAnswer:t.hasSubmittedAnswer,isCorrect:t.isCorrect})}}),a.a.createElement(u.a,{path:"/french-verbs/history",render:function(){return a.a.createElement(x,{answerHistory:n.answerHistory,questionRankings:n.questionRankings,verbs:Z})}}),a.a.createElement(u.a,{path:"/french-verbs/list",render:function(){return a.a.createElement(V,{verbs:Z})}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[193,1,2]]]);
//# sourceMappingURL=main.10e4912a.chunk.js.map