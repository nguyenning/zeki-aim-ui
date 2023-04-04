"use strict";(self.webpackChunkexample_app=self.webpackChunkexample_app||[]).push([[9440],{36592:(b,j,h)=>{h.d(j,{Q:()=>M});var P=h(85931),E=h(62208),B=h(77029),D=h(14259);class M{constructor(t=9,s){this.compareMinX=S,this.compareMinY=c,this._toBBox=e=>e,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),s&&("function"==typeof s?this._toBBox=s:this._initFormat(s)),this.clear()}destroy(){this.clear(),U.prune(),X.prune(),I.prune(),Y.prune()}all(t){this._all(this.data,t)}search(t,s){let e=this.data;const o=this._toBBox;if(T(t,e))for(U.clear();e;){for(let r=0,_=e.children.length;r<_;r++){const u=e.children[r],p=e.leaf?o(u):u;T(t,p)&&(e.leaf?s(u):C(t,p)?this._all(u,s):U.push(u))}e=U.pop()}}collides(t){let s=this.data;const e=this._toBBox;if(!T(t,s))return!1;for(U.clear();s;){for(let o=0,r=s.children.length;o<r;o++){const _=s.children[o],u=s.leaf?e(_):_;if(T(t,u)){if(s.leaf||C(t,u))return!0;U.push(_)}}s=U.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,o=t.length;e<o;e++)this.insert(t[e]);return this}let s=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===s.height)this._splitRoot(this.data,s);else{if(this.data.height<s.height){const e=this.data;this.data=s,s=e}this._insert(s,this.data.height-s.height-1,!0)}else this.data=s;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new i([]),this}remove(t){var p;if(!t)return this;let s,e=this.data,o=null,r=0,_=!1;const u=this._toBBox(t);for(I.clear(),Y.clear();e||I.length>0;){if(e||(e=(0,E.j0)(I.pop()),o=I.data[I.length-1],r=null!=(p=Y.pop())?p:0,_=!0),e.leaf&&(s=(0,P.cq)(e.children,t,e.children.length,e.indexHint),-1!==s))return e.children.splice(s,1),I.push(e),this._condense(I),this;_||e.leaf||!C(e,u)?o?(r++,e=o.children[r],_=!1):e=null:(I.push(e),Y.push(r),r=0,o=e,e=e.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,s){var o;let e=t;for(X.clear();e;){if(!0===e.leaf)for(const r of e.children)s(r);else X.pushArray(e.children);e=null!=(o=X.pop())?o:null}}_build(t,s,e,o){const r=e-s+1;let _=this._maxEntries;if(r<=_){const g=new i(t.slice(s,e+1));return l(g,this._toBBox),g}o||(o=Math.ceil(Math.log(r)/Math.log(_)),_=Math.ceil(r/_**(o-1)));const u=new d([]);u.height=o;const p=Math.ceil(r/_),x=p*Math.ceil(Math.sqrt(_));K(t,s,e,x,this.compareMinX);for(let g=s;g<=e;g+=x){const A=Math.min(g+x-1,e);K(t,g,A,p,this.compareMinY);for(let W=g;W<=A;W+=p){const F=Math.min(W+p-1,A);u.children.push(this._build(t,W,F,o-1))}}return l(u,this._toBBox),u}_chooseSubtree(t,s,e,o){for(;o.push(s),!0!==s.leaf&&o.length-1!==e;){let r,_=1/0,u=1/0;for(let p=0,x=s.children.length;p<x;p++){const g=s.children[p],A=f(g),W=m(t,g)-A;W<u?(u=W,_=A<_?A:_,r=g):W===u&&A<_&&(_=A,r=g)}s=r||s.children[0]}return s}_insert(t,s,e){const r=e?t:(0,this._toBBox)(t);I.clear();const _=this._chooseSubtree(r,this.data,s,I);for(_.children.push(t),v(_,r);s>=0&&I.data[s].children.length>this._maxEntries;)this._split(I,s),s--;this._adjustParentBBoxes(r,I,s)}_split(t,s){const e=t.data[s],o=e.children.length,r=this._minEntries;this._chooseSplitAxis(e,r,o);const _=this._chooseSplitIndex(e,r,o);if(!_)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const u=e.children.splice(_,e.children.length-_),p=e.leaf?new i(u):new d(u);p.height=e.height,l(e,this._toBBox),l(p,this._toBBox),s?t.data[s-1].children.push(p):this._splitRoot(e,p)}_splitRoot(t,s){this.data=new d([t,s]),this.data.height=t.height+1,l(this.data,this._toBBox)}_chooseSplitIndex(t,s,e){let o,r,_;o=r=1/0;for(let u=s;u<=e-s;u++){const p=y(t,0,u,this._toBBox),x=y(t,u,e,this._toBBox),g=O(p,x),A=f(p)+f(x);g<o?(o=g,_=u,r=A<r?A:r):g===o&&A<r&&(r=A,_=u)}return _}_chooseSplitAxis(t,s,e){const o=t.leaf?this.compareMinX:S,r=t.leaf?this.compareMinY:c;this._allDistMargin(t,s,e,o)<this._allDistMargin(t,s,e,r)&&t.children.sort(o)}_allDistMargin(t,s,e,o){t.children.sort(o);const r=this._toBBox,_=y(t,0,s,r),u=y(t,e-s,e,r);let p=a(_)+a(u);for(let x=s;x<e-s;x++){const g=t.children[x];v(_,t.leaf?r(g):g),p+=a(_)}for(let x=e-s-1;x>=s;x--){const g=t.children[x];v(u,t.leaf?r(g):g),p+=a(u)}return p}_adjustParentBBoxes(t,s,e){for(let o=e;o>=0;o--)v(s.data[o],t)}_condense(t){for(let s=t.length-1;s>=0;s--){const e=t.data[s];if(0===e.children.length)if(s>0){const o=t.data[s-1],r=o.children;r.splice((0,P.cq)(r,e,r.length,o.indexHint),1)}else this.clear();else l(e,this._toBBox)}}_initFormat(t){const s=["return a"," - b",";"];this.compareMinX=new Function("a","b",s.join(t[0])),this.compareMinY=new Function("a","b",s.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function l(n,t){y(n,0,n.children.length,t,n)}function y(n,t,s,e,o){o||(o=new i([])),o.minX=1/0,o.minY=1/0,o.maxX=-1/0,o.maxY=-1/0;for(let r,_=t;_<s;_++)r=n.children[_],v(o,n.leaf?e(r):r);return o}function v(n,t){n.minX=Math.min(n.minX,t.minX),n.minY=Math.min(n.minY,t.minY),n.maxX=Math.max(n.maxX,t.maxX),n.maxY=Math.max(n.maxY,t.maxY)}function S(n,t){return n.minX-t.minX}function c(n,t){return n.minY-t.minY}function f(n){return(n.maxX-n.minX)*(n.maxY-n.minY)}function a(n){return n.maxX-n.minX+(n.maxY-n.minY)}function m(n,t){return(Math.max(t.maxX,n.maxX)-Math.min(t.minX,n.minX))*(Math.max(t.maxY,n.maxY)-Math.min(t.minY,n.minY))}function O(n,t){const s=Math.max(n.minX,t.minX),e=Math.max(n.minY,t.minY),o=Math.min(n.maxX,t.maxX),r=Math.min(n.maxY,t.maxY);return Math.max(0,o-s)*Math.max(0,r-e)}function C(n,t){return n.minX<=t.minX&&n.minY<=t.minY&&t.maxX<=n.maxX&&t.maxY<=n.maxY}function T(n,t){return t.minX<=n.maxX&&t.minY<=n.maxY&&t.maxX>=n.minX&&t.maxY>=n.minY}function K(n,t,s,e,o){const r=[t,s];for(;r.length;){const _=(0,E.j0)(r.pop()),u=(0,E.j0)(r.pop());if(_-u<=e)continue;const p=u+Math.ceil((_-u)/e/2)*e;(0,D.q)(n,p,u,_,o),r.push(u,p,p,_)}}const U=new B.Z,X=new B.Z,I=new B.Z,Y=new B.Z({deallocator:void 0});class L extends class R{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}{constructor(){super(...arguments),this.height=1,this.indexHint=new P.SO}}class i extends L{constructor(t){super(),this.children=t,this.leaf=!0}}class d extends L{constructor(t){super(),this.children=t,this.leaf=!1}}},61256:(b,j,h)=>{h.d(j,{H:()=>v});var P=h(8314),E=h(36592),B=h(65401);const M={minX:0,minY:0,maxX:0,maxY:0};class v{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new E.Q(9,(0,P.Z)("esri-csp-restrictions")?c=>({minX:c[0],minY:c[1],maxX:c[2],maxY:c[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const c=new Array(this._idByBounds.size);let f=0;this._idByBounds.forEach((a,m)=>{c[f++]=m}),this._indexInvalid=!1,this._index.clear(),this._index.load(c)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter(c=>this._idByBounds.has(c))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const c=(0,B.cS)();for(const f of this._boundsById.values())f&&(c[0]=Math.min(f[0],c[0]),c[1]=Math.min(f[1],c[1]),c[2]=Math.max(f[2],c[2]),c[3]=Math.max(f[3],c[3]));return c}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(c){const f=this._boundsById.get(c);this._boundsById.delete(c),f&&(this._idByBounds.delete(f),this._indexInvalid||this._index.remove(f))}forEachInBounds(c,f){this._loadIndex(),function y(S,c,f){(function l(S){M.minX=S[0],M.minY=S[1],M.maxX=S[2],M.maxY=S[3]})(c),S.search(M,f)}(this._index,c,a=>f(this._idByBounds.get(a)))}get(c){return this._boundsById.get(c)}has(c){return this._boundsById.has(c)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(c,f){if(!this._indexInvalid){const a=this._boundsById.get(c);a&&(this._index.remove(a),this._idByBounds.delete(a))}this._boundsById.set(c,f),f&&(this._idByBounds.set(f,c),this._indexInvalid||(this._boundsToLoad.push(f),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},3579:(b,j,h)=>{h.d(j,{Z:()=>c});var P=h(26584),E=h(61885),B=h(63290),D=h(62208),M=h(5548),l=h(65401),y=h(82054),v=h(61256),S=h(92794);class c{constructor(a){this.geometryInfo=a,this._boundsStore=new v.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new E.Z,this.featureAdapter=S.n}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let a=0;return this._featuresById.forEach(m=>{(0,D.pC)(m.geometry)&&m.geometry.coords&&(a+=m.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:a/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(a){this._add(a),this._emitChanged()}addMany(a){for(const m of a)this._add(m);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(a){const m=this._featuresById.get(a);return m?(this._remove(m),this._emitChanged(),m):null}removeManyById(a){this._boundsStore.invalidateIndex();for(const m of a){const O=this._featuresById.get(m);O&&this._remove(O)}this._emitChanged()}forEachBounds(a,m,O){for(const C of a){const T=this._boundsStore.get(C.objectId);T&&m((0,M.JR)(O,T))}}getFeature(a){return this._featuresById.get(a)}has(a){return this._featuresById.has(a)}toArray(){return Array.from(this._featuresById.values())}forEach(a){this._featuresById.forEach(m=>a(m))}forEachInBounds(a,m){this._boundsStore.forEachInBounds(a,O=>{m(this._featuresById.get(O))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let a=!1;this._featuresById.forEach((m,O)=>{this._markedIds.has(O)||(a=!0,this._remove(m))}),this._markedIds.clear(),a&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(a){if(!a)return;const m=a.objectId;if(null==m)return void B.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new P.Z("featurestore:invalid-feature","feature id is missing",{feature:a}));const O=this._featuresById.get(m);let C;if(this._markedIds.add(m),O?(a.displayId=O.displayId,C=this._boundsStore.get(m),this._boundsStore.delete(m)):(0,D.pC)(this.onFeatureAdd)&&this.onFeatureAdd(a),(0,D.Wi)(a.geometry)||!a.geometry.coords||!a.geometry.coords.length)return this._boundsStore.set(m,null),void this._featuresById.set(m,a);C=(0,y.$)((0,D.pC)(C)?C:(0,l.Ue)(),a.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,D.pC)(C)&&this._boundsStore.set(m,C),this._featuresById.set(m,a)}_remove(a){return(0,D.pC)(this.onFeatureRemove)&&this.onFeatureRemove(a),this._markedIds.delete(a.objectId),this._boundsStore.delete(a.objectId),this._featuresById.delete(a.objectId),a}}},92794:(b,j,h)=>{h.d(j,{n:()=>M});var P=h(62208),E=h(77044),B=h(66385),D=h(88071);const M={getObjectId:l=>l.objectId,getAttributes:l=>l.attributes,getAttribute:(l,y)=>l.attributes[y],cloneWithGeometry:(l,y)=>new B.u_(y,l.attributes,null,l.objectId),getGeometry:l=>l.geometry,getCentroid:(l,y)=>((0,P.Wi)(l.centroid)&&(l.centroid=(0,E.Y)(new D.Z,l.geometry,y.hasZ,y.hasM)),l.centroid)}},66269:(b,j,h)=>{h.r(j),h.d(j,{GraphicsSnappingSource:()=>R});var P=h(15861),E=h(17626),B=h(14517),D=h(85931),M=h(80542),l=h(62208),y=h(10699),v=h(77712),f=(h(8314),h(90912),h(76898)),a=h(37118),m=h(55915),O=h(65629),C=h(71774),T=h(82054),K=h(66385),U=h(3579),X=h(58175),I=h(44725),Y=h(9218);let R=class extends((0,M.p)(B.Z)){constructor(i){super(i),this.availability=1,this.sources={multipoint:null,point:null,polygon:null,polyline:null},this.loadedWkids=new Set,this.loadedWkts=new Set,this.pendingAdds=[]}get updating(){return this.updatingHandles.updating}get layer(){return this.layerSource.layer}destroy(){const i=this.pendingAdds;this.pendingAdds.length=0;for(const d of i)d.task.abort();this._mapSources(d=>this._destroySource(d))}initialize(){this.handles.add([this.layer.on("graphic-update",i=>this._onGraphicUpdate(i)),this.updatingHandles.addOnCollectionChange(()=>this.layer.graphics,i=>this._onGraphicsChanged(i))]),this._addMany(this.layer.graphics.toArray())}fetchCandidates(i,d){var n=this;return(0,P.Z)(function*(){const s=(yield(0,y.WW)(n._mapSources(e=>e.queryEngine.executeQueryForSnapping({point:i.coordinateHelper.vectorToPoint(i.point).toJSON(),distance:i.distance,types:i.types,query:(0,l.pC)(i.filter)?i.filter.createQuery().toJSON():{where:"1=1"}},d).then(({candidates:o})=>o)))).flat().map(e=>(0,Y.X)(e,i.coordinateHelper,i.elevationInfo));return(0,I.lQ)(i.point,s),s})()}refresh(){}_onGraphicUpdate(i){switch(i.property){case"geometry":case"visible":this._remove(i.graphic),this._addMany([i.graphic])}}_onGraphicsChanged(i){for(const d of i.removed)this._remove(d);this._addMany(i.added)}_addMany(i){const d=[],n=new Map;for(const t of i)(0,l.Wi)(t.geometry)||(this._needsInitializeProjection(t.geometry.spatialReference)?(d.push(t.geometry.spatialReference),n.set(t.uid,t)):this._add(t));this._createPendingAdd(d,n)}_createPendingAdd(i,d){var n=this;if(!i.length)return;const t=(0,y.vr)(function(){var o=(0,P.Z)(function*(r){yield(0,m.iQ)(i.map(_=>({source:_,dest:n.spatialReference})),{signal:r}),n._markLoadedSpatialReferences(i);for(const[,_]of d)n._add(_)});return function(r){return o.apply(this,arguments)}}());this.updatingHandles.addPromise(t.promise);const s={task:t,graphics:d},e=()=>(0,D.e$)(this.pendingAdds,s);t.promise.then(e,e),this.pendingAdds.push(s)}_markLoadedSpatialReferences(i){for(const d of i)null!=d.wkid&&this.loadedWkids.add(d.wkid),null!=d.wkt&&this.loadedWkts.add(d.wkt)}_add(i){if((0,l.Wi)(i.geometry)||!i.visible)return;let d=i.geometry;if("mesh"===d.type)return;"extent"===d.type&&(d=a.Z.fromExtent(d));const n=this._ensureSource(d.type);if((0,l.Wi)(n))return;const t=this._createOptimizedFeature(i.uid,d);(0,l.pC)(t)&&n.featureStore.add(t)}_needsInitializeProjection(i){return!(null!=i.wkid&&this.loadedWkids.has(i.wkid)||null!=i.wkt&&this.loadedWkts.has(i.wkt)||(0,m.Up)(i,this.spatialReference))}_createOptimizedFeature(i,d){const n=(0,m.iV)((0,O.SR)(d),this.spatialReference);return n?new K.u_((0,T.GH)(n,!1,!1),{[L]:i},null,i):null}_ensureSource(i){const d=this.sources[i];if((0,l.pC)(d))return d;const n=this._createSource(i);return this.sources[i]=n,n}_createSource(i){const d=C.Mk.toJSON(i),n=new U.Z({geometryType:d,hasZ:!1,hasM:!1});return{featureStore:n,queryEngine:new X.q({featureStore:n,fields:[{name:L,type:"esriFieldTypeOID",alias:L}],geometryType:d,hasM:!1,hasZ:!1,objectIdField:L,spatialReference:this.spatialReference,scheduler:(0,l.pC)(this.view)&&"3d"===this.view.type?this.view.resourceController.scheduler:null}),type:i}}_remove(i){this._mapSources(d=>this._removeFromSource(d,i));for(const d of this.pendingAdds)d.graphics.delete(i.uid),0===d.graphics.size&&d.task.abort()}_removeFromSource(i,d){i.featureStore.has(d.uid)&&i.featureStore.removeById(d.uid)}_destroySource(i){i.queryEngine.destroy(),this.sources[i.type]=null}_mapSources(i){const{point:d,polygon:n,polyline:t,multipoint:s}=this.sources,e=[];return(0,l.pC)(d)&&e.push(i(d)),(0,l.pC)(n)&&e.push(i(n)),(0,l.pC)(t)&&e.push(i(t)),(0,l.pC)(s)&&e.push(i(s)),e}};(0,E._)([(0,v.Cb)({constructOnly:!0})],R.prototype,"spatialReference",void 0),(0,E._)([(0,v.Cb)({constructOnly:!0})],R.prototype,"layerSource",void 0),(0,E._)([(0,v.Cb)({constructOnly:!0})],R.prototype,"view",void 0),(0,E._)([(0,v.Cb)({readOnly:!0})],R.prototype,"updating",null),(0,E._)([(0,v.Cb)({readOnly:!0})],R.prototype,"availability",void 0),R=(0,E._)([(0,f.j)("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")],R);const L="OBJECTID"},19038:(b,j,h)=>{h.d(j,{n:()=>B});var P=h(44725),E=h(5286);class B extends E.r{constructor(M,l){super(l),this.point=M}equals(M){return M instanceof B&&(0,P.Xv)(this.point,M.point)}}}}]);