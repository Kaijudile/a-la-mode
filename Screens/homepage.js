import React from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    KeyboardAvoidingView,
    SafeAreaView,
    TouchableWithoutFeedback,
    Button,
    ScrollView
} from 'react-native';
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class homepage extends React.Component {
    _toCakes() {
        this.setState
        this.props.navigation.navigate('Cakes')
    }
    _toCookies() {
        this.setState
        this.props.navigation.navigate('Cookies')
    }
    _toDeepfried(){
        this.setState
        this.props.navigation.navigate('Deep Fried')
    }
    _toFrozen(){
        this.setState
        this.props.navigation.navigate('Frozen')
    }
    _toPies(){
        this.setState
        this.props.navigation.navigate('Pies and Cobblers')
    }
    _toPastries(){
        this.setState
        this.props.navigation.navigate('Pastries')
    }


    render() {
        return (
            <ScrollView>
                <View>

                    <Card style={styles.card}>
                        <Text  style={styles.text}>Desserts By Category</Text>
                    </Card>
                    <TouchableOpacity onPress={this._toCakes.bind(this)}>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/cake_category.jpg')}
                            />
                            <Text style={styles.text}>Cakes</Text>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._toCookies.bind(this)}>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/cookie_category.jpg')}
                            />
                            <Text style={styles.text}>Cookies</Text>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={this._toDeepfried.bind(this)}>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/deep_fried.jpg')}
                            />
                            <Text style={styles.text}>Doughnuts and Other Deep Fried Desserts </Text>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._toFrozen.bind(this)}>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/frozen_category.jpg')}
                            />
                            <Text style={styles.text}>Frozen Desserts</Text>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._toPies.bind(this)}>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/pie_category.jpg')}
                            />
                            <Text style={styles.text}>Pies and Cobblers</Text>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._toPastries.bind(this)}>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/pastry_category.jpg')}
                            />
                            <Text style={styles.text}>Pastries</Text>
                        </Card>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20
    },
    card: {
        flex: 1,
        padding: 10,
        margin: 10,
    },
    cardImage: {

        width: 330,
        height: 330,
    }
})