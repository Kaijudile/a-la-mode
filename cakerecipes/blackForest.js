import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class blackForest extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/cakes/black_forest.jpg')}
                            />
                            <Text style={styles.cardText}>Black Forest Gateau</Text>
                            <Text>This Black Forest Gateau combines rich chocolate cake layers with fresh cherries,
                                cherry liqueur, and a simple whipped cream frosting.{"\n"}
                            </Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>
                            <Text style={styles.subheader}>Chocolate Cake:{"\n"}</Text>

                            <Text>■ 2 cup all-purpose flour</Text>
                            <Text>■ 2 cups granulated sugar</Text>
                            <Text>■ 3/4 cup Dutch-processed cocoa powder sifted</Text>
                            <Text>■ 2 tsp baking soda</Text>
                            <Text>■ 1 tsp baking powder</Text>
                            <Text>■ 1 tsp salt</Text>
                            <Text>■ 1/2 cup vegetable oil</Text>
                            <Text>■ 1 cup buttermilk room temperature</Text>
                            <Text>■ 1 cup hot water</Text>
                            <Text>■ 2 large eggs</Text>
                            <Text>■ 2 tsp vanilla{"\n"}</Text>

                            <Text style={styles.subheader}>Cherry Liqueur Syrup:{"\n"}</Text>
                            <Text>■ 1/2 cup granulated sugar</Text>
                            <Text>■ 1/2 cup water</Text>
                            <Text>■ 1/4 cup cherry liqueur{"\n"}</Text>

                            <Text style={styles.subheader}>Assembly:{"\n"}</Text>
                            <Text>■ 2 1/2 cups cherries pitted and cut in half</Text>
                            <Text>■ 1 bar dark chocolate for shavings (optional)</Text>
                            <Text>■ cherries{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text style={styles.subheader}>Chocolate Cake:{"\n"}</Text>
                            <Text>■ Preheat oven to 350F, grease two 8" round baking pans and dust with cocoa powder. Line bottoms with parchment.{"\n"}</Text>
                            <Text>■ Place all dry ingredients into the bowl of a stand mixer fitted with a paddle attachment. Stir to combine.{"\n"}</Text>
                            <Text>■ In a medium bowl whisk all wet ingredients (pour hot water in slowly as not to cook the eggs).{"\n"}</Text>
                            <Text>■ Add wet ingredients to dry and mix on medium for 2-3 mins. Batter will be very thin.{"\n"}</Text>
                            <Text>■ Pour evenly into prepared pans. I used a kitchen scale to ensure the batter is evenly distributed.{"\n"}</Text>
                            <Text>■ Bake for 45 mins or until a cake tester comes out mostly clean. {"\n"}</Text>
                            <Text>■ Cool 10 minutes in the pans then turn out onto a wire rack to cool completely. {"\n"}</Text>

                            <Text style={styles.subheader}>Cherry Liqueur Syrup:{"\n"}</Text>
                            <Text>■ Place sugar and water into a small pot. Stir and bring to a boil. Simmer for 1 min then remove from heat. Stir in cherry liqueur and allow to cool completely.{"\n"}</Text>

                            <Text style={styles.subheader}>Assembly:{"\n"}</Text>

                            <Text>■ Cut each cake layer in half horizontally.{"\n"}</Text>
                            <Text>■ Place one layer of cake on a cake stand or serving plate. Brush generously with cherry syrup. {"\n"}</Text>
                            <Text>■ Top with approximately 1 cup whipped cream and spread evenly. Top with approximately 1 cup of cherries. Repeat with remaining layers and frost the outside of the cake.{"\n"}</Text>
                            <Text>■ Decorate with chocolate shavings, rosettes, and cherries if desired.{"\n"}</Text>

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