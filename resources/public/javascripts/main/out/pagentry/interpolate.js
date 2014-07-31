// Compiled by ClojureScript 0.0-2227
goog.provide('pagentry.interpolate');
goog.require('cljs.core');
pagentry.interpolate.IInterpolate = (function (){var obj21728 = {};return obj21728;
})();
pagentry.interpolate.interpolate = (function interpolate(this$,target){if((function (){var and__11114__auto__ = this$;if(and__11114__auto__)
{return this$.pagentry$interpolate$IInterpolate$interpolate$arity$2;
} else
{return and__11114__auto__;
}
})())
{return this$.pagentry$interpolate$IInterpolate$interpolate$arity$2(this$,target);
} else
{var x__11753__auto__ = (((this$ == null))?null:this$);return (function (){var or__11126__auto__ = (pagentry.interpolate.interpolate[goog.typeOf(x__11753__auto__)]);if(or__11126__auto__)
{return or__11126__auto__;
} else
{var or__11126__auto____$1 = (pagentry.interpolate.interpolate["_"]);if(or__11126__auto____$1)
{return or__11126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInterpolate.interpolate",this$);
}
}
})().call(null,this$,target);
}
});
cljs.core.PersistentArrayMap.prototype.pagentry$interpolate$IInterpolate$ = true;
cljs.core.PersistentArrayMap.prototype.pagentry$interpolate$IInterpolate$interpolate$arity$2 = (function (this$,target){var this$__$1 = this;return ((function (this$__$1){
return (function (t){return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (ret,k,v){var prev = (function (){var or__11126__auto__ = cljs.core.get.call(null,ret,k);if(cljs.core.truth_(or__11126__auto__))
{return or__11126__auto__;
} else
{return v;
}
})();return cljs.core.merge.call(null,ret,cljs.core.PersistentHashMap.fromArrays.call(null,[k],[pagentry.interpolate.interpolate.call(null,prev,v).call(null,t)]));
});})(this$__$1))
,this$__$1,target);
});
;})(this$__$1))
});
cljs.core.List.prototype.pagentry$interpolate$IInterpolate$ = true;
cljs.core.List.prototype.pagentry$interpolate$IInterpolate$interpolate$arity$2 = (function (this$,target){var this$__$1 = this;return ((function (this$__$1){
return (function (t){return cljs.core.map.call(null,cljs.core.comp.call(null,((function (this$__$1){
return (function (p1__21730_SHARP_){return p1__21730_SHARP_.call(null,t);
});})(this$__$1))
,pagentry.interpolate.interpolate),this$__$1,target);
});
;})(this$__$1))
});
cljs.core.PersistentVector.prototype.pagentry$interpolate$IInterpolate$ = true;
cljs.core.PersistentVector.prototype.pagentry$interpolate$IInterpolate$interpolate$arity$2 = (function (this$,target){var this$__$1 = this;return ((function (this$__$1){
return (function (t){return cljs.core.mapv.call(null,cljs.core.comp.call(null,((function (this$__$1){
return (function (p1__21729_SHARP_){return p1__21729_SHARP_.call(null,t);
});})(this$__$1))
,pagentry.interpolate.interpolate),this$__$1,target);
});
;})(this$__$1))
});
(pagentry.interpolate.IInterpolate["number"] = true);
(pagentry.interpolate.interpolate["number"] = (function (this$,target){return (function (t){return (this$ + (t * (target - this$)));
});
}));

//# sourceMappingURL=interpolate.js.map