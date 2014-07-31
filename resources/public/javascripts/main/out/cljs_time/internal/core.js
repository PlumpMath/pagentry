// Compiled by ClojureScript 0.0-2227
goog.provide('cljs_time.internal.core');
goog.require('cljs.core');
cljs_time.internal.core.leap_year_QMARK_ = (function leap_year_QMARK_(y){if((cljs.core.mod.call(null,y,400) === 0))
{return true;
} else
{if((cljs.core.mod.call(null,y,100) === 0))
{return false;
} else
{if((cljs.core.mod.call(null,y,4) === 0))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}
}
});
cljs_time.internal.core.days_in_month = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [31,28,31,30,31,30,31,31,30,31,30,31], null);
cljs_time.internal.core.year_corrected_dim = (function year_corrected_dim(year,month){var G__27261 = cljs_time.internal.core.days_in_month.call(null,((cljs.core._EQ_.call(null,month,1))?11:(month - 1)));var G__27261__$1 = (((cljs_time.internal.core.leap_year_QMARK_.call(null,year)) && (cljs.core._EQ_.call(null,month,2)))?(G__27261 + 1):G__27261);return G__27261__$1;
});
cljs_time.internal.core.valid_date_QMARK_ = (function valid_date_QMARK_(p__27262){var map__27264 = p__27262;var map__27264__$1 = ((cljs.core.seq_QMARK_.call(null,map__27264))?cljs.core.apply.call(null,cljs.core.hash_map,map__27264):map__27264);var d = map__27264__$1;var millis = cljs.core.get.call(null,map__27264__$1,new cljs.core.Keyword(null,"millis","millis",4234775992));var seconds = cljs.core.get.call(null,map__27264__$1,new cljs.core.Keyword(null,"seconds","seconds",2984001009));var minutes = cljs.core.get.call(null,map__27264__$1,new cljs.core.Keyword(null,"minutes","minutes",2078806097));var hours = cljs.core.get.call(null,map__27264__$1,new cljs.core.Keyword(null,"hours","hours",1113373313));var days = cljs.core.get.call(null,map__27264__$1,new cljs.core.Keyword(null,"days","days",1016980425));var months = cljs.core.get.call(null,map__27264__$1,new cljs.core.Keyword(null,"months","months",4240384357));var years = cljs.core.get.call(null,map__27264__$1,new cljs.core.Keyword(null,"years","years",1128756040));var months__$1 = (months + 1);var _GT__LT_ = ((function (months__$1,map__27264,map__27264__$1,d,millis,seconds,minutes,hours,days,months,years){
return (function _GT__LT_(a,b,x){return ((x >= a)) && ((x <= b));
});})(months__$1,map__27264,map__27264__$1,d,millis,seconds,minutes,hours,days,months,years))
;
if(cljs.core.truth_((function (){var and__11114__auto__ = years;if(cljs.core.truth_(and__11114__auto__))
{return (_GT__LT_.call(null,1,12,months__$1)) && (_GT__LT_.call(null,1,cljs_time.internal.core.year_corrected_dim.call(null,years,months__$1),days)) && (_GT__LT_.call(null,0,23,hours)) && (_GT__LT_.call(null,0,59,minutes)) && (_GT__LT_.call(null,0,60,seconds)) && (_GT__LT_.call(null,0,999,millis));
} else
{return and__11114__auto__;
}
})()))
{return d;
} else
{throw cljs.core.ex_info.call(null,"Date is not valid",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"invalid-date","invalid-date",1494463798),new cljs.core.Keyword(null,"date","date",1016980256),d], null));
}
});
cljs_time.internal.core.index_of = (function index_of(coll,x){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__27266_SHARP_,p2__27265_SHARP_){if(cljs.core._EQ_.call(null,p2__27265_SHARP_,x))
{return p1__27266_SHARP_;
} else
{return null;
}
}),coll));
});

//# sourceMappingURL=core.js.map