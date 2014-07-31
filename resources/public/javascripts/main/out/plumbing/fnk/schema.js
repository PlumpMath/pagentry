// Compiled by ClojureScript 0.0-2227
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",4707957972),new cljs.core.Symbol("s","Schema","s/Schema",830322725,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",3860323928),(function (p1__14864__14865__auto__){var G__22251 = p1__14864__14865__auto__;if(G__22251)
{var bit__11776__auto__ = null;if(cljs.core.truth_((function (){var or__11126__auto__ = bit__11776__auto__;if(cljs.core.truth_(or__11126__auto__))
{return or__11126__auto__;
} else
{return G__22251.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__22251.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__22251);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__22251);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-1540173437,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",1648923322,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-1540173437,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",1648923322,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__22252_SHARP_){return (cljs.core.val.call(null,p1__22252_SHARP_) > 1);
}),cljs.core.frequencies.call(null,things)));if(cljs.core.empty_QMARK_.call(null,repeated_things))
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}
var vec__22254 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__22254,0,null);var v = cljs.core.nth.call(null,vec__22254,1,null);var p = vec__22254;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"missing-key","missing-key",2360894698),new cljs.core.Keyword(null,"key","key",1014010321),k,new cljs.core.Keyword(null,"map","map",1014012110),m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.call(null,s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.call(null,s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.call(null,s2,schema.core.Any))
{return s1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return schema.core.both.call(null,s1,s2);
} else
{return null;
}
}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___22260 = schema.utils.use_fn_validation;var output_schema22255_22261 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema22256_22262 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-1640531420,null))], null);var input_checker22257_22263 = schema.core.checker.call(null,input_schema22256_22262);var output_checker22258_22264 = schema.core.checker.call(null,output_schema22255_22261);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___22260,output_schema22255_22261,input_schema22256_22262,input_checker22257_22263,output_checker22258_22264){
return (function unwrap_schema_form_key(G__22259){var validate__14834__auto__ = ufv___22260.get_cell();if(cljs.core.truth_(validate__14834__auto__))
{var args__14835__auto___22265 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22259], null);var temp__4092__auto___22266 = input_checker22257_22263.call(null,args__14835__auto___22265);if(cljs.core.truth_(temp__4092__auto___22266))
{var error__14836__auto___22267 = temp__4092__auto___22266;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-143561007,null),cljs.core.pr_str.call(null,error__14836__auto___22267)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__14836__auto___22267,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema22256_22262,new cljs.core.Keyword(null,"value","value",1125876963),args__14835__auto___22265], null));
} else
{}
} else
{}
var o__14837__auto__ = (function (){var k = G__22259;while(true){
if(schema.core.specific_key_QMARK_.call(null,k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else
{if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),2)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-54341422,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__14834__auto__))
{var temp__4092__auto___22268 = output_checker22258_22264.call(null,o__14837__auto__);if(cljs.core.truth_(temp__4092__auto___22268))
{var error__14836__auto___22269 = temp__4092__auto___22268;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-143561007,null),cljs.core.pr_str.call(null,error__14836__auto___22269)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__14836__auto___22269,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema22255_22261,new cljs.core.Keyword(null,"value","value",1125876963),o__14837__auto__], null));
} else
{}
} else
{}
return o__14837__auto__;
});})(ufv___22260,output_schema22255_22261,input_schema22256_22262,input_checker22257_22263,output_checker22258_22264))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema22255_22261,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22256_22262], null)));
var ufv___22275 = schema.utils.use_fn_validation;var output_schema22270_22276 = schema.core.Any;var input_schema22271_22277 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-1640531412,null))], null);var input_checker22272_22278 = schema.core.checker.call(null,input_schema22271_22277);var output_checker22273_22279 = schema.core.checker.call(null,output_schema22270_22276);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___22275,output_schema22270_22276,input_schema22271_22277,input_checker22272_22278,output_checker22273_22279){
return (function explicit_schema_key_map(G__22274){var validate__14834__auto__ = ufv___22275.get_cell();if(cljs.core.truth_(validate__14834__auto__))
{var args__14835__auto___22280 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22274], null);var temp__4092__auto___22281 = input_checker22272_22278.call(null,args__14835__auto___22280);if(cljs.core.truth_(temp__4092__auto___22281))
{var error__14836__auto___22282 = temp__4092__auto___22281;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",2031840052,null),cljs.core.pr_str.call(null,error__14836__auto___22282)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__14836__auto___22282,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema22271_22277,new cljs.core.Keyword(null,"value","value",1125876963),args__14835__auto___22280], null));
} else
{}
} else
{}
var o__14837__auto__ = (function (){var s = G__22274;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__14834__auto__))
{var temp__4092__auto___22283 = output_checker22273_22279.call(null,o__14837__auto__);if(cljs.core.truth_(temp__4092__auto___22283))
{var error__14836__auto___22284 = temp__4092__auto___22283;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",2031840052,null),cljs.core.pr_str.call(null,error__14836__auto___22284)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__14836__auto___22284,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema22270_22276,new cljs.core.Keyword(null,"value","value",1125876963),o__14837__auto__], null));
} else
{}
} else
{}
return o__14837__auto__;
});})(ufv___22275,output_schema22270_22276,input_schema22271_22277,input_checker22272_22278,output_checker22273_22279))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema22270_22276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22271_22277], null)));
var ufv___22290 = schema.utils.use_fn_validation;var output_schema22285_22291 = schema.core.Any;var input_schema22286_22292 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-1640531412,null))], null);var input_checker22287_22293 = schema.core.checker.call(null,input_schema22286_22292);var output_checker22288_22294 = schema.core.checker.call(null,output_schema22285_22291);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___22290,output_schema22285_22291,input_schema22286_22292,input_checker22287_22293,output_checker22288_22294){
return (function split_schema_keys(G__22289){var validate__14834__auto__ = ufv___22290.get_cell();if(cljs.core.truth_(validate__14834__auto__))
{var args__14835__auto___22295 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22289], null);var temp__4092__auto___22296 = input_checker22287_22293.call(null,args__14835__auto___22295);if(cljs.core.truth_(temp__4092__auto___22296))
{var error__14836__auto___22297 = temp__4092__auto___22296;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",1165575718,null),cljs.core.pr_str.call(null,error__14836__auto___22297)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__14836__auto___22297,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema22286_22292,new cljs.core.Keyword(null,"value","value",1125876963),args__14835__auto___22295], null));
} else
{}
} else
{}
var o__14837__auto__ = (function (){var s = G__22289;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-2033670824,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-1719548647,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__14834__auto__))
{var temp__4092__auto___22298 = output_checker22288_22294.call(null,o__14837__auto__);if(cljs.core.truth_(temp__4092__auto___22298))
{var error__14836__auto___22299 = temp__4092__auto___22298;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",1165575718,null),cljs.core.pr_str.call(null,error__14836__auto___22299)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__14836__auto___22299,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema22285_22291,new cljs.core.Keyword(null,"value","value",1125876963),o__14837__auto__], null));
} else
{}
} else
{}
return o__14837__auto__;
});})(ufv___22290,output_schema22285_22291,input_schema22286_22292,input_checker22287_22293,output_checker22288_22294))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema22285_22291,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22286_22292], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__22303){var vec__22304 = p__22303;var k = cljs.core.nth.call(null,vec__22304,0,null);var v = cljs.core.nth.call(null,vec__22304,1,null);var pk = key_project.call(null,k);var temp__4090__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4090__auto__))
{var vec__22305 = temp__4090__auto__;var ok = cljs.core.nth.call(null,vec__22305,0,null);var ov = cljs.core.nth.call(null,vec__22305,1,null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else
{return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__22306){
var key_project = cljs.core.first(arglist__22306);
arglist__22306 = cljs.core.next(arglist__22306);
var key_combine = cljs.core.first(arglist__22306);
arglist__22306 = cljs.core.next(arglist__22306);
var val_combine = cljs.core.first(arglist__22306);
var maps = cljs.core.rest(arglist__22306);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___22314 = schema.utils.use_fn_validation;var output_schema22308_22315 = plumbing.fnk.schema.InputSchema;var input_schema22309_22316 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-1640528223,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",-1640528222,null))], null);var input_checker22310_22317 = schema.core.checker.call(null,input_schema22309_22316);var output_checker22311_22318 = schema.core.checker.call(null,output_schema22308_22315);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___22314,output_schema22308_22315,input_schema22309_22316,input_checker22310_22317,output_checker22311_22318){
return (function union_input_schemata(G__22312,G__22313){var validate__14834__auto__ = ufv___22314.get_cell();if(cljs.core.truth_(validate__14834__auto__))
{var args__14835__auto___22319 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22312,G__22313], null);var temp__4092__auto___22320 = input_checker22310_22317.call(null,args__14835__auto___22319);if(cljs.core.truth_(temp__4092__auto___22320))
{var error__14836__auto___22321 = temp__4092__auto___22320;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",1314662120,null),cljs.core.pr_str.call(null,error__14836__auto___22321)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__14836__auto___22321,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema22309_22316,new cljs.core.Keyword(null,"value","value",1125876963),args__14835__auto___22319], null));
} else
{}
} else
{}
var o__14837__auto__ = (function (){var i1 = G__22312;var i2 = G__22313;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__14834__auto__,ufv___22314,output_schema22308_22315,input_schema22309_22316,input_checker22310_22317,output_checker22311_22318){
return (function (p1__22307_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__22307_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__22307_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1110869890);
}
});})(validate__14834__auto__,ufv___22314,output_schema22308_22315,input_schema22309_22316,input_checker22310_22317,output_checker22311_22318))
,((function (validate__14834__auto__,ufv___22314,output_schema22308_22315,input_schema22309_22316,input_checker22310_22317,output_checker22311_22318){
return (function (k1,k2){if(schema.core.required_key_QMARK_.call(null,k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_.call(null,k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_.call(null,k1))
{if(cljs.core._EQ_.call(null,k1,k2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"k1","k1",-1640528161,null),new cljs.core.Symbol(null,"k2","k2",-1640528160,null)))))));
}
return k1;
} else
{if(cljs.core._EQ_.call(null,k1,k2))
{return k1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(false)
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));
}
} else
{return null;
}
}
}
}
}
});})(validate__14834__auto__,ufv___22314,output_schema22308_22315,input_schema22309_22316,input_checker22310_22317,output_checker22311_22318))
,((function (validate__14834__auto__,ufv___22314,output_schema22308_22315,input_schema22309_22316,input_checker22310_22317,output_checker22311_22318){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__14834__auto__,ufv___22314,output_schema22308_22315,input_schema22309_22316,input_checker22310_22317,output_checker22311_22318))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__14834__auto__))
{var temp__4092__auto___22322 = output_checker22311_22318.call(null,o__14837__auto__);if(cljs.core.truth_(temp__4092__auto___22322))
{var error__14836__auto___22323 = temp__4092__auto___22322;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",1314662120,null),cljs.core.pr_str.call(null,error__14836__auto___22323)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__14836__auto___22323,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema22308_22315,new cljs.core.Keyword(null,"value","value",1125876963),o__14837__auto__], null));
} else
{}
} else
{}
return o__14837__auto__;
});})(ufv___22314,output_schema22308_22315,input_schema22309_22316,input_checker22310_22317,output_checker22311_22318))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema22308_22315,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22309_22316], null)));
var ufv___22329 = schema.utils.use_fn_validation;var output_schema22324_22330 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema22325_22331 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",-1943844163,null))], null);var input_checker22326_22332 = schema.core.checker.call(null,input_schema22325_22331);var output_checker22327_22333 = schema.core.checker.call(null,output_schema22324_22330);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___22329,output_schema22324_22330,input_schema22325_22331,input_checker22326_22332,output_checker22327_22333){
return (function required_toplevel_keys(G__22328){var validate__14834__auto__ = ufv___22329.get_cell();if(cljs.core.truth_(validate__14834__auto__))
{var args__14835__auto___22334 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22328], null);var temp__4092__auto___22335 = input_checker22326_22332.call(null,args__14835__auto___22334);if(cljs.core.truth_(temp__4092__auto___22335))
{var error__14836__auto___22336 = temp__4092__auto___22335;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",-1439959619,null),cljs.core.pr_str.call(null,error__14836__auto___22336)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__14836__auto___22336,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema22325_22331,new cljs.core.Keyword(null,"value","value",1125876963),args__14835__auto___22334], null));
} else
{}
} else
{}
var o__14837__auto__ = (function (){var input_schema = G__22328;while(true){
return cljs.core.keep.call(null,((function (validate__14834__auto__,ufv___22329,output_schema22324_22330,input_schema22325_22331,input_checker22326_22332,output_checker22327_22333){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__14834__auto__,ufv___22329,output_schema22324_22330,input_schema22325_22331,input_checker22326_22332,output_checker22327_22333))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__14834__auto__))
{var temp__4092__auto___22337 = output_checker22327_22333.call(null,o__14837__auto__);if(cljs.core.truth_(temp__4092__auto___22337))
{var error__14836__auto___22338 = temp__4092__auto___22337;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",-1439959619,null),cljs.core.pr_str.call(null,error__14836__auto___22338)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__14836__auto___22338,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema22324_22330,new cljs.core.Keyword(null,"value","value",1125876963),o__14837__auto__], null));
} else
{}
} else
{}
return o__14837__auto__;
});})(ufv___22329,output_schema22324_22330,input_schema22325_22331,input_checker22326_22332,output_checker22327_22333))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema22324_22330,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22325_22331], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__11851__auto__ = (function iter__22347(s__22348){return (new cljs.core.LazySeq(null,(function (){var s__22348__$1 = s__22348;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__22348__$1);if(temp__4092__auto__)
{var s__22348__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22348__$2))
{var c__11849__auto__ = cljs.core.chunk_first.call(null,s__22348__$2);var size__11850__auto__ = cljs.core.count.call(null,c__11849__auto__);var b__22350 = cljs.core.chunk_buffer.call(null,size__11850__auto__);if((function (){var i__22349 = 0;while(true){
if((i__22349 < size__11850__auto__))
{var vec__22353 = cljs.core._nth.call(null,c__11849__auto__,i__22349);var k = cljs.core.nth.call(null,vec__22353,0,null);var v = cljs.core.nth.call(null,vec__22353,1,null);cljs.core.chunk_append.call(null,b__22350,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__22355 = (i__22349 + 1);
i__22349 = G__22355;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22350),iter__22347.call(null,cljs.core.chunk_rest.call(null,s__22348__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22350),null);
}
} else
{var vec__22354 = cljs.core.first.call(null,s__22348__$2);var k = cljs.core.nth.call(null,vec__22354,0,null);var v = cljs.core.nth.call(null,vec__22354,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__22347.call(null,cljs.core.rest.call(null,s__22348__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__11851__auto__.call(null,expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",271859124,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema)))
{return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),(function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1637187556,null));
}))),null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__11851__auto__ = (function iter__22364(s__22365){return (new cljs.core.LazySeq(null,(function (){var s__22365__$1 = s__22365;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__22365__$1);if(temp__4092__auto__)
{var s__22365__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22365__$2))
{var c__11849__auto__ = cljs.core.chunk_first.call(null,s__22365__$2);var size__11850__auto__ = cljs.core.count.call(null,c__11849__auto__);var b__22367 = cljs.core.chunk_buffer.call(null,size__11850__auto__);if((function (){var i__22366 = 0;while(true){
if((i__22366 < size__11850__auto__))
{var vec__22370 = cljs.core._nth.call(null,c__11849__auto__,i__22366);var k = cljs.core.nth.call(null,vec__22370,0,null);var v = cljs.core.nth.call(null,vec__22370,1,null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",-1340904975,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__22367,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__22372 = (i__22366 + 1);
i__22366 = G__22372;
continue;
}
} else
{{
var G__22373 = (i__22366 + 1);
i__22366 = G__22373;
continue;
}
}
} else
{{
var G__22374 = (i__22366 + 1);
i__22366 = G__22374;
continue;
}
}
} else
{{
var G__22375 = (i__22366 + 1);
i__22366 = G__22375;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22367),iter__22364.call(null,cljs.core.chunk_rest.call(null,s__22365__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22367),null);
}
} else
{var vec__22371 = cljs.core.first.call(null,s__22365__$2);var k = cljs.core.nth.call(null,vec__22371,0,null);var v = cljs.core.nth.call(null,vec__22371,1,null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",-1340904975,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__22364.call(null,cljs.core.rest.call(null,s__22365__$2)));
} else
{{
var G__22376 = cljs.core.rest.call(null,s__22365__$2);
s__22365__$1 = G__22376;
continue;
}
}
} else
{{
var G__22377 = cljs.core.rest.call(null,s__22365__$2);
s__22365__$1 = G__22377;
continue;
}
}
} else
{{
var G__22378 = cljs.core.rest.call(null,s__22365__$2);
s__22365__$1 = G__22378;
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
});return iter__11851__auto__.call(null,input_schema);
})()));
} else
{return null;
}
}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",2405949387),new cljs.core.Keyword(null,"failures","failures",1689842587),fails], null));
} else
{return null;
}
});
var ufv___22401 = schema.utils.use_fn_validation;var output_schema22379_22402 = schema.core.Any;var input_schema22380_22403 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1637529005,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-1540173437,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",1648923322,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1637529004,null))], null);var input_checker22381_22404 = schema.core.checker.call(null,input_schema22380_22403);var output_checker22382_22405 = schema.core.checker.call(null,output_schema22379_22402);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___22401,output_schema22379_22402,input_schema22380_22403,input_checker22381_22404,output_checker22382_22405){
return (function compose_schemata(G__22383,G__22384){var validate__14834__auto__ = true;if(validate__14834__auto__)
{var args__14835__auto___22406 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22383,G__22384], null);var temp__4092__auto___22407 = input_checker22381_22404.call(null,args__14835__auto___22406);if(cljs.core.truth_(temp__4092__auto___22407))
{var error__14836__auto___22408 = temp__4092__auto___22407;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",-726429854,null),cljs.core.pr_str.call(null,error__14836__auto___22408)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__14836__auto___22408,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema22380_22403,new cljs.core.Keyword(null,"value","value",1125876963),args__14835__auto___22406], null));
} else
{}
} else
{}
var o__14837__auto__ = (function (){var G__22395 = G__22383;var vec__22397 = G__22395;var i2 = cljs.core.nth.call(null,vec__22397,0,null);var o2 = cljs.core.nth.call(null,vec__22397,1,null);var G__22396 = G__22384;var vec__22398 = G__22396;var i1 = cljs.core.nth.call(null,vec__22398,0,null);var o1 = cljs.core.nth.call(null,vec__22398,1,null);var G__22395__$1 = G__22395;var G__22396__$1 = G__22396;while(true){
var vec__22399 = G__22395__$1;var i2__$1 = cljs.core.nth.call(null,vec__22399,0,null);var o2__$1 = cljs.core.nth.call(null,vec__22399,1,null);var vec__22400 = G__22396__$1;var i1__$1 = cljs.core.nth.call(null,vec__22400,0,null);var o1__$1 = cljs.core.nth.call(null,vec__22400,1,null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__14834__auto__)
{var temp__4092__auto___22409 = output_checker22382_22405.call(null,o__14837__auto__);if(cljs.core.truth_(temp__4092__auto___22409))
{var error__14836__auto___22410 = temp__4092__auto___22409;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",-726429854,null),cljs.core.pr_str.call(null,error__14836__auto___22410)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__14836__auto___22410,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema22379_22402,new cljs.core.Keyword(null,"value","value",1125876963),o__14837__auto__], null));
} else
{}
} else
{}
return o__14837__auto__;
});})(ufv___22401,output_schema22379_22402,input_schema22380_22403,input_checker22381_22404,output_checker22382_22405))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema22379_22402,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22380_22403], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_.call(null,m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k)))
{return schema.core.optional_key.call(null,k);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___22489 = schema.utils.use_fn_validation;var output_schema22411_22490 = schema.core.Any;var input_schema22412_22491 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-1640531412,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-1640528095,null))], null);var input_checker22413_22492 = schema.core.checker.call(null,input_schema22412_22491);var output_checker22414_22493 = schema.core.checker.call(null,output_schema22411_22490);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___22489,output_schema22411_22490,input_schema22412_22491,input_checker22413_22492,output_checker22414_22493){
return (function split_schema(G__22415,G__22416){var validate__14834__auto__ = ufv___22489.get_cell();if(cljs.core.truth_(validate__14834__auto__))
{var args__14835__auto___22494 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22415,G__22416], null);var temp__4092__auto___22495 = input_checker22413_22492.call(null,args__14835__auto___22494);if(cljs.core.truth_(temp__4092__auto___22495))
{var error__14836__auto___22496 = temp__4092__auto___22495;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1048718701,null),cljs.core.pr_str.call(null,error__14836__auto___22496)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__14836__auto___22496,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema22412_22491,new cljs.core.Keyword(null,"value","value",1125876963),args__14835__auto___22494], null));
} else
{}
} else
{}
var o__14837__auto__ = (function (){var s = G__22415;var ks = G__22416;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__11851__auto__ = ((function (ks__$1,validate__14834__auto__,ufv___22489,output_schema22411_22490,input_schema22412_22491,input_checker22413_22492,output_checker22414_22493){
return (function iter__22453(s__22454){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__14834__auto__,ufv___22489,output_schema22411_22490,input_schema22412_22491,input_checker22413_22492,output_checker22414_22493){
return (function (){var s__22454__$1 = s__22454;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__22454__$1);if(temp__4092__auto__)
{var s__22454__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22454__$2))
{var c__11849__auto__ = cljs.core.chunk_first.call(null,s__22454__$2);var size__11850__auto__ = cljs.core.count.call(null,c__11849__auto__);var b__22456 = cljs.core.chunk_buffer.call(null,size__11850__auto__);if((function (){var i__22455 = 0;while(true){
if((i__22455 < size__11850__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__11849__auto__,i__22455);cljs.core.chunk_append.call(null,b__22456,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__11851__auto__ = ((function (i__22455,in_QMARK_,c__11849__auto__,size__11850__auto__,b__22456,s__22454__$2,temp__4092__auto__,ks__$1,validate__14834__auto__,ufv___22489,output_schema22411_22490,input_schema22412_22491,input_checker22413_22492,output_checker22414_22493){
return (function iter__22473(s__22474){return (new cljs.core.LazySeq(null,((function (i__22455,in_QMARK_,c__11849__auto__,size__11850__auto__,b__22456,s__22454__$2,temp__4092__auto__,ks__$1,validate__14834__auto__,ufv___22489,output_schema22411_22490,input_schema22412_22491,input_checker22413_22492,output_checker22414_22493){
return (function (){var s__22474__$1 = s__22474;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__22474__$1);if(temp__4092__auto____$1)
{var s__22474__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__22474__$2))
{var c__11849__auto____$1 = cljs.core.chunk_first.call(null,s__22474__$2);var size__11850__auto____$1 = cljs.core.count.call(null,c__11849__auto____$1);var b__22476 = cljs.core.chunk_buffer.call(null,size__11850__auto____$1);if((function (){var i__22475 = 0;while(true){
if((i__22475 < size__11850__auto____$1))
{var vec__22479 = cljs.core._nth.call(null,c__11849__auto____$1,i__22475);var k = cljs.core.nth.call(null,vec__22479,0,null);var v = cljs.core.nth.call(null,vec__22479,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__22476,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22497 = (i__22475 + 1);
i__22475 = G__22497;
continue;
}
} else
{{
var G__22498 = (i__22475 + 1);
i__22475 = G__22498;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22476),iter__22473.call(null,cljs.core.chunk_rest.call(null,s__22474__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22476),null);
}
} else
{var vec__22480 = cljs.core.first.call(null,s__22474__$2);var k = cljs.core.nth.call(null,vec__22480,0,null);var v = cljs.core.nth.call(null,vec__22480,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22473.call(null,cljs.core.rest.call(null,s__22474__$2)));
} else
{{
var G__22499 = cljs.core.rest.call(null,s__22474__$2);
s__22474__$1 = G__22499;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__22455,in_QMARK_,c__11849__auto__,size__11850__auto__,b__22456,s__22454__$2,temp__4092__auto__,ks__$1,validate__14834__auto__,ufv___22489,output_schema22411_22490,input_schema22412_22491,input_checker22413_22492,output_checker22414_22493))
,null,null));
});})(i__22455,in_QMARK_,c__11849__auto__,size__11850__auto__,b__22456,s__22454__$2,temp__4092__auto__,ks__$1,validate__14834__auto__,ufv___22489,output_schema22411_22490,input_schema22412_22491,input_checker22413_22492,output_checker22414_22493))
;return iter__11851__auto__.call(null,s);
})()));
{
var G__22500 = (i__22455 + 1);
i__22455 = G__22500;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22456),iter__22453.call(null,cljs.core.chunk_rest.call(null,s__22454__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22456),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__22454__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__11851__auto__ = ((function (in_QMARK_,s__22454__$2,temp__4092__auto__,ks__$1,validate__14834__auto__,ufv___22489,output_schema22411_22490,input_schema22412_22491,input_checker22413_22492,output_checker22414_22493){
return (function iter__22481(s__22482){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__22454__$2,temp__4092__auto__,ks__$1,validate__14834__auto__,ufv___22489,output_schema22411_22490,input_schema22412_22491,input_checker22413_22492,output_checker22414_22493){
return (function (){var s__22482__$1 = s__22482;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__22482__$1);if(temp__4092__auto____$1)
{var s__22482__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__22482__$2))
{var c__11849__auto__ = cljs.core.chunk_first.call(null,s__22482__$2);var size__11850__auto__ = cljs.core.count.call(null,c__11849__auto__);var b__22484 = cljs.core.chunk_buffer.call(null,size__11850__auto__);if((function (){var i__22483 = 0;while(true){
if((i__22483 < size__11850__auto__))
{var vec__22487 = cljs.core._nth.call(null,c__11849__auto__,i__22483);var k = cljs.core.nth.call(null,vec__22487,0,null);var v = cljs.core.nth.call(null,vec__22487,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__22484,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22501 = (i__22483 + 1);
i__22483 = G__22501;
continue;
}
} else
{{
var G__22502 = (i__22483 + 1);
i__22483 = G__22502;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22484),iter__22481.call(null,cljs.core.chunk_rest.call(null,s__22482__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22484),null);
}
} else
{var vec__22488 = cljs.core.first.call(null,s__22482__$2);var k = cljs.core.nth.call(null,vec__22488,0,null);var v = cljs.core.nth.call(null,vec__22488,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22481.call(null,cljs.core.rest.call(null,s__22482__$2)));
} else
{{
var G__22503 = cljs.core.rest.call(null,s__22482__$2);
s__22482__$1 = G__22503;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__22454__$2,temp__4092__auto__,ks__$1,validate__14834__auto__,ufv___22489,output_schema22411_22490,input_schema22412_22491,input_checker22413_22492,output_checker22414_22493))
,null,null));
});})(in_QMARK_,s__22454__$2,temp__4092__auto__,ks__$1,validate__14834__auto__,ufv___22489,output_schema22411_22490,input_schema22412_22491,input_checker22413_22492,output_checker22414_22493))
;return iter__11851__auto__.call(null,s);
})()),iter__22453.call(null,cljs.core.rest.call(null,s__22454__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__14834__auto__,ufv___22489,output_schema22411_22490,input_schema22412_22491,input_checker22413_22492,output_checker22414_22493))
,null,null));
});})(ks__$1,validate__14834__auto__,ufv___22489,output_schema22411_22490,input_schema22412_22491,input_checker22413_22492,output_checker22414_22493))
;return iter__11851__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__14834__auto__))
{var temp__4092__auto___22504 = output_checker22414_22493.call(null,o__14837__auto__);if(cljs.core.truth_(temp__4092__auto___22504))
{var error__14836__auto___22505 = temp__4092__auto___22504;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1048718701,null),cljs.core.pr_str.call(null,error__14836__auto___22505)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__14836__auto___22505,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema22411_22490,new cljs.core.Keyword(null,"value","value",1125876963),o__14837__auto__], null));
} else
{}
} else
{}
return o__14837__auto__;
});})(ufv___22489,output_schema22411_22490,input_schema22412_22491,input_checker22413_22492,output_checker22414_22493))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema22411_22490,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22412_22491], null)));
var ufv___22536 = schema.utils.use_fn_validation;var output_schema22506_22537 = plumbing.fnk.schema.GraphIOSchemata;var input_schema22507_22538 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1637529005,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1637529004,null))], null);var input_checker22508_22539 = schema.core.checker.call(null,input_schema22507_22538);var output_checker22509_22540 = schema.core.checker.call(null,output_schema22506_22537);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___22536,output_schema22506_22537,input_schema22507_22538,input_checker22508_22539,output_checker22509_22540){
return (function sequence_schemata(G__22510,G__22511){var validate__14834__auto__ = ufv___22536.get_cell();if(cljs.core.truth_(validate__14834__auto__))
{var args__14835__auto___22541 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22510,G__22511], null);var temp__4092__auto___22542 = input_checker22508_22539.call(null,args__14835__auto___22541);if(cljs.core.truth_(temp__4092__auto___22542))
{var error__14836__auto___22543 = temp__4092__auto___22542;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",19729939,null),cljs.core.pr_str.call(null,error__14836__auto___22543)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__14836__auto___22543,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema22507_22538,new cljs.core.Keyword(null,"value","value",1125876963),args__14835__auto___22541], null));
} else
{}
} else
{}
var o__14837__auto__ = (function (){var G__22527 = G__22510;var vec__22529 = G__22527;var i1 = cljs.core.nth.call(null,vec__22529,0,null);var o1 = cljs.core.nth.call(null,vec__22529,1,null);var G__22528 = G__22511;var vec__22530 = G__22528;var k = cljs.core.nth.call(null,vec__22530,0,null);var vec__22531 = cljs.core.nth.call(null,vec__22530,1,null);var i2 = cljs.core.nth.call(null,vec__22531,0,null);var o2 = cljs.core.nth.call(null,vec__22531,1,null);var G__22527__$1 = G__22527;var G__22528__$1 = G__22528;while(true){
var vec__22532 = G__22527__$1;var i1__$1 = cljs.core.nth.call(null,vec__22532,0,null);var o1__$1 = cljs.core.nth.call(null,vec__22532,1,null);var vec__22533 = G__22528__$1;var k__$1 = cljs.core.nth.call(null,vec__22533,0,null);var vec__22534 = cljs.core.nth.call(null,vec__22533,1,null);var i2__$1 = cljs.core.nth.call(null,vec__22534,0,null);var o2__$1 = cljs.core.nth.call(null,vec__22534,1,null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}
var vec__22535 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__22535,0,null);var unused = cljs.core.nth.call(null,vec__22535,1,null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__14834__auto__))
{var temp__4092__auto___22544 = output_checker22509_22540.call(null,o__14837__auto__);if(cljs.core.truth_(temp__4092__auto___22544))
{var error__14836__auto___22545 = temp__4092__auto___22544;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",19729939,null),cljs.core.pr_str.call(null,error__14836__auto___22545)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__14836__auto___22545,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema22506_22537,new cljs.core.Keyword(null,"value","value",1125876963),o__14837__auto__], null));
} else
{}
} else
{}
return o__14837__auto__;
});})(ufv___22536,output_schema22506_22537,input_schema22507_22538,input_checker22508_22539,output_checker22509_22540))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema22506_22537,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22507_22538], null)));

//# sourceMappingURL=schema.js.map