import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, Keyboard, TouchableWithoutFeedback } from 'react-native';
//import firebase from '../database/firebase';


export default class signup extends Component {

    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            isLoading: false
        }
    }

    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    //would be used to register new users with firebase
    registerUser = () => {
        if (this.state.email === '' && this.state.password === '') {
            Alert.alert('Enter details to signup!')
        } else {
            this.setState({
                isLoading: true,
            })
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then((res) => {
                    res.user.updateProfile({
                        displayName: this.state.displayName
                    })
                    console.log('User registered successfully!')
                    this.setState({
                        isLoading: false,
                        displayName: '',
                        email: '',
                        password: ''
                    })
                    this.props.navigation.navigate('Login')
                })
                .catch(error => this.setState({ errorMessage: error.message }))
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.preloader}>
                    <ActivityIndicator size="large" color="#9E9E9E" />
                </View>
            )
        }
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View style={styles.container}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Name"
                        value={this.state.displayName}
                        onChangeText={(val) => this.updateInputVal(val, 'displayName')}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Email"
                        value={this.state.email}
                        onChangeText={(val) => this.updateInputVal(val, 'email')}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Password"
                        value={this.state.password}
                        onChangeText={(val) => this.updateInputVal(val, 'password')}
                        maxLength={15}
                        secureTextEntry={true}
                    />
                    <Button
                        borderRadius="10"
                        color="#ffa8d5"
                        title="Sign Up"
                        //onPress={() => this._toHome()}
                    />

                    <Text
                        style={styles.loginText}
                        onPress={() => this.props.navigation.navigate('Login')}>
                        Already Registered? Click here to login
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 35,
        backgroundColor: '#fff'
    },
    inputStyle: {
        width: '100%',
        marginBottom: 15,
        paddingBottom: 15,
        alignSelf: "center",
        borderColor: "#ccc",
        borderBottomWidth: 1
    },
    loginText: {
        color: '#ff706e',
        marginTop: 25,
        textAlign: 'center'
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    button:{
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