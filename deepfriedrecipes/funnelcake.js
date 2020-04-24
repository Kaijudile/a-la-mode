import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class funnelcake extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/deepfried/funnel_cake.jpg')}
                            />
                            <Text style={styles.cardText}>Funnel Cake</Text>
                            <Text>You don't need to wait for the county fair to enjoy delicious old-fashioned funnel cakes. You just need a funnel with a 1/2-inch opening that can hold a cup of batter.{"\n"}
                            </Text>
                            <Text style={styles.subheader}>Servings: 3 Large Cakes{"\n"}</Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>

                            <Text>■ 8 cups vegetable oil for frying</Text>
                            <Text>■ 1 ½ cups milk</Text>
                            <Text>■ 2 eggs</Text>
                            <Text>■ 2 cups all-purpose flour</Text>
                            <Text>■ 1 teaspoon baking powder</Text>
                            <Text>■ ½ teaspoon ground cinnamon</Text>
                            <Text>■ ½ teaspoon salt</Text>
                            <Text>■ ¾ cup confectioners' sugar{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text>■ In a deep-fryer, or heavy skillet, heat oil to 375 degrees F (190 degrees C).{"\n"}</Text>
                            <Text>■ In a large bowl, beat milk and eggs together. Combine flour, baking powder, cinnamon and salt. Stir into the egg mixture until smooth.{"\n"}</Text>
                            <Text>■ While covering the funnel hole with one hand, pour in 1 cup of batter. Start from the center in a swirling motion to make a 6 or 7 inch round. Fry on both sides until golden brown. Remove and drain on paper towels. Sprinkle with confectioners' sugar and serve warm.{"\n"}</Text>
                            
                           
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