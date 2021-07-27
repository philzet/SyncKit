(self.webpackChunkdocs_synckit=self.webpackChunkdocs_synckit||[]).push([[6722],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=c(a),h=n,m=u["".concat(l,".").concat(h)]||u[h]||s[h]||o;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9379:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=a(2122),n=a(9756),o=(a(7294),a(3905)),i=["components"],d={},l="CoreDataAdapter",c={unversionedId:"api/coredata/CoreDataAdapter",id:"api/coredata/CoreDataAdapter",isDocsHomePage:!1,title:"CoreDataAdapter",description:"Implementation of ModelAdapter for Core Data models.",source:"@site/docs/api/coredata/CoreDataAdapter.md",sourceDirName:"api/coredata",slug:"/api/coredata/CoreDataAdapter",permalink:"/api/coredata/CoreDataAdapter",version:"current",frontMatter:{},sidebar:"API",previous:{title:"UserDefaultsAdapter",permalink:"/api/core/UserDefaultsAdapter"},next:{title:"CoreDataAdapterConflictResolutionDelegate",permalink:"/api/coredata/CoreDataAdapterConflictResolutionDelegate"}},p=[{value:"Inheritance",id:"inheritance",children:[]},{value:"Initializers",id:"initializers",children:[{value:"<code>init(persistenceStack:targetContext:recordZoneID:delegate:)</code>",id:"initpersistencestacktargetcontextrecordzoneiddelegate",children:[]}]},{value:"Properties",id:"properties",children:[{value:"<code>serverChangeToken</code>",id:"serverchangetoken",children:[]},{value:"<code>targetContext</code>",id:"targetcontext",children:[]},{value:"<code>delegate</code>",id:"delegate",children:[]},{value:"<code>recordProcessingDelegate</code>",id:"recordprocessingdelegate",children:[]},{value:"<code>conflictDelegate</code>",id:"conflictdelegate",children:[]},{value:"<code>recordZoneID</code>",id:"recordzoneid",children:[]},{value:"<code>mergePolicy</code>",id:"mergepolicy",children:[]},{value:"<code>forceDataTypeInsteadOfAsset</code>",id:"forcedatatypeinsteadofasset",children:[]},{value:"<code>hasChanges</code>",id:"haschanges",children:[]},{value:"<code>timestampKey</code>",id:"timestampkey",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>prepareToImport()</code>",id:"preparetoimport",children:[]},{value:"<code>saveChanges(in:)</code>",id:"savechangesin",children:[]},{value:"<code>deleteRecords(with:)</code>",id:"deleterecordswith",children:[]},{value:"<code>persistImportedChanges(completion:)</code>",id:"persistimportedchangescompletion",children:[]},{value:"<code>recordsToUpload(limit:)</code>",id:"recordstouploadlimit",children:[]},{value:"<code>didUpload(savedRecords:)</code>",id:"diduploadsavedrecords",children:[]},{value:"<code>recordIDsMarkedForDeletion(limit:)</code>",id:"recordidsmarkedfordeletionlimit",children:[]},{value:"<code>didDelete(recordIDs:)</code>",id:"diddeleterecordids",children:[]},{value:"<code>hasRecordID(_:)</code>",id:"hasrecordid_",children:[]},{value:"<code>didFinishImport(with:)</code>",id:"didfinishimportwith",children:[]},{value:"<code>saveToken(_:)</code>",id:"savetoken_",children:[]},{value:"<code>deleteChangeTracking()</code>",id:"deletechangetracking",children:[]},{value:"<code>record(for:)</code>",id:"recordfor",children:[]},{value:"<code>share(for:)</code>",id:"sharefor",children:[]},{value:"<code>save(share:for:)</code>",id:"savesharefor",children:[]},{value:"<code>deleteShare(for:)</code>",id:"deletesharefor",children:[]},{value:"<code>recordsToUpdateParentRelationshipsForRoot(_:)</code>",id:"recordstoupdateparentrelationshipsforroot_",children:[]}]}],s={toc:p};function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"coredataadapter"},"CoreDataAdapter"),(0,o.kt)("p",null,"Implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"ModelAdapter")," for Core Data models."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public class CoreDataAdapter: NSObject, ModelAdapter \n")),(0,o.kt)("h2",{id:"inheritance"},"Inheritance"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../core/ModelAdapter"},(0,o.kt)("inlineCode",{parentName:"a"},"ModelAdapter")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NSObject")),(0,o.kt)("h2",{id:"initializers"},"Initializers"),(0,o.kt)("h3",{id:"initpersistencestacktargetcontextrecordzoneiddelegate"},(0,o.kt)("inlineCode",{parentName:"h3"},"init(persistenceStack:targetContext:recordZoneID:delegate:)")),(0,o.kt)("p",null,"Initialize a new ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreDataAdapter"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public init(persistenceStack: CoreDataStack, targetContext: NSManagedObjectContext, recordZoneID: CKRecordZone.ID, delegate: CoreDataAdapterDelegate) \n")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"persistenceStack: ",(0,o.kt)("inlineCode",{parentName:"li"},"CoreDataStack")," for internal state."),(0,o.kt)("li",{parentName:"ul"},"targetContext: ",(0,o.kt)("inlineCode",{parentName:"li"},"NSManagedObjectContext")," to keep in sync with CloudKit."),(0,o.kt)("li",{parentName:"ul"},"recordZoneID: ",(0,o.kt)("inlineCode",{parentName:"li"},"CKRecordZone.ID")," of the record zone that will be used on CloudKit."),(0,o.kt)("li",{parentName:"ul"},"delegate: ",(0,o.kt)("inlineCode",{parentName:"li"},"CoreDataAdapterDelegate")," to trigger saves in the target context.")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"serverchangetoken"},(0,o.kt)("inlineCode",{parentName:"h3"},"serverChangeToken")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public var serverChangeToken: CKServerChangeToken? \n")),(0,o.kt)("h3",{id:"targetcontext"},(0,o.kt)("inlineCode",{parentName:"h3"},"targetContext")),(0,o.kt)("p",null,"The target ",(0,o.kt)("inlineCode",{parentName:"p"},"NSManagedObjectContext")," that will be tracked. (read-only)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public let targetContext: NSManagedObjectContext\n")),(0,o.kt)("h3",{id:"delegate"},(0,o.kt)("inlineCode",{parentName:"h3"},"delegate")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public let delegate: CoreDataAdapterDelegate\n")),(0,o.kt)("h3",{id:"recordprocessingdelegate"},(0,o.kt)("inlineCode",{parentName:"h3"},"recordProcessingDelegate")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public weak var recordProcessingDelegate: CoreDataAdapterRecordProcessing?\n")),(0,o.kt)("h3",{id:"conflictdelegate"},(0,o.kt)("inlineCode",{parentName:"h3"},"conflictDelegate")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public var conflictDelegate: CoreDataAdapterConflictResolutionDelegate?\n")),(0,o.kt)("h3",{id:"recordzoneid"},(0,o.kt)("inlineCode",{parentName:"h3"},"recordZoneID")),(0,o.kt)("p",null,"Record Zone that is kept in sync with this adapter's ",(0,o.kt)("inlineCode",{parentName:"p"},"NSManagedObjectContext"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public let recordZoneID: CKRecordZone.ID\n")),(0,o.kt)("h3",{id:"mergepolicy"},(0,o.kt)("inlineCode",{parentName:"h3"},"mergePolicy")),(0,o.kt)("p",null,"Merge policy in case of conflicts. Default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"server"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public var mergePolicy: MergePolicy = .server\n")),(0,o.kt)("h3",{id:"forcedatatypeinsteadofasset"},(0,o.kt)("inlineCode",{parentName:"h3"},"forceDataTypeInsteadOfAsset")),(0,o.kt)("p",null,"By default objects with ",(0,o.kt)("inlineCode",{parentName:"p"},"Data")," values will be uploaded as a ",(0,o.kt)("inlineCode",{parentName:"p"},"CKRecord")," with a ",(0,o.kt)("inlineCode",{parentName:"p"},"CKAsset")," field. Set this property to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to force using ",(0,o.kt)("inlineCode",{parentName:"p"},"Data")," in the record instead."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public var forceDataTypeInsteadOfAsset = false\n")),(0,o.kt)("h3",{id:"haschanges"},(0,o.kt)("inlineCode",{parentName:"h3"},"hasChanges")),(0,o.kt)("p",null,"Whether the target context has made any changes that have not been synced to CloudKit yet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public var hasChanges = false\n")),(0,o.kt)("h3",{id:"timestampkey"},(0,o.kt)("inlineCode",{parentName:"h3"},"timestampKey")),(0,o.kt)("p",null,"Records generated by this adapter will use this key to set a change timestamp."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'public static let timestampKey = "QSCloudKitTimestampKey"\n')),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"preparetoimport"},(0,o.kt)("inlineCode",{parentName:"h3"},"prepareToImport()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public func prepareToImport() \n")),(0,o.kt)("h3",{id:"savechangesin"},(0,o.kt)("inlineCode",{parentName:"h3"},"saveChanges(in:)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public func saveChanges(in records: [CKRecord]) \n")),(0,o.kt)("h3",{id:"deleterecordswith"},(0,o.kt)("inlineCode",{parentName:"h3"},"deleteRecords(with:)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public func deleteRecords(with recordIDs: [CKRecord.ID]) \n")),(0,o.kt)("h3",{id:"persistimportedchangescompletion"},(0,o.kt)("inlineCode",{parentName:"h3"},"persistImportedChanges(completion:)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public func persistImportedChanges(completion: @escaping (Error?)->()) \n")),(0,o.kt)("h3",{id:"recordstouploadlimit"},(0,o.kt)("inlineCode",{parentName:"h3"},"recordsToUpload(limit:)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public func recordsToUpload(limit: Int) -> [CKRecord] \n")),(0,o.kt)("h3",{id:"diduploadsavedrecords"},(0,o.kt)("inlineCode",{parentName:"h3"},"didUpload(savedRecords:)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public func didUpload(savedRecords: [CKRecord]) \n")),(0,o.kt)("h3",{id:"recordidsmarkedfordeletionlimit"},(0,o.kt)("inlineCode",{parentName:"h3"},"recordIDsMarkedForDeletion(limit:)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public func recordIDsMarkedForDeletion(limit: Int) -> [CKRecord.ID] \n")),(0,o.kt)("h3",{id:"diddeleterecordids"},(0,o.kt)("inlineCode",{parentName:"h3"},"didDelete(recordIDs:)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public func didDelete(recordIDs: [CKRecord.ID]) \n")),(0,o.kt)("h3",{id:"hasrecordid_"},(0,o.kt)("inlineCode",{parentName:"h3"},"hasRecordID(_:)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public func hasRecordID(_ recordID: CKRecord.ID) -> Bool \n")),(0,o.kt)("h3",{id:"didfinishimportwith"},(0,o.kt)("inlineCode",{parentName:"h3"},"didFinishImport(with:)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public func didFinishImport(with error: Error?) \n")),(0,o.kt)("h3",{id:"savetoken_"},(0,o.kt)("inlineCode",{parentName:"h3"},"saveToken(_:)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public func saveToken(_ token: CKServerChangeToken?) \n")),(0,o.kt)("h3",{id:"deletechangetracking"},(0,o.kt)("inlineCode",{parentName:"h3"},"deleteChangeTracking()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public func deleteChangeTracking() \n")),(0,o.kt)("h3",{id:"recordfor"},(0,o.kt)("inlineCode",{parentName:"h3"},"record(for:)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public func record(for object: AnyObject) -> CKRecord? \n")),(0,o.kt)("h3",{id:"sharefor"},(0,o.kt)("inlineCode",{parentName:"h3"},"share(for:)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@available(iOS 10.0, OSX 10.12, *)\n    public func share(for object: AnyObject) -> CKShare? \n")),(0,o.kt)("h3",{id:"savesharefor"},(0,o.kt)("inlineCode",{parentName:"h3"},"save(share:for:)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@available(iOS 10.0, OSX 10.12, *)\n    public func save(share: CKShare, for object: AnyObject) \n")),(0,o.kt)("h3",{id:"deletesharefor"},(0,o.kt)("inlineCode",{parentName:"h3"},"deleteShare(for:)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@available(iOS 10.0, OSX 10.12, *)\n    public func deleteShare(for object: AnyObject) \n")),(0,o.kt)("h3",{id:"recordstoupdateparentrelationshipsforroot_"},(0,o.kt)("inlineCode",{parentName:"h3"},"recordsToUpdateParentRelationshipsForRoot(_:)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public func recordsToUpdateParentRelationshipsForRoot(_ object: AnyObject) -> [CKRecord] \n")))}u.isMDXComponent=!0}}]);