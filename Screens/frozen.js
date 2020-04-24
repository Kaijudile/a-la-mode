import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, Button, ScrollView, FlatList } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class frozen extends React.Component {

    _toSmoothie() {
        this.setState
        this.props.navigation.navigate('Strawberry Banana Smoothie')
    }
    _toBatterPops() {
        this.setState
        this.props.navigation.navigate('Cake Batter Pops')
    }
    _toOrangeShake() {
        this.setState
        this.props.navigation.navigate('Orange Creamsicle Shake')
    }
    _toShortcakePop() {
        this.setState
        this.props.navigation.navigate('Strawberry Shortcake Icecream Pop')
    }

    render() {
        return (
            <ScrollView style={styles.text}>

                <View style={styles.cardColumn}>
                    <View>
                        <TouchableOpacity onPress={this._toSmoothie.bind(this)}>
                            <Card style={styles.card}>
                            <View style={styles.cardRow}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../assets/recipeImages/frozen/strawberry_banana.jpg')}
                                />
                                <Text style={styles.cardText}>Strawberry Banana Smoothie</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this._toBatterPops.bind(this)}>
                            <Card style={styles.card}>
                                <View style={styles.cardRow}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../assets/recipeImages/frozen/cake_batter.jpg')}
                                />
                                <Text style={styles.cardText}>Cake Batter Pops</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={this._toOrangeShake.bind(this)}>
                            <Card style={styles.card}>
                            <View style={styles.cardRow}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../assets/recipeImages/frozen/orange_creamsicle.jpg')}
                                />
                                <Text style={styles.cardText}>Orange Creamsicle Shake</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this._toShortcakePop.bind(this)}>
                            <Card style={styles.card}>
                            <View style={styles.cardRow}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../assets/recipeImages/frozen/shortcake_pop.jpg')}
                                />
                                <Text style={styles.cardText}>Strawberry Shortcake Icecream Pop</Text>
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