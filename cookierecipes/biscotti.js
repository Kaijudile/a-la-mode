import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class biscotti extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/cookies/biscotti.jpg')}
                            />
                            <Text style={styles.cardText}>Chocolate Mint Biscotti</Text>
                            <Text>This is the basic chocolate biscotti recipe that is already so full of chocolate flavor, only this variation add a touch of mint to make it more decadent!{"\n"}
                            </Text>
                            <Text style={styles.subheader}>Servings: About 2 Dozen Cookies{"\n"}</Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>

                            <Text>■ 2 1/2 cups all-purpose flou</Text>
                            <Text>■ 1 1/3 cups sugar</Text>
                            <Text>■ 3/4 cups unsweetened cocoa powder</Text>
                            <Text>■ 2 tsp baking powder</Text>
                            <Text>■ 1/2 tsp salt</Text>
                            <Text>■ 3 eggs</Text>
                            <Text>■ 1 stick of butter, melted</Text>
                            <Text>■ 1 teaspoon pure vanilla extract</Text>
                            <Text>■ 1 tsp mint or peppermint extract</Text>
                            <Text>■ 6 oz semi-sweet chocolate chips</Text>
                            <Text>■ 1 pkg Andes mint chocolates, roughly chopped, 28 piece package{"\n"}</Text>

                            <Text style={styles.subheader}>Garnish:{"\n"}</Text>
                            <Text>■ melted mint or semi-sweet chocolate drizzled</Text>
                            <Text>■ chopped Andes mints on top of drizzled chocolate</Text>
                            <Text>■ crushed peppermint on top of drizzled chocolate{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text>■ Preheat oven to 325° F. In medium bowl, mix flour, sugar, cocoa, baking powder, and salt.{"\n"}</Text>
                            <Text>■ In large bowl, with mixer at medium speed, beat butter, eggs, vanilla and peppermint extract until mixed.{"\n"}</Text>
                            <Text>■ Reduce speed to low; gradually add flour mixture and beat just until blended.{"\n"}</Text>
                            <Text>■ Roughly chop Andes mints.{"\n"}</Text>
                            <Text>■ Incorporate semi-sweet chocolate chips and roughly chopped Andes mints until combined.{"\n"}</Text>
                            <Text>■ Divide dough in half. On parchment paper lined large cookie sheet, shape each half into 12" by 3" log, about 3 inches apart.{"\n"}</Text>
                            <Text>■ Bake logs 30 minutes.{"\n"}</Text>
                            <Text>■ Cool logs on cookie sheet on wire rack 15 minutes.{"\n"}</Text>
                            <Text>■ Place logs on cutting board. With serrated knife, cut each log crosswise into 1/2-inch-thick diagonal slices. With long metal spatula, place slices, top side up, 1/4 inch apart, on same cookie sheet. Bake slices 20 minutes more to allow biscotti to dry out. Cool biscotti completely on cookie sheet on wire rack. (Biscotti will harden as they cool.) Store biscotti in tightly covered container at room temperature up to 2 weeks, or in freezer up to 6 months.{"\n"}</Text>
                            <Text>■ The additional 20 minute baking time is optional but do lay cookies to dry. Drizzle with chocolate of choice. Add crushed mint chocolate candies or crushed peppermint candies or shake some powdered sugar atop.{"\n"}</Text>
                           
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