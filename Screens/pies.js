import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, Button, ScrollView, FlatList } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class pies extends React.Component {

    _toLemonPie() {
        this.setState
        this.props.navigation.navigate('Lemon Meringue Pie')
    }
    _toBlackberry() {
        this.setState
        this.props.navigation.navigate('Blackberry Cobbler')
    }
    _toBostonPie() {
        this.setState
        this.props.navigation.navigate('Boston Creme Pie')
    }
    _toBlueberryPie() {
        this.setState
        this.props.navigation.navigate('Blueberry Pie')
    }
    _toAppleCobbler() {
        this.setState
        this.props.navigation.navigate('Apple Cobbler')
    }

    render() {
        return (
            <ScrollView style={styles.text}>

                <View style={styles.cardColumn}>
                    <View>
                        <TouchableOpacity onPress={this._toLemonPie.bind(this)}>
                            <Card style={styles.card}>
                            <View style={styles.cardRow}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../assets/recipeImages/pies/lemon_meringue.jpg')}
                                />
                                <Text style={styles.cardText}>Lemon Meringue Pie</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this._toBlackberry.bind(this)}>
                            <Card style={styles.card}>
                                <View style={styles.cardRow}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../assets/recipeImages/pies/blackberry_cobbler.jpg')}
                                />
                                <Text style={styles.cardText}>Blackberry Cobbler</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={this._toBostonPie.bind(this)}>
                            <Card style={styles.card}>
                            <View style={styles.cardRow}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../assets/recipeImages/pies/boston_creme.jpg')}
                                />
                                <Text style={styles.cardText}>Boston Creme Pie</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this._toBlueberryPie.bind(this)}>
                            <Card style={styles.card}>
                            <View style={styles.cardRow}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../assets/recipeImages/pies/blueberry_pie.jpg')}
                                />
                                <Text style={styles.cardText}>Blueberry Pie</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={this._toAppleCobbler.bind(this)}>
                            <Card style={styles.card}>
                            <View style={styles.cardRow}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../assets/recipeImages/pies/apple_cobbler.jpg')}
                                />
                                <Text style={styles.cardText}>Apple Cobbler</Text>
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