const firebase = require("firebase");

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';

//material design
import { Toolbar, COLOR, ThemeProvider } from 'react-native-material-ui';
const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

// Initialize Firebase
import data from './keys.json';

const firebaseConfig = {
	apiKey: data['api-key'],
    authDomain: data['authentication-domain'],
    databaseURL: data["database-url"],
    projectId: data['project-id'],
    storageBucket: data['storage-bucket'],
    messagingSenderId: data['messaging-sender-id']
};
firebase.initializeApp(firebaseConfig);

// Create a reference with .ref() instead of new Firebase(url)
const rootRef = firebase.database().ref();
const itemsRef = rootRef.child('items');

export default class Jot extends Component {
  render() {
      return (
		  <ThemeProvider uiTheme={uiTheme}>
			  <View style={styles.container}>
				  <Toolbar
					  leftElement="menu"
					  centerElement="Searchable"
					  searchable={{
						  autoFocus: true,
						  placeholder: 'Search',
					  }} />
			  </View>
		  </ThemeProvider>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Jot', () => Jot);
