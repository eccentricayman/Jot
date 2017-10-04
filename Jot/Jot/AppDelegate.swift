//
//  AppDelegate.swift
//  Jot
//
//  Created by Ayman Ahmed on 10/3/17.
//  Copyright © 2017 Ayman Ahmed. All rights reserved.
//

import UIKit
import Material

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func applicationDidFinishLaunching(_ application: UIApplication) {
        window = UIWindow(frame: Screen.bounds)
        window!.rootViewController = AppNavigationController(rootViewController: ViewController())
        window!.makeKeyAndVisible()
    }

}

