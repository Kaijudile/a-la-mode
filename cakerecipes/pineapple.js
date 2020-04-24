import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class pineapple extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/cakes/upside_down.jpg')}
                            />
                            <Text style={styles.cardText}>Pineapple Upside Down Cake</Text>
                            <Text>This classic cake boasts all the fruity, gooey, caramel-y goodness that’s made it a favorite for generations.{"\n"}
                            </Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>
                            <Text style={styles.subheader}>Cake:{"\n"}</Text>

                            <Text>■ 1 1/2 cups all-purpose flour</Text>
                            <Text>■ 1 teaspoon baking powder</Text>
                            <Text>■ 1/4 teaspoon salt</Text>
                            <Text>■ 1 cup granulated sugar</Text>
                            <Text>■ 8 tablespoons (1 stick) unsalted butter, at room temperature</Text>
                            <Text>■ 2 large eggs{"\n"}</Text>

                            <Text style={styles.subheader}>Topping:{"\n"}</Text>

                            <Text>■ Cooking spray</Text>
                            <Text>■ 4 tablespoons unsalted butter</Text>
                            <Text>■ 1/2 cup packed light brown sugar</Text>
                            <Text>■ 1 (8-ounce) can pineapple rings in pineapple juice</Text>
                            <Text>■ 8 to 10 maraschino cherries{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text style={styles.subheader}>Cake:{"\n"}</Text>
                            <Text>■ Heat the oven and prepare the pan. Arrange a rack in the middle of the oven and heat to 350°F. Coat a 9-inch round cake pan with cooking spray; set aside.{"\n"}</Text>
                            <Text>■ Melt the butter and sugar for the topping. Melt the butter and sugar in a small frying pan over medium heat, stirring frequently. The mixture is done when the sugar is bubbly and slightly more brown.{"\n"}</Text>
                            <Text>■ Pour the sugar mixture into the baking pan. Pour the sugar mixture into a prepared cake pan and spread into an even layer to cool slightly.{"\n"}</Text>
                            <Text>■ Arrange the pineapple slices and cherries in the cake pan. Remove the pineapple rings from the can and reserve 1/2 cup of the juice. Set a single ring in the center of the pan, then arrange 6 to 7 rings around the center ring. Place a maraschino cherry in the center of each ring and set the pan aside.{"\n"}</Text>
                            <Text>■ Whisk together the dry cake ingredients. Whisk the flour, baking powder, and salt together in a medium bowl; set aside.{"\n"}</Text>
                            <Text>■ Cream the sugar and butter together with a hand mixer, then add the eggs. Place the sugar and butter in a large bowl. Using an electric hand mixer, beat on medium speed until lightened and creamy, about 5 minutes. Add the eggs and beat until smooth, about 1 minute more.{"\n"}</Text>
                            <Text>■ Add the flour mixture and pineapple juice in alternating batches. With the mixer on low speed, add the flour mixture in 3 batches, alternating with the reserved 1/2 cup pineapple juice, in this order: Add 1/3 of the flour mixture and mix until incorporated, about 30 seconds. Add 1/2 of the pineapple juice, mixing until smooth, about 30 seconds. Add another 1/2 of the remaining flour and mix again for about 30 seconds, followed by the remaining pineapple juice and 30 seconds of mixing. Finally, add the remaining flour mixture and mix until completely smooth, about 1 minute total.{"\n"}</Text>
                            <Text>■ Spread the batter over the fruit. The batter will be thick, so use a large spoon to dollop large spoonfuls of the batter evenly over the fruit in the pan. Smooth the batter with an offset spatula, then tap the cake pan lightly on the counter to settle the batter.{"\n"}</Text>
                            <Text>■ Bake the cake for 45 minutes. Bake the cake until dark golden-brown and a cake tester comes out clean, about 45 minutes.{"\n"}</Text>
                            <Text>■ Cool the cake for 10 minutes and then invert the cake onto a serving plate. Remove the warm cake from the oven to a cooling rack and cool for 10 minutes (do not wait longer or the cake will not come out of the pan). Invert a plate over the cake pan and, using kitchen towels or oven mitts to grasp onto both the plate and the cake pan, flilp both the pan and the plate over so the pan now sits on top of the plate. Slowly lift the cake pan away. Serve the cake warm or cool before serving and storing.{"\n"}</Text>
                            
                           
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