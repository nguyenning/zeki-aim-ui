"use strict";var De=Object.defineProperty,je=Object.defineProperties,ke=Object.getOwnPropertyDescriptors,Ne=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable,ve=(E,h,y)=>h in E?De(E,h,{enumerable:!0,configurable:!0,writable:!0,value:y}):E[h]=y,A=(E,h)=>{for(var y in h||(h={}))Le.call(h,y)&&ve(E,y,h[y]);if(Ne)for(var y of Ne(h))Ie.call(h,y)&&ve(E,y,h[y]);return E},ee=(E,h)=>je(E,ke(h));(self.webpackChunkexample_app=self.webpackChunkexample_app||[]).push([[3774],{58775:(E,h,y)=>{y.d(h,{O3:()=>me,lG:()=>ie,my:()=>ge,q9:()=>w});var S=y(26584),K=y(66385),v=y(88071),g=y(36630);const b={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function w(r){return b[r]}function*I(r){switch(r.type){case"Feature":yield r;break;case"FeatureCollection":for(const s of r.features)s&&(yield s)}}function*W(r){if(!r)return null;switch(r.type){case"Point":yield r.coordinates;break;case"LineString":case"MultiPoint":yield*r.coordinates;break;case"MultiLineString":case"Polygon":for(const s of r.coordinates)yield*s;break;case"MultiPolygon":for(const s of r.coordinates)for(const l of s)yield*l}}function $(r){for(const s of r)if(s.length>2)return!0;return!1}function ne(r){let s=0;for(let l=0;l<r.length;l++){const p=r[l],m=r[(l+1)%r.length];s+=p[0]*m[1]-m[0]*p[1]}return s<=0}function re(r){const s=r[0],l=r[r.length-1];return s[0]===l[0]&&s[1]===l[1]&&s[2]===l[2]||r.push(s),r}function pe(r,s,l){switch(s.type){case"LineString":return function fe(r,s,l){return V(r,s.coordinates,l),r}(r,s,l);case"MultiLineString":return function G(r,s,l){for(const p of s.coordinates)V(r,p,l);return r}(r,s,l);case"MultiPoint":return function D(r,s,l){return V(r,s.coordinates,l),r}(r,s,l);case"MultiPolygon":return function oe(r,s,l){for(const p of s.coordinates){M(r,p[0],l);for(let m=1;m<p.length;m++)z(r,p[m],l)}return r}(r,s,l);case"Point":return function ye(r,s,l){return B(r,s.coordinates,l),r}(r,s,l);case"Polygon":return function _(r,s,l){const p=s.coordinates;M(r,p[0],l);for(let m=1;m<p.length;m++)z(r,p[m],l);return r}(r,s,l)}}function M(r,s,l){const p=re(s);!function le(r){return!ne(r)}(p)?V(r,p,l):se(r,p,l)}function z(r,s,l){const p=re(s);!function ce(r){return ne(r)}(p)?V(r,p,l):se(r,p,l)}function V(r,s,l){for(const p of s)B(r,p,l);r.lengths.push(s.length)}function se(r,s,l){for(let p=s.length-1;p>=0;p--)B(r,s[p],l);r.lengths.push(s.length)}function B(r,s,l){const[p,m,j]=s;r.coords.push(p,m),l.hasZ&&r.coords.push(j||0)}function de(r){switch(typeof r){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function me(r){if(!r)throw new S.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==r.type&&"FeatureCollection"!==r.type)throw new S.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:r});const{crs:s}=r;if(!s)return;const l="string"==typeof s?s:"name"===s.type?s.properties.name:"EPSG"===s.type?s.properties.code:null,p=new RegExp(".*(CRS84H?|4326)$","i");if(!l||!p.test(l))throw new S.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:s})}function ge(r,s={}){const l=[],p=new Set,m=new Set;let j,Z=!1,F=null,O=!1,{geometryType:N=null}=s,H=!1;for(const Y of I(r)){const{geometry:k,properties:U,id:R}=Y;if((!k||(N||(N=w(k.type)),w(k.type)===N))&&(Z||(Z=$(W(k))),O||(O=null!=R,O&&(j=typeof R,F=Object.keys(U).filter(L=>U[L]===R))),O&&null!=R&&(F.length>1?F=F.filter(L=>U[L]===R):1===F.length&&(F=U[F[0]]===R?F:[])),!H&&U)){let L=!0;for(const P in U){if(p.has(P))continue;const Q=U[P];if(null==Q){L=!1,m.add(P);continue}const ae=de(Q);"unknown"!==ae?(m.delete(P),p.add(P),l.push({name:P,alias:P,type:ae})):m.add(P)}H=L}}const X=F&&1===F.length&&F[0]||null;if(X)for(const Y of l)if(Y.name===X&&(0,g.H7)(Y)){Y.type="esriFieldTypeOID";break}return{fields:l,geometryType:N,hasZ:Z,objectIdFieldName:X,objectIdFieldType:j,unknownFields:Array.from(m)}}function ie(r,s){return Array.from(function*te(r,s={}){var m;const{geometryType:l,objectIdField:p}=s;for(const j of r){const{geometry:Z,properties:F,id:O}=j;if(Z&&w(Z.type)!==l)continue;const N=F||{};let H=null!=(m=N[p])?m:null;p&&null!=O&&!N[p]&&(N[p]=H=O),yield new K.u_(Z?pe(new v.Z,Z,s):null,N,null,H)}}(I(r),s))}},83774:(E,h,y)=>{y.d(h,{M8:()=>z,ft:()=>X,FU:()=>p,Bm:()=>Fe,be:()=>Y,eB:()=>Q});var S=y(15861),v=(y(29132),y(84792)),g=y(26584),b=y(56354),w=y(62208),I=y(10699),W=y(21726),te=y(55915),$=y(37053),le=y(71774),ce=y(58775);function ne(o){var n;return null!=(n=function pe(o){var J,ue,Pe,Ce;const n=fe.exec(o);if(!n)return null;const t=n.groups,i=+t.year,a=+t.month-1,u=+t.day,c=+(null!=(J=t.hours)?J:"0"),f=+(null!=(ue=t.minutes)?ue:"0"),d=+(null!=(Pe=t.seconds)?Pe:"0");if(c>23||f>59||d>59)return null;const T=null!=(Ce=t.ms)?Ce:"0",x=T?+T.padEnd(3,"0").substring(0,3):0;let C;return C=t.isUTC?Date.UTC(i,a,u,c,f,d,x):t.offsetSign?6e4*("+"===t.offsetSign?-1:1)*(60*+t.offsetHours+ +t.offsetMinutes)+Date.UTC(i,a,u,c,f,d,x):new Date(i,a,u,c,f,d,x).getTime(),Number.isNaN(C)?null:C}(o))?n:function re(o){const n=new Date(o).getTime();return Number.isNaN(n)?null:n}(o)}const fe=new RegExp("^(?:(?<year>-?\\d{4,})-(?<month>\\d{2})-(?<day>\\d{2}))(?:T(?<hours>\\d{2}):(?<minutes>\\d{2}):(?<seconds>\\d{2})(?:\\.(?<ms>\\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\\+|-)(?<offsetHours>\\d{2}):(?<offsetMinutes>\\d{2})))?$");var G=y(7255),D=y(36255),oe=y(65234),ye=y(2004);const _="xlink:href",M="2.0.0",z="__esri_wfs_id__",V="wfs-layer:getWFSLayerTypeInfo-error",se="wfs-layer:empty-service",B="wfs-layer:feature-type-not-found",ge="wfs-layer:malformed-json",ie="wfs-layer:unknown-geometry-type",s="wfs-layer:unsupported-spatial-reference";function p(o,n){return m.apply(this,arguments)}function m(){return(m=(0,S.Z)(function*(o,n){const t=j((yield(0,v.default)(o,{responseType:"text",query:A({SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:M},null==n?void 0:n.customParameters),signal:null==n?void 0:n.signal})).data);return O(o,t),t})).apply(this,arguments)}function j(o){const n=xe(o);(function Oe(o){const n=o.firstElementChild.getAttribute("version");if(n&&n!==M)throw new g.Z("wfs-layer:unsupported-wfs-version",`Unsupported WFS version ${n}. Supported version: ${M}`)})(n),Se(n);const t=n.firstElementChild,i=(0,b.Fs)(function N(o){return(0,G.H)(o,{FeatureTypeList:{FeatureType:n=>{const t={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},i=new Set([4326]),a=u=>{var f,d;const c=parseInt(null==(d=null==(f=u.textContent.match(new RegExp("(?<wkid>\\d+$)","i")))?void 0:f.groups)?void 0:d.wkid,10);Number.isNaN(c)||i.add(c)};return(0,G.h)(n,{Name:u=>{const{name:c,prefix:f}=q(u.textContent);t.typeName=`${f}:${c}`,t.name=c,t.namespacePrefix=f,t.namespaceUri=u.lookupNamespaceURI(f)},Abstract:u=>{t.description=u.textContent},Title:u=>{t.title=u.textContent},WGS84BoundingBox:u=>{t.extent=function H(o){let n,t,i,a;for(const u of o.children)switch(u.localName){case"LowerCorner":[n,t]=u.textContent.split(" ").map(c=>Number.parseFloat(c));break;case"UpperCorner":[i,a]=u.textContent.split(" ").map(c=>Number.parseFloat(c))}return{xmin:n,ymin:t,xmax:i,ymax:a,spatialReference:$.Zn}}(u)},DefaultSRS:a,DefaultCRS:a,OtherSRS:a,OtherCRS:a}),t.title||(t.title=t.name),t.supportedSpatialReferences.push(...i),t}}})}(t));return{operations:F(t),get featureTypes(){return Array.from(i())},readFeatureTypes:i}}const Z=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function F(o){let n=!1;const t={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if((0,G.h)(o,{OperationsMetadata:{Operation:i=>{switch(i.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:a=>{t.GetCapabilities.url=a.getAttribute(_)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:a=>{t.DescribeFeatureType.url=a.getAttribute(_)}}}};case"GetFeature":return{DCP:{HTTP:{Get:a=>{t.GetFeature.url=a.getAttribute(_)}}},Parameter:a=>{if("outputFormat"===a.getAttribute("name"))return{AllowedValues:{Value:u=>{const c=u.textContent;Z.has(c.toLowerCase())&&(t.GetFeature.outputFormat=c)}}}}}}},Constraint:i=>{switch(i.getAttribute("name")){case"KVPEncoding":return{DefaultValue:a=>{n="true"===a.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:a=>{t.GetFeature.supportsPagination="true"===a.textContent.toLowerCase()}}}}}}),!n)throw new g.Z("wfs-layer:kvp-encoding-not-supported","WFS service doesn't support key/value pair (KVP) encoding");if((0,w.Wi)(t.GetFeature.outputFormat))throw new g.Z("wfs-layer:geojson-not-supported","WFS service doesn't support GeoJSON output format");return t}function O(o,n){(0,W.$U)(o)&&((0,W.D6)(o,n.operations.DescribeFeatureType.url,!0)&&(n.operations.DescribeFeatureType.url=(0,W.hO)(n.operations.DescribeFeatureType.url)),(0,W.D6)(o,n.operations.GetFeature.url,!0)&&(n.operations.GetFeature.url=(0,W.hO)(n.operations.GetFeature.url)))}function X(o,n,t){return(0,b.sE)(o,i=>t?i.name===n&&i.namespaceUri===t:i.typeName===n||i.name===n)}function Y(o,n,t){return k.apply(this,arguments)}function k(){return(k=(0,S.Z)(function*(o,n,t,i={}){var C;const{featureType:a,extent:u}=yield U(o,n,t,i),{fields:c,geometryType:f,swapXY:d,objectIdField:T,geometryField:x}=yield L(o,a.typeName,i);return{url:o.operations.GetCapabilities.url,name:a.name,namespaceUri:a.namespaceUri,fields:c,geometryField:x,geometryType:f,objectIdField:T,spatialReference:null!=(C=i.spatialReference)?C:oe.Z.WGS84,extent:u,swapXY:d,wfsCapabilities:o,customParameters:i.customParameters}})).apply(this,arguments)}function U(o,n,t){return R.apply(this,arguments)}function R(){return(R=(0,S.Z)(function*(o,n,t,i={}){const{spatialReference:a=oe.Z.WGS84}=i,u=o.readFeatureTypes(),c=n?X(u,n,t):u.next().value;if((0,w.Wi)(c))throw n?new g.Z(B,`The type '${n}' could not be found in the service`):new g.Z(se,"The service is empty");let f=new ye.Z(ee(A({},c.extent),{spatialReference:a}));if(!(0,$.fS)(a,$.Zn))try{yield(0,te.iQ)($.Zn,a,void 0,i),f=(0,te.iV)(f,$.Zn)}catch(d){throw new g.Z(s,"Projection not supported")}return{extent:f,spatialReference:a,featureType:c}})).apply(this,arguments)}function L(o,n){return P.apply(this,arguments)}function P(){return(P=(0,S.Z)(function*(o,n,t={}){const[i,a]=yield(0,I.as)([Ge(o.operations.DescribeFeatureType.url,n,t),ae(o,n,t)]);if(i.error||a.error)throw new g.Z(V,`An error occurred while getting info about the feature type '${n}'`,{error:i.error||a.error});const{fields:u,errors:c}=i.value,f=i.value.geometryType||a.value.geometryType,d=a.value.swapXY;if((0,w.Wi)(f))throw new g.Z(ie,`The geometry type could not be determined for type '${n}`,{typeName:n,geometryType:f,fields:u,errors:c});return ee(A({},Q(u)),{geometryType:f,swapXY:d})})).apply(this,arguments)}function Q(o){var i;const n=o.find(a=>"geometry"===a.type);let t=o.find(a=>"oid"===a.type);return o=o.filter(a=>"geometry"!==a.type),t||(t=new D.Z({name:z,type:"oid",alias:z}),o.unshift(t)),{geometryField:null!=(i=null==n?void 0:n.name)?i:null,objectIdField:t.name,fields:o}}function ae(o,n){return he.apply(this,arguments)}function he(){return(he=(0,S.Z)(function*(o,n,t={}){var d;let i,a=!1;const[u,c]=yield Promise.all([Fe(o.operations.GetFeature.url,n,o.operations.GetFeature.outputFormat,ee(A({},t),{count:1})),(0,v.default)(o.operations.GetFeature.url,{responseType:"text",query:Ee(n,void 0,ee(A({},t),{count:1})),signal:null==t?void 0:t.signal})]),f="FeatureCollection"===u.type&&(null==(d=u.features[0])?void 0:d.geometry);if(f){let T;switch(i=le.Mk.fromJSON((0,ce.q9)(f.type)),f.type){case"Point":T=f.coordinates;break;case"LineString":case"MultiPoint":T=f.coordinates[0];break;case"MultiLineString":case"Polygon":T=f.coordinates[0][0];break;case"MultiPolygon":T=f.coordinates[0][0][0]}const x=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(c.data);if(x){const C=T[0].toFixed(3),J=T[1].toFixed(3),ue=parseFloat(x[1]).toFixed(3);C===parseFloat(x[2]).toFixed(3)&&J===ue&&(a=!0)}}return{geometryType:i,swapXY:a}})).apply(this,arguments)}function Ge(o,n,t){return we.apply(this,arguments)}function we(){return(we=(0,S.Z)(function*(o,n,t){return Ze(n,(yield(0,v.default)(o,{responseType:"text",query:A({SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:M,TYPENAME:n},null==t?void 0:t.customParameters),signal:null==t?void 0:t.signal})).data)})).apply(this,arguments)}function Ze(o,n){const{name:t}=q(o),i=xe(n);Se(i);const a=(0,b.sE)((0,G.H)(i.firstElementChild,{element:u=>({name:u.getAttribute("name"),typeName:q(u.getAttribute("type")).name})}),({name:u})=>u===t);if((0,w.pC)(a)){const u=(0,b.sE)((0,G.H)(i.firstElementChild,{complexType:c=>c}),c=>c.getAttribute("name")===a.typeName);if((0,w.pC)(u))return function Me(o){const n=[],t=[];let i;const a=(0,G.H)(o,{complexContent:{extension:{sequence:{element:u=>u}}}});for(const u of a){const c=u.getAttribute("name");if(!c)continue;let f,d;if(u.hasAttribute("type")?f=q(u.getAttribute("type")).name:(0,G.h)(u,{simpleType:{restriction:C=>(f=q(C.getAttribute("base")).name,{maxLength:J=>{d=+J.getAttribute("value")}})}}),!f)continue;const T="true"===u.getAttribute("nillable");let x=!1;switch(f.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":t.push(new D.Z({name:c,alias:c,type:"integer",nullable:T}));break;case"float":case"double":case"decimal":t.push(new D.Z({name:c,alias:c,type:"double",nullable:T}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":t.push(new D.Z({name:c,alias:c,type:"string",nullable:T,length:null!=d?d:255}));break;case"datetime":case"date":t.push(new D.Z({name:c,alias:c,type:"date",nullable:T,length:null!=d?d:36}));break;case"pointpropertytype":i="point",x=!0;break;case"multipointpropertytype":i="multipoint",x=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":i="polyline",x=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":i="polygon",x=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":x=!0,n.push(new g.Z(ie,`geometry type '${f}' is not supported`,{type:(new XMLSerializer).serializeToString(o)}));break;default:n.push(new g.Z("wfs-layer:unknown-field-type",`Unknown field type '${f}'`,{type:(new XMLSerializer).serializeToString(o)}))}x&&t.push(new D.Z({name:c,alias:c,type:"geometry",nullable:T}))}for(const u of t)if("integer"===u.type&&!u.nullable&&Re.has(u.name.toLowerCase())){u.type="oid";break}return{geometryType:i,fields:t,errors:n}}(u)}throw new g.Z(B,`Type '${o}' not found in document`,{document:(new XMLSerializer).serializeToString(i)})}const Re=new Set(["objectid","fid"]);function Fe(o,n,t,i){return be.apply(this,arguments)}function be(){return(be=(0,S.Z)(function*(o,n,t,i){var u;let{data:a}=yield(0,v.default)(o,{responseType:"text",query:Ee(n,t,i),signal:null==i?void 0:i.signal});a=a.replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{if(null!=(u=null==i?void 0:i.dateFields)&&u.length){const c=new Set(i.dateFields);return JSON.parse(a,(f,d)=>c.has(f)?ne(d):d)}return JSON.parse(a)}catch(c){throw new g.Z(ge,"Error while parsing the\xa0response",{response:a,error:c})}})).apply(this,arguments)}function Ee(o,n,t){return A({SERVICE:"WFS",REQUEST:"GetFeature",VERSION:M,TYPENAMES:o,OUTPUTFORMAT:n,SRSNAME:"EPSG:4326",STARTINDEX:null==t?void 0:t.startIndex,COUNT:null==t?void 0:t.count},null==t?void 0:t.customParameters)}function xe(o){return(new DOMParser).parseFromString(o.trim(),"text/xml")}function q(o){const[n,t]=o.split(":");return{prefix:t?n:"",name:null!=t?t:n}}function Se(o){let n,t;if((0,G.h)(o.firstElementChild,{Exception:i=>(n=i.getAttribute("exceptionCode"),{ExceptionText:a=>{t=a.textContent}})}),n)throw new g.Z(`wfs-layer:${n}`,t)}},7255:(E,h,y)=>{function S(v,g){for(const b of v.children)if(b.localName in g){const w=g[b.localName];if("function"==typeof w){const I=w(b);I&&S(b,I)}else S(b,w)}}function*K(v,g){for(const b of v.children)if(b.localName in g){const w=g[b.localName];"function"==typeof w?yield w(b):yield*K(b,w)}}y.d(h,{H:()=>K,h:()=>S})}}]);