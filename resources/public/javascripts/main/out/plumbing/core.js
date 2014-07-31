// Compiled by ClojureScript 0.0-2227
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1730933117);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__21981__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__21981 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__21981__delegate.call(this,m,k,f,x1,x2,xs);};
G__21981.cljs$lang$maxFixedArity = 5;
G__21981.cljs$lang$applyTo = (function (arglist__21982){
var m = cljs.core.first(arglist__21982);
arglist__21982 = cljs.core.next(arglist__21982);
var k = cljs.core.first(arglist__21982);
arglist__21982 = cljs.core.next(arglist__21982);
var f = cljs.core.first(arglist__21982);
arglist__21982 = cljs.core.next(arglist__21982);
var x1 = cljs.core.first(arglist__21982);
arglist__21982 = cljs.core.next(arglist__21982);
var x2 = cljs.core.first(arglist__21982);
var xs = cljs.core.rest(arglist__21982);
return G__21981__delegate(m,k,f,x1,x2,xs);
});
G__21981.cljs$core$IFn$_invoke$arity$variadic = G__21981__delegate;
return G__21981;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){if(cljs.core.sorted_QMARK_.call(null,m))
{return cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else
{if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var m_atom__16335__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21991_21997 = cljs.core.seq.call(null,m);var chunk__21992_21998 = null;var count__21993_21999 = 0;var i__21994_22000 = 0;while(true){
if((i__21994_22000 < count__21993_21999))
{var vec__21995_22001 = cljs.core._nth.call(null,chunk__21992_21998,i__21994_22000);var k_22002 = cljs.core.nth.call(null,vec__21995_22001,0,null);var v_22003 = cljs.core.nth.call(null,vec__21995_22001,1,null);var m21990_22004 = cljs.core.deref.call(null,m_atom__16335__auto__);cljs.core.reset_BANG_.call(null,m_atom__16335__auto__,cljs.core.assoc_BANG_.call(null,m21990_22004,k_22002,f.call(null,v_22003)));
{
var G__22005 = seq__21991_21997;
var G__22006 = chunk__21992_21998;
var G__22007 = count__21993_21999;
var G__22008 = (i__21994_22000 + 1);
seq__21991_21997 = G__22005;
chunk__21992_21998 = G__22006;
count__21993_21999 = G__22007;
i__21994_22000 = G__22008;
continue;
}
} else
{var temp__4092__auto___22009 = cljs.core.seq.call(null,seq__21991_21997);if(temp__4092__auto___22009)
{var seq__21991_22010__$1 = temp__4092__auto___22009;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21991_22010__$1))
{var c__11882__auto___22011 = cljs.core.chunk_first.call(null,seq__21991_22010__$1);{
var G__22012 = cljs.core.chunk_rest.call(null,seq__21991_22010__$1);
var G__22013 = c__11882__auto___22011;
var G__22014 = cljs.core.count.call(null,c__11882__auto___22011);
var G__22015 = 0;
seq__21991_21997 = G__22012;
chunk__21992_21998 = G__22013;
count__21993_21999 = G__22014;
i__21994_22000 = G__22015;
continue;
}
} else
{var vec__21996_22016 = cljs.core.first.call(null,seq__21991_22010__$1);var k_22017 = cljs.core.nth.call(null,vec__21996_22016,0,null);var v_22018 = cljs.core.nth.call(null,vec__21996_22016,1,null);var m21990_22019 = cljs.core.deref.call(null,m_atom__16335__auto__);cljs.core.reset_BANG_.call(null,m_atom__16335__auto__,cljs.core.assoc_BANG_.call(null,m21990_22019,k_22017,f.call(null,v_22018)));
{
var G__22020 = cljs.core.next.call(null,seq__21991_22010__$1);
var G__22021 = null;
var G__22022 = 0;
var G__22023 = 0;
seq__21991_21997 = G__22020;
chunk__21992_21998 = G__22021;
count__21993_21999 = G__22022;
i__21994_22000 = G__22023;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__16335__auto__));
} else
{return null;
}
}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__16335__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22032_22038 = cljs.core.seq.call(null,m);var chunk__22033_22039 = null;var count__22034_22040 = 0;var i__22035_22041 = 0;while(true){
if((i__22035_22041 < count__22034_22040))
{var vec__22036_22042 = cljs.core._nth.call(null,chunk__22033_22039,i__22035_22041);var k_22043 = cljs.core.nth.call(null,vec__22036_22042,0,null);var v_22044 = cljs.core.nth.call(null,vec__22036_22042,1,null);var m22031_22045 = cljs.core.deref.call(null,m_atom__16335__auto__);cljs.core.reset_BANG_.call(null,m_atom__16335__auto__,cljs.core.assoc_BANG_.call(null,m22031_22045,f.call(null,k_22043),v_22044));
{
var G__22046 = seq__22032_22038;
var G__22047 = chunk__22033_22039;
var G__22048 = count__22034_22040;
var G__22049 = (i__22035_22041 + 1);
seq__22032_22038 = G__22046;
chunk__22033_22039 = G__22047;
count__22034_22040 = G__22048;
i__22035_22041 = G__22049;
continue;
}
} else
{var temp__4092__auto___22050 = cljs.core.seq.call(null,seq__22032_22038);if(temp__4092__auto___22050)
{var seq__22032_22051__$1 = temp__4092__auto___22050;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22032_22051__$1))
{var c__11882__auto___22052 = cljs.core.chunk_first.call(null,seq__22032_22051__$1);{
var G__22053 = cljs.core.chunk_rest.call(null,seq__22032_22051__$1);
var G__22054 = c__11882__auto___22052;
var G__22055 = cljs.core.count.call(null,c__11882__auto___22052);
var G__22056 = 0;
seq__22032_22038 = G__22053;
chunk__22033_22039 = G__22054;
count__22034_22040 = G__22055;
i__22035_22041 = G__22056;
continue;
}
} else
{var vec__22037_22057 = cljs.core.first.call(null,seq__22032_22051__$1);var k_22058 = cljs.core.nth.call(null,vec__22037_22057,0,null);var v_22059 = cljs.core.nth.call(null,vec__22037_22057,1,null);var m22031_22060 = cljs.core.deref.call(null,m_atom__16335__auto__);cljs.core.reset_BANG_.call(null,m_atom__16335__auto__,cljs.core.assoc_BANG_.call(null,m22031_22060,f.call(null,k_22058),v_22059));
{
var G__22061 = cljs.core.next.call(null,seq__22032_22051__$1);
var G__22062 = null;
var G__22063 = 0;
var G__22064 = 0;
seq__22032_22038 = G__22061;
chunk__22033_22039 = G__22062;
count__22034_22040 = G__22063;
i__22035_22041 = G__22064;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__16335__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__16335__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22071_22075 = cljs.core.seq.call(null,ks);var chunk__22072_22076 = null;var count__22073_22077 = 0;var i__22074_22078 = 0;while(true){
if((i__22074_22078 < count__22073_22077))
{var k_22079 = cljs.core._nth.call(null,chunk__22072_22076,i__22074_22078);var m22070_22080 = cljs.core.deref.call(null,m_atom__16335__auto__);cljs.core.reset_BANG_.call(null,m_atom__16335__auto__,cljs.core.assoc_BANG_.call(null,m22070_22080,k_22079,f.call(null,k_22079)));
{
var G__22081 = seq__22071_22075;
var G__22082 = chunk__22072_22076;
var G__22083 = count__22073_22077;
var G__22084 = (i__22074_22078 + 1);
seq__22071_22075 = G__22081;
chunk__22072_22076 = G__22082;
count__22073_22077 = G__22083;
i__22074_22078 = G__22084;
continue;
}
} else
{var temp__4092__auto___22085 = cljs.core.seq.call(null,seq__22071_22075);if(temp__4092__auto___22085)
{var seq__22071_22086__$1 = temp__4092__auto___22085;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22071_22086__$1))
{var c__11882__auto___22087 = cljs.core.chunk_first.call(null,seq__22071_22086__$1);{
var G__22088 = cljs.core.chunk_rest.call(null,seq__22071_22086__$1);
var G__22089 = c__11882__auto___22087;
var G__22090 = cljs.core.count.call(null,c__11882__auto___22087);
var G__22091 = 0;
seq__22071_22075 = G__22088;
chunk__22072_22076 = G__22089;
count__22073_22077 = G__22090;
i__22074_22078 = G__22091;
continue;
}
} else
{var k_22092 = cljs.core.first.call(null,seq__22071_22086__$1);var m22070_22093 = cljs.core.deref.call(null,m_atom__16335__auto__);cljs.core.reset_BANG_.call(null,m_atom__16335__auto__,cljs.core.assoc_BANG_.call(null,m22070_22093,k_22092,f.call(null,k_22092)));
{
var G__22094 = cljs.core.next.call(null,seq__22071_22086__$1);
var G__22095 = null;
var G__22096 = 0;
var G__22097 = 0;
seq__22071_22075 = G__22094;
chunk__22072_22076 = G__22095;
count__22073_22077 = G__22096;
i__22074_22078 = G__22097;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__16335__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__16335__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22104_22108 = cljs.core.seq.call(null,vs);var chunk__22105_22109 = null;var count__22106_22110 = 0;var i__22107_22111 = 0;while(true){
if((i__22107_22111 < count__22106_22110))
{var v_22112 = cljs.core._nth.call(null,chunk__22105_22109,i__22107_22111);var m22103_22113 = cljs.core.deref.call(null,m_atom__16335__auto__);cljs.core.reset_BANG_.call(null,m_atom__16335__auto__,cljs.core.assoc_BANG_.call(null,m22103_22113,f.call(null,v_22112),v_22112));
{
var G__22114 = seq__22104_22108;
var G__22115 = chunk__22105_22109;
var G__22116 = count__22106_22110;
var G__22117 = (i__22107_22111 + 1);
seq__22104_22108 = G__22114;
chunk__22105_22109 = G__22115;
count__22106_22110 = G__22116;
i__22107_22111 = G__22117;
continue;
}
} else
{var temp__4092__auto___22118 = cljs.core.seq.call(null,seq__22104_22108);if(temp__4092__auto___22118)
{var seq__22104_22119__$1 = temp__4092__auto___22118;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22104_22119__$1))
{var c__11882__auto___22120 = cljs.core.chunk_first.call(null,seq__22104_22119__$1);{
var G__22121 = cljs.core.chunk_rest.call(null,seq__22104_22119__$1);
var G__22122 = c__11882__auto___22120;
var G__22123 = cljs.core.count.call(null,c__11882__auto___22120);
var G__22124 = 0;
seq__22104_22108 = G__22121;
chunk__22105_22109 = G__22122;
count__22106_22110 = G__22123;
i__22107_22111 = G__22124;
continue;
}
} else
{var v_22125 = cljs.core.first.call(null,seq__22104_22119__$1);var m22103_22126 = cljs.core.deref.call(null,m_atom__16335__auto__);cljs.core.reset_BANG_.call(null,m_atom__16335__auto__,cljs.core.assoc_BANG_.call(null,m22103_22126,f.call(null,v_22125),v_22125));
{
var G__22127 = cljs.core.next.call(null,seq__22104_22119__$1);
var G__22128 = null;
var G__22129 = 0;
var G__22130 = 0;
seq__22104_22108 = G__22127;
chunk__22105_22109 = G__22128;
count__22106_22110 = G__22129;
i__22107_22111 = G__22130;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__16335__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__22131){var vec__22133 = p__22131;var k = cljs.core.nth.call(null,vec__22133,0,null);var ks = cljs.core.nthnext.call(null,vec__22133,1);if(cljs.core.truth_(m))
{var temp__4090__auto__ = (function (){var and__11114__auto__ = ks;if(and__11114__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__11114__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var res = temp__4090__auto__;return cljs.core.assoc.call(null,m,k,res);
} else
{var res = cljs.core.dissoc.call(null,m,k);if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){if(cljs.core.map_QMARK_.call(null,x))
{var m_atom__16335__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22142_22148 = cljs.core.seq.call(null,x);var chunk__22143_22149 = null;var count__22144_22150 = 0;var i__22145_22151 = 0;while(true){
if((i__22145_22151 < count__22144_22150))
{var vec__22146_22152 = cljs.core._nth.call(null,chunk__22143_22149,i__22145_22151);var k_22153 = cljs.core.nth.call(null,vec__22146_22152,0,null);var v_22154 = cljs.core.nth.call(null,vec__22146_22152,1,null);var m22141_22155 = cljs.core.deref.call(null,m_atom__16335__auto__);cljs.core.reset_BANG_.call(null,m_atom__16335__auto__,cljs.core.assoc_BANG_.call(null,m22141_22155,((typeof k_22153 === 'string')?cljs.core.keyword.call(null,k_22153):k_22153),keywordize_map.call(null,v_22154)));
{
var G__22156 = seq__22142_22148;
var G__22157 = chunk__22143_22149;
var G__22158 = count__22144_22150;
var G__22159 = (i__22145_22151 + 1);
seq__22142_22148 = G__22156;
chunk__22143_22149 = G__22157;
count__22144_22150 = G__22158;
i__22145_22151 = G__22159;
continue;
}
} else
{var temp__4092__auto___22160 = cljs.core.seq.call(null,seq__22142_22148);if(temp__4092__auto___22160)
{var seq__22142_22161__$1 = temp__4092__auto___22160;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22142_22161__$1))
{var c__11882__auto___22162 = cljs.core.chunk_first.call(null,seq__22142_22161__$1);{
var G__22163 = cljs.core.chunk_rest.call(null,seq__22142_22161__$1);
var G__22164 = c__11882__auto___22162;
var G__22165 = cljs.core.count.call(null,c__11882__auto___22162);
var G__22166 = 0;
seq__22142_22148 = G__22163;
chunk__22143_22149 = G__22164;
count__22144_22150 = G__22165;
i__22145_22151 = G__22166;
continue;
}
} else
{var vec__22147_22167 = cljs.core.first.call(null,seq__22142_22161__$1);var k_22168 = cljs.core.nth.call(null,vec__22147_22167,0,null);var v_22169 = cljs.core.nth.call(null,vec__22147_22167,1,null);var m22141_22170 = cljs.core.deref.call(null,m_atom__16335__auto__);cljs.core.reset_BANG_.call(null,m_atom__16335__auto__,cljs.core.assoc_BANG_.call(null,m22141_22170,((typeof k_22168 === 'string')?cljs.core.keyword.call(null,k_22168):k_22168),keywordize_map.call(null,v_22169)));
{
var G__22171 = cljs.core.next.call(null,seq__22142_22161__$1);
var G__22172 = null;
var G__22173 = 0;
var G__22174 = 0;
seq__22142_22148 = G__22171;
chunk__22143_22149 = G__22172;
count__22144_22150 = G__22173;
i__22145_22151 = G__22174;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__16335__auto__));
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.map.call(null,keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.core.mapv.call(null,keywordize_map,x);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return x;
} else
{return null;
}
}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4090__auto__ = cljs.core.find.call(null,m,k);if(cljs.core.truth_(temp__4090__auto__))
{var pair__16404__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__16404__auto__);
} else
{var e = schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m));throw (new Error(e));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq.call(null,ks))
{{
var G__22175 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__22176 = cljs.core.next.call(null,ks);
m = G__22175;
ks = G__22176;
continue;
}
} else
{return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null))))))));
}
return cljs.core.into.call(null,(function (){var or__11126__auto__ = m;if(cljs.core.truth_(or__11126__auto__))
{return or__11126__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__11851__auto__ = (function iter__22185(s__22186){return (new cljs.core.LazySeq(null,(function (){var s__22186__$1 = s__22186;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__22186__$1);if(temp__4092__auto__)
{var s__22186__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22186__$2))
{var c__11849__auto__ = cljs.core.chunk_first.call(null,s__22186__$2);var size__11850__auto__ = cljs.core.count.call(null,c__11849__auto__);var b__22188 = cljs.core.chunk_buffer.call(null,size__11850__auto__);if((function (){var i__22187 = 0;while(true){
if((i__22187 < size__11850__auto__))
{var vec__22191 = cljs.core._nth.call(null,c__11849__auto__,i__22187);var k = cljs.core.nth.call(null,vec__22191,0,null);var v = cljs.core.nth.call(null,vec__22191,1,null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__22188,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22193 = (i__22187 + 1);
i__22187 = G__22193;
continue;
}
} else
{{
var G__22194 = (i__22187 + 1);
i__22187 = G__22194;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22188),iter__22185.call(null,cljs.core.chunk_rest.call(null,s__22186__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22188),null);
}
} else
{var vec__22192 = cljs.core.first.call(null,s__22186__$2);var k = cljs.core.nth.call(null,vec__22192,0,null);var v = cljs.core.nth.call(null,vec__22192,1,null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22185.call(null,cljs.core.rest.call(null,s__22186__$2)));
} else
{{
var G__22195 = cljs.core.rest.call(null,s__22186__$2);
s__22186__$1 = G__22195;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__11851__auto__.call(null,cljs.core.partition.call(null,2,kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__22196){
var m = cljs.core.first(arglist__22196);
var kvs = cljs.core.rest(arglist__22196);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);if(!((plumbing.core._PLUS_none_PLUS_ === found)))
{return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else
{return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__22197){
var m = cljs.core.first(arglist__22197);
arglist__22197 = cljs.core.next(arglist__22197);
var key_seq = cljs.core.first(arglist__22197);
arglist__22197 = cljs.core.next(arglist__22197);
var f = cljs.core.first(arglist__22197);
var args = cljs.core.rest(arglist__22197);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){var k = key_fn.call(null,x);return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.next.call(null,s);if(temp__4092__auto__)
{var n = temp__4092__auto__;return aconcat.call(null,n);
} else
{return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){if(cljs.core.seq.call(null,s))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else
{return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){var temp__4092__auto__ = cljs.core.seq.call(null,xs);if(temp__4092__auto__)
{var xs__$1 = temp__4092__auto__;if(cljs.core.next.call(null,xs__$1))
{return null;
} else
{return cljs.core.first.call(null,xs__$1);
}
} else
{return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.call(null,(function (i,x){if(cljs.core.truth_(f.call(null,x)))
{return i;
} else
{return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__11851__auto__ = ((function (s){
return (function iter__22202(s__22203){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__22203__$1 = s__22203;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__22203__$1);if(temp__4092__auto__)
{var s__22203__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22203__$2))
{var c__11849__auto__ = cljs.core.chunk_first.call(null,s__22203__$2);var size__11850__auto__ = cljs.core.count.call(null,c__11849__auto__);var b__22205 = cljs.core.chunk_buffer.call(null,size__11850__auto__);if((function (){var i__22204 = 0;while(true){
if((i__22204 < size__11850__auto__))
{var x = cljs.core._nth.call(null,c__11849__auto__,i__22204);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__22205,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__22206 = (i__22204 + 1);
i__22204 = G__22206;
continue;
}
} else
{{
var G__22207 = (i__22204 + 1);
i__22204 = G__22207;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22205),iter__22202.call(null,cljs.core.chunk_rest.call(null,s__22203__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22205),null);
}
} else
{var x = cljs.core.first.call(null,s__22203__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__22202.call(null,cljs.core.rest.call(null,s__22203__$2)));
} else
{{
var G__22208 = cljs.core.rest.call(null,s__22203__$2);
s__22203__$1 = G__22208;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;return iter__11851__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){return (new cljs.core.LazySeq(null,(function (){return (function helper(seqs){if(cljs.core.seq.call(null,seqs))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else
{return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__22209){
var colls = cljs.core.seq(arglist__22209);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){if(cljs.core.truth_(x))
{return cljs.core.conj.call(null,coll,x);
} else
{return coll;
}
});
var conj_when__3 = (function() { 
var G__22210__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__22211 = conj_when.call(null,coll,x);
var G__22212 = cljs.core.first.call(null,xs);
var G__22213 = cljs.core.next.call(null,xs);
coll = G__22211;
x = G__22212;
xs = G__22213;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__22210 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22210__delegate.call(this,coll,x,xs);};
G__22210.cljs$lang$maxFixedArity = 2;
G__22210.cljs$lang$applyTo = (function (arglist__22214){
var coll = cljs.core.first(arglist__22214);
arglist__22214 = cljs.core.next(arglist__22214);
var x = cljs.core.first(arglist__22214);
var xs = cljs.core.rest(arglist__22214);
return G__22210__delegate(coll,x,xs);
});
G__22210.cljs$core$IFn$_invoke$arity$variadic = G__22210__delegate;
return G__22210;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){if(cljs.core.truth_(x))
{return cljs.core.cons.call(null,x,s);
} else
{return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){while(true){
var old_val = cljs.core.deref.call(null,a);var new_val = f.call(null,old_val);if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else
{{
continue;
}
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__22216__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__22215_SHARP_){return cljs.core.apply.call(null,f,p1__22215_SHARP_,args);
}));
};
var G__22216 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22216__delegate.call(this,a,f,args);};
G__22216.cljs$lang$maxFixedArity = 2;
G__22216.cljs$lang$applyTo = (function (arglist__22217){
var a = cljs.core.first(arglist__22217);
arglist__22217 = cljs.core.next(arglist__22217);
var f = cljs.core.first(arglist__22217);
var args = cljs.core.rest(arglist__22217);
return G__22216__delegate(a,f,args);
});
G__22216.cljs$core$IFn$_invoke$arity$variadic = G__22216__delegate;
return G__22216;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__22218__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__22218 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22218__delegate.call(this,f,arg,args);};
G__22218.cljs$lang$maxFixedArity = 2;
G__22218.cljs$lang$applyTo = (function (arglist__22219){
var f = cljs.core.first(arglist__22219);
arglist__22219 = cljs.core.next(arglist__22219);
var arg = cljs.core.first(arglist__22219);
var args = cljs.core.rest(arglist__22219);
return G__22218__delegate(f,arg,args);
});
G__22218.cljs$core$IFn$_invoke$arity$variadic = G__22218__delegate;
return G__22218;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;

//# sourceMappingURL=core.js.map