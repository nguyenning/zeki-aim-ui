"use strict";(self.webpackChunkexample_app=self.webpackChunkexample_app||[]).push([[7692],{60295:(ct,tt,K)=>{K.d(tt,{Z:()=>rt});var J,W=K(17626),G=(K(8314),K(26584)),et=K(86810),it=K(58817),st=K(63290),lt=K(62208),$=K(77712),nt=K(66656),ot=K(76898);const Q=st.Z.getLogger("esri.layers.support.PixelBlock");let V=J=class extends et.wq{constructor(y){super(y),this.width=null,this.height=null,this.pixelType="f32",this.validPixelCount=null,this.mask=null,this.maskIsAlpha=!1,this.pixels=null,this.statistics=null}static createEmptyBand(y,g){return new(J.getPixelArrayConstructor(y))(g)}static getPixelArrayConstructor(y){let g;switch(y){case"u1":case"u2":case"u4":case"u8":g=Uint8Array;break;case"u16":g=Uint16Array;break;case"u32":g=Uint32Array;break;case"s8":g=Int8Array;break;case"s16":g=Int16Array;break;case"s32":g=Int32Array;break;case"f32":case"c64":case"c128":case"unknown":g=Float32Array;break;case"f64":g=Float64Array}return g}castPixelType(y){if(!y)return"f32";let g=y.toLowerCase();return["u1","u2","u4"].includes(g)?g="u8":["unknown","u8","s8","u16","s16","u32","s32","f32","f64"].includes(g)||(g="f32"),g}getPlaneCount(){return this.pixels&&this.pixels.length}addData(y){if(!y.pixels||y.pixels.length!==this.width*this.height)throw new G.Z("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");this.pixels||(this.pixels=[]),this.statistics||(this.statistics=[]),this.pixels.push(y.pixels),this.statistics.push(y.statistics||{minValue:null,maxValue:null})}getAsRGBA(){const y=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"s8":case"s16":case"u16":case"s32":case"u32":case"f32":case"f64":this._fillFromNon8Bit(y);break;default:this._fillFrom8Bit(y)}return new Uint8ClampedArray(y)}getAsRGBAFloat(){const y=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(y),y}updateStatistics(){this.statistics=this.pixels.map(v=>this._calculateBandStatistics(v,this.mask));const y=this.mask;let g=0;if(y)for(let v=0;v<y.length;v++)y[v]&&g++;else g=this.width*this.height;this.validPixelCount=g}clamp(y){if(!y||"f64"===y||"f32"===y)return;let g;switch(y){case"u8":g=[0,255];break;case"u16":g=[0,65535];break;case"u32":g=[0,4294967295];break;case"s8":g=[-128,127];break;case"s16":g=[-32768,32767];break;case"s32":g=[-2147483648,2147483647];break;default:g=[-34e38,34e38]}const[v,C]=g,T=this.pixels,U=this.width*this.height,k=T.length;let B,I,R;const i=[];for(let a=0;a<k;a++){R=J.createEmptyBand(y,U),B=T[a];for(let t=0;t<U;t++)I=B[t],R[t]=I>C?C:I<v?v:I;i.push(R)}this.pixels=i,this.pixelType=y}extractBands(y){if((0,lt.Wi)(y)||0===y.length||null==this.pixels||0===this.pixels.length)return this;const g=this.pixels.length,v=y.some(T=>T>=this.pixels.length),C=g===y.length&&!y.some((T,U)=>T!==U);return v||C?this:new J({pixelType:this.pixelType,width:this.width,height:this.height,mask:this.mask,validPixelCount:this.validPixelCount,maskIsAlpha:this.maskIsAlpha,pixels:y.map(T=>this.pixels[T]),statistics:this.statistics&&y.map(T=>this.statistics[T])})}clone(){const y=new J({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});let g;this.mask&&(y.mask=this.mask instanceof Uint8Array?new Uint8Array(this.mask):this.mask.slice(0));const v=J.getPixelArrayConstructor(this.pixelType);if(this.pixels&&this.pixels.length>0){y.pixels=[];const C=this.pixels[0].slice;for(g=0;g<this.pixels.length;g++)y.pixels[g]=C?this.pixels[g].slice(0,this.pixels[g].length):new v(this.pixels[g])}if(this.statistics)for(y.statistics=[],g=0;g<this.statistics.length;g++)y.statistics[g]=(0,it.d9)(this.statistics[g]);return y}_fillFrom8Bit(y){const{mask:g,maskIsAlpha:v,pixels:C}=this;if(!y||!C||!C.length)return void Q.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");let T,U,k,B;T=U=k=C[0],C.length>=3?(U=C[1],k=C[2]):2===C.length&&(U=C[1]);const I=new Uint32Array(y),R=this.width*this.height;if(T.length===R)if(g&&g.length===R)if(v)for(B=0;B<R;B++)g[B]&&(I[B]=g[B]<<24|k[B]<<16|U[B]<<8|T[B]);else for(B=0;B<R;B++)g[B]&&(I[B]=255<<24|k[B]<<16|U[B]<<8|T[B]);else for(B=0;B<R;B++)I[B]=255<<24|k[B]<<16|U[B]<<8|T[B];else Q.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.")}_fillFromNon8Bit(y){const{pixels:g,mask:v,statistics:C}=this;if(!y||!g||!g.length)return void Q.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");const T=this.pixelType;let U=1,k=0,B=1;if(C&&C.length>0)k=C.map(n=>n.minValue).reduce((n,c)=>Math.min(n,c)),B=C.map(n=>n.maxValue-n.minValue).reduce((n,c)=>Math.max(n,c)),U=255/B;else{let n=255;"s8"===T?(k=-128,n=127):"u16"===T?n=65535:"s16"===T?(k=-32768,n=32767):"u32"===T?n=4294967295:"s32"===T?(k=-2147483648,n=2147483647):"f32"===T?(k=-34e38,n=34e38):"f64"===T&&(k=-Number.MAX_VALUE,n=Number.MAX_VALUE),U=255/(n-k)}const I=new Uint32Array(y),R=this.width*this.height;let i,a,t,s,o;if(i=a=t=g[0],i.length!==R)return Q.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(g.length>=2)if(a=g[1],g.length>=3&&(t=g[2]),v&&v.length===R)for(s=0;s<R;s++)v[s]&&(I[s]=255<<24|(t[s]-k)*U<<16|(a[s]-k)*U<<8|(i[s]-k)*U);else for(s=0;s<R;s++)I[s]=255<<24|(t[s]-k)*U<<16|(a[s]-k)*U<<8|(i[s]-k)*U;else if(v&&v.length===R)for(s=0;s<R;s++)o=(i[s]-k)*U,v[s]&&(I[s]=255<<24|o<<16|o<<8|o);else for(s=0;s<R;s++)o=(i[s]-k)*U,I[s]=255<<24|o<<16|o<<8|o}_fillFrom32Bit(y){const{pixels:g,mask:v}=this;if(!y||!g||!g.length)return Q.error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");let C,T,U,k;C=T=U=g[0],g.length>=3?(T=g[1],U=g[2]):2===g.length&&(T=g[1]);const B=this.width*this.height;if(C.length!==B)return Q.error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");let I=0;if(v&&v.length===B)for(k=0;k<B;k++)y[I++]=C[k],y[I++]=T[k],y[I++]=U[k],y[I++]=1&v[k];else for(k=0;k<B;k++)y[I++]=C[k],y[I++]=T[k],y[I++]=U[k],y[I++]=1}_calculateBandStatistics(y,g){let v=1/0,C=-1/0;const T=y.length;let U,k=0;if(g)for(U=0;U<T;U++)g[U]&&(k=y[U],v=k<v?k:v,C=k>C?k:C);else for(U=0;U<T;U++)k=y[U],v=k<v?k:v,C=k>C?k:C;return{minValue:v,maxValue:C}}};(0,W._)([(0,$.Cb)({json:{write:!0}})],V.prototype,"width",void 0),(0,W._)([(0,$.Cb)({json:{write:!0}})],V.prototype,"height",void 0),(0,W._)([(0,$.Cb)({json:{write:!0}})],V.prototype,"pixelType",void 0),(0,W._)([(0,nt.p)("pixelType")],V.prototype,"castPixelType",null),(0,W._)([(0,$.Cb)({json:{write:!0}})],V.prototype,"validPixelCount",void 0),(0,W._)([(0,$.Cb)({json:{write:!0}})],V.prototype,"mask",void 0),(0,W._)([(0,$.Cb)({json:{write:!0}})],V.prototype,"maskIsAlpha",void 0),(0,W._)([(0,$.Cb)({json:{write:!0}})],V.prototype,"pixels",void 0),(0,W._)([(0,$.Cb)({json:{write:!0}})],V.prototype,"statistics",void 0),V=J=(0,W._)([(0,ot.j)("esri.layers.support.PixelBlock")],V);const rt=V},79751:(ct,tt,K)=>{K.d(tt,{Pz:()=>it,Qh:()=>I,SJ:()=>st,Uk:()=>R,Vl:()=>k,XV:()=>lt,nk:()=>G,pW:()=>rt,qF:()=>et,us:()=>Q,zp:()=>$});var W=K(62208),N=K(60295);function G(i){return(0,W.pC)(i)&&"esri.layers.support.PixelBlock"===i.declaredClass&&i.pixels&&i.pixels.length>0}function et(i,a){if(null==a||!a.length||!G(i))return i;const t=i.pixels.length;return a&&a.some(s=>s>=t)||1===t&&1===a.length&&0===a[0]?i:t!==a.length||a.some((s,o)=>s!==o)?new N.Z({pixelType:i.pixelType,width:i.width,height:i.height,mask:i.mask,validPixelCount:i.validPixelCount,maskIsAlpha:i.maskIsAlpha,pixels:a.map(s=>i.pixels[s]),statistics:i.statistics&&a.map(s=>i.statistics[s])}):i}function it(i){if(!i)return;const a=i.colormap;if(!a||0===a.length)return;const t=a.sort((l,f)=>l[0]-f[0]);let s=0;t[0][0]<0&&(s=t[0][0]);const o=Math.max(256,t[t.length-1][0]-s+1),n=new Uint8Array(4*o),c=[];let d,r=0,p=0;const u=5===t[0].length;if(o>65536)return t.forEach(l=>{c[l[0]-s]=u?l.slice(1):l.slice(1).concat([255])}),{indexed2DColormap:c,offset:s,alphaSpecified:u};if(i.fillUnspecified)for(d=t[p],r=d[0]-s;r<o;r++)n[4*r]=d[1],n[4*r+1]=d[2],n[4*r+2]=d[3],n[4*r+3]=u?d[4]:255,r===d[0]-s&&(d=p===t.length-1?d:t[++p]);else for(r=0;r<t.length;r++)d=t[r],p=4*(d[0]-s),n[p]=d[1],n[p+1]=d[2],n[p+2]=d[3],n[p+3]=u?d[4]:255;return{indexedColormap:n,offset:s,alphaSpecified:u}}function st(i,a){if(!G(i)||!a&&(a.indexedColormap||a.indexed2DColormap))return i;const t=i.clone(),s=t.pixels;let o=t.mask;const n=t.width*t.height;if(1!==s.length)return i;const{indexedColormap:c,indexed2DColormap:d,offset:r,alphaSpecified:p}=a,u=c.length-1;let l=0;const f=s[0],h=new Uint8Array(f.length),m=new Uint8Array(f.length),x=new Uint8Array(f.length);let _,w=0;if(c)if(o)for(l=0;l<n;l++)o[l]&&(w=4*(f[l]-r),w<r||w>u?o[l]=0:(h[l]=c[w],m[l]=c[w+1],x[l]=c[w+2],o[l]=c[w+3]));else{for(o=new Uint8Array(n),l=0;l<n;l++)w=4*(f[l]-r),w<r||w>u?o[l]=0:(h[l]=c[w],m[l]=c[w+1],x[l]=c[w+2],o[l]=c[w+3]);t.mask=o}else if(o)for(l=0;l<n;l++)o[l]&&(_=d[f[l]],h[l]=_[0],m[l]=_[1],x[l]=_[2],o[l]=_[3]);else{for(o=new Uint8Array(n),l=0;l<n;l++)_=d[f[l]],h[l]=_[0],m[l]=_[1],x[l]=_[2],o[l]=_[3];t.mask=o}return t.pixels=[h,m,x],t.statistics=null,t.pixelType="u8",t.maskIsAlpha=p,t}function lt(i,a){if(!G(i))return null;const{pixels:t,mask:s}=i,o=i.width*i.height,n=t.length;let c=a.lut;const{offset:d}=a;let r,p;c&&1===c[0].length&&(c=t.map(()=>c));const u=[];let l,f,h;if(d)if(null==s)for(r=0;r<n;r++){for(l=t[r],f=c[r],h=new Uint8Array(o),p=0;p<o;p++)h[p]=f[l[p]-d];u.push(h)}else for(r=0;r<n;r++){for(l=t[r],f=c[r],h=new Uint8Array(o),p=0;p<o;p++)s[p]&&(h[p]=f[l[p]-d]);u.push(h)}else if(null==s)for(r=0;r<n;r++){for(l=t[r],f=c[r],h=new Uint8Array(o),p=0;p<o;p++)h[p]=f[l[p]];u.push(h)}else for(r=0;r<n;r++){for(l=t[r],f=c[r],h=new Uint8Array(o),p=0;p<o;p++)s[p]&&(h[p]=f[l[p]]);u.push(h)}const m=new N.Z({width:i.width,height:i.height,pixels:u,mask:s,pixelType:"u8"});return m.updateStatistics(),m}function $(i,a){if(!G(i))return null;const t=i.clone(),{pixels:s}=t,o=t.width*t.height,n=a.length,c=Math.floor(n/2),d=a[Math.floor(c)],r=s[0];let p,u,l,f,h,m,x=!1;const _=new Uint8Array(o),w=new Uint8Array(o),A=new Uint8Array(o);let b=t.mask;const M=4===a[0].mappedColor.length;for(b||(b=new Uint8Array(o),b.fill(M?255:1),t.mask=b),h=0;h<o;h++)if(b[h]){for(p=r[h],x=!1,m=c,u=d,l=0,f=n-1;f-l>1;){if(p===u.value){x=!0;break}p>u.value?l=m:f=m,m=Math.floor((l+f)/2),u=a[Math.floor(m)]}x||(p===a[l].value?(u=a[l],x=!0):p===a[f].value?(u=a[f],x=!0):p<a[l].value?(x=!1,u=null):p>a[l].value&&(p<a[f].value?(u=a[l],x=!0):f===n-1?(x=!1,u=null):(u=a[f],x=!0))),x?(_[h]=u.mappedColor[0],w[h]=u.mappedColor[1],A[h]=u.mappedColor[2],b[h]=u.mappedColor[3]):_[h]=w[h]=A[h]=b[h]=0}return t.pixels=[_,w,A],t.mask=b,t.pixelType="u8",t.maskIsAlpha=M,t}function J(i,a,t,s,o,n){const{width:c,height:d}=t.block,{x:r,y:p}=t.offset,{width:u,height:l}=t.mosaic,f=function nt(i,a,t,s,o,n,c,d){return{xmin:o<=t*i?0:o<t*i+i?o-t*i:i,ymin:n<=s*a?0:n<s*a+a?n-s*a:a,xmax:o+c<=t*i?0:o+c<t*i+i?o+c-t*i:i,ymax:n+d<=s*a?0:n+d<s*a+a?n+d-s*a:a}}(c,d,s,o,r,p,u,l);let h=0,m=0;if(n){const x=n.hasGCSSShiftTransform?360:n.halfWorldWidth,_=c*n.resolutionX,w=n.startX+s*_,A=w+_;w<x&&A>x?m=n.rightPadding:w>=x&&(h=n.leftMargin-n.rightPadding,m=0)}if(f.xmax-=m,"number"!=typeof a)for(let x=f.ymin;x<f.ymax;x++){const _=(o*d+x-p)*u+(s*c-r)+h,w=x*c;for(let A=f.xmin;A<f.xmax;A++)i[_+A]=a[w+A]}else for(let x=f.ymin;x<f.ymax;x++){const _=(o*d+x-p)*u+(s*c-r)+h;for(let w=f.xmin;w<f.xmax;w++)i[_+w]=a}}function Q(i,a,t={}){const{clipOffset:s,clipSize:o,alignmentInfo:n,blockWidths:c}=t;if(c)return function V(i,a,t){const s=i.find(h=>(0,W.pC)(h));if((0,W.Wi)(s))return null;const o=i.some(h=>!(0,W.pC)(h)||!!h.mask),{width:n,height:c}=a,d=o?new Uint8Array(n*c):null,{blockWidths:r}=t,p=[],u=s.getPlaneCount(),l=N.Z.getPixelArrayConstructor(s.pixelType);if(o)for(let h=0,m=0;h<i.length;m+=r[h],h++){const x=i[h];if(!G(x))continue;const _=x.mask;for(let w=0;w<c;w++)for(let A=0;A<r[h];A++)d[w*n+A+m]=null==_?255:_[w*x.width+A]}for(let h=0;h<u;h++){const m=new l(n*c);for(let x=0,_=0;x<i.length;_+=r[x],x++){const w=i[x];if(!G(w))continue;const A=w.pixels[h];if(null!=A)for(let b=0;b<c;b++)for(let M=0;M<r[x];M++)m[b*n+M+_]=A[b*w.width+M]}p.push(m)}const f=new N.Z({width:n,height:c,mask:d,pixels:p,pixelType:s.pixelType});return f.updateStatistics(),f}(i,a,{blockWidths:c});const d=i.find(E=>G(E));if((0,W.Wi)(d))return null;const r=o?o.width:a.width,p=o?o.height:a.height,u=d.width,l=d.height,f=a.width/u,h=a.height/l,m={offset:s||{x:0,y:0},mosaic:o||a,block:{width:u,height:l}},x=d.pixelType,_=N.Z.getPixelArrayConstructor(x),w=d.pixels.length,A=[];let b,M,j;for(let E=0;E<w;E++){M=new _(r*p);for(let O=0;O<h;O++)for(let P=0;P<f;P++){const S=i[O*f+P];G(S)&&(b=S.pixels[E],J(M,b,m,P,O,n))}A.push(M)}if(i.some(E=>(0,W.Wi)(E)||E.mask&&E.mask.length>0)){j=new Uint8Array(r*p);for(let E=0;E<h;E++)for(let O=0;O<f;O++){const P=i[E*f+O];J(j,((0,W.pC)(P)?P.mask:null)||(P?1:0),m,O,E,n)}}const F=new N.Z({width:r,height:p,pixels:A,pixelType:x,mask:j});return F.updateStatistics(),F}function rt(i,a,t){if(!G(i))return null;const{width:s,height:o}=i,n=a.x,c=a.y,d=t.width+n,r=t.height+c;if(n<0||c<0||d>s||r>o||0===n&&0===c&&d===s&&r===o)return i;i.mask||(i.mask=new Uint8Array(s*o));const p=i.mask;for(let u=0;u<o;u++){const l=u*s;for(let f=0;f<s;f++)p[l+f]=u<c||u>=r||f<n||f>=d?0:1}return i.updateStatistics(),i}function g(i){if(0===i.size)return 0;let a=0,t=-1,s=0;const o=i.keys();let n=o.next();for(;!n.done;)s=i.get(n.value),s>a&&(t=n.value,a=s),n=o.next();return t}function v(i,a,t){if(0===t)return;const s=i.get(a);1===s?i.delete(a):i.set(a,s-1)}function C(i,a,t){0!==t&&i.set(a,i.has(a)?i.get(a)+1:1)}function T(i,a,t){let{x:s,y:o}=a;const{width:n,height:c}=t;if(0===s&&0===o&&c===i.height&&n===i.width)return i;const{width:d,height:r}=i,p=Math.max(0,o),u=Math.max(0,s),l=Math.min(s+n,d),f=Math.min(o+c,r);if(l<0||f<0||!G(i))return null;s=Math.max(0,-s),o=Math.max(0,-o);const{pixels:h,mask:m}=i,x=n*c,_=h.length,w=[];for(let M=0;M<_;M++){const j=h[M],F=N.Z.createEmptyBand(i.pixelType,x);for(let E=p;E<f;E++){const O=E*d;let P=(E+o-p)*n+s;for(let S=u;S<l;S++)F[P++]=j[O+S]}w.push(F)}const A=new Uint8Array(x);for(let M=p;M<f;M++){const j=M*d;let F=(M+o-p)*n+s;for(let E=u;E<l;E++)A[F++]=m?m[j+E]:1}const b=new N.Z({width:t.width,height:t.height,pixelType:i.pixelType,pixels:w,mask:A});return b.updateStatistics(),b}function U(i,a=!0){if(!G(i))return null;const{pixels:t,width:s,height:o,mask:n,pixelType:c}=i,d=[],r=Math.round(s/2),p=Math.round(o/2),u=o-1,l=s-1;for(let h=0;h<t.length;h++){const m=t[h],x=N.Z.createEmptyBand(c,r*p);let _=0;for(let w=0;w<o;w+=2)for(let A=0;A<s;A+=2){const b=m[w*s+A];if(a){const M=A===l?b:m[w*s+A+1],j=w===u?b:m[w*s+A+s];x[_++]=(b+M+j+(A===l?j:w===u?M:m[w*s+A+s+1]))/4}else x[_++]=b}d.push(x)}let f=null;if(n){f=new Uint8Array(r*p);let h=0;for(let m=0;m<o;m+=2)for(let x=0;x<s;x+=2){const _=n[m*s+x];if(a){const w=x===l?_:n[m*s+x+1],A=m===u?_:n[m*s+x+s];f[h++]=_*w*A*(x===l?A:m===u?w:n[m*s+x+s+1])?1:0}else f[h++]=_}}return new N.Z({width:r,height:p,pixelType:c,pixels:d,mask:f})}function k(i,a,t){if(!G(i))return null;const{width:s,height:o}=a;let{width:n,height:c}=i;const d=new Map,r={x:0,y:0},p=null==t?1:1+t;let u=i;for(let l=0;l<p;l++){const f=Math.ceil(n/s),h=Math.ceil(c/o);for(let m=0;m<h;m++){r.y=m*o;for(let x=0;x<f;x++){r.x=x*s;const _=T(u,r,a);d.set(`${l}/${m}/${x}`,_)}}l<p-1&&(u=U(u)),n=Math.round(n/2),c=Math.round(c/2)}return d}function B(i,a,t,s,o=.5){const{width:n,height:c}=i,{width:d,height:r}=a,p=s.cols,u=s.rows,l=Math.ceil(d/p-.1/p),f=Math.ceil(r/u-.1/u);let h,m,x,_,w,A,b;const M=l*p,j=M*f*u,F=new Float32Array(j),E=new Float32Array(j),O=new Uint32Array(j),P=new Uint32Array(j);let S,H,Z=0;for(let z=0;z<f;z++)for(let X=0;X<l;X++){h=12*(z*l+X),m=t[h],x=t[h+1],_=t[h+2],w=t[h+3],A=t[h+4],b=t[h+5];for(let L=0;L<u;L++){Z=(z*u+L)*M+X*p,H=(L+.5)/u;for(let D=0;D<L;D++)S=(D+.5)/p,F[Z+D]=(m*S+x*H+_)*n-o,E[Z+D]=(w*S+A*H+b)*c-o,O[Z+D]=Math.round(F[Z+D]),P[Z+D]=Math.round(E[Z+D])}h+=6,m=t[h],x=t[h+1],_=t[h+2],w=t[h+3],A=t[h+4],b=t[h+5];for(let L=0;L<u;L++){Z=(z*u+L)*M+X*p,H=(L+.5)/u;for(let D=L;D<p;D++)S=(D+.5)/p,F[Z+D]=(m*S+x*H+_)*n-o,E[Z+D]=(w*S+A*H+b)*c-o,O[Z+D]=Math.round(F[Z+D]),P[Z+D]=Math.round(E[Z+D])}}return{offsets_x:F,offsets_y:E,offsets_xi:O,offsets_yi:P,gridWidth:M}}function I(i,a){const{coefficients:t,spacing:s}=a,{offsets_x:o,offsets_y:n,gridWidth:c}=B(i,i,t,{rows:s[0],cols:s[1]},.5),{width:d,height:r}=i,p=new Float32Array(d*r),u=180/Math.PI;for(let l=0;l<r;l++)for(let f=0;f<d;f++){const h=l*c+f,m=0===l?h:h-c,x=l===r-1?h:h+c,_=o[m]-o[x],w=n[x]-n[m];if(isNaN(_)||isNaN(w))p[l*d+f]=90;else{let A=Math.atan2(w,_)*u;A=(360+A)%360,p[l*d+f]=A}}return p}function R(i,a,t,s,o="nearest"){if(!G(i))return null;"majority"===o&&(i=function y(i){if(!G(i))return null;const a=i.clone(),{width:t,height:s,pixels:o,mask:n}=i,c=o[0],d=a.pixels[0];for(let r=2;r<s-1;r++){const p=new Map;for(let l=r-2;l<r+2;l++)for(let f=0;f<4;f++){const h=l*t+f;C(p,c[h],n?n[h]:1)}d[r*t]=g(p),d[r*t+1]=d[r*t+2]=d[r*t];let u=3;for(;u<t-1;u++){let l=(r-2)*t+u+1;C(p,c[l],n?n[l]:1),l=(r-1)*t+u+1,C(p,c[l],n?n[l]:1),l=r*t+u+1,C(p,c[l],n?n[l]:1),l=(r+1)*t+u+1,C(p,c[l],n?n[l]:1),l=(r-2)*t+u-3,v(p,c[l],n?n[l]:1),l=(r-1)*t+u-3,v(p,c[l],n?n[l]:1),l=r*t+u-3,v(p,c[l],n?n[l]:1),l=(r+1)*t+u-3,v(p,c[l],n?n[l]:1),d[r*t+u]=g(p)}d[r*t+u+1]=d[r*t+u]}for(let r=0;r<t;r++)d[r]=d[t+r]=d[2*t+r],d[(s-1)*t+r]=d[(s-2)*t+r];return a.updateStatistics(),a}(i));const{pixels:n,mask:c,pixelType:d}=i,r=i.width,p=i.height,u=N.Z.getPixelArrayConstructor(d),l=n.length,{width:f,height:h}=a;let m=!1;for(let P=0;P<t.length;P+=3)-1===t[P]&&-1===t[P+1]&&-1===t[P+2]&&(m=!0);const{offsets_x:x,offsets_y:_,offsets_xi:w,offsets_yi:A,gridWidth:b}=B({width:r,height:p},a,t,s,"majority"===o?0:.5);let M;const j=(P,S,H)=>{const Z=P instanceof Float32Array||P instanceof Float64Array?0:.5;for(let z=0;z<h;z++){M=z*b;for(let X=0;X<f;X++){if(x[M]<0||_[M]<0)P[z*f+X]=0;else if(H)P[z*f+X]=S[w[M]+A[M]*r];else{const L=Math.floor(x[M]),D=Math.floor(_[M]),at=Math.ceil(x[M]),Y=Math.ceil(_[M]),q=x[M]-L,ht=_[M]-D;P[z*f+X]=!c||c[L+D*r]&&c[L+D*r]&&c[L+Y*r]&&c[at+Y*r]?(1-ht)*((1-q)*S[L+D*r]+q*S[at+D*r])+ht*((1-q)*S[L+Y*r]+q*S[at+Y*r])+Z:S[w[M]+A[M]*r]}M++}}},F=[];let E;for(let P=0;P<l;P++)E=new u(f*h),j(E,n[P],"nearest"===o||"majority"===o),F.push(E);const O=new N.Z({width:f,height:h,pixelType:d,pixels:F});if(c)O.mask=new Uint8Array(f*h),j(O.mask,c,!0);else if(m){O.mask=new Uint8Array(f*h);for(let P=0;P<f*h;P++)O.mask[P]=x[P]<0||_[P]<0?0:1}return O.updateStatistics(),O}}}]);