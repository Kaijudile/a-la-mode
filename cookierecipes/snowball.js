import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class snowball extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/cookies/snowball.jpg')}
                            />
                            <Text style={styles.cardText}>Chocolate Chip Snowball Cookies</Text>
                            <Text>These Mini Chip Snowball Cookies will add an attractive contrast to any holiday or special occasion cookie selection with their round shape and powdered sugar coating.{"\n"}
                            </Text>
                            <Text style={styles.subheader}>Servings: 5 Dozen Cookies{"\n"}</Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>

                            <Text>■ 1 1/2 cups (3 sticks) butter or margarine, softened</Text>
                            <Text>■ 3/4 cup powdered sugar</Text>
                            <Text>■ 1 tablespoon vanilla extract</Text>
                            <Text>■ 1/2 teaspoon salt</Text>
                            <Text>■ 3 cups all-purpose flour</Text>
                            <Text>■ 2 cups (12-ounce package) NESTLÉ® TOLL HOUSE® Semi-Sweet Chocolate Mini Morsels</Text>
                            <Text>■ 1/2 cup finely chopped nuts</Text>
                            <Text>■ Powdered sugar{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text>■ Preheat oven to 375° F.(190 degrees C).{"\n"}</Text>
                            <Text>■ Beat butter, sugar, vanilla extract and salt in large mixer bowl until creamy. Gradually beat in flour; stir in morsels and nuts. Shape level tablespoons of dough into 1 1/4-inch balls. Place on ungreased baking sheets.{"\n"}</Text>
                            <Text>■ Bake for 10 to 12 minutes or until cookies are set and lightly browned. Remove from oven. Sift powdered sugar over hot cookies on baking sheets. Cool on baking sheets for 10 minutes; remove to wire racks to cool completely. Sprinkle with additional powdered sugar, if desired. Store in airtight containers.{"\n"}</Text>
                            
                           
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