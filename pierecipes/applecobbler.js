import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class applecobbler extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/pies/apple_cobbler.jpg')}
                            />
                            <Text style={styles.cardText}>Apple Cobbler</Text>
                            <Text>Easy Apple Cobbler Recipe that can be made with any fruit.  Top with ice cream for a delicious dessert that tastes just like grandma made and the entire family will love it. {"\n"}
                            </Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>

                            <Text style={styles.subheader}>Filling:{"\n"}</Text>

                            <Text>■ 3 lbs of a variety of good cooking apples such as Granny Smith, Pippin, Fuji, Golden Delicious, Gravenstein</Text>
                            <Text>■ 2 Tbsp lemon juice</Text>
                            <Text>■ 4 Tbsp unsalted butter</Text>
                            <Text>■ 1/2 cup sugar</Text>
                            <Text>■ 1 Tbsp flour</Text>
                            <Text>■ 1/2 teaspoon cinnamon</Text>
                            <Text>■ 1/4 teaspoon ground nutmeg</Text>
                            <Text>■ 1 teaspoon vanilla extract{"\n"}</Text>

                            <Text style={styles.subheader}>Crust:{"\n"}</Text>

                            <Text>■ 2 cups all purpose flour</Text>
                            <Text>■ 1/4 cup sugar</Text>
                            <Text>■ 2 teaspoon baking powder</Text>
                            <Text>■ 1/2 teaspoon baking soda</Text>
                            <Text>■ 1/2 teaspoon salt</Text>
                            <Text>■ 1/2 cup (1 stick or 4 ounces) unsalted butter, cut into small cubes</Text>
                            <Text>■ 1 cup buttermilk</Text>
                            <Text>■ 1 Tbsp finely chopped crystallized ginger</Text>
                            <Text>■ 1 teaspoon lemon zest or orange zest{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text>■ Peel, quarter, and core the apples. Cut them into 1/4 to 1/2 inch chunks. As you prep the apples, add them to a bowl and toss with lemon juice to keep them from oxidizing (turning brown).{"\n"}</Text>
                            <Text>■ Melt the butter in a large pan over medium heat. Add the chopped apples (and the lemon juice from the bowl), sugar, cinnamon, and nutmeg. Toss to coat with everything so that the spices and sugar are well distributed throughout the apples.
Partially cover the pot and cook until the apples are just tender, about 10 minutes. Stir in the vanilla, and toss to coat with a tablespoon of flour.{"\n"}</Text>
                            <Text>■ Transfer the apple cobbler filling (including any juices from the apples) to a 10-inch pie dish, a 9-inch deep-dish pie dish, or a 9x9-inch baking dish.{"\n"}</Text>
                            <Text>■ Preheat the oven to 425°F.{"\n"}</Text>
                            <Text>■ In a medium bowl whisk together the flour, sugar, baking powder, baking soda, and salt. Add the cubed butter and toss to coat with the flour mixture. Use your fingertips or a pastry blender to cut the butter into the flour mixture until the largest piece of butter is no bigger than a pea. Stir in the candied ginger and zest. Make a well in the middle of the flour mixture and pour in the buttermilk. Use a fork to stir the flour and buttermilk together until the flour is all moistened. Do not overwork the dough!{"\n"}</Text>
                            <Text>■ Crumble the cobbler dough over the top of the apples in the baking dish. (If you want extra pizzaz you can sprinkle the top with a little brown sugar.){"\n"}</Text>
                            <Text>■ Place a rimmed baking sheet on the lowest rack in the oven (to catch any drippings), and place the cobbler on the next lowest rack. Bake for 10 minutes at 425°F until the top is beginning to brown, about 10 to 15 minutes. Then lower the temperature to 350°F and bake for 30 more minutes until the topping is cooked through and the filling is bubbly. Serve warm with whipped cream or vanilla ice cream.{"\n"}</Text>

                           
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