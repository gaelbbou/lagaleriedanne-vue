webpackJsonp([0],{11:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=a(45),e=a(50),r=a(0),l=r(n.a,e.a,!1,null,null,null);s.default=l.exports},41:function(t,s,a){"use strict";a.d(s,"a",function(){return n});var n={methods:{smoothscrollRight:function(){window.scrollBy(100,0)}},created:function(){this.smoothscrollRight()}}},42:function(t,s,a){"use strict";var n=a(43),e=a(0),r=e(null,n.a,!1,null,null,null);s.a=r.exports},43:function(t,s,a){"use strict";var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 12 21"}},[a("path",{attrs:{d:"M37.8000221,31.5391654 L28.4608346,22.2004698 C28.32727,22.0669053 28.1737815,22 28.000123,22 C27.8264645,22 27.67273,22.0669053 27.5391654,22.2004698 L18.2004698,31.5391654 C18.0666593,31.6729759 18,31.8264645 18,32.000123 C18,32.1737815 18.0669053,32.327516 18.2004698,32.4610806 L19.2023269,33.4629377 C19.3358915,33.5965022 19.489626,33.6631615 19.6632845,33.6631615 C19.836943,33.6631615 19.9906775,33.5965022 20.1242421,33.4629377 L28.000123,25.5870568 L35.8762499,33.4631837 C36.0098144,33.5967482 36.1635489,33.6631615 36.3369615,33.6631615 C36.510866,33.6631615 36.6646005,33.5965022 36.798165,33.4631837 L37.8000221,32.4610806 C37.9335867,32.327516 38,32.1737815 38,32.000123 C38,31.8264645 37.9335867,31.67273 37.8000221,31.5391654 L37.8000221,31.5391654 Z",transform:"rotate(90 25.5 8.332)"}})])},e=[],r={render:n,staticRenderFns:e};s.a=r},45:function(t,s,a){"use strict";var n=a(2),e=a.n(n),r=a(41),l=a(42);s.a={data:function(){return{data:e.a}},mixins:[r.a],components:{"icon-arrowright":l.a}}},50:function(t,s,a){"use strict";var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"gallery",style:{backgroundImage:"url("+t.data.website.imgGallery+")"},attrs:{id:"watercolors"}},[a("img",{staticClass:"display-none",attrs:{loading:"eager",src:t.data.website.imgGallery}}),t._v(" "),t._l(t.data.gallery.watercolors,function(s){return a("div",{key:s,staticClass:"gallery-art align-center",class:s.classDisplay,attrs:{id:s.name}},[a("img",{staticClass:"setting-shadow--motion",attrs:{loading:"lazy",src:s.image.path1,srcset:s.image.path2}}),t._v(" "),a("div",{staticClass:"gallery-art-note setting-shadow--motion"},[a("h5",{staticClass:"align-center"},[t._v(t._s(s.title))]),t._v(" "),a("h6",{staticClass:"align-center"},[t._v(t._s(s.type)+" - "+t._s(s.size))])])])}),t._v(" "),a("div",{staticClass:"gallery-buttons align-center"},[a("router-link",{staticClass:"button button-small button-base--ghost button-block",attrs:{to:"/paintings"}},[t._v("Peintures")]),t._v(" "),a("router-link",{staticClass:"button button-small button-base--ghost button-block",attrs:{to:"/watercolors"}},[t._v("Aquarelles")]),t._v(" "),a("router-link",{staticClass:"button button-small button-base--ghost button-block",attrs:{to:"/drawings"}},[t._v("Dessins")])],1),t._v(" "),a("button",{staticClass:"button button-white--ghost button-special gallery-arrowright",on:{click:t.smoothscrollRight}},[a("icon-arrowright",{staticClass:"icon"})],1)],2)},e=[],r={render:n,staticRenderFns:e};s.a=r}});
//# sourceMappingURL=0.build.js.map