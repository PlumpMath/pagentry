// Compiled by ClojureScript 0.0-2227
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
figwheel.client.log_style = "color:rgb(0,128,0);";
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__27345,args){var map__27347 = p__27345;var map__27347__$1 = ((cljs.core.seq_QMARK_.call(null,map__27347))?cljs.core.apply.call(null,cljs.core.hash_map,map__27347):map__27347);var debug = cljs.core.get.call(null,map__27347__$1,new cljs.core.Keyword(null,"debug","debug",1109363141));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__27345,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__27345,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__27348){
var p__27345 = cljs.core.first(arglist__27348);
var args = cljs.core.rest(arglist__27348);
return log__delegate(p__27345,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__27349){var map__27351 = p__27349;var map__27351__$1 = ((cljs.core.seq_QMARK_.call(null,map__27351))?cljs.core.apply.call(null,cljs.core.hash_map,map__27351):map__27351);var websocket_url = cljs.core.get.call(null,map__27351__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__27352,callback){var map__27354 = p__27352;var map__27354__$1 = ((cljs.core.seq_QMARK_.call(null,map__27354))?cljs.core.apply.call(null,cljs.core.hash_map,map__27354):map__27354);var msg = map__27354__$1;var dependency_file = cljs.core.get.call(null,map__27354__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",2750516784));var namespace = cljs.core.get.call(null,map__27354__$1,new cljs.core.Keyword(null,"namespace","namespace",2266122445));var request_url = cljs.core.get.call(null,map__27354__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));if(cljs.core.truth_((function (){var or__11126__auto__ = dependency_file;if(cljs.core.truth_(or__11126__auto__))
{return or__11126__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__27354,map__27354__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__27354,map__27354__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__27355,p__27356){var map__27359 = p__27355;var map__27359__$1 = ((cljs.core.seq_QMARK_.call(null,map__27359))?cljs.core.apply.call(null,cljs.core.hash_map,map__27359):map__27359);var opts = map__27359__$1;var url_rewriter = cljs.core.get.call(null,map__27359__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174));var map__27360 = p__27356;var map__27360__$1 = ((cljs.core.seq_QMARK_.call(null,map__27360))?cljs.core.apply.call(null,cljs.core.hash_map,map__27360):map__27360);var d = map__27360__$1;var file = cljs.core.get.call(null,map__27360__$1,new cljs.core.Keyword(null,"file","file",1017047278));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2162835619),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__27361,p__27362){var map__27403 = p__27361;var map__27403__$1 = ((cljs.core.seq_QMARK_.call(null,map__27403))?cljs.core.apply.call(null,cljs.core.hash_map,map__27403):map__27403);var opts = map__27403__$1;var on_jsload = cljs.core.get.call(null,map__27403__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103));var before_jsload = cljs.core.get.call(null,map__27403__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831));var map__27404 = p__27362;var map__27404__$1 = ((cljs.core.seq_QMARK_.call(null,map__27404))?cljs.core.apply.call(null,cljs.core.hash_map,map__27404):map__27404);var files = cljs.core.get.call(null,map__27404__$1,new cljs.core.Keyword(null,"files","files",1111338473));var c__17563__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__17563__auto__,map__27403,map__27403__$1,opts,on_jsload,before_jsload,map__27404,map__27404__$1,files){
return (function (){var f__17564__auto__ = (function (){var switch__17548__auto__ = ((function (c__17563__auto__,map__27403,map__27403__$1,opts,on_jsload,before_jsload,map__27404,map__27404__$1,files){
return (function (state_27426){var state_val_27427 = (state_27426[1]);if((state_val_27427 === 6))
{var inst_27409 = (state_27426[7]);var inst_27418 = (state_27426[2]);var inst_27419 = [inst_27409];var inst_27420 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_27419,null));var inst_27421 = cljs.core.apply.call(null,on_jsload,inst_27420);var state_27426__$1 = (function (){var statearr_27428 = state_27426;(statearr_27428[8] = inst_27418);
return statearr_27428;
})();var statearr_27429_27443 = state_27426__$1;(statearr_27429_27443[2] = inst_27421);
(statearr_27429_27443[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27427 === 5))
{var inst_27424 = (state_27426[2]);var state_27426__$1 = state_27426;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27426__$1,inst_27424);
} else
{if((state_val_27427 === 4))
{var state_27426__$1 = state_27426;var statearr_27430_27444 = state_27426__$1;(statearr_27430_27444[2] = null);
(statearr_27430_27444[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27427 === 3))
{var inst_27409 = (state_27426[7]);var inst_27412 = console.log("%cFigwheel: loaded these files",figwheel.client.log_style);var inst_27413 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),inst_27409);var inst_27414 = cljs.core.prn_str.call(null,inst_27413);var inst_27415 = console.log(inst_27414);var inst_27416 = cljs.core.async.timeout.call(null,10);var state_27426__$1 = (function (){var statearr_27431 = state_27426;(statearr_27431[9] = inst_27412);
(statearr_27431[10] = inst_27415);
return statearr_27431;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27426__$1,6,inst_27416);
} else
{if((state_val_27427 === 2))
{var inst_27409 = (state_27426[7]);var inst_27409__$1 = (state_27426[2]);var inst_27410 = cljs.core.not_empty.call(null,inst_27409__$1);var state_27426__$1 = (function (){var statearr_27432 = state_27426;(statearr_27432[7] = inst_27409__$1);
return statearr_27432;
})();if(cljs.core.truth_(inst_27410))
{var statearr_27433_27445 = state_27426__$1;(statearr_27433_27445[1] = 3);
} else
{var statearr_27434_27446 = state_27426__$1;(statearr_27434_27446[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27427 === 1))
{var inst_27405 = before_jsload.call(null,files);var inst_27406 = figwheel.client.add_request_urls.call(null,opts,files);var inst_27407 = figwheel.client.load_all_js_files.call(null,inst_27406);var state_27426__$1 = (function (){var statearr_27435 = state_27426;(statearr_27435[11] = inst_27405);
return statearr_27435;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27426__$1,2,inst_27407);
} else
{return null;
}
}
}
}
}
}
});})(c__17563__auto__,map__27403,map__27403__$1,opts,on_jsload,before_jsload,map__27404,map__27404__$1,files))
;return ((function (switch__17548__auto__,c__17563__auto__,map__27403,map__27403__$1,opts,on_jsload,before_jsload,map__27404,map__27404__$1,files){
return (function() {
var state_machine__17549__auto__ = null;
var state_machine__17549__auto____0 = (function (){var statearr_27439 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27439[0] = state_machine__17549__auto__);
(statearr_27439[1] = 1);
return statearr_27439;
});
var state_machine__17549__auto____1 = (function (state_27426){while(true){
var ret_value__17550__auto__ = (function (){try{while(true){
var result__17551__auto__ = switch__17548__auto__.call(null,state_27426);if(cljs.core.keyword_identical_QMARK_.call(null,result__17551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17551__auto__;
}
break;
}
}catch (e27440){if((e27440 instanceof Object))
{var ex__17552__auto__ = e27440;var statearr_27441_27447 = state_27426;(statearr_27441_27447[5] = ex__17552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27426);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27440;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27448 = state_27426;
state_27426 = G__27448;
continue;
}
} else
{return ret_value__17550__auto__;
}
break;
}
});
state_machine__17549__auto__ = function(state_27426){
switch(arguments.length){
case 0:
return state_machine__17549__auto____0.call(this);
case 1:
return state_machine__17549__auto____1.call(this,state_27426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17549__auto____0;
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17549__auto____1;
return state_machine__17549__auto__;
})()
;})(switch__17548__auto__,c__17563__auto__,map__27403,map__27403__$1,opts,on_jsload,before_jsload,map__27404,map__27404__$1,files))
})();var state__17565__auto__ = (function (){var statearr_27442 = f__17564__auto__.call(null);(statearr_27442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17563__auto__);
return statearr_27442;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17565__auto__);
});})(c__17563__auto__,map__27403,map__27403__$1,opts,on_jsload,before_jsload,map__27404,map__27404__$1,files))
);
return c__17563__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__27449,link_href){var map__27451 = p__27449;var map__27451__$1 = ((cljs.core.seq_QMARK_.call(null,map__27451))?cljs.core.apply.call(null,cljs.core.hash_map,map__27451):map__27451);var request_url = cljs.core.get.call(null,map__27451__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__27451__$1,new cljs.core.Keyword(null,"file","file",1017047278));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[0]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__17563__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__17563__auto__,parent){
return (function (){var f__17564__auto__ = (function (){var switch__17548__auto__ = ((function (c__17563__auto__,parent){
return (function (state_27472){var state_val_27473 = (state_27472[1]);if((state_val_27473 === 2))
{var inst_27469 = (state_27472[2]);var inst_27470 = parent.removeChild(orig_link);var state_27472__$1 = (function (){var statearr_27474 = state_27472;(statearr_27474[7] = inst_27469);
return statearr_27474;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27472__$1,inst_27470);
} else
{if((state_val_27473 === 1))
{var inst_27467 = cljs.core.async.timeout.call(null,200);var state_27472__$1 = state_27472;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27472__$1,2,inst_27467);
} else
{return null;
}
}
});})(c__17563__auto__,parent))
;return ((function (switch__17548__auto__,c__17563__auto__,parent){
return (function() {
var state_machine__17549__auto__ = null;
var state_machine__17549__auto____0 = (function (){var statearr_27478 = [null,null,null,null,null,null,null,null];(statearr_27478[0] = state_machine__17549__auto__);
(statearr_27478[1] = 1);
return statearr_27478;
});
var state_machine__17549__auto____1 = (function (state_27472){while(true){
var ret_value__17550__auto__ = (function (){try{while(true){
var result__17551__auto__ = switch__17548__auto__.call(null,state_27472);if(cljs.core.keyword_identical_QMARK_.call(null,result__17551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17551__auto__;
}
break;
}
}catch (e27479){if((e27479 instanceof Object))
{var ex__17552__auto__ = e27479;var statearr_27480_27482 = state_27472;(statearr_27480_27482[5] = ex__17552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27472);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27479;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27483 = state_27472;
state_27472 = G__27483;
continue;
}
} else
{return ret_value__17550__auto__;
}
break;
}
});
state_machine__17549__auto__ = function(state_27472){
switch(arguments.length){
case 0:
return state_machine__17549__auto____0.call(this);
case 1:
return state_machine__17549__auto____1.call(this,state_27472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17549__auto____0;
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17549__auto____1;
return state_machine__17549__auto__;
})()
;})(switch__17548__auto__,c__17563__auto__,parent))
})();var state__17565__auto__ = (function (){var statearr_27481 = f__17564__auto__.call(null);(statearr_27481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17563__auto__);
return statearr_27481;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17565__auto__);
});})(c__17563__auto__,parent))
);
return c__17563__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__27484){var map__27486 = p__27484;var map__27486__$1 = ((cljs.core.seq_QMARK_.call(null,map__27486))?cljs.core.apply.call(null,cljs.core.hash_map,map__27486):map__27486);var f_data = map__27486__$1;var request_url = cljs.core.get.call(null,map__27486__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__27486__$1,new cljs.core.Keyword(null,"file","file",1017047278));var temp__4090__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4090__auto__))
{var link = temp__4090__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__27487,files_msg){var map__27509 = p__27487;var map__27509__$1 = ((cljs.core.seq_QMARK_.call(null,map__27509))?cljs.core.apply.call(null,cljs.core.hash_map,map__27509):map__27509);var opts = map__27509__$1;var on_cssload = cljs.core.get.call(null,map__27509__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789));var seq__27510_27530 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__27511_27531 = null;var count__27512_27532 = 0;var i__27513_27533 = 0;while(true){
if((i__27513_27533 < count__27512_27532))
{var f_27534 = cljs.core._nth.call(null,chunk__27511_27531,i__27513_27533);figwheel.client.reload_css_file.call(null,f_27534);
{
var G__27535 = seq__27510_27530;
var G__27536 = chunk__27511_27531;
var G__27537 = count__27512_27532;
var G__27538 = (i__27513_27533 + 1);
seq__27510_27530 = G__27535;
chunk__27511_27531 = G__27536;
count__27512_27532 = G__27537;
i__27513_27533 = G__27538;
continue;
}
} else
{var temp__4092__auto___27539 = cljs.core.seq.call(null,seq__27510_27530);if(temp__4092__auto___27539)
{var seq__27510_27540__$1 = temp__4092__auto___27539;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27510_27540__$1))
{var c__11882__auto___27541 = cljs.core.chunk_first.call(null,seq__27510_27540__$1);{
var G__27542 = cljs.core.chunk_rest.call(null,seq__27510_27540__$1);
var G__27543 = c__11882__auto___27541;
var G__27544 = cljs.core.count.call(null,c__11882__auto___27541);
var G__27545 = 0;
seq__27510_27530 = G__27542;
chunk__27511_27531 = G__27543;
count__27512_27532 = G__27544;
i__27513_27533 = G__27545;
continue;
}
} else
{var f_27546 = cljs.core.first.call(null,seq__27510_27540__$1);figwheel.client.reload_css_file.call(null,f_27546);
{
var G__27547 = cljs.core.next.call(null,seq__27510_27540__$1);
var G__27548 = null;
var G__27549 = 0;
var G__27550 = 0;
seq__27510_27530 = G__27547;
chunk__27511_27531 = G__27548;
count__27512_27532 = G__27549;
i__27513_27533 = G__27550;
continue;
}
}
} else
{}
}
break;
}
var c__17563__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__17563__auto__,map__27509,map__27509__$1,opts,on_cssload){
return (function (){var f__17564__auto__ = (function (){var switch__17548__auto__ = ((function (c__17563__auto__,map__27509,map__27509__$1,opts,on_cssload){
return (function (state_27520){var state_val_27521 = (state_27520[1]);if((state_val_27521 === 2))
{var inst_27516 = (state_27520[2]);var inst_27517 = new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_27518 = on_cssload.call(null,inst_27517);var state_27520__$1 = (function (){var statearr_27522 = state_27520;(statearr_27522[7] = inst_27516);
return statearr_27522;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27520__$1,inst_27518);
} else
{if((state_val_27521 === 1))
{var inst_27514 = cljs.core.async.timeout.call(null,100);var state_27520__$1 = state_27520;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27520__$1,2,inst_27514);
} else
{return null;
}
}
});})(c__17563__auto__,map__27509,map__27509__$1,opts,on_cssload))
;return ((function (switch__17548__auto__,c__17563__auto__,map__27509,map__27509__$1,opts,on_cssload){
return (function() {
var state_machine__17549__auto__ = null;
var state_machine__17549__auto____0 = (function (){var statearr_27526 = [null,null,null,null,null,null,null,null];(statearr_27526[0] = state_machine__17549__auto__);
(statearr_27526[1] = 1);
return statearr_27526;
});
var state_machine__17549__auto____1 = (function (state_27520){while(true){
var ret_value__17550__auto__ = (function (){try{while(true){
var result__17551__auto__ = switch__17548__auto__.call(null,state_27520);if(cljs.core.keyword_identical_QMARK_.call(null,result__17551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17551__auto__;
}
break;
}
}catch (e27527){if((e27527 instanceof Object))
{var ex__17552__auto__ = e27527;var statearr_27528_27551 = state_27520;(statearr_27528_27551[5] = ex__17552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27520);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27527;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27552 = state_27520;
state_27520 = G__27552;
continue;
}
} else
{return ret_value__17550__auto__;
}
break;
}
});
state_machine__17549__auto__ = function(state_27520){
switch(arguments.length){
case 0:
return state_machine__17549__auto____0.call(this);
case 1:
return state_machine__17549__auto____1.call(this,state_27520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17549__auto____0;
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17549__auto____1;
return state_machine__17549__auto__;
})()
;})(switch__17548__auto__,c__17563__auto__,map__27509,map__27509__$1,opts,on_cssload))
})();var state__17565__auto__ = (function (){var statearr_27529 = f__17564__auto__.call(null);(statearr_27529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17563__auto__);
return statearr_27529;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17565__auto__);
});})(c__17563__auto__,map__27509,map__27509__$1,opts,on_cssload))
);
return c__17563__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",3979112649)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__27553){var map__27558 = p__27553;var map__27558__$1 = ((cljs.core.seq_QMARK_.call(null,map__27558))?cljs.core.apply.call(null,cljs.core.hash_map,map__27558):map__27558);var opts = map__27558__$1;var on_compile_fail = cljs.core.get.call(null,map__27558__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160));var jsload_callback = cljs.core.get.call(null,map__27558__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__27558__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__27558__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));console.log("%cFigwheel: trying to open cljs reload socket",figwheel.client.log_style);
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__27558,map__27558__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__27559 = cljs.core._EQ_;var expr__27560 = new cljs.core.Keyword(null,"msg-name","msg-name",3979112649).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__27559.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",2807270608),expr__27560)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__27559.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",1058553478),expr__27560)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__27559.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569),expr__27560)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__27558,map__27558__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__27558,map__27558__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.log("%cFigwheel: socket connection established",figwheel.client.log_style);
});})(socket,map__27558,map__27558__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__27558,map__27558__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > 0))
{return window.setTimeout(((function (socket,map__27558,map__27558__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),(retry_count - 1)));
});})(socket,map__27558,map__27558__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,2000);
} else
{return null;
}
});})(socket,map__27558,map__27558__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__27558,map__27558__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__27558,map__27558__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj27565 = {"detail":url};return obj27565;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"class","class",1108647146)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",1108338651).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__27566){var map__27568 = p__27566;var map__27568__$1 = ((cljs.core.seq_QMARK_.call(null,map__27568))?cljs.core.apply.call(null,cljs.core.hash_map,map__27568):map__27568);var class$ = cljs.core.get.call(null,map__27568__$1,new cljs.core.Keyword(null,"class","class",1108647146));var message = cljs.core.get.call(null,map__27568__$1,new cljs.core.Keyword(null,"message","message",1968829305));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__27569){var map__27575 = p__27569;var map__27575__$1 = ((cljs.core.seq_QMARK_.call(null,map__27575))?cljs.core.apply.call(null,cljs.core.hash_map,map__27575):map__27575);var ed = map__27575__$1;var exception_data = cljs.core.get.call(null,map__27575__$1,new cljs.core.Keyword(null,"exception-data","exception-data",922291674));var formatted_exception = cljs.core.get.call(null,map__27575__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",1408867312));console.log("%cFigwheel: Compile Exception",figwheel.client.log_style);
var seq__27576_27580 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__27577_27581 = null;var count__27578_27582 = 0;var i__27579_27583 = 0;while(true){
if((i__27579_27583 < count__27578_27582))
{var msg_27584 = cljs.core._nth.call(null,chunk__27577_27581,i__27579_27583);console.log(msg_27584);
{
var G__27585 = seq__27576_27580;
var G__27586 = chunk__27577_27581;
var G__27587 = count__27578_27582;
var G__27588 = (i__27579_27583 + 1);
seq__27576_27580 = G__27585;
chunk__27577_27581 = G__27586;
count__27578_27582 = G__27587;
i__27579_27583 = G__27588;
continue;
}
} else
{var temp__4092__auto___27589 = cljs.core.seq.call(null,seq__27576_27580);if(temp__4092__auto___27589)
{var seq__27576_27590__$1 = temp__4092__auto___27589;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27576_27590__$1))
{var c__11882__auto___27591 = cljs.core.chunk_first.call(null,seq__27576_27590__$1);{
var G__27592 = cljs.core.chunk_rest.call(null,seq__27576_27590__$1);
var G__27593 = c__11882__auto___27591;
var G__27594 = cljs.core.count.call(null,c__11882__auto___27591);
var G__27595 = 0;
seq__27576_27580 = G__27592;
chunk__27577_27581 = G__27593;
count__27578_27582 = G__27594;
i__27579_27583 = G__27595;
continue;
}
} else
{var msg_27596 = cljs.core.first.call(null,seq__27576_27590__$1);console.log(msg_27596);
{
var G__27597 = cljs.core.next.call(null,seq__27576_27590__$1);
var G__27598 = null;
var G__27599 = 0;
var G__27600 = 0;
seq__27576_27580 = G__27597;
chunk__27577_27581 = G__27598;
count__27578_27582 = G__27599;
i__27579_27583 = G__27600;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.log("%cFigwheel: loading files",figwheel.client.log_style);
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.log("%cFigwheel: loaded CSS files",figwheel.client.log_style);
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),100,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103),(function (){var or__11126__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__11126__auto__))
{return or__11126__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__27601){var map__27603 = p__27601;var map__27603__$1 = ((cljs.core.seq_QMARK_.call(null,map__27603))?cljs.core.apply.call(null,cljs.core.hash_map,map__27603):map__27603);var opts = map__27603__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__27601 = null;if (arguments.length > 0) {
  p__27601 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__27601);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__27604){
var p__27601 = cljs.core.seq(arglist__27604);
return watch_and_reload__delegate(p__27601);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map