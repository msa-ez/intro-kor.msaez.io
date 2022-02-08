(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{190:function(e,t,a){"use strict";var n=a(5),o=a(148);n({target:"String",proto:!0,forced:a(149)("anchor")},{anchor:function(e){return o(this,"a","name",e)}})},191:function(e,t,a){
/*!
 * Fuse.js v3.4.6 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
e.exports=function(e){var t={};function a(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=1)}([function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,a){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=a(2),h=a(8),c=a(0),i=function(){function e(t,a){var n=a.location,o=void 0===n?0:n,r=a.distance,c=void 0===r?100:r,i=a.threshold,l=void 0===i?.6:i,d=a.maxPatternLength,u=void 0===d?32:d,s=a.caseSensitive,p=void 0!==s&&s,v=a.tokenSeparator,f=void 0===v?/ +/g:v,g=a.findAllMatches,y=void 0!==g&&g,m=a.minMatchCharLength,b=void 0===m?1:m,k=a.id,x=void 0===k?null:k,S=a.keys,C=void 0===S?[]:S,w=a.shouldSort,_=void 0===w||w,D=a.getFn,M=void 0===D?h:D,I=a.sortFn,A=void 0===I?function(e,t){return e.score-t.score}:I,P=a.tokenize,E=void 0!==P&&P,L=a.matchAllTokens,O=void 0!==L&&L,T=a.includeMatches,j=void 0!==T&&T,q=a.includeScore,F=void 0!==q&&q,z=a.verbose,B=void 0!==z&&z;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:c,threshold:l,maxPatternLength:u,isCaseSensitive:p,tokenSeparator:f,findAllMatches:y,minMatchCharLength:b,id:x,keys:C,includeMatches:j,includeScore:F,shouldSort:_,getFn:M,sortFn:A,verbose:B,tokenize:E,matchAllTokens:O},this.setCollection(t)}var t,a;return t=e,(a=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var a=this._prepareSearchers(e),n=a.tokenSearchers,o=a.fullSearcher,r=this._search(n,o),h=r.weights,c=r.results;return this._computeScore(h,c),this.options.shouldSort&&this._sort(c),t.limit&&"number"==typeof t.limit&&(c=c.slice(0,t.limit)),this._format(c)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var a=e.split(this.options.tokenSeparator),n=0,o=a.length;n<o;n+=1)t.push(new r(a[n],this.options));return{tokenSearchers:t,fullSearcher:new r(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=this.list,n={},o=[];if("string"==typeof a[0]){for(var r=0,h=a.length;r<h;r+=1)this._analyze({key:"",value:a[r],record:r,index:r},{resultMap:n,results:o,tokenSearchers:e,fullSearcher:t});return{weights:null,results:o}}for(var c={},i=0,l=a.length;i<l;i+=1)for(var d=a[i],u=0,s=this.options.keys.length;u<s;u+=1){var p=this.options.keys[u];if("string"!=typeof p){if(c[p.name]={weight:1-p.weight||1},p.weight<=0||p.weight>1)throw new Error("Key weight has to be > 0 and <= 1");p=p.name}else c[p]={weight:1};this._analyze({key:p,value:this.options.getFn(d,p),record:d,index:i},{resultMap:n,results:o,tokenSearchers:e,fullSearcher:t})}return{weights:c,results:o}}},{key:"_analyze",value:function(e,t){var a=e.key,n=e.arrayIndex,o=void 0===n?-1:n,r=e.value,h=e.record,i=e.index,l=t.tokenSearchers,d=void 0===l?[]:l,u=t.fullSearcher,s=void 0===u?[]:u,p=t.resultMap,v=void 0===p?{}:p,f=t.results,g=void 0===f?[]:f;if(null!=r){var y=!1,m=-1,b=0;if("string"==typeof r){this._log("\nKey: ".concat(""===a?"-":a));var k=s.search(r);if(this._log('Full text: "'.concat(r,'", score: ').concat(k.score)),this.options.tokenize){for(var x=r.split(this.options.tokenSeparator),S=[],C=0;C<d.length;C+=1){var w=d[C];this._log('\nPattern: "'.concat(w.pattern,'"'));for(var _=!1,D=0;D<x.length;D+=1){var M=x[D],I=w.search(M),A={};I.isMatch?(A[M]=I.score,y=!0,_=!0,S.push(I.score)):(A[M]=1,this.options.matchAllTokens||S.push(1)),this._log('Token: "'.concat(M,'", score: ').concat(A[M]))}_&&(b+=1)}m=S[0];for(var P=S.length,E=1;E<P;E+=1)m+=S[E];m/=P,this._log("Token score average:",m)}var L=k.score;m>-1&&(L=(L+m)/2),this._log("Score average:",L);var O=!this.options.tokenize||!this.options.matchAllTokens||b>=d.length;if(this._log("\nCheck Matches: ".concat(O)),(y||k.isMatch)&&O){var T=v[i];T?T.output.push({key:a,arrayIndex:o,value:r,score:L,matchedIndices:k.matchedIndices}):(v[i]={item:h,output:[{key:a,arrayIndex:o,value:r,score:L,matchedIndices:k.matchedIndices}]},g.push(v[i]))}}else if(c(r))for(var j=0,q=r.length;j<q;j+=1)this._analyze({key:a,arrayIndex:j,value:r[j],record:h,index:i},{resultMap:v,results:g,tokenSearchers:d,fullSearcher:s})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var a=0,n=t.length;a<n;a+=1){for(var o=t[a].output,r=o.length,h=1,c=1,i=0;i<r;i+=1){var l=e?e[o[i].key].weight:1,d=(1===l?o[i].score:o[i].score||.001)*l;1!==l?c=Math.min(c,d):(o[i].nScore=d,h*=d)}t[a].score=1===c?h:c,this._log(t[a])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var a=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===n(t)&&null!==t){if(-1!==a.indexOf(t))return;a.push(t)}return t}))),a=null}var o=[];this.options.includeMatches&&o.push((function(e,t){var a=e.output;t.matches=[];for(var n=0,o=a.length;n<o;n+=1){var r=a[n];if(0!==r.matchedIndices.length){var h={indices:r.matchedIndices,value:r.value};r.key&&(h.key=r.key),r.hasOwnProperty("arrayIndex")&&r.arrayIndex>-1&&(h.arrayIndex=r.arrayIndex),t.matches.push(h)}}})),this.options.includeScore&&o.push((function(e,t){t.score=e.score}));for(var r=0,h=e.length;r<h;r+=1){var c=e[r];if(this.options.id&&(c.item=this.options.getFn(c.item,this.options.id)[0]),o.length){for(var i={item:c.item},l=0,d=o.length;l<d;l+=1)o[l](c,i);t.push(i)}else t.push(c.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&o(t.prototype,a),e}();e.exports=i},function(e,t,a){function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=a(3),r=a(4),h=a(7),c=function(){function e(t,a){var n=a.location,o=void 0===n?0:n,r=a.distance,c=void 0===r?100:r,i=a.threshold,l=void 0===i?.6:i,d=a.maxPatternLength,u=void 0===d?32:d,s=a.isCaseSensitive,p=void 0!==s&&s,v=a.tokenSeparator,f=void 0===v?/ +/g:v,g=a.findAllMatches,y=void 0!==g&&g,m=a.minMatchCharLength,b=void 0===m?1:m;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:c,threshold:l,maxPatternLength:u,isCaseSensitive:p,tokenSeparator:f,findAllMatches:y,minMatchCharLength:b},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=u&&(this.patternAlphabet=h(this.pattern))}var t,a;return t=e,(a=[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,a=t.maxPatternLength,n=t.tokenSeparator;if(this.pattern.length>a)return o(e,this.pattern,n);var h=this.options,c=h.location,i=h.distance,l=h.threshold,d=h.findAllMatches,u=h.minMatchCharLength;return r(e,this.pattern,this.patternAlphabet,{location:c,distance:i,threshold:l,findAllMatches:d,minMatchCharLength:u})}}])&&n(t.prototype,a),e}();e.exports=c},function(e,t){var a=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(t.replace(a,"\\$&").replace(n,"|")),r=e.match(o),h=!!r,c=[];if(h)for(var i=0,l=r.length;i<l;i+=1){var d=r[i];c.push([e.indexOf(d),d.length-1])}return{score:h?.5:1,isMatch:h,matchedIndices:c}}},function(e,t,a){var n=a(5),o=a(6);e.exports=function(e,t,a,r){for(var h=r.location,c=void 0===h?0:h,i=r.distance,l=void 0===i?100:i,d=r.threshold,u=void 0===d?.6:d,s=r.findAllMatches,p=void 0!==s&&s,v=r.minMatchCharLength,f=void 0===v?1:v,g=c,y=e.length,m=u,b=e.indexOf(t,g),k=t.length,x=[],S=0;S<y;S+=1)x[S]=0;if(-1!==b){var C=n(t,{errors:0,currentLocation:b,expectedLocation:g,distance:l});if(m=Math.min(C,m),-1!==(b=e.lastIndexOf(t,g+k))){var w=n(t,{errors:0,currentLocation:b,expectedLocation:g,distance:l});m=Math.min(w,m)}}b=-1;for(var _=[],D=1,M=k+y,I=1<<(k<=31?k-1:30),A=0;A<k;A+=1){for(var P=0,E=M;P<E;)n(t,{errors:A,currentLocation:g+E,expectedLocation:g,distance:l})<=m?P=E:M=E,E=Math.floor((M-P)/2+P);M=E;var L=Math.max(1,g-E+1),O=p?y:Math.min(g+E,y)+k,T=Array(O+2);T[O+1]=(1<<A)-1;for(var j=O;j>=L;j-=1){var q=j-1,F=a[e.charAt(q)];if(F&&(x[q]=1),T[j]=(T[j+1]<<1|1)&F,0!==A&&(T[j]|=(_[j+1]|_[j])<<1|1|_[j+1]),T[j]&I&&(D=n(t,{errors:A,currentLocation:q,expectedLocation:g,distance:l}))<=m){if(m=D,(b=q)<=g)break;L=Math.max(1,2*g-b)}}if(n(t,{errors:A+1,currentLocation:g,expectedLocation:g,distance:l})>m)break;_=T}return{isMatch:b>=0,score:0===D?.001:D,matchedIndices:o(x,f)}}},function(e,t){e.exports=function(e,t){var a=t.errors,n=void 0===a?0:a,o=t.currentLocation,r=void 0===o?0:o,h=t.expectedLocation,c=void 0===h?0:h,i=t.distance,l=void 0===i?100:i,d=n/e.length,u=Math.abs(c-r);return l?d+u/l:u?1:d}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=[],n=-1,o=-1,r=0,h=e.length;r<h;r+=1){var c=e[r];c&&-1===n?n=r:c||-1===n||((o=r-1)-n+1>=t&&a.push([n,o]),n=-1)}return e[r-1]&&r-n>=t&&a.push([n,r-1]),a}},function(e,t){e.exports=function(e){for(var t={},a=e.length,n=0;n<a;n+=1)t[e.charAt(n)]=0;for(var o=0;o<a;o+=1)t[e.charAt(o)]|=1<<a-o-1;return t}},function(e,t,a){var n=a(0);e.exports=function(e,t){return function e(t,a,o){if(a){var r=a.indexOf("."),h=a,c=null;-1!==r&&(h=a.slice(0,r),c=a.slice(r+1));var i=t[h];if(null!=i)if(c||"string"!=typeof i&&"number"!=typeof i)if(n(i))for(var l=0,d=i.length;l<d;l+=1)e(i[l],c,o);else c&&e(i,c,o);else o.push(i.toString())}else o.push(t);return o}(e,t,[])}}])},200:function(e,t,a){"use strict";a.r(t);a(41),a(61),a(85),a(33),a(144),a(190),a(42);var n=a(15),o=a(191),r=a.n(o),h=a(21),c={components:{ChevronRightIcon:h.d,SearchIcon:h.j},data:function(){return{query:"",focusIndex:-1,focused:!1}},computed:{results:function(){return new r.a(this.headings,{keys:["value"],threshold:.25}).search(this.query).slice(0,15)},headings:function(){var e=[];return this.$static.allMarkdownPage.edges.map((function(e){return e.node})).forEach((function(t){t.headings.forEach((function(a){e.push(Object(n.a)({},a,{path:t.path,title:t.title}))}))})),e},showResult:function(){return this.focused&&this.query.length>0}},methods:{increment:function(){this.focusIndex<this.results.length-1&&this.focusIndex++},decrement:function(){this.focusIndex>=0&&this.focusIndex--},go:function(){var e;0!==this.results.length&&(e=-1===this.focusIndex?this.results[0]:this.results[this.focusIndex],this.$router.push(e.path+e.anchor),this.$refs.input.blur(),this.query="")}}},i=a(10),l=a(1),d=l.a.config.optionMergeStrategies.computed,u={allMarkdownPage:{edges:[{node:{id:"8068a5512c320b946065bd53f3059364",path:"/tool/event-storming-tool/",title:"이벤트 스토밍",headings:[{depth:1,value:"이벤트 스토밍",anchor:"#이벤트-스토밍"},{depth:2,value:"서비스 접속",anchor:"#서비스-접속"},{depth:2,value:"UI 소개",anchor:"#ui-소개"},{depth:3,value:"·\tEvent Sticker",anchor:"#·-event-sticker"},{depth:3,value:"·\tPolicy Sticker",anchor:"#·-policy-sticker"},{depth:3,value:"·\tCommand Sticker",anchor:"#·-command-sticker"},{depth:3,value:"·\tAggregate Sticker",anchor:"#·-aggregate-sticker"},{depth:3,value:"·\tBounded Context Sticker",anchor:"#·-bounded-context-sticker"},{depth:3,value:"·\tRelation",anchor:"#·-relation"},{depth:3,value:"·\tCode Preview",anchor:"#·-code-preview"},{depth:3,value:"·\tDownload Archive",anchor:"#·-download-archive"},{depth:2,value:"빌드",anchor:"#빌드"},{depth:3,value:"·\t다운로드 파일 구조 설명",anchor:"#·-다운로드-파일-구조-설명"},{depth:3,value:"·\t실행",anchor:"#·-실행"},{depth:3,value:"·\t클라우드 배포",anchor:"#·-클라우드-배포"},{depth:3,value:"·\tGit 연동",anchor:"#·-git-연동"},{depth:3,value:"·\tGCB Trigger 생성",anchor:"#·-gcb-trigger-생성"},{depth:3,value:"·\t쿠버네티스 배포",anchor:"#·-쿠버네티스-배포"},{depth:3,value:"·\t배포 실패시 해결방법",anchor:"#·-배포-실패시-해결방법"}]}},{node:{id:"f5496baae95145d628ea189af81b1cba",path:"/tool/infrastructure-modeling/",title:"인프라 모델링 (쿠버네티스)",headings:[{depth:1,value:"인프라 모델링 (쿠버네티스)",anchor:"#인프라-모델링-쿠버네티스"},{depth:2,value:"Getting started",anchor:"#getting-started"},{depth:2,value:"Quick Tour",anchor:"#quick-tour"},{depth:2,value:"Tutorial",anchor:"#tutorial"},{depth:3,value:"·\tPod",anchor:"#·-pod"},{depth:3,value:"·\tService",anchor:"#·-service"},{depth:3,value:"·\tIngress",anchor:"#·-ingress"}]}},{node:{id:"f1b6f9c8f80642beb6cf5d87bae5acb2",path:"/tool/cloud-ide-tool/",title:"클라우드 IDE",headings:[{depth:1,value:"클라우드 IDE",anchor:"#클라우드-ide"},{depth:2,value:"화면 구성 및 메뉴",anchor:"#화면-구성-및-메뉴"},{depth:3,value:"File",anchor:"#file"},{depth:3,value:"Edit",anchor:"#edit"},{depth:3,value:"Selection",anchor:"#selection"},{depth:3,value:"View",anchor:"#view"},{depth:3,value:"Go",anchor:"#go"},{depth:3,value:"Labs",anchor:"#labs"},{depth:2,value:"아이콘",anchor:"#아이콘"},{depth:2,value:"클라우드 IDE 실습 예제",anchor:"#클라우드-ide-실습-예제"},{depth:3,value:"이벤트 스토밍",anchor:"#이벤트-스토밍"},{depth:3,value:"IDE사용",anchor:"#ide사용"},{depth:3,value:"서비스 실행",anchor:"#서비스-실행"}]}},{node:{id:"31d31548677bf56b9f54b54f73129f77",path:"/tool/development-practice/",title:"강의 개발 및 실습 환경",headings:[{depth:1,value:"강의 개발 및 실습 환경",anchor:"#강의-개발-및-실습-환경"},{depth:2,value:"강의 개발",anchor:"#강의-개발"},{depth:3,value:"· 강의 생성",anchor:"#·-강의-생성"},{depth:3,value:"· lab 생성",anchor:"#·-lab-생성"},{depth:3,value:"· lab 위치 이동 및 삭제",anchor:"#·-lab-위치-이동-및-삭제"},{depth:3,value:"· instruction 편집",anchor:"#·-instruction-편집"},{depth:3,value:"· 콘텐츠 저장",anchor:"#·-콘텐츠-저장"},{depth:3,value:"· quiz 편집",anchor:"#·-quiz-편집"},{depth:2,value:"강의 진행",anchor:"#강의-진행"},{depth:3,value:"· 조별 편성",anchor:"#·-조별-편성"},{depth:3,value:"· 채팅",anchor:"#·-채팅"},{depth:3,value:"· 오류 지원",anchor:"#·-오류-지원"},{depth:3,value:"· 결과 제출",anchor:"#·-결과-제출"},{depth:2,value:"수강생 관리",anchor:"#수강생-관리"},{depth:3,value:"· 보상 지급",anchor:"#·-보상-지급"},{depth:3,value:"· 사용료 조회",anchor:"#·-사용료-조회"},{depth:3,value:"· 쿠폰 발행 및 사용, 조회",anchor:"#·-쿠폰-발행-및-사용-조회"}]}},{node:{id:"c9e874d6515623ddf07f96c922e50aa9",path:"/example-scenario/online-lecture/",title:"인터넷 강의수강 시스템",headings:[{depth:1,value:"인터넷 강의수강 시스템",anchor:"#인터넷-강의수강-시스템"},{depth:2,value:"서비스 시나리오",anchor:"#서비스-시나리오"},{depth:2,value:"체크포인트",anchor:"#체크포인트"},{depth:2,value:"분석/설계",anchor:"#분석설계"},{depth:3,value:"· Event Storming 결과",anchor:"#·-event-storming-결과"},{depth:3,value:"· 헥사고날 아키텍처 다이어그램 도출",anchor:"#·-헥사고날-아키텍처-다이어그램-도출"},{depth:2,value:"구현",anchor:"#구현"},{depth:3,value:"· DDD 의 적용",anchor:"#·-ddd-의-적용"},{depth:3,value:"· 동기식 호출 과 Fallback 처리",anchor:"#·-동기식-호출-과-fallback-처리"},{depth:3,value:"· 비동기식 호출 / 시간적 디커플링 / 장애격리 / 최종 (Eventual) 일관성 테스트",anchor:"#·-비동기식-호출--시간적-디커플링--장애격리--최종-eventual-일관성-테스트"},{depth:2,value:"운영",anchor:"#운영"},{depth:3,value:"· CI/CD 설정",anchor:"#·-cicd-설정"},{depth:3,value:"· 동기식 호출 / 서킷 브레이킹 / 장애격리",anchor:"#·-동기식-호출--서킷-브레이킹--장애격리"},{depth:3,value:"· 무정지 재배포",anchor:"#·-무정지-재배포"}]}},{node:{id:"5727002f6d0a904a02dc2fa2794b6efe",path:"/example-scenario/animal-hospital/",title:"동물병원 진료시스템",headings:[{depth:1,value:"동물병원 진료시스템",anchor:"#동물병원-진료시스템"},{depth:2,value:"서비스 시나리오",anchor:"#서비스-시나리오"},{depth:2,value:"분석/설계",anchor:"#분석설계"},{depth:3,value:"· 헥사고날 아키텍처 다이어그램 도출",anchor:"#·-헥사고날-아키텍처-다이어그램-도출"},{depth:2,value:"구현",anchor:"#구현"},{depth:3,value:"· DDD 의 적용",anchor:"#·-ddd-의-적용"},{depth:3,value:"· 동기식 호출과 Fallback 처리",anchor:"#·-동기식-호출과-fallback-처리"},{depth:3,value:"· 클러스터 적용 후 REST API 의 테스트",anchor:"#·-클러스터-적용-후-rest-api-의-테스트"},{depth:3,value:"· 비동기식 호출과 Eventual Consistency",anchor:"#·-비동기식-호출과-eventual-consistency"},{depth:3,value:"· API 게이트웨이",anchor:"#·-api-게이트웨이"},{depth:3,value:"· Oauth 인증 적용.",anchor:"#·-oauth-인증-적용"},{depth:2,value:"운영",anchor:"#운영"},{depth:3,value:"· CI/CD 설정",anchor:"#·-cicd-설정"},{depth:3,value:"· 동기식 호출 / 서킷 브레이킹 / 장애격리",anchor:"#·-동기식-호출--서킷-브레이킹--장애격리"},{depth:3,value:"· 오토스케일 아웃",anchor:"#·-오토스케일-아웃"},{depth:3,value:"· 무정지 재배포",anchor:"#·-무정지-재배포"}]}},{node:{id:"41a09d1ae23d2ea4ebdf10487aa6aa3d",path:"/example-scenario/library-system/",title:"도서관 시스템",headings:[{depth:1,value:"도서관 시스템",anchor:"#도서관-시스템"},{depth:2,value:"구현 Repository",anchor:"#구현-repository"},{depth:2,value:"서비스 시나리오",anchor:"#서비스-시나리오"},{depth:2,value:"체크포인트",anchor:"#체크포인트"},{depth:2,value:"분석/설계",anchor:"#분석설계"},{depth:2,value:"구현",anchor:"#구현"},{depth:3,value:"· DDD 의 적용",anchor:"#·-ddd-의-적용"},{depth:3,value:"· 동기식 호출 과 비동기식",anchor:"#·-동기식-호출-과-비동기식"},{depth:2,value:"운영",anchor:"#운영"},{depth:3,value:"· CI/CD 설정",anchor:"#·-cicd-설정"},{depth:3,value:"· 오토스케일 아웃",anchor:"#·-오토스케일-아웃"},{depth:3,value:"· 무정지 재배포",anchor:"#·-무정지-재배포"}]}},{node:{id:"4b3f20a1b3a5ad2e0072c3ddb841c049",path:"/example-scenario/food-delivery/",title:"음식배달",headings:[{depth:1,value:"음식배달",anchor:"#음식배달"},{depth:2,value:"서비스 시나리오",anchor:"#서비스-시나리오"},{depth:2,value:"체크포인트",anchor:"#체크포인트"},{depth:2,value:"분석/설계",anchor:"#분석설계"},{depth:2,value:"구현",anchor:"#구현"},{depth:3,value:"· DDD 의 적용",anchor:"#·-ddd-의-적용"},{depth:3,value:"· 폴리글랏 퍼시스턴스",anchor:"#·-폴리글랏-퍼시스턴스"},{depth:3,value:"· 폴리글랏 프로그래밍",anchor:"#·-폴리글랏-프로그래밍"},{depth:3,value:"· 동기식 호출 과 Fallback 처리",anchor:"#·-동기식-호출-과-fallback-처리"},{depth:3,value:"· 비동기식 호출 / 시간적 디커플링 / 장애격리 / 최종 (Eventual) 일관성 테스트",anchor:"#·-비동기식-호출--시간적-디커플링--장애격리--최종-eventual-일관성-테스트"},{depth:2,value:"운영",anchor:"#운영"},{depth:3,value:"· CI/CD 설정",anchor:"#·-cicd-설정"},{depth:3,value:"· 동기식 호출 / 서킷 브레이킹 / 장애격리",anchor:"#·-동기식-호출--서킷-브레이킹--장애격리"},{depth:3,value:"· 오토스케일 아웃",anchor:"#·-오토스케일-아웃"},{depth:3,value:"· 무정지 재배포",anchor:"#·-무정지-재배포"},{depth:2,value:"신규 개발 조직의 추가",anchor:"#신규-개발-조직의-추가"}]}},{node:{id:"62ca8085ac028d79cee530aa8b3244cd",path:"/example-scenario/accommodation-reservation/",title:"숙소예약",headings:[{depth:1,value:"숙소예약",anchor:"#숙소예약"},{depth:2,value:"서비스 시나리오",anchor:"#서비스-시나리오"},{depth:2,value:"체크포인트",anchor:"#체크포인트"},{depth:2,value:"분석/설계",anchor:"#분석설계"},{depth:2,value:"구현",anchor:"#구현"},{depth:3,value:"· CQRS",anchor:"#·-cqrs"},{depth:3,value:"· API 게이트웨이",anchor:"#·-api-게이트웨이"},{depth:2,value:"Correlation",anchor:"#correlation"},{depth:3,value:"· 동기식 호출(Sync) 과 Fallback 처리",anchor:"#·-동기식-호출sync-과-fallback-처리"},{depth:3,value:"· 비동기식 호출 / 시간적 디커플링 / 장애격리 / 최종 (Eventual) 일관성 테스트",anchor:"#·-비동기식-호출--시간적-디커플링--장애격리--최종-eventual-일관성-테스트"},{depth:2,value:"운영",anchor:"#운영"},{depth:3,value:"· CI/CD 설정",anchor:"#·-cicd-설정"},{depth:3,value:"· 동기식 호출 / 서킷 브레이킹 / 장애격리",anchor:"#·-동기식-호출--서킷-브레이킹--장애격리"},{depth:3,value:"· 무정지 재배포",anchor:"#·-무정지-재배포"},{depth:2,value:"Self-healing (Liveness Probe)",anchor:"#self-healing-liveness-probe"},{depth:2,value:"Config Map/ Persistence Volume",anchor:"#config-map-persistence-volume"}]}},{node:{id:"4a38093d80a8b28fc80a5079bdf2561a",path:"/started/domain-driven/",title:"도메인 주도 설계 학습",headings:[{depth:1,value:"도메인 주도 설계 학습",anchor:"#도메인-주도-설계-학습"},{depth:2,value:"MSA 분석기법 – DDD(Domain Driven Design)",anchor:"#msa-분석기법--ddddomain-driven-design"},{depth:2,value:"DDD 개요",anchor:"#ddd-개요"},{depth:3,value:"·\t도메인 모델",anchor:"#·-도메인-모델"},{depth:3,value:"·\tBounded Context (한정된 문맥)",anchor:"#·-bounded-context-한정된-문맥"},{depth:3,value:"·\tUbiquitous Language (도메인 언어)",anchor:"#·-ubiquitous-language-도메인-언어"},{depth:2,value:"DDD구현을 위한 이벤트스토밍 (EventStorming)",anchor:"#ddd구현을-위한-이벤트스토밍-eventstorming"}]}},{node:{id:"9302e1a1479643731a23de1ecc9bf0ba",path:"/templates-language/springboot-java-template/",title:"Spring Boot/Java(준비중)",headings:[{depth:1,value:"Spring Boot/Java(준비중)",anchor:"#spring-bootjava준비중"}]}},{node:{id:"0b2074ab65d81707b848ac864d536ea6",path:"/started/event-storming-learning/",title:"이벤트스토밍 학습",headings:[{depth:1,value:"이벤트스토밍 학습",anchor:"#이벤트스토밍-학습"},{depth:1,value:"오프라인 이벤트스토밍(Event-Storming) 기반 MSA 개발",anchor:"#오프라인-이벤트스토밍event-storming-기반-msa-개발"},{depth:2,value:"개념",anchor:"#개념"},{depth:2,value:"수행 방법",anchor:"#수행-방법"},{depth:2,value:"스티커 유형",anchor:"#스티커-유형"},{depth:3,value:"· Event (Orange Sticker)",anchor:"#·-event-orange-sticker"},{depth:3,value:"· Policy (Lilac Sticker)",anchor:"#·-policy-lilac-sticker"},{depth:3,value:"· Command (Blue Sticker)",anchor:"#·-command-blue-sticker"},{depth:3,value:"· Actor (Yellow Sticker)",anchor:"#·-actor-yellow-sticker"},{depth:3,value:"· Aggregate (Yellow Sticker)",anchor:"#·-aggregate-yellow-sticker"},{depth:3,value:"· Bounded Context 도출",anchor:"#·-bounded-context-도출"},{depth:3,value:"· Context Mapping",anchor:"#·-context-mapping"},{depth:2,value:"Orchestration",anchor:"#orchestration"},{depth:2,value:"Choreography",anchor:"#choreography"},{depth:2,value:"마이크로서비스 구현",anchor:"#마이크로서비스-구현"},{depth:3,value:"· 이벤트스토밍 스티키 노트별 구현기술 적용",anchor:"#·-이벤트스토밍-스티키-노트별-구현기술-적용"},{depth:3,value:"· Aggregate - Yellow",anchor:"#·-aggregate---yellow"},{depth:3,value:"· Command – Sky Blue",anchor:"#·-command--sky-blue"},{depth:3,value:"· Event - Orange",anchor:"#·-event---orange"},{depth:3,value:"· Policy - Lilac",anchor:"#·-policy---lilac"},{depth:3,value:"· Bounded Context",anchor:"#·-bounded-context"}]}},{node:{id:"56cd697e019b7363e6c18e0a3faf50cd",path:"/templates-language/custom-template/",title:"커스텀 템플릿 만들기",headings:[{depth:1,value:"커스텀 템플릿 만들기",anchor:"#커스텀-템플릿-만들기"},{depth:2,value:"커스텀 템플릿 (Custom Template)",anchor:"#커스텀-템플릿-custom-template"},{depth:2,value:"개념",anchor:"#개념"},{depth:2,value:"템플릿 설명",anchor:"#템플릿-설명"},{depth:2,value:"템플릿 생성",anchor:"#템플릿-생성"},{depth:2,value:"템플릿 작성 변수",anchor:"#템플릿-작성-변수"},{depth:3,value:"· 공통 변수 (BoundedContext 제외)",anchor:"#·-공통-변수-boundedcontext-제외"},{depth:3,value:"· BoundedContext 변수",anchor:"#·-boundedcontext-변수"},{depth:3,value:"· Aggregate 변수",anchor:"#·-aggregate-변수"},{depth:3,value:"· Event 변수",anchor:"#·-event-변수"},{depth:3,value:"· Command 변수",anchor:"#·-command-변수"},{depth:3,value:"· Policy 변수",anchor:"#·-policy-변수"},{depth:3,value:"· View 변수",anchor:"#·-view-변수"},{depth:3,value:"· fieldDescriptors",anchor:"#·-fielddescriptors"},{depth:3,value:"· viewFieldDescriptors",anchor:"#·-viewfielddescriptors"}]}},{node:{id:"b98d41e3f9616d594784c2e059cf0c14",path:"/started/",title:"소개",headings:[{depth:1,value:"소개",anchor:"#소개"},{depth:2,value:"주요 Features",anchor:"#주요-features"},{depth:2,value:"도구의 배경과 목적",anchor:"#도구의-배경과-목적"},{depth:3,value:"·\tEDA(Event Driven Architecture) 기반 3세대 MSA의 유행",anchor:"#·-edaevent-driven-architecture-기반-3세대-msa의-유행"},{depth:3,value:"·\t이벤트스토밍 애자일 기법의 유행",anchor:"#·-이벤트스토밍-애자일-기법의-유행"},{depth:3,value:"·\tMSA 코드 자동 생성",anchor:"#·-msa-코드-자동-생성"},{depth:3,value:"·\tPolyglot MSA를 위한 User-defined 템플릿",anchor:"#·-polyglot-msa를-위한-user-defined-템플릿"},{depth:2,value:"도입 효과",anchor:"#도입-효과"},{depth:2,value:"실행 환경",anchor:"#실행-환경"}]}},{node:{id:"02c7486576dd93a9ef7c84a4fbdbb6ff",path:"/templates-language/python-template/",title:"Python Template 만들기 ",headings:[{depth:1,value:"Python Template 만들기",anchor:"#python-template-만들기"},{depth:2,value:"Python DDD Tutorial",anchor:"#python-ddd-tutorial"},{depth:3,value:"Model",anchor:"#model"},{depth:3,value:"Code",anchor:"#code"},{depth:3,value:"Test",anchor:"#test"},{depth:2,value:"Python 기술 Stack",anchor:"#python-기술-stack"},{depth:2,value:"Template Code 만들기에 앞서",anchor:"#template-code-만들기에-앞서"},{depth:2,value:"Python template 파일 구조",anchor:"#python-template-파일-구조"},{depth:2,value:"Model 별 Template 설명",anchor:"#model-별-template-설명"},{depth:3,value:"· Entity.py",anchor:"#·-entitypy"},{depth:3,value:"· AbstractEvent.py",anchor:"#·-abstracteventpy"},{depth:3,value:"· Event.py",anchor:"#·-eventpy"},{depth:3,value:"· PolicyHandler.py",anchor:"#·-policyhandlerpy"},{depth:3,value:"· PolicyEvent.py",anchor:"#·-policyeventpy"},{depth:3,value:"· ExternalService.py",anchor:"#·-externalservicepy"},{depth:3,value:"· ExternalEntity.py",anchor:"#·-externalentitypy"},{depth:3,value:"· Repository.py",anchor:"#·-repositorypy"},{depth:3,value:"· Controller.py",anchor:"#·-controllerpy"},{depth:3,value:"· app.py",anchor:"#·-apppy"},{depth:2,value:"Python 전용 template",anchor:"#python-전용-template"},{depth:3,value:"· DB.py",anchor:"#·-dbpy"},{depth:3,value:"· KafkaProcessor.py",anchor:"#·-kafkaprocessorpy"},{depth:3,value:"· util.py",anchor:"#·-utilpy"},{depth:3,value:"· Hateoas.py",anchor:"#·-hateoaspy"}]}},{node:{id:"1a4ec173c0caf01d8422998f3bbac041",path:"/templates-language/go-template/",title:"Go Template 만들기",headings:[{depth:1,value:"Go Template 만들기",anchor:"#go-template-만들기"},{depth:2,value:"Go DDD tutorial",anchor:"#go-ddd-tutorial"},{depth:3,value:"Model",anchor:"#model"},{depth:3,value:"Code",anchor:"#code"},{depth:3,value:"Test",anchor:"#test"},{depth:3,value:"· Event.go",anchor:"#·-eventgo"},{depth:3,value:"· PolicyHandler.go",anchor:"#·-policyhandlergo"},{depth:3,value:"· PolicyEvent.go",anchor:"#·-policyeventgo"},{depth:3,value:"· ExternalService.go",anchor:"#·-externalservicego"},{depth:3,value:"· ExternalEntity.go",anchor:"#·-externalentitygo"},{depth:3,value:"· Repository.go",anchor:"#·-repositorygo"},{depth:3,value:"· Route.go",anchor:"#·-routego"},{depth:3,value:"· main.go",anchor:"#·-maingo"},{depth:2,value:"Go 전용 Template",anchor:"#go-전용-template"},{depth:3,value:"· DB.go",anchor:"#·-dbgo"},{depth:3,value:"· KafkaProcessor.go",anchor:"#·-kafkaprocessorgo"},{depth:3,value:"· Util.go",anchor:"#·-utilgo"}]}},{node:{id:"a2ecb4086487144f927f0556c45d160e",path:"/contact/question/",title:"CONTACT",headings:[{depth:1,value:"CONTACT",anchor:"#contact"}]}}]}},s=function(e){var t=e.options;t.__staticData?t.__staticData.data=u:(t.__staticData=l.a.observable({data:u}),t.computed=d({$static:function(){return t.__staticData.data}},t.computed))},p=Object(i.a)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"relative",on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.increment(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.decrement(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(t)}]}},[a("label",{staticClass:"relative block"},[a("span",{staticClass:"sr-only"},[e._v("Search Documentation")]),a("div",{staticClass:"absolute inset-y-0 left-0 flex items-center justify-center px-3 py-2 opacity-50"},[a("SearchIcon",{staticClass:"text-ui-typo",attrs:{size:"1.25x"}})],1),a("input",{ref:"input",staticClass:"block w-full py-2 pl-10 pr-4 border-2 rounded-lg bg-ui-sidebar border-ui-sidebar focus:bg-ui-background",class:{"rounded-b-none":e.showResult},attrs:{type:"search",placeholder:"Search Documentation..."},domProps:{value:e.query},on:{focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},input:function(t){e.focusIndex=-1,e.query=t.target.value},change:function(t){e.query=t.target.value}}})]),e.showResult?a("div",{staticClass:"fixed inset-x-0 z-50 overflow-y-auto border-2 border-t-0 rounded-lg rounded-t-none shadow-lg results bg-ui-background bottom:0 sm:bottom-auto sm:absolute border-ui-sidebar",staticStyle:{"max-height":"calc(100vh - 120px)"}},[a("ul",{staticClass:"px-4 py-2 m-0"},[0===e.results.length?a("li",{staticClass:"px-2"},[e._v("\n        No results for "),a("span",{staticClass:"font-bold"},[e._v(e._s(e.query))]),e._v(".\n      ")]):e._l(e.results,(function(t,n){return a("li",{key:t.path+t.anchor,staticClass:"border-ui-sidebar",class:{"border-b":n+1!==e.results.length},on:{mouseenter:function(t){e.focusIndex=n},mousedown:e.go}},[a("g-link",{staticClass:"block p-2 -mx-2 text-base font-bold rounded-lg",class:{"bg-ui-sidebar text-ui-primary":e.focusIndex===n},attrs:{to:t.path+t.anchor}},[t.value===t.title?a("span",[e._v("\n            "+e._s(t.value)+"\n          ")]):a("span",{staticClass:"flex items-center"},[e._v("\n            "+e._s(t.title)+"\n            "),a("ChevronRightIcon",{staticClass:"mx-1",attrs:{size:"1x"}}),a("span",{staticClass:"font-normal opacity-75"},[e._v(e._s(t.value))])],1)])],1)}))],2)]):e._e()])}),[],!1,null,null,null);"function"==typeof s&&s(p);t.default=p.exports}}]);