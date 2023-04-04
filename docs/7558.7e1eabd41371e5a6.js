"use strict";(self.webpackChunkexample_app=self.webpackChunkexample_app||[]).push([[7558],{15572:(F,L,a)=>{a.d(L,{EV:()=>x,Fp:()=>A,GJ:()=>S,ne:()=>_,nn:()=>T,yG:()=>C,yP:()=>U});var l=a(62208),b=a(16730);function x(h,r){return{type:(0,b.UF)(r),value:h,unit:r}}function C(h,r){return{type:(0,b.UF)(r),value:h,unit:r}}function _(h,r){return{type:(0,b.UF)(r),value:h,unit:r}}function S(h,r,s="arithmetic"){return{type:(0,b.UF)(r),value:h,unit:r,rotationType:s}}function T(h,r){return x((0,b.En)(h.value,h.unit,r),r)}function A(h,r){return(0,l.Wi)(h)?r:(0,l.Wi)(r)||h.value>(0,b.En)(r.value,r.unit,h.unit)?h:r}const U=C(0,"meters")},15448:(F,L,a)=>{a.d(L,{h:()=>x});let l=C=>({vnodeSelector:"",properties:void 0,children:void 0,text:C.toString(),domNode:null}),b=(C,_,I)=>{for(let S=0,w=_.length;S<w;S++){let T=_[S];Array.isArray(T)?b(C,T,I):null!=T&&!1!==T&&("string"==typeof T&&(T=l(T)),I.push(T))}};function x(C,_,I){if(Array.isArray(_))I=_,_=void 0;else if(_&&("string"==typeof _||_.hasOwnProperty("vnodeSelector"))||I&&("string"==typeof I||I.hasOwnProperty("vnodeSelector")))throw new Error("h called with invalid arguments");let S,w;return I&&1===I.length&&"string"==typeof I[0]?S=I[0]:I&&(w=[],b(C,I,w),0===w.length&&(w=void 0)),{vnodeSelector:C,properties:_,children:w,text:""===S?void 0:S,domNode:null}}},1437:(F,L,a)=>{a.d(L,{p:()=>E});var l=a(17626),b=a(54024),x=a(62208),C=a(60330),_=a(77712),T=(a(85931),a(8314),a(90912),a(76898));const E=A=>{let c=class extends((0,C.v)(A)){constructor(){super(...arguments),this.parent=null,this._userInteractive=!1,this._interactiveViewModelCount=0}get interactive(){return this._interactiveViewModelCount>0||this._userInteractive}set interactive(U){this._userInteractive=U}get updating(){return!1}get visible(){return!(0,x.pC)(this.parent)||this.parent.visible&&!this.parent.suspended}set visible(U){void 0!==U?this._override("visible",U):this._clearOverride("visible")}forceInteractiveForViewModel(){return this._interactiveViewModelCount++,(0,b.kB)(()=>this._interactiveViewModelCount--)}};return(0,l._)([(0,_.Cb)({readOnly:!0})],c.prototype,"type",void 0),(0,l._)([(0,_.Cb)({constructOnly:!0})],c.prototype,"analysis",void 0),(0,l._)([(0,_.Cb)({constructOnly:!0})],c.prototype,"parent",void 0),(0,l._)([(0,_.Cb)({constructOnly:!0})],c.prototype,"view",void 0),(0,l._)([(0,_.Cb)({type:Boolean})],c.prototype,"interactive",null),(0,l._)([(0,_.Cb)()],c.prototype,"_userInteractive",void 0),(0,l._)([(0,_.Cb)({readOnly:!0})],c.prototype,"updating",null),(0,l._)([(0,_.Cb)()],c.prototype,"visible",null),(0,l._)([(0,_.Cb)()],c.prototype,"_interactiveViewModelCount",void 0),c=(0,l._)([(0,T.j)("esri.views.3d.analysis.AnalysisView3D")],c),c}},67214:(F,L,a)=>{a.d(L,{Kc:()=>V,jB:()=>G});var l=a(72392),b=a(62208),x=a(32917),C=a(23841),_=a(67831),I=a(84161),S=a(28093),w=a(68604),T=a(25858),E=a(17626),A=a(14517),c=a(77712),s=(a(85931),a(8314),a(90912),a(76898)),f=(a(50645),a(15448));a(62996);let v=class extends A.Z{constructor(d){super(d),this.startX=0,this.startY=0,this.endX=0,this.endY=0,this.width=1,this.color=[0,0,0,.5],this.visible=!0}get startPosition(){return[this.startX,this.startY]}set startPosition(d){this._set("startX",d[0]),this._set("startY",d[1])}get endPosition(){return[this.endX,this.endY]}set endPosition(d){this._set("endX",d[0]),this._set("endY",d[1])}get strokeStyle(){const d=this.color;return`rgba(${d[0]}, ${d[1]}, ${d[2]}, ${d[3]})`}get lineCap(){return"round"}render(){const{height:d,left:o,top:P,width:g,x1:D,x2:O,y1:Z,y2:z}=this._calculateCoordinates(m);return(0,f.h)("div",{classes:{"esri-line-overlay-item":!0},styles:{left:o+"px",top:P+"px",width:g+"px",height:d+"px",visibility:this.visible?"visible":"hidden"}},[(0,f.h)("svg",{width:g,height:d},[(0,f.h)("line",{x1:D,y1:Z,x2:O,y2:z,style:`stroke: ${this.strokeStyle}; stroke-width: ${this.width}; stroke-linecap: ${this.lineCap};`})])])}renderCanvas(d){if(!this.visible)return;d.strokeStyle=this.strokeStyle,d.lineWidth=this.width,d.lineCap=this.lineCap;const o=this._calculateCoordinates(m);d.beginPath(),d.moveTo(o.left+o.x1,o.top+o.y1),d.lineTo(o.left+o.x2,o.top+o.y2),d.stroke()}_calculateCoordinates(d){const o=Math.min(this.startX,this.endX),P=Math.max(this.startX,this.endX),g=Math.min(this.startY,this.endY),D=Math.max(this.startY,this.endY),O=this.width;return d.left=o-O,d.top=g-O,d.width=P-o+2*O,d.height=Math.max(20,D-g+2*O),d.x1=this.startX-o+O,d.y1=this.startY-g+O,d.x2=this.endX-o+O,d.y2=this.endY-g+O,d}};(0,E._)([(0,c.Cb)()],v.prototype,"startX",void 0),(0,E._)([(0,c.Cb)()],v.prototype,"startY",void 0),(0,E._)([(0,c.Cb)()],v.prototype,"endX",void 0),(0,E._)([(0,c.Cb)()],v.prototype,"endY",void 0),(0,E._)([(0,c.Cb)()],v.prototype,"startPosition",null),(0,E._)([(0,c.Cb)()],v.prototype,"endPosition",null),(0,E._)([(0,c.Cb)()],v.prototype,"width",void 0),(0,E._)([(0,c.Cb)()],v.prototype,"color",void 0),(0,E._)([(0,c.Cb)()],v.prototype,"visible",void 0),(0,E._)([(0,c.Cb)({readOnly:!0})],v.prototype,"strokeStyle",null),v=(0,E._)([(0,s.j)("esri.views.overlay.LineOverlayItem")],v);const m={left:0,top:0,width:0,height:0,x1:0,y1:0,x2:0,y2:0},M=v;var W=a(68371);class V extends w.l{constructor(o){super(o.view),this._handles=new l.Z,this._textItem=null,this._calloutItem=null,this._showCallout=!0,this._showText=!0,this._geometry=null,this._text="-",this._fontSize=14,this._distance=25,this._anchor="right",this.applyProps(o)}get geometry(){return this._geometry}set geometry(o){this._geometry=o,this._updateLabelPosition()}get textItem(){return this._textItem}get text(){return this._text}set text(o){this._text=o,this.attached&&(this._textItem.text=this._text)}get fontSize(){return this._fontSize}set fontSize(o){this._fontSize=o,this.attached&&(this._textItem.fontSize=this._fontSize)}get distance(){return this._distance}set distance(o){this._distance!==o&&(this._distance=o,this._updateLabelPosition())}get anchor(){return this._anchor}set anchor(o){this._anchor!==o&&(this._anchor=o,this._updateLabelPosition())}overlaps(o){return!!this.attached&&this.textItem.visible&&o.textItem.visible&&this.view.overlay.overlaps(this._textItem,o.textItem)}_updateLabelPosition(){if(!this.attached)return;this._showText=!1,this._showCallout=!1;const{geometry:o,view:P,visible:g}=this;if((0,b.pC)(o)&&P._stage)switch(o.type){case"point":if(!this._computeLabelPositionFromPoint(o.point,B))break;if(o.callout){const D=P.state.camera,O=o.callout.distance;(0,_.b)(R,R,[0,o.callout.offset]),D.renderToScreen(R,B),(0,_.a)(y,0,1),(0,_.f)(y,y,O*D.pixelRatio),(0,_.b)(y,y,R),D.renderToScreen(y,Y),this._showCallout=this._updatePosition(B,Y)}else this._textItem.position=[B[0],B[1]],this._textItem.anchor="center";this._showText=!0;break;case"corner":if(!this._computeLabelPositionFromCorner(o,this._distance,B,Y))break;this._showCallout=this._updatePosition(B,Y),this._showText=!0;break;case"segment":{if(!this._computeLabelPositionFromSegment(o,this._distance,this._anchor,B,Y))break;this._showText=!0;const D=this._updatePosition(B,Y);this._showCallout=!1!==o.callout&&D,this._showCallout||(this._textItem.anchor="center")}}this.updateVisibility(g)}_computeLabelPositionFromPoint(o,P){const g=this.view.state.camera;return g.projectToRenderScreen(o,R),!(R[2]<0||R[2]>1||(g.renderToScreen(R,P),0))}_computeLabelPositionFromCorner(o,P,g,D){if(!o)return!1;const O=this.view.state.camera;return J(o.left,1,O,K),(0,_.n)(K,K),J(o.right,0,O,N),(0,_.b)(y,K,N),(0,_.n)(y,y),(0,_.i)(y,y),O.projectToRenderScreen(o.left.endRenderSpace,R),!(R[2]<0||R[2]>1||(O.renderToScreen(R,g),(0,_.f)(y,y,P*O.pixelRatio),(0,_.b)(y,y,R),O.renderToScreen(y,D),0))}_computeLabelPositionFromSegment(o,P,g,D,O){if(!o)return!1;const Z=o.segment,z=this.view.state.camera;(0,T.CM)(Z.startRenderSpace,Z.endRenderSpace,z,K),(0,_.a)(y,-K[1],K[0]);let $=!1;switch(g){case"top":$=y[1]<0;break;case"bottom":$=y[1]>0;break;case"left":$=y[0]>0;break;case"right":$=y[0]<0}if($&&(0,_.n)(y,y),0===(0,_.o)(y))switch(g){case"top":y[1]=1;break;case"bottom":y[1]=-1;break;case"left":y[0]=-1;break;case"right":y[0]=1}return Z.eval(it[o.sampleLocation],Q),z.projectToRenderScreen(Q,R),!(R[2]<0||R[2]>1||(z.renderToScreen(R,D),(0,_.f)(y,y,P*z.pixelRatio),(0,_.b)(y,y,R),z.renderToScreen(y,O),0))}_updatePosition(o,P){if(P){const g=P[0]-o[0],D=P[1]-o[1];return this._textItem.position=[P[0],P[1]],this._textItem.anchor=Math.abs(g)>Math.abs(D)?g>0?"left":"right":D>0?"top":"bottom",this._calloutItem.startPosition=[o[0],o[1]],this._calloutItem.endPosition=[P[0],P[1]],!0}return this._textItem.position=[o[0],o[1]],this._textItem.anchor="center",!1}createResources(){this._textItem=new W.Z({visible:!0,text:this._text,fontSize:this._fontSize}),this._calloutItem=new M({visible:!0,width:2}),this._updateLabelPosition(),this.view.overlay.items.addMany([this._textItem,this._calloutItem]),this._handles.add((0,x.YP)(()=>this.view.state.camera,()=>this._updateLabelPosition()))}destroyResources(){this.view.overlay&&!this.view.overlay.destroyed&&this.view.overlay.items.removeMany([this._textItem,this._calloutItem]),this._handles.removeAll()}updateVisibility(o){this._textItem.visible=this._showText&&o,this._calloutItem.visible=this._showCallout&&o}}function J(d,o,P,g){d.eval(o,X,k),(0,I.a)(H,X,k),P.projectToRenderScreen(X,q),P.projectToRenderScreen(H,tt),(0,_.g)(g,st,et),(0,_.i)(g,g)}function G(d){switch(d){case"top":return"bottom";case"right":return"left";case"bottom":return"top";case"left":return"right"}}const X=(0,S.c)(),H=(0,S.c)(),k=(0,S.c)(),K=(0,C.gX)(),N=(0,C.gX)(),y=(0,C.gX)(),Q=(0,S.c)(),R=(0,C.J$)(),B=(0,C.s1)(),Y=(0,C.s1)(),q=(0,C.J$)(),et=q,tt=(0,C.J$)(),st=tt,it={start:0,center:.5,end:1}},64770:(F,L,a)=>{a.d(L,{u4:()=>w,y$:()=>S});var l=a(84161),b=a(28093),x=a(55915),C=a(12080),_=a(26242),I=a(98943);class S{constructor(h=(0,b.c)(),r=(0,b.c)()){this.startRenderSpace=h,this.endRenderSpace=r,this.type="euclidean"}eval(h,r,s){return(0,l.h)(r,this.startRenderSpace,this.endRenderSpace,h),s&&((0,l.b)(s,this.endRenderSpace,this.startRenderSpace),(0,l.n)(s,s)),r}createRenderGeometry(h,r){const s=[],p=[],f=(v,m)=>{const M=A;(0,l.b)(M,v,h),s.push([M[0],M[1],M[2]]),p.push([m[0],m[1],m[2]])},j=r.worldUpAtPosition(this.eval(.5,E),_.WM.get());return f(this.startRenderSpace,j),f(this.endRenderSpace,j),{points:s,normals:p}}static fromPositionAndVector(h,r,s=1){return(0,l.g)(E,r,s),(0,l.a)(E,h,E),new S((0,b.a)(h),(0,b.a)(E))}}class w{constructor(h,r,s){this.startRenderSpace=h,this.endRenderSpace=r,this.renderSpatialReference=s,this.type="geodesic",this._start=(0,b.c)(),this._end=(0,b.c)(),this._pcpf=(0,C.rS)(s),this._project=(0,x.Up)(s,this._pcpf),this._projectIn(h,this._start),this._projectIn(r,this._end)}_projectIn(h,r){this._project?(0,x.SH)(h,this.renderSpatialReference,r,this._pcpf):(0,l.c)(r,h)}eval(h,r,s){if(this._project)if(s){const p=A;(0,I.ek)(this._start,this._end,h,r,p),(0,l.a)(c,r,p),(0,x.SH)(r,this._pcpf,r,this.renderSpatialReference),(0,x.SH)(c,this._pcpf,c,this.renderSpatialReference),(0,l.b)(s,c,r),(0,l.n)(s,s)}else(0,I.ZA)(this._start,this._end,h,r),(0,x.SH)(r,this._pcpf,r,this.renderSpatialReference);else(0,l.h)(r,this._start,this._end,h),s&&((0,l.b)(s,this._end,this._start),(0,l.n)(s,s));return r}createRenderGeometry(h,r){const s=[],p=[],f=(v,m)=>{const M=c;(0,l.b)(M,v,h),s.push([M[0],M[1],M[2]]),p.push([m[0],m[1],m[2]])};for(let v=0;v<128;++v){const M=E,W=A;this.eval(v/127,M),r.worldUpAtPosition(M,W),f(M,W)}return{points:s,normals:p}}}const E=(0,b.c)(),A=(0,b.c)(),c=(0,b.c)()},68371:(F,L,a)=>{a.d(L,{Z:()=>r});var l=a(17626),b=a(14517),x=a(77712),S=(a(85931),a(8314),a(90912),a(76898)),T=(a(50645),a(15448));a(62996);const A={bottom:"esri-text-overlay-item-anchor-bottom","bottom-right":"esri-text-overlay-item-anchor-bottom-right","bottom-left":"esri-text-overlay-item-anchor-bottom-left",top:"esri-text-overlay-item-anchor-top","top-right":"esri-text-overlay-item-anchor-top-right","top-left":"esri-text-overlay-item-anchor-top-left",center:"esri-text-overlay-item-anchor-center",right:"esri-text-overlay-item-anchor-right",left:"esri-text-overlay-item-anchor-left"};let c=class extends b.Z{constructor(s){super(s),this.x=0,this.y=0,this.text="-",this.fontSize=14,this.anchor="center",this.visible=!0,this._backgroundColor="rgba(0, 0, 0, 0.6)",this._textColor="white",this._textShadowColor=[0,0,0],this._textShadowSize=1}get position(){return[this.x,this.y]}set position(s){this._set("x",s[0]),this._set("y",s[1])}get _textShadow(){const[s,p,f]=this._textColor;return`0 0 ${this._textShadowSize}px rgb(${s}, ${p}, ${f})`}get _padding(){return.5*this.fontSize}get _borderRadius(){return this._padding}render(){return(0,T.h)("div",{classes:this._cssClasses(),styles:{left:Math.floor(this.x)+"px",top:Math.floor(this.y)+"px",visibility:this.visible?"visible":"hidden",fontSize:this.fontSize+"px",lineHeight:this.fontSize+"px",backgroundColor:this._backgroundColor,color:this._textColor,padding:this._padding+"px",borderRadius:this._borderRadius+"px",textShadow:this._textShadow}},[this.text])}renderCanvas(s){if(!this.visible)return;const p=s.font.replace(/^(.*?)px/,"");s.font=`${this.fontSize}px ${p}`;const f=this._padding,j=this._borderRadius,v=s.measureText(this.text).width,m=this.fontSize,M=U[this.anchor];s.textAlign="center",s.textBaseline="middle";const W=v+2*f,V=m+2*f;this._roundedRect(s,this.x+M.x*W,this.y+M.y*V,W,V,j),s.fillStyle=this._backgroundColor,s.fill();const X=this.x+(M.x+.5)*W,H=this.y+(M.y+.5)*V;this._renderTextShadow(s,this.text,X,H),s.fillStyle=this._textColor,s.fillText(this.text,X,H)}_renderTextShadow(s,p,f,j){s.lineJoin="miter",s.fillStyle=`rgba(${this._textShadowColor[0]}, ${this._textShadowColor[1]}, ${this._textShadowColor[2]}, ${1/h.length})`;const v=this._textShadowSize;for(const[m,M]of h)s.fillText(p,f+v*m,j+v*M)}_roundedRect(s,p,f,j,v,m){s.beginPath(),s.moveTo(p,f+m),s.arcTo(p,f,p+m,f,m),s.lineTo(p+j-m,f),s.arcTo(p+j,f,p+j,f+m,m),s.lineTo(p+j,f+v-m),s.arcTo(p+j,f+v,p+j-m,f+v,m),s.lineTo(p+m,f+v),s.arcTo(p,f+v,p,f+v-m,m),s.closePath()}_cssClasses(){const s={"esri-text-overlay-item":!0};for(const p in A)s[A[p]]=this.anchor===p;return s}};(0,l._)([(0,x.Cb)()],c.prototype,"x",void 0),(0,l._)([(0,x.Cb)()],c.prototype,"y",void 0),(0,l._)([(0,x.Cb)()],c.prototype,"position",null),(0,l._)([(0,x.Cb)()],c.prototype,"text",void 0),(0,l._)([(0,x.Cb)()],c.prototype,"fontSize",void 0),(0,l._)([(0,x.Cb)()],c.prototype,"anchor",void 0),(0,l._)([(0,x.Cb)()],c.prototype,"visible",void 0),(0,l._)([(0,x.Cb)()],c.prototype,"_backgroundColor",void 0),(0,l._)([(0,x.Cb)()],c.prototype,"_textColor",void 0),(0,l._)([(0,x.Cb)()],c.prototype,"_textShadowColor",void 0),(0,l._)([(0,x.Cb)()],c.prototype,"_textShadowSize",void 0),(0,l._)([(0,x.Cb)()],c.prototype,"_textShadow",null),(0,l._)([(0,x.Cb)()],c.prototype,"_padding",null),(0,l._)([(0,x.Cb)()],c.prototype,"_borderRadius",null),c=(0,l._)([(0,S.j)("esri.views.overlay.TextOverlayItem")],c);const U={bottom:{x:-.5,y:-1,textAlign:"center",textBaseline:"bottom"},"bottom-left":{x:0,y:-1,textAlign:"left",textBaseline:"bottom"},"bottom-right":{x:-1,y:-1,textAlign:"right",textBaseline:"bottom"},center:{x:-.5,y:-.5,textAlign:"center",textBaseline:"middle"},left:{x:0,y:-.5,textAlign:"left",textBaseline:"middle"},right:{x:-1,y:-.5,textAlign:"right",textBaseline:"middle"},top:{x:-.5,y:0,textAlign:"center",textBaseline:"top"},"top-left":{x:0,y:0,textAlign:"left",textBaseline:"top"},"top-right":{x:-1,y:0,textAlign:"right",textBaseline:"top"}},h=[];for(let p=0;p<360;p+=22.5)h.push([Math.cos(Math.PI*p/180),Math.sin(Math.PI*p/180)]);const r=c}}]);