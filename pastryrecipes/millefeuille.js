import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class millefeuille extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/pastries/mille_feuille.jpg')}
                            />
                            <Text style={styles.cardText}>Mille Feuille</Text>
                            <Text>Mille-feuille, also known as the Napoleon, is a classic French pastry with ancient origins spanning hundreds of years.{"\n"}
                            </Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>

                            <Text>■ One 14-ounce sheet frozen all-butter puff pastry, such as Dufour, thawed</Text>
                            <Text>■ 2 tablespoons powdered sugar, plus more for dusting the pastry and finished dish</Text>
                            <Text>■ 8 ounces mascarpone </Text>
                            <Text>■ 1 cup heavy cream </Text>
                            <Text>■ 2 vanilla bean pods, split and seeds scraped</Text>
                            <Text>■ 2 tablespoons raspberry liqueur </Text>
                            <Text>■ Zest of 1 lemon </Text>
                            <Text>■ 4 cups fresh raspberries {"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text>■ Line a baking sheet with parchment or a baking mat.{"\n"}</Text>
                            <Text>■ Unfold the pastry, roll it to a 12-by-15-inch rectangle and cut into three 12-by-5-inch rectangles. Transfer to the prepared baking sheet. Prick the pastry and chill for 10 minutes in the freezer or 20 in the fridge.{"\n"}</Text>
                            <Text>■ Preheat the oven to 425 degrees F.{"\n"}</Text>
                            <Text>■ Dust the pastry with powdered sugar (this will ensure the pastry caramelizes when cooked). Bake until golden brown and risen, about 15 minutes. Set aside to cool on a wire rack for about 15 minutes.{"\n"}</Text>
                            <Text>■ In the bowl of a mixer fitted with the whisk attachment, add the powdered sugar, mascarpone, cream and vanilla seeds and whisk until soft peaks form. Add the raspberry liqueur and lemon zest and turn on the mixer for 10 seconds to combine the ingredients.{"\n"}</Text>
                            <Text>■ To assemble: Place a dab of the whipped cream on the serving plate to anchor the mille-feuille. Place one piece of pastry onto the plate glaze-side down. Spoon over half of the whipped cream, smoothing out the top. Arrange half of the fresh raspberries on top of the cream in rows, then top with another sheet of pastry, again glaze-side down. Top the second sheet of pastry with the remaining cream and raspberries. Add the last piece of pastry glaze-side up and liberally dust with powdered sugar.{"\n"}</Text>
                           
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