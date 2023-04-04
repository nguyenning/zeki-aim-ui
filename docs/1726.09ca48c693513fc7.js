"use strict";(self.webpackChunkexample_app=self.webpackChunkexample_app||[]).push([[1726],{22264:(I,m,e)=>{function i(s,a){return a?"xoffset"in a&&a.xoffset?Math.max(s,Math.abs(a.xoffset)):"yoffset"in a&&a.yoffset?Math.max(s,Math.abs(a.yoffset||0)):s:s}function h(s,a){return"number"==typeof s?s:s&&s.stops&&s.stops.length?function c(s){let a=0,y=0;for(let r=0;r<s.length;r++){const l=s[r].size;"number"==typeof l&&(a+=l,y++)}return a/y}(s.stops):a}function p(s){const a=s&&s.renderer,y="touch"===(s&&s.event&&s.event.pointerType)?9:6;if(!a)return y;const r="visualVariables"in a?function E(s,a){if(!a)return s;const y=a.filter(o=>"size"===o.type).map(o=>{const{maxSize:u,minSize:n}=o;return(h(u,s)+h(n,s))/2});let r=0;const l=y.length;if(0===l)return s;for(let o=0;o<l;o++)r+=y[o];const _=Math.floor(r/l);return Math.max(_,s)}(y,a.visualVariables):y;if("simple"===a.type)return i(r,a.symbol);if("unique-value"===a.type){let l=r;return a.uniqueValueInfos.forEach(_=>{l=i(l,_.symbol)}),l}if("class-breaks"===a.type){let l=r;return a.classBreakInfos.forEach(_=>{l=i(l,_.symbol)}),l}return r}e.d(m,{k:()=>p})},19702:(I,m,e)=>{e.d(m,{A:()=>o});var i=e(15861),c=e(17626),h=e(54024),E=e(10699),p=e(32917),s=e(77712),l=(e(85931),e(8314),e(90912),e(76898)),_=e(36947);const o=u=>{let n=class extends u{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(d){super.postscript(d),(0,_.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}_validateHeightModelInfo(){var d=this;return(0,i.Z)(function*(){const t=new AbortController,v=t.signal;d.handles.add((0,h.kB)(()=>t.abort())),yield(0,p.N1)(()=>{var f;return null==(f=d.view.defaultsFromMap)?void 0:f.heightModelInfoReady},v),(0,E.k_)(v);const O=(0,_.Wt)(d.layer,d.view.heightModelInfo,d.supportsHeightUnitConversion);if(O)throw O})()}canResume(){const d=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!d||!d.minScale||!d.maxScale||d.minScale>=d.maxScale)}getSuspendInfo(){const d=super.getSuspendInfo(),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(d.outsideScaleRange=!0),d}};return(0,c._)([(0,s.Cb)()],n.prototype,"view",void 0),(0,c._)([(0,s.Cb)()],n.prototype,"slicePlaneEnabled",void 0),n=(0,c._)([(0,l.j)("esri.views.3d.layers.LayerView3D")],n),n}},8562:(I,m,e)=>{e.r(m),e.d(m,{default:()=>R});var i=e(15861),c=e(17626),h=e(26584),E=e(62208),p=e(77712),r=(e(85931),e(8314),e(90912),e(76898)),l=e(55915),_=e(19702),o=e(50916),u=e(45611),n=e(94421),d=e(10699),t=e(22264);const v=M=>{let P=class extends M{fetchPopupFeatures(C,j){var T=this;return(0,i.Z)(function*(){const{layer:U}=T;if(!C)throw new h.Z("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:U});if("tile"!==U.type)throw new h.Z("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:U.type});const W=T.get("view.scale"),x=U.allSublayers.toArray().filter(g=>g.popupTemplate&&g.popupEnabled&&g.visible&&(0===g.minScale||W<=g.minScale)&&(0===g.maxScale||W>=g.maxScale));return(0,d.as)(x.map(function(){var g=(0,i.Z)(function*(D){const L=D.createQuery(),A=(0,E.pC)(j)?j.event:null,B=(0,t.k)({renderer:D.renderer,event:A});return L.geometry=T.createFetchPopupFeaturesQueryGeometry(C,B),L.outFields=yield D.popupTemplate.getRequiredFields(),(yield D.queryFeatures(L)).features});return function(D){return g.apply(this,arguments)}}())).then(g=>[].concat(...g.map(D=>D.value).filter(Boolean)))})()}};return(0,c._)([(0,p.Cb)()],P.prototype,"layer",void 0),P=(0,c._)([(0,r.j)("esri.layers.mixins.TileLayerView")],P),P};var O=e(94672);let f=class extends((0,n.Z)((0,o.r)(v((0,_.A)(u.Z))))){constructor(){super(...arguments),this.type="tile-3d"}get imageFormatIsOpaque(){return"jpg"===this.layer.tileInfo.format}get hasMixedImageFormats(){return"mixed"===this.layer.tileInfo.format}get dataLevelRange(){if(this.tileInfo){const M=this.tileInfo.lods;return this.levelRangeFromScaleRange(M[0].scale,M[M.length-1].scale)}return{minLevel:0,maxLevel:0}}initialize(){if("web-tile"===this.layer.type){const M=this.layer.get("fullExtent.spatialReference"),P=this.layer.get("tileInfo.spatialReference");if((0,E.Wi)(M)||(0,E.Wi)(P)||!(0,l.Up)(M,P)){const C="defaults"===this.layer.originOf("fullExtent")||(0,E.Wi)(this.layer.fullExtent)?"SceneView requires fullExtent to be specified by the user on WebTileLayer":"SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer";this.addResolvingPromise(Promise.reject(new h.Z("layerview:incompatible-fullextent",C)))}}this._addTilingSchemeMatchPromise()}createFetchPopupFeaturesQueryGeometry(M,P){return(0,O.K)(M,P,this.view)}doRefresh(){var M=this;return(0,i.Z)(function*(){M.suspended||M.emit("data-changed")})()}};(0,c._)([(0,p.Cb)({readOnly:!0})],f.prototype,"imageFormatIsOpaque",null),(0,c._)([(0,p.Cb)({readOnly:!0})],f.prototype,"hasMixedImageFormats",null),(0,c._)([(0,p.Cb)()],f.prototype,"layer",void 0),(0,c._)([(0,p.Cb)({readOnly:!0,aliasOf:"layer.tileInfo"})],f.prototype,"tileInfo",void 0),(0,c._)([(0,p.Cb)({readOnly:!0})],f.prototype,"dataLevelRange",null),f=(0,c._)([(0,r.j)("esri.views.3d.layers.TileLayerView3D")],f);const R=f},45611:(I,m,e)=>{e.d(m,{Z:()=>d});var i=e(17626),c=e(14517),h=e(61885),E=e(80542),p=e(61996),s=e(63290),a=e(62208),y=e(60330),r=e(77712),u=(e(85931),e(8314),e(90912),e(76898));let n=class extends((0,E.p)((0,p.IG)((0,y.v)(h.Z.EventedMixin(c.Z))))){constructor(t){super(t),this.layer=null,this.parent=null}initialize(){this.when().catch(t=>{if("layerview:create-error"!==t.name){const v=this.layer&&this.layer.id||"no id",O=this.layer&&this.layer.title||"no title";s.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${O}', id: '${v}')`,t)}})}get fullOpacity(){return(0,a.Pt)(this.get("layer.opacity"),1)*(0,a.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var t;return!this.suspended&&!0===(null==(t=this.layer)?void 0:t.legendEnabled)}get updating(){var t;return!!(null!=(t=this.updatingHandles)&&t.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var t;return!0===(null==(t=this.layer)?void 0:t.visible)}set visible(t){void 0!==t?this._override("visible",t):this._clearOverride("visible")}canResume(){var t,v,O;return this.visible&&(null==(t=this.layer)?void 0:t.loaded)&&!(null!=(v=this.parent)&&v.suspended)&&(null==(O=this.view)?void 0:O.ready)||!1}getSuspendInfo(){const t=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(t.viewNotReady=!0),this.layer&&this.layer.loaded||(t.layerNotLoaded=!0),this.visible||(t.layerInvisible=!0),t}isUpdating(){return!1}};(0,i._)([(0,r.Cb)()],n.prototype,"fullOpacity",null),(0,i._)([(0,r.Cb)()],n.prototype,"layer",void 0),(0,i._)([(0,r.Cb)()],n.prototype,"parent",void 0),(0,i._)([(0,r.Cb)({readOnly:!0})],n.prototype,"suspended",null),(0,i._)([(0,r.Cb)({readOnly:!0})],n.prototype,"suspendInfo",null),(0,i._)([(0,r.Cb)({readOnly:!0})],n.prototype,"legendEnabled",null),(0,i._)([(0,r.Cb)({type:Boolean,readOnly:!0})],n.prototype,"updating",null),(0,i._)([(0,r.Cb)({readOnly:!0})],n.prototype,"updatingProgress",null),(0,i._)([(0,r.Cb)()],n.prototype,"visible",null),(0,i._)([(0,r.Cb)()],n.prototype,"view",void 0),n=(0,i._)([(0,u.j)("esri.views.layers.LayerView")],n);const d=n},94421:(I,m,e)=>{e.d(m,{Z:()=>l});var i=e(17626),c=e(63290),h=e(10699),E=e(32917),p=e(77712),r=(e(85931),e(8314),e(90912),e(76898));const l=_=>{let o=class extends _{initialize(){this.handles.add((0,E.on)(()=>this.layer,"refresh",u=>{this.doRefresh(u.dataChanged).catch(n=>{(0,h.D_)(n)||c.Z.getLogger(this.declaredClass).error(n)})}),"RefreshableLayerView")}};return(0,i._)([(0,p.Cb)()],o.prototype,"layer",void 0),o=(0,i._)([(0,r.j)("esri.layers.mixins.RefreshableLayerView")],o),o}},94672:(I,m,e)=>{e.d(m,{D:()=>a,K:()=>s}),e(29132);var c=e(62208),h=e(16730),E=e(22264),p=e(2004);function s(r,l,_,o=new p.Z){let u;if("2d"===_.type)u=l*_.resolution;else if("3d"===_.type){const f=_.overlayPixelSizeInMapUnits(r),R=_.basemapSpatialReference;u=(0,c.pC)(R)&&!R.equals(_.spatialReference)?(0,h.c9)(R)/(0,h.c9)(_.spatialReference):l*f}const n=r.x-u,d=r.y-u,t=r.x+u,v=r.y+u,{spatialReference:O}=_;return o.xmin=Math.min(n,t),o.ymin=Math.min(d,v),o.xmax=Math.max(n,t),o.ymax=Math.max(d,v),o.spatialReference=O,o}function a(r,l,_){const o=_.toMap(r);return!(0,c.Wi)(o)&&s(o,(0,E.k)(),_,y).intersects(l)}const y=new p.Z}}]);