"use strict";(self.webpackChunkexample_app=self.webpackChunkexample_app||[]).push([[375],{17926:(z,U,a)=>{var l,p,o;a.d(U,{B:()=>p,P:()=>l}),(o=l||(l={}))[o.None=0]="None",o[o.Int16=1]="Int16",o[o.Int32=2]="Int32",function(o){o[o.Replace=0]="Replace",o[o.Outside=1]="Outside",o[o.Inside=2]="Inside",o[o.Finished=3]="Finished"}(p||(p={}))},30375:(z,U,a)=>{a.r(U),a.d(U,{destroyContext:()=>Y,dracoDecompressPointCloudData:()=>g,filterObbsForModifications:()=>R,filterObbsForModificationsSync:()=>K,initialize:()=>O,interpretObbModificationResults:()=>se,process:()=>_,setLegacySchema:()=>H,setModifications:()=>k,setModificationsSync:()=>G,test:()=>re});var l=a(15861),p=a(62208),o=a(55713),v=a(17926),I=a(54346);function T(e){return(0,I.V)(`esri/libs/i3s/${e}`)}let b;var C=a(52565);function _(e){return t.apply(this,arguments)}function t(){return(t=(0,l.Z)(function*(e){yield O();const n=[e.geometryBuffer];return{result:W(e,n),transferList:n}})).apply(this,arguments)}function g(e){return h.apply(this,arguments)}function h(){return(h=(0,l.Z)(function*(e){var B;yield O();const n=[e.geometryBuffer],{geometryBuffer:i}=e,d=i.byteLength,f=r._malloc(d),P=new Uint8Array(r.HEAPU8.buffer,f,d);P.set(new Uint8Array(i));const u=r.dracoDecompressPointCloudData(f,P.byteLength);if(r._free(f),u.error.length>0)throw`i3s.wasm: ${u.error}`;const D=(null==(B=u.featureIds)?void 0:B.length)>0?(0,o.tP)(u.featureIds):null,F=(0,o.tP)(u.positions);return D&&n.push(D.buffer),n.push(F.buffer),{result:{positions:F,featureIds:D},transferList:n}})).apply(this,arguments)}function R(e){return E.apply(this,arguments)}function E(){return(E=(0,l.Z)(function*(e){yield O(),K(e);const n={buffer:e.buffer};return{result:n,transferList:[n.buffer]}})).apply(this,arguments)}function k(e){return S.apply(this,arguments)}function S(){return(S=(0,l.Z)(function*(e){yield O(),G(e)})).apply(this,arguments)}function H(e){return N.apply(this,arguments)}function N(){return(N=(0,l.Z)(function*(e){yield O(),r.setLegacySchema(e.context,e.jsonSchema)})).apply(this,arguments)}function Y(e){Q(e)}let M,r;function G(e){const n=e.modifications,i=r._malloc(8*n.length),d=new Float64Array(r.HEAPU8.buffer,i,n.length);for(let f=0;f<n.length;++f)d[f]=n[f];r.setModifications(e.context,i,n.length,e.isGeodetic),r._free(i)}function W(e,n){if(!r)return null;const{context:i,localOrigin:d,globalTrafo:f,mbs:P,obb:u,elevationOffset:D,geometryBuffer:F,geometryDescriptor:B,indexToVertexProjector:ie,vertexToRenderProjector:ae}=e,Z=r._malloc(F.byteLength),j=r._malloc(33*Float64Array.BYTES_PER_ELEMENT),X=new Uint8Array(r.HEAPU8.buffer,Z,F.byteLength);X.set(new Uint8Array(F));const c=new Float64Array(r.HEAPU8.buffer,j,33);x(c,d);let m=c.byteOffset+3*c.BYTES_PER_ELEMENT,y=new Float64Array(c.buffer,m);x(y,f),m+=16*c.BYTES_PER_ELEMENT,y=new Float64Array(c.buffer,m),x(y,P),m+=4*c.BYTES_PER_ELEMENT,(0,p.pC)(u)&&(y=new Float64Array(c.buffer,m),x(y,u.center),m+=3*c.BYTES_PER_ELEMENT,y=new Float64Array(c.buffer,m),x(y,u.halfSize),m+=3*c.BYTES_PER_ELEMENT,y=new Float64Array(c.buffer,m),x(y,u.quaternion));const q=B,fe={isDraco:!1,isLegacy:!1,color:e.layouts.some(L=>L.some(w=>"color"===w.name)),normal:e.needNormals&&e.layouts.some(L=>L.some(w=>"normalCompressed"===w.name)),uv0:e.layouts.some(L=>L.some(w=>"uv0"===w.name)),uvRegion:e.layouts.some(L=>L.some(w=>"uvRegion"===w.name)),featureIndex:q.featureIndex},s=r.process(i,!!e.obb,Z,X.byteLength,q,fe,j,D,ie,ae,e.normalReferenceFrame);if(r._free(j),r._free(Z),s.error.length>0)throw`i3s.wasm: ${s.error}`;if(s.discarded)return null;const V=s.componentOffsets.length>0?(0,o.tP)(s.componentOffsets):null,$=s.featureIds.length>0?(0,o.tP)(s.featureIds):null,ee=(0,o.tP)(s.interleavedVertedData).buffer,te=(0,o.tP)(s.indicesType===v.P.Int16?new Uint16Array(s.indices.buffer,s.indices.byteOffset,s.indices.byteLength/2):new Uint32Array(s.indices.buffer,s.indices.byteOffset,s.indices.byteLength/4)),ne=(0,o.tP)(s.positions),oe=(0,o.tP)(s.positionIndicesType===v.P.Int16?new Uint16Array(s.positionIndices.buffer,s.positionIndices.byteOffset,s.positionIndices.byteLength/2):new Uint32Array(s.positionIndices.buffer,s.positionIndices.byteOffset,s.positionIndices.byteLength/4)),ue={layout:e.layouts[0],interleavedVertexData:ee,indices:te,hasColors:s.hasColors,hasModifications:s.hasModifications,positionData:{data:ne,indices:oe}};return $&&n.push($.buffer),V&&n.push(V.buffer),n.push(ee),n.push(te.buffer),n.push(ne.buffer),n.push(oe.buffer),{componentOffsets:V,featureIds:$,transformedGeometry:ue,obb:s.obb}}function se(e){return 0===e?C.O4.Unmodified:1===e?C.O4.PotentiallyModified:2===e?C.O4.Culled:C.O4.Unknown}function K(e){const{context:n,buffer:i}=e,d=r._malloc(i.byteLength),f=i.byteLength/Float64Array.BYTES_PER_ELEMENT,P=new Float64Array(r.HEAPU8.buffer,d,f),u=new Float64Array(i);P.set(u),r.filterOBBs(n,d,f),u.set(P),r._free(d)}function Q(e){r&&r.destroy(e)}function x(e,n){for(let i=0;i<n.length;++i)e[i]=n[i]}function O(){return r?Promise.resolve():(M||(M=function A(){return b||(b=new Promise(e=>a.e(5979).then(a.bind(a,85979)).then(n=>n.i).then(({default:n})=>{const i=n({locateFile:T,onRuntimeInitialized:()=>e(i)});delete i.then})).catch(e=>{throw e})),b}().then(e=>{r=e,M=null})),M)}const re={transform:W,destroy:Q}},52565:(z,U,a)=>{a.d(U,{$i:()=>p,FE:()=>b,Hw:()=>A,NB:()=>C,O4:()=>I,U_:()=>v,oQ:()=>_,rw:()=>o,w5:()=>T});var v,I,A,T,b,t,l=a(97126);class p{constructor(g,h){this.id=g,this.mbs=h,this.renderMbs=(0,l.f)(0,0,0,-1),this.elevationRange=null}}class o{constructor(){this.min=1/0,this.max=-1/0,this.valid=!1}}(t=v||(v={}))[t.Unmodified=0]="Unmodified",t[t.Culled=1]="Culled",t[t.NotChecked=2]="NotChecked",function(t){t[t.Unmodified=0]="Unmodified",t[t.PotentiallyModified=1]="PotentiallyModified",t[t.Culled=2]="Culled",t[t.Unknown=3]="Unknown",t[t.NotChecked=4]="NotChecked"}(I||(I={}));class C extends p{constructor(g,h,R,E,k,S,H,N,Y,M){super(g,R),this.index=h,this.childCount=E,this.level=k,this.resources=S,this.version=H,this.lodMetric=N,this.maxError=Y,this.numFeatures=M,this.failed=!1,this.cacheState=A.Unknown,this.vertexCount=0,this.memory=0,this.childrenLoaded=0,this.hasModifications=!1,this.imModificationImpact=I.NotChecked}}(function(t){t[t.Unknown=0]="Unknown",t[t.Uncached=1]="Uncached",t[t.Cached=2]="Cached"})(A||(A={})),function(t){t[t.None=0]="None",t[t.MaxScreenThreshold=1]="MaxScreenThreshold",t[t.ScreenSpaceRelative=2]="ScreenSpaceRelative",t[t.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",t[t.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(T||(T={})),function(t){t[t.Hole=0]="Hole",t[t.Leaf=1]="Leaf"}(b||(b={}));class _{constructor(g,h,R,E){this.nodeHasLOD=g,this.isChosen=h,this.lodLevel=R,this.version=E}}}}]);