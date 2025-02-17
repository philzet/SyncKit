//
//  EntityWithEncryptedFields.swift
//  EntityWithEncryptedFields
//
//  Created by Manuel on 09/08/2021.
//  Copyright © 2021 Manuel Entrena. All rights reserved.
//

import Foundation
import Realm
import CloudKit
import PZSyncKit

class EntityWithEncryptedFields: RLMObject, PrimaryKey, EncryptedObject {
    
    @objc dynamic var name: String = ""
    @objc dynamic var identifier = ""
    @objc dynamic var secret: String = ""
    
    override class func primaryKey() -> String {
        return "identifier"
    }
    
    class func encryptedFields() -> [String] {
        ["secret"]
    }
}
