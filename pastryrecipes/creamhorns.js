import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class creamhorns extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/pastries/cream_horn.jpg')}
                            />
                            <Text style={styles.cardText}>Chocolate Drizzle Cream Horns</Text>
                            <Text>This indulgent recipe for Dark Chocolate Cream Horns makes puff pastry cornucopias filled with dark chocolate and Chantilly cream.  The chocolate on top gives this recipe a double dose of chocolate, making it one amazing dessert.{"\n"}
                            </Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>

                            <Text style={styles.subheader}>Horns:{"\n"}</Text>

                            <Text>■ 1 sheet frozen puff pastry thawed</Text>
                            <Text>■ 1 egg</Text>
                            <Text>■ 2 tablespoons water</Text>
                            <Text>■ granulated sugar{"\n"}</Text>

                            <Text style={styles.subheader}>Chocolates:{"\n"}</Text>

                            <Text>■ 6 ounces dark chocolate</Text>
                            <Text>■ 3 tablespoons butter</Text>
                            <Text>■ 2 tablespoons golden syrup or corn syrup{"\n"}</Text>

                            <Text style={styles.subheader}>Cream:{"\n"}</Text>

                            <Text>■ 1¼ cup Whipping Cream</Text>
                            <Text>■ 6-8 tablespoons powdered sugar</Text>
                            <Text>■ 1 teaspoons vanilla extract</Text>
                            <Text>■ 1 tablespoon skimmed milk powder{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text style={styles.subheader}>To Make the Horns:{"\n"}</Text>

                            <Text>■ Wrap each cone tightly in the non-stick aluminum foil, covering it completely and tucking any excess foil into the cone cavity. Set aside.{"\n"}</Text>
                            <Text>■ Make an egg wash by beating the egg with 2 tablespoons of water. Set aside.{"\n"}</Text>
                            <Text>■ Flour the worktop roll out the pastry to 12 x 18 inches. {"\n"}</Text>
                            <Text>■ Trim the edges to neaten, then slice along the length into 15 equal strips of about 1 x 15 inches. Then cut 3 of the strips in half.{"\n"}</Text>
                            <Text>■ Starting with the pointy end, wrap the longer strips around the cones overlapping each twist of pastry by about a third as you go. If you have extra at the top, snip it off; don’t tuck it into the cone or it will be difficult to get the pastry off after baking.{"\n"}</Text>
                            <Text>■ Using the smaller strips, twist them gently and wrap the top of each pastry cone with the twisted strips. Trim any excess.{"\n"}</Text>
                            <Text>■ Brush them sparingly with the egg wash and then sprinkle with the sugar.{"\n"}</Text>
                            <Text>■ Lay the pastry cones on the baking sheet (placing any messy ends facing down, and chill for about 15 minutes. {"\n"}</Text>
                            <Text>■ Preheat the oven to 400°F/200°C{"\n"}</Text>
                            <Text>■ Bake for 20–25 minutes, or until a golden brown and puffy.{"\n"}</Text>
                            <Text>■ Remove from the oven and gently remove them from the molds/cones– remembering to hold the hot cones with a clean oven cloth. Cool completely.{"\n"}</Text>

                            <Text style={styles.subheader}>For the Chocolate:{"\n"}</Text>

                            <Text>■ Make the chocolate by melting the butter and syrup together in a small saucepan. Once melted, remove from heat, add the chocolate and mix until fluid. Set aside to cool.{"\n"}</Text>
                            <Text>■ Spread one tablespoon of the chocolate into each horn{"\n"}</Text>

                            <Text style={styles.subheader}>For the Cream:{"\n"}</Text>

                            <Text>■ Add powdered sugar (to taste), skimmed milk powder (if using - This is to help give the whipped cream structure so it doesn't flatten out too quickly), and vanilla to the cream.{"\n"}</Text>
                            <Text>■ Using a food processor, whip the cream until it thickens enough to hold its shape (this doesn't take long at all so check often).{"\n"}</Text>
                            <Text>■ Pipe the cream into the horns and decorate with the remaining chocolate.{"\n"}</Text>
                            <Text>■ If you use the skimmed milk powder in the cream the horns will last up to 3 days.{"\n"}</Text>
                            <Text>■ If you don't use the powder, the cream should be made and the horns should be filled just before serving.{"\n"}</Text>
                           
                           
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