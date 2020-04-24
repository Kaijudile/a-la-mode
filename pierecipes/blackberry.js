import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class blackberry extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/pies/blackberry_cobbler.jpg')}
                            />
                            <Text style={styles.cardText}>Blackberry Cobbler</Text>
                            <Text>Homemade blackberry cobbler is a no-fuss way to enjoy summer’s berry bounty with minimal effort. If you’re lucky enough to have fresh blackberries, be sure to use them in this dish.{"\n"}
                            </Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>

                            
                            <Text>■ 1/2 stick butter, melted, plus more for greasing pan</Text>
                            <Text>■ 1 1/4 cups plus 2 tablespoons sugar</Text>
                            <Text>■ 1 cup self-rising flour</Text>
                            <Text>■ 1 cup whole milk</Text>
                            <Text>■ 2 cups fresh (or frozen) blackberries</Text>
                            <Text>■ Whipped cream and/or ice cream, for serving{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text>■ Preheat the oven to 350 degrees F. Grease a 3-quart baking dish with butter.{"\n"}</Text>
                            <Text>■ In a medium bowl, whisk 1 cup sugar with the flour and milk. Whisk in the melted butter.{"\n"}</Text>
                            <Text>■ inse the blackberries and pat them dry. Pour the batter into the baking dish. Sprinkle the blackberries evenly over the top of the batter. Sprinkle 1/4 cup sugar over the blackberries. Bake until golden brown and bubbly, about 1 hour. When 10 minutes of the cooking time remains, sprinkle the remaining 2 tablespoons sugar over the top. Top with whipped cream or ice cream . . . or both!{"\n"}</Text>

                           
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