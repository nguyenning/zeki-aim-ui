"use strict";var Ve=Object.defineProperty,Qe=Object.defineProperties,Ke=Object.getOwnPropertyDescriptors,ue=Object.getOwnPropertySymbols,Fe=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,ce=(I,g,n)=>g in I?Ve(I,g,{enumerable:!0,configurable:!0,writable:!0,value:n}):I[g]=n,A=(I,g)=>{for(var n in g||(g={}))Fe.call(g,n)&&ce(I,n,g[n]);if(ue)for(var n of ue(g))We.call(g,n)&&ce(I,n,g[n]);return I},L=(I,g)=>Qe(I,Ke(g));(self.webpackChunkexample_app=self.webpackChunkexample_app||[]).push([[1770],{14836:(I,g,n)=>{n.r(g),n.d(g,{default:()=>je});var f=n(15861),c=n(17626),R=n(84792),N=n(26584),S=n(58817),_=n(62208),W=n(99959),b=n(10699),y=n(21726),d=n(77712),D=(n(90912),n(68653)),$=n(76898),ee=n(99433),Z=n(2004),te=n(65234),J=n(44917),re=n(50085),m=n(5143),P=n(65088),M=n(552),pe=n(50107),ye=n(49286),he=n(6647),de=n(99555);let j=null;const ge=n(63290).Z.getLogger("esri.layers.support.SpriteSource");class se{constructor(t,r,s,l){this.baseURL=t,this.devicePixelRatio=r,this.maxTextureSize=s,this._spriteImageFormat=l,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}get spriteNames(){const t=[];for(const r in this._spritesData)t.push(r);return t.sort(),t}getSpriteInfo(t){return this._spritesData[t]}load(t){var r=this;return(0,f.Z)(function*(){if(r.baseURL){r.loadStatus="loading";try{yield r._loadSprites(t),r.loadStatus="loaded"}catch(s){r.loadStatus="failed"}}else r.loadStatus="failed"})()}_loadSprites(t){this._isRetina=this.devicePixelRatio>1.15;const r=(0,y.mN)(this.baseURL),s=r.query?"?"+(0,y.B7)(r.query):"",l=this._isRetina?"@2x":"",i=`${r.path}${l}.${this._spriteImageFormat}${s}`;return Promise.all([(0,R.default)(`${r.path}${l}.json${s}`,t),(0,R.default)(i,A({responseType:"image"},t))]).then(([a,u])=>{const p=Object.keys(a.data);if(!p||0===p.length||1===p.length&&"_ssl"===p[0]||!u||!u.data)return this._spritesData=this.image=null,this.width=this.height=0,null;this._spritesData=a.data;const v=u.data,C=Math.max(this.maxTextureSize,4096);if(v.width>C||v.height>C){const w=`Sprite resource for style ${r.path} is bigger than the maximum allowed of ${C} pixels}`;throw ge.error(w),new N.Z("SpriteSource",w)}this.width=v.width,this.height=v.height;const x=document.createElement("canvas"),U=x.getContext("2d");x.width=v.width,x.height=v.height,U.drawImage(v,0,0,v.width,v.height);const K=U.getImageData(0,0,v.width,v.height),T=new Uint8Array(K.data);let F;for(let w=0;w<T.length;w+=4)F=T[w+3]/255,T[w]=T[w]*F,T[w+1]=T[w+1]*F,T[w+2]=T[w+2]*F;this.image=T})}}var G=n(2584),le=n(59318),Ae=n(51026),Se=n(28930),oe=n(58098);class xe{constructor(t){this.url=t}fetchTileIndex(){var t=this;return(0,f.Z)(function*(){return t._tileIndexPromise||(t._tileIndexPromise=(0,R.default)(t.url).then(r=>r.data.index)),t._tileIndexPromise})()}dataKey(t,r){var s=this;return(0,f.Z)(function*(){const l=yield s.fetchTileIndex();return(0,b.k_)(r),s._getIndexedDataKey(l,t)})()}_getIndexedDataKey(t,r){const s=[r];if(r.level<0||r.row<0||r.col<0||r.row>>r.level>0||r.col>>r.level>0)return null;let l=r;for(;0!==l.level;)l=new oe.Z(l.level-1,l.row>>1,l.col>>1,l.world),s.push(l);let i,o,a=t,u=s.pop();if(1===a)return u;for(;s.length;)if(i=s.pop(),o=(1&i.col)+((1&i.row)<<1),a){if(0===a[o]){u=null;break}if(1===a[o]){u=i;break}u=i,a=a[o]}return u}}class Ue{constructor(t,r){this._tilemap=t,this._tileIndexUrl=r}fetchTileIndex(t){var r=this;return(0,f.Z)(function*(){return r._tileIndexPromise||(r._tileIndexPromise=(0,R.default)(r._tileIndexUrl,{query:A({},null==t?void 0:t.query)}).then(s=>s.data.index)),r._tileIndexPromise})()}dataKey(t,r){const{level:s,row:l,col:i}=t,o=new oe.Z(t);return this._tilemap.fetchAvailabilityUpsample(s,l,i,o,r).then(()=>(o.world=t.world,o)).catch(a=>{if((0,b.D_)(a))throw a;return null})}}const V=new Map;class we{constructor(t,r,s){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.name=t,this.sourceUrl=r;const l=(0,y.mN)(this.sourceUrl),i=(0,S.d9)(s),o=i.tiles;if(l)for(let x=0;x<o.length;x++){const U=(0,y.mN)(o[x]);U&&((0,y.YP)(U.path)||(U.path=(0,y.v_)(l.path,U.path)),o[x]=(0,y.fl)(U.path,A(A({},l.query),U.query)))}this.tileServers=o;const a=s.capabilities&&s.capabilities.split(",").map(x=>x.toLowerCase().trim()),u=!0===(null==s?void 0:s.exportTilesAllowed),p=!0===(null==a?void 0:a.includes("tilemap")),v=u&&s.hasOwnProperty("maxExportTilesCount")?s.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:u,supportsTileMap:p},exportTiles:u?{maxExportTilesCount:+v}:null},this.tileInfo=(0,Ae.d)(i.tileInfo,i,null,{ignoreMinMaxLOD:!0});const C=s.tileMap?(0,y.fl)((0,y.v_)(l.path,s.tileMap),l.query):null;p?(this.type="vector-tile",this.tilemap=new Ue(new Se.y({layer:{parsedUrl:l,tileInfo:this.tileInfo,type:"vector-tile",tileServers:this.tileServers}}),C)):C&&(this.tilemap=new xe(C)),this.fullExtent=Z.Z.fromJSON(s.fullExtent)}destroy(){}getRefKey(t,r){var s=this;return(0,f.Z)(function*(){var l,i;return null!=(i=null==(l=s.tilemap)?void 0:l.dataKey(t,r))?i:t})()}requestTile(t,r,s,l){return function Ie(e,t,r,s,l){return function Te(e,t){const r=V.get(e);if(r)return r.then(l=>(0,S.d9)(l));const s=(0,R.default)(e,A({responseType:"array-buffer"},t)).then(({data:l})=>(V.delete(e),l)).catch(l=>{throw V.delete(e),l});return V.set(e,s),s}(e.replace(/\{z\}/gi,t.toString()).replace(/\{y\}/gi,r.toString()).replace(/\{x\}/gi,s.toString()),l)}(this.tileServers[r%this.tileServers.length],t,r,s,l)}isCompatibleWith(t){const r=this.tileInfo,s=t.tileInfo;if(!r.spatialReference.equals(s.spatialReference)||!r.origin.equals(s.origin)||Math.round(r.dpi)!==Math.round(s.dpi))return!1;const l=r.lods,i=s.lods,o=Math.min(l.length,i.length);for(let a=0;a<o;a++){const u=l[a],p=i[a];if(u.level!==p.level||Math.round(u.scale)!==Math.round(p.scale))return!1}return!0}}const z=le.Z.defaults&&le.Z.defaults.io.corsEnabledServers;function H(){return(H=(0,f.Z)(function*(e,t){const r={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[s,l]="string"==typeof e?[e,null]:[null,e.jsonUrl];yield E(r,"esri",e,l,t);const i={layerDefinition:r.validatedSource,url:s,serviceUrl:r.sourceUrl,style:r.style,styleUrl:r.styleUrl,spriteUrl:r.style.sprite&&O(r.styleBase,r.style.sprite),spriteFormat:r.spriteFormat,glyphsUrl:r.style.glyphs&&O(r.styleBase,r.style.glyphs),sourceNameToSource:r.sourceNameToSource,primarySourceName:r.primarySourceName};return B(i.spriteUrl),B(i.glyphsUrl),i})).apply(this,arguments)}function B(e){if(!e)return;const t=(0,y.P$)(e);z&&!z.includes(t)&&z.push(t)}function O(...e){let t;for(let r=0;r<e.length;++r)(0,y.oC)(e[r])?t&&(t=t.split("://")[0]+":"+e[r].trim()):t=(0,y.YP)(e[r])?e[r]:(0,y.v_)(t,e[r]);return(0,y.Qj)(t)}function E(e,t,r,s,l){return Y.apply(this,arguments)}function Y(){return(Y=(0,f.Z)(function*(e,t,r,s,l){let i,o,a;if((0,b.k_)(l),"string"==typeof r){const p=(0,y.Fv)(r);B(p),a=yield(0,R.default)(p,L(A({},l),{responseType:"json",query:A({f:"json"},null==l?void 0:l.query)})),a.ssl&&(i&&(i=i.replace(/^http:/i,"https:")),o&&(o=o.replace(/^http:/i,"https:"))),i=p,o=p}else a={data:r},i=r.jsonUrl||null,o=s;const u=a.data;if(ie(u))return e.styleUrl=i||null,Pe(e,u,o,l);if(be(u))return e.sourceUrl?ne(e,u,o,!1,t,l):(e.sourceUrl=i||null,ne(e,u,o,!0,t,l));throw new Error("You must specify the URL or the JSON for a service or for a style.")})).apply(this,arguments)}function ie(e){return!!e.sources}function be(e){return!ie(e)}function Pe(e,t,r,s){return X.apply(this,arguments)}function X(){return(X=(0,f.Z)(function*(e,t,r,s){const l=r?(0,y.Yd)(r):(0,y.L)();e.styleBase=l,e.style=t,e.styleUrl&&B(e.styleUrl),t["sprite-format"]&&"webp"===t["sprite-format"].toLowerCase()&&(e.spriteFormat="webp");const i=[];if(t.sources&&t.sources.esri){const o=t.sources.esri;o.url?yield E(e,"esri",O(l,o.url),void 0,s):i.push(E(e,"esri",o,l,s))}for(const o of Object.keys(t.sources))"esri"!==o&&"vector"===t.sources[o].type&&(t.sources[o].url?i.push(E(e,o,O(l,t.sources[o].url),void 0,s)):t.sources[o].tiles&&i.push(E(e,o,t.sources[o],l,s)));yield Promise.all(i)})).apply(this,arguments)}function ne(e,t,r,s,l,i){return k.apply(this,arguments)}function k(){return(k=(0,f.Z)(function*(e,t,r,s,l,i){const o=r?(0,y.Qj)(r)+"/":(0,y.L)(),a=Ce(t,o),u=new we(l,(0,y.fl)(o,null==i?void 0:i.query),a);if(!s&&e.primarySourceName in e.sourceNameToSource){const p=e.sourceNameToSource[e.primarySourceName];if(!p.isCompatibleWith(u))return;null!=u.fullExtent&&(null!=p.fullExtent?p.fullExtent.union(u.fullExtent):p.fullExtent=u.fullExtent.clone()),p.tileInfo.lods.length<u.tileInfo.lods.length&&(p.tileInfo=u.tileInfo)}if(s?(e.sourceBase=o,e.source=t,e.validatedSource=a,e.primarySourceName=l,e.sourceUrl&&B(e.sourceUrl)):B(o),e.sourceNameToSource[l]=u,!e.style){if(null==t.defaultStyles)throw new Error;return"string"==typeof t.defaultStyles?E(e,"",O(o,t.defaultStyles,"root.json"),void 0,i):E(e,"",t.defaultStyles,O(o,"root.json"),i)}})).apply(this,arguments)}function Ce(e,t){if(e.hasOwnProperty("tileInfo"))return e;const r={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100}};let l=78271.51696400007,i=295828763.7957775;const o=[],a=e.hasOwnProperty("minzoom")?+e.minzoom:0,u=e.hasOwnProperty("maxzoom")?+e.maxzoom:22;for(let p=0;p<=u;p++)p>=a&&o.push({level:p,scale:i,resolution:l}),l/=2,i/=2;for(const p of e.tiles)B(O(t,p));return{capabilities:"TilesOnly",initialExtent:r,fullExtent:r,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:512,cols:512,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:o,spatialReference:{wkid:102100}}}}var Le=n(88755);const Me=/^https:\/\/([a-z\d-]+)(\.maps([^.]*))?\.arcgis\.com/i,Be={devext:{customBaseUrl:"mapsdevext.arcgis.com",portalHostname:"devext.arcgis.com"},qaext:{customBaseUrl:"mapsqa.arcgis.com",portalHostname:"qaext.arcgis.com"},www:{customBaseUrl:"maps.arcgis.com",portalHostname:"www.arcgis.com"}};var Ee=n(29840);const Q=1e-6;function Ne(e,t){if(e===t)return!0;if(!e&&null!=t||null!=e&&!t||!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;const r=e.origin,s=t.origin;if(Math.abs(r.x-s.x)>=Q||Math.abs(r.y-s.y)>=Q)return!1;let l,i;e.lods[0].scale>t.lods[0].scale?(l=e,i=t):(i=e,l=t);for(let o=l.lods[0].scale;o>=i.lods[i.lods.length-1].scale-Q;o/=2)if(Math.abs(o-i.lods[0].scale)<Q)return!0;return!1}function De(e,t){if(e===t)return e;if(!e&&null!=t)return t;if(null!=e&&!t)return e;const r=e.size[0],s=e.format,l=e.dpi,i={x:e.origin.x,y:e.origin.y},o=e.spatialReference.toJSON(),a=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],C=(e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1]).scale,x=[];let U=a.scale,K=a.resolution,T=0;for(;U>C;)x.push({level:T,resolution:K,scale:U}),T++,U/=2,K/=2;return new G.Z({size:[r,r],dpi:l,format:s||"pbf",origin:i,lods:x,spatialReference:o})}var Ze=n(78364),ae=n(31637);let h=class extends((0,M.h)((0,de.M)((0,m.Z)((0,P.Y)((0,ye.q)((0,he.I)((0,pe.N)((0,re.V)((0,W.R)(J.Z)))))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null,this.symbolCollisionBoxesVisible=!1,this.path=null}normalizeCtorArgs(e,t){return"string"==typeof e?A({url:e},t):e}destroy(){if(this.sourceNameToSource)for(const e of Object.values(this.sourceNameToSource))null==e||e.destroy();this._spriteSourceMap.clear()}prefetchResources(e){var t=this;return(0,f.Z)(function*(){yield t.loadSpriteSource(globalThis.devicePixelRatio||1,e)})()}load(e){var t=this;const r=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch(b.r9).then((0,f.Z)(function*(){if(!t.portalItem||!t.portalItem.id)return;const s=`${t.portalItem.itemUrl}/resources/styles/root.json`;(yield(0,R.default)(s,L(A({},e),{query:L(A({f:"json"},t.customParameters),{token:t.apiKey})}))).data&&t.read({url:s},(0,Le.h)(t.portalItem))})).catch(b.r9).then(()=>this._loadStyle(e));return this.addResolvingPromise(r),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e&&e.serviceUrl&&(0,y.mN)(e.serviceUrl);if(!t)return null;const r=this._getDefaultAttribution(t.path);return r?(0,y.fl)(r,L(A({},this.customParameters),{token:this.apiKey})):null}get capabilities(){const e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){var e;return(null==(e=this.primarySource)?void 0:e.fullExtent)||null}get parsedUrl(){return this.serviceUrl?(0,y.mN)(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){return this.tileInfo&&this.tileInfo.spatialReference||null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(e,t){e&&(0,y.oC)(e)&&(e=`https:${e}`);const r=(0,_.Wg)(function Oe(e){const t=null==e?void 0:e.match(Me);if(!t)return null;const[,r,s,l]=t;if(!r)return null;let i=null,o=null,a=null;const{devext:u,qaext:p,www:v}=Be;if(s)if(i=r,l)switch(l.toLowerCase()){case"devext":({customBaseUrl:o,portalHostname:a}=u);break;case"qa":({customBaseUrl:o,portalHostname:a}=p);break;default:return null}else({customBaseUrl:o,portalHostname:a}=v);else switch(r.toLowerCase()){case"devext":({customBaseUrl:o,portalHostname:a}=u);break;case"qaext":({customBaseUrl:o,portalHostname:a}=p);break;case"www":({customBaseUrl:o,portalHostname:a}=v);break;default:return null}return{customBaseUrl:o,isPortal:!1,portalHostname:a,urlKey:i}}(e));t.styleUrl=(0,Ee.e)(e,r)}get tileInfo(){var r;const e=[];for(const s in this.sourceNameToSource)e.push(this.sourceNameToSource[s]);let t=(null==(r=this.primarySource)?void 0:r.tileInfo)||new G.Z;if(e.length>1)for(let s=0;s<e.length;s++)Ne(t,e[s].tileInfo)&&(t=De(t,e[s].tileInfo));return t}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}loadSpriteSource(e=1,t){var r=this;return(0,f.Z)(function*(){var s;if(!r._spriteSourceMap.has(e)){const l=(0,ae.hc)("2d").maxTextureSize,i=null!=(s=r.currentStyleInfo)&&s.spriteUrl?(0,y.fl)(r.currentStyleInfo.spriteUrl,L(A({},r.customParameters),{token:r.apiKey})):null,o=new se(i,e,l,r.currentStyleInfo.spriteFormat);yield o.load(t),r._spriteSourceMap.set(e,o)}return r._spriteSourceMap.get(e)})()}setSpriteSource(e,t="png",r=1,s){var l=this;return(0,f.Z)(function*(){const i=(0,ae.hc)("2d").maxTextureSize,o=e?(0,y.fl)(e,L(A({},l.customParameters),{token:l.apiKey})):null;if(!o)return null;const a=new se(o,r,i,t);try{return yield a.load(s),l._spriteSourceMap.clear(),l._spriteSourceMap.set(r,a),l.currentStyleInfo.spriteUrl=o,l.emit("spriteSource-change",{spriteSource:a}),a}catch(u){(0,b.r9)(u)}return null})()}loadStyle(e,t){var r=this;return(0,f.Z)(function*(){var l;const s=e||r.style||r.url;return r._loadingTask&&"string"==typeof s&&r.url===s||(null==(l=r._loadingTask)||l.abort(),r._loadingTask=(0,b.vr)(i=>(r._spriteSourceMap.clear(),r._getSourceAndStyle(s,{signal:i})),t)),r._loadingTask.promise})()}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return(0,S.d9)(this.styleRepository.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const s=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||s})}getStyleLayer(e){return(0,S.d9)(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}getLayoutProperties(e){return(0,S.d9)(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}write(e,t){return(null==t?void 0:t.origin)&&!this.styleUrl?(t.messages&&t.messages.push(new N.Z("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}getTileUrl(e,t,r){return null}_getSourceAndStyle(e,t){var r=this;return(0,f.Z)(function*(){if(!e)throw new Error("invalid style!");const s=yield function Re(e,t){return H.apply(this,arguments)}(e,L(A({},t),{query:L(A({},r.customParameters),{token:r.apiKey})}));"webp"===s.spriteFormat&&((yield function fe(e){if(j)return j;const t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return j=new Promise(r=>{const s=new Image;s.onload=()=>{s.onload=s.onerror=null,r(s.width>0&&s.height>0)},s.onerror=()=>{s.onload=s.onerror=null,r(!1)},s.src="data:image/webp;base64,"+t[e]}),j}("lossy"))||(s.spriteFormat="png")),r._set("currentStyleInfo",A({},s)),"string"==typeof e?(r.url=e,r.style=null):(r.url=null,r.style=e),r._set("sourceNameToSource",s.sourceNameToSource),r._set("primarySource",s.sourceNameToSource[s.primarySourceName]),r._set("styleRepository",new Ze.Z(s.style)),r.read(s.layerDefinition,{origin:"service"}),r.emit("load-style")})()}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const s=t[2]&&t[2].toLowerCase();if(!s)return;const l=t[1]||"";for(const i of r)if(i.toLowerCase().includes(s))return(0,y.Fv)(`//static.arcgis.com/attribution/Vector${l}/${i}`)}_loadStyle(e){var t=this;return(0,f.Z)(function*(){var r,s;return null!=(s=null==(r=t._loadingTask)?void 0:r.promise)?s:t.loadStyle(null,e)})()}};(0,c._)([(0,d.Cb)({readOnly:!0})],h.prototype,"attributionDataUrl",null),(0,c._)([(0,d.Cb)({type:["show","hide"]})],h.prototype,"listMode",void 0),(0,c._)([(0,d.Cb)({json:{read:!0,write:!0}})],h.prototype,"blendMode",void 0),(0,c._)([(0,d.Cb)({readOnly:!0,json:{read:!1}})],h.prototype,"capabilities",null),(0,c._)([(0,d.Cb)({readOnly:!0})],h.prototype,"currentStyleInfo",void 0),(0,c._)([(0,d.Cb)({json:{read:!1},readOnly:!0,type:Z.Z})],h.prototype,"fullExtent",null),(0,c._)([(0,d.Cb)()],h.prototype,"style",void 0),(0,c._)([(0,d.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],h.prototype,"isReference",void 0),(0,c._)([(0,d.Cb)({type:["VectorTileLayer"]})],h.prototype,"operationalLayerType",void 0),(0,c._)([(0,d.Cb)({readOnly:!0})],h.prototype,"parsedUrl",null),(0,c._)([(0,d.Cb)({readOnly:!0})],h.prototype,"serviceUrl",null),(0,c._)([(0,d.Cb)({type:te.Z,readOnly:!0})],h.prototype,"spatialReference",null),(0,c._)([(0,d.Cb)({readOnly:!0})],h.prototype,"styleRepository",void 0),(0,c._)([(0,d.Cb)({readOnly:!0})],h.prototype,"sourceNameToSource",void 0),(0,c._)([(0,d.Cb)({readOnly:!0})],h.prototype,"primarySource",void 0),(0,c._)([(0,d.Cb)({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],h.prototype,"styleUrl",null),(0,c._)([(0,ee.c)(["portal-item","web-document"],"styleUrl")],h.prototype,"writeStyleUrl",null),(0,c._)([(0,d.Cb)({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:G.Z})],h.prototype,"tileInfo",null),(0,c._)([(0,d.Cb)({json:{read:!1},readOnly:!0,value:"vector-tile"})],h.prototype,"type",void 0),(0,c._)([(0,d.Cb)({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],h.prototype,"url",void 0),(0,c._)([(0,d.Cb)({readOnly:!0})],h.prototype,"version",void 0),(0,c._)([(0,D.r)("version",["version","currentVersion"])],h.prototype,"readVersion",null),(0,c._)([(0,d.Cb)({type:Boolean})],h.prototype,"symbolCollisionBoxesVisible",void 0),(0,c._)([(0,d.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],h.prototype,"path",void 0),h=(0,c._)([(0,$.j)("esri.layers.VectorTileLayer")],h);const je=h},88755:(I,g,n)=>{n.d(g,{Y:()=>N,h:()=>R});var f=n(21726),c=n(84687);function R(S){return{origin:"portal-item",url:(0,f.mN)(S.itemUrl),portal:S.portal||c.Z.getDefault(),portalItem:S,readResourcePaths:[]}}function N(S){return{origin:"portal-item",messages:[],writtenProperties:[],url:S.itemUrl?(0,f.mN)(S.itemUrl):null,portal:S.portal||c.Z.getDefault(),portalItem:S}}},86575:(I,g,n)=>{n.d(g,{B1:()=>f,DQ:()=>D,DT:()=>b,JJ:()=>c,Or:()=>$,_U:()=>R,k3:()=>Z,sX:()=>J});const f=Number.POSITIVE_INFINITY,c=Math.PI,R=2*c,S=128/c,b=c/180,q=1/Math.LN2;function D(m,P){return(m%=P)>=0?m:m+P}function $(m){return D(m*S,256)}function Z(m){return Math.log(m)*q}function J(m,P,M){return m*(1-M)+P*M}}}]);