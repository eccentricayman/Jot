//
//  ViewController.swift
//  Jot
//
//  Created by Ayman Ahmed on 10/3/17.
//  Copyright © 2017 Ayman Ahmed. All rights reserved.
//

import UIKit
import Material

class ViewController: UIViewController {
    fileprivate var menuButton: IconButton!
    fileprivate var searchButton: IconButton!
    
    fileprivate var fabButton: FABButton!
    
    open override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = Color.grey.lighten5
        
        prepareMenuButton()
        prepareSearchButton()
        prepareNavigationItem()
        prepareFABButton()
    }
}

fileprivate extension ViewController {
    func prepareMenuButton() {
        menuButton = IconButton(image: Icon.cm.menu)
        //menuButton.addTarget(self, action: #selector(handleMenuButton), for: .touchUpInside)
    }
    
    func prepareSearchButton() {
        searchButton = IconButton(image: Icon.cm.search)
    }
    
    func prepareNavigationItem() {
        navigationItem.titleLabel.text = "Jot"
        
        navigationItem.leftViews = [menuButton]
        navigationItem.rightViews = [searchButton]
    }
    
    func prepareFABButton() {
        fabButton = FABButton(image: Icon.cm.add)
        view.layout(fabButton).width(64).height(64).bottom(24).right(24)
    }
}
