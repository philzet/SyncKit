// swift-tools-version:5.3
import PackageDescription

let package = Package(
    name: "PZSyncKit",
    platforms: [
        .macOS(.v10_12),
        .iOS(.v11),
        .tvOS(.v11),
        .watchOS(.v3)
    ],
    products: [
        .library(name: "PZSyncKit/CoreData", targets: ["PZSyncKit/CoreData"]),
        .library(name: "PZSyncKit/Realm", targets: ["PZSyncKit/Realm"]),
        .library(name: "PZSyncKit/RealmSwift", targets: ["PZSyncKit/RealmSwift"])],
    dependencies: [
        .package(url: "https://github.com/realm/realm-cocoa", from: "10.5.2")
    ],
    targets: [
        .target(
            name: "PZSyncKit/CoreData",
            dependencies: [],
            path: "PZSyncKit/Classes/CoreData",
            resources: [
                .process("QSCloudKitSyncModel.xcdatamodeld")
            ],
            swiftSettings: [
                .define("SPM")
            ]
        ),
         .target(
            name: "PZSyncKit/Realm",
            dependencies: [
                .product(name: "Realm", package: "realm-cocoa")
            ],
            path: "PZSyncKit/Classes/Realm"
        ),
        .target(
            name: "PZSyncKit/RealmSwift",
            dependencies: [
                .product(name: "RealmSwift", package: "realm-cocoa"),
                .product(name: "Realm", package: "realm-cocoa")
            ],
            path: "PZSyncKit/Classes/RealmSwift"
        )
    ],
    swiftLanguageVersions: [.v5]
)
