//
//  AppNavigationController.swift
//  Jot
//
//  Created by Ayman Ahmed on 10/4/17.
//  Copyright © 2017 Ayman Ahmed. All rights reserved.
//

import Foundation
import UIKit
import Material

class AppNavigationController: NavigationController {
    open override func prepare() {
        super.prepare()
        
        guard let v = navigationBar as? NavigationBar else {
            return
        }
        
        v.depthPreset = .none
        v.dividerColor = Color.grey.lighten2
    }
    
}
