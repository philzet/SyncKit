(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(132)),i={},l={unversionedId:"CoreDataAPI/classes/CloudKitSynchronizerCoreData",id:"CoreDataAPI/classes/CloudKitSynchronizerCoreData",isDocsHomePage:!1,title:"CloudKitSynchronizerCoreData",description:"CloudKitSynchronizer",source:"@site/docs/CoreDataAPI/classes/CloudKitSynchronizerCoreData.md",slug:"/CoreDataAPI/classes/CloudKitSynchronizerCoreData",permalink:"/SyncKit/CoreDataAPI/classes/CloudKitSynchronizerCoreData",version:"current",sidebar:"api",previous:{title:"CloudKitSynchronizer.SynchronizeMode",permalink:"/SyncKit/Core/enums/CloudKitSynchronizer.SynchronizeMode"},next:{title:"CoreDataAdapter",permalink:"/SyncKit/CoreDataAPI/classes/CoreDataAdapter"}},c=[{value:"Properties",id:"properties",children:[{value:"<code>contexts</code>",id:"contexts",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>privateSynchronizer(containerName:managedObjectContext:suiteName:recordZoneID:)</code>",id:"privatesynchronizercontainernamemanagedobjectcontextsuitenamerecordzoneid",children:[]},{value:"<code>sharedSynchronizer(containerName:objectModel:suiteName:)</code>",id:"sharedsynchronizercontainernameobjectmodelsuitename",children:[]},{value:"<code>multiFetchedResultsController(fetchRequest:)</code>",id:"multifetchedresultscontrollerfetchrequest",children:[]}]}],b={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"cloudkitsynchronizer"},Object(o.b)("inlineCode",{parentName:"h1"},"CloudKitSynchronizer")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-swift"},"extension CloudKitSynchronizer\n")),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"contexts"},Object(o.b)("inlineCode",{parentName:"h3"},"contexts")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-swift"},"@objc public var contexts: [NSManagedObjectContext]\n")),Object(o.b)("p",null,"List of ",Object(o.b)("inlineCode",{parentName:"p"},"NSManagedObjectContext")," kept in sync by the synchronizer. Usually just the one you provided, for the default private synchronizer, but the shared synchronizer will have one Core Data context for each record zone shared with this user."),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"privatesynchronizercontainernamemanagedobjectcontextsuitenamerecordzoneid"},Object(o.b)("inlineCode",{parentName:"h3"},"privateSynchronizer(containerName:managedObjectContext:suiteName:recordZoneID:)")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-swift"},"@objc public static func privateSynchronizer(containerName: String,\n                                       managedObjectContext: NSManagedObjectContext,\n                                       suiteName: String? = nil,\n                                       recordZoneID: CKRecordZone.ID? = nil) -> CloudKitSynchronizer\n")),Object(o.b)("p",null,"Creates a new, default synchronizer for the user's private database"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Parameters:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"containerName: CloudKit container name."),Object(o.b)("li",{parentName:"ul"},"managedObjectContext: ",Object(o.b)("inlineCode",{parentName:"li"},"NSManagedObjectContext")," that should be used for synchronization. Changes in it will be uploaded and downloaded to/from CloudKit."),Object(o.b)("li",{parentName:"ul"},"suiteName: App suite, if this app is part of one. If provided, synchronizer's state will be saved in the app group."),Object(o.b)("li",{parentName:"ul"},"recordZoneID: ",Object(o.b)("inlineCode",{parentName:"li"},"CKRecordZoneID")," to be used for synchronization. If not provided, default value will be ",Object(o.b)("inlineCode",{parentName:"li"},'CKRecordZone.ID(zoneName: "QSCloudKitCustomZoneName", ownerName: CKCurrentUserDefaultName)'),"."))),Object(o.b)("li",{parentName:"ul"},"Returns: A fully configured ",Object(o.b)("inlineCode",{parentName:"li"},"CloudKitSynchronizer")," for the private database.")),Object(o.b)("h4",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"containerName"),Object(o.b)("td",{parentName:"tr",align:null},"CloudKit container name.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"managedObjectContext"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"NSManagedObjectContext")," that should be used for synchronization. Changes in it will be uploaded and downloaded to/from CloudKit.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"suiteName"),Object(o.b)("td",{parentName:"tr",align:null},"App suite, if this app is part of one. If provided, synchronizer\u2019s state will be saved in the app group.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"recordZoneID"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"CKRecordZoneID")," to be used for synchronization. If not provided, default value will be ",Object(o.b)("inlineCode",{parentName:"td"},'CKRecordZone.ID(zoneName: "QSCloudKitCustomZoneName", ownerName: CKCurrentUserDefaultName)'),".")))),Object(o.b)("h3",{id:"sharedsynchronizercontainernameobjectmodelsuitename"},Object(o.b)("inlineCode",{parentName:"h3"},"sharedSynchronizer(containerName:objectModel:suiteName:)")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-swift"},"@objc public static func sharedSynchronizer(containerName: String,\n                                      objectModel: NSManagedObjectModel,\n                                      suiteName: String? = nil) -> CloudKitSynchronizer\n")),Object(o.b)("p",null,"Creates a new, default synchronizer for the user's shared database."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Parameters:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"containerName: CloudKit container name."),Object(o.b)("li",{parentName:"ul"},"objectModel: ",Object(o.b)("inlineCode",{parentName:"li"},"NSManagedObjectModel")," that is used for synchronization."),Object(o.b)("li",{parentName:"ul"},"suiteName: App suite, if this app is part of one. If provided, synchronizer's state will be saved in the app group."))),Object(o.b)("li",{parentName:"ul"},"Returns: A fully configured ",Object(o.b)("inlineCode",{parentName:"li"},"CloudKitSynchronizer")," for the shared database.")),Object(o.b)("h4",{id:"parameters-1"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"containerName"),Object(o.b)("td",{parentName:"tr",align:null},"CloudKit container name.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"objectModel"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"NSManagedObjectModel")," that is used for synchronization.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"suiteName"),Object(o.b)("td",{parentName:"tr",align:null},"App suite, if this app is part of one. If provided, synchronizer\u2019s state will be saved in the app group.")))),Object(o.b)("h3",{id:"multifetchedresultscontrollerfetchrequest"},Object(o.b)("inlineCode",{parentName:"h3"},"multiFetchedResultsController(fetchRequest:)")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-swift"},"public func multiFetchedResultsController(fetchRequest: NSFetchRequest<NSFetchRequestResult>) -> CoreDataMultiFetchedResultsController?\n")),Object(o.b)("p",null,"Creates a multiFetchedResultsController to simplify dealing with results from multiple ",Object(o.b)("inlineCode",{parentName:"p"},"NSManagedObjectContext")," instances."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Parameter fetchRequest: Fetch request to be applied to managed contexts."),Object(o.b)("li",{parentName:"ul"},"Returns: Configured controller.\nThis controller can be particularly useful to retrieve data from a shared synchronizer, as it will potentially be coming from multiple ",Object(o.b)("inlineCode",{parentName:"li"},"NSManagedObjectContext"),"s.")),Object(o.b)("h4",{id:"parameters-2"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"fetchRequest"),Object(o.b)("td",{parentName:"tr",align:null},"Fetch request to be applied to managed contexts.")))))}d.isMDXComponent=!0},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,m=u["".concat(i,".").concat(p)]||u[p]||s[p]||o;return n?r.a.createElement(m,l(l({ref:t},b),{},{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);