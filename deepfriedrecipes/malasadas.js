import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class malasadas extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/deepfried/malasadas.jpg')}
                            />
                            <Text style={styles.cardText}>Malasadas</Text>
                            <Text>Aloha! Here in Hawaii, malasadas are the ONLY donuts we have! They are sold at fundraisers and are very popular. There are many Portuguese descendants in the islands. Onolicious!{"\n"}
                            </Text>
                            <Text style={styles.subheader}>Servings: 1 Dozen{"\n"}</Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>
                            <Text>■ 1 (1/4-ounce) package Fleischmann’s active dry yeast</Text>
                            <Text>■ 1/4 cup warm water</Text>
                            <Text>■ 6 cups flour</Text>
                            <Text>■ 1/2 cup sugar, plus 1 teaspoon, separated</Text>
                            <Text>■ 1/2 teaspoon salt</Text>
                            <Text>■ 1/4 cup melted butter or margarine</Text>
                            <Text>■ 1 cup water</Text>
                            <Text>■ 1 cup evaporated milk</Text>
                            <Text>■ 6 eggs</Text>
                            <Text>■ 1 quart vegetable oil, for frying</Text>
                            <Text>■ 1/2 cup sugar, for sprinkling{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text>■ In a bowl, dissolve yeast, 1 teaspoon sugar, and water, and set aside. In a separate bowl, beat eggs, and set aside.{"\n"}</Text>
                            <Text>■ Measure flour into a separate mixing bowl and add salt. Make a well in the flour, pour yeast mixture, eggs, 1/2 cup sugar, butter, 1 cup water, and evaporated milk. Beat in circular motion until the dough is soft. Cover, let raise until double. Turn dough over but do not punch down. Cover and let raise again.{"\n"}</Text>
                            <Text>■ Heat oil to 375°F and drop dough by the teaspoon into oil and cook until brown. If the malasadas have a tendency to come out with the center still doughy, turn the heat down on the oil which will allow them to cook longer.{"\n"}</Text>
                            <Text>■ Toss with sugar while still warm. Best served hot.{"\n"}</Text>
                            
                           
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
    },
    cardText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 25,
    },
    header: {
        textAlign: 'center',
        fontSize: 19
    },
    subheader: {
        fontSize: 18
    }

})