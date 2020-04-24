import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class lemonpie extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/pies/lemon_meringue.jpg')}
                            />
                            <Text style={styles.cardText}>Lemon Meringue Pie</Text>
                            <Text>This is a very fun recipe to follow, because Grandma makes it sweet and simple. This pie is thickened with cornstarch and flour in addition to egg yolks, and contains no milk.{"\n"}
                            </Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>

                            <Text>■ 1 cup white sugar</Text>
                            <Text>■ 2 tablespoons all-purpose flour</Text>
                            <Text>■ 3 tablespoons cornstarch</Text>
                            <Text>■ ¼ teaspoon salt</Text>
                            <Text>■ 1 ½ cups water</Text>
                            <Text>■ 2 lemons, juiced and zested</Text>
                            <Text>■ 2 tablespoons butter</Text>
                            <Text>■ 4 egg yolks, beaten</Text>
                            <Text>■ 1 (9 inch) pie crust, baked</Text>
                            <Text>■ 4 egg whites</Text>
                            <Text>■ 6 tablespoons white sugarS{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text>■ Preheat oven to 350 degrees F (175 degrees C).{"\n"}</Text>
                            <Text>■ To Make Lemon Filling: In a medium saucepan, whisk together 1 cup sugar, flour, cornstarch, and salt. Stir in water, lemon juice and lemon zest. Cook over medium-high heat, stirring frequently, until mixture comes to a boil. Stir in butter. Place egg yolks in a small bowl and gradually whisk in 1/2 cup of hot sugar mixture. Whisk egg yolk mixture back into remaining sugar mixture. Bring to a boil and continue to cook while stirring constantly until thick. Remove from heat. Pour filling into baked pastry shell.{"\n"}</Text>
                            <Text>■ To Make Meringue: In a large glass or metal bowl, whip egg whites until foamy. Add sugar gradually, and continue to whip until stiff peaks form. Spread meringue over pie, sealing the edges at the crust.{"\n"}</Text>
                            <Text>■ Bake in preheated oven for 10 minutes, or until meringue is golden brown.{"\n"}</Text>
                           
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