import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class redvelvet extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/cakes/red_velvet.jpg')}
                            />
                            <Text style={styles.cardText}>Red Velvet Cake</Text>
                            <Text>This cake is incredibly soft, moist, buttery, and topped with an easy cream cheese frosting.{"\n"}</Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>
                            <Text style={styles.subheader}>Cake:{"\n"}</Text>

                            <Text>■ Vegetable oil for the pans</Text>
                            <Text>■ 2 1/2 cups all-purpose flour</Text>
                            <Text>■ 1 1/2 cups sugar</Text>
                            <Text>■ 1 teaspoon baking soda</Text>
                            <Text>■ 1 teaspoon fine salt</Text>
                            <Text>■ 1 teaspoon cocoa powder</Text>
                            <Text>■ 1 1/2 cups vegetable oil</Text>
                            <Text>■ 1 cup buttermilk, at room temperature</Text>
                            <Text>■ 2 large eggs, at room temperature</Text>
                            <Text>■ 2 tablespoons red food coloring (1 ounce)</Text>
                            <Text>■ 1 teaspoon white distilled vinegar</Text>
                            <Text>■ 1 teaspoon vanilla extract</Text>
                            <Text>■ Cream Cheese Frosting, recipe follows</Text>
                            <Text>■ Crushed pecans, for garnish{"\n"}</Text>

                            <Text style={styles.subheader}>Cream Cheese Frosting:{"\n"}</Text>
                            <Text>■ 1 pound cream cheese, softened</Text>
                            <Text>■ 4 cups sifted confectioners' sugar</Text>
                            <Text>■ 2 sticks unsalted butter (1 cup), softened</Text>
                            <Text>■ 1 teaspoon vanilla extract{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text style={styles.subheader}>Cake:{"\n"}</Text>
                            <Text>■ Preheat the oven to 350 degrees F. Lightly oil and flour three 9 by 1 1/2-inch round cake pans.{"\n"}</Text>
                            <Text>■ In a large bowl, sift together the flour, sugar, baking soda, salt, and cocoa powder. In another large bowl, whisk together the oil, buttermilk, eggs, food coloring, vinegar, and vanilla.{"\n"}</Text>
                            <Text>■ Using a standing mixer, mix the dry ingredients into the wet ingredients until just combined and a smooth batter is formed.{"\n"}</Text>
                            <Text>■ Divide the cake batter evenly among the prepared cake pans. Place the pans in the oven evenly spaced apart. Bake, rotating the pans halfway through the cooking, until the cake pulls away from the side of the pans, and a toothpick inserted in the center of the cakes comes out clean, about 30 minutes.{"\n"}</Text>
                            <Text>■ Remove the cakes from the oven and run a knife around the edges to loosen them from the sides of the pans. One at a time, invert the cakes onto a plate and then re-invert them onto a cooling rack, rounded-sides up. Let cool completely.{"\n"}</Text>
                            <Text>■ Frost the cake. Place 1 layer, rounded-side down, in the middle of a rotating cake stand. Using a palette knife or offset spatula spread some of the Cream Cheese Frosting over the top of the cake. (Spread enough frosting to make a 1/4 to 1/2-inch layer.) Carefully set another layer on top, rounded-side down, and repeat. Top with the remaining layer and cover the entire cake with the remaining frosting. Sprinkle the top with the pecans. {"\n"}</Text>

                            <Text style={styles.subheader}>Cream Cheese Frosting:{"\n"}</Text>
                            <Text>■ PIn a standing mixer fitted with the paddle attachment, or with a hand-held electric mixer in a large bowl, mix the cream cheese, sugar, and butter on low speed until incorporated. Increase the speed to high, and mix until light and fluffy, about 5 minutes. (Occasionally turn the mixer off, and scrape the down the sides of the bowl with a rubber spatula.){"\n"}</Text>
                            <Text>■ Reduce the speed of the mixer to low. Add the vanilla, raise the speed to high and mix briefly until fluffy (scrape down the bowl occasionally). Store in the refrigerator until somewhat stiff, before using. May be stored in the refrigerator for 3 days.{"\n"}</Text>

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