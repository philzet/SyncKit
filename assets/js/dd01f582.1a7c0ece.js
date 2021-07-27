(self.webpackChunkdocs_synckit=self.webpackChunkdocs_synckit||[]).push([[1360],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6607:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),l=["components"],o={},c="RealmSwiftAdapterDelegate",p={unversionedId:"api/realmswift/RealmSwiftAdapterDelegate",id:"api/realmswift/RealmSwiftAdapterDelegate",isDocsHomePage:!1,title:"RealmSwiftAdapterDelegate",description:"` swift",source:"@site/docs/api/realmswift/RealmSwiftAdapterDelegate.md",sourceDirName:"api/realmswift",slug:"/api/realmswift/RealmSwiftAdapterDelegate",permalink:"/api/realmswift/RealmSwiftAdapterDelegate",version:"current",frontMatter:{},sidebar:"API",previous:{title:"RealmSwiftAdapter",permalink:"/api/realmswift/RealmSwiftAdapter"},next:{title:"RealmSwiftAdapterRecordProcessing",permalink:"/api/realmswift/RealmSwiftAdapterRecordProcessing"}},s=[{value:"Inheritance",id:"inheritance",children:[]},{value:"Requirements",id:"requirements",children:[{value:"realmSwiftAdapter(_:\u200bgotChanges:\u200bobject:\u200b)",id:"realmswiftadapter_gotchangesobject",children:[]}]}],u={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"realmswiftadapterdelegate"},"RealmSwiftAdapterDelegate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public protocol RealmSwiftAdapterDelegate: class \n")),(0,i.kt)("h2",{id:"inheritance"},"Inheritance"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"class")),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("h3",{id:"realmswiftadapter_gotchangesobject"},"realmSwiftAdapter(","_",":\u200bgotChanges:\u200bobject:\u200b)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"func realmSwiftAdapter(_ adapter:RealmSwiftAdapter, gotChanges changes: [String: Any], object: Object)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Asks the delegate to resolve conflicts for a managed object when using a custom mergePolicy."),(0,i.kt)("li",{parentName:"ul"},"The delegate is expected to examine the change dictionary and optionally apply any of those changes to the managed object."),(0,i.kt)("li",{parentName:"ul"}),(0,i.kt)("li",{parentName:"ul"},"@param adapter    The ",(0,i.kt)("inlineCode",{parentName:"li"},"QSRealmSwiftAdapter")," that is providing the changes."),(0,i.kt)("li",{parentName:"ul"},"@param changeDictionary Dictionary containing keys and values with changes for the managed object. Values can be ","[","NSNull null","]"," to represent a nil value."),(0,i.kt)("li",{parentName:"ul"},"@param object           The ",(0,i.kt)("inlineCode",{parentName:"li"},"RLMObject")," that has changed on iCloud.")))}m.isMDXComponent=!0}}]);