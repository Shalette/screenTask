import React from 'react';
import styled from 'styled-components';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar, Button} from "react-native-elements";
import { ScrollView } from 'react-native';
export default class App extends React.Component {
	render() {
		return (
			<Safe>
			<ScrollView
		     contentContainerStyle={{
		       flexGrow: 1,
		       justifyContent: 'space-between',
					 backgroundColor: '#161616',
		   }}>
				<Container style={{flex: 3}}>
				<Background style={{flex: 3}} source={require('./assets/img/bg.png')}>
					<LinearGradient colors={['rgba(21, 21, 21, 0.1)', 'rgba(22, 22, 22, 0.8)', '#151515']} locations={[0.35,0.68,0.9]} style={styles.linearGradient}>
					<Container style={{position: 'relative', top: 20, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between'}}>
						<Container style={{ flex: 9, flexDirection: 'column', alignItems: 'flex-start'}}>
							<Text style={{ fontSize: 34, paddingBottom: 0}}>Band In A Box</Text>
							<Text style={{fontSize: 16, paddingTop: 0 }}>29 October 2019 | 20:00 PM</Text>
						</Container>
						<Icon name="bookmark" color="white" size={25} style={{flex: 1, padding: 30}} />
					</Container>
					</LinearGradient>
				</Background>
					<Container style={{flexDirection: 'row', backgroundColor: '#151515', padding:20 }}>
			      <Avatar size="small" rounded source={{uri:remote}} avatarStyle={styles.avatar}/>
			      <Avatar size="small" rounded source={{uri:remote}} containerStyle={{position: 'relative', right: 10}} avatarStyle={styles.avatar}/>
			      <Avatar size="small" rounded source={{uri:remote}} containerStyle={{position: 'relative', right: 20}} avatarStyle={styles.avatar}/>
			      <Avatar size="small" rounded source={{uri:remote}} containerStyle={{position: 'relative', right: 30}} avatarStyle={styles.avatar}/>
			      <Avatar size="small" rounded title="+20" containerStyle={{position: 'relative', right: 40}} titleStyle={styles.title} overlayContainerStyle={{backgroundColor:'white'}}/>
			    </Container>
				</Container>
				<Container style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>
			    <Button buttonStyle={ [styles.button, styles.border] } titleStyle={ styles.content }
			      title="Remind Me"  icon={ <Icon name="bell" size={15} color="white" /> } iconRight/>
			    <Button containerStyle={{marginRight: 100}} buttonStyle={[styles.button, {backgroundColor: '#3e424e'}] } titleStyle={ styles.content }
			      title="Get Direction" icon={ <Icon name="arrow-circle-right" size={20} color="white" /> } iconRight/>
			  </Container>
				<Container style={{flex: 1}}>
			    <Text style={styles.header} >Description</Text>
			    <Text style={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
			    <Container style={{flexDirection: 'row'}}>
			      <Container style={{flex: 1}}>
			        <Text style={styles.header} >Location</Text>
			        <Text style={styles.info}>WeWork, Residency Rd.
			        Bengaluru, Karnataka</Text>
			      </Container>
			      <Container style={{flex: 1}}>
			        <Text style={styles.header} >Genre</Text>
			        <Text style={styles.info}>Jazz, Instrument</Text>
			      </Container>
			    </Container>
			    <Container style={{flexDirection: 'row'}}>
			      <Container style={{flex: 1}}>
			        <Text style={styles.header} >Date</Text>
			        <Text style={styles.info}>29 October 2019</Text>
			      </Container>
			      <Container style={{flex: 1, paddingBottom: 30 }}>
			        <Text style={styles.header} >Time</Text>
			        <Text style={styles.info}>20:00 PM</Text>
			      </Container>
			    </Container>
					</Container>
					<Container style={{backgroundColor: 'white', flexDirection:'row', justifyContent:'space-around'}}>
					<Text style={{fontSize: 16, color: '#161616'}}>INR 200</Text>
						<Container style={{backgroundColor: 'white', flexDirection:'row', alignItems:'flex-start', justifyContent:'space-around'}}>
							<Text style={{fontSize: 16, fontWeight: 'bold', color: '#161616'}}>Buy Tickets</Text>
							<Icon name="arrow-right" color="black" size={20}  style={{position: 'relative', top: 20, right: 10}}/>
						</Container>
					</Container>

					<Container style={{ flexDirection:'row', justifyContent:'space-between', padding: 25}}>
					<Icon name="home" color="white" size={25} />
					<Icon name="fa-ticket-alt" color="white" size={25} />
					<Icon name="bookmark" color="white" size={25} />
					<Icon name="bell" color="white" size={25} />
					<Avatar size="small" rounded source={{uri:remote}} avatarStyle={styles.avatar}/>

					</Container>
			</ScrollView>
			</Safe>

		);
	}
}
const remote = 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg';
const Container = styled.View``;
const Safe = styled.SafeAreaView``;
const Text = styled.Text`
	font-weight: 500;
	color: white;
	padding: 20px;
	backgroundColor: transparent;
`;
const Background = styled.ImageBackground`
	width: 100%;
	height: 320px;
`;

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
  },
	avatar:{
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: 50,
	},
	title:{
		color: 'black',
	},
	header:{
		fontSize: 12,
		paddingBottom: 0,
		color: '#b7b7b7',
	},
	info:{
		fontSize: 14,
		paddingBottom: 0,
	},
	button:{
		flex: 1,
		width: '80%',
		padding: 15,
		backgroundColor: '#161616',
		borderRadius: 4,
	},
	border:{
		borderColor: 'white',
		borderWidth: 1,
	},
	content:{
		fontSize: 16,
		paddingRight: 8,
	}
});
