import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, Button, ScrollView, FlatList } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class deepfried extends React.Component {

    _toBeignets() {
        this.setState
        this.props.navigation.navigate('Beignets')
    }
    _toMalasadas() {
        this.setState
        this.props.navigation.navigate('Malasadas')
    }
    _toIceCream() {
        this.setState
        this.props.navigation.navigate('Fried Icecream')
    }
    _toFunnelCake() {
        this.setState
        this.props.navigation.navigate('Funnel Cake')
    }
    _toChurros() {
        this.setState
        this.props.navigation.navigate('Chocolate Dipped Churros')
    }
    _toOreos() {
        this.setState
        this.props.navigation.navigate('Fried Oreos')
    }

    render() {
        return (
            <ScrollView style={styles.text}>

                <View style={styles.cardColumn}>
                    <View>
                        <TouchableOpacity onPress={this._toBeignets.bind(this)}>
                            <Card style={styles.card}>
                            <View style={styles.cardRow}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../assets/recipeImages/deepfried/beignets.jpg')}
                                />
                                <Text style={styles.cardText}>Beignets</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this._toMalasadas.bind(this)}>
                            <Card style={styles.card}>
                                <View style={styles.cardRow}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../assets/recipeImages/deepfried/malasadas.jpg')}
                                />
                                <Text style={styles.cardText}>Malasadas</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={this._toIceCream.bind(this)}>
                            <Card style={styles.card}>
                            <View style={styles.cardRow}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../assets/recipeImages/deepfried/fried_icecream.jpg')}
                                />
                                <Text style={styles.cardText}>Fried Icecream</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this._toFunnelCake.bind(this)}>
                            <Card style={styles.card}>
                            <View style={styles.cardRow}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../assets/recipeImages/deepfried/funnel_cake.jpg')}
                                />
                                <Text style={styles.cardText}>Funnel Cake</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={this._toChurros.bind(this)}>
                            <Card style={styles.card}>
                            <View style={styles.cardRow}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../assets/recipeImages/deepfried/dipped_churros.jpg')}
                                />
                                <Text style={styles.cardText}>Chocolate Dipped Churros</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this._toOreos.bind(this)}>
                            <Card style={styles.card}>
                            <View style={styles.cardRow}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../assets/recipeImages/deepfried/fried_oreos.jpg')}
                                />
                                <Text style={styles.cardText}>Fried Oreos</Text>
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