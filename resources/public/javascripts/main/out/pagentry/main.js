// Compiled by ClojureScript 0.0-2227
goog.provide('pagentry.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om_tools.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.debug');
goog.require('cljs.reader');
goog.require('goog.dom');
goog.require('om_tools.dom');
goog.require('om.core');
goog.require('figwheel.client');
goog.require('goog.dom');
goog.require('pagentry.animation');
goog.require('om.core');
goog.require('cljs.reader');
goog.require('pagentry.animation');
goog.require('om_tools.dom');
goog.require('cljs.core.async');
goog.require('figwheel.client');
goog.require('goog.events');
goog.require('goog.debug');
cljs.core.enable_console_print_BANG_.call(null);
React.initializeTouchEvents(true);
if(typeof pagentry.main.app_state !== 'undefined')
{} else
{pagentry.main.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
pagentry.main.prefixer = (function prefixer(prefixes,thing){var iter__11851__auto__ = (function iter__32893(s__32894){return (new cljs.core.LazySeq(null,(function (){var s__32894__$1 = s__32894;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__32894__$1);if(temp__4092__auto__)
{var s__32894__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32894__$2))
{var c__11849__auto__ = cljs.core.chunk_first.call(null,s__32894__$2);var size__11850__auto__ = cljs.core.count.call(null,c__11849__auto__);var b__32896 = cljs.core.chunk_buffer.call(null,size__11850__auto__);if((function (){var i__32895 = 0;while(true){
if((i__32895 < size__11850__auto__))
{var prefix = cljs.core._nth.call(null,c__11849__auto__,i__32895);cljs.core.chunk_append.call(null,b__32896,cljs.core.keyword.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(thing))));
{
var G__32897 = (i__32895 + 1);
i__32895 = G__32897;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32896),iter__32893.call(null,cljs.core.chunk_rest.call(null,s__32894__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32896),null);
}
} else
{var prefix = cljs.core.first.call(null,s__32894__$2);return cljs.core.cons.call(null,cljs.core.keyword.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(thing))),iter__32893.call(null,cljs.core.rest.call(null,s__32894__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__11851__auto__.call(null,prefixes);
});
cljs.core.print.call(null,pagentry.main.prefixer.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-moz","-webkit"], null),"transform"));
var ufv___32915 = schema.utils.use_fn_validation;var output_schema32899_32916 = schema.core.Any;var input_schema32900_32917 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",-1637455517,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",-1534366612,null))], null);var input_checker32901_32918 = schema.core.checker.call(null,input_schema32900_32917);var output_checker32902_32919 = schema.core.checker.call(null,output_schema32899_32916);/**
* Inputs: [data owner]
*/
pagentry.main.blanket = ((function (ufv___32915,output_schema32899_32916,input_schema32900_32917,input_checker32901_32918,output_checker32902_32919){
return (function blanket(G__32903,G__32904){var validate__14834__auto__ = ufv___32915.get_cell();if(cljs.core.truth_(validate__14834__auto__))
{var args__14835__auto___32920 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32903,G__32904], null);var temp__4092__auto___32921 = input_checker32901_32918.call(null,args__14835__auto___32920);if(cljs.core.truth_(temp__4092__auto___32921))
{var error__14836__auto___32922 = temp__4092__auto___32921;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"blanket","blanket",-1674571076,null),cljs.core.pr_str.call(null,error__14836__auto___32922)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__14836__auto___32922,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema32900_32917,new cljs.core.Keyword(null,"value","value",1125876963),args__14835__auto___32920], null));
} else
{}
} else
{}
var o__14837__auto__ = (function (){var data = G__32903;var owner = G__32904;while(true){
if(typeof pagentry.main.t32910 !== 'undefined')
{} else
{
/**
* @constructor
*/
pagentry.main.t32910 = (function (output_schema32899,input_checker32901,output_checker32902,ufv__,data,G__32903,input_schema32900,G__32904,validate__14834__auto__,owner,blanket,meta32911){
this.output_schema32899 = output_schema32899;
this.input_checker32901 = input_checker32901;
this.output_checker32902 = output_checker32902;
this.ufv__ = ufv__;
this.data = data;
this.G__32903 = G__32903;
this.input_schema32900 = input_schema32900;
this.G__32904 = G__32904;
this.validate__14834__auto__ = validate__14834__auto__;
this.owner = owner;
this.blanket = blanket;
this.meta32911 = meta32911;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
pagentry.main.t32910.cljs$lang$type = true;
pagentry.main.t32910.cljs$lang$ctorStr = "pagentry.main/t32910";
pagentry.main.t32910.cljs$lang$ctorPrWriter = ((function (validate__14834__auto__,ufv___32915,output_schema32899_32916,input_schema32900_32917,input_checker32901_32918,output_checker32902_32919){
return (function (this__11693__auto__,writer__11694__auto__,opt__11695__auto__){return cljs.core._write.call(null,writer__11694__auto__,"pagentry.main/t32910");
});})(validate__14834__auto__,ufv___32915,output_schema32899_32916,input_schema32900_32917,input_checker32901_32918,output_checker32902_32919))
;
pagentry.main.t32910.prototype.om$core$IRenderState$ = true;
pagentry.main.t32910.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__14834__auto__,ufv___32915,output_schema32899_32916,input_schema32900_32917,input_checker32901_32918,output_checker32902_32919){
return (function (_,p__32913){var self__ = this;
var map__32914 = p__32913;var map__32914__$1 = ((cljs.core.seq_QMARK_.call(null,map__32914))?cljs.core.apply.call(null,cljs.core.hash_map,map__32914):map__32914);var index = cljs.core.get.call(null,map__32914__$1,new cljs.core.Keyword(null,"index","index",1114250308));var color = cljs.core.get.call(null,map__32914__$1,new cljs.core.Keyword(null,"color","color",1108746965));var x_pos = cljs.core.get.call(null,map__32914__$1,new cljs.core.Keyword(null,"x-pos","x-pos",1126178545));var toggle = cljs.core.get.call(null,map__32914__$1,new cljs.core.Keyword(null,"toggle","toggle",4440567494));var ___$1 = this;return cljs.core.apply.call(null,React.DOM.section,{"style": {"background": ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)), "transform": ("translateX(-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_pos)+"%)"), "-webkit-transform": ("translateX(-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_pos)+"%)"), "left": 0, "top": 0, "position": "absolute"}, "className": "full flex"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.article,{"style": {"font-size": "40vw"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index))],null)))),cljs.core.apply.call(null,React.DOM.div,{"style": {"bottom": 0, "position": "absolute", "background": (cljs.core.truth_(toggle)?"#A7F5AB":"white"), "width": "15%", "-webkit-transform": ("translateY(-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_pos)+"%)"), "color": (cljs.core.truth_(toggle)?"white":"#A7F5AB"), "font-size": "5vh", "transform": ("translateY(-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_pos)+"%)"), "right": 0, "height": "15%"}, "className": "flex trans", "onTouchEnd": ((function (___$1,map__32914,map__32914__$1,index,color,x_pos,toggle,validate__14834__auto__,ufv___32915,output_schema32899_32916,input_schema32900_32917,input_checker32901_32918,output_checker32902_32919){
return (function (){return om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"toggle","toggle",4440567494),cljs.core.not);
});})(___$1,map__32914,map__32914__$1,index,color,x_pos,toggle,validate__14834__auto__,ufv___32915,output_schema32899_32916,input_schema32900_32917,input_checker32901_32918,output_checker32902_32919))
, "onClick": ((function (___$1,map__32914,map__32914__$1,index,color,x_pos,toggle,validate__14834__auto__,ufv___32915,output_schema32899_32916,input_schema32900_32917,input_checker32901_32918,output_checker32902_32919){
return (function (){return om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"toggle","toggle",4440567494),cljs.core.not);
});})(___$1,map__32914,map__32914__$1,index,color,x_pos,toggle,validate__14834__auto__,ufv___32915,output_schema32899_32916,input_schema32900_32917,input_checker32901_32918,output_checker32902_32919))
},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(toggle))],null))))],null))));
});})(validate__14834__auto__,ufv___32915,output_schema32899_32916,input_schema32900_32917,input_checker32901_32918,output_checker32902_32919))
;
pagentry.main.t32910.prototype.om$core$IDidUpdate$ = true;
pagentry.main.t32910.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (validate__14834__auto__,ufv___32915,output_schema32899_32916,input_schema32900_32917,input_checker32901_32918,output_checker32902_32919){
return (function (_,___$1,prevstate){var self__ = this;
var ___$2 = this;var currstate = om.core.get_state.call(null,self__.owner);var idx = new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(currstate);return pagentry.animation.delta.call(null,new cljs.core.Keyword(null,"toggle","toggle",4440567494),prevstate,currstate,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,(85 - (idx * 15))], null),370,new cljs.core.Keyword(null,"cubic-in-out","cubic-in-out",3367258619),self__.owner,new cljs.core.Keyword(null,"x-pos","x-pos",1126178545));
});})(validate__14834__auto__,ufv___32915,output_schema32899_32916,input_schema32900_32917,input_checker32901_32918,output_checker32902_32919))
;
pagentry.main.t32910.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__14834__auto__,ufv___32915,output_schema32899_32916,input_schema32900_32917,input_checker32901_32918,output_checker32902_32919){
return (function (_32912){var self__ = this;
var _32912__$1 = this;return self__.meta32911;
});})(validate__14834__auto__,ufv___32915,output_schema32899_32916,input_schema32900_32917,input_checker32901_32918,output_checker32902_32919))
;
pagentry.main.t32910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__14834__auto__,ufv___32915,output_schema32899_32916,input_schema32900_32917,input_checker32901_32918,output_checker32902_32919){
return (function (_32912,meta32911__$1){var self__ = this;
var _32912__$1 = this;return (new pagentry.main.t32910(self__.output_schema32899,self__.input_checker32901,self__.output_checker32902,self__.ufv__,self__.data,self__.G__32903,self__.input_schema32900,self__.G__32904,self__.validate__14834__auto__,self__.owner,self__.blanket,meta32911__$1));
});})(validate__14834__auto__,ufv___32915,output_schema32899_32916,input_schema32900_32917,input_checker32901_32918,output_checker32902_32919))
;
pagentry.main.__GT_t32910 = ((function (validate__14834__auto__,ufv___32915,output_schema32899_32916,input_schema32900_32917,input_checker32901_32918,output_checker32902_32919){
return (function __GT_t32910(output_schema32899__$1,input_checker32901__$1,output_checker32902__$1,ufv____$1,data__$1,G__32903__$1,input_schema32900__$1,G__32904__$1,validate__14834__auto____$1,owner__$1,blanket__$1,meta32911){return (new pagentry.main.t32910(output_schema32899__$1,input_checker32901__$1,output_checker32902__$1,ufv____$1,data__$1,G__32903__$1,input_schema32900__$1,G__32904__$1,validate__14834__auto____$1,owner__$1,blanket__$1,meta32911));
});})(validate__14834__auto__,ufv___32915,output_schema32899_32916,input_schema32900_32917,input_checker32901_32918,output_checker32902_32919))
;
}
return (new pagentry.main.t32910(output_schema32899_32916,input_checker32901_32918,output_checker32902_32919,ufv___32915,data,G__32903,input_schema32900_32917,G__32904,validate__14834__auto__,owner,blanket,null));
break;
}
})();if(cljs.core.truth_(validate__14834__auto__))
{var temp__4092__auto___32923 = output_checker32902_32919.call(null,o__14837__auto__);if(cljs.core.truth_(temp__4092__auto___32923))
{var error__14836__auto___32924 = temp__4092__auto___32923;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"blanket","blanket",-1674571076,null),cljs.core.pr_str.call(null,error__14836__auto___32924)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__14836__auto___32924,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema32899_32916,new cljs.core.Keyword(null,"value","value",1125876963),o__14837__auto__], null));
} else
{}
} else
{}
return o__14837__auto__;
});})(ufv___32915,output_schema32899_32916,input_schema32900_32917,input_checker32901_32918,output_checker32902_32919))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,pagentry.main.blanket),schema.core.make_fn_schema.call(null,output_schema32899_32916,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32900_32917], null)));
pagentry.main.__GT_blanket = (function() {
var __GT_blanket = null;
var __GT_blanket__1 = (function (cursor__16602__auto__){return om.core.build.call(null,pagentry.main.blanket,cursor__16602__auto__);
});
var __GT_blanket__2 = (function (cursor__16602__auto__,m32898){return om.core.build.call(null,pagentry.main.blanket,cursor__16602__auto__,m32898);
});
__GT_blanket = function(cursor__16602__auto__,m32898){
switch(arguments.length){
case 1:
return __GT_blanket__1.call(this,cursor__16602__auto__);
case 2:
return __GT_blanket__2.call(this,cursor__16602__auto__,m32898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_blanket.cljs$core$IFn$_invoke$arity$1 = __GT_blanket__1;
__GT_blanket.cljs$core$IFn$_invoke$arity$2 = __GT_blanket__2;
return __GT_blanket;
})()
;
var ufv___32940 = schema.utils.use_fn_validation;var output_schema32928_32941 = schema.core.Any;var input_schema32929_32942 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",-1637455517,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",-1534366612,null))], null);var input_checker32930_32943 = schema.core.checker.call(null,input_schema32929_32942);var output_checker32931_32944 = schema.core.checker.call(null,output_schema32928_32941);/**
* Inputs: [data owner]
*/
pagentry.main.app_view = ((function (ufv___32940,output_schema32928_32941,input_schema32929_32942,input_checker32930_32943,output_checker32931_32944){
return (function app_view(G__32932,G__32933){var validate__14834__auto__ = ufv___32940.get_cell();if(cljs.core.truth_(validate__14834__auto__))
{var args__14835__auto___32945 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32932,G__32933], null);var temp__4092__auto___32946 = input_checker32930_32943.call(null,args__14835__auto___32945);if(cljs.core.truth_(temp__4092__auto___32946))
{var error__14836__auto___32947 = temp__4092__auto___32946;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app-view","app-view",-518813558,null),cljs.core.pr_str.call(null,error__14836__auto___32947)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__14836__auto___32947,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema32929_32942,new cljs.core.Keyword(null,"value","value",1125876963),args__14835__auto___32945], null));
} else
{}
} else
{}
var o__14837__auto__ = (function (){var data = G__32932;var owner = G__32933;while(true){
if(typeof pagentry.main.t32937 !== 'undefined')
{} else
{
/**
* @constructor
*/
pagentry.main.t32937 = (function (output_checker32931,input_schema32929,input_checker32930,ufv__,data,G__32933,G__32932,validate__14834__auto__,output_schema32928,owner,app_view,meta32938){
this.output_checker32931 = output_checker32931;
this.input_schema32929 = input_schema32929;
this.input_checker32930 = input_checker32930;
this.ufv__ = ufv__;
this.data = data;
this.G__32933 = G__32933;
this.G__32932 = G__32932;
this.validate__14834__auto__ = validate__14834__auto__;
this.output_schema32928 = output_schema32928;
this.owner = owner;
this.app_view = app_view;
this.meta32938 = meta32938;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
pagentry.main.t32937.cljs$lang$type = true;
pagentry.main.t32937.cljs$lang$ctorStr = "pagentry.main/t32937";
pagentry.main.t32937.cljs$lang$ctorPrWriter = ((function (validate__14834__auto__,ufv___32940,output_schema32928_32941,input_schema32929_32942,input_checker32930_32943,output_checker32931_32944){
return (function (this__11693__auto__,writer__11694__auto__,opt__11695__auto__){return cljs.core._write.call(null,writer__11694__auto__,"pagentry.main/t32937");
});})(validate__14834__auto__,ufv___32940,output_schema32928_32941,input_schema32929_32942,input_checker32930_32943,output_checker32931_32944))
;
pagentry.main.t32937.prototype.om$core$IRenderState$ = true;
pagentry.main.t32937.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__14834__auto__,ufv___32940,output_schema32928_32941,input_schema32929_32942,input_checker32930_32943,output_checker32931_32944){
return (function (_,___$1){var self__ = this;
var ___$2 = this;var colors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ADFFA4","A7F5AB","ADFFA4"], null);var cnt = cljs.core.count.call(null,colors);var cnt1 = (cnt - 1);var width = (15 * cnt);return cljs.core.apply.call(null,React.DOM.section,{"className": "full"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.section,{"style": {"height": "100%", "width": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((100 - width))+"%"), "left": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)+"%"), "background": "#A7F5AB", "z-index": 1, "position": "absolute"}, "className": "flex"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.img({"src": "http://www.mbgnet.net/bioplants/images/plant.gif"})],null)))),cljs.core.map_indexed.call(null,((function (colors,cnt,cnt1,width,___$2,validate__14834__auto__,ufv___32940,output_schema32928_32941,input_schema32929_32942,input_checker32930_32943,output_checker32931_32944){
return (function (p1__32926_SHARP_,p2__32925_SHARP_){return om.core.build.call(null,pagentry.main.blanket,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1108746965),p2__32925_SHARP_,new cljs.core.Keyword(null,"toggle","toggle",4440567494),false,new cljs.core.Keyword(null,"index","index",1114250308),(cnt1 - p1__32926_SHARP_)], null)], null));
});})(colors,cnt,cnt1,width,___$2,validate__14834__auto__,ufv___32940,output_schema32928_32941,input_schema32929_32942,input_checker32930_32943,output_checker32931_32944))
,colors)],null))));
});})(validate__14834__auto__,ufv___32940,output_schema32928_32941,input_schema32929_32942,input_checker32930_32943,output_checker32931_32944))
;
pagentry.main.t32937.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__14834__auto__,ufv___32940,output_schema32928_32941,input_schema32929_32942,input_checker32930_32943,output_checker32931_32944){
return (function (_32939){var self__ = this;
var _32939__$1 = this;return self__.meta32938;
});})(validate__14834__auto__,ufv___32940,output_schema32928_32941,input_schema32929_32942,input_checker32930_32943,output_checker32931_32944))
;
pagentry.main.t32937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__14834__auto__,ufv___32940,output_schema32928_32941,input_schema32929_32942,input_checker32930_32943,output_checker32931_32944){
return (function (_32939,meta32938__$1){var self__ = this;
var _32939__$1 = this;return (new pagentry.main.t32937(self__.output_checker32931,self__.input_schema32929,self__.input_checker32930,self__.ufv__,self__.data,self__.G__32933,self__.G__32932,self__.validate__14834__auto__,self__.output_schema32928,self__.owner,self__.app_view,meta32938__$1));
});})(validate__14834__auto__,ufv___32940,output_schema32928_32941,input_schema32929_32942,input_checker32930_32943,output_checker32931_32944))
;
pagentry.main.__GT_t32937 = ((function (validate__14834__auto__,ufv___32940,output_schema32928_32941,input_schema32929_32942,input_checker32930_32943,output_checker32931_32944){
return (function __GT_t32937(output_checker32931__$1,input_schema32929__$1,input_checker32930__$1,ufv____$1,data__$1,G__32933__$1,G__32932__$1,validate__14834__auto____$1,output_schema32928__$1,owner__$1,app_view__$1,meta32938){return (new pagentry.main.t32937(output_checker32931__$1,input_schema32929__$1,input_checker32930__$1,ufv____$1,data__$1,G__32933__$1,G__32932__$1,validate__14834__auto____$1,output_schema32928__$1,owner__$1,app_view__$1,meta32938));
});})(validate__14834__auto__,ufv___32940,output_schema32928_32941,input_schema32929_32942,input_checker32930_32943,output_checker32931_32944))
;
}
return (new pagentry.main.t32937(output_checker32931_32944,input_schema32929_32942,input_checker32930_32943,ufv___32940,data,G__32933,G__32932,validate__14834__auto__,output_schema32928_32941,owner,app_view,null));
break;
}
})();if(cljs.core.truth_(validate__14834__auto__))
{var temp__4092__auto___32948 = output_checker32931_32944.call(null,o__14837__auto__);if(cljs.core.truth_(temp__4092__auto___32948))
{var error__14836__auto___32949 = temp__4092__auto___32948;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app-view","app-view",-518813558,null),cljs.core.pr_str.call(null,error__14836__auto___32949)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__14836__auto___32949,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema32928_32941,new cljs.core.Keyword(null,"value","value",1125876963),o__14837__auto__], null));
} else
{}
} else
{}
return o__14837__auto__;
});})(ufv___32940,output_schema32928_32941,input_schema32929_32942,input_checker32930_32943,output_checker32931_32944))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,pagentry.main.app_view),schema.core.make_fn_schema.call(null,output_schema32928_32941,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32929_32942], null)));
pagentry.main.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__16602__auto__){return om.core.build.call(null,pagentry.main.app_view,cursor__16602__auto__);
});
var __GT_app_view__2 = (function (cursor__16602__auto__,m32927){return om.core.build.call(null,pagentry.main.app_view,cursor__16602__auto__,m32927);
});
__GT_app_view = function(cursor__16602__auto__,m32927){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__16602__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__16602__auto__,m32927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_app_view.cljs$core$IFn$_invoke$arity$1 = __GT_app_view__1;
__GT_app_view.cljs$core$IFn$_invoke$arity$2 = __GT_app_view__2;
return __GT_app_view;
})()
;
if(cljs.core._EQ_.call(null,location.hostname,"localhost"))
{figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),(function (){return cljs.core.print.call(null,"america");
}));
} else
{}
om.core.root.call(null,pagentry.main.app_view,pagentry.main.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.querySelector("#app")], null));

//# sourceMappingURL=main.js.map