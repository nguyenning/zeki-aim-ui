"use strict";var de=Object.defineProperty,ce=Object.defineProperties,pe=Object.getOwnPropertyDescriptors,Rt=Object.getOwnPropertySymbols,ue=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable,_t=(R,E,n)=>E in R?de(R,E,{enumerable:!0,configurable:!0,writable:!0,value:n}):R[E]=n,B=(R,E)=>{for(var n in E||(E={}))ue.call(E,n)&&_t(R,n,E[n]);if(Rt)for(var n of Rt(E))he.call(E,n)&&_t(R,n,E[n]);return R},J=(R,E)=>ce(R,pe(E));(self.webpackChunkexample_app=self.webpackChunkexample_app||[]).push([[9902],{19902:(R,E,n)=>{n.r(E),n.d(E,{default:()=>le});var y=n(15861),o=n(17626),C=n(14517),_=n(46160),p=n(62208),S=n(32917),a=n(77712),st=(n(85931),n(8314),n(90912)),b=n(76898),vt=n(1437),x=n(54024),H=n(26242),ot=n(91558);n(29132);var at=n(79608),ft=n(23719),rt=n(66656),Q=n(2004),z=n(49672);let T=class extends at.j{constructor(t){super(t),this.type="length",this.startPoint=null,this.endPoint=null,this.axis="horizontal",this.offset=0,this.heading=0}get extent(){if((0,p.Wi)(this.startPoint))return null;const t=Q.Z.fromPoint(this.startPoint);return(0,p.pC)(this.endPoint)&&t.union(Q.Z.fromPoint(this.endPoint)),t}};(0,o._)([(0,a.Cb)({type:["length"]})],T.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:z.Z})],T.prototype,"startPoint",void 0),(0,o._)([(0,a.Cb)({type:z.Z})],T.prototype,"endPoint",void 0),(0,o._)([(0,a.Cb)({type:["horizontal","vertical","direct"],nonNullable:!0})],T.prototype,"axis",void 0),(0,o._)([(0,a.Cb)({type:Number,nonNullable:!0})],T.prototype,"offset",void 0),(0,o._)([(0,a.Cb)({type:Number,nonNullable:!0}),(0,rt.p)(t=>ft.BV.normalize((0,st.q9)(t),0,!0))],T.prototype,"heading",void 0),(0,o._)([(0,a.Cb)({readOnly:!0})],T.prototype,"extent",null),T=(0,o._)([(0,b.j)("esri.analysis.LengthDimension")],T);const Ct=T;var k=n(80542),lt=n(72392),Z=n(10699),F=n(84786),St=n(23841);const Pt={main:new ot.Z([255,127,0])};class Dt{constructor(){this.color=Pt.main,this.opacity=.5,this.radius=5}}class dt{constructor(){this.fontSize=14}get height(){return 1.5*(0,St.F2)(this.fontSize)}get offset(){return this.height+20}}const l=new class r{constructor(){this.pointManipulators=new Dt,this.labels=new dt}};var c=n(19142),v=n(96813),m=n(8859),u=n(50017),P=n(75079),g=n(466),I=n(26777),V=n(79682),O=n(83308),U=n(14380),xt=n(44725),Lt=n(94033),ct=n(28093),Vt=n(42930),Ht=n(97126),wt=n(60507),It=n(75897),Wt=n(70211);let j=class extends k.r{constructor(t){super(t),this.availability=0,this._ids=new Set,this.tmpP=(0,ct.c)()}destroy(){this.workerHandle.destroy(),this.workerHandle=null}initialize(){this.workerHandle=new zt(this.schedule,{fetchAllEdgeLocations:(t,e)=>this._fetchAllEdgeLocations(t,e)})}fetchCandidates(t,e){var i=this;return(0,y.Z)(function*(){const s=t.coordinateHelper.toXYZ(t.point);i.view.renderCoordsHelper.toRenderCoords(s,t.coordinateHelper.spatialReference,s);const d="number"==typeof t.distance?t.distance:t.distance.pixelSize,h=yield i.workerHandle.invoke({bounds:(0,Ht.f)(s[0],s[1],s[2],d),types:t.types},e),D=t.coordinateHelper;return h.candidates.sort((M,W)=>M.distance-W.distance),h.candidates.map(M=>i._convertCandidate(D,M))})()}add(t,e){var i=this;return(0,y.Z)(function*(){i._ids.add(t.id),yield i.workerHandle.invokeMethod("add",t,e)})()}remove(t,e){var i=this;return(0,y.Z)(function*(){i._ids.delete(t.id),yield i.workerHandle.invokeMethod("remove",t,e)})()}_convertCandidate(t,e){switch(e.type){case"edge":return new It.L({coordinateHelper:t,objectId:e.objectId,targetPoint:this._convertRenderCoordinate(t,e.target),edgeStart:this._convertRenderCoordinate(t,e.start),edgeEnd:this._convertRenderCoordinate(t,e.end),elevationInfo:wt.jG});case"vertex":return new Wt.x({coordinateHelper:t,objectId:e.objectId,targetPoint:this._convertRenderCoordinate(t,e.target),elevationInfo:wt.jG})}}_convertRenderCoordinate(t,e){return this.view.renderCoordsHelper.fromRenderCoords(e,this.tmpP,t.spatialReference),t.fromXYZ(this.tmpP)}_fetchAllEdgeLocations(t,e){var i=this;return(0,y.Z)(function*(){const s=[],d=[];for(const{id:h,uid:D}of t.components)i._ids.has(h)&&s.push((0,y.Z)(function*(){const M=yield i.fetchEdgeLocations(h,e.signal);return d.push(M.locations.buffer),{id:h,uid:D,objectIds:M.objectIds,locations:M.locations.buffer,origin:M.origin,type:M.type}})());return{result:{components:(yield Promise.all(s)).filter(({id:h})=>i._ids.has(h))},transferList:d}})()}};(0,o._)([(0,a.Cb)({constructOnly:!0})],j.prototype,"view",void 0),(0,o._)([(0,a.Cb)({constructOnly:!0})],j.prototype,"fetchEdgeLocations",void 0),(0,o._)([(0,a.Cb)({constructOnly:!0})],j.prototype,"schedule",void 0),(0,o._)([(0,a.Cb)({readOnly:!0})],j.prototype,"availability",void 0),j=(0,o._)([(0,b.j)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],j);class zt extends Vt.q{constructor(e,i){super("SceneLayerSnappingSourceWorker","fetchCandidates",{},e,{strategy:"dedicated",client:i})}}let G=class extends k.r{constructor(t){super(t),this.availability=1,this.abortController=new AbortController}get updating(){return this.updatingHandles.updating}get layer(){return this.layerSource.layer}destroy(){this.abortController=(0,p.IM)(this.abortController)}initialize(){var t=this;const e=this.view.resourceController;var i;this.edgeWorker=new Lt.Z(i=>e.schedule(i)),this.workerHandle=new j({view:this.view,schedule:i=>e.schedule(i),fetchEdgeLocations:(i=(0,y.Z)(function*(s,d){if((0,p.Wi)(t.tracker))throw new Error("tracker-not-initialized");return t.tracker.fetchEdgeLocations(s,t.edgeWorker,d)}),function(d,h){return i.apply(this,arguments)})}),this.updatingHandles.addPromise(this._setupLayerView()),this.handles.add([(0,x.ed)(this.workerHandle),(0,x.ed)(this.edgeWorker)])}fetchCandidates(t,e){var i=this;return(0,y.Z)(function*(){return i.workerHandle.fetchCandidates(t,e)})()}refresh(){}_setupLayerView(){var t=this;return(0,y.Z)(function*(){const e=yield t.view.whenLayerView(t.layer);if("scene-layer-graphics-3d"===e.type)return;const i={add:(s,d)=>t.updatingHandles.addPromise(t.workerHandle.add({id:s,bounds:d},t.abortController.signal)),remove:s=>t.updatingHandles.addPromise(t.workerHandle.remove({id:s},t.abortController.signal))};t.tracker=e.trackSnappingSources(i),t.handles.add(t.tracker)})()}};(0,o._)([(0,a.Cb)({constructOnly:!0})],G.prototype,"layerSource",void 0),(0,o._)([(0,a.Cb)({constructOnly:!0})],G.prototype,"view",void 0),(0,o._)([(0,a.Cb)({readOnly:!0})],G.prototype,"updating",null),(0,o._)([(0,a.Cb)({readOnly:!0})],G.prototype,"availability",void 0),G=(0,o._)([(0,b.j)("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")],G);var Ut=n(25858);let N=class extends C.Z{constructor(t){super(t),this.options=null,this._snappingSources=new _.Z}initialize(){this.own([this.view.on("layerview-create",({layerView:t})=>this._createSource(t)),this.view.on("layerview-destroy",({layerView:t})=>this._removeSource(t))]);for(const t of this.view.allLayerViews.items)this._createSource(t)}destroy(){this.options=null,this._snappingSources.drain(t=>t.destroy())}get updating(){return this._snappingSources.some(t=>t.updating)}get _types(){return O.r.EDGE|O.r.VERTEX}fetchCandidates(t,e,i){var s=this;return(0,y.Z)(function*(){const{view:d,options:h}=s,{coordinateHelper:D,elevationInfo:M}=e,W=(0,p.pC)(h)?h.distance:1,nt=(0,Ut.$r)(t,D,M,d,H.WM.get()),X=W*d.state.camera.computeScreenPixelSizeAt(nt),A=s._types,it=s._snappingSources.items.map(bt=>bt.fetchCandidates({point:t,coordinateHelper:D,distance:X,types:A},i)),ht=(yield Promise.all(it)).flat();return(0,xt.lQ)(t,ht),ht})()}_createSource(t){if("scene-layer-3d"!==t.type)return;const e=new G({layerSource:new U.Z({layer:t.layer}),view:this.view});this._snappingSources.push(e)}_removeSource(t){const e=this._snappingSources.findIndex(i=>i.layerSource.layer===t.layer);-1!==e&&this._snappingSources.removeAt(e).destroy()}};(0,o._)([(0,a.Cb)({constructOnly:!0})],N.prototype,"view",void 0),(0,o._)([(0,a.Cb)()],N.prototype,"updating",null),(0,o._)([(0,a.Cb)()],N.prototype,"options",void 0),(0,o._)([(0,a.Cb)()],N.prototype,"_snappingSources",void 0),N=(0,o._)([(0,b.j)("esri.views.interactive.snapping.SceneSnappingEngine")],N);var At=n(45390);const pt=new Map;function Gt(t){return new At.N({view:t,snappingEnginesFactory:(e,i)=>[new N({view:t,options:i})]})}var Nt=n(9773),Bt=n(94009),Ft=n(53912);let K=class extends k.r{constructor(t){super(t),this.stagedDimension=null,this._dimensionManipulators=new Map,this._dimensionHandles=new lt.Z,this._snappingPipeline=new Bt.n,this._snappingManagerResult=function Zt(t){pt.has(t)||pt.set(t,{referenceCount:0,snappingManager:Gt(t)});const e=pt.get(t);e.referenceCount++;const i=(0,x.kB)(()=>function jt(t,e){e.referenceCount--,e.referenceCount>0||(0,V.Y)(()=>{0===e.referenceCount&&(e.snappingManager.destroy(),pt.delete(t))})}(t,e));return B({snappingManager:e.snappingManager},i)}(t.view),this.own(this._snappingManagerResult)}initialize(){this._snappingOperation=new Ft.y({view:this.view}),this.own([this._dimensionHandles,(0,S.YP)(()=>this._snappingOperation.stagedPoint,t=>{(0,p.pC)(this.stagedDimension)&&(this.stagedDimension.endPoint=(0,p.yw)(t,e=>(0,F.WG)(e,new z.Z)))},S.Z_)])}destroy(){this._snappingOperation=(0,p.SC)(this._snappingOperation)}get updating(){return this.updatingHandles.updating||this._snappingManager.updating}get _snappingManager(){return this._snappingManagerResult.snappingManager}addDimension(t,e){if(this._dimensionManipulators.has(t))return;const i=this._createPointManipulator(t,{isStart:!0}),s=this._createPointManipulator(t,{isStart:!1}),d={startManipulator:i,endManipulator:s};this._setupDimensionToManipulatorsSync(t,d),this._dimensionManipulators.set(t,d),e.add(i),e.add(s)}removeDimension(t,e){const i=this._dimensionManipulators.get(t);if((0,p.Wi)(i))return;this._dimensionHandles.remove(t);const{startManipulator:s,endManipulator:d}=i;this._dimensionManipulators.delete(t),e.remove(s),e.remove(d)}getManipulatorsForDimension(t){return this._dimensionManipulators.get(t)}onDeactivate(){this._snappingManager.doneSnapping()}onUnstagedClick({mapPoint:t,pointerType:e}){const i=this._snappingContext(e),s=(0,F.WG)(this._snappingManager.update(t,i),new z.Z),d=new Ct({startPoint:s,endPoint:null});return this.stagedDimension=d,this._snappingManager.doneSnapping(),d}onStagedClick({mapPoint:t,pointerType:e}){if((0,p.Wi)(this.stagedDimension))return;const i=this._snappingContext(e),s=(0,F.WG)(this._snappingManager.update(t,i),new z.Z);this.stagedDimension.endPoint=s,this.stagedDimension=null,this._snappingManager.doneSnapping()}onPointerMove({mapPoint:t,pointerType:e}){const i=this._snappingContext(e);this.updatingHandles.addPromise((0,Z.R8)(this._snappingOperation.snap(t,this._snappingManager,i)))}_setupDimensionToManipulatorsSync(t,e){const{startManipulator:i,endManipulator:s}=e;this._dimensionHandles.add([(0,S.YP)(()=>({startPoint:t.startPoint,endPoint:t.endPoint,stagedDimension:this.stagedDimension}),({startPoint:d,endPoint:h,stagedDimension:D})=>{(0,p.pC)(d)?(i.available=(0,p.Wi)(D)||D===t,i.location=d):i.available=!1,(0,p.pC)(h)?(s.available=(0,p.Wi)(D),s.location=h):s.available=!1},S.tX)],t)}_createPointManipulator(t,e){const{isStart:i}=e,s=i?"startPoint":"endPoint",d=(0,c.aD)(this.view,ot.Z.toUnitRGB(l.pointManipulators.color),l.pointManipulators.opacity);d.available=!1,d.radius=l.pointManipulators.radius;const h=(0,P.Xd)(d,(D,M,W,nt)=>{const X=(0,m.J4)(D);M.next(X).next((0,m.gv)(this.view)).next(this._snappingPipeline.createSnapDragEventPipelineStep({snappingContext:this._snappingContext(nt),snappingManager:this._snappingManager,cancel:W,updatingHandles:this.updatingHandles}),this._snappingPipeline.next).next(A=>{const it=(0,F.WG)(A.mapEnd,new z.Z);t[s]=it}),W.next(X).next((0,P.di)(t,[s]))});return this._dimensionHandles.add(h,t),d}_snappingContext(t){return new Nt.N({elevationInfo:{mode:"absolute-height",offset:0},pointer:t,editGeometryOperations:new I.c(new g.XE("point",(0,u.Y6)(!0,!1,this.view.spatialReference))),visualizer:new v._})}};(0,o._)([(0,a.Cb)({constructOnly:!0,nonNullable:!0})],K.prototype,"view",void 0),(0,o._)([(0,a.Cb)({readOnly:!0})],K.prototype,"updating",null),(0,o._)([(0,a.Cb)()],K.prototype,"stagedDimension",void 0),K=(0,o._)([(0,b.j)("esri.views.3d.analysis.Dimensioning.LengthDimensionSubTool")],K);var Y,t,Kt=n(62483),Yt=n(67857),$t=n(22712),Xt=n(41900);(t=Y||(Y={})).Ready="ready",t.Creating="creating",t.Created="created";let w=class extends $t.f{constructor(t){super(t),this.preferManipulatorCursor=!0,this.analysisViewData=null}initialize(){this._intersector=(0,Kt.Z8)(this.view.state.viewingMode),this._intersector.options.store=Yt.eC.MIN,this._lengthDimensionSubTool=new K({view:this.view}),this.own((0,x.ed)(this._lengthDimensionSubTool));for(const t of this.analysis.dimensions.items)this._addDimension(t);this.own(this.analysis.dimensions.on("change",t=>{for(const e of t.added)this._addDimension(e);for(const e of t.removed)this._removeDimension(e)})),this.own((0,S.YP)(()=>this.state,t=>{t===Y.Created&&this.finishToolCreation()},S.tX))}get state(){return this.analysis.dimensions.some(t=>"length"===t.type)?(0,p.pC)(this._activeSubTool)?Y.Creating:Y.Created:Y.Ready}get updating(){return this._lengthDimensionSubTool.updating}get cursor(){return this.active?"crosshair":null}getManipulatorsForDimension(t){return this._lengthDimensionSubTool.getManipulatorsForDimension(t)}onInputEvent(t){switch(t.type){case"immediate-click":this._clickHandler(t);break;case"immediate-double-click":this._doubleClickHandler(t);break;case"pointer-move":this._pointerMoveHandler(t)}}onActivate(){this._activeSubTool=this._lengthDimensionSubTool}onDeactivate(){(0,p.pC)(this._activeSubTool)&&(this._activeSubTool.onDeactivate(),(0,p.pC)(this._activeSubTool.stagedDimension)&&(this.analysis.dimensions.remove(this._activeSubTool.stagedDimension),this._activeSubTool.stagedDimension=null),this._activeSubTool=null)}_clickHandler(t){if((0,p.Wi)(this._activeSubTool))return;const e=this._intersectScreen(t);if(!(0,p.Wi)(e)){if((0,p.Wi)(this._activeSubTool.stagedDimension)){const i=this._activeSubTool.onUnstagedClick({mapPoint:e,pointerType:t.pointerType});this.analysis.dimensions.add(i)}else this._activeSubTool.onStagedClick({mapPoint:e,pointerType:t.pointerType});t.stopPropagation()}}_doubleClickHandler(t){this.view.activeTool=null,t.stopPropagation()}_pointerMoveHandler(t){if((0,p.Wi)(this._activeSubTool)||this.hasFocusedManipulators)return;const e=this._intersectScreen(t);(0,p.Wi)(e)||this._activeSubTool.onPointerMove({mapPoint:e,pointerType:t.pointerType})}_intersectScreen(t){const e=(0,Xt.Sj)(t);this.view.sceneIntersectionHelper.intersectToolIntersectorScreen(e,this._intersector);const i=this._intersector.results.min,s=H.WM.get();return i.getIntersectionPoint(s)?this.view.renderCoordsHelper.fromRenderCoords(s,this.view.spatialReference):null}_addDimension(t){this._lengthDimensionSubTool.addDimension(t,this.manipulators)}_removeDimension(t){this._lengthDimensionSubTool.removeDimension(t,this.manipulators)}};(0,o._)([(0,a.Cb)({constructOnly:!0})],w.prototype,"view",void 0),(0,o._)([(0,a.Cb)({constructOnly:!0})],w.prototype,"analysis",void 0),(0,o._)([(0,a.Cb)({readOnly:!0})],w.prototype,"state",null),(0,o._)([(0,a.Cb)({readOnly:!0})],w.prototype,"updating",null),(0,o._)([(0,a.Cb)({readOnly:!0})],w.prototype,"cursor",null),(0,o._)([(0,a.Cb)({readOnly:!0})],w.prototype,"preferManipulatorCursor",void 0),(0,o._)([(0,a.Cb)({constructOnly:!0})],w.prototype,"analysisViewData",void 0),(0,o._)([(0,a.Cb)()],w.prototype,"_activeSubTool",void 0),(0,o._)([(0,a.Cb)()],w.prototype,"_lengthDimensionSubTool",void 0),w=(0,o._)([(0,b.j)("esri.views.3d.analysis.Dimensioning.DimensioningTool")],w);var Jt=n(15572),f=n(84161),Qt=n(4794),kt=n(78172),qt=n(15348),te=n(67214),Et=n(87469),q=n(64770),ee=n(40723),ne=n(54889);let tt=class extends C.Z{constructor(t){super(t),this._directSegment=new q.y$,this._dimensionSegment=new q.y$,this._offsetAxis=(0,ct.c)(),this._startOffsetSegment=new q.y$(this._directSegment.startRenderSpace,this._dimensionSegment.startRenderSpace),this._endOffsetSegment=new q.y$(this._directSegment.endRenderSpace,this._dimensionSegment.endRenderSpace),this._labelSegment=new q.y$,this._hasValidGeometry=!1;const e={view:t.view,attached:!0,width:1,color:(0,Qt.f)(1,.5,0,1),renderOccluded:ee.yD.OccludeAndTransparent},i=J(B({},e),{stipplePattern:(0,ne.z5)(5)});this._dimensionVisualElement=new Et.r(e),this._startOffsetVisualElement=new Et.r(i),this._endOffsetVisualElement=new Et.r(i),this._label=new te.Kc({view:t.view,attached:!0,distance:0,fontSize:l.labels.fontSize})}initialize(){this.own([(0,x.ed)(this._dimensionVisualElement),(0,x.ed)(this._startOffsetVisualElement),(0,x.ed)(this._endOffsetVisualElement),(0,x.ed)(this._label)]);const{computation:t,view:e}=this,{dimension:i}=t;this.own([(0,S.YP)(()=>({startPoint:i.startPoint,endPoint:i.endPoint,offset:i.offset,axis:i.axis,heading:i.heading}),s=>{this._updateGeometry(s),this._updateLines(),this._updateLabelGeometry(e.state.camera)},S.nn),(0,S.YP)(()=>t.length,s=>this._updateLabelContent(s),S.nn),(0,S.YP)(()=>e.state.camera,s=>this._updateLabelGeometry(s),S.nn)])}get testInfo(){return{dimensionVisualElement:this._dimensionVisualElement,label:this._label}}_updateGeometry({startPoint:t,endPoint:e,offset:i,axis:s}){const{renderCoordsHelper:d}=this.view,h=this._directSegment;if((0,p.Wi)(t)||(0,p.Wi)(e)||!d.toRenderCoords(t,h.startRenderSpace)||!d.toRenderCoords(e,h.endRenderSpace))return void(this._hasValidGeometry=!1);const{startRenderSpace:D,endRenderSpace:M}=h,W=h.eval(.5,H.WM.get()),nt=d.worldUpAtPosition(W,H.WM.get()),X=d.worldBasisAtPosition(W,kt.R.X,H.WM.get()),A=this._offsetAxis;!function ie(t,e,i,s,d,h){switch(d){case"horizontal":return(0,f.c)(t,s);case"vertical":return(0,f.e)(e,s)<(0,f.e)(i,s)?(0,f.v)(t,i,e):(0,f.v)(t,e,i),(0,f.f)(t,t,s),(0,f.z)(t,ct.Z)?(0,f.c)(t,h):((0,f.f)(t,t,s),(0,f.n)(t,t),t);case"direct":(0,f.e)(e,h)>(0,f.e)(i,h)?(0,f.v)(t,i,e):(0,f.v)(t,e,i),(0,f.f)(t,t,s),(0,f.z)(t,ct.Z)?(0,f.c)(t,h):(0,f.n)(t,t)}}(A,D,M,nt,s,X);const it=i/d.unitInMeters,[ht,bt]=function se(t,e,i,s=0){const d=(0,f.e)(e,i),h=(0,f.e)(t,i),D=Math.abs(d-h)+s;return d>h?[D,s]:[s,D]}(D,M,A,it),Tt=this._dimensionSegment;(0,f.C)(Tt.startRenderSpace,h.startRenderSpace,A,ht),(0,f.C)(Tt.endRenderSpace,h.endRenderSpace,A,bt),this._hasValidGeometry=!0}_updateLines(){if(!this._hasValidGeometry)return this._dimensionVisualElement.visible=!1,this._startOffsetVisualElement.visible=!1,void(this._endOffsetVisualElement.visible=!1);this._dimensionVisualElement.setGeometryFromSegment(this._dimensionSegment),this._startOffsetVisualElement.setGeometryFromSegment(this._startOffsetSegment),this._endOffsetVisualElement.setGeometryFromSegment(this._endOffsetSegment),this._dimensionVisualElement.visible=!0,this._startOffsetVisualElement.visible=!0,this._endOffsetVisualElement.visible=!0}_updateLabelContent(t){if((0,p.Wi)(t)||!this._hasValidGeometry)return this._label.text="",void(this._label.visible=!1);const{value:e}=(0,Jt.nn)(t,"meters");this._label.text=`${(0,qt.uf)(e,{minimumFractionDigits:2,maximumFractionDigits:2})} m`,this._label.visible=!0}_updateLabelGeometry(t){if(!this._hasValidGeometry)return void(this._label.visible=!1);const{offset:e}=this.computation.dimension,i=t.computeRenderPixelSizeAt(this._dimensionSegment.eval(.5,H.WM.get())),s=(Math.sign(e)>=0?1:-1)*l.labels.offset*i;(function oe(t,e,i,s){(0,f.C)(t.startRenderSpace,e.startRenderSpace,i,s),(0,f.C)(t.endRenderSpace,e.endRenderSpace,i,s)})(this._labelSegment,this._dimensionSegment,this._offsetAxis,s),this._label.geometry={type:"segment",sampleLocation:"center",segment:this._labelSegment,callout:!1}}};(0,o._)([(0,a.Cb)({constructOnly:!0,nonNullable:!0})],tt.prototype,"computation",void 0),(0,o._)([(0,a.Cb)({constructOnly:!0,nonNullable:!0})],tt.prototype,"view",void 0),tt=(0,o._)([(0,b.j)("esri.views.3d.analysis.Dimensioning.LengthDimensionVisualization")],tt);let et=class extends C.Z{constructor(t){super(t),this._dimensionVisualizations=new Map}initialize(){for(const t of this.computations)this._addComputation(t);this.own(this.computations.on("change",({added:t,removed:e})=>{for(const i of e)this._removeComputation(i);for(const i of t)this._addComputation(i)}))}destroy(){this._dimensionVisualizations.forEach(t=>{t.destroy()}),this._dimensionVisualizations.clear()}get testInfo(){return{visualizations:Array.from(this._dimensionVisualizations.values())}}_addComputation(t){this._dimensionVisualizations.has(t)||this._dimensionVisualizations.set(t,new tt({computation:t,view:this.view}))}_removeComputation(t){const e=this._dimensionVisualizations.get(t);(0,p.Wi)(e)||(e.destroy(),this._dimensionVisualizations.delete(t))}};(0,o._)([(0,a.Cb)({constructOnly:!0,nonNullable:!0})],et.prototype,"view",void 0),(0,o._)([(0,a.Cb)({constructOnly:!0,nonNullable:!0})],et.prototype,"computations",void 0),et=(0,o._)([(0,b.j)("esri.views.3d.analysis.Dimensioning.DimensioningVisualization")],et);let ut=class extends C.Z{constructor(t){super(t),this.dimension=null}};(0,o._)([(0,a.Cb)({constructOnly:!0,nonNullable:!0})],ut.prototype,"dimension",void 0),ut=(0,o._)([(0,b.j)("esri.views.3d.analysis.LengthDimensionResult")],ut);const ae=ut;var re=n(71572);let $=class extends C.Z{constructor(t){super(t)}initialize(){this._set("result",new ae({dimension:this.dimension}))}get length(){const{startPoint:t,endPoint:e,axis:i}=this.dimension;if((0,p.Wi)(t)||(0,p.Wi)(e))return null;const s=(0,re.Uy)(t,e);return(0,p.Wi)(s)?null:s[i]}};(0,o._)([(0,a.Cb)({constructOnly:!0,nonNullable:!0})],$.prototype,"dimension",void 0),(0,o._)([(0,a.Cb)({constructOnly:!0,nonNullable:!0})],$.prototype,"result",void 0),(0,o._)([(0,a.Cb)()],$.prototype,"length",null),$=(0,o._)([(0,b.j)("esri.views.3d.analysis.LengthDimensionComputation")],$);var Mt=n(95925);let L=class extends((0,vt.p)(C.Z)){constructor(t){super(t),this.type="dimensioning-view-3d",this.tool=null,this._computations=new _.Z,this._dimensionsToResults=new Map,this._placementTask=null}initialize(){this.own([(0,Mt.Lp)(this,w),(0,S.on)(()=>this.analysis.dimensions,"change",({added:t,removed:e})=>{for(const i of e)this._removeDimension(i);for(const i of t)this._addDimension(i)},{onListenerAdd:t=>{for(const e of t)this._addDimension(e)},onListenerRemove:t=>{for(const e of t)this._removeDimension(e)}})]),this._analysisVisualization=new et({view:this.view,computations:this._computations})}destroy(){this._placementTask=(0,p.IM)(this._placementTask),this._analysisVisualization=(0,p.SC)(this._analysisVisualization),this._computations.drain(t=>t.destroy()),(0,Mt.Yq)(this)}get results(){return this.analysis.dimensions.map(t=>this._dimensionsToResults.get(t))}get testInfo(){return{visualization:this._analysisVisualization}}createLengthDimensions(t){var e=this;return(0,y.Z)(function*(){return e._placementTask=(0,p.IM)(e._placementTask),e._placementTask=(0,Mt.P9)(e,w,t),e._placementTask.promise})()}_addDimension(t){const e=this._dimensionsToResults;if(e.has(t))return;const i=this._computations,s=new $({dimension:t});i.add(s),e.set(t,s.result)}_removeDimension(t){const e=this._computations,i=this._dimensionsToResults,s=e.findIndex(h=>h.dimension===t),d=e.removeAt(s);i.delete(t),(0,p.SC)(d)}};(0,o._)([(0,a.Cb)({readOnly:!0})],L.prototype,"type",void 0),(0,o._)([(0,a.Cb)({constructOnly:!0,nonNullable:!0})],L.prototype,"analysis",void 0),(0,o._)([(0,a.Cb)()],L.prototype,"tool",void 0),(0,o._)([(0,a.Cb)({readOnly:!0})],L.prototype,"results",null),(0,o._)([(0,a.Cb)()],L.prototype,"_analysisVisualization",void 0),(0,o._)([(0,a.Cb)()],L.prototype,"_computations",void 0),(0,o._)([(0,a.Cb)()],L.prototype,"_dimensionsToResults",void 0),(0,o._)([(0,a.Cb)()],L.prototype,"_placementTask",void 0),L=(0,o._)([(0,b.j)("esri.views.3d.analysis.DimensioningAnalysisView3D")],L);const le=L},8859:(R,E,n)=>{n.d(E,{G:()=>rt,J4:()=>F,Sp:()=>Ct,VG:()=>Q,_N:()=>gt,_y:()=>z,bB:()=>yt,gv:()=>St,zP:()=>lt});var Z,r,y=n(62208),o=n(23841),C=n(84161),_=n(28093),p=n(55915),S=n(90014),a=n(70562),Ot=n(34054),mt=n(26242),st=n(60507),b=n(26046),vt=n(62483),x=n(67857),H=n(40841),ot=n(75079);function gt(r,l){return at(r,()=>l)}function yt(r){return at(r,l=>l.plane)}function at(r,l){const c=(0,_.c)(),v=(0,_.c)();let m=!1;return u=>{const P=l(u);if("start"===u.action){const V=(0,o.md)(u.screenStart,(0,o.c$)(mt.qW.get())),O=(0,b.u4)(r.state.camera,V,dt);(0,y.pC)(O)&&(m=(0,S.BR)(P,O,c))}if(!m)return null;const g=(0,o.md)(u.screenEnd,(0,o.c$)(mt.qW.get())),I=(0,b.u4)(r.state.camera,g,dt);return(0,y.Wi)(I)?null:(0,S.BR)(P,I,v)?J(B({},u),{renderStart:c,renderEnd:v,plane:P,ray:I}):null}}function rt(r,l,c,v=null,m=null){return function ft(r,l,c,v=null,m=null){let u=null;return P=>{if("start"===P.action&&(u=r.sceneIntersectionHelper.intersectElevationFromScreen((0,o.s1)(P.screenStart.x,P.screenStart.y),l,c,m),(0,y.pC)(u)&&(0,y.pC)(v)&&!(0,p.nF)(u,u,v))||(0,y.Wi)(u))return null;const g=r.sceneIntersectionHelper.intersectElevationFromScreen((0,o.s1)(P.screenEnd.x,P.screenEnd.y),l,c,m);return(0,y.pC)(g)?(0,y.pC)(v)&&!(0,p.nF)(g,g,v)?null:J(B({},P),{mapStart:u,mapEnd:g}):null}}(r,c,(0,st.Ou)(l,r,c),v,m)}function Q(r,l,c,v=null,m=null){return rt(r,c,(0,st.RL)(l),v,m)}function z(r,l,c,v){const m=l.toMap(r.screenStart,{include:[c]});return(0,y.pC)(m)?Q(l,c,m,v):null}function Ct(r,l,c){let v=null;const m=new ot.hM;return m.next(gt(r,function T(r,l){const c=Pt,v=Dt,m=(0,S.Ue)();r.renderCoordsHelper.worldUpAtPosition(l,c);const u=(0,C.f)(m,c,(0,C.b)(v,l,r.state.camera.eye));return(0,C.f)(u,u,c),(0,S.Yq)(l,u,m)}(r,l))).next(function k(r,l){const c=(0,_.c)(),v=(0,C.l)(l);r.renderCoordsHelper.worldUpAtPosition(l,c);const m=(0,_.c)(),u=(0,_.c)(),P=g=>((0,C.b)(g,g,l),(0,Ot.nF)(c,g,g),"global"===r.viewingMode&&(0,C.l)(g)*Math.sign((0,C.e)(c,g))<.001-v&&(0,C.b)(g,(0,C.g)(g,c,.001),l),(0,C.a)(g,g,l),g);return g=>(g.renderStart=P((0,C.c)(m,g.renderStart)),g.renderEnd=P((0,C.c)(u,g.renderEnd)),g)}(r,l)).next(lt(r,c)).next(u=>{u.mapEnd.x=u.mapStart.x,u.mapEnd.y=u.mapStart.y,v=u}),u=>(v=null,m.execute(u),v)}function lt(r,l){const c=r.renderCoordsHelper;return v=>{const m=c.fromRenderCoords(v.renderStart,l),u=c.fromRenderCoords(v.renderEnd,l);return(0,y.pC)(m)&&(0,y.pC)(u)?J(B({},v),{mapStart:m,mapEnd:u}):null}}function F(r){let l=null;return c=>{switch(c.action){case"start":l=r.disableDisplay();break;case"end":case"cancel":(0,y.pC)(l)&&(l.remove(),l=null)}return c}}function St(r,l=null){const c=(0,vt.Z8)(r.state.viewingMode);c.options.selectionMode=!0,c.options.store=x.eC.MIN,c.options.hud=!1;const v=(0,o.s1)(),m={requiresGroundFeedback:!0,enableDraped:!0,exclude:new Set},u=(0,_.c)(),P=(0,y.Pt)(l,r.spatialReference),g=V=>{r.map.ground&&r.map.ground.opacity<1?m.exclude.add(H.cy):m.exclude.delete(H.cy),r.sceneIntersectionHelper.intersectIntersectorScreen((0,o.md)(V,v),c,m);const O=c.results.min;let U;if(O.getIntersectionPoint(u))U=O.intersector===x.q7.TERRAIN?Z.GROUND:Z.OTHER;else{if(!c.results.ground.getIntersectionPoint(u))return null;U=Z.GROUND}return{location:r.renderCoordsHelper.fromRenderCoords(u,P),surfaceType:U}};let I;return V=>{if("start"===V.action){const U=g(V.screenStart);I=(0,y.pC)(U)?U.location:null}if((0,y.Wi)(I))return null;const O=g(V.screenEnd);return(0,y.pC)(O)&&(0,y.pC)(O.location)?J(B({},V),{mapStart:I,mapEnd:O.location,surfaceType:O.surfaceType}):null}}(r=Z||(Z={}))[r.GROUND=0]="GROUND",r[r.OTHER=1]="OTHER";const Pt=(0,_.c)(),Dt=(0,_.c)(),dt=(0,a.Ue)()}}]);