//
//  ViewController.swift
//  Jot
//
//  Created by Ayman Ahmed on 10/3/17.
//  Copyright © 2017 Ayman Ahmed. All rights reserved.
//

import UIKit
import Hue
import FontAwesome_swift
import SideMenu

class JotHomeViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let menuButton = UIBarButtonItem()
        let searchButton = UIBarButtonItem()
        
        let attributes = [NSFontAttributeName: UIFont.fontAwesome(ofSize: 20)] as [String: Any]
        
        menuButton.setTitleTextAttributes(attributes, for: .normal)
        menuButton.tintColor = UIColor(hex: "#404040")
        menuButton.title = String.fontAwesomeIcon(name: .bars)
        menuButton.target = self
        menuButton.action = #selector(JotHomeViewController.openMenu)
        
        searchButton.setTitleTextAttributes(attributes, for: .normal)
        searchButton.tintColor = UIColor(hex: "#404040")
        searchButton.title = String.fontAwesomeIcon(name: .search)
        
        self.navigationItem.leftBarButtonItem = menuButton
        self.navigationItem.rightBarButtonItem = searchButton
        
        let menuLeftNavigationController = UISideMenuNavigationController(rootViewController: JotMenuViewController())
        menuLeftNavigationController.leftSide = true
        SideMenuManager.menuLeftNavigationController = menuLeftNavigationController
        
        SideMenuManager.menuAddPanGestureToPresent(toView: self.navigationController!.navigationBar)
        SideMenuManager.menuAddScreenEdgePanGesturesToPresent(toView: self.navigationController!.view)
        
        //settings
        SideMenuManager.menuFadeStatusBar = false
        menuLeftNavigationController.setNavigationBarHidden(true, animated: false)
        SideMenuManager.menuAnimationBackgroundColor = UIColor.white
        SideMenuManager.menuPresentMode = .viewSlideInOut

    }
    
    func openMenu() {
        present(SideMenuManager.menuLeftNavigationController!, animated: true, completion: nil)
    }

    
}
