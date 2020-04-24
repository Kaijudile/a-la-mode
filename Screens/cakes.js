import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, Button, ScrollView, FlatList } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class cakes extends React.Component {

    _toBlackForest() {
        this.setState
        this.props.navigation.navigate('Black Forest Gateau')
    }
    _toRedVelvet() {
        this.setState
        this.props.navigation.navigate('Red Velvet Cake')
    }
    _toTiramisu() {
        this.setState
        this.props.navigation.navigate('Tiramisu')
    }
    _toGenoise() {
        this.setState
        this.props.navigation.navigate('Genoise Cake')
    }
    _toChiffon() {
        this.setState
        this.props.navigation.navigate('Chiffon Cake')
    }
    _toPineapple() {
        this.setState
        this.props.navigation.navigate('Pineapple Upside Down Cake')
    }

    render() {
        return (
            <ScrollView style={styles.text}>

                <View style={styles.cardColumn}>
                    <View>
                        <TouchableOpacity onPress={this._toBlackForest.bind(this)}>
                            <Card style={styles.card}>
                            <View style={styles.cardRow}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../assets/recipeImages/cakes/black_forest.jpg')}
                                />
                                <Text style={styles.cardText}>Black Forest Gateau</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity  onPress={this._toRedVelvet.bind(this)}>
                            <Card style={styles.card}>
                                <View style={styles.cardRow}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../assets/recipeImages/cakes/red_velvet.jpg')}
                                />
                                <Text style={styles.cardText}>Red Velvet Cake</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={this._toTiramisu.bind(this)}>
                            <Card style={styles.card}>
                            <View style={styles.cardRow}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../assets/recipeImages/cakes/tiramisu.jpg')}
                                />
                                <Text style={styles.cardText}>Tiramisu</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this._toGenoise.bind(this)}>
                            <Card style={styles.card}>
                            <View style={styles.cardRow}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../assets/recipeImages/cakes/Genoise.jpg')}
                                />
                                <Text style={styles.cardText}>Genoise Cake</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={this._toChiffon.bind(this)}>
                            <Card style={styles.card}>
                            <View style={styles.cardRow}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../assets/recipeImages/cakes/chiffon.jpg')}
                                />
                                <Text style={styles.cardText}>Chiffon Cake</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this._toPineapple.bind(this)}>
                            <Card style={styles.card}>
                            <View style={styles.cardRow}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../assets/recipeImages/cakes/upside_down.jpg')}
                                />
                                <Text style={styles.cardText}>Pineapple Upside Down Cake</Text>
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