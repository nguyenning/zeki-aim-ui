"use strict";(self.webpackChunkexample_app=self.webpackChunkexample_app||[]).push([[2405],{52405:(kn,Le,_e)=>{_e.r(Le),_e.d(Le,{b:()=>jr});var K,Pe=_e(1719),Ae={exports:{}};K="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,"undefined"!=typeof __filename&&(K=K||__filename),Ae.exports=function(k){var Y,H,n=void 0!==(k=k||{})?k:{};n.ready=new Promise(function(e,r){Y=e,H=r});var C,le,I,We,Ge,E={};for(C in n)n.hasOwnProperty(C)&&(E[C]=n[C]);le="object"==typeof window,I="function"==typeof importScripts,We="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,Ge=!le&&!We&&!I;var ce,Z,Ee,Se,T="";We?(T=I?require("path").dirname(T)+"/":__dirname+"/",ce=function(e,r){return Ee||(Ee=require("fs")),Se||(Se=require("path")),e=Se.normalize(e),Ee.readFileSync(e,r?null:"utf8")},Z=function(e){var r=ce(e,!0);return r.buffer||(r=new Uint8Array(r)),Oe(r.buffer),r},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(e){if(!(e instanceof On))throw e}),process.on("unhandledRejection",L),n.inspect=function(){return"[Emscripten Module object]"}):Ge?("undefined"!=typeof read&&(ce=function(e){return read(e)}),Z=function(e){var r;return"function"==typeof readbuffer?new Uint8Array(readbuffer(e)):(Oe("object"==typeof(r=read(e,"binary"))),r)},"undefined"!=typeof scriptArgs&&scriptArgs,"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(le||I)&&(I?T=self.location.href:document.currentScript&&(T=document.currentScript.src),K&&(T=K),T=0!==T.indexOf("blob:")?T.substr(0,T.lastIndexOf("/")+1):"",ce=function(e){var r=new XMLHttpRequest;return r.open("GET",e,!1),r.send(null),r.responseText},I&&(Z=function(e){var r=new XMLHttpRequest;return r.open("GET",e,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}));var Q,ee,Fr=n.print||console.log.bind(console),z=n.printErr||console.warn.bind(console);for(C in E)E.hasOwnProperty(C)&&(n[C]=E[C]);E=null,n.wasmBinary&&(Q=n.wasmBinary),"object"!=typeof WebAssembly&&L("no native wasm support detected");var Rr=new WebAssembly.Table({initial:157,maximum:157,element:"anyfunc"}),Xe=!1;function Oe(e,r){e||L("Assertion failed: "+r)}var Je="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function Ke(e,r,t){for(var i=r+t,o=r;e[o]&&!(o>=i);)++o;if(o-r>16&&e.subarray&&Je)return Je.decode(e.subarray(r,o));for(var a="";r<o;){var s=e[r++];if(128&s){var u=63&e[r++];if(192!=(224&s)){var l=63&e[r++];if((s=224==(240&s)?(15&s)<<12|u<<6|l:(7&s)<<18|u<<12|l<<6|63&e[r++])<65536)a+=String.fromCharCode(s);else{var c=s-65536;a+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else a+=String.fromCharCode((31&s)<<6|u)}else a+=String.fromCharCode(s)}return a}function Ye(e,r){return e?Ke(b,e,r):""}var B,fe,b,U,re,g,P,Qe,er,Ze="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function Ur(e,r){for(var t=e,i=t>>1,o=i+r/2;!(i>=o)&&re[i];)++i;if((t=i<<1)-e>32&&Ze)return Ze.decode(b.subarray(e,t));for(var a=0,s="";;){var u=U[e+2*a>>1];if(0==u||a==r/2)return s;++a,s+=String.fromCharCode(u)}}function Mr(e,r,t){if(void 0===t&&(t=2147483647),t<2)return 0;for(var i=r,o=(t-=2)<2*e.length?t/2:e.length,a=0;a<o;++a){var s=e.charCodeAt(a);U[r>>1]=s,r+=2}return U[r>>1]=0,r-i}function Vr(e){return 2*e.length}function Hr(e,r){for(var t=0,i="";!(t>=r/4);){var o=g[e+4*t>>2];if(0==o)break;if(++t,o>=65536){var a=o-65536;i+=String.fromCharCode(55296|a>>10,56320|1023&a)}else i+=String.fromCharCode(o)}return i}function zr(e,r,t){if(void 0===t&&(t=2147483647),t<4)return 0;for(var i=r,o=i+t-4,a=0;a<e.length;++a){var s=e.charCodeAt(a);if(s>=55296&&s<=57343&&(s=65536+((1023&s)<<10)|1023&e.charCodeAt(++a)),g[r>>2]=s,(r+=4)+4>o)break}return g[r>>2]=0,r-i}function Br(e){for(var r=0,t=0;t<e.length;++t){var i=e.charCodeAt(t);i>=55296&&i<=57343&&++t,r+=4}return r}function Lr(e,r){return e%r>0&&(e+=r-e%r),e}function tr(e){B=e,n.HEAP8=fe=new Int8Array(e),n.HEAP16=U=new Int16Array(e),n.HEAP32=g=new Int32Array(e),n.HEAPU8=b=new Uint8Array(e),n.HEAPU16=re=new Uint16Array(e),n.HEAPU32=P=new Uint32Array(e),n.HEAPF32=Qe=new Float32Array(e),n.HEAPF64=er=new Float64Array(e)}var nr=n.INITIAL_MEMORY||16777216;function pe(e){for(;e.length>0;){var r=e.shift();if("function"!=typeof r){var t=r.func;"number"==typeof t?void 0===r.arg?n.dynCall_v(t):n.dynCall_vi(t,r.arg):t(void 0===r.arg?null:r.arg)}else r(n)}}(ee=n.wasmMemory?n.wasmMemory:new WebAssembly.Memory({initial:nr/65536,maximum:32768}))&&(B=ee.buffer),nr=B.byteLength,tr(B),g[80624]=5565536;var ir=[],or=[],Gr=[],ar=[],et=Math.ceil,rt=Math.floor,M=0,te=null;function L(e){n.onAbort&&n.onAbort(e),z(e+=""),Xe=!0,e="abort("+e+"). Build with -s ASSERTIONS=1 for more info.";var r=new WebAssembly.RuntimeError(e);throw H(r),r}function ur(e,r){return String.prototype.startsWith?e.startsWith(r):0===e.indexOf(r)}function sr(e){return ur(e,"data:application/octet-stream;base64,")}function lr(e){return ur(e,"file://")}n.preloadedImages={},n.preloadedAudios={};var A="basis_transcoder.wasm";function cr(){try{if(Q)return new Uint8Array(Q);if(Z)return Z(A);throw"both async and sync fetching of the wasm failed"}catch(e){L(e)}}sr(A)||(A=function kr(e){return n.locateFile?n.locateFile(e,T):T+e}(A)),or.push({func:function(){Pr()}});var de={};function ye(e){for(;e.length;){var r=e.pop();e.pop()(r)}}function ne(e){return this.fromWireType(P[e>>2])}var N={},V={},me={};function fr(e){if(void 0===e)return"_unknown";var r=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=48&&r<=57?"_"+e:e}function je(e,r){return e=fr(e),function(){return r.apply(this,arguments)}}function ke(e,r){var t=je(r,function(i){this.name=r,this.message=i;var o=new Error(i).stack;void 0!==o&&(this.stack=this.toString()+"\n"+o.replace(/^Error(:[^\n]*)?\n/,""))});return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},t}var pr=void 0;function he(e){throw new pr(e)}function F(e,r,t){function i(u){var l=t(u);l.length!==e.length&&he("Mismatched type converter count");for(var c=0;c<e.length;++c)W(e[c],l[c])}e.forEach(function(u){me[u]=r});var o=new Array(r.length),a=[],s=0;r.forEach(function(u,l){V.hasOwnProperty(u)?o[l]=V[u]:(a.push(u),N.hasOwnProperty(u)||(N[u]=[]),N[u].push(function(){o[l]=V[u],++s===a.length&&i(o)}))}),0===a.length&&i(o)}function ve(e){switch(e){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+e)}}var dr=void 0;function v(e){for(var r="",t=e;b[t];)r+=dr[b[t++]];return r}var q=void 0;function p(e){throw new q(e)}function W(e,r,t){if(t=t||{},!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var i=r.name;if(e||p('type "'+i+'" must have a positive integer typeid pointer'),V.hasOwnProperty(e)){if(t.ignoreDuplicateRegistrations)return;p("Cannot register type '"+i+"' twice")}if(V[e]=r,delete me[e],N.hasOwnProperty(e)){var o=N[e];delete N[e],o.forEach(function(a){a()})}}function dt(e){if(!(this instanceof R&&e instanceof R))return!1;for(var r=this.$$.ptrType.registeredClass,t=this.$$.ptr,i=e.$$.ptrType.registeredClass,o=e.$$.ptr;r.baseClass;)t=r.upcast(t),r=r.baseClass;for(;i.baseClass;)o=i.upcast(o),i=i.baseClass;return r===i&&t===o}function yt(e){return{count:e.count,deleteScheduled:e.deleteScheduled,preservePointerOnDelete:e.preservePointerOnDelete,ptr:e.ptr,ptrType:e.ptrType,smartPtr:e.smartPtr,smartPtrType:e.smartPtrType}}function Fe(e){p(function r(t){return t.$$.ptrType.registeredClass.name}(e)+" instance already deleted")}var Re=!1;function yr(e){}function mr(e){e.count.value-=1,0===e.count.value&&function mt(e){e.smartPtr?e.smartPtrType.rawDestructor(e.smartPtr):e.ptrType.registeredClass.rawDestructor(e.ptr)}(e)}function ie(e){return"undefined"==typeof FinalizationGroup?(ie=function(r){return r},e):(Re=new FinalizationGroup(function(r){for(var t=r.next();!t.done;t=r.next()){var i=t.value;i.ptr?mr(i):console.warn("object already deleted: "+i.ptr)}}),yr=function(r){Re.unregister(r.$$)},(ie=function(r){return Re.register(r,r.$$,r.$$),r})(e))}function ht(){if(this.$$.ptr||Fe(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var e=ie(Object.create(Object.getPrototypeOf(this),{$$:{value:yt(this.$$)}}));return e.$$.count.value+=1,e.$$.deleteScheduled=!1,e}function vt(){this.$$.ptr||Fe(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&p("Object already scheduled for deletion"),yr(this),mr(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function gt(){return!this.$$.ptr}var oe=void 0,ae=[];function xe(){for(;ae.length;){var e=ae.pop();e.$$.deleteScheduled=!1,e.delete()}}function bt(){return this.$$.ptr||Fe(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&p("Object already scheduled for deletion"),ae.push(this),1===ae.length&&oe&&oe(xe),this.$$.deleteScheduled=!0,this}function R(){}var hr={};function vr(e,r,t){if(void 0===e[r].overloadTable){var i=e[r];e[r]=function(){return e[r].overloadTable.hasOwnProperty(arguments.length)||p("Function '"+t+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+e[r].overloadTable+")!"),e[r].overloadTable[arguments.length].apply(this,arguments)},e[r].overloadTable=[],e[r].overloadTable[i.argCount]=i}}function De(e,r,t){n.hasOwnProperty(e)?((void 0===t||void 0!==n[e].overloadTable&&void 0!==n[e].overloadTable[t])&&p("Cannot register public name '"+e+"' twice"),vr(n,e,e),n.hasOwnProperty(t)&&p("Cannot register multiple overloads of a function with the same number of arguments ("+t+")!"),n[e].overloadTable[t]=r):(n[e]=r,void 0!==t&&(n[e].numArguments=t))}function Ct(e,r,t,i,o,a,s,u){this.name=e,this.constructor=r,this.instancePrototype=t,this.rawDestructor=i,this.baseClass=o,this.getActualType=a,this.upcast=s,this.downcast=u,this.pureVirtualFunctions=[]}function Ie(e,r,t){for(;r!==t;)r.upcast||p("Expected null or instance of "+t.name+", got an instance of "+r.name),e=r.upcast(e),r=r.baseClass;return e}function wt(e,r){return null===r?(this.isReference&&p("null is not a valid "+this.name),0):(r.$$||p('Cannot pass "'+G(r)+'" as a '+this.name),r.$$.ptr||p("Cannot pass deleted object as a pointer of type "+this.name),Ie(r.$$.ptr,r.$$.ptrType.registeredClass,this.registeredClass))}function Tt(e,r){var t;if(null===r)return this.isReference&&p("null is not a valid "+this.name),this.isSmartPointer?(t=this.rawConstructor(),null!==e&&e.push(this.rawDestructor,t),t):0;if(r.$$||p('Cannot pass "'+G(r)+'" as a '+this.name),r.$$.ptr||p("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&r.$$.ptrType.isConst&&p("Cannot convert argument of type "+(r.$$.smartPtrType?r.$$.smartPtrType.name:r.$$.ptrType.name)+" to parameter type "+this.name),t=Ie(r.$$.ptr,r.$$.ptrType.registeredClass,this.registeredClass),this.isSmartPointer)switch(void 0===r.$$.smartPtr&&p("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:r.$$.smartPtrType===this?t=r.$$.smartPtr:p("Cannot convert argument of type "+(r.$$.smartPtrType?r.$$.smartPtrType.name:r.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:t=r.$$.smartPtr;break;case 2:if(r.$$.smartPtrType===this)t=r.$$.smartPtr;else{var o=r.clone();t=this.rawShare(t,O(function(){o.delete()})),null!==e&&e.push(this.rawDestructor,t)}break;default:p("Unsupporting sharing policy")}return t}function _t(e,r){return null===r?(this.isReference&&p("null is not a valid "+this.name),0):(r.$$||p('Cannot pass "'+G(r)+'" as a '+this.name),r.$$.ptr||p("Cannot pass deleted object as a pointer of type "+this.name),r.$$.ptrType.isConst&&p("Cannot convert argument of type "+r.$$.ptrType.name+" to parameter type "+this.name),Ie(r.$$.ptr,r.$$.ptrType.registeredClass,this.registeredClass))}function Pt(e){return this.rawGetPointee&&(e=this.rawGetPointee(e)),e}function At(e){this.rawDestructor&&this.rawDestructor(e)}function Wt(e){null!==e&&e.delete()}function gr(e,r,t){if(r===t)return e;if(void 0===t.baseClass)return null;var i=gr(e,r,t.baseClass);return null===i?null:t.downcast(i)}function Et(){return Object.keys(ue).length}function St(){var e=[];for(var r in ue)ue.hasOwnProperty(r)&&e.push(ue[r]);return e}function Ot(e){oe=e,ae.length&&oe&&oe(xe)}var ue={};function ge(e,r){return r.ptrType&&r.ptr||he("makeClassHandle requires ptr and ptrType"),!!r.smartPtrType!=!!r.smartPtr&&he("Both smartPtrType and smartPtr must be specified"),r.count={value:1},ie(Object.create(e,{$$:{value:r}}))}function Rt(e){var r=this.getPointee(e);if(!r)return this.destructor(e),null;var t=function Ft(e,r){return r=function kt(e,r){for(void 0===r&&p("ptr should not be undefined");e.baseClass;)r=e.upcast(r),e=e.baseClass;return r}(e,r),ue[r]}(this.registeredClass,r);if(void 0!==t){if(0===t.$$.count.value)return t.$$.ptr=r,t.$$.smartPtr=e,t.clone();var i=t.clone();return this.destructor(e),i}function o(){return ge(this.registeredClass.instancePrototype,this.isSmartPointer?{ptrType:this.pointeeType,ptr:r,smartPtrType:this,smartPtr:e}:{ptrType:this,ptr:e})}var a,s=this.registeredClass.getActualType(r),u=hr[s];if(!u)return o.call(this);var l=gr(r,this.registeredClass,(a=this.isConst?u.constPointerType:u.pointerType).registeredClass);return null===l?o.call(this):ge(a.registeredClass.instancePrototype,this.isSmartPointer?{ptrType:a,ptr:l,smartPtrType:this,smartPtr:e}:{ptrType:a,ptr:l})}function S(e,r,t,i,o,a,s,u,l,c,f){this.name=e,this.registeredClass=r,this.isReference=t,this.isConst=i,this.isSmartPointer=o,this.pointeeType=a,this.sharingPolicy=s,this.rawGetPointee=u,this.rawConstructor=l,this.rawShare=c,this.rawDestructor=f,o||void 0!==r.baseClass?this.toWireType=Tt:i?(this.toWireType=wt,this.destructorFunction=null):(this.toWireType=_t,this.destructorFunction=null)}function br(e,r,t){n.hasOwnProperty(e)||he("Replacing nonexistant public symbol"),void 0!==n[e].overloadTable&&void 0!==t?n[e].overloadTable[t]=r:(n[e]=r,n[e].argCount=t)}function _(e,r){e=v(e);var i=function t(o){var a=[r];return function(){a.length=arguments.length+1;for(var s=0;s<arguments.length;s++)a[s+1]=arguments[s];return o.apply(null,a)}}(n["dynCall_"+e]);return"function"!=typeof i&&p("unknown function pointer with signature "+e+": "+r),i}var $r=void 0;function Cr(e){var r=Ar(e),t=v(r);return j(r),t}function be(e,r){var t=[],i={};throw r.forEach(function o(a){i[a]||V[a]||(me[a]?me[a].forEach(o):(t.push(a),i[a]=!0))}),new $r(e+": "+t.map(Cr).join([", "]))}function Ue(e,r){for(var t=[],i=0;i<e;i++)t.push(g[(r>>2)+i]);return t}function wr(e,r,t,i,o){var a=r.length;a<2&&p("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var s=null!==r[1]&&null!==t,u=!1,l=1;l<r.length;++l)if(null!==r[l]&&void 0===r[l].destructorFunction){u=!0;break}var c="void"!==r[0].name,f=a-2,m=new Array(f),d=[],h=[];return function(){var $;arguments.length!==f&&p("function "+e+" called with "+arguments.length+" arguments, expected "+f+" args!"),h.length=0,d.length=s?2:1,d[0]=o,s&&($=r[1].toWireType(h,this),d[1]=$);for(var y=0;y<f;++y)m[y]=r[y+2].toWireType(h,arguments[y]),d.push(m[y]);var x=i.apply(null,d);if(u)ye(h);else for(y=s?1:2;y<r.length;y++){var D=1===y?$:m[y-2];null!==r[y].destructorFunction&&r[y].destructorFunction(D)}if(c)return r[0].fromWireType(x)}}var Me=[],w=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Ve(e){e>4&&0==--w[e].refcount&&(w[e]=void 0,Me.push(e))}function Vt(){for(var e=0,r=5;r<w.length;++r)void 0!==w[r]&&++e;return e}function Ht(){for(var e=5;e<w.length;++e)if(void 0!==w[e])return w[e];return null}function O(e){switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=Me.length?Me.pop():w.length;return w[r]={refcount:1,value:e},r}}function Lt(e,r,t){switch(r){case 0:return function(i){return this.fromWireType((t?fe:b)[i])};case 1:return function(i){return this.fromWireType((t?U:re)[i>>1])};case 2:return function(i){return this.fromWireType((t?g:P)[i>>2])};default:throw new TypeError("Unknown integer type: "+e)}}function $e(e,r){var t=V[e];return void 0===t&&p(r+" has unknown type "+Cr(e)),t}function G(e){if(null===e)return"null";var r=typeof e;return"object"===r||"array"===r||"function"===r?e.toString():""+e}function Gt(e,r){switch(r){case 2:return function(t){return this.fromWireType(Qe[t>>2])};case 3:return function(t){return this.fromWireType(er[t>>3])};default:throw new TypeError("Unknown float type: "+e)}}function Kt(e,r,t){switch(r){case 0:return t?function(i){return fe[i]}:function(i){return b[i]};case 1:return t?function(i){return U[i>>1]}:function(i){return re[i>>1]};case 2:return t?function(i){return g[i>>2]}:function(i){return P[i>>2]};default:throw new TypeError("Unknown integer type: "+e)}}function se(e){return e||p("Cannot use deleted val. handle = "+e),w[e].value}var an={};function Ce(e){var r=an[e];return void 0===r?v(e):r}var He=[];function Tr(){if("object"==typeof globalThis)return globalThis;function e(r){r.$$$embind_global$$$=r;var t="object"==typeof $$$embind_global$$$&&r.$$$embind_global$$$===r;return t||delete r.$$$embind_global$$$,t}if("object"==typeof $$$embind_global$$$||("object"==typeof Pe.c&&e(Pe.c)?$$$embind_global$$$=Pe.c:"object"==typeof self&&e(self)&&($$$embind_global$$$=self),"object"==typeof $$$embind_global$$$))return $$$embind_global$$$;throw Error("unable to get global object.")}var _r={};function wn(e){try{return ee.grow(e-B.byteLength+65535>>>16),tr(ee.buffer),1}catch(r){}}var we={mappings:{},buffers:[null,[],[]],printChar:function(e,r){var t=we.buffers[e];0===r||10===r?((1===e?Fr:z)(Ke(t,0)),t.length=0):t.push(r)},varargs:void 0,get:function(){return we.varargs+=4,g[we.varargs-4>>2]},getStr:function(e){return Ye(e)},get64:function(e,r){return e}};pr=n.InternalError=ke(Error,"InternalError"),function ft(){for(var e=new Array(256),r=0;r<256;++r)e[r]=String.fromCharCode(r);dr=e}(),q=n.BindingError=ke(Error,"BindingError"),function $t(){R.prototype.isAliasOf=dt,R.prototype.clone=ht,R.prototype.delete=vt,R.prototype.isDeleted=gt,R.prototype.deleteLater=bt}(),function xt(){S.prototype.getPointee=Pt,S.prototype.destructor=At,S.prototype.argPackAdvance=8,S.prototype.readValueFromPointer=ne,S.prototype.deleteObject=Wt,S.prototype.fromWireType=Rt}(),function jt(){n.getInheritedInstanceCount=Et,n.getLiveInheritedInstances=St,n.flushPendingDeletes=xe,n.setDelayFunction=Ot}(),$r=n.UnboundTypeError=ke(Error,"UnboundTypeError"),function zt(){n.count_emval_handles=Vt,n.get_first_emval=Ht}();var Sn={u:function ct(e){var r=de[e];delete de[e];var t=r.rawConstructor,i=r.rawDestructor,o=r.fields;F([e],o.map(function(a){return a.getterReturnType}).concat(o.map(function(a){return a.setterArgumentType})),function(a){var s={};return o.forEach(function(u,l){var f=a[l],m=u.getter,d=u.getterContext,h=a[l+o.length],$=u.setter,y=u.setterContext;s[u.fieldName]={read:function(x){return f.fromWireType(m(d,x))},write:function(x,D){var X=[];$(y,x,h.toWireType(X,D)),ye(X)}}}),[{name:r.name,fromWireType:function(u){var l={};for(var c in s)l[c]=s[c].read(u);return i(u),l},toWireType:function(u,l){for(var c in s)if(!(c in l))throw new TypeError('Missing field:  "'+c+'"');var f=t();for(c in s)s[c].write(f,l[c]);return null!==u&&u.push(i,f),f},argPackAdvance:8,readValueFromPointer:ne,destructorFunction:i}]})},J:function pt(e,r,t,i,o){var a=ve(t);W(e,{name:r=v(r),fromWireType:function(s){return!!s},toWireType:function(s,u){return u?i:o},argPackAdvance:8,readValueFromPointer:function(s){var u;if(1===t)u=fe;else if(2===t)u=U;else{if(4!==t)throw new TypeError("Unknown boolean type size: "+r);u=g}return this.fromWireType(u[s>>a])},destructorFunction:null})},y:function Dt(e,r,t,i,o,a,s,u,l,c,f,m,d){f=v(f),a=_(o,a),u&&(u=_(s,u)),c&&(c=_(l,c)),d=_(m,d);var h=fr(f);De(h,function(){be("Cannot construct "+f+" due to unbound types",[i])}),F([e,r,t],i?[i]:[],function($){var y,x;$=$[0],x=i?(y=$.registeredClass).instancePrototype:R.prototype;var D=je(h,function(){if(Object.getPrototypeOf(this)!==X)throw new q("Use 'new' to construct "+f);if(void 0===J.constructor_body)throw new q(f+" has no accessible constructor");var Sr=J.constructor_body[arguments.length];if(void 0===Sr)throw new q("Tried to invoke ctor of "+f+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(J.constructor_body).toString()+") parameters instead!");return Sr.apply(this,arguments)}),X=Object.create(x,{constructor:{value:D}});D.prototype=X;var J=new Ct(f,D,X,d,y,a,u,c),jn=new S(f,J,!0,!1,!1),Wr=new S(f+"*",J,!1,!1,!1),Er=new S(f+" const*",J,!1,!0,!1);return hr[e]={pointerType:Wr,constPointerType:Er},br(h,D),[jn,Wr,Er]})},x:function It(e,r,t,i,o,a){Oe(r>0);var s=Ue(r,t);o=_(i,o);var u=[a],l=[];F([],[e],function(c){var f="constructor "+(c=c[0]).name;if(void 0===c.registeredClass.constructor_body&&(c.registeredClass.constructor_body=[]),void 0!==c.registeredClass.constructor_body[r-1])throw new q("Cannot register multiple constructors with identical number of parameters ("+(r-1)+") for class '"+c.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return c.registeredClass.constructor_body[r-1]=function(){be("Cannot construct "+c.name+" due to unbound types",s)},F([],s,function(m){return c.registeredClass.constructor_body[r-1]=function(){arguments.length!==r-1&&p(f+" called with "+arguments.length+" arguments, expected "+(r-1)),l.length=0,u.length=r;for(var d=1;d<r;++d)u[d]=m[d].toWireType(l,arguments[d-1]);var h=o.apply(null,u);return ye(l),m[0].fromWireType(h)},[]}),[]})},d:function Ut(e,r,t,i,o,a,s,u){var l=Ue(t,i);r=v(r),a=_(o,a),F([],[e],function(c){var f=(c=c[0]).name+"."+r;function m(){be("Cannot call "+f+" due to unbound types",l)}u&&c.registeredClass.pureVirtualFunctions.push(r);var d=c.registeredClass.instancePrototype,h=d[r];return void 0===h||void 0===h.overloadTable&&h.className!==c.name&&h.argCount===t-2?(m.argCount=t-2,m.className=c.name,d[r]=m):(vr(d,r,f),d[r].overloadTable[t-2]=m),F([],l,function($){var y=wr(f,$,c,a,s);return void 0===d[r].overloadTable?(y.argCount=t-2,d[r]=y):d[r].overloadTable[t-2]=y,[]}),[]})},k:function Mt(e,r,t){e=v(e),F([],[r],function(i){return n[e]=(i=i[0]).fromWireType(t),[]})},I:function Bt(e,r){W(e,{name:r=v(r),fromWireType:function(t){var i=w[t].value;return Ve(t),i},toWireType:function(t,i){return O(i)},argPackAdvance:8,readValueFromPointer:ne,destructorFunction:null})},n:function Nt(e,r,t,i){var o=ve(t);function a(){}r=v(r),a.values={},W(e,{name:r,constructor:a,fromWireType:function(s){return this.constructor.values[s]},toWireType:function(s,u){return u.value},argPackAdvance:8,readValueFromPointer:Lt(r,o,i),destructorFunction:null}),De(r,a)},a:function qt(e,r,t){var i=$e(e,"enum");r=v(r);var o=i.constructor,a=Object.create(i.constructor.prototype,{value:{value:t},constructor:{value:je(i.name+"_"+r,function(){})}});o.values[t]=a,o[r]=a},B:function Xt(e,r,t){var i=ve(t);W(e,{name:r=v(r),fromWireType:function(o){return o},toWireType:function(o,a){if("number"!=typeof a&&"boolean"!=typeof a)throw new TypeError('Cannot convert "'+G(a)+'" to '+this.name);return a},argPackAdvance:8,readValueFromPointer:Gt(r,i),destructorFunction:null})},i:function Jt(e,r,t,i,o,a){var s=Ue(r,t);e=v(e),o=_(i,o),De(e,function(){be("Cannot call "+e+" due to unbound types",s)},r-1),F([],s,function(u){var l=[u[0],null].concat(u.slice(1));return br(e,wr(e,l,null,o,a),r-1),[]})},j:function Yt(e,r,t,i,o){r=v(r),-1===o&&(o=4294967295);var a=ve(t),s=function(c){return c};if(0===i){var u=32-8*t;s=function(c){return c<<u>>>u}}var l=-1!=r.indexOf("unsigned");W(e,{name:r,fromWireType:s,toWireType:function(c,f){if("number"!=typeof f&&"boolean"!=typeof f)throw new TypeError('Cannot convert "'+G(f)+'" to '+this.name);if(f<i||f>o)throw new TypeError('Passing a number "'+G(f)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+i+", "+o+"]!");return l?f>>>0:0|f},argPackAdvance:8,readValueFromPointer:Kt(r,a,0!==i),destructorFunction:null})},h:function Zt(e,r,t){var i=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function o(a){var u=P[a>>=2];return new i(B,P[a+1],u)}W(e,{name:t=v(t),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})},C:function Qt(e,r){var t="std::string"===(r=v(r));W(e,{name:r,fromWireType:function(i){var o,a=P[i>>2];if(t)for(var s=i+4,u=0;u<=a;++u){var l=i+4+u;if(u==a||0==b[l]){var c=Ye(s,l-s);void 0===o?o=c:(o+=String.fromCharCode(0),o+=c),s=l+1}}else{var f=new Array(a);for(u=0;u<a;++u)f[u]=String.fromCharCode(b[i+4+u]);o=f.join("")}return j(i),o},toWireType:function(i,o){o instanceof ArrayBuffer&&(o=new Uint8Array(o));var a="string"==typeof o;a||o instanceof Uint8Array||o instanceof Uint8ClampedArray||o instanceof Int8Array||p("Cannot pass non-string to std::string");var s=(t&&a?function(){return function Ir(e){for(var r=0,t=0;t<e.length;++t){var i=e.charCodeAt(t);i>=55296&&i<=57343&&(i=65536+((1023&i)<<10)|1023&e.charCodeAt(++t)),i<=127?++r:r+=i<=2047?2:i<=65535?3:4}return r}(o)}:function(){return o.length})(),u=ze(4+s+1);if(P[u>>2]=s,t&&a)!function Dr(e,r,t){(function xr(e,r,t,i){if(!(i>0))return 0;for(var o=t,a=t+i-1,s=0;s<e.length;++s){var u=e.charCodeAt(s);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&e.charCodeAt(++s)),u<=127){if(t>=a)break;r[t++]=u}else if(u<=2047){if(t+1>=a)break;r[t++]=192|u>>6,r[t++]=128|63&u}else if(u<=65535){if(t+2>=a)break;r[t++]=224|u>>12,r[t++]=128|u>>6&63,r[t++]=128|63&u}else{if(t+3>=a)break;r[t++]=240|u>>18,r[t++]=128|u>>12&63,r[t++]=128|u>>6&63,r[t++]=128|63&u}}r[t]=0})(e,b,r,t)}(o,u+4,s+1);else if(a)for(var l=0;l<s;++l){var c=o.charCodeAt(l);c>255&&(j(u),p("String has UTF-16 code units that do not fit in 8 bits")),b[u+4+l]=c}else for(l=0;l<s;++l)b[u+4+l]=o[l];return null!==i&&i.push(j,u),u},argPackAdvance:8,readValueFromPointer:ne,destructorFunction:function(i){j(i)}})},w:function en(e,r,t){var i,o,a,s,u;t=v(t),2===r?(i=Ur,o=Mr,s=Vr,a=function(){return re},u=1):4===r&&(i=Hr,o=zr,s=Br,a=function(){return P},u=2),W(e,{name:t,fromWireType:function(l){for(var c,f=P[l>>2],m=a(),d=l+4,h=0;h<=f;++h){var $=l+4+h*r;if(h==f||0==m[$>>u]){var y=i(d,$-d);void 0===c?c=y:(c+=String.fromCharCode(0),c+=y),d=$+r}}return j(l),c},toWireType:function(l,c){"string"!=typeof c&&p("Cannot pass non-string to C++ string type "+t);var f=s(c),m=ze(4+f+r);return P[m>>2]=f>>u,o(c,m+4,f+r),null!==l&&l.push(j,m),m},argPackAdvance:8,readValueFromPointer:ne,destructorFunction:function(l){j(l)}})},v:function rn(e,r,t,i,o,a){de[e]={name:v(r),rawConstructor:_(t,i),rawDestructor:_(o,a),fields:[]}},c:function tn(e,r,t,i,o,a,s,u,l,c){de[e].fields.push({fieldName:v(r),getterReturnType:t,getter:_(i,o),getterContext:a,setterArgumentType:s,setter:_(u,l),setterContext:c})},K:function nn(e,r){W(e,{isVoid:!0,name:r=v(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(t,i){}})},m:function on(e,r,t){e=se(e),r=$e(r,"emval::as");var i=[],o=O(i);return g[t>>2]=o,r.toWireType(i,e)},s:function un(e,r,t,i){(e=He[e])(r=se(r),t=Ce(t),null,i)},b:Ve,z:function sn(e){return 0===e?O(Tr()):(e=Ce(e),O(Tr()[e]))},t:function fn(e,r){var t=function cn(e,r){for(var t=new Array(e),i=0;i<e;++i)t[i]=$e(g[(r>>2)+i],"parameter "+i);return t}(e,r),i=t[0],o=new Array(e-1);return function ln(e){var r=He.length;return He.push(e),r}(function(a,s,u,l){for(var c=0,f=0;f<e-1;++f)o[f]=t[f+1].readValueFromPointer(l+c),c+=t[f+1].argPackAdvance;var m=a[s].apply(a,o);for(f=0;f<e-1;++f)t[f+1].deleteObject&&t[f+1].deleteObject(o[f]);if(!i.isVoid)return i.toWireType(u,m)})},r:function pn(e){return e=Ce(e),O(n[e])},e:function dn(e,r){return O((e=se(e))[r=se(r)])},g:function yn(e){e>4&&(w[e].refcount+=1)},q:function hn(e,r,t,i){e=se(e);var o=_r[r];return o||(o=function mn(e){var r=new Array(e+1);return function(t,i,o){r[0]=t;for(var a=0;a<e;++a){var s=$e(g[(i>>2)+a],"parameter "+a);r[a+1]=s.readValueFromPointer(o),o+=s.argPackAdvance}return O(new(t.bind.apply(t,r)))}}(r),_r[r]=o),o(e,t,i)},f:function vn(e){return O(Ce(e))},l:function gn(e){ye(w[e].value),Ve(e)},p:function bn(){L()},F:function $n(e,r,t){b.copyWithin(e,r,r+t)},G:function Tn(e){e>>>=0;var r=function Cn(){return b.length}(),i=2147483648;if(e>i)return!1;for(var a=1;a<=4;a*=2){var s=r*(1+.2/a);if(s=Math.min(s,e+100663296),wn(Math.min(i,Lr(Math.max(16777216,e,s),65536))))return!0}return!1},H:function _n(e){return 0},D:function Pn(e,r,t,i,o){},A:function An(e,r,t,i){for(var o=0,a=0;a<t;a++){for(var s=g[r+8*a>>2],u=g[r+(8*a+4)>>2],l=0;l<u;l++)we.printChar(e,b[s+l]);o+=u}return g[i>>2]=o,0},memory:ee,o:function Wn(e){return(e=+e)>=0?+rt(e+.5):+et(e-.5)},E:function En(e){},table:Rr};!function ut(){var e={a:Sn};function r(a,s){n.asm=a.exports,function nt(e){if(M--,n.monitorRunDependencies&&n.monitorRunDependencies(M),0==M&&te){var r=te;te=null,r()}}()}function t(a){r(a.instance)}function i(a){return function at(){return Q||!le&&!I||"function"!=typeof fetch||lr(A)?new Promise(function(e,r){e(cr())}):fetch(A,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+A+"'";return e.arrayBuffer()}).catch(function(){return cr()})}().then(function(s){return WebAssembly.instantiate(s,e)}).then(a,function(s){z("failed to asynchronously prepare wasm: "+s),L(s)})}if(function tt(e){M++,n.monitorRunDependencies&&n.monitorRunDependencies(M)}(),n.instantiateWasm)try{return n.instantiateWasm(e,r)}catch(a){return z("Module.instantiateWasm callback failed with error: "+a),!1}(function o(){if(Q||"function"!=typeof WebAssembly.instantiateStreaming||sr(A)||lr(A)||"function"!=typeof fetch)return i(t);fetch(A,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,e).then(t,function(s){return z("wasm streaming compile failed: "+s),z("falling back to ArrayBuffer instantiation"),i(t)})})})()}();var Te,Pr=n.___wasm_call_ctors=function(){return(Pr=n.___wasm_call_ctors=n.asm.L).apply(null,arguments)},ze=n._malloc=function(){return(ze=n._malloc=n.asm.M).apply(null,arguments)},j=n._free=function(){return(j=n._free=n.asm.N).apply(null,arguments)},Ar=n.___getTypeName=function(){return(Ar=n.___getTypeName=n.asm.O).apply(null,arguments)};function On(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function Be(e){function r(){Te||(Te=!0,n.calledRun=!0,Xe||(function Jr(){pe(or)}(),function Kr(){pe(Gr)}(),Y(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),function Yr(){if(n.postRun)for("function"==typeof n.postRun&&(n.postRun=[n.postRun]);n.postRun.length;)e=n.postRun.shift(),ar.unshift(e);var e;pe(ar)}()))}M>0||(function Xr(){if(n.preRun)for("function"==typeof n.preRun&&(n.preRun=[n.preRun]);n.preRun.length;)e=n.preRun.shift(),ir.unshift(e);var e;pe(ir)}(),M>0||(n.setStatus?(n.setStatus("Running..."),setTimeout(function(){setTimeout(function(){n.setStatus("")},1),r()},1)):r()))}if(n.___embind_register_native_and_builtin_types=function(){return(n.___embind_register_native_and_builtin_types=n.asm.P).apply(null,arguments)},n.dynCall_viii=function(){return(n.dynCall_viii=n.asm.Q).apply(null,arguments)},n.dynCall_vi=function(){return(n.dynCall_vi=n.asm.R).apply(null,arguments)},n.dynCall_v=function(){return(n.dynCall_v=n.asm.S).apply(null,arguments)},n.dynCall_i=function(){return(n.dynCall_i=n.asm.T).apply(null,arguments)},n.dynCall_iii=function(){return(n.dynCall_iii=n.asm.U).apply(null,arguments)},n.dynCall_ii=function(){return(n.dynCall_ii=n.asm.V).apply(null,arguments)},n.dynCall_vii=function(){return(n.dynCall_vii=n.asm.W).apply(null,arguments)},n.dynCall_iiii=function(){return(n.dynCall_iiii=n.asm.X).apply(null,arguments)},n.dynCall_iiiii=function(){return(n.dynCall_iiiii=n.asm.Y).apply(null,arguments)},n.dynCall_iiiiii=function(){return(n.dynCall_iiiiii=n.asm.Z).apply(null,arguments)},n.dynCall_iiiiiiii=function(){return(n.dynCall_iiiiiiii=n.asm._).apply(null,arguments)},n.dynCall_iiiiiiiii=function(){return(n.dynCall_iiiiiiiii=n.asm.$).apply(null,arguments)},n.dynCall_viiii=function(){return(n.dynCall_viiii=n.asm.aa).apply(null,arguments)},n.dynCall_iiiiiii=function(){return(n.dynCall_iiiiiii=n.asm.ba).apply(null,arguments)},n.dynCall_iiiiiiiiiiiiiiiiiiii=function(){return(n.dynCall_iiiiiiiiiiiiiiiiiiii=n.asm.ca).apply(null,arguments)},n.dynCall_iiiiiiiiiiiiiiiiiiiii=function(){return(n.dynCall_iiiiiiiiiiiiiiiiiiiii=n.asm.da).apply(null,arguments)},n.dynCall_iiiiiiiiiiiiiiiiiii=function(){return(n.dynCall_iiiiiiiiiiiiiiiiiii=n.asm.ea).apply(null,arguments)},n.dynCall_viiiii=function(){return(n.dynCall_viiiii=n.asm.fa).apply(null,arguments)},n.dynCall_iiiiiiiiii=function(){return(n.dynCall_iiiiiiiiii=n.asm.ga).apply(null,arguments)},n.dynCall_iiiiiiiiiii=function(){return(n.dynCall_iiiiiiiiiii=n.asm.ha).apply(null,arguments)},n.dynCall_jiji=function(){return(n.dynCall_jiji=n.asm.ia).apply(null,arguments)},n.dynCall_viiiiii=function(){return(n.dynCall_viiiiii=n.asm.ja).apply(null,arguments)},te=function e(){Te||Be(),Te||(te=e)},n.run=Be,n.preInit)for("function"==typeof n.preInit&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return Be(),k.ready};const jr=function Or(k,Y){for(var H=0;H<Y.length;H++){const n=Y[H];if("string"!=typeof n&&!Array.isArray(n))for(const C in n)if("default"!==C&&!(C in k)){const E=Object.getOwnPropertyDescriptor(n,C);E&&Object.defineProperty(k,C,E.get?E:{enumerable:!0,get:()=>n[C]})}}return Object.freeze(Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}))}({__proto__:null,default:Ae.exports},[Ae.exports])}}]);