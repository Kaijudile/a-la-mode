import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class smoothie extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/frozen/strawberry_banana.jpg')}
                            />
                            <Text style={styles.cardText}>Strawberry Banana Smoothie</Text>
                            <Text>This 4-ingredient strawberry banana smoothie recipe is quick and easy to make, and always SO delicious!{"\n"}
                            </Text>
                            <Text style={styles.subheader}>Servings: 2 Smoothies{"\n"}</Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>

                            <Text>■ 2 cups strawberry, sliced</Text>
                            <Text>■ 1 banana, sliced</Text>
                            <Text>■ 1 ½ cups milk, of choice</Text>
                            <Text>■ 1 cup plain greek yogurt{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text>■ Put fruit in a freezer bag. Seal and store in freezer for up to 8 -12 months.{"\n"}</Text>
                            <Text>■ When ready to use, put milk, Greek yogurt, and frozen fruit into a blender and mix until consistency is smooth.{"\n"}</Text>
                            <Text>■ Enjoy!{"\n"}</Text>
                            
                           
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