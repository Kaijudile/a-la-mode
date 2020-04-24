import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import Navigator from '../routes/homeStack';

export default class frontpage extends React.Component{

  _toLogin() {
    this.setState
    this.props.navigation.navigate('Login')
  }
  
  _toSignUp() {
    this.setState
    this.props.navigation.navigate('Sign Up')
  }

  render() {
    return (

     
      <ImageBackground
        source={require('../assets/background2.jpg')}
        style={styles.background}
      >
        <View>
        
          <Image
            source={require('../assets/logo2.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          
        </View>
        <TouchableOpacity onPress={this._toSignUp.bind(this)}>
          <Text style={styles.signup}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this._toLogin.bind(this)}>
          <Text style={styles.signin}>Log In</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }

  

}


const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 280,
    height: 280,
    marginLeft: '12%',
    marginTop: '12%',
    marginBottom: -35
  },
  text: {
    color: '#5e381d',
    marginTop: '5%',
    marginLeft: '15%',
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'monospace' //'MarckScript-Regular'
  },
  signup: {
    backgroundColor: 'white',
    color: '#ff706e',
    width: "70%",
    borderRadius: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '13%',
    padding: "2%",
    fontSize: 30,
    marginTop: '35%'
  },
  signin: {
    backgroundColor: '#ff706e',
    color: 'white',
    width: "65%",
    borderRadius: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '15%',
    padding: "2%",
    fontSize: 26,
    marginTop: '10%'
  }
});
