import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class friedicecream extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/deepfried/fried_icecream.jpg')}
                            />
                            <Text style={styles.cardText}>Fried Icecream</Text>
                            <Text>Soft, cold, and deliciously sweet on the inside all wrapped up in a crunchy layer!{"\n"}
                            </Text>
                            <Text style={styles.subheader}>Servings: 8 Servings{"\n"}</Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>

                            <Text>■ 1 quart vanilla ice cream</Text>
                            <Text>■ 3 cups crushed cornflakes cereal</Text>
                            <Text>■ 1 teaspoon ground cinnamon</Text>
                            <Text>■ 3 egg whites</Text>
                            <Text>■ 2 quarts oil for frying{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text>■ Scoop ice cream into 8 - 1/2 cup sized balls. Place on baking sheet and freeze until firm, about 1 hour.{"\n"}</Text>
                            <Text>■ In a shallow dish, combine cornflakes and cinnamon. In another dish, beat egg whites until foamy. Roll ice cream balls in egg whites, then in cornflakes, covering ice cream completely. Repeat if necessary. Freeze again until firm, 3 hours.{"\n"}</Text>
                            <Text>■ In deep fryer or large, heavy saucepan, heat oil to 375 degrees F (190 degrees C).{"\n"}</Text>
                            <Text>■ Using a basket or slotted spoon, fry ice cream balls 1 or 2 at a time, for 10 to 15 seconds, until golden. Drain quickly on paper towels and serve immediately.{"\n"}</Text>
                            
                           
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