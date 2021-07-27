(self.webpackChunkdocs_synckit=self.webpackChunkdocs_synckit||[]).push([[6152],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return d},kt:function(){return y}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},d=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(r),y=o,h=s["".concat(l,".").concat(y)]||s[y]||p[y]||i;return r?t.createElement(h,a(a({ref:n},d),{},{components:r})):t.createElement(h,a({ref:n},d))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6659:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return s}});var t=r(2122),o=r(9756),i=(r(7294),r(3905)),a=["components"],c={},l="CloudKitSynchronizer.SyncError",u={unversionedId:"api/core/CloudKitSynchronizer_SyncError",id:"api/core/CloudKitSynchronizer_SyncError",isDocsHomePage:!1,title:"CloudKitSynchronizer.SyncError",description:"SyncError",source:"@site/docs/api/core/CloudKitSynchronizer_SyncError.md",sourceDirName:"api/core",slug:"/api/core/CloudKitSynchronizer_SyncError",permalink:"/api/core/CloudKitSynchronizer_SyncError",version:"current",frontMatter:{},sidebar:"API",previous:{title:"CloudKitSynchronizerDelegate",permalink:"/api/core/CloudKitSynchronizerDelegate"},next:{title:"CloudKitSynchronizer.SynchronizeMode",permalink:"/api/core/CloudKitSynchronizer_SynchronizeMode"}},d=[{value:"Inheritance",id:"inheritance",children:[]},{value:"Enumeration Cases",id:"enumeration-cases",children:[{value:"<code>alreadySyncing</code>",id:"alreadysyncing",children:[]},{value:"<code>higherModelVersionFound</code>",id:"highermodelversionfound",children:[]},{value:"<code>recordNotFound</code>",id:"recordnotfound",children:[]},{value:"<code>cancelled</code>",id:"cancelled",children:[]}]}],p={toc:d};function s(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cloudkitsynchronizersyncerror"},"CloudKitSynchronizer.SyncError"),(0,i.kt)("p",null,"SyncError"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public enum SyncError: Int, Error \n")),(0,i.kt)("h2",{id:"inheritance"},"Inheritance"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Error"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Int")),(0,i.kt)("h2",{id:"enumeration-cases"},"Enumeration Cases"),(0,i.kt)("h3",{id:"alreadysyncing"},(0,i.kt)("inlineCode",{parentName:"h3"},"alreadySyncing")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"case alreadySyncing = 0\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Received when synchronize is called while there was an ongoing synchronization.")),(0,i.kt)("h3",{id:"highermodelversionfound"},(0,i.kt)("inlineCode",{parentName:"h3"},"higherModelVersionFound")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"case higherModelVersionFound = 1\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A synchronizer with a higer ",(0,i.kt)("inlineCode",{parentName:"li"},"compatibilityVersion")," value uploaded changes to CloudKit, so those changes won't be imported here."),(0,i.kt)("li",{parentName:"ul"},"This error can be detected to prompt the user to update the app to a newer version.")),(0,i.kt)("h3",{id:"recordnotfound"},(0,i.kt)("inlineCode",{parentName:"h3"},"recordNotFound")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"case recordNotFound = 2\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A record fot the provided object was not found, so the object cannot be shared on CloudKit.")),(0,i.kt)("h3",{id:"cancelled"},(0,i.kt)("inlineCode",{parentName:"h3"},"cancelled")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"case cancelled = 3\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Synchronization was manually cancelled.")))}s.isMDXComponent=!0}}]);