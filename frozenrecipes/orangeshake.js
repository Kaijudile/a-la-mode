import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class orangeshake extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/frozen/orange_creamsicle.jpg')}
                            />
                            <Text style={styles.cardText}>Orange Creamsicle Shake</Text>
                            <Text>This Orange Creamsicle Milkshake is so seriously good that you’ll wonder how you ever lived without it! {"\n"}
                            </Text>
                            <Text style={styles.subheader}>Servings: 2 Shakes{"\n"}</Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>

                            <Text>■ 1/2 cup milk</Text>
                            <Text>■ 4 scoops vanilla ice cream</Text>
                            <Text>■ 3 tablespoons frozen orange juice concentrate, thawed{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text>■ In a blender combine milk, ice cream and orange juice concentrate. Blend until smooth. Pour into glasses, garnish with an orange slice and serve.{"\n"}</Text>
                            
                            
                           
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