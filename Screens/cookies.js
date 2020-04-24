import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, Button, ScrollView, FlatList } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class cookies extends React.Component {

    _toSnickerdoodles() {
        this.setState
        this.props.navigation.navigate('Snickerdoodles')
    }
    _toLemonCrinkle() {
        this.setState
        this.props.navigation.navigate('Lemon Crinkle Cookies')
    }
    _toSnowball() {
        this.setState
        this.props.navigation.navigate('Chocolate Chip Snowball Cookies')
    }
    _toDropCookie() {
        this.setState
        this.props.navigation.navigate('Brownie Drop Cookies')
    }
    _toBiscotti() {
        this.setState
        this.props.navigation.navigate('Chocolate Mint Biscotti')
    }
    _toWhoopie() {
        this.setState
        this.props.navigation.navigate('Whoopie Pies')
    }

    render() {
        return (
            <ScrollView style={styles.text}>

                <View style={styles.cardColumn}>
                    <View>
                        <TouchableOpacity onPress={this._toSnickerdoodles.bind(this)}>
                            <Card style={styles.card}>
                            <View style={styles.cardRow}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../assets/recipeImages/cookies/snickerdoodle.jpg')}
                                />
                                <Text style={styles.cardText}>Snicker-
                                doodles</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this._toLemonCrinkle.bind(this)}>
                            <Card style={styles.card}>
                                <View style={styles.cardRow}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../assets/recipeImages/cookies/lemon_crinkle.jpg')}
                                />
                                <Text style={styles.cardText}>Lemon Crinkle Cookies</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={this._toSnowball.bind(this)}>
                            <Card style={styles.card}>
                            <View style={styles.cardRow}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../assets/recipeImages/cookies/snowball.jpg')}
                                />
                                <Text style={styles.cardText}>Chocolate Chip Snowball Cookies</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this._toDropCookie.bind(this)}>
                            <Card style={styles.card}>
                            <View style={styles.cardRow}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../assets/recipeImages/cookies/drop_cookie.jpg')}
                                />
                                <Text style={styles.cardText}>Brownie Drop Cookies</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={this._toBiscotti.bind(this)}>
                            <Card style={styles.card}>
                            <View style={styles.cardRow}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../assets/recipeImages/cookies/biscotti.jpg')}
                                />
                                <Text style={styles.cardText}>Chocolate Mint Biscotti</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this._toWhoopie.bind(this)}>
                            <Card style={styles.card}>
                            <View style={styles.cardRow}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../assets/recipeImages/cookies/whoopie_pie.jpg')}
                                />
                                <Text style={styles.cardText}>Whoopie Pies</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>
                    </View>
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
    cardText: {
        textAlign: 'center',
        padding: 10,
        marginRight: 20,
        fontSize: 25,
        flex: 1, 
        flexWrap: 'wrap'
    },
    card: {
        padding: 10,
        margin: 10,
        flex: 1,
        flexDirection: 'row'
    },
    cardImage: {
        width: 150,
        height: 150,
    },
    cardRow: {
        flex: 1,
        flexDirection: 'row'
    },
    cardColumn: {
        flex: 1,
        flexDirection: 'column'
    }
})