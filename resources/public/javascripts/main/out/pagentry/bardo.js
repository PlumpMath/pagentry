// Compiled by ClojureScript 0.0-2227
goog.provide('pagentry.bardo');
goog.require('cljs.core');
goog.require('pagentry.ease');
goog.require('pagentry.interpolate');
goog.require('cljs.core.async');
goog.require('pagentry.interpolate');
goog.require('pagentry.ease');
goog.require('cljs_time.coerce');
goog.require('cljs_time.coerce');
goog.require('cljs_time.core');
goog.require('cljs_time.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
/**
* logs cljs stuff as js stuff for inspection
* @param {...*} var_args
*/
pagentry.bardo.log = (function() { 
var log__delegate = function (args){return console.log.apply(console,cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,cljs.core.clj__GT_js,args)));
};
var log = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,args);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__21462){
var args = cljs.core.seq(arglist__21462);
return log__delegate(args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
pagentry.bardo.time_since = (function time_since(time){var start = cljs_time.coerce.to_long.call(null,time);var now = cljs_time.coerce.to_long.call(null,cljs_time.core.now.call(null));return (now - start);
});
/**
* @param {...*} var_args
*/
pagentry.bardo.transition = (function() {
var transition = null;
var transition__2 = (function (state,target){return transition.call(null,state,target,500);
});
var transition__3 = (function (state,target,duration){return transition.call(null,state,target,duration,new cljs.core.Keyword(null,"cubic-in-out","cubic-in-out",3367258619));
});
var transition__5 = (function() { 
var G__21631__delegate = function (state,target,duration,easing,ease_args){var out = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var interpolator = pagentry.interpolate.interpolate.call(null,state,target);var ease_fn = pagentry.ease.ease.call(null,easing,ease_args);var start = cljs_time.core.now.call(null);var speed_target = 16;var speed_tolerance = 1;var speed_step = 0.5;var c__17563__auto___21632 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__17563__auto___21632,out,interpolator,ease_fn,start,speed_target,speed_tolerance,speed_step){
return (function (){var f__17564__auto__ = (function (){var switch__17548__auto__ = ((function (c__17563__auto___21632,out,interpolator,ease_fn,start,speed_target,speed_tolerance,speed_step){
return (function (state_21594){var state_val_21595 = (state_21594[1]);if((state_val_21595 === 1))
{var inst_21547 = start;var inst_21548 = speed_target;var state_21594__$1 = (function (){var statearr_21596 = state_21594;(statearr_21596[7] = inst_21548);
(statearr_21596[8] = inst_21547);
return statearr_21596;
})();var statearr_21597_21633 = state_21594__$1;(statearr_21597_21633[2] = null);
(statearr_21597_21633[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21595 === 2))
{var inst_21551 = (state_21594[9]);var inst_21550 = (state_21594[10]);var inst_21550__$1 = pagentry.bardo.time_since.call(null,start);var inst_21551__$1 = (inst_21550__$1 > duration);var state_21594__$1 = (function (){var statearr_21598 = state_21594;(statearr_21598[9] = inst_21551__$1);
(statearr_21598[10] = inst_21550__$1);
return statearr_21598;
})();if(cljs.core.truth_(inst_21551__$1))
{var statearr_21599_21634 = state_21594__$1;(statearr_21599_21634[1] = 4);
} else
{var statearr_21600_21635 = state_21594__$1;(statearr_21600_21635[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21595 === 3))
{var inst_21592 = (state_21594[2]);var state_21594__$1 = state_21594;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21594__$1,inst_21592);
} else
{if((state_val_21595 === 4))
{var state_21594__$1 = state_21594;var statearr_21601_21636 = state_21594__$1;(statearr_21601_21636[2] = 1);
(statearr_21601_21636[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21595 === 5))
{var inst_21550 = (state_21594[10]);var inst_21554 = (inst_21550 / duration);var inst_21555 = ease_fn.call(null,inst_21554);var state_21594__$1 = state_21594;var statearr_21602_21637 = state_21594__$1;(statearr_21602_21637[2] = inst_21555);
(statearr_21602_21637[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21595 === 6))
{var inst_21551 = (state_21594[9]);var inst_21557 = (state_21594[2]);var inst_21558 = ease_fn.call(null,inst_21557);var inst_21559 = interpolator.call(null,inst_21558);var inst_21560 = cljs.core.async.put_BANG_.call(null,out,inst_21559);var state_21594__$1 = (function (){var statearr_21603 = state_21594;(statearr_21603[11] = inst_21560);
return statearr_21603;
})();if(cljs.core.truth_(inst_21551))
{var statearr_21604_21638 = state_21594__$1;(statearr_21604_21638[1] = 7);
} else
{var statearr_21605_21639 = state_21594__$1;(statearr_21605_21639[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21595 === 7))
{var inst_21562 = cljs.core.async.close_BANG_.call(null,out);var state_21594__$1 = state_21594;var statearr_21606_21640 = state_21594__$1;(statearr_21606_21640[2] = inst_21562);
(statearr_21606_21640[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21595 === 8))
{var inst_21547 = (state_21594[8]);var inst_21564 = (state_21594[12]);var inst_21550 = (state_21594[10]);var inst_21564__$1 = (inst_21550 - inst_21547);var inst_21565 = (speed_target - speed_tolerance);var inst_21566 = (inst_21565 < inst_21564__$1);var inst_21567 = (speed_target + speed_tolerance);var inst_21568 = (inst_21564__$1 < inst_21567);var inst_21569 = (inst_21566) && (inst_21568);var state_21594__$1 = (function (){var statearr_21607 = state_21594;(statearr_21607[12] = inst_21564__$1);
return statearr_21607;
})();if(cljs.core.truth_(inst_21569))
{var statearr_21608_21641 = state_21594__$1;(statearr_21608_21641[1] = 10);
} else
{var statearr_21609_21642 = state_21594__$1;(statearr_21609_21642[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21595 === 9))
{var inst_21590 = (state_21594[2]);var state_21594__$1 = state_21594;var statearr_21610_21643 = state_21594__$1;(statearr_21610_21643[2] = inst_21590);
(statearr_21610_21643[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21595 === 10))
{var inst_21548 = (state_21594[7]);var state_21594__$1 = state_21594;var statearr_21611_21644 = state_21594__$1;(statearr_21611_21644[2] = inst_21548);
(statearr_21611_21644[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21595 === 11))
{var inst_21564 = (state_21594[12]);var inst_21572 = (speed_target < inst_21564);var state_21594__$1 = state_21594;if(cljs.core.truth_(inst_21572))
{var statearr_21612_21645 = state_21594__$1;(statearr_21612_21645[1] = 13);
} else
{var statearr_21613_21646 = state_21594__$1;(statearr_21613_21646[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21595 === 12))
{var inst_21548 = (state_21594[7]);var inst_21579 = (state_21594[2]);var inst_21580 = (0 < inst_21548);var state_21594__$1 = (function (){var statearr_21614 = state_21594;(statearr_21614[13] = inst_21579);
return statearr_21614;
})();if(cljs.core.truth_(inst_21580))
{var statearr_21615_21647 = state_21594__$1;(statearr_21615_21647[1] = 16);
} else
{var statearr_21616_21648 = state_21594__$1;(statearr_21616_21648[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21595 === 13))
{var state_21594__$1 = state_21594;var statearr_21617_21649 = state_21594__$1;(statearr_21617_21649[2] = cljs.core._);
(statearr_21617_21649[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21595 === 14))
{var state_21594__$1 = state_21594;var statearr_21618_21650 = state_21594__$1;(statearr_21618_21650[2] = cljs.core._PLUS_);
(statearr_21618_21650[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21595 === 15))
{var inst_21548 = (state_21594[7]);var inst_21576 = (state_21594[2]);var inst_21577 = inst_21576.call(null,inst_21548,speed_step);var state_21594__$1 = state_21594;var statearr_21619_21651 = state_21594__$1;(statearr_21619_21651[2] = inst_21577);
(statearr_21619_21651[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21595 === 16))
{var inst_21548 = (state_21594[7]);var inst_21582 = cljs.core.async.timeout.call(null,inst_21548);var state_21594__$1 = state_21594;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21594__$1,19,inst_21582);
} else
{if((state_val_21595 === 17))
{var state_21594__$1 = state_21594;var statearr_21620_21652 = state_21594__$1;(statearr_21620_21652[2] = null);
(statearr_21620_21652[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21595 === 18))
{var inst_21579 = (state_21594[13]);var inst_21550 = (state_21594[10]);var inst_21587 = (state_21594[2]);var inst_21547 = inst_21550;var inst_21548 = inst_21579;var state_21594__$1 = (function (){var statearr_21621 = state_21594;(statearr_21621[7] = inst_21548);
(statearr_21621[8] = inst_21547);
(statearr_21621[14] = inst_21587);
return statearr_21621;
})();var statearr_21622_21653 = state_21594__$1;(statearr_21622_21653[2] = null);
(statearr_21622_21653[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21595 === 19))
{var inst_21584 = (state_21594[2]);var state_21594__$1 = state_21594;var statearr_21623_21654 = state_21594__$1;(statearr_21623_21654[2] = inst_21584);
(statearr_21623_21654[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17563__auto___21632,out,interpolator,ease_fn,start,speed_target,speed_tolerance,speed_step))
;return ((function (switch__17548__auto__,c__17563__auto___21632,out,interpolator,ease_fn,start,speed_target,speed_tolerance,speed_step){
return (function() {
var state_machine__17549__auto__ = null;
var state_machine__17549__auto____0 = (function (){var statearr_21627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21627[0] = state_machine__17549__auto__);
(statearr_21627[1] = 1);
return statearr_21627;
});
var state_machine__17549__auto____1 = (function (state_21594){while(true){
var ret_value__17550__auto__ = (function (){try{while(true){
var result__17551__auto__ = switch__17548__auto__.call(null,state_21594);if(cljs.core.keyword_identical_QMARK_.call(null,result__17551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17551__auto__;
}
break;
}
}catch (e21628){if((e21628 instanceof Object))
{var ex__17552__auto__ = e21628;var statearr_21629_21655 = state_21594;(statearr_21629_21655[5] = ex__17552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21594);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21628;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21656 = state_21594;
state_21594 = G__21656;
continue;
}
} else
{return ret_value__17550__auto__;
}
break;
}
});
state_machine__17549__auto__ = function(state_21594){
switch(arguments.length){
case 0:
return state_machine__17549__auto____0.call(this);
case 1:
return state_machine__17549__auto____1.call(this,state_21594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17549__auto____0;
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17549__auto____1;
return state_machine__17549__auto__;
})()
;})(switch__17548__auto__,c__17563__auto___21632,out,interpolator,ease_fn,start,speed_target,speed_tolerance,speed_step))
})();var state__17565__auto__ = (function (){var statearr_21630 = f__17564__auto__.call(null);(statearr_21630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17563__auto___21632);
return statearr_21630;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17565__auto__);
});})(c__17563__auto___21632,out,interpolator,ease_fn,start,speed_target,speed_tolerance,speed_step))
);
return out;
};
var G__21631 = function (state,target,duration,easing,var_args){
var ease_args = null;if (arguments.length > 4) {
  ease_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__21631__delegate.call(this,state,target,duration,easing,ease_args);};
G__21631.cljs$lang$maxFixedArity = 4;
G__21631.cljs$lang$applyTo = (function (arglist__21657){
var state = cljs.core.first(arglist__21657);
arglist__21657 = cljs.core.next(arglist__21657);
var target = cljs.core.first(arglist__21657);
arglist__21657 = cljs.core.next(arglist__21657);
var duration = cljs.core.first(arglist__21657);
arglist__21657 = cljs.core.next(arglist__21657);
var easing = cljs.core.first(arglist__21657);
var ease_args = cljs.core.rest(arglist__21657);
return G__21631__delegate(state,target,duration,easing,ease_args);
});
G__21631.cljs$core$IFn$_invoke$arity$variadic = G__21631__delegate;
return G__21631;
})()
;
transition = function(state,target,duration,easing,var_args){
var ease_args = var_args;
switch(arguments.length){
case 2:
return transition__2.call(this,state,target);
case 3:
return transition__3.call(this,state,target,duration);
default:
return transition__5.cljs$core$IFn$_invoke$arity$variadic(state,target,duration,easing, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transition.cljs$lang$maxFixedArity = 4;
transition.cljs$lang$applyTo = transition__5.cljs$lang$applyTo;
transition.cljs$core$IFn$_invoke$arity$2 = transition__2;
transition.cljs$core$IFn$_invoke$arity$3 = transition__3;
transition.cljs$core$IFn$_invoke$arity$variadic = transition__5.cljs$core$IFn$_invoke$arity$variadic;
return transition;
})()
;
pagentry.bardo.log_transition = (function log_transition(t){var c__17563__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__17563__auto__){
return (function (){var f__17564__auto__ = (function (){var switch__17548__auto__ = ((function (c__17563__auto__){
return (function (state_21699){var state_val_21700 = (state_21699[1]);if((state_val_21700 === 7))
{var inst_21695 = (state_21699[2]);var state_21699__$1 = state_21699;var statearr_21701_21716 = state_21699__$1;(statearr_21701_21716[2] = inst_21695);
(statearr_21701_21716[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21700 === 6))
{var state_21699__$1 = state_21699;var statearr_21702_21717 = state_21699__$1;(statearr_21702_21717[2] = null);
(statearr_21702_21717[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21700 === 5))
{var inst_21689 = (state_21699[7]);var inst_21691 = pagentry.bardo.log.call(null,inst_21689);var state_21699__$1 = (function (){var statearr_21703 = state_21699;(statearr_21703[8] = inst_21691);
return statearr_21703;
})();var statearr_21704_21718 = state_21699__$1;(statearr_21704_21718[2] = null);
(statearr_21704_21718[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21700 === 4))
{var inst_21689 = (state_21699[7]);var inst_21689__$1 = (state_21699[2]);var state_21699__$1 = (function (){var statearr_21705 = state_21699;(statearr_21705[7] = inst_21689__$1);
return statearr_21705;
})();if(cljs.core.truth_(inst_21689__$1))
{var statearr_21706_21719 = state_21699__$1;(statearr_21706_21719[1] = 5);
} else
{var statearr_21707_21720 = state_21699__$1;(statearr_21707_21720[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21700 === 3))
{var inst_21697 = (state_21699[2]);var state_21699__$1 = state_21699;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21699__$1,inst_21697);
} else
{if((state_val_21700 === 2))
{var state_21699__$1 = state_21699;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21699__$1,4,t);
} else
{if((state_val_21700 === 1))
{var state_21699__$1 = state_21699;var statearr_21708_21721 = state_21699__$1;(statearr_21708_21721[2] = null);
(statearr_21708_21721[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__17563__auto__))
;return ((function (switch__17548__auto__,c__17563__auto__){
return (function() {
var state_machine__17549__auto__ = null;
var state_machine__17549__auto____0 = (function (){var statearr_21712 = [null,null,null,null,null,null,null,null,null];(statearr_21712[0] = state_machine__17549__auto__);
(statearr_21712[1] = 1);
return statearr_21712;
});
var state_machine__17549__auto____1 = (function (state_21699){while(true){
var ret_value__17550__auto__ = (function (){try{while(true){
var result__17551__auto__ = switch__17548__auto__.call(null,state_21699);if(cljs.core.keyword_identical_QMARK_.call(null,result__17551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17551__auto__;
}
break;
}
}catch (e21713){if((e21713 instanceof Object))
{var ex__17552__auto__ = e21713;var statearr_21714_21722 = state_21699;(statearr_21714_21722[5] = ex__17552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21699);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21713;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21723 = state_21699;
state_21699 = G__21723;
continue;
}
} else
{return ret_value__17550__auto__;
}
break;
}
});
state_machine__17549__auto__ = function(state_21699){
switch(arguments.length){
case 0:
return state_machine__17549__auto____0.call(this);
case 1:
return state_machine__17549__auto____1.call(this,state_21699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17549__auto____0;
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17549__auto____1;
return state_machine__17549__auto__;
})()
;})(switch__17548__auto__,c__17563__auto__))
})();var state__17565__auto__ = (function (){var statearr_21715 = f__17564__auto__.call(null);(statearr_21715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17563__auto__);
return statearr_21715;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17565__auto__);
});})(c__17563__auto__))
);
return c__17563__auto__;
});

//# sourceMappingURL=bardo.js.map