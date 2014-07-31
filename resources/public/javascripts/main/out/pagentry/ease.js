// Compiled by ClojureScript 0.0-2227
goog.provide('pagentry.ease');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
pagentry.ease.clamp = (function clamp(f){return (function (t){if((t < 0))
{return 0;
} else
{if((1 < t))
{return 1;
} else
{return f.call(null,t);
}
}
});
});
pagentry.ease.reverse = (function reverse(f){return (function (t){return (1 - f.call(null,(1 - t)));
});
});
pagentry.ease.reflect = (function reflect(f){return (function (t){return (0.5 * (((t < 0.5))?f.call(null,(2 * t)):(2 - f.call(null,(2 - (2 * t))))));
});
});
pagentry.ease.modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"in","in",1013907607),cljs.core.identity,new cljs.core.Keyword(null,"out","out",1014014656),pagentry.ease.reverse,new cljs.core.Keyword(null,"in-out","in-out",4123003416),pagentry.ease.reflect,new cljs.core.Keyword(null,"out-in","out-in",4303294326),cljs.core.comp.call(null,pagentry.ease.reflect,pagentry.ease.reverse)], null);
pagentry.ease.PI = Math.PI;
pagentry.ease.PI_2 = (Math.PI / 2);
/**
* Modeled after the parabola y = x^2
*/
pagentry.ease.quad = (function quad(t){return (t * t);
});
/**
* Modeled after the cubic y = x^3
*/
pagentry.ease.cubic = (function cubic(t){return ((t * t) * t);
});
pagentry.ease.poly = (function poly(e){return (function (t){return Math.pow(t,e);
});
});
/**
* Modeled after quarter-cycle of sine wave
*/
pagentry.ease.sine = (function sine(t){return (Math.sin(((t - 1) * pagentry.ease.PI_2)) + 1);
});
/**
* Modeled after shifted quadrant IV of unit circle
*/
pagentry.ease.circle = (function circle(t){return (1 - Math.sqrt((1 - (t * t))));
});
/**
* Modeled after the exponential function y = 2^(10(x - 1))
*/
pagentry.ease.exp = (function exp(t){if(cljs.core._EQ_.call(null,t,0))
{return t;
} else
{return Math.pow(2,(10 * (t - 1)));
}
});
/**
* Modeled after the damped sine wave y = sin(13PI_2*x)*pow(2, 10 * (x - 1))
*/
pagentry.ease.elastic = (function elastic(t){return (Math.sin(((13 * pagentry.ease.PI_2) * t)) * Math.pow(2,(10 * (t - 1))));
});
/**
* Modeled after the overshooting cubic y = x^3-x*sin(x*pi)
*/
pagentry.ease.back = (function back(t){return (((t * t) * t) - (t * Math.sin((t * pagentry.ease.PI))));
});
/**
* Modeled after some fun bouncing stuff
*/
pagentry.ease.bounce = (function bounce(t){if((t < (1 / 2.75)))
{return ((7.5625 * t) * t);
} else
{if((t < (2 / 2.75)))
{return (((7.5625 * (t - (1.5 / 2.75))) * (t - (1.5 / 2.75))) + 0.75);
} else
{if((t < (2.5 / 2.75)))
{return (((7.5625 * (t - (2.5 / 2.75))) * (t - (2.5 / 2.75))) + 0.9375);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (((7.5625 * (t - (2.625 / 2.75))) * (t - (2.625 / 2.75))) + 0.984375);
} else
{return null;
}
}
}
}
});
pagentry.ease.ease_fns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"linear","linear",4206199447),new cljs.core.Keyword(null,"quad","quad",1017386169),new cljs.core.Keyword(null,"sine","sine",1017434623),new cljs.core.Keyword(null,"bounce","bounce",3925666298),new cljs.core.Keyword(null,"back","back",1016920153),new cljs.core.Keyword(null,"elastic","elastic",3642533447),new cljs.core.Keyword(null,"circle","circle",3948654658),new cljs.core.Keyword(null,"exp","exp",1014005135),new cljs.core.Keyword(null,"poly","poly",1017350974),new cljs.core.Keyword(null,"cubic","cubic",1108915900)],[cljs.core.constantly.call(null,cljs.core.identity),cljs.core.constantly.call(null,pagentry.ease.quad),cljs.core.constantly.call(null,pagentry.ease.sine),cljs.core.constantly.call(null,pagentry.ease.bounce),cljs.core.constantly.call(null,pagentry.ease.back),cljs.core.constantly.call(null,pagentry.ease.elastic),cljs.core.constantly.call(null,pagentry.ease.circle),cljs.core.constantly.call(null,pagentry.ease.exp),pagentry.ease.poly,cljs.core.constantly.call(null,pagentry.ease.cubic)]);
/**
* @param {...*} var_args
*/
pagentry.ease.ease = (function() { 
var ease__delegate = function (key,args){var vec__21725 = clojure.string.split.call(null,cljs.core.name.call(null,key),"-");var fn = cljs.core.nth.call(null,vec__21725,0,null);var start = cljs.core.nth.call(null,vec__21725,1,null);var end = cljs.core.nth.call(null,vec__21725,2,null);var ease_fn = (function (){var or__11126__auto__ = cljs.core.get.call(null,pagentry.ease.ease_fns,cljs.core.keyword.call(null,fn));if(cljs.core.truth_(or__11126__auto__))
{return or__11126__auto__;
} else
{return cljs.core.identity;
}
})();var mode = (function (){var or__11126__auto__ = cljs.core.get.call(null,pagentry.ease.modes,cljs.core.keyword.call(null,clojure.string.join.call(null,"-",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null))));if(cljs.core.truth_(or__11126__auto__))
{return or__11126__auto__;
} else
{return cljs.core.identity;
}
})();return cljs.core.comp.call(null,pagentry.ease.clamp,mode).call(null,cljs.core.apply.call(null,ease_fn,args));
};
var ease = function (key,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return ease__delegate.call(this,key,args);};
ease.cljs$lang$maxFixedArity = 1;
ease.cljs$lang$applyTo = (function (arglist__21726){
var key = cljs.core.first(arglist__21726);
var args = cljs.core.rest(arglist__21726);
return ease__delegate(key,args);
});
ease.cljs$core$IFn$_invoke$arity$variadic = ease__delegate;
return ease;
})()
;

//# sourceMappingURL=ease.js.map