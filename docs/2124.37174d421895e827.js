"use strict";(self.webpackChunkexample_app=self.webpackChunkexample_app||[]).push([[2124],{19702:(I,u,e)=>{e.d(u,{A:()=>R});var n=e(15861),l=e(17626),y=e(54024),v=e(10699),c=e(32917),o=e(77712),M=(e(85931),e(8314),e(90912),e(76898)),D=e(36947);const R=m=>{let a=class extends m{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(d){super.postscript(d),(0,D.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}_validateHeightModelInfo(){var d=this;return(0,n.Z)(function*(){const r=new AbortController,E=r.signal;d.handles.add((0,y.kB)(()=>r.abort())),yield(0,c.N1)(()=>{var U;return null==(U=d.view.defaultsFromMap)?void 0:U.heightModelInfoReady},E),(0,v.k_)(E);const O=(0,D.Wt)(d.layer,d.view.heightModelInfo,d.supportsHeightUnitConversion);if(O)throw O})()}canResume(){const d=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!d||!d.minScale||!d.maxScale||d.minScale>=d.maxScale)}getSuspendInfo(){const d=super.getSuspendInfo(),r=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return r&&r.minScale&&r.maxScale&&r.minScale<r.maxScale&&(d.outsideScaleRange=!0),d}};return(0,l._)([(0,o.Cb)()],a.prototype,"view",void 0),(0,l._)([(0,o.Cb)()],a.prototype,"slicePlaneEnabled",void 0),a=(0,l._)([(0,M.j)("esri.views.3d.layers.LayerView3D")],a),a}},62124:(I,u,e)=>{e.r(u),e.d(u,{default:()=>S});var n=e(15861),l=e(17626),y=e(46160),v=e(46882),c=e(62208),o=e(32917),_=e(77712),D=(e(85931),e(8314),e(90912),e(76898)),R=e(99683),m=e(58924),a=e(53753),d=e(719),r=e(17718),E=e(29739),O=e(69583),U=e(19702),A=e(32400),j=e(89765),B=e(36967),T=e(42743),W=e(45611);let P=class extends((0,U.A)(W.Z)){constructor(){super(...arguments),this.type="route-3d",this.loadedGraphics=new B.g,this._byObjectID=new Map,this.slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null}initialize(){this._set("processor",new A.D({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.setup()),this.updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),o.nn),this.addResolvingPromise((0,j.E)(this).then(t=>this.fullExtentInLocalViewSpatialReference=t)),this.handles.add((0,o.gx)(()=>{var t,s;return null==(s=null==(t=this.view)?void 0:t.basemapTerrain)?void 0:s.ready},()=>()=>this.notifyChange("updating"),{once:!0}))}destroy(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("processor",(0,c.SC)(this.processor))}get _routeItems(){return new v.Z({getCollections:()=>[this.layer.pointBarriers,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.stops,this.layer.directionLines,this.layer.directionPoints,(0,c.pC)(this.layer.routeInfo)?new y.Z([this.layer.routeInfo]):null]})}_routeItemsChanged(t){if(t.removed.length){this.loadedGraphics.removeMany(t.removed.map(s=>{const i=this._byObjectID.get(s);return this._byObjectID.delete(s),i}));for(const s of t.removed)this.handles.remove(s)}if(t.added.length){this.loadedGraphics.addMany(t.added.map(s=>{const i=s.toGraphic();return this._byObjectID.set(s,i),i}));for(const s of t.added)this.handles.add([(0,o.YP)(()=>s.geometry,(i,g)=>{this._updateGraphic(s,"geometry",i,g)}),(0,o.YP)(()=>s.symbol,(i,g)=>{this._updateGraphic(s,"symbol",i,g)})],s)}}get legendEnabled(){var t;return this.canResume()&&!(null!=(t=this.processor)&&t.frustumVisibilitySuspended)}getSuspendInfo(){var s,i,g,f;const t=super.getSuspendInfo();return t.outsideScaleRange=null!=(i=null==(s=this.processor)?void 0:s.scaleVisibilitySuspended)&&i,t.outsideOfView=null!=(f=null==(g=this.processor)?void 0:g.frustumVisibilitySuspended)&&f,t}fetchPopupFeatures(t,s){return(0,n.Z)(function*(){return(0,c.pC)(s)?s.clientGraphics:null})()}getHit(t){return this.processor.getHit(t)}whenGraphicBounds(t,s){return this.processor.whenGraphicBounds(t,s)}computeAttachmentOrigin(t,s){var i;return null==(i=this.processor)?void 0:i.computeAttachmentOrigin(t,s)}getSymbolLayerSize(t,s){return this.processor.getSymbolLayerSize(t,s)}queryGraphics(){var t=this;return(0,n.Z)(function*(){return new y.Z(t.loadedGraphics.toArray())})()}maskOccludee(t){return this.processor.maskOccludee(t)}highlight(t){if(function K(t){return t instanceof R.Z||t instanceof m.Z||t instanceof a.Z||t instanceof d.Z||t instanceof r.Z||t instanceof E.Z||t instanceof O.Z}(t)){const s=this._byObjectID.get(t);return this.processor.highlight(s)}return this.processor.highlight(t)}get updatePolicy(){var t;return(null==(t=this.processor)?void 0:t.graphicsCore.effectiveUpdatePolicy)||T.jq.SYNC}canResume(){var t;return super.canResume()&&!(null!=(t=this.processor)&&t.scaleVisibilitySuspended)}isUpdating(){var t,s,i;return!((null==(t=this.processor)||!t.updating)&&(null==(i=null==(s=this.view)?void 0:s.basemapTerrain)?void 0:i.ready))}get performanceInfo(){var t,s,i;return{displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:-1,totalNumberOfFeatures:-1,nodes:0,core:null,updating:this.updating,elevationUpdating:null!=(s=null==(t=this.processor)?void 0:t.elevationAlignment.updating)&&s,visibilityFrustum:!(null!=(i=this.processor)&&i.frustumVisibilitySuspended)}}_updateGraphic(t,s,i,g){var L;const f=this._byObjectID.get(t);f[s]=i,C.graphic=f,C.property=s,C.oldValue=g,C.newValue=i,null==(L=this.processor)||L.graphicsCore.graphicUpdateHandler(C)}};(0,l._)([(0,_.Cb)()],P.prototype,"_routeItems",null),(0,l._)([(0,_.Cb)()],P.prototype,"loadedGraphics",void 0),(0,l._)([(0,_.Cb)({readOnly:!0})],P.prototype,"legendEnabled",null),(0,l._)([(0,_.Cb)()],P.prototype,"layer",void 0),(0,l._)([(0,_.Cb)({readOnly:!0})],P.prototype,"processor",void 0),(0,l._)([(0,_.Cb)({type:Boolean})],P.prototype,"slicePlaneEnabled",void 0),P=(0,l._)([(0,D.j)("esri.views.3d.layers.RouteLayerView3D")],P);const C={graphic:null,property:null,oldValue:null,newValue:null},S=P},89765:(I,u,e)=>{e.d(u,{E:()=>v});var n=e(62208),l=e(46367),y=e(35082);function v(c){const o=c.view.spatialReference,_=c.layer.fullExtent,p=(0,n.pC)(_)&&_.spatialReference;if((0,n.Wi)(_)||!p)return Promise.resolve(null);if(p.equals(o))return Promise.resolve(_.clone());const h=(0,l.iV)(_,o);return(0,n.pC)(h)?Promise.resolve(h):c.view.state.isLocal?(0,y.projectGeometry)(_,o,c.layer.portalItem).then(M=>!c.destroyed&&M?M:void 0).catch(()=>null):Promise.resolve(null)}},36967:(I,u,e)=>{e.d(u,{g:()=>v});var n=e(61885),l=e(73234),y=e(28862);class v extends n.Z{constructor(){super(...arguments),this._set=new Set}clear(){if(this._set.size>0){const o=this.toArray();this._set.clear(),this.emit("after-changes",{type:l.y.REMOVE}),this.emit("change",{added:[],removed:o})}}get length(){return this._set.size}addMany(o){if(0!==o.length){for(const _ of o)this._set.add(_);this.emit("after-changes",{type:l.y.ADD}),this.emit("change",{added:o,removed:[]})}}remove(o){this._set.delete(o)&&(this.emit("after-changes",{type:l.y.REMOVE}),this.emit("change",{added:[],removed:[o]}))}removeMany(o){const _=[];for(const p of o)this._set.delete(p)&&_.push(p);_.length>0&&(this.emit("after-changes",{type:l.y.REMOVE}),this.emit("change",{added:[],removed:_}))}toArray(){return[...this._set]}find(o){let _;return(0,y.f)(this._set,p=>!!o(p)&&(_=p,!0)),_}forEach(o){this._set.forEach(_=>o(_))}}},45611:(I,u,e)=>{e.d(u,{Z:()=>d});var n=e(17626),l=e(14517),y=e(61885),v=e(80542),c=e(61996),o=e(63290),_=e(62208),p=e(60330),h=e(77712),m=(e(85931),e(8314),e(90912),e(76898));let a=class extends((0,v.p)((0,c.IG)((0,p.v)(y.Z.EventedMixin(l.Z))))){constructor(r){super(r),this.layer=null,this.parent=null}initialize(){this.when().catch(r=>{if("layerview:create-error"!==r.name){const E=this.layer&&this.layer.id||"no id",O=this.layer&&this.layer.title||"no title";o.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${O}', id: '${E}')`,r)}})}get fullOpacity(){return(0,_.Pt)(this.get("layer.opacity"),1)*(0,_.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var r;return!this.suspended&&!0===(null==(r=this.layer)?void 0:r.legendEnabled)}get updating(){var r;return!!(null!=(r=this.updatingHandles)&&r.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var r;return!0===(null==(r=this.layer)?void 0:r.visible)}set visible(r){void 0!==r?this._override("visible",r):this._clearOverride("visible")}canResume(){var r,E,O;return this.visible&&(null==(r=this.layer)?void 0:r.loaded)&&!(null!=(E=this.parent)&&E.suspended)&&(null==(O=this.view)?void 0:O.ready)||!1}getSuspendInfo(){const r=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(r.viewNotReady=!0),this.layer&&this.layer.loaded||(r.layerNotLoaded=!0),this.visible||(r.layerInvisible=!0),r}isUpdating(){return!1}};(0,n._)([(0,h.Cb)()],a.prototype,"fullOpacity",null),(0,n._)([(0,h.Cb)()],a.prototype,"layer",void 0),(0,n._)([(0,h.Cb)()],a.prototype,"parent",void 0),(0,n._)([(0,h.Cb)({readOnly:!0})],a.prototype,"suspended",null),(0,n._)([(0,h.Cb)({readOnly:!0})],a.prototype,"suspendInfo",null),(0,n._)([(0,h.Cb)({readOnly:!0})],a.prototype,"legendEnabled",null),(0,n._)([(0,h.Cb)({type:Boolean,readOnly:!0})],a.prototype,"updating",null),(0,n._)([(0,h.Cb)({readOnly:!0})],a.prototype,"updatingProgress",null),(0,n._)([(0,h.Cb)()],a.prototype,"visible",null),(0,n._)([(0,h.Cb)()],a.prototype,"view",void 0),a=(0,n._)([(0,m.j)("esri.views.layers.LayerView")],a);const d=a}}]);