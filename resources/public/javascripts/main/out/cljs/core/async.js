// Compiled by ClojureScript 0.0-2227
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24309 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24309 = (function (f,fn_handler,meta24310){
this.f = f;
this.fn_handler = fn_handler;
this.meta24310 = meta24310;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24309.cljs$lang$type = true;
cljs.core.async.t24309.cljs$lang$ctorStr = "cljs.core.async/t24309";
cljs.core.async.t24309.cljs$lang$ctorPrWriter = (function (this__11693__auto__,writer__11694__auto__,opt__11695__auto__){return cljs.core._write.call(null,writer__11694__auto__,"cljs.core.async/t24309");
});
cljs.core.async.t24309.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24309.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24309.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24309.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24311){var self__ = this;
var _24311__$1 = this;return self__.meta24310;
});
cljs.core.async.t24309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24311,meta24310__$1){var self__ = this;
var _24311__$1 = this;return (new cljs.core.async.t24309(self__.f,self__.fn_handler,meta24310__$1));
});
cljs.core.async.__GT_t24309 = (function __GT_t24309(f__$1,fn_handler__$1,meta24310){return (new cljs.core.async.t24309(f__$1,fn_handler__$1,meta24310));
});
}
return (new cljs.core.async.t24309(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24313 = buff;if(G__24313)
{var bit__11776__auto__ = null;if(cljs.core.truth_((function (){var or__11126__auto__ = bit__11776__auto__;if(cljs.core.truth_(or__11126__auto__))
{return or__11126__auto__;
} else
{return G__24313.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24313.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24313);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24313);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_24314 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_24314);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_24314,ret){
return (function (){return fn1.call(null,val_24314);
});})(val_24314,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4090__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4090__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__11982__auto___24315 = n;var x_24316 = 0;while(true){
if((x_24316 < n__11982__auto___24315))
{(a[x_24316] = 0);
{
var G__24317 = (x_24316 + 1);
x_24316 = G__24317;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__24318 = (i + 1);
i = G__24318;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t24322 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24322 = (function (flag,alt_flag,meta24323){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24323 = meta24323;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24322.cljs$lang$type = true;
cljs.core.async.t24322.cljs$lang$ctorStr = "cljs.core.async/t24322";
cljs.core.async.t24322.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__11693__auto__,writer__11694__auto__,opt__11695__auto__){return cljs.core._write.call(null,writer__11694__auto__,"cljs.core.async/t24322");
});})(flag))
;
cljs.core.async.t24322.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24322.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t24322.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t24322.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24324){var self__ = this;
var _24324__$1 = this;return self__.meta24323;
});})(flag))
;
cljs.core.async.t24322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24324,meta24323__$1){var self__ = this;
var _24324__$1 = this;return (new cljs.core.async.t24322(self__.flag,self__.alt_flag,meta24323__$1));
});})(flag))
;
cljs.core.async.__GT_t24322 = ((function (flag){
return (function __GT_t24322(flag__$1,alt_flag__$1,meta24323){return (new cljs.core.async.t24322(flag__$1,alt_flag__$1,meta24323));
});})(flag))
;
}
return (new cljs.core.async.t24322(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24328 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24328 = (function (cb,flag,alt_handler,meta24329){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24329 = meta24329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24328.cljs$lang$type = true;
cljs.core.async.t24328.cljs$lang$ctorStr = "cljs.core.async/t24328";
cljs.core.async.t24328.cljs$lang$ctorPrWriter = (function (this__11693__auto__,writer__11694__auto__,opt__11695__auto__){return cljs.core._write.call(null,writer__11694__auto__,"cljs.core.async/t24328");
});
cljs.core.async.t24328.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24328.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t24328.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t24328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24330){var self__ = this;
var _24330__$1 = this;return self__.meta24329;
});
cljs.core.async.t24328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24330,meta24329__$1){var self__ = this;
var _24330__$1 = this;return (new cljs.core.async.t24328(self__.cb,self__.flag,self__.alt_handler,meta24329__$1));
});
cljs.core.async.__GT_t24328 = (function __GT_t24328(cb__$1,flag__$1,alt_handler__$1,meta24329){return (new cljs.core.async.t24328(cb__$1,flag__$1,alt_handler__$1,meta24329));
});
}
return (new cljs.core.async.t24328(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24331_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24331_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24332_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24332_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__11126__auto__ = wport;if(cljs.core.truth_(or__11126__auto__))
{return or__11126__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__24333 = (i + 1);
i = G__24333;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__11126__auto__ = ret;if(cljs.core.truth_(or__11126__auto__))
{return or__11126__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__11114__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__11114__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__11114__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__24334){var map__24336 = p__24334;var map__24336__$1 = ((cljs.core.seq_QMARK_.call(null,map__24336))?cljs.core.apply.call(null,cljs.core.hash_map,map__24336):map__24336);var opts = map__24336__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__24334 = null;if (arguments.length > 1) {
  p__24334 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24334);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24337){
var ports = cljs.core.first(arglist__24337);
var p__24334 = cljs.core.rest(arglist__24337);
return alts_BANG___delegate(ports,p__24334);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24345 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24345 = (function (ch,f,map_LT_,meta24346){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24346 = meta24346;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24345.cljs$lang$type = true;
cljs.core.async.t24345.cljs$lang$ctorStr = "cljs.core.async/t24345";
cljs.core.async.t24345.cljs$lang$ctorPrWriter = (function (this__11693__auto__,writer__11694__auto__,opt__11695__auto__){return cljs.core._write.call(null,writer__11694__auto__,"cljs.core.async/t24345");
});
cljs.core.async.t24345.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24345.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t24345.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24345.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t24348 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24348 = (function (fn1,_,meta24346,ch,f,map_LT_,meta24349){
this.fn1 = fn1;
this._ = _;
this.meta24346 = meta24346;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24349 = meta24349;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24348.cljs$lang$type = true;
cljs.core.async.t24348.cljs$lang$ctorStr = "cljs.core.async/t24348";
cljs.core.async.t24348.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__11693__auto__,writer__11694__auto__,opt__11695__auto__){return cljs.core._write.call(null,writer__11694__auto__,"cljs.core.async/t24348");
});})(___$1))
;
cljs.core.async.t24348.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24348.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t24348.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t24348.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__24338_SHARP_){return f1.call(null,(((p1__24338_SHARP_ == null))?null:self__.f.call(null,p1__24338_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t24348.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24350){var self__ = this;
var _24350__$1 = this;return self__.meta24349;
});})(___$1))
;
cljs.core.async.t24348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24350,meta24349__$1){var self__ = this;
var _24350__$1 = this;return (new cljs.core.async.t24348(self__.fn1,self__._,self__.meta24346,self__.ch,self__.f,self__.map_LT_,meta24349__$1));
});})(___$1))
;
cljs.core.async.__GT_t24348 = ((function (___$1){
return (function __GT_t24348(fn1__$1,___$2,meta24346__$1,ch__$2,f__$2,map_LT___$2,meta24349){return (new cljs.core.async.t24348(fn1__$1,___$2,meta24346__$1,ch__$2,f__$2,map_LT___$2,meta24349));
});})(___$1))
;
}
return (new cljs.core.async.t24348(fn1,___$1,self__.meta24346,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__11114__auto__ = ret;if(cljs.core.truth_(and__11114__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__11114__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t24345.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24345.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24345.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t24345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24347){var self__ = this;
var _24347__$1 = this;return self__.meta24346;
});
cljs.core.async.t24345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24347,meta24346__$1){var self__ = this;
var _24347__$1 = this;return (new cljs.core.async.t24345(self__.ch,self__.f,self__.map_LT_,meta24346__$1));
});
cljs.core.async.__GT_t24345 = (function __GT_t24345(ch__$1,f__$1,map_LT___$1,meta24346){return (new cljs.core.async.t24345(ch__$1,f__$1,map_LT___$1,meta24346));
});
}
return (new cljs.core.async.t24345(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24354 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24354 = (function (ch,f,map_GT_,meta24355){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24355 = meta24355;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24354.cljs$lang$type = true;
cljs.core.async.t24354.cljs$lang$ctorStr = "cljs.core.async/t24354";
cljs.core.async.t24354.cljs$lang$ctorPrWriter = (function (this__11693__auto__,writer__11694__auto__,opt__11695__auto__){return cljs.core._write.call(null,writer__11694__auto__,"cljs.core.async/t24354");
});
cljs.core.async.t24354.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24354.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t24354.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24354.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t24354.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24354.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24356){var self__ = this;
var _24356__$1 = this;return self__.meta24355;
});
cljs.core.async.t24354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24356,meta24355__$1){var self__ = this;
var _24356__$1 = this;return (new cljs.core.async.t24354(self__.ch,self__.f,self__.map_GT_,meta24355__$1));
});
cljs.core.async.__GT_t24354 = (function __GT_t24354(ch__$1,f__$1,map_GT___$1,meta24355){return (new cljs.core.async.t24354(ch__$1,f__$1,map_GT___$1,meta24355));
});
}
return (new cljs.core.async.t24354(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24360 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24360 = (function (ch,p,filter_GT_,meta24361){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24361 = meta24361;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24360.cljs$lang$type = true;
cljs.core.async.t24360.cljs$lang$ctorStr = "cljs.core.async/t24360";
cljs.core.async.t24360.cljs$lang$ctorPrWriter = (function (this__11693__auto__,writer__11694__auto__,opt__11695__auto__){return cljs.core._write.call(null,writer__11694__auto__,"cljs.core.async/t24360");
});
cljs.core.async.t24360.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24360.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t24360.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24360.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t24360.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24360.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24360.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t24360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24362){var self__ = this;
var _24362__$1 = this;return self__.meta24361;
});
cljs.core.async.t24360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24362,meta24361__$1){var self__ = this;
var _24362__$1 = this;return (new cljs.core.async.t24360(self__.ch,self__.p,self__.filter_GT_,meta24361__$1));
});
cljs.core.async.__GT_t24360 = (function __GT_t24360(ch__$1,p__$1,filter_GT___$1,meta24361){return (new cljs.core.async.t24360(ch__$1,p__$1,filter_GT___$1,meta24361));
});
}
return (new cljs.core.async.t24360(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__17563__auto___24445 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__17563__auto___24445,out){
return (function (){var f__17564__auto__ = (function (){var switch__17548__auto__ = ((function (c__17563__auto___24445,out){
return (function (state_24424){var state_val_24425 = (state_24424[1]);if((state_val_24425 === 1))
{var state_24424__$1 = state_24424;var statearr_24426_24446 = state_24424__$1;(statearr_24426_24446[2] = null);
(statearr_24426_24446[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24425 === 2))
{var state_24424__$1 = state_24424;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24424__$1,4,ch);
} else
{if((state_val_24425 === 3))
{var inst_24422 = (state_24424[2]);var state_24424__$1 = state_24424;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24424__$1,inst_24422);
} else
{if((state_val_24425 === 4))
{var inst_24406 = (state_24424[7]);var inst_24406__$1 = (state_24424[2]);var inst_24407 = (inst_24406__$1 == null);var state_24424__$1 = (function (){var statearr_24427 = state_24424;(statearr_24427[7] = inst_24406__$1);
return statearr_24427;
})();if(cljs.core.truth_(inst_24407))
{var statearr_24428_24447 = state_24424__$1;(statearr_24428_24447[1] = 5);
} else
{var statearr_24429_24448 = state_24424__$1;(statearr_24429_24448[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24425 === 5))
{var inst_24409 = cljs.core.async.close_BANG_.call(null,out);var state_24424__$1 = state_24424;var statearr_24430_24449 = state_24424__$1;(statearr_24430_24449[2] = inst_24409);
(statearr_24430_24449[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24425 === 6))
{var inst_24406 = (state_24424[7]);var inst_24411 = p.call(null,inst_24406);var state_24424__$1 = state_24424;if(cljs.core.truth_(inst_24411))
{var statearr_24431_24450 = state_24424__$1;(statearr_24431_24450[1] = 8);
} else
{var statearr_24432_24451 = state_24424__$1;(statearr_24432_24451[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24425 === 7))
{var inst_24420 = (state_24424[2]);var state_24424__$1 = state_24424;var statearr_24433_24452 = state_24424__$1;(statearr_24433_24452[2] = inst_24420);
(statearr_24433_24452[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24425 === 8))
{var inst_24406 = (state_24424[7]);var state_24424__$1 = state_24424;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24424__$1,11,out,inst_24406);
} else
{if((state_val_24425 === 9))
{var state_24424__$1 = state_24424;var statearr_24434_24453 = state_24424__$1;(statearr_24434_24453[2] = null);
(statearr_24434_24453[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24425 === 10))
{var inst_24417 = (state_24424[2]);var state_24424__$1 = (function (){var statearr_24435 = state_24424;(statearr_24435[8] = inst_24417);
return statearr_24435;
})();var statearr_24436_24454 = state_24424__$1;(statearr_24436_24454[2] = null);
(statearr_24436_24454[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24425 === 11))
{var inst_24414 = (state_24424[2]);var state_24424__$1 = state_24424;var statearr_24437_24455 = state_24424__$1;(statearr_24437_24455[2] = inst_24414);
(statearr_24437_24455[1] = 10);
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
});})(c__17563__auto___24445,out))
;return ((function (switch__17548__auto__,c__17563__auto___24445,out){
return (function() {
var state_machine__17549__auto__ = null;
var state_machine__17549__auto____0 = (function (){var statearr_24441 = [null,null,null,null,null,null,null,null,null];(statearr_24441[0] = state_machine__17549__auto__);
(statearr_24441[1] = 1);
return statearr_24441;
});
var state_machine__17549__auto____1 = (function (state_24424){while(true){
var ret_value__17550__auto__ = (function (){try{while(true){
var result__17551__auto__ = switch__17548__auto__.call(null,state_24424);if(cljs.core.keyword_identical_QMARK_.call(null,result__17551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17551__auto__;
}
break;
}
}catch (e24442){if((e24442 instanceof Object))
{var ex__17552__auto__ = e24442;var statearr_24443_24456 = state_24424;(statearr_24443_24456[5] = ex__17552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24424);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24442;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24457 = state_24424;
state_24424 = G__24457;
continue;
}
} else
{return ret_value__17550__auto__;
}
break;
}
});
state_machine__17549__auto__ = function(state_24424){
switch(arguments.length){
case 0:
return state_machine__17549__auto____0.call(this);
case 1:
return state_machine__17549__auto____1.call(this,state_24424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17549__auto____0;
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17549__auto____1;
return state_machine__17549__auto__;
})()
;})(switch__17548__auto__,c__17563__auto___24445,out))
})();var state__17565__auto__ = (function (){var statearr_24444 = f__17564__auto__.call(null);(statearr_24444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17563__auto___24445);
return statearr_24444;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17565__auto__);
});})(c__17563__auto___24445,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__17563__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__17563__auto__){
return (function (){var f__17564__auto__ = (function (){var switch__17548__auto__ = ((function (c__17563__auto__){
return (function (state_24623){var state_val_24624 = (state_24623[1]);if((state_val_24624 === 1))
{var state_24623__$1 = state_24623;var statearr_24625_24666 = state_24623__$1;(statearr_24625_24666[2] = null);
(statearr_24625_24666[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24624 === 2))
{var state_24623__$1 = state_24623;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24623__$1,4,in$);
} else
{if((state_val_24624 === 3))
{var inst_24621 = (state_24623[2]);var state_24623__$1 = state_24623;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24623__$1,inst_24621);
} else
{if((state_val_24624 === 4))
{var inst_24564 = (state_24623[7]);var inst_24564__$1 = (state_24623[2]);var inst_24565 = (inst_24564__$1 == null);var state_24623__$1 = (function (){var statearr_24626 = state_24623;(statearr_24626[7] = inst_24564__$1);
return statearr_24626;
})();if(cljs.core.truth_(inst_24565))
{var statearr_24627_24667 = state_24623__$1;(statearr_24627_24667[1] = 5);
} else
{var statearr_24628_24668 = state_24623__$1;(statearr_24628_24668[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24624 === 5))
{var inst_24567 = cljs.core.async.close_BANG_.call(null,out);var state_24623__$1 = state_24623;var statearr_24629_24669 = state_24623__$1;(statearr_24629_24669[2] = inst_24567);
(statearr_24629_24669[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24624 === 6))
{var inst_24564 = (state_24623[7]);var inst_24573 = f.call(null,inst_24564);var inst_24574 = cljs.core.seq.call(null,inst_24573);var inst_24575 = inst_24574;var inst_24576 = null;var inst_24577 = 0;var inst_24578 = 0;var state_24623__$1 = (function (){var statearr_24630 = state_24623;(statearr_24630[8] = inst_24578);
(statearr_24630[9] = inst_24577);
(statearr_24630[10] = inst_24576);
(statearr_24630[11] = inst_24575);
return statearr_24630;
})();var statearr_24631_24670 = state_24623__$1;(statearr_24631_24670[2] = null);
(statearr_24631_24670[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24624 === 7))
{var inst_24619 = (state_24623[2]);var state_24623__$1 = state_24623;var statearr_24632_24671 = state_24623__$1;(statearr_24632_24671[2] = inst_24619);
(statearr_24632_24671[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24624 === 8))
{var inst_24578 = (state_24623[8]);var inst_24577 = (state_24623[9]);var inst_24580 = (inst_24578 < inst_24577);var inst_24581 = inst_24580;var state_24623__$1 = state_24623;if(cljs.core.truth_(inst_24581))
{var statearr_24633_24672 = state_24623__$1;(statearr_24633_24672[1] = 10);
} else
{var statearr_24634_24673 = state_24623__$1;(statearr_24634_24673[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24624 === 9))
{var inst_24611 = (state_24623[2]);var inst_24612 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_24623__$1 = (function (){var statearr_24635 = state_24623;(statearr_24635[12] = inst_24611);
return statearr_24635;
})();if(cljs.core.truth_(inst_24612))
{var statearr_24636_24674 = state_24623__$1;(statearr_24636_24674[1] = 21);
} else
{var statearr_24637_24675 = state_24623__$1;(statearr_24637_24675[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24624 === 10))
{var inst_24578 = (state_24623[8]);var inst_24576 = (state_24623[10]);var inst_24583 = cljs.core._nth.call(null,inst_24576,inst_24578);var state_24623__$1 = state_24623;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24623__$1,13,out,inst_24583);
} else
{if((state_val_24624 === 11))
{var inst_24575 = (state_24623[11]);var inst_24589 = (state_24623[13]);var inst_24589__$1 = cljs.core.seq.call(null,inst_24575);var state_24623__$1 = (function (){var statearr_24641 = state_24623;(statearr_24641[13] = inst_24589__$1);
return statearr_24641;
})();if(inst_24589__$1)
{var statearr_24642_24676 = state_24623__$1;(statearr_24642_24676[1] = 14);
} else
{var statearr_24643_24677 = state_24623__$1;(statearr_24643_24677[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24624 === 12))
{var inst_24609 = (state_24623[2]);var state_24623__$1 = state_24623;var statearr_24644_24678 = state_24623__$1;(statearr_24644_24678[2] = inst_24609);
(statearr_24644_24678[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24624 === 13))
{var inst_24578 = (state_24623[8]);var inst_24577 = (state_24623[9]);var inst_24576 = (state_24623[10]);var inst_24575 = (state_24623[11]);var inst_24585 = (state_24623[2]);var inst_24586 = (inst_24578 + 1);var tmp24638 = inst_24577;var tmp24639 = inst_24576;var tmp24640 = inst_24575;var inst_24575__$1 = tmp24640;var inst_24576__$1 = tmp24639;var inst_24577__$1 = tmp24638;var inst_24578__$1 = inst_24586;var state_24623__$1 = (function (){var statearr_24645 = state_24623;(statearr_24645[8] = inst_24578__$1);
(statearr_24645[9] = inst_24577__$1);
(statearr_24645[10] = inst_24576__$1);
(statearr_24645[11] = inst_24575__$1);
(statearr_24645[14] = inst_24585);
return statearr_24645;
})();var statearr_24646_24679 = state_24623__$1;(statearr_24646_24679[2] = null);
(statearr_24646_24679[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24624 === 14))
{var inst_24589 = (state_24623[13]);var inst_24591 = cljs.core.chunked_seq_QMARK_.call(null,inst_24589);var state_24623__$1 = state_24623;if(inst_24591)
{var statearr_24647_24680 = state_24623__$1;(statearr_24647_24680[1] = 17);
} else
{var statearr_24648_24681 = state_24623__$1;(statearr_24648_24681[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24624 === 15))
{var state_24623__$1 = state_24623;var statearr_24649_24682 = state_24623__$1;(statearr_24649_24682[2] = null);
(statearr_24649_24682[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24624 === 16))
{var inst_24607 = (state_24623[2]);var state_24623__$1 = state_24623;var statearr_24650_24683 = state_24623__$1;(statearr_24650_24683[2] = inst_24607);
(statearr_24650_24683[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24624 === 17))
{var inst_24589 = (state_24623[13]);var inst_24593 = cljs.core.chunk_first.call(null,inst_24589);var inst_24594 = cljs.core.chunk_rest.call(null,inst_24589);var inst_24595 = cljs.core.count.call(null,inst_24593);var inst_24575 = inst_24594;var inst_24576 = inst_24593;var inst_24577 = inst_24595;var inst_24578 = 0;var state_24623__$1 = (function (){var statearr_24651 = state_24623;(statearr_24651[8] = inst_24578);
(statearr_24651[9] = inst_24577);
(statearr_24651[10] = inst_24576);
(statearr_24651[11] = inst_24575);
return statearr_24651;
})();var statearr_24652_24684 = state_24623__$1;(statearr_24652_24684[2] = null);
(statearr_24652_24684[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24624 === 18))
{var inst_24589 = (state_24623[13]);var inst_24598 = cljs.core.first.call(null,inst_24589);var state_24623__$1 = state_24623;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24623__$1,20,out,inst_24598);
} else
{if((state_val_24624 === 19))
{var inst_24604 = (state_24623[2]);var state_24623__$1 = state_24623;var statearr_24653_24685 = state_24623__$1;(statearr_24653_24685[2] = inst_24604);
(statearr_24653_24685[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24624 === 20))
{var inst_24589 = (state_24623[13]);var inst_24600 = (state_24623[2]);var inst_24601 = cljs.core.next.call(null,inst_24589);var inst_24575 = inst_24601;var inst_24576 = null;var inst_24577 = 0;var inst_24578 = 0;var state_24623__$1 = (function (){var statearr_24654 = state_24623;(statearr_24654[8] = inst_24578);
(statearr_24654[9] = inst_24577);
(statearr_24654[10] = inst_24576);
(statearr_24654[11] = inst_24575);
(statearr_24654[15] = inst_24600);
return statearr_24654;
})();var statearr_24655_24686 = state_24623__$1;(statearr_24655_24686[2] = null);
(statearr_24655_24686[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24624 === 21))
{var state_24623__$1 = state_24623;var statearr_24656_24687 = state_24623__$1;(statearr_24656_24687[2] = null);
(statearr_24656_24687[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24624 === 22))
{var state_24623__$1 = state_24623;var statearr_24657_24688 = state_24623__$1;(statearr_24657_24688[2] = null);
(statearr_24657_24688[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24624 === 23))
{var inst_24617 = (state_24623[2]);var state_24623__$1 = state_24623;var statearr_24658_24689 = state_24623__$1;(statearr_24658_24689[2] = inst_24617);
(statearr_24658_24689[1] = 7);
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
}
}
}
}
});})(c__17563__auto__))
;return ((function (switch__17548__auto__,c__17563__auto__){
return (function() {
var state_machine__17549__auto__ = null;
var state_machine__17549__auto____0 = (function (){var statearr_24662 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24662[0] = state_machine__17549__auto__);
(statearr_24662[1] = 1);
return statearr_24662;
});
var state_machine__17549__auto____1 = (function (state_24623){while(true){
var ret_value__17550__auto__ = (function (){try{while(true){
var result__17551__auto__ = switch__17548__auto__.call(null,state_24623);if(cljs.core.keyword_identical_QMARK_.call(null,result__17551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17551__auto__;
}
break;
}
}catch (e24663){if((e24663 instanceof Object))
{var ex__17552__auto__ = e24663;var statearr_24664_24690 = state_24623;(statearr_24664_24690[5] = ex__17552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24623);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24663;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24691 = state_24623;
state_24623 = G__24691;
continue;
}
} else
{return ret_value__17550__auto__;
}
break;
}
});
state_machine__17549__auto__ = function(state_24623){
switch(arguments.length){
case 0:
return state_machine__17549__auto____0.call(this);
case 1:
return state_machine__17549__auto____1.call(this,state_24623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17549__auto____0;
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17549__auto____1;
return state_machine__17549__auto__;
})()
;})(switch__17548__auto__,c__17563__auto__))
})();var state__17565__auto__ = (function (){var statearr_24665 = f__17564__auto__.call(null);(statearr_24665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17563__auto__);
return statearr_24665;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17565__auto__);
});})(c__17563__auto__))
);
return c__17563__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__17563__auto___24786 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__17563__auto___24786){
return (function (){var f__17564__auto__ = (function (){var switch__17548__auto__ = ((function (c__17563__auto___24786){
return (function (state_24762){var state_val_24763 = (state_24762[1]);if((state_val_24763 === 1))
{var state_24762__$1 = state_24762;var statearr_24764_24787 = state_24762__$1;(statearr_24764_24787[2] = null);
(statearr_24764_24787[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24763 === 2))
{var state_24762__$1 = state_24762;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24762__$1,4,from);
} else
{if((state_val_24763 === 3))
{var inst_24760 = (state_24762[2]);var state_24762__$1 = state_24762;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24762__$1,inst_24760);
} else
{if((state_val_24763 === 4))
{var inst_24741 = (state_24762[7]);var inst_24741__$1 = (state_24762[2]);var inst_24742 = (inst_24741__$1 == null);var state_24762__$1 = (function (){var statearr_24765 = state_24762;(statearr_24765[7] = inst_24741__$1);
return statearr_24765;
})();if(cljs.core.truth_(inst_24742))
{var statearr_24766_24788 = state_24762__$1;(statearr_24766_24788[1] = 5);
} else
{var statearr_24767_24789 = state_24762__$1;(statearr_24767_24789[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24763 === 5))
{var state_24762__$1 = state_24762;if(cljs.core.truth_(close_QMARK_))
{var statearr_24768_24790 = state_24762__$1;(statearr_24768_24790[1] = 8);
} else
{var statearr_24769_24791 = state_24762__$1;(statearr_24769_24791[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24763 === 6))
{var inst_24741 = (state_24762[7]);var state_24762__$1 = state_24762;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24762__$1,11,to,inst_24741);
} else
{if((state_val_24763 === 7))
{var inst_24758 = (state_24762[2]);var state_24762__$1 = state_24762;var statearr_24770_24792 = state_24762__$1;(statearr_24770_24792[2] = inst_24758);
(statearr_24770_24792[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24763 === 8))
{var inst_24745 = cljs.core.async.close_BANG_.call(null,to);var state_24762__$1 = state_24762;var statearr_24771_24793 = state_24762__$1;(statearr_24771_24793[2] = inst_24745);
(statearr_24771_24793[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24763 === 9))
{var state_24762__$1 = state_24762;var statearr_24772_24794 = state_24762__$1;(statearr_24772_24794[2] = null);
(statearr_24772_24794[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24763 === 10))
{var inst_24748 = (state_24762[2]);var state_24762__$1 = state_24762;var statearr_24773_24795 = state_24762__$1;(statearr_24773_24795[2] = inst_24748);
(statearr_24773_24795[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24763 === 11))
{var inst_24751 = (state_24762[2]);var state_24762__$1 = state_24762;if(cljs.core.truth_(inst_24751))
{var statearr_24774_24796 = state_24762__$1;(statearr_24774_24796[1] = 12);
} else
{var statearr_24775_24797 = state_24762__$1;(statearr_24775_24797[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24763 === 12))
{var state_24762__$1 = state_24762;var statearr_24776_24798 = state_24762__$1;(statearr_24776_24798[2] = null);
(statearr_24776_24798[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24763 === 13))
{var state_24762__$1 = state_24762;var statearr_24777_24799 = state_24762__$1;(statearr_24777_24799[2] = null);
(statearr_24777_24799[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24763 === 14))
{var inst_24756 = (state_24762[2]);var state_24762__$1 = state_24762;var statearr_24778_24800 = state_24762__$1;(statearr_24778_24800[2] = inst_24756);
(statearr_24778_24800[1] = 7);
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
});})(c__17563__auto___24786))
;return ((function (switch__17548__auto__,c__17563__auto___24786){
return (function() {
var state_machine__17549__auto__ = null;
var state_machine__17549__auto____0 = (function (){var statearr_24782 = [null,null,null,null,null,null,null,null];(statearr_24782[0] = state_machine__17549__auto__);
(statearr_24782[1] = 1);
return statearr_24782;
});
var state_machine__17549__auto____1 = (function (state_24762){while(true){
var ret_value__17550__auto__ = (function (){try{while(true){
var result__17551__auto__ = switch__17548__auto__.call(null,state_24762);if(cljs.core.keyword_identical_QMARK_.call(null,result__17551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17551__auto__;
}
break;
}
}catch (e24783){if((e24783 instanceof Object))
{var ex__17552__auto__ = e24783;var statearr_24784_24801 = state_24762;(statearr_24784_24801[5] = ex__17552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24762);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24783;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24802 = state_24762;
state_24762 = G__24802;
continue;
}
} else
{return ret_value__17550__auto__;
}
break;
}
});
state_machine__17549__auto__ = function(state_24762){
switch(arguments.length){
case 0:
return state_machine__17549__auto____0.call(this);
case 1:
return state_machine__17549__auto____1.call(this,state_24762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17549__auto____0;
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17549__auto____1;
return state_machine__17549__auto__;
})()
;})(switch__17548__auto__,c__17563__auto___24786))
})();var state__17565__auto__ = (function (){var statearr_24785 = f__17564__auto__.call(null);(statearr_24785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17563__auto___24786);
return statearr_24785;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17565__auto__);
});})(c__17563__auto___24786))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__17563__auto___24903 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__17563__auto___24903,tc,fc){
return (function (){var f__17564__auto__ = (function (){var switch__17548__auto__ = ((function (c__17563__auto___24903,tc,fc){
return (function (state_24878){var state_val_24879 = (state_24878[1]);if((state_val_24879 === 1))
{var state_24878__$1 = state_24878;var statearr_24880_24904 = state_24878__$1;(statearr_24880_24904[2] = null);
(statearr_24880_24904[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24879 === 2))
{var state_24878__$1 = state_24878;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24878__$1,4,ch);
} else
{if((state_val_24879 === 3))
{var inst_24876 = (state_24878[2]);var state_24878__$1 = state_24878;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24878__$1,inst_24876);
} else
{if((state_val_24879 === 4))
{var inst_24855 = (state_24878[7]);var inst_24855__$1 = (state_24878[2]);var inst_24856 = (inst_24855__$1 == null);var state_24878__$1 = (function (){var statearr_24881 = state_24878;(statearr_24881[7] = inst_24855__$1);
return statearr_24881;
})();if(cljs.core.truth_(inst_24856))
{var statearr_24882_24905 = state_24878__$1;(statearr_24882_24905[1] = 5);
} else
{var statearr_24883_24906 = state_24878__$1;(statearr_24883_24906[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24879 === 5))
{var inst_24858 = cljs.core.async.close_BANG_.call(null,tc);var inst_24859 = cljs.core.async.close_BANG_.call(null,fc);var state_24878__$1 = (function (){var statearr_24884 = state_24878;(statearr_24884[8] = inst_24858);
return statearr_24884;
})();var statearr_24885_24907 = state_24878__$1;(statearr_24885_24907[2] = inst_24859);
(statearr_24885_24907[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24879 === 6))
{var inst_24855 = (state_24878[7]);var inst_24861 = p.call(null,inst_24855);var state_24878__$1 = state_24878;if(cljs.core.truth_(inst_24861))
{var statearr_24886_24908 = state_24878__$1;(statearr_24886_24908[1] = 9);
} else
{var statearr_24887_24909 = state_24878__$1;(statearr_24887_24909[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24879 === 7))
{var inst_24874 = (state_24878[2]);var state_24878__$1 = state_24878;var statearr_24888_24910 = state_24878__$1;(statearr_24888_24910[2] = inst_24874);
(statearr_24888_24910[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24879 === 8))
{var inst_24867 = (state_24878[2]);var state_24878__$1 = state_24878;if(cljs.core.truth_(inst_24867))
{var statearr_24889_24911 = state_24878__$1;(statearr_24889_24911[1] = 12);
} else
{var statearr_24890_24912 = state_24878__$1;(statearr_24890_24912[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24879 === 9))
{var state_24878__$1 = state_24878;var statearr_24891_24913 = state_24878__$1;(statearr_24891_24913[2] = tc);
(statearr_24891_24913[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24879 === 10))
{var state_24878__$1 = state_24878;var statearr_24892_24914 = state_24878__$1;(statearr_24892_24914[2] = fc);
(statearr_24892_24914[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24879 === 11))
{var inst_24855 = (state_24878[7]);var inst_24865 = (state_24878[2]);var state_24878__$1 = state_24878;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24878__$1,8,inst_24865,inst_24855);
} else
{if((state_val_24879 === 12))
{var state_24878__$1 = state_24878;var statearr_24893_24915 = state_24878__$1;(statearr_24893_24915[2] = null);
(statearr_24893_24915[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24879 === 13))
{var state_24878__$1 = state_24878;var statearr_24894_24916 = state_24878__$1;(statearr_24894_24916[2] = null);
(statearr_24894_24916[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24879 === 14))
{var inst_24872 = (state_24878[2]);var state_24878__$1 = state_24878;var statearr_24895_24917 = state_24878__$1;(statearr_24895_24917[2] = inst_24872);
(statearr_24895_24917[1] = 7);
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
});})(c__17563__auto___24903,tc,fc))
;return ((function (switch__17548__auto__,c__17563__auto___24903,tc,fc){
return (function() {
var state_machine__17549__auto__ = null;
var state_machine__17549__auto____0 = (function (){var statearr_24899 = [null,null,null,null,null,null,null,null,null];(statearr_24899[0] = state_machine__17549__auto__);
(statearr_24899[1] = 1);
return statearr_24899;
});
var state_machine__17549__auto____1 = (function (state_24878){while(true){
var ret_value__17550__auto__ = (function (){try{while(true){
var result__17551__auto__ = switch__17548__auto__.call(null,state_24878);if(cljs.core.keyword_identical_QMARK_.call(null,result__17551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17551__auto__;
}
break;
}
}catch (e24900){if((e24900 instanceof Object))
{var ex__17552__auto__ = e24900;var statearr_24901_24918 = state_24878;(statearr_24901_24918[5] = ex__17552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24878);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24900;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24919 = state_24878;
state_24878 = G__24919;
continue;
}
} else
{return ret_value__17550__auto__;
}
break;
}
});
state_machine__17549__auto__ = function(state_24878){
switch(arguments.length){
case 0:
return state_machine__17549__auto____0.call(this);
case 1:
return state_machine__17549__auto____1.call(this,state_24878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17549__auto____0;
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17549__auto____1;
return state_machine__17549__auto__;
})()
;})(switch__17548__auto__,c__17563__auto___24903,tc,fc))
})();var state__17565__auto__ = (function (){var statearr_24902 = f__17564__auto__.call(null);(statearr_24902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17563__auto___24903);
return statearr_24902;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17565__auto__);
});})(c__17563__auto___24903,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__17563__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__17563__auto__){
return (function (){var f__17564__auto__ = (function (){var switch__17548__auto__ = ((function (c__17563__auto__){
return (function (state_24966){var state_val_24967 = (state_24966[1]);if((state_val_24967 === 7))
{var inst_24962 = (state_24966[2]);var state_24966__$1 = state_24966;var statearr_24968_24984 = state_24966__$1;(statearr_24968_24984[2] = inst_24962);
(statearr_24968_24984[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24967 === 6))
{var inst_24955 = (state_24966[7]);var inst_24952 = (state_24966[8]);var inst_24959 = f.call(null,inst_24952,inst_24955);var inst_24952__$1 = inst_24959;var state_24966__$1 = (function (){var statearr_24969 = state_24966;(statearr_24969[8] = inst_24952__$1);
return statearr_24969;
})();var statearr_24970_24985 = state_24966__$1;(statearr_24970_24985[2] = null);
(statearr_24970_24985[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24967 === 5))
{var inst_24952 = (state_24966[8]);var state_24966__$1 = state_24966;var statearr_24971_24986 = state_24966__$1;(statearr_24971_24986[2] = inst_24952);
(statearr_24971_24986[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24967 === 4))
{var inst_24955 = (state_24966[7]);var inst_24955__$1 = (state_24966[2]);var inst_24956 = (inst_24955__$1 == null);var state_24966__$1 = (function (){var statearr_24972 = state_24966;(statearr_24972[7] = inst_24955__$1);
return statearr_24972;
})();if(cljs.core.truth_(inst_24956))
{var statearr_24973_24987 = state_24966__$1;(statearr_24973_24987[1] = 5);
} else
{var statearr_24974_24988 = state_24966__$1;(statearr_24974_24988[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24967 === 3))
{var inst_24964 = (state_24966[2]);var state_24966__$1 = state_24966;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24966__$1,inst_24964);
} else
{if((state_val_24967 === 2))
{var state_24966__$1 = state_24966;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24966__$1,4,ch);
} else
{if((state_val_24967 === 1))
{var inst_24952 = init;var state_24966__$1 = (function (){var statearr_24975 = state_24966;(statearr_24975[8] = inst_24952);
return statearr_24975;
})();var statearr_24976_24989 = state_24966__$1;(statearr_24976_24989[2] = null);
(statearr_24976_24989[1] = 2);
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
var state_machine__17549__auto____0 = (function (){var statearr_24980 = [null,null,null,null,null,null,null,null,null];(statearr_24980[0] = state_machine__17549__auto__);
(statearr_24980[1] = 1);
return statearr_24980;
});
var state_machine__17549__auto____1 = (function (state_24966){while(true){
var ret_value__17550__auto__ = (function (){try{while(true){
var result__17551__auto__ = switch__17548__auto__.call(null,state_24966);if(cljs.core.keyword_identical_QMARK_.call(null,result__17551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17551__auto__;
}
break;
}
}catch (e24981){if((e24981 instanceof Object))
{var ex__17552__auto__ = e24981;var statearr_24982_24990 = state_24966;(statearr_24982_24990[5] = ex__17552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24966);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24981;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24991 = state_24966;
state_24966 = G__24991;
continue;
}
} else
{return ret_value__17550__auto__;
}
break;
}
});
state_machine__17549__auto__ = function(state_24966){
switch(arguments.length){
case 0:
return state_machine__17549__auto____0.call(this);
case 1:
return state_machine__17549__auto____1.call(this,state_24966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17549__auto____0;
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17549__auto____1;
return state_machine__17549__auto__;
})()
;})(switch__17548__auto__,c__17563__auto__))
})();var state__17565__auto__ = (function (){var statearr_24983 = f__17564__auto__.call(null);(statearr_24983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17563__auto__);
return statearr_24983;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17565__auto__);
});})(c__17563__auto__))
);
return c__17563__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__17563__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__17563__auto__){
return (function (){var f__17564__auto__ = (function (){var switch__17548__auto__ = ((function (c__17563__auto__){
return (function (state_25065){var state_val_25066 = (state_25065[1]);if((state_val_25066 === 1))
{var inst_25041 = cljs.core.seq.call(null,coll);var inst_25042 = inst_25041;var state_25065__$1 = (function (){var statearr_25067 = state_25065;(statearr_25067[7] = inst_25042);
return statearr_25067;
})();var statearr_25068_25090 = state_25065__$1;(statearr_25068_25090[2] = null);
(statearr_25068_25090[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25066 === 2))
{var inst_25042 = (state_25065[7]);var state_25065__$1 = state_25065;if(cljs.core.truth_(inst_25042))
{var statearr_25069_25091 = state_25065__$1;(statearr_25069_25091[1] = 4);
} else
{var statearr_25070_25092 = state_25065__$1;(statearr_25070_25092[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25066 === 3))
{var inst_25063 = (state_25065[2]);var state_25065__$1 = state_25065;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25065__$1,inst_25063);
} else
{if((state_val_25066 === 4))
{var inst_25042 = (state_25065[7]);var inst_25045 = cljs.core.first.call(null,inst_25042);var state_25065__$1 = state_25065;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25065__$1,7,ch,inst_25045);
} else
{if((state_val_25066 === 5))
{var inst_25042 = (state_25065[7]);var state_25065__$1 = state_25065;var statearr_25071_25093 = state_25065__$1;(statearr_25071_25093[2] = inst_25042);
(statearr_25071_25093[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25066 === 6))
{var inst_25050 = (state_25065[2]);var state_25065__$1 = state_25065;if(cljs.core.truth_(inst_25050))
{var statearr_25072_25094 = state_25065__$1;(statearr_25072_25094[1] = 8);
} else
{var statearr_25073_25095 = state_25065__$1;(statearr_25073_25095[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25066 === 7))
{var inst_25047 = (state_25065[2]);var state_25065__$1 = state_25065;var statearr_25074_25096 = state_25065__$1;(statearr_25074_25096[2] = inst_25047);
(statearr_25074_25096[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25066 === 8))
{var inst_25042 = (state_25065[7]);var inst_25052 = cljs.core.next.call(null,inst_25042);var inst_25042__$1 = inst_25052;var state_25065__$1 = (function (){var statearr_25075 = state_25065;(statearr_25075[7] = inst_25042__$1);
return statearr_25075;
})();var statearr_25076_25097 = state_25065__$1;(statearr_25076_25097[2] = null);
(statearr_25076_25097[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25066 === 9))
{var state_25065__$1 = state_25065;if(cljs.core.truth_(close_QMARK_))
{var statearr_25077_25098 = state_25065__$1;(statearr_25077_25098[1] = 11);
} else
{var statearr_25078_25099 = state_25065__$1;(statearr_25078_25099[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25066 === 10))
{var inst_25061 = (state_25065[2]);var state_25065__$1 = state_25065;var statearr_25079_25100 = state_25065__$1;(statearr_25079_25100[2] = inst_25061);
(statearr_25079_25100[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25066 === 11))
{var inst_25056 = cljs.core.async.close_BANG_.call(null,ch);var state_25065__$1 = state_25065;var statearr_25080_25101 = state_25065__$1;(statearr_25080_25101[2] = inst_25056);
(statearr_25080_25101[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25066 === 12))
{var state_25065__$1 = state_25065;var statearr_25081_25102 = state_25065__$1;(statearr_25081_25102[2] = null);
(statearr_25081_25102[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25066 === 13))
{var inst_25059 = (state_25065[2]);var state_25065__$1 = state_25065;var statearr_25082_25103 = state_25065__$1;(statearr_25082_25103[2] = inst_25059);
(statearr_25082_25103[1] = 10);
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
});})(c__17563__auto__))
;return ((function (switch__17548__auto__,c__17563__auto__){
return (function() {
var state_machine__17549__auto__ = null;
var state_machine__17549__auto____0 = (function (){var statearr_25086 = [null,null,null,null,null,null,null,null];(statearr_25086[0] = state_machine__17549__auto__);
(statearr_25086[1] = 1);
return statearr_25086;
});
var state_machine__17549__auto____1 = (function (state_25065){while(true){
var ret_value__17550__auto__ = (function (){try{while(true){
var result__17551__auto__ = switch__17548__auto__.call(null,state_25065);if(cljs.core.keyword_identical_QMARK_.call(null,result__17551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17551__auto__;
}
break;
}
}catch (e25087){if((e25087 instanceof Object))
{var ex__17552__auto__ = e25087;var statearr_25088_25104 = state_25065;(statearr_25088_25104[5] = ex__17552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25065);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25087;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25105 = state_25065;
state_25065 = G__25105;
continue;
}
} else
{return ret_value__17550__auto__;
}
break;
}
});
state_machine__17549__auto__ = function(state_25065){
switch(arguments.length){
case 0:
return state_machine__17549__auto____0.call(this);
case 1:
return state_machine__17549__auto____1.call(this,state_25065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17549__auto____0;
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17549__auto____1;
return state_machine__17549__auto__;
})()
;})(switch__17548__auto__,c__17563__auto__))
})();var state__17565__auto__ = (function (){var statearr_25089 = f__17564__auto__.call(null);(statearr_25089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17563__auto__);
return statearr_25089;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17565__auto__);
});})(c__17563__auto__))
);
return c__17563__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj25107 = {};return obj25107;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__11114__auto__ = _;if(and__11114__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__11114__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__11753__auto__ = (((_ == null))?null:_);return (function (){var or__11126__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__11753__auto__)]);if(or__11126__auto__)
{return or__11126__auto__;
} else
{var or__11126__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__11126__auto____$1)
{return or__11126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj25109 = {};return obj25109;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__11114__auto__ = m;if(and__11114__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__11114__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__11753__auto__ = (((m == null))?null:m);return (function (){var or__11126__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__11753__auto__)]);if(or__11126__auto__)
{return or__11126__auto__;
} else
{var or__11126__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__11126__auto____$1)
{return or__11126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__11114__auto__ = m;if(and__11114__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__11114__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__11753__auto__ = (((m == null))?null:m);return (function (){var or__11126__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__11753__auto__)]);if(or__11126__auto__)
{return or__11126__auto__;
} else
{var or__11126__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__11126__auto____$1)
{return or__11126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__11114__auto__ = m;if(and__11114__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__11114__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__11753__auto__ = (((m == null))?null:m);return (function (){var or__11126__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__11753__auto__)]);if(or__11126__auto__)
{return or__11126__auto__;
} else
{var or__11126__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__11126__auto____$1)
{return or__11126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25331 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25331 = (function (cs,ch,mult,meta25332){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25332 = meta25332;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25331.cljs$lang$type = true;
cljs.core.async.t25331.cljs$lang$ctorStr = "cljs.core.async/t25331";
cljs.core.async.t25331.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__11693__auto__,writer__11694__auto__,opt__11695__auto__){return cljs.core._write.call(null,writer__11694__auto__,"cljs.core.async/t25331");
});})(cs))
;
cljs.core.async.t25331.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25331.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25331.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25331.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25331.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25331.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25331.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25333){var self__ = this;
var _25333__$1 = this;return self__.meta25332;
});})(cs))
;
cljs.core.async.t25331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25333,meta25332__$1){var self__ = this;
var _25333__$1 = this;return (new cljs.core.async.t25331(self__.cs,self__.ch,self__.mult,meta25332__$1));
});})(cs))
;
cljs.core.async.__GT_t25331 = ((function (cs){
return (function __GT_t25331(cs__$1,ch__$1,mult__$1,meta25332){return (new cljs.core.async.t25331(cs__$1,ch__$1,mult__$1,meta25332));
});})(cs))
;
}
return (new cljs.core.async.t25331(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__17563__auto___25552 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__17563__auto___25552,cs,m,dchan,dctr,done){
return (function (){var f__17564__auto__ = (function (){var switch__17548__auto__ = ((function (c__17563__auto___25552,cs,m,dchan,dctr,done){
return (function (state_25464){var state_val_25465 = (state_25464[1]);if((state_val_25465 === 32))
{var inst_25404 = (state_25464[7]);var inst_25405 = (state_25464[8]);var inst_25406 = (state_25464[9]);var inst_25407 = (state_25464[10]);var inst_25419 = (state_25464[2]);var inst_25420 = (inst_25407 + 1);var tmp25466 = inst_25404;var tmp25467 = inst_25405;var tmp25468 = inst_25406;var inst_25404__$1 = tmp25466;var inst_25405__$1 = tmp25467;var inst_25406__$1 = tmp25468;var inst_25407__$1 = inst_25420;var state_25464__$1 = (function (){var statearr_25469 = state_25464;(statearr_25469[7] = inst_25404__$1);
(statearr_25469[8] = inst_25405__$1);
(statearr_25469[9] = inst_25406__$1);
(statearr_25469[10] = inst_25407__$1);
(statearr_25469[11] = inst_25419);
return statearr_25469;
})();var statearr_25470_25553 = state_25464__$1;(statearr_25470_25553[2] = null);
(statearr_25470_25553[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 1))
{var state_25464__$1 = state_25464;var statearr_25471_25554 = state_25464__$1;(statearr_25471_25554[2] = null);
(statearr_25471_25554[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 33))
{var inst_25423 = (state_25464[12]);var inst_25425 = cljs.core.chunked_seq_QMARK_.call(null,inst_25423);var state_25464__$1 = state_25464;if(inst_25425)
{var statearr_25472_25555 = state_25464__$1;(statearr_25472_25555[1] = 36);
} else
{var statearr_25473_25556 = state_25464__$1;(statearr_25473_25556[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 2))
{var state_25464__$1 = state_25464;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25464__$1,4,ch);
} else
{if((state_val_25465 === 34))
{var state_25464__$1 = state_25464;var statearr_25474_25557 = state_25464__$1;(statearr_25474_25557[2] = null);
(statearr_25474_25557[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 3))
{var inst_25462 = (state_25464[2]);var state_25464__$1 = state_25464;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25464__$1,inst_25462);
} else
{if((state_val_25465 === 35))
{var inst_25446 = (state_25464[2]);var state_25464__$1 = state_25464;var statearr_25475_25558 = state_25464__$1;(statearr_25475_25558[2] = inst_25446);
(statearr_25475_25558[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 4))
{var inst_25336 = (state_25464[13]);var inst_25336__$1 = (state_25464[2]);var inst_25337 = (inst_25336__$1 == null);var state_25464__$1 = (function (){var statearr_25476 = state_25464;(statearr_25476[13] = inst_25336__$1);
return statearr_25476;
})();if(cljs.core.truth_(inst_25337))
{var statearr_25477_25559 = state_25464__$1;(statearr_25477_25559[1] = 5);
} else
{var statearr_25478_25560 = state_25464__$1;(statearr_25478_25560[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 36))
{var inst_25423 = (state_25464[12]);var inst_25427 = cljs.core.chunk_first.call(null,inst_25423);var inst_25428 = cljs.core.chunk_rest.call(null,inst_25423);var inst_25429 = cljs.core.count.call(null,inst_25427);var inst_25404 = inst_25428;var inst_25405 = inst_25427;var inst_25406 = inst_25429;var inst_25407 = 0;var state_25464__$1 = (function (){var statearr_25479 = state_25464;(statearr_25479[7] = inst_25404);
(statearr_25479[8] = inst_25405);
(statearr_25479[9] = inst_25406);
(statearr_25479[10] = inst_25407);
return statearr_25479;
})();var statearr_25480_25561 = state_25464__$1;(statearr_25480_25561[2] = null);
(statearr_25480_25561[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 5))
{var inst_25343 = cljs.core.deref.call(null,cs);var inst_25344 = cljs.core.seq.call(null,inst_25343);var inst_25345 = inst_25344;var inst_25346 = null;var inst_25347 = 0;var inst_25348 = 0;var state_25464__$1 = (function (){var statearr_25481 = state_25464;(statearr_25481[14] = inst_25348);
(statearr_25481[15] = inst_25347);
(statearr_25481[16] = inst_25346);
(statearr_25481[17] = inst_25345);
return statearr_25481;
})();var statearr_25482_25562 = state_25464__$1;(statearr_25482_25562[2] = null);
(statearr_25482_25562[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 37))
{var inst_25423 = (state_25464[12]);var inst_25336 = (state_25464[13]);var inst_25432 = (state_25464[18]);var inst_25432__$1 = cljs.core.first.call(null,inst_25423);var inst_25433 = cljs.core.async.put_BANG_.call(null,inst_25432__$1,inst_25336,done);var state_25464__$1 = (function (){var statearr_25483 = state_25464;(statearr_25483[18] = inst_25432__$1);
return statearr_25483;
})();if(cljs.core.truth_(inst_25433))
{var statearr_25484_25563 = state_25464__$1;(statearr_25484_25563[1] = 39);
} else
{var statearr_25485_25564 = state_25464__$1;(statearr_25485_25564[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 6))
{var inst_25396 = (state_25464[19]);var inst_25395 = cljs.core.deref.call(null,cs);var inst_25396__$1 = cljs.core.keys.call(null,inst_25395);var inst_25397 = cljs.core.count.call(null,inst_25396__$1);var inst_25398 = cljs.core.reset_BANG_.call(null,dctr,inst_25397);var inst_25403 = cljs.core.seq.call(null,inst_25396__$1);var inst_25404 = inst_25403;var inst_25405 = null;var inst_25406 = 0;var inst_25407 = 0;var state_25464__$1 = (function (){var statearr_25486 = state_25464;(statearr_25486[7] = inst_25404);
(statearr_25486[8] = inst_25405);
(statearr_25486[9] = inst_25406);
(statearr_25486[10] = inst_25407);
(statearr_25486[20] = inst_25398);
(statearr_25486[19] = inst_25396__$1);
return statearr_25486;
})();var statearr_25487_25565 = state_25464__$1;(statearr_25487_25565[2] = null);
(statearr_25487_25565[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 38))
{var inst_25443 = (state_25464[2]);var state_25464__$1 = state_25464;var statearr_25488_25566 = state_25464__$1;(statearr_25488_25566[2] = inst_25443);
(statearr_25488_25566[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 7))
{var inst_25460 = (state_25464[2]);var state_25464__$1 = state_25464;var statearr_25489_25567 = state_25464__$1;(statearr_25489_25567[2] = inst_25460);
(statearr_25489_25567[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 39))
{var state_25464__$1 = state_25464;var statearr_25490_25568 = state_25464__$1;(statearr_25490_25568[2] = null);
(statearr_25490_25568[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 8))
{var inst_25348 = (state_25464[14]);var inst_25347 = (state_25464[15]);var inst_25350 = (inst_25348 < inst_25347);var inst_25351 = inst_25350;var state_25464__$1 = state_25464;if(cljs.core.truth_(inst_25351))
{var statearr_25491_25569 = state_25464__$1;(statearr_25491_25569[1] = 10);
} else
{var statearr_25492_25570 = state_25464__$1;(statearr_25492_25570[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 40))
{var inst_25432 = (state_25464[18]);var inst_25436 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_25437 = cljs.core.async.untap_STAR_.call(null,m,inst_25432);var state_25464__$1 = (function (){var statearr_25493 = state_25464;(statearr_25493[21] = inst_25436);
return statearr_25493;
})();var statearr_25494_25571 = state_25464__$1;(statearr_25494_25571[2] = inst_25437);
(statearr_25494_25571[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 9))
{var inst_25393 = (state_25464[2]);var state_25464__$1 = state_25464;var statearr_25495_25572 = state_25464__$1;(statearr_25495_25572[2] = inst_25393);
(statearr_25495_25572[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 41))
{var inst_25423 = (state_25464[12]);var inst_25439 = (state_25464[2]);var inst_25440 = cljs.core.next.call(null,inst_25423);var inst_25404 = inst_25440;var inst_25405 = null;var inst_25406 = 0;var inst_25407 = 0;var state_25464__$1 = (function (){var statearr_25496 = state_25464;(statearr_25496[7] = inst_25404);
(statearr_25496[8] = inst_25405);
(statearr_25496[9] = inst_25406);
(statearr_25496[10] = inst_25407);
(statearr_25496[22] = inst_25439);
return statearr_25496;
})();var statearr_25497_25573 = state_25464__$1;(statearr_25497_25573[2] = null);
(statearr_25497_25573[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 10))
{var inst_25348 = (state_25464[14]);var inst_25346 = (state_25464[16]);var inst_25354 = cljs.core._nth.call(null,inst_25346,inst_25348);var inst_25355 = cljs.core.nth.call(null,inst_25354,0,null);var inst_25356 = cljs.core.nth.call(null,inst_25354,1,null);var state_25464__$1 = (function (){var statearr_25498 = state_25464;(statearr_25498[23] = inst_25355);
return statearr_25498;
})();if(cljs.core.truth_(inst_25356))
{var statearr_25499_25574 = state_25464__$1;(statearr_25499_25574[1] = 13);
} else
{var statearr_25500_25575 = state_25464__$1;(statearr_25500_25575[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 42))
{var state_25464__$1 = state_25464;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25464__$1,45,dchan);
} else
{if((state_val_25465 === 11))
{var inst_25345 = (state_25464[17]);var inst_25365 = (state_25464[24]);var inst_25365__$1 = cljs.core.seq.call(null,inst_25345);var state_25464__$1 = (function (){var statearr_25501 = state_25464;(statearr_25501[24] = inst_25365__$1);
return statearr_25501;
})();if(inst_25365__$1)
{var statearr_25502_25576 = state_25464__$1;(statearr_25502_25576[1] = 16);
} else
{var statearr_25503_25577 = state_25464__$1;(statearr_25503_25577[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 43))
{var state_25464__$1 = state_25464;var statearr_25504_25578 = state_25464__$1;(statearr_25504_25578[2] = null);
(statearr_25504_25578[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 12))
{var inst_25391 = (state_25464[2]);var state_25464__$1 = state_25464;var statearr_25505_25579 = state_25464__$1;(statearr_25505_25579[2] = inst_25391);
(statearr_25505_25579[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 44))
{var inst_25457 = (state_25464[2]);var state_25464__$1 = (function (){var statearr_25506 = state_25464;(statearr_25506[25] = inst_25457);
return statearr_25506;
})();var statearr_25507_25580 = state_25464__$1;(statearr_25507_25580[2] = null);
(statearr_25507_25580[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 13))
{var inst_25355 = (state_25464[23]);var inst_25358 = cljs.core.async.close_BANG_.call(null,inst_25355);var state_25464__$1 = state_25464;var statearr_25508_25581 = state_25464__$1;(statearr_25508_25581[2] = inst_25358);
(statearr_25508_25581[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 45))
{var inst_25454 = (state_25464[2]);var state_25464__$1 = state_25464;var statearr_25512_25582 = state_25464__$1;(statearr_25512_25582[2] = inst_25454);
(statearr_25512_25582[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 14))
{var state_25464__$1 = state_25464;var statearr_25513_25583 = state_25464__$1;(statearr_25513_25583[2] = null);
(statearr_25513_25583[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 15))
{var inst_25348 = (state_25464[14]);var inst_25347 = (state_25464[15]);var inst_25346 = (state_25464[16]);var inst_25345 = (state_25464[17]);var inst_25361 = (state_25464[2]);var inst_25362 = (inst_25348 + 1);var tmp25509 = inst_25347;var tmp25510 = inst_25346;var tmp25511 = inst_25345;var inst_25345__$1 = tmp25511;var inst_25346__$1 = tmp25510;var inst_25347__$1 = tmp25509;var inst_25348__$1 = inst_25362;var state_25464__$1 = (function (){var statearr_25514 = state_25464;(statearr_25514[14] = inst_25348__$1);
(statearr_25514[15] = inst_25347__$1);
(statearr_25514[16] = inst_25346__$1);
(statearr_25514[17] = inst_25345__$1);
(statearr_25514[26] = inst_25361);
return statearr_25514;
})();var statearr_25515_25584 = state_25464__$1;(statearr_25515_25584[2] = null);
(statearr_25515_25584[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 16))
{var inst_25365 = (state_25464[24]);var inst_25367 = cljs.core.chunked_seq_QMARK_.call(null,inst_25365);var state_25464__$1 = state_25464;if(inst_25367)
{var statearr_25516_25585 = state_25464__$1;(statearr_25516_25585[1] = 19);
} else
{var statearr_25517_25586 = state_25464__$1;(statearr_25517_25586[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 17))
{var state_25464__$1 = state_25464;var statearr_25518_25587 = state_25464__$1;(statearr_25518_25587[2] = null);
(statearr_25518_25587[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 18))
{var inst_25389 = (state_25464[2]);var state_25464__$1 = state_25464;var statearr_25519_25588 = state_25464__$1;(statearr_25519_25588[2] = inst_25389);
(statearr_25519_25588[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 19))
{var inst_25365 = (state_25464[24]);var inst_25369 = cljs.core.chunk_first.call(null,inst_25365);var inst_25370 = cljs.core.chunk_rest.call(null,inst_25365);var inst_25371 = cljs.core.count.call(null,inst_25369);var inst_25345 = inst_25370;var inst_25346 = inst_25369;var inst_25347 = inst_25371;var inst_25348 = 0;var state_25464__$1 = (function (){var statearr_25520 = state_25464;(statearr_25520[14] = inst_25348);
(statearr_25520[15] = inst_25347);
(statearr_25520[16] = inst_25346);
(statearr_25520[17] = inst_25345);
return statearr_25520;
})();var statearr_25521_25589 = state_25464__$1;(statearr_25521_25589[2] = null);
(statearr_25521_25589[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 20))
{var inst_25365 = (state_25464[24]);var inst_25375 = cljs.core.first.call(null,inst_25365);var inst_25376 = cljs.core.nth.call(null,inst_25375,0,null);var inst_25377 = cljs.core.nth.call(null,inst_25375,1,null);var state_25464__$1 = (function (){var statearr_25522 = state_25464;(statearr_25522[27] = inst_25376);
return statearr_25522;
})();if(cljs.core.truth_(inst_25377))
{var statearr_25523_25590 = state_25464__$1;(statearr_25523_25590[1] = 22);
} else
{var statearr_25524_25591 = state_25464__$1;(statearr_25524_25591[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 21))
{var inst_25386 = (state_25464[2]);var state_25464__$1 = state_25464;var statearr_25525_25592 = state_25464__$1;(statearr_25525_25592[2] = inst_25386);
(statearr_25525_25592[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 22))
{var inst_25376 = (state_25464[27]);var inst_25379 = cljs.core.async.close_BANG_.call(null,inst_25376);var state_25464__$1 = state_25464;var statearr_25526_25593 = state_25464__$1;(statearr_25526_25593[2] = inst_25379);
(statearr_25526_25593[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 23))
{var state_25464__$1 = state_25464;var statearr_25527_25594 = state_25464__$1;(statearr_25527_25594[2] = null);
(statearr_25527_25594[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 24))
{var inst_25365 = (state_25464[24]);var inst_25382 = (state_25464[2]);var inst_25383 = cljs.core.next.call(null,inst_25365);var inst_25345 = inst_25383;var inst_25346 = null;var inst_25347 = 0;var inst_25348 = 0;var state_25464__$1 = (function (){var statearr_25528 = state_25464;(statearr_25528[14] = inst_25348);
(statearr_25528[15] = inst_25347);
(statearr_25528[16] = inst_25346);
(statearr_25528[17] = inst_25345);
(statearr_25528[28] = inst_25382);
return statearr_25528;
})();var statearr_25529_25595 = state_25464__$1;(statearr_25529_25595[2] = null);
(statearr_25529_25595[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 25))
{var inst_25406 = (state_25464[9]);var inst_25407 = (state_25464[10]);var inst_25409 = (inst_25407 < inst_25406);var inst_25410 = inst_25409;var state_25464__$1 = state_25464;if(cljs.core.truth_(inst_25410))
{var statearr_25530_25596 = state_25464__$1;(statearr_25530_25596[1] = 27);
} else
{var statearr_25531_25597 = state_25464__$1;(statearr_25531_25597[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 26))
{var inst_25396 = (state_25464[19]);var inst_25450 = (state_25464[2]);var inst_25451 = cljs.core.seq.call(null,inst_25396);var state_25464__$1 = (function (){var statearr_25532 = state_25464;(statearr_25532[29] = inst_25450);
return statearr_25532;
})();if(inst_25451)
{var statearr_25533_25598 = state_25464__$1;(statearr_25533_25598[1] = 42);
} else
{var statearr_25534_25599 = state_25464__$1;(statearr_25534_25599[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 27))
{var inst_25336 = (state_25464[13]);var inst_25405 = (state_25464[8]);var inst_25412 = (state_25464[30]);var inst_25407 = (state_25464[10]);var inst_25412__$1 = cljs.core._nth.call(null,inst_25405,inst_25407);var inst_25413 = cljs.core.async.put_BANG_.call(null,inst_25412__$1,inst_25336,done);var state_25464__$1 = (function (){var statearr_25535 = state_25464;(statearr_25535[30] = inst_25412__$1);
return statearr_25535;
})();if(cljs.core.truth_(inst_25413))
{var statearr_25536_25600 = state_25464__$1;(statearr_25536_25600[1] = 30);
} else
{var statearr_25537_25601 = state_25464__$1;(statearr_25537_25601[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 28))
{var inst_25423 = (state_25464[12]);var inst_25404 = (state_25464[7]);var inst_25423__$1 = cljs.core.seq.call(null,inst_25404);var state_25464__$1 = (function (){var statearr_25538 = state_25464;(statearr_25538[12] = inst_25423__$1);
return statearr_25538;
})();if(inst_25423__$1)
{var statearr_25539_25602 = state_25464__$1;(statearr_25539_25602[1] = 33);
} else
{var statearr_25540_25603 = state_25464__$1;(statearr_25540_25603[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 29))
{var inst_25448 = (state_25464[2]);var state_25464__$1 = state_25464;var statearr_25541_25604 = state_25464__$1;(statearr_25541_25604[2] = inst_25448);
(statearr_25541_25604[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 30))
{var state_25464__$1 = state_25464;var statearr_25542_25605 = state_25464__$1;(statearr_25542_25605[2] = null);
(statearr_25542_25605[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25465 === 31))
{var inst_25412 = (state_25464[30]);var inst_25416 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_25417 = cljs.core.async.untap_STAR_.call(null,m,inst_25412);var state_25464__$1 = (function (){var statearr_25543 = state_25464;(statearr_25543[31] = inst_25416);
return statearr_25543;
})();var statearr_25544_25606 = state_25464__$1;(statearr_25544_25606[2] = inst_25417);
(statearr_25544_25606[1] = 32);
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
}
}
}
}
}
}
}
});})(c__17563__auto___25552,cs,m,dchan,dctr,done))
;return ((function (switch__17548__auto__,c__17563__auto___25552,cs,m,dchan,dctr,done){
return (function() {
var state_machine__17549__auto__ = null;
var state_machine__17549__auto____0 = (function (){var statearr_25548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25548[0] = state_machine__17549__auto__);
(statearr_25548[1] = 1);
return statearr_25548;
});
var state_machine__17549__auto____1 = (function (state_25464){while(true){
var ret_value__17550__auto__ = (function (){try{while(true){
var result__17551__auto__ = switch__17548__auto__.call(null,state_25464);if(cljs.core.keyword_identical_QMARK_.call(null,result__17551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17551__auto__;
}
break;
}
}catch (e25549){if((e25549 instanceof Object))
{var ex__17552__auto__ = e25549;var statearr_25550_25607 = state_25464;(statearr_25550_25607[5] = ex__17552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25464);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25549;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25608 = state_25464;
state_25464 = G__25608;
continue;
}
} else
{return ret_value__17550__auto__;
}
break;
}
});
state_machine__17549__auto__ = function(state_25464){
switch(arguments.length){
case 0:
return state_machine__17549__auto____0.call(this);
case 1:
return state_machine__17549__auto____1.call(this,state_25464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17549__auto____0;
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17549__auto____1;
return state_machine__17549__auto__;
})()
;})(switch__17548__auto__,c__17563__auto___25552,cs,m,dchan,dctr,done))
})();var state__17565__auto__ = (function (){var statearr_25551 = f__17564__auto__.call(null);(statearr_25551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17563__auto___25552);
return statearr_25551;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17565__auto__);
});})(c__17563__auto___25552,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj25610 = {};return obj25610;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__11114__auto__ = m;if(and__11114__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__11114__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__11753__auto__ = (((m == null))?null:m);return (function (){var or__11126__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__11753__auto__)]);if(or__11126__auto__)
{return or__11126__auto__;
} else
{var or__11126__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__11126__auto____$1)
{return or__11126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__11114__auto__ = m;if(and__11114__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__11114__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__11753__auto__ = (((m == null))?null:m);return (function (){var or__11126__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__11753__auto__)]);if(or__11126__auto__)
{return or__11126__auto__;
} else
{var or__11126__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__11126__auto____$1)
{return or__11126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__11114__auto__ = m;if(and__11114__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__11114__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__11753__auto__ = (((m == null))?null:m);return (function (){var or__11126__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__11753__auto__)]);if(or__11126__auto__)
{return or__11126__auto__;
} else
{var or__11126__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__11126__auto____$1)
{return or__11126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__11114__auto__ = m;if(and__11114__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__11114__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__11753__auto__ = (((m == null))?null:m);return (function (){var or__11126__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__11753__auto__)]);if(or__11126__auto__)
{return or__11126__auto__;
} else
{var or__11126__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__11126__auto____$1)
{return or__11126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__11114__auto__ = m;if(and__11114__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__11114__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__11753__auto__ = (((m == null))?null:m);return (function (){var or__11126__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__11753__auto__)]);if(or__11126__auto__)
{return or__11126__auto__;
} else
{var or__11126__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__11126__auto____$1)
{return or__11126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25730 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25730 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta25731){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta25731 = meta25731;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25730.cljs$lang$type = true;
cljs.core.async.t25730.cljs$lang$ctorStr = "cljs.core.async/t25730";
cljs.core.async.t25730.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__11693__auto__,writer__11694__auto__,opt__11695__auto__){return cljs.core._write.call(null,writer__11694__auto__,"cljs.core.async/t25730");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25730.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25730.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25730.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25730.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25730.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25730.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25730.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25730.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25730.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25732){var self__ = this;
var _25732__$1 = this;return self__.meta25731;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25732,meta25731__$1){var self__ = this;
var _25732__$1 = this;return (new cljs.core.async.t25730(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta25731__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25730 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25730(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25731){return (new cljs.core.async.t25730(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25731));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25730(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__17563__auto___25849 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__17563__auto___25849,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__17564__auto__ = (function (){var switch__17548__auto__ = ((function (c__17563__auto___25849,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25802){var state_val_25803 = (state_25802[1]);if((state_val_25803 === 1))
{var inst_25736 = (state_25802[7]);var inst_25736__$1 = calc_state.call(null);var inst_25737 = cljs.core.seq_QMARK_.call(null,inst_25736__$1);var state_25802__$1 = (function (){var statearr_25804 = state_25802;(statearr_25804[7] = inst_25736__$1);
return statearr_25804;
})();if(inst_25737)
{var statearr_25805_25850 = state_25802__$1;(statearr_25805_25850[1] = 2);
} else
{var statearr_25806_25851 = state_25802__$1;(statearr_25806_25851[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25803 === 2))
{var inst_25736 = (state_25802[7]);var inst_25739 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25736);var state_25802__$1 = state_25802;var statearr_25807_25852 = state_25802__$1;(statearr_25807_25852[2] = inst_25739);
(statearr_25807_25852[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25803 === 3))
{var inst_25736 = (state_25802[7]);var state_25802__$1 = state_25802;var statearr_25808_25853 = state_25802__$1;(statearr_25808_25853[2] = inst_25736);
(statearr_25808_25853[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25803 === 4))
{var inst_25736 = (state_25802[7]);var inst_25742 = (state_25802[2]);var inst_25743 = cljs.core.get.call(null,inst_25742,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_25744 = cljs.core.get.call(null,inst_25742,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_25745 = cljs.core.get.call(null,inst_25742,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_25746 = inst_25736;var state_25802__$1 = (function (){var statearr_25809 = state_25802;(statearr_25809[8] = inst_25744);
(statearr_25809[9] = inst_25743);
(statearr_25809[10] = inst_25745);
(statearr_25809[11] = inst_25746);
return statearr_25809;
})();var statearr_25810_25854 = state_25802__$1;(statearr_25810_25854[2] = null);
(statearr_25810_25854[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25803 === 5))
{var inst_25746 = (state_25802[11]);var inst_25749 = cljs.core.seq_QMARK_.call(null,inst_25746);var state_25802__$1 = state_25802;if(inst_25749)
{var statearr_25811_25855 = state_25802__$1;(statearr_25811_25855[1] = 7);
} else
{var statearr_25812_25856 = state_25802__$1;(statearr_25812_25856[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25803 === 6))
{var inst_25800 = (state_25802[2]);var state_25802__$1 = state_25802;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25802__$1,inst_25800);
} else
{if((state_val_25803 === 7))
{var inst_25746 = (state_25802[11]);var inst_25751 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25746);var state_25802__$1 = state_25802;var statearr_25813_25857 = state_25802__$1;(statearr_25813_25857[2] = inst_25751);
(statearr_25813_25857[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25803 === 8))
{var inst_25746 = (state_25802[11]);var state_25802__$1 = state_25802;var statearr_25814_25858 = state_25802__$1;(statearr_25814_25858[2] = inst_25746);
(statearr_25814_25858[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25803 === 9))
{var inst_25754 = (state_25802[12]);var inst_25754__$1 = (state_25802[2]);var inst_25755 = cljs.core.get.call(null,inst_25754__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_25756 = cljs.core.get.call(null,inst_25754__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_25757 = cljs.core.get.call(null,inst_25754__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_25802__$1 = (function (){var statearr_25815 = state_25802;(statearr_25815[13] = inst_25756);
(statearr_25815[14] = inst_25757);
(statearr_25815[12] = inst_25754__$1);
return statearr_25815;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_25802__$1,10,inst_25755);
} else
{if((state_val_25803 === 10))
{var inst_25761 = (state_25802[15]);var inst_25762 = (state_25802[16]);var inst_25760 = (state_25802[2]);var inst_25761__$1 = cljs.core.nth.call(null,inst_25760,0,null);var inst_25762__$1 = cljs.core.nth.call(null,inst_25760,1,null);var inst_25763 = (inst_25761__$1 == null);var inst_25764 = cljs.core._EQ_.call(null,inst_25762__$1,change);var inst_25765 = (inst_25763) || (inst_25764);var state_25802__$1 = (function (){var statearr_25816 = state_25802;(statearr_25816[15] = inst_25761__$1);
(statearr_25816[16] = inst_25762__$1);
return statearr_25816;
})();if(cljs.core.truth_(inst_25765))
{var statearr_25817_25859 = state_25802__$1;(statearr_25817_25859[1] = 11);
} else
{var statearr_25818_25860 = state_25802__$1;(statearr_25818_25860[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25803 === 11))
{var inst_25761 = (state_25802[15]);var inst_25767 = (inst_25761 == null);var state_25802__$1 = state_25802;if(cljs.core.truth_(inst_25767))
{var statearr_25819_25861 = state_25802__$1;(statearr_25819_25861[1] = 14);
} else
{var statearr_25820_25862 = state_25802__$1;(statearr_25820_25862[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25803 === 12))
{var inst_25776 = (state_25802[17]);var inst_25757 = (state_25802[14]);var inst_25762 = (state_25802[16]);var inst_25776__$1 = inst_25757.call(null,inst_25762);var state_25802__$1 = (function (){var statearr_25821 = state_25802;(statearr_25821[17] = inst_25776__$1);
return statearr_25821;
})();if(cljs.core.truth_(inst_25776__$1))
{var statearr_25822_25863 = state_25802__$1;(statearr_25822_25863[1] = 17);
} else
{var statearr_25823_25864 = state_25802__$1;(statearr_25823_25864[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25803 === 13))
{var inst_25798 = (state_25802[2]);var state_25802__$1 = state_25802;var statearr_25824_25865 = state_25802__$1;(statearr_25824_25865[2] = inst_25798);
(statearr_25824_25865[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25803 === 14))
{var inst_25762 = (state_25802[16]);var inst_25769 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25762);var state_25802__$1 = state_25802;var statearr_25825_25866 = state_25802__$1;(statearr_25825_25866[2] = inst_25769);
(statearr_25825_25866[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25803 === 15))
{var state_25802__$1 = state_25802;var statearr_25826_25867 = state_25802__$1;(statearr_25826_25867[2] = null);
(statearr_25826_25867[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25803 === 16))
{var inst_25772 = (state_25802[2]);var inst_25773 = calc_state.call(null);var inst_25746 = inst_25773;var state_25802__$1 = (function (){var statearr_25827 = state_25802;(statearr_25827[18] = inst_25772);
(statearr_25827[11] = inst_25746);
return statearr_25827;
})();var statearr_25828_25868 = state_25802__$1;(statearr_25828_25868[2] = null);
(statearr_25828_25868[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25803 === 17))
{var inst_25776 = (state_25802[17]);var state_25802__$1 = state_25802;var statearr_25829_25869 = state_25802__$1;(statearr_25829_25869[2] = inst_25776);
(statearr_25829_25869[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25803 === 18))
{var inst_25756 = (state_25802[13]);var inst_25757 = (state_25802[14]);var inst_25762 = (state_25802[16]);var inst_25779 = cljs.core.empty_QMARK_.call(null,inst_25757);var inst_25780 = inst_25756.call(null,inst_25762);var inst_25781 = cljs.core.not.call(null,inst_25780);var inst_25782 = (inst_25779) && (inst_25781);var state_25802__$1 = state_25802;var statearr_25830_25870 = state_25802__$1;(statearr_25830_25870[2] = inst_25782);
(statearr_25830_25870[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25803 === 19))
{var inst_25784 = (state_25802[2]);var state_25802__$1 = state_25802;if(cljs.core.truth_(inst_25784))
{var statearr_25831_25871 = state_25802__$1;(statearr_25831_25871[1] = 20);
} else
{var statearr_25832_25872 = state_25802__$1;(statearr_25832_25872[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25803 === 20))
{var inst_25761 = (state_25802[15]);var state_25802__$1 = state_25802;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25802__$1,23,out,inst_25761);
} else
{if((state_val_25803 === 21))
{var inst_25754 = (state_25802[12]);var inst_25746 = inst_25754;var state_25802__$1 = (function (){var statearr_25833 = state_25802;(statearr_25833[11] = inst_25746);
return statearr_25833;
})();var statearr_25834_25873 = state_25802__$1;(statearr_25834_25873[2] = null);
(statearr_25834_25873[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25803 === 22))
{var inst_25796 = (state_25802[2]);var state_25802__$1 = state_25802;var statearr_25835_25874 = state_25802__$1;(statearr_25835_25874[2] = inst_25796);
(statearr_25835_25874[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25803 === 23))
{var inst_25787 = (state_25802[2]);var state_25802__$1 = state_25802;if(cljs.core.truth_(inst_25787))
{var statearr_25836_25875 = state_25802__$1;(statearr_25836_25875[1] = 24);
} else
{var statearr_25837_25876 = state_25802__$1;(statearr_25837_25876[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25803 === 24))
{var inst_25754 = (state_25802[12]);var inst_25746 = inst_25754;var state_25802__$1 = (function (){var statearr_25838 = state_25802;(statearr_25838[11] = inst_25746);
return statearr_25838;
})();var statearr_25839_25877 = state_25802__$1;(statearr_25839_25877[2] = null);
(statearr_25839_25877[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25803 === 25))
{var state_25802__$1 = state_25802;var statearr_25840_25878 = state_25802__$1;(statearr_25840_25878[2] = null);
(statearr_25840_25878[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25803 === 26))
{var inst_25792 = (state_25802[2]);var state_25802__$1 = state_25802;var statearr_25841_25879 = state_25802__$1;(statearr_25841_25879[2] = inst_25792);
(statearr_25841_25879[1] = 22);
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
}
}
}
}
}
}
}
});})(c__17563__auto___25849,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__17548__auto__,c__17563__auto___25849,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__17549__auto__ = null;
var state_machine__17549__auto____0 = (function (){var statearr_25845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25845[0] = state_machine__17549__auto__);
(statearr_25845[1] = 1);
return statearr_25845;
});
var state_machine__17549__auto____1 = (function (state_25802){while(true){
var ret_value__17550__auto__ = (function (){try{while(true){
var result__17551__auto__ = switch__17548__auto__.call(null,state_25802);if(cljs.core.keyword_identical_QMARK_.call(null,result__17551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17551__auto__;
}
break;
}
}catch (e25846){if((e25846 instanceof Object))
{var ex__17552__auto__ = e25846;var statearr_25847_25880 = state_25802;(statearr_25847_25880[5] = ex__17552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25802);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25846;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25881 = state_25802;
state_25802 = G__25881;
continue;
}
} else
{return ret_value__17550__auto__;
}
break;
}
});
state_machine__17549__auto__ = function(state_25802){
switch(arguments.length){
case 0:
return state_machine__17549__auto____0.call(this);
case 1:
return state_machine__17549__auto____1.call(this,state_25802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17549__auto____0;
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17549__auto____1;
return state_machine__17549__auto__;
})()
;})(switch__17548__auto__,c__17563__auto___25849,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__17565__auto__ = (function (){var statearr_25848 = f__17564__auto__.call(null);(statearr_25848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17563__auto___25849);
return statearr_25848;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17565__auto__);
});})(c__17563__auto___25849,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj25883 = {};return obj25883;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__11114__auto__ = p;if(and__11114__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__11114__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__11753__auto__ = (((p == null))?null:p);return (function (){var or__11126__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__11753__auto__)]);if(or__11126__auto__)
{return or__11126__auto__;
} else
{var or__11126__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__11126__auto____$1)
{return or__11126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__11114__auto__ = p;if(and__11114__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__11114__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__11753__auto__ = (((p == null))?null:p);return (function (){var or__11126__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__11753__auto__)]);if(or__11126__auto__)
{return or__11126__auto__;
} else
{var or__11126__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__11126__auto____$1)
{return or__11126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__11114__auto__ = p;if(and__11114__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__11114__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__11753__auto__ = (((p == null))?null:p);return (function (){var or__11126__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__11753__auto__)]);if(or__11126__auto__)
{return or__11126__auto__;
} else
{var or__11126__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11126__auto____$1)
{return or__11126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__11114__auto__ = p;if(and__11114__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__11114__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__11753__auto__ = (((p == null))?null:p);return (function (){var or__11126__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__11753__auto__)]);if(or__11126__auto__)
{return or__11126__auto__;
} else
{var or__11126__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11126__auto____$1)
{return or__11126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__11126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__11126__auto__))
{return or__11126__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__11126__auto__,mults){
return (function (p1__25884_SHARP_){if(cljs.core.truth_(p1__25884_SHARP_.call(null,topic)))
{return p1__25884_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__25884_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__11126__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26007 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26007 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26008){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26008 = meta26008;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26007.cljs$lang$type = true;
cljs.core.async.t26007.cljs$lang$ctorStr = "cljs.core.async/t26007";
cljs.core.async.t26007.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__11693__auto__,writer__11694__auto__,opt__11695__auto__){return cljs.core._write.call(null,writer__11694__auto__,"cljs.core.async/t26007");
});})(mults,ensure_mult))
;
cljs.core.async.t26007.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26007.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26007.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26007.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26007.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26007.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26007.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26007.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26009){var self__ = this;
var _26009__$1 = this;return self__.meta26008;
});})(mults,ensure_mult))
;
cljs.core.async.t26007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26009,meta26008__$1){var self__ = this;
var _26009__$1 = this;return (new cljs.core.async.t26007(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26008__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26007 = ((function (mults,ensure_mult){
return (function __GT_t26007(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26008){return (new cljs.core.async.t26007(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26008));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26007(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__17563__auto___26129 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__17563__auto___26129,mults,ensure_mult,p){
return (function (){var f__17564__auto__ = (function (){var switch__17548__auto__ = ((function (c__17563__auto___26129,mults,ensure_mult,p){
return (function (state_26081){var state_val_26082 = (state_26081[1]);if((state_val_26082 === 1))
{var state_26081__$1 = state_26081;var statearr_26083_26130 = state_26081__$1;(statearr_26083_26130[2] = null);
(statearr_26083_26130[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 2))
{var state_26081__$1 = state_26081;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26081__$1,4,ch);
} else
{if((state_val_26082 === 3))
{var inst_26079 = (state_26081[2]);var state_26081__$1 = state_26081;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26081__$1,inst_26079);
} else
{if((state_val_26082 === 4))
{var inst_26012 = (state_26081[7]);var inst_26012__$1 = (state_26081[2]);var inst_26013 = (inst_26012__$1 == null);var state_26081__$1 = (function (){var statearr_26084 = state_26081;(statearr_26084[7] = inst_26012__$1);
return statearr_26084;
})();if(cljs.core.truth_(inst_26013))
{var statearr_26085_26131 = state_26081__$1;(statearr_26085_26131[1] = 5);
} else
{var statearr_26086_26132 = state_26081__$1;(statearr_26086_26132[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 5))
{var inst_26019 = cljs.core.deref.call(null,mults);var inst_26020 = cljs.core.vals.call(null,inst_26019);var inst_26021 = cljs.core.seq.call(null,inst_26020);var inst_26022 = inst_26021;var inst_26023 = null;var inst_26024 = 0;var inst_26025 = 0;var state_26081__$1 = (function (){var statearr_26087 = state_26081;(statearr_26087[8] = inst_26025);
(statearr_26087[9] = inst_26023);
(statearr_26087[10] = inst_26024);
(statearr_26087[11] = inst_26022);
return statearr_26087;
})();var statearr_26088_26133 = state_26081__$1;(statearr_26088_26133[2] = null);
(statearr_26088_26133[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 6))
{var inst_26060 = (state_26081[12]);var inst_26012 = (state_26081[7]);var inst_26062 = (state_26081[13]);var inst_26060__$1 = topic_fn.call(null,inst_26012);var inst_26061 = cljs.core.deref.call(null,mults);var inst_26062__$1 = cljs.core.get.call(null,inst_26061,inst_26060__$1);var state_26081__$1 = (function (){var statearr_26089 = state_26081;(statearr_26089[12] = inst_26060__$1);
(statearr_26089[13] = inst_26062__$1);
return statearr_26089;
})();if(cljs.core.truth_(inst_26062__$1))
{var statearr_26090_26134 = state_26081__$1;(statearr_26090_26134[1] = 19);
} else
{var statearr_26091_26135 = state_26081__$1;(statearr_26091_26135[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 7))
{var inst_26077 = (state_26081[2]);var state_26081__$1 = state_26081;var statearr_26092_26136 = state_26081__$1;(statearr_26092_26136[2] = inst_26077);
(statearr_26092_26136[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 8))
{var inst_26025 = (state_26081[8]);var inst_26024 = (state_26081[10]);var inst_26027 = (inst_26025 < inst_26024);var inst_26028 = inst_26027;var state_26081__$1 = state_26081;if(cljs.core.truth_(inst_26028))
{var statearr_26096_26137 = state_26081__$1;(statearr_26096_26137[1] = 10);
} else
{var statearr_26097_26138 = state_26081__$1;(statearr_26097_26138[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 9))
{var inst_26058 = (state_26081[2]);var state_26081__$1 = state_26081;var statearr_26098_26139 = state_26081__$1;(statearr_26098_26139[2] = inst_26058);
(statearr_26098_26139[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 10))
{var inst_26025 = (state_26081[8]);var inst_26023 = (state_26081[9]);var inst_26024 = (state_26081[10]);var inst_26022 = (state_26081[11]);var inst_26030 = cljs.core._nth.call(null,inst_26023,inst_26025);var inst_26031 = cljs.core.async.muxch_STAR_.call(null,inst_26030);var inst_26032 = cljs.core.async.close_BANG_.call(null,inst_26031);var inst_26033 = (inst_26025 + 1);var tmp26093 = inst_26023;var tmp26094 = inst_26024;var tmp26095 = inst_26022;var inst_26022__$1 = tmp26095;var inst_26023__$1 = tmp26093;var inst_26024__$1 = tmp26094;var inst_26025__$1 = inst_26033;var state_26081__$1 = (function (){var statearr_26099 = state_26081;(statearr_26099[8] = inst_26025__$1);
(statearr_26099[9] = inst_26023__$1);
(statearr_26099[10] = inst_26024__$1);
(statearr_26099[11] = inst_26022__$1);
(statearr_26099[14] = inst_26032);
return statearr_26099;
})();var statearr_26100_26140 = state_26081__$1;(statearr_26100_26140[2] = null);
(statearr_26100_26140[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 11))
{var inst_26022 = (state_26081[11]);var inst_26036 = (state_26081[15]);var inst_26036__$1 = cljs.core.seq.call(null,inst_26022);var state_26081__$1 = (function (){var statearr_26101 = state_26081;(statearr_26101[15] = inst_26036__$1);
return statearr_26101;
})();if(inst_26036__$1)
{var statearr_26102_26141 = state_26081__$1;(statearr_26102_26141[1] = 13);
} else
{var statearr_26103_26142 = state_26081__$1;(statearr_26103_26142[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 12))
{var inst_26056 = (state_26081[2]);var state_26081__$1 = state_26081;var statearr_26104_26143 = state_26081__$1;(statearr_26104_26143[2] = inst_26056);
(statearr_26104_26143[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 13))
{var inst_26036 = (state_26081[15]);var inst_26038 = cljs.core.chunked_seq_QMARK_.call(null,inst_26036);var state_26081__$1 = state_26081;if(inst_26038)
{var statearr_26105_26144 = state_26081__$1;(statearr_26105_26144[1] = 16);
} else
{var statearr_26106_26145 = state_26081__$1;(statearr_26106_26145[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 14))
{var state_26081__$1 = state_26081;var statearr_26107_26146 = state_26081__$1;(statearr_26107_26146[2] = null);
(statearr_26107_26146[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 15))
{var inst_26054 = (state_26081[2]);var state_26081__$1 = state_26081;var statearr_26108_26147 = state_26081__$1;(statearr_26108_26147[2] = inst_26054);
(statearr_26108_26147[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 16))
{var inst_26036 = (state_26081[15]);var inst_26040 = cljs.core.chunk_first.call(null,inst_26036);var inst_26041 = cljs.core.chunk_rest.call(null,inst_26036);var inst_26042 = cljs.core.count.call(null,inst_26040);var inst_26022 = inst_26041;var inst_26023 = inst_26040;var inst_26024 = inst_26042;var inst_26025 = 0;var state_26081__$1 = (function (){var statearr_26109 = state_26081;(statearr_26109[8] = inst_26025);
(statearr_26109[9] = inst_26023);
(statearr_26109[10] = inst_26024);
(statearr_26109[11] = inst_26022);
return statearr_26109;
})();var statearr_26110_26148 = state_26081__$1;(statearr_26110_26148[2] = null);
(statearr_26110_26148[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 17))
{var inst_26036 = (state_26081[15]);var inst_26045 = cljs.core.first.call(null,inst_26036);var inst_26046 = cljs.core.async.muxch_STAR_.call(null,inst_26045);var inst_26047 = cljs.core.async.close_BANG_.call(null,inst_26046);var inst_26048 = cljs.core.next.call(null,inst_26036);var inst_26022 = inst_26048;var inst_26023 = null;var inst_26024 = 0;var inst_26025 = 0;var state_26081__$1 = (function (){var statearr_26111 = state_26081;(statearr_26111[8] = inst_26025);
(statearr_26111[9] = inst_26023);
(statearr_26111[10] = inst_26024);
(statearr_26111[11] = inst_26022);
(statearr_26111[16] = inst_26047);
return statearr_26111;
})();var statearr_26112_26149 = state_26081__$1;(statearr_26112_26149[2] = null);
(statearr_26112_26149[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 18))
{var inst_26051 = (state_26081[2]);var state_26081__$1 = state_26081;var statearr_26113_26150 = state_26081__$1;(statearr_26113_26150[2] = inst_26051);
(statearr_26113_26150[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 19))
{var inst_26012 = (state_26081[7]);var inst_26062 = (state_26081[13]);var inst_26064 = cljs.core.async.muxch_STAR_.call(null,inst_26062);var state_26081__$1 = state_26081;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26081__$1,22,inst_26064,inst_26012);
} else
{if((state_val_26082 === 20))
{var state_26081__$1 = state_26081;var statearr_26114_26151 = state_26081__$1;(statearr_26114_26151[2] = null);
(statearr_26114_26151[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 21))
{var inst_26074 = (state_26081[2]);var state_26081__$1 = (function (){var statearr_26115 = state_26081;(statearr_26115[17] = inst_26074);
return statearr_26115;
})();var statearr_26116_26152 = state_26081__$1;(statearr_26116_26152[2] = null);
(statearr_26116_26152[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 22))
{var inst_26066 = (state_26081[2]);var state_26081__$1 = state_26081;if(cljs.core.truth_(inst_26066))
{var statearr_26117_26153 = state_26081__$1;(statearr_26117_26153[1] = 23);
} else
{var statearr_26118_26154 = state_26081__$1;(statearr_26118_26154[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 23))
{var state_26081__$1 = state_26081;var statearr_26119_26155 = state_26081__$1;(statearr_26119_26155[2] = null);
(statearr_26119_26155[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 24))
{var inst_26060 = (state_26081[12]);var inst_26069 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26060);var state_26081__$1 = state_26081;var statearr_26120_26156 = state_26081__$1;(statearr_26120_26156[2] = inst_26069);
(statearr_26120_26156[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 25))
{var inst_26071 = (state_26081[2]);var state_26081__$1 = state_26081;var statearr_26121_26157 = state_26081__$1;(statearr_26121_26157[2] = inst_26071);
(statearr_26121_26157[1] = 21);
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
}
}
}
}
}
}
});})(c__17563__auto___26129,mults,ensure_mult,p))
;return ((function (switch__17548__auto__,c__17563__auto___26129,mults,ensure_mult,p){
return (function() {
var state_machine__17549__auto__ = null;
var state_machine__17549__auto____0 = (function (){var statearr_26125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26125[0] = state_machine__17549__auto__);
(statearr_26125[1] = 1);
return statearr_26125;
});
var state_machine__17549__auto____1 = (function (state_26081){while(true){
var ret_value__17550__auto__ = (function (){try{while(true){
var result__17551__auto__ = switch__17548__auto__.call(null,state_26081);if(cljs.core.keyword_identical_QMARK_.call(null,result__17551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17551__auto__;
}
break;
}
}catch (e26126){if((e26126 instanceof Object))
{var ex__17552__auto__ = e26126;var statearr_26127_26158 = state_26081;(statearr_26127_26158[5] = ex__17552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26081);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26126;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26159 = state_26081;
state_26081 = G__26159;
continue;
}
} else
{return ret_value__17550__auto__;
}
break;
}
});
state_machine__17549__auto__ = function(state_26081){
switch(arguments.length){
case 0:
return state_machine__17549__auto____0.call(this);
case 1:
return state_machine__17549__auto____1.call(this,state_26081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17549__auto____0;
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17549__auto____1;
return state_machine__17549__auto__;
})()
;})(switch__17548__auto__,c__17563__auto___26129,mults,ensure_mult,p))
})();var state__17565__auto__ = (function (){var statearr_26128 = f__17564__auto__.call(null);(statearr_26128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17563__auto___26129);
return statearr_26128;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17565__auto__);
});})(c__17563__auto___26129,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__17563__auto___26296 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__17563__auto___26296,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__17564__auto__ = (function (){var switch__17548__auto__ = ((function (c__17563__auto___26296,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26266){var state_val_26267 = (state_26266[1]);if((state_val_26267 === 1))
{var state_26266__$1 = state_26266;var statearr_26268_26297 = state_26266__$1;(statearr_26268_26297[2] = null);
(statearr_26268_26297[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26267 === 2))
{var inst_26229 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_26230 = 0;var state_26266__$1 = (function (){var statearr_26269 = state_26266;(statearr_26269[7] = inst_26229);
(statearr_26269[8] = inst_26230);
return statearr_26269;
})();var statearr_26270_26298 = state_26266__$1;(statearr_26270_26298[2] = null);
(statearr_26270_26298[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26267 === 3))
{var inst_26264 = (state_26266[2]);var state_26266__$1 = state_26266;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26266__$1,inst_26264);
} else
{if((state_val_26267 === 4))
{var inst_26230 = (state_26266[8]);var inst_26232 = (inst_26230 < cnt);var state_26266__$1 = state_26266;if(cljs.core.truth_(inst_26232))
{var statearr_26271_26299 = state_26266__$1;(statearr_26271_26299[1] = 6);
} else
{var statearr_26272_26300 = state_26266__$1;(statearr_26272_26300[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26267 === 5))
{var inst_26250 = (state_26266[2]);var state_26266__$1 = (function (){var statearr_26273 = state_26266;(statearr_26273[9] = inst_26250);
return statearr_26273;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26266__$1,12,dchan);
} else
{if((state_val_26267 === 6))
{var state_26266__$1 = state_26266;var statearr_26274_26301 = state_26266__$1;(statearr_26274_26301[2] = null);
(statearr_26274_26301[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26267 === 7))
{var state_26266__$1 = state_26266;var statearr_26275_26302 = state_26266__$1;(statearr_26275_26302[2] = null);
(statearr_26275_26302[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26267 === 8))
{var inst_26248 = (state_26266[2]);var state_26266__$1 = state_26266;var statearr_26276_26303 = state_26266__$1;(statearr_26276_26303[2] = inst_26248);
(statearr_26276_26303[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26267 === 9))
{var inst_26230 = (state_26266[8]);var inst_26243 = (state_26266[2]);var inst_26244 = (inst_26230 + 1);var inst_26230__$1 = inst_26244;var state_26266__$1 = (function (){var statearr_26277 = state_26266;(statearr_26277[8] = inst_26230__$1);
(statearr_26277[10] = inst_26243);
return statearr_26277;
})();var statearr_26278_26304 = state_26266__$1;(statearr_26278_26304[2] = null);
(statearr_26278_26304[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26267 === 10))
{var inst_26234 = (state_26266[2]);var inst_26235 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_26266__$1 = (function (){var statearr_26279 = state_26266;(statearr_26279[11] = inst_26234);
return statearr_26279;
})();var statearr_26280_26305 = state_26266__$1;(statearr_26280_26305[2] = inst_26235);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26266__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26267 === 11))
{var inst_26230 = (state_26266[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26266,10,Object,null,9);var inst_26239 = chs__$1.call(null,inst_26230);var inst_26240 = done.call(null,inst_26230);var inst_26241 = cljs.core.async.take_BANG_.call(null,inst_26239,inst_26240);var state_26266__$1 = state_26266;var statearr_26281_26306 = state_26266__$1;(statearr_26281_26306[2] = inst_26241);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26266__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26267 === 12))
{var inst_26252 = (state_26266[12]);var inst_26252__$1 = (state_26266[2]);var inst_26253 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26252__$1);var state_26266__$1 = (function (){var statearr_26282 = state_26266;(statearr_26282[12] = inst_26252__$1);
return statearr_26282;
})();if(cljs.core.truth_(inst_26253))
{var statearr_26283_26307 = state_26266__$1;(statearr_26283_26307[1] = 13);
} else
{var statearr_26284_26308 = state_26266__$1;(statearr_26284_26308[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26267 === 13))
{var inst_26255 = cljs.core.async.close_BANG_.call(null,out);var state_26266__$1 = state_26266;var statearr_26285_26309 = state_26266__$1;(statearr_26285_26309[2] = inst_26255);
(statearr_26285_26309[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26267 === 14))
{var inst_26252 = (state_26266[12]);var inst_26257 = cljs.core.apply.call(null,f,inst_26252);var state_26266__$1 = state_26266;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26266__$1,16,out,inst_26257);
} else
{if((state_val_26267 === 15))
{var inst_26262 = (state_26266[2]);var state_26266__$1 = state_26266;var statearr_26286_26310 = state_26266__$1;(statearr_26286_26310[2] = inst_26262);
(statearr_26286_26310[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26267 === 16))
{var inst_26259 = (state_26266[2]);var state_26266__$1 = (function (){var statearr_26287 = state_26266;(statearr_26287[13] = inst_26259);
return statearr_26287;
})();var statearr_26288_26311 = state_26266__$1;(statearr_26288_26311[2] = null);
(statearr_26288_26311[1] = 2);
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
});})(c__17563__auto___26296,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__17548__auto__,c__17563__auto___26296,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__17549__auto__ = null;
var state_machine__17549__auto____0 = (function (){var statearr_26292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26292[0] = state_machine__17549__auto__);
(statearr_26292[1] = 1);
return statearr_26292;
});
var state_machine__17549__auto____1 = (function (state_26266){while(true){
var ret_value__17550__auto__ = (function (){try{while(true){
var result__17551__auto__ = switch__17548__auto__.call(null,state_26266);if(cljs.core.keyword_identical_QMARK_.call(null,result__17551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17551__auto__;
}
break;
}
}catch (e26293){if((e26293 instanceof Object))
{var ex__17552__auto__ = e26293;var statearr_26294_26312 = state_26266;(statearr_26294_26312[5] = ex__17552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26266);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26293;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26313 = state_26266;
state_26266 = G__26313;
continue;
}
} else
{return ret_value__17550__auto__;
}
break;
}
});
state_machine__17549__auto__ = function(state_26266){
switch(arguments.length){
case 0:
return state_machine__17549__auto____0.call(this);
case 1:
return state_machine__17549__auto____1.call(this,state_26266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17549__auto____0;
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17549__auto____1;
return state_machine__17549__auto__;
})()
;})(switch__17548__auto__,c__17563__auto___26296,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__17565__auto__ = (function (){var statearr_26295 = f__17564__auto__.call(null);(statearr_26295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17563__auto___26296);
return statearr_26295;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17565__auto__);
});})(c__17563__auto___26296,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__17563__auto___26421 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__17563__auto___26421,out){
return (function (){var f__17564__auto__ = (function (){var switch__17548__auto__ = ((function (c__17563__auto___26421,out){
return (function (state_26397){var state_val_26398 = (state_26397[1]);if((state_val_26398 === 1))
{var inst_26368 = cljs.core.vec.call(null,chs);var inst_26369 = inst_26368;var state_26397__$1 = (function (){var statearr_26399 = state_26397;(statearr_26399[7] = inst_26369);
return statearr_26399;
})();var statearr_26400_26422 = state_26397__$1;(statearr_26400_26422[2] = null);
(statearr_26400_26422[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26398 === 2))
{var inst_26369 = (state_26397[7]);var inst_26371 = cljs.core.count.call(null,inst_26369);var inst_26372 = (inst_26371 > 0);var state_26397__$1 = state_26397;if(cljs.core.truth_(inst_26372))
{var statearr_26401_26423 = state_26397__$1;(statearr_26401_26423[1] = 4);
} else
{var statearr_26402_26424 = state_26397__$1;(statearr_26402_26424[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26398 === 3))
{var inst_26395 = (state_26397[2]);var state_26397__$1 = state_26397;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26397__$1,inst_26395);
} else
{if((state_val_26398 === 4))
{var inst_26369 = (state_26397[7]);var state_26397__$1 = state_26397;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26397__$1,7,inst_26369);
} else
{if((state_val_26398 === 5))
{var inst_26391 = cljs.core.async.close_BANG_.call(null,out);var state_26397__$1 = state_26397;var statearr_26403_26425 = state_26397__$1;(statearr_26403_26425[2] = inst_26391);
(statearr_26403_26425[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26398 === 6))
{var inst_26393 = (state_26397[2]);var state_26397__$1 = state_26397;var statearr_26404_26426 = state_26397__$1;(statearr_26404_26426[2] = inst_26393);
(statearr_26404_26426[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26398 === 7))
{var inst_26377 = (state_26397[8]);var inst_26376 = (state_26397[9]);var inst_26376__$1 = (state_26397[2]);var inst_26377__$1 = cljs.core.nth.call(null,inst_26376__$1,0,null);var inst_26378 = cljs.core.nth.call(null,inst_26376__$1,1,null);var inst_26379 = (inst_26377__$1 == null);var state_26397__$1 = (function (){var statearr_26405 = state_26397;(statearr_26405[8] = inst_26377__$1);
(statearr_26405[10] = inst_26378);
(statearr_26405[9] = inst_26376__$1);
return statearr_26405;
})();if(cljs.core.truth_(inst_26379))
{var statearr_26406_26427 = state_26397__$1;(statearr_26406_26427[1] = 8);
} else
{var statearr_26407_26428 = state_26397__$1;(statearr_26407_26428[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26398 === 8))
{var inst_26377 = (state_26397[8]);var inst_26378 = (state_26397[10]);var inst_26376 = (state_26397[9]);var inst_26369 = (state_26397[7]);var inst_26381 = (function (){var c = inst_26378;var v = inst_26377;var vec__26374 = inst_26376;var cs = inst_26369;return ((function (c,v,vec__26374,cs,inst_26377,inst_26378,inst_26376,inst_26369,state_val_26398,c__17563__auto___26421,out){
return (function (p1__26314_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__26314_SHARP_);
});
;})(c,v,vec__26374,cs,inst_26377,inst_26378,inst_26376,inst_26369,state_val_26398,c__17563__auto___26421,out))
})();var inst_26382 = cljs.core.filterv.call(null,inst_26381,inst_26369);var inst_26369__$1 = inst_26382;var state_26397__$1 = (function (){var statearr_26408 = state_26397;(statearr_26408[7] = inst_26369__$1);
return statearr_26408;
})();var statearr_26409_26429 = state_26397__$1;(statearr_26409_26429[2] = null);
(statearr_26409_26429[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26398 === 9))
{var inst_26377 = (state_26397[8]);var state_26397__$1 = state_26397;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26397__$1,11,out,inst_26377);
} else
{if((state_val_26398 === 10))
{var inst_26389 = (state_26397[2]);var state_26397__$1 = state_26397;var statearr_26411_26430 = state_26397__$1;(statearr_26411_26430[2] = inst_26389);
(statearr_26411_26430[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26398 === 11))
{var inst_26369 = (state_26397[7]);var inst_26386 = (state_26397[2]);var tmp26410 = inst_26369;var inst_26369__$1 = tmp26410;var state_26397__$1 = (function (){var statearr_26412 = state_26397;(statearr_26412[11] = inst_26386);
(statearr_26412[7] = inst_26369__$1);
return statearr_26412;
})();var statearr_26413_26431 = state_26397__$1;(statearr_26413_26431[2] = null);
(statearr_26413_26431[1] = 2);
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
});})(c__17563__auto___26421,out))
;return ((function (switch__17548__auto__,c__17563__auto___26421,out){
return (function() {
var state_machine__17549__auto__ = null;
var state_machine__17549__auto____0 = (function (){var statearr_26417 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26417[0] = state_machine__17549__auto__);
(statearr_26417[1] = 1);
return statearr_26417;
});
var state_machine__17549__auto____1 = (function (state_26397){while(true){
var ret_value__17550__auto__ = (function (){try{while(true){
var result__17551__auto__ = switch__17548__auto__.call(null,state_26397);if(cljs.core.keyword_identical_QMARK_.call(null,result__17551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17551__auto__;
}
break;
}
}catch (e26418){if((e26418 instanceof Object))
{var ex__17552__auto__ = e26418;var statearr_26419_26432 = state_26397;(statearr_26419_26432[5] = ex__17552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26397);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26418;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26433 = state_26397;
state_26397 = G__26433;
continue;
}
} else
{return ret_value__17550__auto__;
}
break;
}
});
state_machine__17549__auto__ = function(state_26397){
switch(arguments.length){
case 0:
return state_machine__17549__auto____0.call(this);
case 1:
return state_machine__17549__auto____1.call(this,state_26397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17549__auto____0;
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17549__auto____1;
return state_machine__17549__auto__;
})()
;})(switch__17548__auto__,c__17563__auto___26421,out))
})();var state__17565__auto__ = (function (){var statearr_26420 = f__17564__auto__.call(null);(statearr_26420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17563__auto___26421);
return statearr_26420;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17565__auto__);
});})(c__17563__auto___26421,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__17563__auto___26526 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__17563__auto___26526,out){
return (function (){var f__17564__auto__ = (function (){var switch__17548__auto__ = ((function (c__17563__auto___26526,out){
return (function (state_26503){var state_val_26504 = (state_26503[1]);if((state_val_26504 === 1))
{var inst_26480 = 0;var state_26503__$1 = (function (){var statearr_26505 = state_26503;(statearr_26505[7] = inst_26480);
return statearr_26505;
})();var statearr_26506_26527 = state_26503__$1;(statearr_26506_26527[2] = null);
(statearr_26506_26527[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 2))
{var inst_26480 = (state_26503[7]);var inst_26482 = (inst_26480 < n);var state_26503__$1 = state_26503;if(cljs.core.truth_(inst_26482))
{var statearr_26507_26528 = state_26503__$1;(statearr_26507_26528[1] = 4);
} else
{var statearr_26508_26529 = state_26503__$1;(statearr_26508_26529[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 3))
{var inst_26500 = (state_26503[2]);var inst_26501 = cljs.core.async.close_BANG_.call(null,out);var state_26503__$1 = (function (){var statearr_26509 = state_26503;(statearr_26509[8] = inst_26500);
return statearr_26509;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26503__$1,inst_26501);
} else
{if((state_val_26504 === 4))
{var state_26503__$1 = state_26503;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26503__$1,7,ch);
} else
{if((state_val_26504 === 5))
{var state_26503__$1 = state_26503;var statearr_26510_26530 = state_26503__$1;(statearr_26510_26530[2] = null);
(statearr_26510_26530[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 6))
{var inst_26498 = (state_26503[2]);var state_26503__$1 = state_26503;var statearr_26511_26531 = state_26503__$1;(statearr_26511_26531[2] = inst_26498);
(statearr_26511_26531[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 7))
{var inst_26485 = (state_26503[9]);var inst_26485__$1 = (state_26503[2]);var inst_26486 = (inst_26485__$1 == null);var inst_26487 = cljs.core.not.call(null,inst_26486);var state_26503__$1 = (function (){var statearr_26512 = state_26503;(statearr_26512[9] = inst_26485__$1);
return statearr_26512;
})();if(inst_26487)
{var statearr_26513_26532 = state_26503__$1;(statearr_26513_26532[1] = 8);
} else
{var statearr_26514_26533 = state_26503__$1;(statearr_26514_26533[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 8))
{var inst_26485 = (state_26503[9]);var state_26503__$1 = state_26503;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26503__$1,11,out,inst_26485);
} else
{if((state_val_26504 === 9))
{var state_26503__$1 = state_26503;var statearr_26515_26534 = state_26503__$1;(statearr_26515_26534[2] = null);
(statearr_26515_26534[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 10))
{var inst_26495 = (state_26503[2]);var state_26503__$1 = state_26503;var statearr_26516_26535 = state_26503__$1;(statearr_26516_26535[2] = inst_26495);
(statearr_26516_26535[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 11))
{var inst_26480 = (state_26503[7]);var inst_26490 = (state_26503[2]);var inst_26491 = (inst_26480 + 1);var inst_26480__$1 = inst_26491;var state_26503__$1 = (function (){var statearr_26517 = state_26503;(statearr_26517[10] = inst_26490);
(statearr_26517[7] = inst_26480__$1);
return statearr_26517;
})();var statearr_26518_26536 = state_26503__$1;(statearr_26518_26536[2] = null);
(statearr_26518_26536[1] = 2);
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
});})(c__17563__auto___26526,out))
;return ((function (switch__17548__auto__,c__17563__auto___26526,out){
return (function() {
var state_machine__17549__auto__ = null;
var state_machine__17549__auto____0 = (function (){var statearr_26522 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26522[0] = state_machine__17549__auto__);
(statearr_26522[1] = 1);
return statearr_26522;
});
var state_machine__17549__auto____1 = (function (state_26503){while(true){
var ret_value__17550__auto__ = (function (){try{while(true){
var result__17551__auto__ = switch__17548__auto__.call(null,state_26503);if(cljs.core.keyword_identical_QMARK_.call(null,result__17551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17551__auto__;
}
break;
}
}catch (e26523){if((e26523 instanceof Object))
{var ex__17552__auto__ = e26523;var statearr_26524_26537 = state_26503;(statearr_26524_26537[5] = ex__17552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26503);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26523;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26538 = state_26503;
state_26503 = G__26538;
continue;
}
} else
{return ret_value__17550__auto__;
}
break;
}
});
state_machine__17549__auto__ = function(state_26503){
switch(arguments.length){
case 0:
return state_machine__17549__auto____0.call(this);
case 1:
return state_machine__17549__auto____1.call(this,state_26503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17549__auto____0;
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17549__auto____1;
return state_machine__17549__auto__;
})()
;})(switch__17548__auto__,c__17563__auto___26526,out))
})();var state__17565__auto__ = (function (){var statearr_26525 = f__17564__auto__.call(null);(statearr_26525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17563__auto___26526);
return statearr_26525;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17565__auto__);
});})(c__17563__auto___26526,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__17563__auto___26635 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__17563__auto___26635,out){
return (function (){var f__17564__auto__ = (function (){var switch__17548__auto__ = ((function (c__17563__auto___26635,out){
return (function (state_26610){var state_val_26611 = (state_26610[1]);if((state_val_26611 === 1))
{var inst_26587 = null;var state_26610__$1 = (function (){var statearr_26612 = state_26610;(statearr_26612[7] = inst_26587);
return statearr_26612;
})();var statearr_26613_26636 = state_26610__$1;(statearr_26613_26636[2] = null);
(statearr_26613_26636[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26611 === 2))
{var state_26610__$1 = state_26610;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26610__$1,4,ch);
} else
{if((state_val_26611 === 3))
{var inst_26607 = (state_26610[2]);var inst_26608 = cljs.core.async.close_BANG_.call(null,out);var state_26610__$1 = (function (){var statearr_26614 = state_26610;(statearr_26614[8] = inst_26607);
return statearr_26614;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26610__$1,inst_26608);
} else
{if((state_val_26611 === 4))
{var inst_26590 = (state_26610[9]);var inst_26590__$1 = (state_26610[2]);var inst_26591 = (inst_26590__$1 == null);var inst_26592 = cljs.core.not.call(null,inst_26591);var state_26610__$1 = (function (){var statearr_26615 = state_26610;(statearr_26615[9] = inst_26590__$1);
return statearr_26615;
})();if(inst_26592)
{var statearr_26616_26637 = state_26610__$1;(statearr_26616_26637[1] = 5);
} else
{var statearr_26617_26638 = state_26610__$1;(statearr_26617_26638[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26611 === 5))
{var inst_26587 = (state_26610[7]);var inst_26590 = (state_26610[9]);var inst_26594 = cljs.core._EQ_.call(null,inst_26590,inst_26587);var state_26610__$1 = state_26610;if(inst_26594)
{var statearr_26618_26639 = state_26610__$1;(statearr_26618_26639[1] = 8);
} else
{var statearr_26619_26640 = state_26610__$1;(statearr_26619_26640[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26611 === 6))
{var state_26610__$1 = state_26610;var statearr_26621_26641 = state_26610__$1;(statearr_26621_26641[2] = null);
(statearr_26621_26641[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26611 === 7))
{var inst_26605 = (state_26610[2]);var state_26610__$1 = state_26610;var statearr_26622_26642 = state_26610__$1;(statearr_26622_26642[2] = inst_26605);
(statearr_26622_26642[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26611 === 8))
{var inst_26587 = (state_26610[7]);var tmp26620 = inst_26587;var inst_26587__$1 = tmp26620;var state_26610__$1 = (function (){var statearr_26623 = state_26610;(statearr_26623[7] = inst_26587__$1);
return statearr_26623;
})();var statearr_26624_26643 = state_26610__$1;(statearr_26624_26643[2] = null);
(statearr_26624_26643[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26611 === 9))
{var inst_26590 = (state_26610[9]);var state_26610__$1 = state_26610;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26610__$1,11,out,inst_26590);
} else
{if((state_val_26611 === 10))
{var inst_26602 = (state_26610[2]);var state_26610__$1 = state_26610;var statearr_26625_26644 = state_26610__$1;(statearr_26625_26644[2] = inst_26602);
(statearr_26625_26644[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26611 === 11))
{var inst_26590 = (state_26610[9]);var inst_26599 = (state_26610[2]);var inst_26587 = inst_26590;var state_26610__$1 = (function (){var statearr_26626 = state_26610;(statearr_26626[7] = inst_26587);
(statearr_26626[10] = inst_26599);
return statearr_26626;
})();var statearr_26627_26645 = state_26610__$1;(statearr_26627_26645[2] = null);
(statearr_26627_26645[1] = 2);
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
});})(c__17563__auto___26635,out))
;return ((function (switch__17548__auto__,c__17563__auto___26635,out){
return (function() {
var state_machine__17549__auto__ = null;
var state_machine__17549__auto____0 = (function (){var statearr_26631 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26631[0] = state_machine__17549__auto__);
(statearr_26631[1] = 1);
return statearr_26631;
});
var state_machine__17549__auto____1 = (function (state_26610){while(true){
var ret_value__17550__auto__ = (function (){try{while(true){
var result__17551__auto__ = switch__17548__auto__.call(null,state_26610);if(cljs.core.keyword_identical_QMARK_.call(null,result__17551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17551__auto__;
}
break;
}
}catch (e26632){if((e26632 instanceof Object))
{var ex__17552__auto__ = e26632;var statearr_26633_26646 = state_26610;(statearr_26633_26646[5] = ex__17552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26610);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26632;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26647 = state_26610;
state_26610 = G__26647;
continue;
}
} else
{return ret_value__17550__auto__;
}
break;
}
});
state_machine__17549__auto__ = function(state_26610){
switch(arguments.length){
case 0:
return state_machine__17549__auto____0.call(this);
case 1:
return state_machine__17549__auto____1.call(this,state_26610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17549__auto____0;
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17549__auto____1;
return state_machine__17549__auto__;
})()
;})(switch__17548__auto__,c__17563__auto___26635,out))
})();var state__17565__auto__ = (function (){var statearr_26634 = f__17564__auto__.call(null);(statearr_26634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17563__auto___26635);
return statearr_26634;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17565__auto__);
});})(c__17563__auto___26635,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__17563__auto___26782 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__17563__auto___26782,out){
return (function (){var f__17564__auto__ = (function (){var switch__17548__auto__ = ((function (c__17563__auto___26782,out){
return (function (state_26752){var state_val_26753 = (state_26752[1]);if((state_val_26753 === 1))
{var inst_26715 = (new Array(n));var inst_26716 = inst_26715;var inst_26717 = 0;var state_26752__$1 = (function (){var statearr_26754 = state_26752;(statearr_26754[7] = inst_26717);
(statearr_26754[8] = inst_26716);
return statearr_26754;
})();var statearr_26755_26783 = state_26752__$1;(statearr_26755_26783[2] = null);
(statearr_26755_26783[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26753 === 2))
{var state_26752__$1 = state_26752;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26752__$1,4,ch);
} else
{if((state_val_26753 === 3))
{var inst_26750 = (state_26752[2]);var state_26752__$1 = state_26752;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26752__$1,inst_26750);
} else
{if((state_val_26753 === 4))
{var inst_26720 = (state_26752[9]);var inst_26720__$1 = (state_26752[2]);var inst_26721 = (inst_26720__$1 == null);var inst_26722 = cljs.core.not.call(null,inst_26721);var state_26752__$1 = (function (){var statearr_26756 = state_26752;(statearr_26756[9] = inst_26720__$1);
return statearr_26756;
})();if(inst_26722)
{var statearr_26757_26784 = state_26752__$1;(statearr_26757_26784[1] = 5);
} else
{var statearr_26758_26785 = state_26752__$1;(statearr_26758_26785[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26753 === 5))
{var inst_26717 = (state_26752[7]);var inst_26725 = (state_26752[10]);var inst_26720 = (state_26752[9]);var inst_26716 = (state_26752[8]);var inst_26724 = (inst_26716[inst_26717] = inst_26720);var inst_26725__$1 = (inst_26717 + 1);var inst_26726 = (inst_26725__$1 < n);var state_26752__$1 = (function (){var statearr_26759 = state_26752;(statearr_26759[11] = inst_26724);
(statearr_26759[10] = inst_26725__$1);
return statearr_26759;
})();if(cljs.core.truth_(inst_26726))
{var statearr_26760_26786 = state_26752__$1;(statearr_26760_26786[1] = 8);
} else
{var statearr_26761_26787 = state_26752__$1;(statearr_26761_26787[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26753 === 6))
{var inst_26717 = (state_26752[7]);var inst_26738 = (inst_26717 > 0);var state_26752__$1 = state_26752;if(cljs.core.truth_(inst_26738))
{var statearr_26763_26788 = state_26752__$1;(statearr_26763_26788[1] = 12);
} else
{var statearr_26764_26789 = state_26752__$1;(statearr_26764_26789[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26753 === 7))
{var inst_26748 = (state_26752[2]);var state_26752__$1 = state_26752;var statearr_26765_26790 = state_26752__$1;(statearr_26765_26790[2] = inst_26748);
(statearr_26765_26790[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26753 === 8))
{var inst_26725 = (state_26752[10]);var inst_26716 = (state_26752[8]);var tmp26762 = inst_26716;var inst_26716__$1 = tmp26762;var inst_26717 = inst_26725;var state_26752__$1 = (function (){var statearr_26766 = state_26752;(statearr_26766[7] = inst_26717);
(statearr_26766[8] = inst_26716__$1);
return statearr_26766;
})();var statearr_26767_26791 = state_26752__$1;(statearr_26767_26791[2] = null);
(statearr_26767_26791[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26753 === 9))
{var inst_26716 = (state_26752[8]);var inst_26730 = cljs.core.vec.call(null,inst_26716);var state_26752__$1 = state_26752;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26752__$1,11,out,inst_26730);
} else
{if((state_val_26753 === 10))
{var inst_26736 = (state_26752[2]);var state_26752__$1 = state_26752;var statearr_26768_26792 = state_26752__$1;(statearr_26768_26792[2] = inst_26736);
(statearr_26768_26792[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26753 === 11))
{var inst_26732 = (state_26752[2]);var inst_26733 = (new Array(n));var inst_26716 = inst_26733;var inst_26717 = 0;var state_26752__$1 = (function (){var statearr_26769 = state_26752;(statearr_26769[7] = inst_26717);
(statearr_26769[12] = inst_26732);
(statearr_26769[8] = inst_26716);
return statearr_26769;
})();var statearr_26770_26793 = state_26752__$1;(statearr_26770_26793[2] = null);
(statearr_26770_26793[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26753 === 12))
{var inst_26716 = (state_26752[8]);var inst_26740 = cljs.core.vec.call(null,inst_26716);var state_26752__$1 = state_26752;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26752__$1,15,out,inst_26740);
} else
{if((state_val_26753 === 13))
{var state_26752__$1 = state_26752;var statearr_26771_26794 = state_26752__$1;(statearr_26771_26794[2] = null);
(statearr_26771_26794[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26753 === 14))
{var inst_26745 = (state_26752[2]);var inst_26746 = cljs.core.async.close_BANG_.call(null,out);var state_26752__$1 = (function (){var statearr_26772 = state_26752;(statearr_26772[13] = inst_26745);
return statearr_26772;
})();var statearr_26773_26795 = state_26752__$1;(statearr_26773_26795[2] = inst_26746);
(statearr_26773_26795[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26753 === 15))
{var inst_26742 = (state_26752[2]);var state_26752__$1 = state_26752;var statearr_26774_26796 = state_26752__$1;(statearr_26774_26796[2] = inst_26742);
(statearr_26774_26796[1] = 14);
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
});})(c__17563__auto___26782,out))
;return ((function (switch__17548__auto__,c__17563__auto___26782,out){
return (function() {
var state_machine__17549__auto__ = null;
var state_machine__17549__auto____0 = (function (){var statearr_26778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26778[0] = state_machine__17549__auto__);
(statearr_26778[1] = 1);
return statearr_26778;
});
var state_machine__17549__auto____1 = (function (state_26752){while(true){
var ret_value__17550__auto__ = (function (){try{while(true){
var result__17551__auto__ = switch__17548__auto__.call(null,state_26752);if(cljs.core.keyword_identical_QMARK_.call(null,result__17551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17551__auto__;
}
break;
}
}catch (e26779){if((e26779 instanceof Object))
{var ex__17552__auto__ = e26779;var statearr_26780_26797 = state_26752;(statearr_26780_26797[5] = ex__17552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26752);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26779;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26798 = state_26752;
state_26752 = G__26798;
continue;
}
} else
{return ret_value__17550__auto__;
}
break;
}
});
state_machine__17549__auto__ = function(state_26752){
switch(arguments.length){
case 0:
return state_machine__17549__auto____0.call(this);
case 1:
return state_machine__17549__auto____1.call(this,state_26752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17549__auto____0;
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17549__auto____1;
return state_machine__17549__auto__;
})()
;})(switch__17548__auto__,c__17563__auto___26782,out))
})();var state__17565__auto__ = (function (){var statearr_26781 = f__17564__auto__.call(null);(statearr_26781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17563__auto___26782);
return statearr_26781;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17565__auto__);
});})(c__17563__auto___26782,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__17563__auto___26941 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__17563__auto___26941,out){
return (function (){var f__17564__auto__ = (function (){var switch__17548__auto__ = ((function (c__17563__auto___26941,out){
return (function (state_26911){var state_val_26912 = (state_26911[1]);if((state_val_26912 === 1))
{var inst_26870 = [];var inst_26871 = inst_26870;var inst_26872 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_26911__$1 = (function (){var statearr_26913 = state_26911;(statearr_26913[7] = inst_26872);
(statearr_26913[8] = inst_26871);
return statearr_26913;
})();var statearr_26914_26942 = state_26911__$1;(statearr_26914_26942[2] = null);
(statearr_26914_26942[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26912 === 2))
{var state_26911__$1 = state_26911;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26911__$1,4,ch);
} else
{if((state_val_26912 === 3))
{var inst_26909 = (state_26911[2]);var state_26911__$1 = state_26911;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26911__$1,inst_26909);
} else
{if((state_val_26912 === 4))
{var inst_26875 = (state_26911[9]);var inst_26875__$1 = (state_26911[2]);var inst_26876 = (inst_26875__$1 == null);var inst_26877 = cljs.core.not.call(null,inst_26876);var state_26911__$1 = (function (){var statearr_26915 = state_26911;(statearr_26915[9] = inst_26875__$1);
return statearr_26915;
})();if(inst_26877)
{var statearr_26916_26943 = state_26911__$1;(statearr_26916_26943[1] = 5);
} else
{var statearr_26917_26944 = state_26911__$1;(statearr_26917_26944[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26912 === 5))
{var inst_26875 = (state_26911[9]);var inst_26872 = (state_26911[7]);var inst_26879 = (state_26911[10]);var inst_26879__$1 = f.call(null,inst_26875);var inst_26880 = cljs.core._EQ_.call(null,inst_26879__$1,inst_26872);var inst_26881 = cljs.core.keyword_identical_QMARK_.call(null,inst_26872,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_26882 = (inst_26880) || (inst_26881);var state_26911__$1 = (function (){var statearr_26918 = state_26911;(statearr_26918[10] = inst_26879__$1);
return statearr_26918;
})();if(cljs.core.truth_(inst_26882))
{var statearr_26919_26945 = state_26911__$1;(statearr_26919_26945[1] = 8);
} else
{var statearr_26920_26946 = state_26911__$1;(statearr_26920_26946[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26912 === 6))
{var inst_26871 = (state_26911[8]);var inst_26896 = inst_26871.length;var inst_26897 = (inst_26896 > 0);var state_26911__$1 = state_26911;if(cljs.core.truth_(inst_26897))
{var statearr_26922_26947 = state_26911__$1;(statearr_26922_26947[1] = 12);
} else
{var statearr_26923_26948 = state_26911__$1;(statearr_26923_26948[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26912 === 7))
{var inst_26907 = (state_26911[2]);var state_26911__$1 = state_26911;var statearr_26924_26949 = state_26911__$1;(statearr_26924_26949[2] = inst_26907);
(statearr_26924_26949[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26912 === 8))
{var inst_26875 = (state_26911[9]);var inst_26871 = (state_26911[8]);var inst_26879 = (state_26911[10]);var inst_26884 = inst_26871.push(inst_26875);var tmp26921 = inst_26871;var inst_26871__$1 = tmp26921;var inst_26872 = inst_26879;var state_26911__$1 = (function (){var statearr_26925 = state_26911;(statearr_26925[7] = inst_26872);
(statearr_26925[8] = inst_26871__$1);
(statearr_26925[11] = inst_26884);
return statearr_26925;
})();var statearr_26926_26950 = state_26911__$1;(statearr_26926_26950[2] = null);
(statearr_26926_26950[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26912 === 9))
{var inst_26871 = (state_26911[8]);var inst_26887 = cljs.core.vec.call(null,inst_26871);var state_26911__$1 = state_26911;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26911__$1,11,out,inst_26887);
} else
{if((state_val_26912 === 10))
{var inst_26894 = (state_26911[2]);var state_26911__$1 = state_26911;var statearr_26927_26951 = state_26911__$1;(statearr_26927_26951[2] = inst_26894);
(statearr_26927_26951[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26912 === 11))
{var inst_26875 = (state_26911[9]);var inst_26879 = (state_26911[10]);var inst_26889 = (state_26911[2]);var inst_26890 = [];var inst_26891 = inst_26890.push(inst_26875);var inst_26871 = inst_26890;var inst_26872 = inst_26879;var state_26911__$1 = (function (){var statearr_26928 = state_26911;(statearr_26928[7] = inst_26872);
(statearr_26928[8] = inst_26871);
(statearr_26928[12] = inst_26889);
(statearr_26928[13] = inst_26891);
return statearr_26928;
})();var statearr_26929_26952 = state_26911__$1;(statearr_26929_26952[2] = null);
(statearr_26929_26952[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26912 === 12))
{var inst_26871 = (state_26911[8]);var inst_26899 = cljs.core.vec.call(null,inst_26871);var state_26911__$1 = state_26911;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26911__$1,15,out,inst_26899);
} else
{if((state_val_26912 === 13))
{var state_26911__$1 = state_26911;var statearr_26930_26953 = state_26911__$1;(statearr_26930_26953[2] = null);
(statearr_26930_26953[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26912 === 14))
{var inst_26904 = (state_26911[2]);var inst_26905 = cljs.core.async.close_BANG_.call(null,out);var state_26911__$1 = (function (){var statearr_26931 = state_26911;(statearr_26931[14] = inst_26904);
return statearr_26931;
})();var statearr_26932_26954 = state_26911__$1;(statearr_26932_26954[2] = inst_26905);
(statearr_26932_26954[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26912 === 15))
{var inst_26901 = (state_26911[2]);var state_26911__$1 = state_26911;var statearr_26933_26955 = state_26911__$1;(statearr_26933_26955[2] = inst_26901);
(statearr_26933_26955[1] = 14);
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
});})(c__17563__auto___26941,out))
;return ((function (switch__17548__auto__,c__17563__auto___26941,out){
return (function() {
var state_machine__17549__auto__ = null;
var state_machine__17549__auto____0 = (function (){var statearr_26937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26937[0] = state_machine__17549__auto__);
(statearr_26937[1] = 1);
return statearr_26937;
});
var state_machine__17549__auto____1 = (function (state_26911){while(true){
var ret_value__17550__auto__ = (function (){try{while(true){
var result__17551__auto__ = switch__17548__auto__.call(null,state_26911);if(cljs.core.keyword_identical_QMARK_.call(null,result__17551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17551__auto__;
}
break;
}
}catch (e26938){if((e26938 instanceof Object))
{var ex__17552__auto__ = e26938;var statearr_26939_26956 = state_26911;(statearr_26939_26956[5] = ex__17552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26911);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26938;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26957 = state_26911;
state_26911 = G__26957;
continue;
}
} else
{return ret_value__17550__auto__;
}
break;
}
});
state_machine__17549__auto__ = function(state_26911){
switch(arguments.length){
case 0:
return state_machine__17549__auto____0.call(this);
case 1:
return state_machine__17549__auto____1.call(this,state_26911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17549__auto____0;
state_machine__17549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17549__auto____1;
return state_machine__17549__auto__;
})()
;})(switch__17548__auto__,c__17563__auto___26941,out))
})();var state__17565__auto__ = (function (){var statearr_26940 = f__17564__auto__.call(null);(statearr_26940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17563__auto___26941);
return statearr_26940;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17565__auto__);
});})(c__17563__auto___26941,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map