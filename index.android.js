const firebase = require("firebase");

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	Image,
	Button,
	TouchableNativeFeedback,
	UIManager,
	View
} from 'react-native';

//material design
import {
	Toolbar,
	COLOR,
	ThemeProvider,
	Icon,
	ActionButton
} from 'react-native-material-ui';

UIManager.setLayoutAnimationEnabledExperimental && 
UIManager.setLayoutAnimationEnabledExperimental(true);

const uiTheme = {
	palette: {
		primaryColor: COLOR.white
	},
	toolbar: {
		container: {
			height: 50
		}
	}
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

var googleSignIn = function() {

}

export default class Jot extends Component {
	render() {
		return (
			<ThemeProvider uiTheme={uiTheme}>
				<View style={styles.container}>
				<Toolbar
					leftElement = {
						<TouchableNativeFeedback
							onPress={() => googleSignIn()}
							useForeground={true}
							underlayColor={ 'transparent' }
							background={TouchableNativeFeedback.Ripple('#fff', true)}>
							<View style={styles.userImageWrapper}>
								<Image
								source={require('./static/default_user.png')}
								style={styles.userImage}>
								</Image>
							</View>
						</TouchableNativeFeedback>
					}
					centerElement={ <Text style={styles.title}>Jot</Text> }
					searchable = {{
						autoFocus: true,
						placeholder: 'Search'
					}}
					style = {{
						rightElement: { color: COLOR.grey900 }
					}}></Toolbar>

					<ActionButton
						style = {{
							container: { backgroundColor: COLOR.grey900 },
							icon: { fontSize: 26 }
						}}
					/>
				</View>
			</ThemeProvider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#FAFAFA'
	},
	title: {
		color: "#212121",
		fontWeight: "500",
		fontSize: 20
	},
	userImageWrapper: {
		width: 30, 
		height: 30, 
		alignItems: "center", 
		justifyContent: "center", 
		borderRadius: 30,
		marginLeft: 10
	},
	userImage: {
		borderRadius: 30,
		width: 30,
		height: 30
	}
});

AppRegistry.registerComponent('Jot', () => Jot);
