import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class bostonpie extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/pies/boston_creme.jpg')}
                            />
                            <Text style={styles.cardText}>Boston Creme Pie</Text>
                            <Text>Layers Of Soft Cake Filled With Homemade Custard And Topped With Chocolate Ganache. This Dessert Has Such A Great Flavor And Is Always A Hit With The Whole Family.{"\n"}
                            </Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>
                            <Text style={styles.subheader}>Cake:{"\n"}</Text>

                            <Text>■ 1 cup heavy cream, boiling</Text>
                            <Text>■ 1 cup plus 2 tablespoons sifted cake flour</Text>
                            <Text>■ 2/3 cup sugar</Text>
                            <Text>■ 1 1/2 teaspoons baking powder</Text>
                            <Text>■ 1/4 teaspoon salt</Text>
                            <Text>■ 1/2 cup milk</Text>
                            <Text>■ 1/4 cup cooking oil</Text>
                            <Text>■ 2 egg yolks</Text>
                            <Text>■ 1 teaspoon vanilla</Text>
                            <Text>■ 2 egg whites</Text>
                            <Text>■ 1/4 teaspoon cream of tartar</Text>
                            <Text>■ Pastry cream, recipe follows</Text>
                            <Text>■ Ganache, recipe follows{"\n"}</Text>

                            <Text style={styles.subheader}>Pastry Cream Filling:{"\n"}</Text>

                            <Text>■ 2 cups whole, 2 percent fat, or 1 percent fat milk</Text>
                            <Text>■ 1/2 vanilla bean, split lengthwise, seeds scraped out</Text>
                            <Text>■ 6 egg yolks</Text>
                            <Text>■ 2/3 cup granulated sugar</Text>
                            <Text>■ 1/4 cup cornstarch</Text>
                            <Text>■ 1 tablespoon unsalted butter{"\n"}</Text>

                            <Text style={styles.subheader}>Ganache:{"\n"}</Text>
                            <Text>■ 8 ounces semisweet chocolate{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text style={styles.subheader}>Cake:{"\n"}</Text>
                            <Text>■ Preheat oven to 350 degrees. In a medium mixing bowl combine flour, sugar, baking powder, and salt. Make a well in the center of the flour mixture. Add milk, oil, egg yolks, and vanilla. Beat with an electric mixer on low to medium speed until combined. Beat an additional 3 minutes on high speed and set aside.{"\n"}</Text>
                            <Text>■ In a large mixing bowl, beat egg whites and cream of tartar on medium to high speed until soft peaks form. Pour the egg yolk mixture over the egg white mixture and fold in. Gently pour the batter into a 9-inch greased pie pan. Bake for 25 to 30 minutes or until the top springs back when lightly touched. Invert the pan onto a wire rack. Cool completely.{"\n"}</Text>
                            
                            <Text style={styles.subheader}>Pastry Cream Filling:{"\n"}</Text>
                            <Text>■ In a medium saucepan, heat the milk and vanilla bean to a boil over medium heat. Immediately turn off the heat and set aside to infuse for 10 to 15 minutes. In a bowl, whisk the egg yolks and granulated sugar until light and fluffy. Add the cornstarch and whisk vigorously until no lumps remain. Whisk in 1/4 cup of the hot milk mixture until incorporated. Whisk in the remaining hot milk mixture, reserving the empty saucepan.{"\n"}</Text>
                            <Text>■ Pour the mixture through a strainer back into the saucepan. Cook over medium-high heat, whisking constantly, until thickened and slowly boiling. Remove from the heat and stir in the butter. Let cool slightly. Cover with plastic wrap, lightly pressing the plastic against the surface to prevent a skin from forming. Chill at least 2 hours or until ready to serve. (The custard can be made up to 24 hours in advance. Refrigerate until 1 hour before using.){"\n"}</Text>
                            
                            <Text style={styles.subheader}>Ganache:{"\n"}</Text>
                            <Text>■ In a medium bowl, pour the boiling cream over the chopped chocolate and stir until melted.{"\n"}</Text>
                            <Text>■ To assemble pie, remove the cake from the pan. Cut the cake in half horizontally. Place bottom layer on a serving plate or board, and spread with the pastry cream. Top with second cake layer. Pour chocolate ganache over and down the sides of the cake. Store in refrigerator.{"\n"}</Text>

                           
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