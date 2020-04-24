import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class eclairs extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/pastries/eclairs.jpg')}
                            />
                            <Text style={styles.cardText}>Eclairs</Text>
                            <Text>These ridiculously delicious chocolate eclairs filled with vanilla pastry cream are nearly foolproof to make and will be gone in a flash, éclair actually translates to "flash of lightning"!{"\n"}
                            </Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>

                            <Text>■ 1/2 cup butter</Text>
                            <Text>■ 1 cup water</Text>
                            <Text>■ 1 cup all-purpose flour</Text>
                            <Text>■ 1/4 teaspoon salt</Text>
                            <Text>■ 4 eggs</Text>
                            <Text>■ 1 (5 ounce) package instant vanilla pudding mix</Text>
                            <Text>■ 2 1/2 cups cold milk</Text>
                            <Text>■ 1 cup heavy cream</Text>
                            <Text>■ 1/4 cup confectioners' sugar</Text>
                            <Text>■ 1 teaspoon vanilla extract</Text>
                            <Text>■ 2 (1 ounce) squares semisweet chocolate</Text>
                            <Text>■ 2 tablespoons butter</Text>
                            <Text>■ 1 cup confectioners' sugar</Text>
                            <Text>■ 1 teaspoon vanilla extract</Text>
                            <Text>■ 3 tablespoons hot water{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text>■ Preheat oven to 450 degrees F (230 degrees C). Grease a cookie sheet.{"\n"}</Text>
                            <Text>■ In a medium saucepan, combine 1/2 cup butter and 1 cup water. Bring to a boil, stirring until butter melts completely. Reduce heat to low, and add flour and salt. Stir vigorously until mixture leaves the sides of the pan and begins to form a stiff ball. Remove from heat. Add eggs, one at a time, beating well to incorporate completely after each addition. With a spoon or a pastry bag fitted with a No. 10, or larger, tip, spoon or pipe dough onto cookie sheet in 1 1/2 x 4 inch strips.{"\n"}</Text>
                            <Text>■ Bake 15 minutes in the preheated oven, then reduce heat to 325 degrees F (165 degrees C) and bake 20 minutes more, until hollow sounding when lightly tapped on the bottom. Cool completely on a wire rack.{"\n"}</Text>
                            <Text>■ For the filling, combine pudding mix and milk in medium bowl according to package directions. In a separate bowl, beat the cream with an electric mixer until soft peaks form. Beat in 1/4 cup confectioners' sugar and 1 teaspoon vanilla. Fold whipped cream into pudding. Cut tops off of cooled pastry shells with a sharp knife. Fill shells with pudding mixture and replace tops.{"\n"}</Text>
                            <Text>■ For the icing, melt the chocolate and 2 tablespoons butter in a medium saucepan over low heat. Stir in 1 cup confectioners' sugar and 1 teaspoon vanilla. Stir in hot water, one tablespoon at a time, until icing is smooth and has reached desired consistency. Remove from heat, cool slightly, and drizzle over filled eclairs. Refrigerate until serving.{"\n"}</Text>
                           
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