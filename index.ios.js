//import firebase
import * as firebase from 'firebase';

//import react stuff
import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';

// styling
const styles = require('./styles.js');

//tools

// Initialize Firebase
const firebaseConfig = {
	apiKey: "<your-api-key>",
	authDomain: "<your-auth-domain>",
	databaseURL: "<your-database-url>",
	storageBucket: "<your-storage-bucket>"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class Jot extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to React Native!
				</Text>
				<Text style={styles.instructions}>
					To get started, edit index.ios.js
				</Text>
				<Text style={styles.instructions}>
					Press Cmd+R to reload,{'\n'}
					Cmd+D or shake for dev menu
				</Text>
			</View>
		);
	}
}

AppRegistry.registerComponent('Jot', () => Jot);
