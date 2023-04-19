"use strict";var vt=Object.defineProperty,mt=Object.defineProperties,yt=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,gt=Object.prototype.hasOwnProperty,Et=Object.prototype.propertyIsEnumerable,w=(M,y,a)=>y in M?vt(M,y,{enumerable:!0,configurable:!0,writable:!0,value:a}):M[y]=a,I=(M,y)=>{for(var a in y||(y={}))gt.call(y,a)&&w(M,a,y[a]);if(L)for(var a of L(y))Et.call(y,a)&&w(M,a,y[a]);return M},D=(M,y)=>mt(M,yt(y));(self.webpackChunkexample_app=self.webpackChunkexample_app||[]).push([[120],{30120:(M,y,a)=>{a.r(y),a.d(y,{default:()=>dt});var R=a(15861),v=a(17626),f=(a(29132),a(88879)),A=a(46160),W=a(26584),j=a(61885),U=a(72392),K=a(63290),g=a(62208),B=a(10699),b=a(32917),m=a(77712),H=(a(85931),a(8314),a(90912),a(76898)),G=a(25748),Z=a(51470),O=a(57213),k=a(59617),F=a(7959),z=a(36073),N=a(9119),J=a(49621),X=a(10228),Q=a(85095),Y=a(56846),$=a(72791),q=a(26777),tt=a(9773),et=a(55214),C=a(49672);class st{constructor(e,s,i){this.graphic=e,this.mover=s,this.selected=i,this.type="reshape-start"}}class it{constructor(e,s,i){this.graphic=e,this.mover=s,this.selected=i,this.type="reshape"}}class ot{constructor(e,s,i){this.graphic=e,this.mover=s,this.selected=i,this.type="reshape-stop"}}class rt{constructor(e,s,i){this.mover=e,this.dx=s,this.dy=i,this.type="move-start"}}class nt{constructor(e,s,i){this.mover=e,this.dx=s,this.dy=i,this.type="move"}}class at{constructor(e,s,i){this.mover=e,this.dx=s,this.dy=i,this.type="move-stop"}}class ht{constructor(e){this.added=e,this.type="vertex-select"}}class ct{constructor(e){this.removed=e,this.type="vertex-deselect"}}class pt{constructor(e,s,i,o){this.added=e,this.graphic=s,this.oldGraphic=i,this.vertices=o,this.type="vertex-add"}}class lt{constructor(e,s,i,o){this.removed=e,this.graphic=s,this.oldGraphic=i,this.vertices=o,this.type="vertex-remove"}}const E=Q.X.reshapeGraphics,S={vertices:{default:new O.Z({style:"circle",size:E.vertex.size,color:E.vertex.color,outline:{color:E.vertex.outlineColor,width:1}}),hover:new O.Z({style:"circle",size:E.vertex.hoverSize,color:E.vertex.hoverColor,outline:{color:E.vertex.hoverOutlineColor,width:1}}),selected:new O.Z({style:"circle",size:E.selected.size,color:E.selected.color,outline:{color:E.selected.outlineColor,width:1}})},midpoints:{default:new O.Z({style:"circle",size:E.midpoint.size,color:E.midpoint.color,outline:{color:E.midpoint.outlineColor,width:1}}),hover:new O.Z({style:"circle",size:E.midpoint.size,color:E.midpoint.color,outline:{color:E.midpoint.outlineColor,width:1}})}},T="esri.views.draw.support.Reshape",_t=K.Z.getLogger(T);let d=class extends j.Z.EventedAccessor{constructor(t){super(t),this._activeOperationInfo=null,this._editGeometryOperations=null,this._handles=new U.Z,this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._snappingTask=null,this._stagedVertex=null,this._viewHandles=new U.Z,this.callbacks={onReshapeStart(){},onReshape(){},onReshapeStop(){},onMoveStart(){},onMove(){},onMoveStop(){},onGraphicClick(){}},this.enableMidpoints=!0,this.enableMovement=!0,this.enableVertices=!0,this.graphic=null,this.layer=null,this.midpointGraphics=new A.Z,this.midpointSymbol=new O.Z({style:"circle",size:6,color:[200,200,200],outline:{color:[100,100,100],width:1}}),this.selectedVertices=[],this.snappingManager=null,this.type="reshape",this.vertexGraphics=new A.Z,this.view=null}initialize(){this._highlightHelper=new J.Z({view:this.view}),this._setup(),this._handles.add([(0,b.gx)(()=>{var t;return null==(t=this.view)?void 0:t.ready},()=>{const{layer:t,view:e}=this;(0,X.p)(e,t),this._viewHandles.add(e.on("key-down",s=>this._keyDownHandler(s),Y.f.TOOL))},{once:!0,initial:!0}),(0,b.Wy)(()=>this.graphic,()=>this.refresh()),(0,b.Wy)(()=>this.layer,(t,e)=>{e&&(this._clearSelection(),this._resetGraphics(e)),this.refresh()}),(0,b.Wy)(()=>this.enableMidpoints,()=>this.refresh())])}destroy(){var t;this._reset(),null==(t=this._mover)||t.destroy(),this._mover=null,this._handles=(0,g.SC)(this._handles),this._viewHandles=(0,g.SC)(this._viewHandles)}set highlightsEnabled(t){var e;null==(e=this._highlightHelper)||e.removeAll(),this._set("highlightsEnabled",t),this._setUpHighlights()}get state(){const t=!!this.get("view.ready"),e=!(!this.get("graphic")||!this.get("layer"));return t&&e?"active":t?"ready":"disabled"}set symbols(t){const{midpoints:e=S.midpoints,vertices:s=S.vertices}=t||{};this._set("symbols",{midpoints:e,vertices:s})}isUIGraphic(t){const e=[];return this.graphic&&e.push(this.graphic),e.concat(this.vertexGraphics.items,this.midpointGraphics.items),e.length&&e.includes(t)}refresh(){this._reset(),this._setup()}reset(){this.graphic=null}clearSelection(){this._clearSelection()}removeSelectedVertices(){this.selectedVertices.length&&this._removeVertices(this.selectedVertices)}_setup(){const{graphic:t,layer:e}=this;if(!e||!t||(0,g.Wi)(t.geometry))return;const s=t.geometry;"mesh"!==s.type&&"extent"!==s.type?("polygon"===s.type&&(0,G.pW)(s),this._setUpHighlights(),this._setupGraphics(),this._setupMover()):this._logGeometryTypeError()}_setUpHighlights(){this.highlightsEnabled&&this.graphic&&this._highlightHelper.add(this.graphic)}_setUpGeometryHelper(){const t=this.graphic.geometry;if((0,g.Wi)(t)||"mesh"===t.type||"extent"===t.type)return void this._logGeometryTypeError();const e="multipoint"===t.type?new et.Z({paths:t.points,spatialReference:t.spatialReference}):t;this._editGeometryOperations=q.c.fromGeometry(e,k.JY.Local)}_saveSnappingContextForHandle(t,e){var s;this._snappingGraphicsLayer=new Z.Z({listMode:"hide",internal:!0,title:"Reshape snapping layer"}),this.view.map.layers.add(this._snappingGraphicsLayer),this._snappingContext=new tt.N({editGeometryOperations:this._editGeometryOperations,elevationInfo:{mode:"on-the-ground",offset:0},pointer:(null==(s=e.viewEvent)?void 0:s.pointerType)||"mouse",excludeFeature:this.graphic,visualizer:new F.r(this._snappingGraphicsLayer),vertexHandle:this._getVertexFromEditGeometry(t)})}_reset(){this._clearSelection(),this._highlightHelper.removeAll(),this._resetGraphics(),this._resetSnappingStateVars(),this._activeOperationInfo=null,this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetSnappingStateVars(){(0,g.pC)(this.snappingManager)&&this.snappingManager.doneSnapping(),(0,g.pC)(this._snappingGraphicsLayer)&&(this.view.map.layers.remove(this._snappingGraphicsLayer),this._snappingGraphicsLayer.destroy()),this._editGeometryOperations=(0,g.SC)(this._editGeometryOperations),this._snappingTask=(0,g.IM)(this._snappingTask),this._snappingTask=null,this._snappingContext=null,this._stagedVertex=null}_resetGraphics(t){this._removeMidpointGraphics(t),this._removeVertexGraphics(t),this._set("selectedVertices",[])}_removeMidpointGraphics(t){const e=t||this.layer;e&&e.removeMany(this.midpointGraphics.items),this.midpointGraphics.items.forEach(s=>s.destroy()),this.midpointGraphics.removeAll()}_removeVertexGraphics(t){const e=t||this.layer;e&&e.removeMany(this.vertexGraphics.items),this.vertexGraphics.items.forEach(s=>s.destroy()),this.vertexGraphics.removeAll()}_getCoordinatesForUI(t){const e=(0,G.nA)(t.clone());if("polygon"===t.type)for(const s of e){const i=s[s.length-1];s[0][0]===i[0]&&s[0][1]===i[1]&&s.length>2&&s.pop()}return e}_setupGraphics(){const t=this.graphic.geometry;if((0,g.pC)(t)&&("polyline"===t.type||"polygon"===t.type)){const e=this._getCoordinatesForUI(t);this.enableMidpoints&&this._setUpMidpointGraphics(e),this.enableVertices&&this._setUpVertexGraphics(e)}}_setUpMidpointGraphics(t){this._removeMidpointGraphics();const e=this._createMidpointGraphics(t);this.midpointGraphics.addMany(e),this.layer.addMany(e)}_setUpVertexGraphics(t){this._removeVertexGraphics();const e=this._createVertexGraphics(t);this.vertexGraphics.addMany(e),this._storeRelatedVertexIndices(),this.layer.addMany(e)}_createVertexGraphics(t){const{_graphicAttributes:e,symbols:s,view:{spatialReference:i}}=this,o=[];return null==t||t.forEach((n,r)=>{n.forEach((l,p)=>{var c;const[h,_]=l;o.push(new f.Z({geometry:new C.Z({x:h,y:_,spatialReference:i}),symbol:null==(c=null==s?void 0:s.vertices)?void 0:c.default,attributes:D(I({},e),{pathIndex:r,pointIndex:p})}))})}),o}_createMidpointGraphics(t){const{_graphicAttributes:e,symbols:s,view:{spatialReference:i}}=this,o=[];return null==t||t.forEach((n,r)=>{n.forEach((l,p)=>{const[h,_]=l,c=n[p+1]?p+1:0;if("polygon"===(0,g.U2)(this.graphic.geometry,"type")||0!==c){const[x,u]=n[c],[V,P]=(0,G.Gi)([h,_],[x,u]);o.push(new f.Z({geometry:new C.Z({x:V,y:P,spatialReference:i}),symbol:s.midpoints.default,attributes:D(I({},e),{pathIndex:r,pointIndexStart:p,pointIndexEnd:c})}))}})}),o}_storeRelatedVertexIndices(){const t=this.vertexGraphics.items;if(!t)return;const e=t.map(({geometry:s})=>({x:s.x,y:s.y}));for(let s=0;s<e.length;s++){const i=[];for(let o=0;o<e.length;o++){if(s===o)continue;const n=e[s],r=e[o];n.x===r.x&&n.y===r.y&&i.push(o)}t[s].attributes.relatedGraphicIndices=i}}_setupMover(){const{enableMovement:t,graphic:e,midpointGraphics:s,vertexGraphics:i,view:o}=this,n=i.concat(s).items;t&&n.push(e),this._mover=new N.default({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,graphics:n,view:o,callbacks:{onGraphicClick:r=>this._onGraphicClickCallback(r),onGraphicMoveStart:r=>this._onGraphicMoveStartCallback(r),onGraphicMove:r=>this._onGraphicMoveCallback(r),onGraphicMoveStop:r=>this._onGraphicMoveStopCallback(r),onGraphicPointerOver:r=>this._onGraphicPointerOverCallback(r),onGraphicPointerOut:r=>this._onGraphicPointerOutCallback(r)}})}_onGraphicClickCallback(t){t.viewEvent.stopPropagation();const e=t.graphic;if(e===this.graphic)this.clearSelection(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t);else if(this._isMidpoint(e)){if(2===t.viewEvent.button)return;const s=this.graphic.clone(),i=this._createVertexFromMidpoint(e);this.refresh(),this._emitVertexAddEvent([e],s,i)}else this._isVertex(e)&&(t.viewEvent.stopPropagation(),2===t.viewEvent.button?this._removeVertices(e):(t.viewEvent.native.shiftKey||this._clearSelection(),this.selectedVertices.includes(e)?this._removeFromSelection(e,!0):this._addToSelection(e)))}_setUpOperation(t){const{graphic:e,dx:s,dy:i}=t,o=e===this.graphic;this._resetSnappingStateVars(),this._setUpGeometryHelper(),this._saveSnappingContextForHandle(e,t),this._activeOperationInfo={target:this.graphic,mover:e,operationType:o?"move":"reshape",totalDx:s,totalDy:i}}_onGraphicMoveStartCallback(t){const e=t.graphic,{dx:s,dy:i}=t;if(e===this.graphic)return this._clearSelection(),this._resetGraphics(),this._setUpOperation(t),this._emitMoveStartEvent(s,i),void("point"===this._editGeometryOperations.data.type&&this._onHandleMove(e,s,i,t,()=>this._emitMoveEvent(s,i)));if(!this.selectedVertices.includes(e)){if(this._clearSelection(),this._isMidpoint(e)){const o=this.graphic.clone(),n=this._createVertexFromMidpoint(e);this._emitVertexAddEvent([e],o,n)}this._addToSelection(e)}this._setUpOperation(t),this._emitReshapeStartEvent(e),this._onHandleMove(e,s,i,t,()=>this._emitReshapeEvent(e))}_onGraphicMoveCallback(t){const{graphic:e,dx:s,dy:i}=t;this._activeOperationInfo.totalDx+=s,this._activeOperationInfo.totalDy+=i;const{operationType:o}=this._activeOperationInfo;"move"===o?"point"===this._editGeometryOperations.data.type?this._onHandleMove(e,s,i,t,()=>this._emitMoveEvent(s,i)):this._emitMoveEvent(s,i):this._onHandleMove(e,s,i,t,()=>this._emitReshapeEvent(e))}_onGraphicMoveStopCallback(t){const{graphic:e,dx:s,dy:i}=t,o=e===this.graphic,n="point"!==this._editGeometryOperations.data.type;this._activeOperationInfo.totalDx+=s,this._activeOperationInfo.totalDy+=i,this._onHandleMove(e,s,i,t,()=>o?this._emitMoveStopEvent():this._emitReshapeStopEvent(e)),o&&n||this._isMidpoint(e)?this.refresh():(this._resetSnappingStateVars(),this._activeOperationInfo=null)}_updateMidpointGraphicLocations(t){for(const e of this.midpointGraphics){const{pathIndex:s,pointIndexStart:i,pointIndexEnd:o}=e.attributes,[n,r]=t[s][i],[l,p]=t[s][o],[h,_]=(0,G.Gi)([n,r],[l,p]);e.geometry=new C.Z({x:h,y:_,spatialReference:this.view.spatialReference})}}_getIndicesForVertexGraphic({attributes:t}){return[(null==t?void 0:t.pathIndex)||0,(null==t?void 0:t.pointIndex)||0]}_getVertexFromEditGeometry(t){const[e,s]=this._getIndicesForVertexGraphic(t);return this._editGeometryOperations.data.components[e].vertices[s]}_onHandleMove(t,e,s,i,o){var n=this;if((0,g.IM)(this._snappingTask),!this._snappingContext)return;const r=t.geometry,l="graphic-move-stop"===i.type;if((0,g.pC)(this.snappingManager)&&this.selectedVertices.length<2&&!l){const p=this.snappingManager;this._stagedVertex=p.update(r,this._snappingContext),this._syncGeometryAfterVertexMove(t,new C.Z(this._stagedVertex),e,s,l),o(),this._snappingTask=(0,B.vr)(function(){var h=(0,R.Z)(function*(_){const c=yield p.snap(r,n._snappingContext,_);c.valid&&(n._stagedVertex=c.apply(),n._syncGeometryAfterVertexMove(t,new C.Z(n._stagedVertex),e,s,l),o())});return function(_){return h.apply(this,arguments)}}())}else{const p=(0,g.pC)(this._stagedVertex)?new C.Z(this._stagedVertex):r;this._syncGeometryAfterVertexMove(t,p,e,s,l),o()}}_syncGeometryAfterVertexMove(t,e,s,i,o=!1){var n=this;return(0,R.Z)(function*(){const r=n._editGeometryOperations.data.geometry;if("point"===r.type)t.geometry=e;else{const{x:l,y:p}=e,[h,_]=n._getIndicesForVertexGraphic(t);let c=(0,G.nA)(r);const x=c[h].length-1;c[h][_]=[l,p],"polygon"===r.type&&(0===_?c[h][x]=[l,p]:_===x&&(c[h][0]=[l,p])),n._isVertex(t)&&(c=n._moveRelatedCoordinates(c,t,l,p),c=n._moveSelectedHandleCoordinates(c,t,s,i,"polygon"===r.type),n._updateMidpointGraphicLocations(c)),n.graphic.geometry=r.clone();const u=n._getVertexFromEditGeometry(t);n._editGeometryOperations.moveVertices([u],l-u.pos[0],p-u.pos[1],0),o&&(n._mover?n._mover.updateGeometry(n._mover.graphics.indexOf(t),e):t.geometry=e)}})()}_moveRelatedCoordinates(t,e,s,i){const{relatedGraphicIndices:o}=e.attributes;for(const n of o){const r=this.vertexGraphics.getItemAt(n),{pathIndex:l,pointIndex:p}=r.attributes;t[l][p]=[s,i],r.geometry=e.geometry}return t}_moveSelectedHandleCoordinates(t,e,s,i,o){for(const n of this.selectedVertices)if(n!==e){const{pathIndex:r,pointIndex:l,relatedGraphicIndices:p}=n.attributes,h=(0,z.e7)(n.geometry,s,i,this.view),_=t[r].length-1;t[r][l]=[h.x,h.y],n.geometry=h,o&&(0===l?t[r][_]=[h.x,h.y]:l===_&&(t[r][0]=[h.x,h.y]));for(const c of p){const x=this.vertexGraphics.getItemAt(c),{pathIndex:u,pointIndex:V}=x.attributes;t[u][V]=[h.x,h.y],x.geometry=h}}return t}_onGraphicPointerOverCallback(t){const e=t.graphic;this._isVertex(e)&&!this._isSelected(e)&&(e.symbol=this.symbols.vertices.hover),this._updateHoverCursor(e)}_onGraphicPointerOutCallback(t){const e=t.graphic;this._isVertex(e)&&!this._isSelected(e)&&(e.symbol=this.symbols.vertices.default),this.view.cursor="default"}_createVertexFromMidpoint(t){const{_graphicAttributes:e,graphic:s}=this,i=s.geometry;if((0,g.Wi)(i)||"polygon"!==i.type&&"polyline"!==i.type)return[];const o=i.clone(),n=[],{pathIndex:r,pointIndexStart:l,pointIndexEnd:p}=t.attributes,{x:h,y:_}=t.geometry,c=0===p?l+1:p,x=(0,G.nA)(o);return x[r].splice(c,0,[h,_]),t.attributes=D(I({},e),{pathIndex:r,pointIndex:c,relatedGraphicIndices:[]}),n.push({coordinates:x[r][c],componentIndex:r,vertexIndex:c}),this.graphic.geometry=o,n}_addToSelection(t){t instanceof f.Z&&(t=[t]);for(const e of t)e.symbol=this.symbols.vertices.selected;this._set("selectedVertices",this.selectedVertices.concat(t)),this._emitSelectEvent(t)}_removeFromSelection(t,e){const{vertices:s}=this.symbols,i=e?s.hover:s.default;t instanceof f.Z&&(t=[t]);for(const o of t)this.selectedVertices.splice(this.selectedVertices.indexOf(o),1),this._set("selectedVertices",this.selectedVertices),o.set("symbol",i);this._emitDeselectEvent(t)}_clearSelection(){if(this.selectedVertices.length){const t=this.selectedVertices;for(const e of this.selectedVertices)e.set("symbol",this.symbols.vertices.default);this._set("selectedVertices",[]),this._emitDeselectEvent(t)}}_keyDownHandler(t){$.j.delete.includes(t.key)&&!t.repeat&&this.selectedVertices.length&&this._removeVertices(this.selectedVertices)}_removeVertices(t){const e=this.graphic.geometry;if((0,g.Wi)(e)||"polygon"!==e.type&&"polyline"!==e.type||"polygon"===e.type&&this.vertexGraphics.length<4||this.vertexGraphics.length<3)return;t instanceof f.Z&&(t=[t]);const s=this.graphic.clone(),i=e.clone();let o=(0,G.nA)(i);const n=[];t instanceof f.Z&&(t=[t]);for(const r of t){const{x:l,y:p}=r.geometry;for(let h=0;h<o.length;h++){const _=o[h];for(let c=0;c<_.length;c++){const[x,u]=_[c];l===x&&p===u&&(n.push({coordinates:o[h][c],componentIndex:h,vertexIndex:c}),o[h].splice(Number(c),1))}}}if("polygon"===i.type)o=o.filter(r=>{if(r.length<2)return!1;const[l,p]=r[0],[h,_]=r[r.length-1];return(2!==r.length||l!==h||p!==_)&&(l===h&&p===_||r.push(r[0]),!0)}),i.rings=o;else{for(const r of o)1===r.length&&o.splice(o.indexOf(r),1);i.paths=o}this.graphic.geometry=i,this.refresh(),this._emitVertexRemoveEvent(t,s,n)}_isVertex(t){return this.vertexGraphics.includes(t)}_isSelected(t){return this._isVertex(t)&&this.selectedVertices.includes(t)}_isMidpoint(t){return this.midpointGraphics.includes(t)}_updateHoverCursor(t){this.view.cursor=this._isMidpoint(t)?"copy":"move"}_emitMoveStartEvent(t,e){const s=new rt(this.graphic,t,e);this.emit("move-start",s),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(s)}_emitMoveEvent(t,e){const s=new nt(this.graphic,t,e);this.emit("move",s),this.callbacks.onMove&&this.callbacks.onMove(s)}_emitMoveStopEvent(){const{totalDx:t,totalDy:e}=this._activeOperationInfo,s=new at(this.graphic,t,e);this.emit("move-stop",s),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(s)}_emitReshapeStartEvent(t){const e=new st(this.graphic,t,this.selectedVertices);this.emit("reshape-start",e),this.callbacks.onReshapeStart&&this.callbacks.onReshapeStart(e)}_emitReshapeEvent(t){const e=new it(this.graphic,t,this.selectedVertices);this.emit("reshape",e),this.callbacks.onReshape&&this.callbacks.onReshape(e)}_emitReshapeStopEvent(t){const e=new ot(this.graphic,t,this.selectedVertices);this.emit("reshape-stop",e),this.callbacks.onReshapeStop&&this.callbacks.onReshapeStop(e)}_emitSelectEvent(t){const e=new ht(t);this.emit("select",e),this.callbacks.onVertexSelect&&this.callbacks.onVertexSelect(e)}_emitDeselectEvent(t){const e=new ct(t);this.emit("deselect",e),this.callbacks.onVertexDeselect&&this.callbacks.onVertexDeselect(e)}_emitVertexAddEvent(t,e,s){const i=new pt(t,this.graphic,e,s);this.emit("vertex-add",i),this.callbacks.onVertexAdd&&this.callbacks.onVertexAdd(i)}_emitVertexRemoveEvent(t,e,s){const i=new lt(t,this.graphic,e,s);this.emit("vertex-remove",i),this.callbacks.onVertexRemove&&this.callbacks.onVertexRemove(i)}_logGeometryTypeError(){_t.error(new W.Z("reshape:invalid-geometry","Reshape operation not supported for the provided graphic. The geometry type is not supported."))}};(0,v._)([(0,m.Cb)()],d.prototype,"callbacks",void 0),(0,v._)([(0,m.Cb)()],d.prototype,"enableMidpoints",void 0),(0,v._)([(0,m.Cb)()],d.prototype,"enableMovement",void 0),(0,v._)([(0,m.Cb)()],d.prototype,"enableVertices",void 0),(0,v._)([(0,m.Cb)()],d.prototype,"graphic",void 0),(0,v._)([(0,m.Cb)({value:!0})],d.prototype,"highlightsEnabled",null),(0,v._)([(0,m.Cb)()],d.prototype,"layer",void 0),(0,v._)([(0,m.Cb)({readOnly:!0})],d.prototype,"midpointGraphics",void 0),(0,v._)([(0,m.Cb)()],d.prototype,"midpointSymbol",void 0),(0,v._)([(0,m.Cb)({readOnly:!0})],d.prototype,"selectedVertices",void 0),(0,v._)([(0,m.Cb)()],d.prototype,"snappingManager",void 0),(0,v._)([(0,m.Cb)({readOnly:!0})],d.prototype,"state",null),(0,v._)([(0,m.Cb)({value:S})],d.prototype,"symbols",null),(0,v._)([(0,m.Cb)({readOnly:!0})],d.prototype,"type",void 0),(0,v._)([(0,m.Cb)({readOnly:!0})],d.prototype,"vertexGraphics",void 0),(0,v._)([(0,m.Cb)()],d.prototype,"view",void 0),d=(0,v._)([(0,H.j)(T)],d);const dt=d}}]);