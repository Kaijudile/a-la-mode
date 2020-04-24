import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class batterpops extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/frozen/cake_batter.jpg')}
                            />
                            <Text style={styles.cardText}>Cake Batter Pops</Text>
                            <Text>Love cake? Love popsicles? Perfect! These Cake Batter Popsicles are a great way to indulge in a slice of cake without actually baking a cake!{"\n"}
                            </Text>
                            <Text style={styles.subheader}>Servings: 20 Popsicles{"\n"}</Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>

                            <Text>■ 1 box Funfetti cake mix</Text>
                            <Text>■ 2 1/4 c. whole milk</Text>
                            <Text>■ 1/4 c. whipped topping</Text>
                            <Text>■ 1/4 c. rainbow sprinkles{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text>■ In a large bowl, whisk together cake mix and milk until smooth. Add whipped topping and whisk until just combined.{"\n"}</Text>
                            <Text>■ Add a pinch of sprinkles to the bottom of each pop mold. Divide mixture between pop molds, insert popsicle sticks, and place in freezer until frozen, 6 hours up to overnight.{"\n"}</Text>
                            <Text>■ To unmold pops, run under warm water for a few seconds.{"\n"}</Text>
                            
                           
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