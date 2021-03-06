// Compiled by ClojureScript 0.0-2227
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = 0;
cljs.core.async.impl.ioc_helpers.STATE_IDX = 1;
cljs.core.async.impl.ioc_helpers.VALUE_IDX = 2;
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = 3;
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = 4;
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = 5;
cljs.core.async.impl.ioc_helpers.USER_START_IDX = 6;
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_.call(null,(state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),new cljs.core.Keyword(null,"finished","finished",4635210724));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t27016 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t27016 = (function (f,fn_handler,meta27017){
this.f = f;
this.fn_handler = fn_handler;
this.meta27017 = meta27017;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t27016.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t27016.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t27016";
cljs.core.async.impl.ioc_helpers.t27016.cljs$lang$ctorPrWriter = (function (this__11693__auto__,writer__11694__auto__,opt__11695__auto__){return cljs.core._write.call(null,writer__11694__auto__,"cljs.core.async.impl.ioc-helpers/t27016");
});
cljs.core.async.impl.ioc_helpers.t27016.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t27016.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t27016.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t27016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27018){var self__ = this;
var _27018__$1 = this;return self__.meta27017;
});
cljs.core.async.impl.ioc_helpers.t27016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27018,meta27017__$1){var self__ = this;
var _27018__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t27016(self__.f,self__.fn_handler,meta27017__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t27016 = (function __GT_t27016(f__$1,fn_handler__$1,meta27017){return (new cljs.core.async.impl.ioc_helpers.t27016(f__$1,fn_handler__$1,meta27017));
});
}
return (new cljs.core.async.impl.ioc_helpers.t27016(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e27020){if((e27020 instanceof Object))
{var ex = e27020;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27020;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_27023_27025 = state;(statearr_27023_27025[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_27023_27025[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_27024_27026 = state;(statearr_27024_27026[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_27024_27026[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (ret_val){var statearr_27029_27031 = state;(statearr_27029_27031[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);
(statearr_27029_27031[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_27030_27032 = state;(statearr_27030_27032[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_27030_27032[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__27033){var map__27038 = p__27033;var map__27038__$1 = ((cljs.core.seq_QMARK_.call(null,map__27038))?cljs.core.apply.call(null,cljs.core.hash_map,map__27038):map__27038);var opts = map__27038__$1;var statearr_27039_27042 = state;(statearr_27039_27042[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,((function (map__27038,map__27038__$1,opts){
return (function (val){var statearr_27040_27043 = state;(statearr_27040_27043[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27038,map__27038__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_27041_27044 = state;(statearr_27041_27044[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__27033 = null;if (arguments.length > 3) {
  p__27033 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__27033);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__27045){
var state = cljs.core.first(arglist__27045);
arglist__27045 = cljs.core.next(arglist__27045);
var cont_block = cljs.core.first(arglist__27045);
arglist__27045 = cljs.core.next(arglist__27045);
var ports = cljs.core.first(arglist__27045);
var p__27033 = cljs.core.rest(arglist__27045);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__27033);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{cljs.core.async.impl.protocols.put_BANG_.call(null,c,value,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,((function (c){
return (function (){return null;
});})(c))
));
}
cljs.core.async.impl.protocols.close_BANG_.call(null,c);
return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11707__auto__){var self__ = this;
var this__11707__auto____$1 = this;var h__11537__auto__ = self__.__hash;if(!((h__11537__auto__ == null)))
{return h__11537__auto__;
} else
{var h__11537__auto____$1 = cljs.core.hash_imap.call(null,this__11707__auto____$1);self__.__hash = h__11537__auto____$1;
return h__11537__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11712__auto__,k__11713__auto__){var self__ = this;
var this__11712__auto____$1 = this;return cljs.core._lookup.call(null,this__11712__auto____$1,k__11713__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11714__auto__,k27047,else__11715__auto__){var self__ = this;
var this__11714__auto____$1 = this;var G__27049 = (((k27047 instanceof cljs.core.Keyword))?k27047.fqn:null);var caseval__27053;
switch (G__27049){
case "prev":
caseval__27053=self__.prev
break;
case "continue-block":
caseval__27053=self__.continue_block
break;
case "finally-block":
caseval__27053=self__.finally_block
break;
case "catch-exception":
caseval__27053=self__.catch_exception
break;
case "catch-block":
caseval__27053=self__.catch_block
break;
default:
caseval__27053=cljs.core.get.call(null,self__.__extmap,k27047,else__11715__auto__)
}
return caseval__27053;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11719__auto__,k__11720__auto__,G__27046){var self__ = this;
var this__11719__auto____$1 = this;var pred__27050 = cljs.core.keyword_identical_QMARK_;var expr__27051 = k__11720__auto__;if(cljs.core.truth_(pred__27050.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__27051)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__27046,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__27050.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__27051)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__27046,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__27050.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__27051)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__27046,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__27050.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__27051)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__27046,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__27050.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__27051)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__27046,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11720__auto__,G__27046),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11726__auto__,writer__11727__auto__,opts__11728__auto__){var self__ = this;
var this__11726__auto____$1 = this;var pr_pair__11729__auto__ = ((function (this__11726__auto____$1){
return (function (keyval__11730__auto__){return cljs.core.pr_sequential_writer.call(null,writer__11727__auto__,cljs.core.pr_writer,""," ","",opts__11728__auto__,keyval__11730__auto__);
});})(this__11726__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__11727__auto__,pr_pair__11729__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__11728__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11717__auto__,entry__11718__auto__){var self__ = this;
var this__11717__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__11718__auto__))
{return cljs.core._assoc.call(null,this__11717__auto____$1,cljs.core._nth.call(null,entry__11718__auto__,0),cljs.core._nth.call(null,entry__11718__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__11717__auto____$1,entry__11718__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11724__auto__){var self__ = this;
var this__11724__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11716__auto__){var self__ = this;
var this__11716__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11708__auto__,other__11709__auto__){var self__ = this;
var this__11708__auto____$1 = this;if(cljs.core.truth_((function (){var and__11114__auto__ = other__11709__auto__;if(cljs.core.truth_(and__11114__auto__))
{return ((this__11708__auto____$1.constructor === other__11709__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__11708__auto____$1,other__11709__auto__));
} else
{return and__11114__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11711__auto__,G__27046){var self__ = this;
var this__11711__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__27046,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11706__auto__){var self__ = this;
var this__11706__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11710__auto__){var self__ = this;
var this__11710__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11721__auto__,k__11722__auto__){var self__ = this;
var this__11721__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),null,new cljs.core.Keyword(null,"prev","prev",1017353637),null], null), null),k__11722__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11721__auto____$1),self__.__meta),k__11722__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11722__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__11746__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__11746__auto__,writer__11747__auto__){return cljs.core._write.call(null,writer__11747__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__27048){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__27048),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__27048),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__27048),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__27048),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__27048),null,cljs.core.dissoc.call(null,G__27048,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_27055 = state;(statearr_27055[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_27055;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__11114__auto__ = exception;if(cljs.core.truth_(and__11114__auto__))
{return cljs.core.not.call(null,exception_frame);
} else
{return and__11114__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__11114__auto__ = exception;if(cljs.core.truth_(and__11114__auto__))
{var and__11114__auto____$1 = catch_block;if(cljs.core.truth_(and__11114__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__11114__auto____$1;
}
} else
{return and__11114__auto__;
}
})()))
{var statearr_27061 = state;(statearr_27061[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_27061[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_27061[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_27061[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_27061;
} else
{if(cljs.core.truth_((function (){var and__11114__auto__ = exception;if(cljs.core.truth_(and__11114__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__11114__auto__;
}
})()))
{var statearr_27062_27066 = state;(statearr_27062_27066[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__27067 = state;
state = G__27067;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__11114__auto__ = exception;if(cljs.core.truth_(and__11114__auto__))
{var and__11114__auto____$1 = cljs.core.not.call(null,catch_block);if(and__11114__auto____$1)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__11114__auto____$1;
}
} else
{return and__11114__auto__;
}
})()))
{var statearr_27063 = state;(statearr_27063[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_27063[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_27063;
} else
{if(cljs.core.truth_((function (){var and__11114__auto__ = cljs.core.not.call(null,exception);if(and__11114__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__11114__auto__;
}
})()))
{var statearr_27064 = state;(statearr_27064[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_27064[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_27064;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_27065 = state;(statearr_27065[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_27065[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_27065;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(false)
{return null;
} else
{throw (new Error(("Assert failed: No matching clause\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,false)))));
}
} else
{return null;
}
}
}
}
}
}
}
break;
}
});

//# sourceMappingURL=ioc_helpers.js.map