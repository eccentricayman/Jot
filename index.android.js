import React, { Component, PropTypes } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Image,
	StatusBar,
	ScrollView
} from 'react-native';

//ui components
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, View, Title, Right, List, ListItem } from 'native-base';
//navigation
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
//google signin
//import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

// GoogleSignin.configure({
// 	webClientId: "",
// 	offlineAccess: true
// })
// .then(() => {
// 	const user = GoogleSignin.currentUser();
// });

class JotHome extends React.Component {
	render() {
		return (
			<Container>
				<Header style={styles.topBar}>
					<Left style={styles.topBarLeft}>
						<Button
							transparent
							onPress={() => this.props.navigation.navigate('DrawerOpen')}>
							<Icon name="menu" style={styles.topBarIcon} />
						</Button>
					</Left>
					<Body style={styles.topBarBody}>
						<Title style={styles.topBarTitle}>Jot</Title>
					</Body>
					<Right />
				</Header>
				<Content>
					<Card style={styles.cardPreview}>
						<CardItem>
							<Left>
								<Body>
									<Text>Note Title</Text>
									<Text note>April 15, 2016</Text>
								</Body>
							</Left>
						</CardItem>
						<CardItem>
							<Body>
								<Text>
									Note summary
								</Text>
							</Body>
						</CardItem>
					</Card>
					<Card style={styles.cardPreview}>
						<CardItem>
							<Left>
								<Body>
									<Text>Note Title</Text>
									<Text note>April 15, 2016</Text>
								</Body>
							</Left>
						</CardItem>
						<CardItem>
							<Body>
								<Text>
									Note summary
								</Text>
							</Body>
						</CardItem>
					</Card>
					<Card style={styles.cardPreview}>
						<CardItem>
							<Left>
								<Body>
									<Text>Note Title</Text>
									<Text note>April 15, 2016</Text>
								</Body>
							</Left>
						</CardItem>
						<CardItem>
							<Body>
								<Text>
									Note summary
								</Text>
							</Body>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}

const JotDrawer = (props) => (
	
	<ScrollView style={styles.container}>
		
		<Image style={styles.userImage} source={require("./static/default_user.png")} />
		<List>
			<ListItem itemDivider>
				<Text style={{textAlign: "center"}}>Starred Notes</Text>
			</ListItem>
			<ListItem>
				<Text>first note</Text>
			</ListItem>
			<ListItem>
				<Text>first note</Text>
			</ListItem>
			<ListItem>
				<Text>first note</Text>
			</ListItem>
			<ListItem>
				<Text>first note</Text>
			</ListItem>
			<ListItem>
				<Text>first note</Text>
			</ListItem>
			<ListItem>
				<Text>first note</Text>
			</ListItem>
			<ListItem>
				<Text>first note</Text>
			</ListItem>
			<ListItem>
				<Text>first note</Text>
			</ListItem>
			<ListItem>
				<Text>first note</Text>
			</ListItem>
			<ListItem>
				<Text>first note</Text>
			</ListItem>
			<ListItem>
				<Text>first note</Text>
			</ListItem>
			<ListItem>
				<Text>first note</Text>
			</ListItem>
			<ListItem>
				<Text>first note</Text>
			</ListItem>
			<ListItem>
				<Text>first note</Text>
			</ListItem>
			<ListItem>
				<Text>first note</Text>
			</ListItem>
			<ListItem>
				<Text>first note</Text>
			</ListItem>
		</List>
	</ScrollView>
);

export default Jot = DrawerNavigator({
	Home: { screen: JotHome }
}, {
	contentComponent: JotDrawer
});

var styles = StyleSheet.create({
	cardPreview: {
		width: "95%",
		alignSelf: "center",
		marginTop: "2.5%",
		marginBottom: 0
	},
	topBar: {
		backgroundColor: "#FFFFFF"
	},
	topBarLeft: {
		paddingRight: 0,
		marginRight: 0,
		width: "5%"
	},
	topBarIcon: {
		color: "#404040"
	},
	topBarBody: {
		paddingLeft: 0,
		marginLeft: 0
	},
	topBarTitle: {
		color: "#404040"
	},
	userImage: {
		alignSelf: "center",
		marginTop: "5%",
		marginBottom: "5%",
		width: 100,
		height: 100,
		borderRadius: 100
	}
});

// if you are using create-react-native-app you don't need this line
AppRegistry.registerComponent('Jot', () => Jot);
