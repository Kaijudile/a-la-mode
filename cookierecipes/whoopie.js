import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class whoopie extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/cookies/whoopie_pie.jpg')}
                            />
                            <Text style={styles.cardText}>Whoopie Pies</Text>
                            <Text>Chocolate cake circles sandwiched with a creamy vanilla frosting-like filling.{"\n"}
                            </Text>
                            <Text style={styles.subheader}>Servings: Makes 8 Individual desserts{"\n"}</Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>
                            <Text style={styles.subheader}>For Cakes:{"\n"}</Text>

                            <Text>■ 2 cups all-purpose flour</Text>
                            <Text>■ 1/2 cup Dutch-process cocoa powder</Text>
                            <Text>■ 1 1/4 teaspoons baking soda</Text>
                            <Text>■ 1 teaspoon salt</Text>
                            <Text>■ 1 cup well-shaken buttermilk</Text>
                            <Text>■ 1 teaspoon vanilla</Text>
                            <Text>■ 1 stick (1/2 cup) unsalted butter, softened</Text>
                            <Text>■ 1 cup packed brown sugar</Text>
                            <Text>■ 1 large egg{"\n"}</Text>

                            <Text style={styles.subheader}>For Cakes:{"\n"}</Text>

                            <Text>■ 1 stick (1/2 cup) unsalted butter, softened</Text>
                            <Text>■ 1 1/4 cups confectioners sugar</Text>
                            <Text>■ 2 cups marshmallow cream such as Marshmallow Fluff</Text>
                            <Text>■ 1 teaspoon vanilla{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text style={styles.subheader}>Make Cakes:{"\n"}</Text>

                            <Text>■ Preheat oven to 350°F.{"\n"}</Text>
                            <Text>■ Whisk together flour, cocoa, baking soda, and salt in a bowl until combined. Stir together buttermilk and vanilla in a small bowl.{"\n"}</Text>
                            <Text>■ Beat together butter and brown sugar in a large bowl with an electric mixer at medium-high speed until pale and fluffy, about 3 minutes in a standing mixer or 5 minutes with a handheld, then add egg, beating until combined well. Reduce speed to low and alternately mix in flour mixture and buttermilk in batches, beginning and ending with flour, scraping down side of bowl occasionally, and mixing until smooth.{"\n"}</Text>
                            <Text>■ Spoon 1/4-cup mounds of batter about 2 inches apart onto 2 buttered large baking sheets. Bake in upper and lower thirds of oven, switching position of sheets halfway through baking, until tops are puffed and cakes spring back when touched, 11 to 13 minutes. Transfer with a metal spatula to a rack to cool completely.{"\n"}</Text>
                           
                            <Text style={styles.subheader}>Make Filling:{"\n"}</Text>
                            <Text>■ Beat together butter, confectioners sugar, marshmallow, and vanilla in a bowl with electric mixer at medium speed until smooth, about 3 minutes.{"\n"}</Text>

                            <Text style={styles.subheader}>Assemble pies:{"\n"}</Text>
                            <Text>■ Spread a rounded tablespoon filling on flat sides of half of cakes and top with remaining cakes.{"\n"}</Text>

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