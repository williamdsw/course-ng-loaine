function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"5QeE":function(t,e,n){"use strict";n.r(e);var r=n("ofXK"),i=n("3Pt+"),o=n("tyNb"),s=n("tk/3"),c=n("lJxs"),a=n("pLZG"),u=n("7o/Q"),l=n("D0XW"),b=function(){function t(e,n){_classCallCheck(this,t),this.dueTime=e,this.scheduler=n}return _createClass(t,[{key:"call",value:function(t,e){return e.subscribe(new h(t,this.dueTime,this.scheduler))}}]),t}(),h=function(t){function e(t,n,r){var i;return _classCallCheck(this,e),(i=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t))).dueTime=n,i.scheduler=r,i.debouncedSubscription=null,i.lastValue=null,i.hasValue=!1,i}return _inherits(e,t),_createClass(e,[{key:"_next",value:function(t){this.clearDebounce(),this.lastValue=t,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(f,this.dueTime,this))}},{key:"_complete",value:function(){this.debouncedNext(),this.destination.complete()}},{key:"debouncedNext",value:function(){if(this.clearDebounce(),this.hasValue){var t=this.lastValue;this.lastValue=null,this.hasValue=!1,this.destination.next(t)}}},{key:"clearDebounce",value:function(){var t=this.debouncedSubscription;null!==t&&(this.remove(t),t.unsubscribe(),this.debouncedSubscription=null)}}]),e}(u.a);function f(t){t.debouncedNext()}var p=function(){function t(e,n){_classCallCheck(this,t),this.compare=e,this.keySelector=n}return _createClass(t,[{key:"call",value:function(t,e){return e.subscribe(new d(t,this.compare,this.keySelector))}}]),t}(),d=function(t){function e(t,n,r){var i;return _classCallCheck(this,e),(i=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t))).keySelector=r,i.hasKey=!1,"function"==typeof n&&(i.compare=n),i}return _inherits(e,t),_createClass(e,[{key:"compare",value:function(t,e){return t===e}},{key:"_next",value:function(t){var e;try{var n=this.keySelector;e=n?n(t):t}catch(i){return this.destination.error(i)}var r=!1;if(this.hasKey)try{r=(0,this.compare)(this.key,e)}catch(i){return this.destination.error(i)}else this.hasKey=!0;r||(this.key=e,this.destination.next(t))}}]),e}(u.a),y=n("eIep"),_=n("vkgz"),O=n("fXoL");function v(t,e){if(1&t&&(O.Ob(0,"tr"),O.Ob(1,"td"),O.pc(2),O.Nb(),O.Ob(3,"td"),O.pc(4),O.Nb(),O.Nb()),2&t){var n=e.$implicit;O.zb(2),O.qc(" ",n.name," "),O.zb(2),O.qc(" ",n.version," ")}}var C,m,g=[{path:"",component:(C=function(){function t(e){_classCallCheck(this,t),this.httpClient=e,this.queryField=new i.c,this.SEARCH_URL="https://api.cdnjs.com/libraries",this.total=0,this.FIELDS=["name","description","version","homepage"]}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.results$=this.queryField.valueChanges.pipe(Object(c.a)((function(t){return t.trim()})),Object(a.a)((function(t){return t.length>1})),function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.a;return function(n){return n.lift(new b(t,e))}}(200),(function(t){return t.lift(new p(void 0,void 0))}),Object(y.a)((function(e){return t.httpClient.get(t.SEARCH_URL,{params:{search:e,fields:t.FIELDS.join(",")}})})),Object(_.a)((function(e){return t.total=e.total})),Object(c.a)((function(t){return t.results})))}},{key:"onSearch",value:function(){var t=this,e=this.queryField.value;if(e&&""!==(e=e.trim())){var n=new s.d;n=(n=n.set("search",e)).set("fields",this.FIELDS.join(",")),this.results$=this.httpClient.get(this.SEARCH_URL,{params:n}).pipe(Object(_.a)((function(e){return t.total=e.total})),Object(c.a)((function(t){return t.results})))}}}]),t}(),C.\u0275fac=function(t){return new(t||C)(O.Lb(s.a))},C.\u0275cmp=O.Fb({type:C,selectors:[["app-lib-search"]],decls:21,vars:5,consts:[[1,"container","search-table"],[1,"search-box"],[1,"row"],[1,"col-md-9"],["type","text","id","myInput","placeholder","Pesquisar libs",1,"form-control",3,"formControl"],[1,"col-auto"],["type","button",1,"btn","btn-lg","btn-success",3,"click"],[1,"search-list"],["id","myTable",1,"table"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(O.Ob(0,"div",0),O.Ob(1,"div",1),O.Ob(2,"div",2),O.Ob(3,"div",3),O.Mb(4,"input",4),O.Nb(),O.Ob(5,"div",5),O.Ob(6,"button",6),O.Wb("click",(function(t){return e.onSearch()})),O.pc(7," Pesquisar "),O.Nb(),O.Nb(),O.Nb(),O.Nb(),O.Ob(8,"div",7),O.Ob(9,"h3"),O.pc(10),O.Nb(),O.Ob(11,"table",8),O.Ob(12,"thead"),O.Ob(13,"tr"),O.Ob(14,"th"),O.pc(15," Nome "),O.Nb(),O.Ob(16,"th"),O.pc(17," Vers\xe3o "),O.Nb(),O.Nb(),O.Nb(),O.Ob(18,"tbody"),O.nc(19,v,5,2,"tr",9),O.Zb(20,"async"),O.Nb(),O.Nb(),O.Nb(),O.Nb()),2&t&&(O.zb(4),O.dc("formControl",e.queryField),O.zb(6),O.qc(" ",e.total," Bibliotecas Encontradas "),O.zb(9),O.dc("ngForOf",O.ac(20,3,e.results$)))},directives:[i.a,i.h,i.d,r.j],pipes:[r.b],styles:[".search-table[_ngcontent-%COMP%]{padding:10%;margin-top:-6%}.search-box[_ngcontent-%COMP%]{background:#c1c1c1;border:1px solid #ababab;padding:3%}.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{box-shadow:none;border:2px solid #eee}.search-list[_ngcontent-%COMP%]{background:#fff;border:1px solid #ababab;border-top:none}.search-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{background:#eee;padding:3%;margin-bottom:0}"]}),C)}],k=((m=function t(){_classCallCheck(this,t)}).\u0275mod=O.Jb({type:m}),m.\u0275inj=O.Ib({factory:function(t){return new(t||m)},imports:[[o.f.forChild(g)],o.f]}),m);n.d(e,"ReactiveSearchModule",(function(){return P}));var w,P=((w=function t(){_classCallCheck(this,t)}).\u0275mod=O.Jb({type:w}),w.\u0275inj=O.Ib({factory:function(t){return new(t||w)},imports:[[r.c,k,i.j,i.g]]}),w)}}]);