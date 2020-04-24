import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class beignets extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/deepfried/beignets.jpg')}
                            />
                            <Text style={styles.cardText}>Beignets</Text>
                            <Text>A traditional New Orleans-style recipe for their famous beignets! Grab a cafe au lait and you're set!{"\n"}
                            </Text>
                            <Text style={styles.subheader}>Servings: 2 Dozen{"\n"}</Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>

                            <Text>■ 2 ¼ teaspoons active dry yeast</Text>
                            <Text>■ 1 ½ cups warm water (110 degrees F/45 degrees C)</Text>
                            <Text>■ ½ cup white sugar</Text>
                            <Text>■ 1 teaspoon salt</Text>
                            <Text>■ 2 eggs</Text>
                            <Text>■ 1 cup evaporated milk</Text>
                            <Text>■ 7 cups all-purpose flour</Text>
                            <Text>■ ¼ cup shortening</Text>
                            <Text>■ 1 quart vegetable oil for frying</Text>
                            <Text>■ ¼ cup confectioners' sugar{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>
                            
                            <Text>■ In a large bowl, dissolve yeast in warm water. Add sugar, salt, eggs, evaporated milk, and blend well. Mix in 4 cups of the flour and beat until smooth. Add the shortening, and then the remaining 3 cups of flour. Cover and chill for up to 24 hours.{"\n"}</Text>
                            <Text>■ Roll out dough 1/8 inch thick. Cut into 2 1/2 inch squares. Fry in 360 degree F (180 degrees C) hot oil. If beignets do not pop up, oil is not hot enough. Drain onto paper towels.{"\n"}</Text>
                            <Text>■ Shake confectioners' sugar on hot beignets. Serve warm.{"\n"}</Text>
                            
                           
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