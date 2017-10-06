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

class JotHomeViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        
        let menuButton = UIBarButtonItem()
        let searchButton = UIBarButtonItem()
        
        let attributes = [NSFontAttributeName: UIFont.fontAwesome(ofSize: 20)] as [String: Any]
        
        menuButton.setTitleTextAttributes(attributes, for: .normal)
        menuButton.tintColor = UIColor(hex: "#404040")
        menuButton.title = String.fontAwesomeIcon(name: .bars)
        
        searchButton.setTitleTextAttributes(attributes, for: .normal)
        searchButton.tintColor = UIColor(hex: "#404040")
        searchButton.title = String.fontAwesomeIcon(name: .search)
        
        self.navigationItem.leftBarButtonItem = menuButton
        self.navigationItem.rightBarButtonItem = searchButton
        
    }
    
}
