"use strict";var Je=Object.defineProperty,Ke=Object.defineProperties,Ve=Object.getOwnPropertyDescriptors,Ie=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable,Ce=(O,I,t)=>I in O?Je(O,I,{enumerable:!0,configurable:!0,writable:!0,value:t}):O[I]=t,z=(O,I)=>{for(var t in I||(I={}))ze.call(I,t)&&Ce(O,t,I[t]);if(Ie)for(var t of Ie(I))He.call(I,t)&&Ce(O,t,I[t]);return O},X=(O,I)=>Ke(O,Ve(I));(self.webpackChunkexample_app=self.webpackChunkexample_app||[]).push([[7559],{40405:(O,I,t)=>{t.d(I,{B:()=>L});var i=t(15861),s=t(62208),d=t(22558),Z=t(21726),k=t(35948),_=t(34117),M=t(31283),R=t(77712);function E(a){return j[function P(a){return a instanceof Blob?a.type:function T(a){const c=(0,Z.Ml)(a);return x[c]||w}(a.url)}(a)]||N}const j={},w="text/plain",N=j[w],x={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const a in x)j[x[a]]=a;var v=t(29840);function L(a){const c=(0,s.pC)(a)&&a.origins?a.origins:[void 0];return(h,m)=>{const g=function f(a,c,h){if((0,s.pC)(a)&&"resource"===a.type)return function W(a,c,h){const m=(0,_.VZ)(c,h);return{type:String,read:(g,S,b)=>{const u=(0,v.r)(g,S,b);return m.type===String?u:"function"==typeof m.type?new m.type({url:u}):void 0},write:{writer(g,S,b,u){if(!u||!u.resources)return"string"==typeof g?void(S[b]=(0,v.t)(g,u)):void(S[b]=g.write({},u));const U=function ye(a){return(0,s.Wi)(a)?null:"string"==typeof a?a:a.url}(g),F=U?(0,v.t)(U,X(z({},u),{verifyItemRelativeUrls:u&&u.verifyItemRelativeUrls?{writtenUrls:u.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null}),v.M.NO):null,D=m.type!==String&&(!(0,d.l)(this)||u&&u.origin&&this.originIdOf(h)>(0,M.M9)(u.origin));u&&u.portalItem&&(0,s.pC)(F)&&!(0,Z.YP)(F)?D?function H(a,c,h,m,g,S,b,u){const U=b.portalItem.resourceFromPath(m),F=te(h,m,b);E(F)===(0,Z.Ml)(U.path)?(n(a,c,U,F,b.resources.toUpdate),g[S]=m):G(a,c,h,m,g,S,b,u)}(this,h,g,F,S,b,u,a):function ee(a,c,h,m){m.resources.toKeep.push({resource:m.portalItem.resourceFromPath(a)}),c[h]=a}(F,S,b,u):u&&u.portalItem&&((0,s.Wi)(F)||(0,s.pC)((0,v.i)(F))||(0,Z.jc)(F)||D)?G(this,h,g,F,S,b,u,a):S[b]=F}}}}(a,c,h);switch((0,s.pC)(a)&&a.type?a.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:m,write:g}=v.p;return{read:m,write:g}}}}(a,h,m);for(const S of c){const b=(0,R.CJ)(h,S,m);for(const u in g)b[u]=g[u]}}}function G(a,c,h,m,g,S,b,u){const U=(0,k.D)(),F=te(h,m,b),D=(0,Z.v_)((0,s.U2)(u,"prefix"),U),re=`${D}.${E(F)}`,J=b.portalItem.resourceFromPath(re);(0,Z.jc)(m)&&b.resources.pendingOperations.push(function ue(a){return $.apply(this,arguments)}(m).then(oe=>{J.path=`${D}.${E(oe)}`,g[S]=J.itemRelativeUrl}).catch(()=>{})),n(a,c,J,F,b.resources.toAdd),g[S]=J.itemRelativeUrl}function n(a,c,h,m,g){g.push({resource:h,content:m,finish:S=>{!function Q(a,c,h){"string"==typeof a[c]?a[c]=h.url:a[c].url=h.url}(a,c,S)}})}function te(a,c,h){return"string"==typeof a?{url:c}:new Blob([JSON.stringify(a.toJSON(h))],{type:"application/json"})}function $(){return($=(0,i.Z)(function*(a){const c=(yield Promise.resolve().then(t.bind(t,84792))).default,{data:h}=yield c(a,{responseType:"blob"});return h})).apply(this,arguments)}},27559:(O,I,t)=>{t.r(I),t.d(I,{default:()=>Me});var i=t(15861),s=t(17626),d=t(73281),w=(t(4832),t(49067),t(96794),t(69747),t(40425),t(69357),t(40342),t(14726),t(33474),t(32088)),N=t(84792),x=t(46160),v=t(26584),L=t(63290),f=t(62208),W=t(99959),G=t(10699),H=t(32917),ee=t(21726),n=t(77712),$=(t(85931),t(8314),t(52323)),Q=(t(90912),t(68653)),a=t(76898),c=t(31283),h=t(44917),m=t(50085),g=t(65088),S=t(49286),b=t(6647),u=t(99555),U=t(10157),F=t(59787),D=t(13812),re=t(83989),J=t(47058),oe=t(74711),Se=t(55911),xe=t(60466),ce=t(36630),Y=t(35031),je=t(170),he=t(62667),Fe=t(2430),se=t(86810);let B=class extends se.wq{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};(0,s._)([(0,n.Cb)({type:String,json:{read:!0,write:!0}})],B.prototype,"name",void 0),(0,s._)([(0,n.Cb)({type:String,json:{read:!0,write:!0}})],B.prototype,"field",void 0),(0,s._)([(0,n.Cb)({type:[Number],json:{read:!0,write:!0}})],B.prototype,"currentRangeExtent",void 0),(0,s._)([(0,n.Cb)({type:[Number],json:{read:!0,write:!0}})],B.prototype,"fullRangeExtent",void 0),(0,s._)([(0,n.Cb)({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],B.prototype,"type",void 0),B=(0,s._)([(0,a.j)("esri.layers.support.RangeInfo")],B);var q,Le=t(72392),Oe=t(58817),Re=t(40405),fe=t(14889),ie=(t(82255),t(37118)),ve=t(55915);let ne=q=class extends((0,se.eC)(x.Z.ofType(ie.Z))){constructor(e){super(e)}clone(){return new q(this.items.map(e=>e.clone()))}write(e,r){return this.toJSON(r)}toJSON(e){var o;const r=null==(o=null==e?void 0:e.layer)?void 0:o.spatialReference;return r?this.toArray().map(l=>{if(!r.equals(l.spatialReference)){if(!(0,ve.Up)(l.spatialReference,r))return e&&e.messages&&e.messages.push(new fe.Z("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const C=new ie.Z;(0,ve.Wt)(l,C,r),l=C}const y=l.toJSON(e);return delete y.spatialReference,y}).filter(l=>null!=l):(null!=e&&e.messages&&e.messages.push(new fe.Z("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map(l=>l.toJSON(e)))}static fromJSON(e,r){const o=new q;return e.forEach(l=>o.add(ie.Z.fromJSON(l,r))),o}};ne=q=(0,s._)([(0,a.j)("esri.layers.support.PolygonCollection")],ne);const ae=ne;var pe,Pe=t(29840);let K=pe=class extends se.wq{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new ae,this._geometriesSource=null,this._handles=new Le.Z}initialize(){this._handles.add((0,H.on)(()=>this.geometries,"after-changes",()=>this.geometries=this.geometries,H.Z_))}destroy(){this._handles.destroy()}readGeometries(e,r,o){this._geometriesSource={url:(0,Pe.f)(e,o),context:o}}loadGeometries(e,r){var o=this;return(0,i.Z)(function*(){if((0,f.Wi)(o._geometriesSource))return;const{url:l,context:y}=o._geometriesSource,C=yield(0,N.default)(l,{responseType:"json",signal:(0,f.U2)(r,"signal")}),A=e.toJSON(),le=C.data.map(de=>X(z({},de),{spatialReference:A}));o.geometries=ae.fromJSON(le,y),o._geometriesSource=null})()}clone(){return new pe({geometries:(0,Oe.d9)(this.geometries),spatialRelationship:this.spatialRelationship})}};(0,s._)([(0,n.Cb)({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],K.prototype,"spatialRelationship",void 0),(0,s._)([(0,n.Cb)({type:ae,nonNullable:!0,json:{write:!0}}),(0,Re.B)({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries"})],K.prototype,"geometries",void 0),(0,s._)([(0,Q.r)(["web-scene","portal-item"],"geometries")],K.prototype,"readGeometries",null),K=pe=(0,s._)([(0,a.j)("esri.layers.support.SceneFilter")],K);const Ee=K;var Te=t(39683),Ue=t(84952),De=t(49430),Ae=t(92236);const we=["3DObject","Point"],V=L.Z.getLogger("esri.layers.SceneLayer"),me=(0,Se.v)();let p=class extends((0,U.Vt)((0,g.Y)((0,S.q)((0,b.I)((0,u.M)((0,W.R)((0,m.V)(h.Z)))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new x.Z,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,r){return"string"==typeof e?z({url:e},r):e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){var l,y,C,A;const o=null==(y=null==(l=this.getFeatureType(null==r?void 0:r.feature))?void 0:l.domains)?void 0:y[e];return o&&"inherited"!==o.type?o:null!=(A=null==(C=this.getField(e))?void 0:C.domain)?A:null}getFeatureType(e){return e&&(0,f.pC)(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return(0,f.pC)(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return(0,f.pC)(this.associatedLayer)?this.associatedLayer.typeIdField:null}get formTemplate(){return(0,f.pC)(this.associatedLayer)?this.associatedLayer.formTemplate:null}get fieldsIndex(){return new xe.Z(this.fields)}readNodePages(e,r,o){return"Point"===r.layerType&&(e=r.pointNodePages),null==e||"object"!=typeof e?null:Y.U4.fromJSON(e,o)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return Ne[this.profile]||"mesh"}set renderer(e){(0,ce.YN)(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){const e=(0,f.pC)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:F.C,{query:r,editing:{supportsGlobalId:o,supportsRollbackOnFailure:l,supportsUploadWithItemId:y,supportsReturnServiceEditsInSourceSpatialReference:C},data:{supportsZ:A,supportsM:le,isVersioned:de,supportsAttachment:Ze},operations:{supportsEditing:Qe,supportsUpdate:Be,supportsQuery:Ge,supportsQueryAttachments:We}}=e,be=e.operations.supportsChangeTracking;return{query:r,editing:{supportsGlobalId:o,supportsReturnServiceEditsInSourceSpatialReference:C,supportsRollbackOnFailure:l,supportsGeometryUpdate:!1,supportsUploadWithItemId:y},data:{supportsAttachment:Ze,supportsZ:A,supportsM:le,isVersioned:de},operations:{supportsQuery:Ge,supportsQueryAttachments:We,supportsEditing:Qe&&be,supportsAdd:!1,supportsDelete:!1,supportsUpdate:Be&&be}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){null!=e?this._override("editingEnabled",e):this._clearOverride("editingEnabled")}get defaultPopupTemplate(){return(0,f.pC)(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,r){return!e&&r.fields&&r.fields.some(o=>("esriFieldTypeOID"===o.type&&(e=o.name),!!e)),e||void 0}readGlobalIdField(e,r){return!e&&r.fields&&r.fields.some(o=>("esriFieldTypeGlobalID"===o.type&&(e=o.name),!!e)),e||void 0}get displayField(){return(0,f.pC)(this.associatedLayer)?this.associatedLayer.displayField:null}readProfile(e,r){const o=r.store.profile;return null!=o&&ge[o]?ge[o]:(V.error("Unknown or missing profile",{profile:o,layer:this}),"mesh-pyramids")}load(e){const r=(0,f.pC)(e)?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(G.r9).then(()=>this._fetchService(r)).then(()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,r),this._setAssociatedFeatureLayer(r),(0,f.pC)(this.filter)?this.filter.loadGeometries(this.spatialReference):null])).then(()=>this._validateElevationInfo()).then(()=>this._applyAssociatedLayerOverrides()).then(()=>this._populateFieldUsageInfo()).then(()=>(0,Te.y)(this,{origin:"service"},r)).then(()=>(0,ce.YN)(this.renderer,this.fieldsIndex)).then(()=>this.finishLoadEditablePortalLayer(e));return this.addResolvingPromise(o),Promise.resolve(this)}beforeSave(){var e=this;return(0,i.Z)(function*(){(0,f.pC)(e.filter)&&(yield e.load())})()}createQuery(){const e=new Ue.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,r){return this._getAssociatedLayerForQuery().then(o=>o.queryExtent(e||this.createQuery(),r))}queryFeatureCount(e,r){return this._getAssociatedLayerForQuery().then(o=>o.queryFeatureCount(e||this.createQuery(),r))}queryFeatures(e,r){return this._getAssociatedLayerForQuery().then(o=>o.queryFeatures(e||this.createQuery(),r)).then(o=>{if(null!=o&&o.features)for(const l of o.features)l.layer=this,l.sourceLayer=this;return o})}queryObjectIds(e,r){return this._getAssociatedLayerForQuery().then(o=>o.queryObjectIds(e||this.createQuery(),r))}queryAttachments(e,r){return this._getAssociatedLayerForQuery().then(o=>o.queryAttachments(e,r))}getFieldUsageInfo(e){const r={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||r:(V.error("#getFieldUsageInfo()","Unavailable until layer is loaded"),r)}createPopupTemplate(e){return(0,De.eZ)(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return(0,f.pC)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}_loadAssociatedLayerForQuery(){var e=this;return(0,i.Z)(function*(){if(yield e.load(),(0,f.Wi)(e.associatedLayer))throw new v.Z("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:e});try{yield e.associatedLayer.load()}catch(r){throw new v.Z("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:e,error:r})}return e.associatedLayer})()}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some(r=>r.name===e)}queryCachedStatistics(e,r){var o=this;return(0,i.Z)(function*(){if(yield o.load(r),!o.statisticsInfo)throw new v.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const l=o.fieldsIndex.get(e);if(!l)throw new v.Z("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const y of o.statisticsInfo)if(y.name===l.name){const C=(0,ee.v_)(o.parsedUrl.path,y.href);return(0,N.default)(C,{query:{f:"json",token:o.apiKey},responseType:"json",signal:r?r.signal:null}).then(A=>A.data)}throw new v.Z("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")})()}saveAs(e,r){var o=this;return(0,i.Z)(function*(){return o._debouncedSaveOperations(U.xp.SAVE_AS,X(z({},r),{getTypeKeywords:()=>o._getTypeKeywords(),portalItemLayerType:"scene"}),e)})()}save(){var e=this;return(0,i.Z)(function*(){const r={getTypeKeywords:()=>e._getTypeKeywords(),portalItemLayerType:"scene"};return e._debouncedSaveOperations(U.xp.SAVE,r)})()}applyEdits(e,r){var o=this;return(0,i.Z)(function*(){const l=yield t.e(1913).then(t.bind(t,81913));if(yield o.load(),(0,f.Wi)(o.associatedLayer))throw new v.Z(`${o.type}-layer:not-editable`,"Service is not editable");return yield o.associatedLayer.load(),l.applyEdits(o,o.associatedLayer.source,e,r)})()}on(e,r){return super.on(e,r)}validateLayer(e){if(e.layerType&&!we.includes(e.layerType))throw new v.Z("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new v.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new v.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});!function r(o,l){let y=!1,C=!1;if(null==o)y=!0,C=!0;else{const A=l&&l.isGeographic;switch(o){case"east-north-up":case"earth-centered":y=!0,C=A;break;case"vertex-reference-frame":y=!0,C=!A;break;default:y=!1}}if(!y)throw new v.Z("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!C)throw new v.Z("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new v.Z("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const r=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some(y=>y.name===e.name)),o=!!((0,f.pC)(this.associatedLayer)&&this.associatedLayer.fields&&this.associatedLayer.fields.some(y=>y&&e.name===y.name));this._fieldUsageInfo[e.name]={supportsLabelingInfo:r,supportsRenderer:r,supportsPopupTemplate:r||o,supportsLayerQuery:o}}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()}_applyAssociatedLayerFieldsOverrides(){if((0,f.Wi)(this.associatedLayer)||!this.associatedLayer.fields)return;let e=null;for(const r of this.associatedLayer.fields){const o=this.getField(r.name);o?(!o.domain&&r.domain&&(o.domain=r.domain.clone()),o.editable=r.editable,o.nullable=r.nullable,o.length=r.length):(e||(e=this.fields?this.fields.slice():[]),e.push(r.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if((0,f.Wi)(this.associatedLayer))return;const e=["popupTemplate","popupEnabled"],r=(0,$.vw)(this);for(let o=0;o<e.length;o++){const l=e[o],y=this.originIdOf(l),C=this.associatedLayer.originIdOf(l);y<C&&(C===c.s3.SERVICE||C===c.s3.PORTAL_ITEM)&&r.setAtOrigin(l,this.associatedLayer[l],C)}}_setAssociatedFeatureLayer(e){var r=this;return(0,i.Z)(function*(){if(!["mesh-pyramids","points"].includes(r.profile))return;const o=new oe.W(r.parsedUrl,r.portalItem,r.apiKey,e);try{r.associatedLayer=yield o.fetch()}catch(l){(0,G.D_)(l)||r._logWarningOnPopupEnabled()}})()}_logWarningOnPopupEnabled(){var e=this;return(0,i.Z)(function*(){yield(0,H.N1)(()=>e.popupEnabled&&null!=e.popupTemplate);const r=`this SceneLayer: ${e.title}`;null==e.attributeStorageInfo?V.warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${r}`):V.info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${r}`)})()}_validateElevationInfo(){const e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"relative-to-scene"===e.mode&&V.warn(".elevationInfo=","Mesh scene layers don't support relative-to-scene elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&V.warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}};(0,s._)([(0,n.Cb)({types:{key:"type",base:re.B,typeMap:{selection:J.Z}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],p.prototype,"featureReduction",void 0),(0,s._)([(0,n.Cb)({type:[B],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],p.prototype,"rangeInfos",void 0),(0,s._)([(0,n.Cb)({json:{read:!1}})],p.prototype,"associatedLayer",void 0),(0,s._)([(0,n.Cb)({type:["show","hide"]})],p.prototype,"listMode",void 0),(0,s._)([(0,n.Cb)({type:["ArcGISSceneServiceLayer"]})],p.prototype,"operationalLayerType",void 0),(0,s._)([(0,n.Cb)({json:{read:!1},readOnly:!0})],p.prototype,"type",void 0),(0,s._)([(0,n.Cb)(X(z({},me.fields),{readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}}))],p.prototype,"fields",void 0),(0,s._)([(0,n.Cb)()],p.prototype,"types",null),(0,s._)([(0,n.Cb)()],p.prototype,"typeIdField",null),(0,s._)([(0,n.Cb)()],p.prototype,"formTemplate",null),(0,s._)([(0,n.Cb)({readOnly:!0})],p.prototype,"fieldsIndex",null),(0,s._)([(0,n.Cb)({type:Fe.Z,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],p.prototype,"floorInfo",void 0),(0,s._)([(0,n.Cb)(me.outFields)],p.prototype,"outFields",void 0),(0,s._)([(0,n.Cb)({type:Y.U4,readOnly:!0,json:{read:!1}})],p.prototype,"nodePages",void 0),(0,s._)([(0,Q.r)("service","nodePages",["nodePages","pointNodePages"])],p.prototype,"readNodePages",null),(0,s._)([(0,n.Cb)({type:[Y.QI],readOnly:!0})],p.prototype,"materialDefinitions",void 0),(0,s._)([(0,n.Cb)({type:[Y.Yh],readOnly:!0})],p.prototype,"textureSetDefinitions",void 0),(0,s._)([(0,n.Cb)({type:[Y.H3],readOnly:!0})],p.prototype,"geometryDefinitions",void 0),(0,s._)([(0,n.Cb)({readOnly:!0})],p.prototype,"serviceUpdateTimeStamp",void 0),(0,s._)([(0,n.Cb)({readOnly:!0})],p.prototype,"attributeStorageInfo",void 0),(0,s._)([(0,n.Cb)({readOnly:!0})],p.prototype,"statisticsInfo",void 0),(0,s._)([(0,n.Cb)({type:x.Z.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],p.prototype,"excludeObjectIds",void 0),(0,s._)([(0,n.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],p.prototype,"definitionExpression",void 0),(0,s._)([(0,n.Cb)({type:Ee,json:{name:"layerDefinition.polygonFilter",write:!0}})],p.prototype,"filter",void 0),(0,s._)([(0,n.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],p.prototype,"path",void 0),(0,s._)([(0,n.Cb)(D.PV)],p.prototype,"elevationInfo",null),(0,s._)([(0,n.Cb)({type:String})],p.prototype,"geometryType",null),(0,s._)([(0,n.Cb)(D.iR)],p.prototype,"labelsVisible",void 0),(0,s._)([(0,n.Cb)({type:[je.Z],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:he.r},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:he.r},write:!0}})],p.prototype,"labelingInfo",void 0),(0,s._)([(0,n.Cb)(D.rn)],p.prototype,"legendEnabled",void 0),(0,s._)([(0,n.Cb)({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,r){var l,y;if("number"==typeof e&&e>=0&&e<=1)return e;const o=null==(y=null==(l=r.layerDefinition)?void 0:l.drawingInfo)?void 0:y.transparency;return void 0!==o?(0,Ae.b)(o):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],p.prototype,"opacity",void 0),(0,s._)([(0,n.Cb)({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],p.prototype,"priority",void 0),(0,s._)([(0,n.Cb)({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],p.prototype,"semantic",void 0),(0,s._)([(0,n.Cb)({types:w.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],p.prototype,"renderer",null),(0,s._)([(0,n.Cb)({json:{read:!1}})],p.prototype,"cachedDrawingInfo",void 0),(0,s._)([(0,Q.r)("service","cachedDrawingInfo")],p.prototype,"readCachedDrawingInfo",null),(0,s._)([(0,n.Cb)({readOnly:!0,json:{read:!1}})],p.prototype,"capabilities",null),(0,s._)([(0,n.Cb)({type:Boolean,json:{read:!1}})],p.prototype,"editingEnabled",null),(0,s._)([(0,n.Cb)(D.C_)],p.prototype,"popupEnabled",void 0),(0,s._)([(0,n.Cb)({type:d.Z,json:{name:"popupInfo",write:!0}})],p.prototype,"popupTemplate",void 0),(0,s._)([(0,n.Cb)({readOnly:!0,json:{read:!1}})],p.prototype,"defaultPopupTemplate",null),(0,s._)([(0,n.Cb)({type:String,json:{read:!1}})],p.prototype,"objectIdField",void 0),(0,s._)([(0,Q.r)("service","objectIdField",["objectIdField","fields"])],p.prototype,"readObjectIdField",null),(0,s._)([(0,n.Cb)({type:String,json:{read:!1}})],p.prototype,"globalIdField",void 0),(0,s._)([(0,Q.r)("service","globalIdField",["globalIdField","fields"])],p.prototype,"readGlobalIdField",null),(0,s._)([(0,n.Cb)({readOnly:!0,type:String,json:{read:!1}})],p.prototype,"displayField",null),(0,s._)([(0,n.Cb)({type:String,json:{read:!1}})],p.prototype,"profile",void 0),(0,s._)([(0,Q.r)("service","profile",["store.profile"])],p.prototype,"readProfile",null),(0,s._)([(0,n.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],p.prototype,"normalReferenceFrame",void 0),(0,s._)([(0,n.Cb)(D.YI)],p.prototype,"screenSizePerspectiveEnabled",void 0),p=(0,s._)([(0,a.j)("esri.layers.SceneLayer")],p);const ge={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},Ne={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},Me=p},35031:(O,I,t)=>{t.d(I,{H3:()=>f,QI:()=>j,U4:()=>E,Yh:()=>N});var i=t(17626),s=t(86810),d=t(77712),M=(t(85931),t(8314),t(90912),t(55342)),R=t(76898);let E=class extends s.wq{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,i._)([(0,d.Cb)({type:Number})],E.prototype,"nodesPerPage",void 0),(0,i._)([(0,d.Cb)({type:Number})],E.prototype,"rootIndex",void 0),(0,i._)([(0,d.Cb)({type:String})],E.prototype,"lodSelectionMetricType",void 0),E=(0,i._)([(0,R.j)("esri.layer.support.I3SNodePageDefinition")],E);let P=class extends s.wq{constructor(){super(...arguments),this.factor=1}};(0,i._)([(0,d.Cb)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],P.prototype,"id",void 0),(0,i._)([(0,d.Cb)({type:Number})],P.prototype,"factor",void 0),P=(0,i._)([(0,R.j)("esri.layer.support.I3SMaterialTexture")],P);let T=class extends s.wq{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,i._)([(0,d.Cb)({type:[Number]})],T.prototype,"baseColorFactor",void 0),(0,i._)([(0,d.Cb)({type:P})],T.prototype,"baseColorTexture",void 0),(0,i._)([(0,d.Cb)({type:P})],T.prototype,"metallicRoughnessTexture",void 0),(0,i._)([(0,d.Cb)({type:Number})],T.prototype,"metallicFactor",void 0),(0,i._)([(0,d.Cb)({type:Number})],T.prototype,"roughnessFactor",void 0),T=(0,i._)([(0,R.j)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],T);let j=class extends s.wq{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,i._)([(0,M.J)({opaque:"opaque",mask:"mask",blend:"blend"})],j.prototype,"alphaMode",void 0),(0,i._)([(0,d.Cb)({type:Number})],j.prototype,"alphaCutoff",void 0),(0,i._)([(0,d.Cb)({type:Boolean})],j.prototype,"doubleSided",void 0),(0,i._)([(0,M.J)({none:"none",back:"back",front:"front"})],j.prototype,"cullFace",void 0),(0,i._)([(0,d.Cb)({type:P})],j.prototype,"normalTexture",void 0),(0,i._)([(0,d.Cb)({type:P})],j.prototype,"occlusionTexture",void 0),(0,i._)([(0,d.Cb)({type:P})],j.prototype,"emissiveTexture",void 0),(0,i._)([(0,d.Cb)({type:[Number]})],j.prototype,"emissiveFactor",void 0),(0,i._)([(0,d.Cb)({type:T})],j.prototype,"pbrMetallicRoughness",void 0),j=(0,i._)([(0,R.j)("esri.layer.support.I3SMaterialDefinition")],j);let w=class extends s.wq{};(0,i._)([(0,d.Cb)({type:String,json:{read:{source:["name","index"],reader:(W,G)=>null!=W?W:`${G.index}`}}})],w.prototype,"name",void 0),(0,i._)([(0,M.J)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],w.prototype,"format",void 0),w=(0,i._)([(0,R.j)("esri.layer.support.I3STextureFormat")],w);let N=class extends s.wq{constructor(){super(...arguments),this.atlas=!1}};(0,i._)([(0,d.Cb)({type:[w]})],N.prototype,"formats",void 0),(0,i._)([(0,d.Cb)({type:Boolean})],N.prototype,"atlas",void 0),N=(0,i._)([(0,R.j)("esri.layer.support.I3STextureSetDefinition")],N);let x=class extends s.wq{};(0,i._)([(0,M.J)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],x.prototype,"type",void 0),(0,i._)([(0,d.Cb)({type:Number})],x.prototype,"component",void 0),x=(0,i._)([(0,R.j)("esri.layer.support.I3SGeometryAttribute")],x);let v=class extends s.wq{};(0,i._)([(0,M.J)({draco:"draco"})],v.prototype,"encoding",void 0),(0,i._)([(0,d.Cb)({type:[String]})],v.prototype,"attributes",void 0),v=(0,i._)([(0,R.j)("esri.layer.support.I3SGeometryCompressedAttributes")],v);let L=class extends s.wq{constructor(){super(...arguments),this.offset=0}};(0,i._)([(0,d.Cb)({type:Number})],L.prototype,"offset",void 0),(0,i._)([(0,d.Cb)({type:x})],L.prototype,"position",void 0),(0,i._)([(0,d.Cb)({type:x})],L.prototype,"normal",void 0),(0,i._)([(0,d.Cb)({type:x})],L.prototype,"uv0",void 0),(0,i._)([(0,d.Cb)({type:x})],L.prototype,"color",void 0),(0,i._)([(0,d.Cb)({type:x})],L.prototype,"uvRegion",void 0),(0,i._)([(0,d.Cb)({type:x})],L.prototype,"featureId",void 0),(0,i._)([(0,d.Cb)({type:x})],L.prototype,"faceRange",void 0),(0,i._)([(0,d.Cb)({type:v})],L.prototype,"compressedAttributes",void 0),L=(0,i._)([(0,R.j)("esri.layer.support.I3SGeometryBuffer")],L);let f=class extends s.wq{};(0,i._)([(0,M.J)({triangle:"triangle"})],f.prototype,"topology",void 0),(0,i._)([(0,d.Cb)()],f.prototype,"geometryBuffers",void 0),f=(0,i._)([(0,R.j)("esri.layer.support.I3SGeometryDefinition")],f)},59787:(O,I,t)=>{t.d(I,{C:()=>i});const i={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}}}]);