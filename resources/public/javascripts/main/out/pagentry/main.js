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
pagentry.main.prefixer = (function prefixer(prefixes,thing){var iter__11851__auto__ = (function iter__32832(s__32833){return (new cljs.core.LazySeq(null,(function (){var s__32833__$1 = s__32833;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__32833__$1);if(temp__4092__auto__)
{var s__32833__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32833__$2))
{var c__11849__auto__ = cljs.core.chunk_first.call(null,s__32833__$2);var size__11850__auto__ = cljs.core.count.call(null,c__11849__auto__);var b__32835 = cljs.core.chunk_buffer.call(null,size__11850__auto__);if((function (){var i__32834 = 0;while(true){
if((i__32834 < size__11850__auto__))
{var prefix = cljs.core._nth.call(null,c__11849__auto__,i__32834);cljs.core.chunk_append.call(null,b__32835,cljs.core.keyword.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(thing))));
{
var G__32836 = (i__32834 + 1);
i__32834 = G__32836;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32835),iter__32832.call(null,cljs.core.chunk_rest.call(null,s__32833__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32835),null);
}
} else
{var prefix = cljs.core.first.call(null,s__32833__$2);return cljs.core.cons.call(null,cljs.core.keyword.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(thing))),iter__32832.call(null,cljs.core.rest.call(null,s__32833__$2)));
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
var ufv___32854 = schema.utils.use_fn_validation;var output_schema32838_32855 = schema.core.Any;var input_schema32839_32856 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",-1637455517,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",-1534366612,null))], null);var input_checker32840_32857 = schema.core.checker.call(null,input_schema32839_32856);var output_checker32841_32858 = schema.core.checker.call(null,output_schema32838_32855);/**
* Inputs: [data owner]
*/
pagentry.main.blanket = ((function (ufv___32854,output_schema32838_32855,input_schema32839_32856,input_checker32840_32857,output_checker32841_32858){
return (function blanket(G__32842,G__32843){var validate__14834__auto__ = ufv___32854.get_cell();if(cljs.core.truth_(validate__14834__auto__))
{var args__14835__auto___32859 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32842,G__32843], null);var temp__4092__auto___32860 = input_checker32840_32857.call(null,args__14835__auto___32859);if(cljs.core.truth_(temp__4092__auto___32860))
{var error__14836__auto___32861 = temp__4092__auto___32860;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"blanket","blanket",-1674571076,null),cljs.core.pr_str.call(null,error__14836__auto___32861)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__14836__auto___32861,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema32839_32856,new cljs.core.Keyword(null,"value","value",1125876963),args__14835__auto___32859], null));
} else
{}
} else
{}
var o__14837__auto__ = (function (){var data = G__32842;var owner = G__32843;while(true){
if(typeof pagentry.main.t32849 !== 'undefined')
{} else
{
/**
* @constructor
*/
pagentry.main.t32849 = (function (G__32843,G__32842,ufv__,output_checker32841,data,output_schema32838,validate__14834__auto__,input_schema32839,owner,blanket,input_checker32840,meta32850){
this.G__32843 = G__32843;
this.G__32842 = G__32842;
this.ufv__ = ufv__;
this.output_checker32841 = output_checker32841;
this.data = data;
this.output_schema32838 = output_schema32838;
this.validate__14834__auto__ = validate__14834__auto__;
this.input_schema32839 = input_schema32839;
this.owner = owner;
this.blanket = blanket;
this.input_checker32840 = input_checker32840;
this.meta32850 = meta32850;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
pagentry.main.t32849.cljs$lang$type = true;
pagentry.main.t32849.cljs$lang$ctorStr = "pagentry.main/t32849";
pagentry.main.t32849.cljs$lang$ctorPrWriter = ((function (validate__14834__auto__,ufv___32854,output_schema32838_32855,input_schema32839_32856,input_checker32840_32857,output_checker32841_32858){
return (function (this__11693__auto__,writer__11694__auto__,opt__11695__auto__){return cljs.core._write.call(null,writer__11694__auto__,"pagentry.main/t32849");
});})(validate__14834__auto__,ufv___32854,output_schema32838_32855,input_schema32839_32856,input_checker32840_32857,output_checker32841_32858))
;
pagentry.main.t32849.prototype.om$core$IRenderState$ = true;
pagentry.main.t32849.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__14834__auto__,ufv___32854,output_schema32838_32855,input_schema32839_32856,input_checker32840_32857,output_checker32841_32858){
return (function (_,p__32852){var self__ = this;
var map__32853 = p__32852;var map__32853__$1 = ((cljs.core.seq_QMARK_.call(null,map__32853))?cljs.core.apply.call(null,cljs.core.hash_map,map__32853):map__32853);var index = cljs.core.get.call(null,map__32853__$1,new cljs.core.Keyword(null,"index","index",1114250308));var color = cljs.core.get.call(null,map__32853__$1,new cljs.core.Keyword(null,"color","color",1108746965));var x_pos = cljs.core.get.call(null,map__32853__$1,new cljs.core.Keyword(null,"x-pos","x-pos",1126178545));var toggle = cljs.core.get.call(null,map__32853__$1,new cljs.core.Keyword(null,"toggle","toggle",4440567494));var ___$1 = this;return cljs.core.apply.call(null,React.DOM.section,{"style": {"background": ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)), "transform": ("translateX(-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_pos)+"%)"), "left": 0, "top": 0, "position": "absolute"}, "className": "full flex"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.article,{"style": {"font-size": "40vw"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index))],null)))),cljs.core.apply.call(null,React.DOM.div,{"style": {"height": "15%", "right": 0, "transform": ("translateY(-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_pos)+"%)"), "font-size": "5vh", "color": (cljs.core.truth_(toggle)?"white":"#A7F5AB"), "width": "15%", "background": (cljs.core.truth_(toggle)?"#A7F5AB":"white"), "position": "absolute", "bottom": 0}, "className": "flex trans", "onTouchEnd": ((function (___$1,map__32853,map__32853__$1,index,color,x_pos,toggle,validate__14834__auto__,ufv___32854,output_schema32838_32855,input_schema32839_32856,input_checker32840_32857,output_checker32841_32858){
return (function (){return om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"toggle","toggle",4440567494),cljs.core.not);
});})(___$1,map__32853,map__32853__$1,index,color,x_pos,toggle,validate__14834__auto__,ufv___32854,output_schema32838_32855,input_schema32839_32856,input_checker32840_32857,output_checker32841_32858))
, "onClick": ((function (___$1,map__32853,map__32853__$1,index,color,x_pos,toggle,validate__14834__auto__,ufv___32854,output_schema32838_32855,input_schema32839_32856,input_checker32840_32857,output_checker32841_32858){
return (function (){return om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"toggle","toggle",4440567494),cljs.core.not);
});})(___$1,map__32853,map__32853__$1,index,color,x_pos,toggle,validate__14834__auto__,ufv___32854,output_schema32838_32855,input_schema32839_32856,input_checker32840_32857,output_checker32841_32858))
},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(toggle))],null))))],null))));
});})(validate__14834__auto__,ufv___32854,output_schema32838_32855,input_schema32839_32856,input_checker32840_32857,output_checker32841_32858))
;
pagentry.main.t32849.prototype.om$core$IDidUpdate$ = true;
pagentry.main.t32849.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (validate__14834__auto__,ufv___32854,output_schema32838_32855,input_schema32839_32856,input_checker32840_32857,output_checker32841_32858){
return (function (_,___$1,prevstate){var self__ = this;
var ___$2 = this;var currstate = om.core.get_state.call(null,self__.owner);var idx = new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(currstate);return pagentry.animation.delta.call(null,new cljs.core.Keyword(null,"toggle","toggle",4440567494),prevstate,currstate,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,(85 - (idx * 15))], null),370,new cljs.core.Keyword(null,"cubic-in-out","cubic-in-out",3367258619),self__.owner,new cljs.core.Keyword(null,"x-pos","x-pos",1126178545));
});})(validate__14834__auto__,ufv___32854,output_schema32838_32855,input_schema32839_32856,input_checker32840_32857,output_checker32841_32858))
;
pagentry.main.t32849.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__14834__auto__,ufv___32854,output_schema32838_32855,input_schema32839_32856,input_checker32840_32857,output_checker32841_32858){
return (function (_32851){var self__ = this;
var _32851__$1 = this;return self__.meta32850;
});})(validate__14834__auto__,ufv___32854,output_schema32838_32855,input_schema32839_32856,input_checker32840_32857,output_checker32841_32858))
;
pagentry.main.t32849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__14834__auto__,ufv___32854,output_schema32838_32855,input_schema32839_32856,input_checker32840_32857,output_checker32841_32858){
return (function (_32851,meta32850__$1){var self__ = this;
var _32851__$1 = this;return (new pagentry.main.t32849(self__.G__32843,self__.G__32842,self__.ufv__,self__.output_checker32841,self__.data,self__.output_schema32838,self__.validate__14834__auto__,self__.input_schema32839,self__.owner,self__.blanket,self__.input_checker32840,meta32850__$1));
});})(validate__14834__auto__,ufv___32854,output_schema32838_32855,input_schema32839_32856,input_checker32840_32857,output_checker32841_32858))
;
pagentry.main.__GT_t32849 = ((function (validate__14834__auto__,ufv___32854,output_schema32838_32855,input_schema32839_32856,input_checker32840_32857,output_checker32841_32858){
return (function __GT_t32849(G__32843__$1,G__32842__$1,ufv____$1,output_checker32841__$1,data__$1,output_schema32838__$1,validate__14834__auto____$1,input_schema32839__$1,owner__$1,blanket__$1,input_checker32840__$1,meta32850){return (new pagentry.main.t32849(G__32843__$1,G__32842__$1,ufv____$1,output_checker32841__$1,data__$1,output_schema32838__$1,validate__14834__auto____$1,input_schema32839__$1,owner__$1,blanket__$1,input_checker32840__$1,meta32850));
});})(validate__14834__auto__,ufv___32854,output_schema32838_32855,input_schema32839_32856,input_checker32840_32857,output_checker32841_32858))
;
}
return (new pagentry.main.t32849(G__32843,G__32842,ufv___32854,output_checker32841_32858,data,output_schema32838_32855,validate__14834__auto__,input_schema32839_32856,owner,blanket,input_checker32840_32857,null));
break;
}
})();if(cljs.core.truth_(validate__14834__auto__))
{var temp__4092__auto___32862 = output_checker32841_32858.call(null,o__14837__auto__);if(cljs.core.truth_(temp__4092__auto___32862))
{var error__14836__auto___32863 = temp__4092__auto___32862;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"blanket","blanket",-1674571076,null),cljs.core.pr_str.call(null,error__14836__auto___32863)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__14836__auto___32863,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema32838_32855,new cljs.core.Keyword(null,"value","value",1125876963),o__14837__auto__], null));
} else
{}
} else
{}
return o__14837__auto__;
});})(ufv___32854,output_schema32838_32855,input_schema32839_32856,input_checker32840_32857,output_checker32841_32858))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,pagentry.main.blanket),schema.core.make_fn_schema.call(null,output_schema32838_32855,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32839_32856], null)));
pagentry.main.__GT_blanket = (function() {
var __GT_blanket = null;
var __GT_blanket__1 = (function (cursor__16602__auto__){return om.core.build.call(null,pagentry.main.blanket,cursor__16602__auto__);
});
var __GT_blanket__2 = (function (cursor__16602__auto__,m32837){return om.core.build.call(null,pagentry.main.blanket,cursor__16602__auto__,m32837);
});
__GT_blanket = function(cursor__16602__auto__,m32837){
switch(arguments.length){
case 1:
return __GT_blanket__1.call(this,cursor__16602__auto__);
case 2:
return __GT_blanket__2.call(this,cursor__16602__auto__,m32837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_blanket.cljs$core$IFn$_invoke$arity$1 = __GT_blanket__1;
__GT_blanket.cljs$core$IFn$_invoke$arity$2 = __GT_blanket__2;
return __GT_blanket;
})()
;
var ufv___32879 = schema.utils.use_fn_validation;var output_schema32867_32880 = schema.core.Any;var input_schema32868_32881 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",-1637455517,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",-1534366612,null))], null);var input_checker32869_32882 = schema.core.checker.call(null,input_schema32868_32881);var output_checker32870_32883 = schema.core.checker.call(null,output_schema32867_32880);/**
* Inputs: [data owner]
*/
pagentry.main.app_view = ((function (ufv___32879,output_schema32867_32880,input_schema32868_32881,input_checker32869_32882,output_checker32870_32883){
return (function app_view(G__32871,G__32872){var validate__14834__auto__ = ufv___32879.get_cell();if(cljs.core.truth_(validate__14834__auto__))
{var args__14835__auto___32884 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32871,G__32872], null);var temp__4092__auto___32885 = input_checker32869_32882.call(null,args__14835__auto___32884);if(cljs.core.truth_(temp__4092__auto___32885))
{var error__14836__auto___32886 = temp__4092__auto___32885;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app-view","app-view",-518813558,null),cljs.core.pr_str.call(null,error__14836__auto___32886)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__14836__auto___32886,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema32868_32881,new cljs.core.Keyword(null,"value","value",1125876963),args__14835__auto___32884], null));
} else
{}
} else
{}
var o__14837__auto__ = (function (){var data = G__32871;var owner = G__32872;while(true){
if(typeof pagentry.main.t32876 !== 'undefined')
{} else
{
/**
* @constructor
*/
pagentry.main.t32876 = (function (G__32871,input_checker32869,G__32872,ufv__,data,input_schema32868,output_checker32870,validate__14834__auto__,owner,output_schema32867,app_view,meta32877){
this.G__32871 = G__32871;
this.input_checker32869 = input_checker32869;
this.G__32872 = G__32872;
this.ufv__ = ufv__;
this.data = data;
this.input_schema32868 = input_schema32868;
this.output_checker32870 = output_checker32870;
this.validate__14834__auto__ = validate__14834__auto__;
this.owner = owner;
this.output_schema32867 = output_schema32867;
this.app_view = app_view;
this.meta32877 = meta32877;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
pagentry.main.t32876.cljs$lang$type = true;
pagentry.main.t32876.cljs$lang$ctorStr = "pagentry.main/t32876";
pagentry.main.t32876.cljs$lang$ctorPrWriter = ((function (validate__14834__auto__,ufv___32879,output_schema32867_32880,input_schema32868_32881,input_checker32869_32882,output_checker32870_32883){
return (function (this__11693__auto__,writer__11694__auto__,opt__11695__auto__){return cljs.core._write.call(null,writer__11694__auto__,"pagentry.main/t32876");
});})(validate__14834__auto__,ufv___32879,output_schema32867_32880,input_schema32868_32881,input_checker32869_32882,output_checker32870_32883))
;
pagentry.main.t32876.prototype.om$core$IRenderState$ = true;
pagentry.main.t32876.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__14834__auto__,ufv___32879,output_schema32867_32880,input_schema32868_32881,input_checker32869_32882,output_checker32870_32883){
return (function (_,___$1){var self__ = this;
var ___$2 = this;var colors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ADFFA4","A7F5AB","ADFFA4"], null);var cnt = cljs.core.count.call(null,colors);var cnt1 = (cnt - 1);var width = (15 * cnt);return cljs.core.apply.call(null,React.DOM.section,{"className": "full"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.section,{"style": {"height": "100%", "width": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((100 - width))+"%"), "left": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)+"%"), "background": "#A7F5AB", "z-index": 1, "position": "absolute"}, "className": "flex"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.img({"src": "http://www.mbgnet.net/bioplants/images/plant.gif"})],null)))),cljs.core.map_indexed.call(null,((function (colors,cnt,cnt1,width,___$2,validate__14834__auto__,ufv___32879,output_schema32867_32880,input_schema32868_32881,input_checker32869_32882,output_checker32870_32883){
return (function (p1__32865_SHARP_,p2__32864_SHARP_){return om.core.build.call(null,pagentry.main.blanket,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1108746965),p2__32864_SHARP_,new cljs.core.Keyword(null,"toggle","toggle",4440567494),false,new cljs.core.Keyword(null,"index","index",1114250308),(cnt1 - p1__32865_SHARP_)], null)], null));
});})(colors,cnt,cnt1,width,___$2,validate__14834__auto__,ufv___32879,output_schema32867_32880,input_schema32868_32881,input_checker32869_32882,output_checker32870_32883))
,colors)],null))));
});})(validate__14834__auto__,ufv___32879,output_schema32867_32880,input_schema32868_32881,input_checker32869_32882,output_checker32870_32883))
;
pagentry.main.t32876.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__14834__auto__,ufv___32879,output_schema32867_32880,input_schema32868_32881,input_checker32869_32882,output_checker32870_32883){
return (function (_32878){var self__ = this;
var _32878__$1 = this;return self__.meta32877;
});})(validate__14834__auto__,ufv___32879,output_schema32867_32880,input_schema32868_32881,input_checker32869_32882,output_checker32870_32883))
;
pagentry.main.t32876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__14834__auto__,ufv___32879,output_schema32867_32880,input_schema32868_32881,input_checker32869_32882,output_checker32870_32883){
return (function (_32878,meta32877__$1){var self__ = this;
var _32878__$1 = this;return (new pagentry.main.t32876(self__.G__32871,self__.input_checker32869,self__.G__32872,self__.ufv__,self__.data,self__.input_schema32868,self__.output_checker32870,self__.validate__14834__auto__,self__.owner,self__.output_schema32867,self__.app_view,meta32877__$1));
});})(validate__14834__auto__,ufv___32879,output_schema32867_32880,input_schema32868_32881,input_checker32869_32882,output_checker32870_32883))
;
pagentry.main.__GT_t32876 = ((function (validate__14834__auto__,ufv___32879,output_schema32867_32880,input_schema32868_32881,input_checker32869_32882,output_checker32870_32883){
return (function __GT_t32876(G__32871__$1,input_checker32869__$1,G__32872__$1,ufv____$1,data__$1,input_schema32868__$1,output_checker32870__$1,validate__14834__auto____$1,owner__$1,output_schema32867__$1,app_view__$1,meta32877){return (new pagentry.main.t32876(G__32871__$1,input_checker32869__$1,G__32872__$1,ufv____$1,data__$1,input_schema32868__$1,output_checker32870__$1,validate__14834__auto____$1,owner__$1,output_schema32867__$1,app_view__$1,meta32877));
});})(validate__14834__auto__,ufv___32879,output_schema32867_32880,input_schema32868_32881,input_checker32869_32882,output_checker32870_32883))
;
}
return (new pagentry.main.t32876(G__32871,input_checker32869_32882,G__32872,ufv___32879,data,input_schema32868_32881,output_checker32870_32883,validate__14834__auto__,owner,output_schema32867_32880,app_view,null));
break;
}
})();if(cljs.core.truth_(validate__14834__auto__))
{var temp__4092__auto___32887 = output_checker32870_32883.call(null,o__14837__auto__);if(cljs.core.truth_(temp__4092__auto___32887))
{var error__14836__auto___32888 = temp__4092__auto___32887;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app-view","app-view",-518813558,null),cljs.core.pr_str.call(null,error__14836__auto___32888)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__14836__auto___32888,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema32867_32880,new cljs.core.Keyword(null,"value","value",1125876963),o__14837__auto__], null));
} else
{}
} else
{}
return o__14837__auto__;
});})(ufv___32879,output_schema32867_32880,input_schema32868_32881,input_checker32869_32882,output_checker32870_32883))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,pagentry.main.app_view),schema.core.make_fn_schema.call(null,output_schema32867_32880,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32868_32881], null)));
pagentry.main.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__16602__auto__){return om.core.build.call(null,pagentry.main.app_view,cursor__16602__auto__);
});
var __GT_app_view__2 = (function (cursor__16602__auto__,m32866){return om.core.build.call(null,pagentry.main.app_view,cursor__16602__auto__,m32866);
});
__GT_app_view = function(cursor__16602__auto__,m32866){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__16602__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__16602__auto__,m32866);
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