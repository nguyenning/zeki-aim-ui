"use strict";(self.webpackChunkexample_app=self.webpackChunkexample_app||[]).push([[565],{78176:(p,a,_)=>{_.r(a),_.d(a,{FeatureCollectionSnappingSource:()=>n});var r=_(15861),t=_(17626),o=_(14517),i=_(62208),s=_(77712),E=(_(85931),_(8314),_(90912),_(76898)),u=_(9218);let n=class extends o.Z{constructor(e){super(e)}get availability(){return 1}refresh(){}fetchCandidates(e,O){var P=this;return(0,r.Z)(function*(){const l=P.layerSource.layer.source;return l.querySnapping?(yield l.querySnapping({distance:e.distance,point:e.coordinateHelper.vectorToPoint(e.point).toJSON(),types:e.types,query:(0,i.pC)(e.filter)?e.filter.createQuery().toJSON():{where:"1=1"}},{signal:O})).candidates.map(d=>(0,u.X)(d,e.coordinateHelper,e.elevationInfo)):[]})()}};(0,t._)([(0,s.Cb)({constructOnly:!0})],n.prototype,"layerSource",void 0),(0,t._)([(0,s.Cb)({readOnly:!0})],n.prototype,"availability",null),n=(0,t._)([(0,E.j)("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],n)},19038:(p,a,_)=>{_.d(a,{n:()=>o});var r=_(44725),t=_(5286);class o extends t.r{constructor(s,c){super(c),this.point=s}equals(s){return s instanceof o&&(0,r.Xv)(this.point,s.point)}}}}]);