import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class tiramisu extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/cakes/tiramisu.jpg')}
                            />
                            <Text style={styles.cardText}>Tiramisu</Text>
                            <Text>Mascarpone custard layered with whipped cream and rum and coffee soaked ladyfingers.{"\n"}
                            </Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>
                            <Text style={styles.subheader}>Cake:{"\n"}</Text>

                            <Text>■ 6 egg yolks</Text>
                            <Text>■ ¾ cup white sugar</Text>
                            <Text>■ ⅔ cup milk</Text>
                            <Text>■ 1 ¼ cups heavy cream</Text>
                            <Text>■ ½ teaspoon vanilla extract</Text>
                            <Text>■ 1 pound mascarpone cheese</Text>
                            <Text>■ ¼ cup strong brewed coffee, room temperature</Text>
                            <Text>■ 2 (3 ounce) packages ladyfinger cookies</Text>
                            <Text>■ 1 tablespoon unsweetened cocoa powder{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text style={styles.subheader}>Cake:{"\n"}</Text>
                            <Text>■ In a medium saucepan, whisk together egg yolks and sugar until well blended. Whisk in milk and cook over medium heat, stirring constantly, until mixture boils. Boil gently for 1 minute, remove from heat and allow to cool slightly. Cover tightly and chill in refrigerator 1 hour.{"\n"}</Text>
                            <Text>■ In a medium bowl, beat cream with vanilla until stiff peaks form. Whisk mascarpone into yolk mixture until smooth.{"\n"}</Text>
                            <Text>■ In a small bowl, combine coffee and rum. Split ladyfingers in half lengthwise and drizzle with coffee mixture.{"\n"}</Text>
                            <Text>■ Arrange half of soaked ladyfingers in bottom of a 7x11 inch dish. Spread half of mascarpone mixture over ladyfingers, then half of whipped cream over that. Repeat layers and sprinkle with cocoa. Cover and refrigerate 4 to 6 hours, until set.{"\n"}</Text>
                            
                           
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