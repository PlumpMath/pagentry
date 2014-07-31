// Compiled by ClojureScript 0.0-2227
goog.provide('pagentry.animation');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om_tools.core');
goog.require('cljs.core.async');
goog.require('goog.fx.easing');
goog.require('goog.events');
goog.require('goog.debug');
goog.require('cljs.reader');
goog.require('goog.dom');
goog.require('om_tools.dom');
goog.require('om.core');
goog.require('goog.dom');
goog.require('om.core');
goog.require('pagentry.bardo');
goog.require('pagentry.bardo');
goog.require('om.dom');
goog.require('om.dom');
goog.require('cljs.reader');
goog.require('om_tools.dom');
goog.require('cljs.core.async');
goog.require('goog.fx.easing');
goog.require('goog.events');
goog.require('goog.debug');
pagentry.animation.tween_state = (function tween_state(owner,bardo,key){var c__17563__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__17563__auto__){
return (function (){var f__17564__auto__ = (function (){var switch__17548__auto__ = ((function (c__17563__auto__){
return (function (state_21218){var state_val_21219 = (state_21218[1]);if((state_val_21219 === 7))
{var inst_21214 = (state_21218[2]);var state_21218__$1 = state_21218;var statearr_21220_21235 = state_21218__$1;(statearr_21220_21235[2] = inst_21214);
(statearr_21220_21235[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21219 === 6))
{var state_21218__$1 = state_21218;var statearr_21221_21236 = state_21218__$1;(statearr_21221_21236[2] = null);
(statearr_21221_21236[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21219 === 5))
{var inst_21208 = (state_21218[7]);var inst_21210 = om.core.set_state_BANG_.call(null,owner,key,inst_21208);var state_21218__$1 = (function (){var statearr_21222 = state_21218;(statearr_21222[8] = inst_21210);
return statearr_21222;
})();var statearr_21223_21237 = state_21218__$1;(statearr_21223_21237[2] = null);
(statearr_21223_21237[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21219 === 4))
{var inst_21208 = (state_21218[7]);var inst_21208__$1 = (state_21218[2]);var state_21218__$1 = (function (){var statearr_21224 = state_21218;(statearr_21224[7] = inst_21208__$1);
return statearr_21224;
})();if(cljs.core.truth_(inst_21208__$1))
{var statearr_21225_21238 = state_21218__$1;(statearr_21225_21238[1] = 5);
} else
{var statearr_21226_21239 = state_21218__$1;(statearr_21226_21239[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21219 === 3))
{var inst_21216 = (state_21218[2]);var state_21218__$1 = state_21218;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21218__$1,inst_21216);
} else
{if((state_val_21219 === 2))
{var state_21218__$1 = state_21218;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21218__$1,4,bardo);
} else
{if((state_val_21219 === 1))
{var state_21218__$1 = state_21218;var statearr_21227_21240 = state_21218__$1;(statearr_21227_21240[2] = null);
(statearr_21227_21240[1] = 2);
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
var state_machine__17549__auto____0 = (function (){var statearr_21231 = [null,null,null,null,null,null,null,null,null];(statearr_21231[0] = state_machine__17549__auto__);
(statearr_21231[1] = 1);
return statearr_21231;
});
var state_machine__17549__auto____1 = (function (state_21218){while(true){
var ret_value__17550__auto__ = (function (){try{while(true){
var result__17551__auto__ = switch__17548__auto__.call(null,state_21218);if(cljs.core.keyword_identical_QMARK_.call(null,result__17551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17551__auto__;
}
break;
}
}catch (e21232){if((e21232 instanceof Object))
{var ex__17552__auto__ = e21232;var statearr_21233_21241 = state_21218;(statearr_21233_21241[5] = ex__17552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21218);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21232;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21242 = state_21218;
state_21218 = G__21242;
continue;
}
} else
{return ret_value__17550__auto__;
}
break;
}
});
state_machine__17549__auto__ = function(state_21218){
switch(arguments.length){
case 0:
return state_machine__17549__auto____0.call(this);
case 1:
return state_machine__17549__auto____1.call(this,state_21218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17549__auto____0;
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17549__auto____1;
return state_machine__17549__auto__;
})()
;})(switch__17548__auto__,c__17563__auto__))
})();var state__17565__auto__ = (function (){var statearr_21234 = f__17564__auto__.call(null);(statearr_21234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17563__auto__);
return statearr_21234;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17565__auto__);
});})(c__17563__auto__))
);
return c__17563__auto__;
});
pagentry.animation.delta = (function delta(on_key,prevstate,currstate,p__21243,length,trans,owner,state_key){var vec__21245 = p__21243;var a = cljs.core.nth.call(null,vec__21245,0,null);var b = cljs.core.nth.call(null,vec__21245,1,null);if(cljs.core._EQ_.call(null,on_key.call(null,prevstate),on_key.call(null,currstate)))
{return null;
} else
{if(cljs.core.truth_(on_key.call(null,currstate)))
{return pagentry.animation.tween_state.call(null,owner,pagentry.bardo.transition.call(null,a,b,length,trans),state_key);
} else
{return pagentry.animation.tween_state.call(null,owner,pagentry.bardo.transition.call(null,b,a,length,trans),state_key);
}
}
});

//# sourceMappingURL=animation.js.map