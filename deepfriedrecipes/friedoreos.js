import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class friedoreos extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/deepfried/fried_oreos.jpg')}
                            />
                            <Text style={styles.cardText}>Fried Oreos</Text>
                            <Text>This is a carnival favorite where I grew up. Oreos get dipped into pancake batter and fried - yummy!! You can do this with or without a deep fryer.{"\n"}
                            </Text>
                            <Text style={styles.subheader}>Servings: 30 Cookies{"\n"}</Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>

                            <Text>■ Oil for deep frying+ 2 tsp vegetable oil</Text>
                            <Text>■ 1 cup pancake mix</Text>
                            <Text>■ 1 pack cream-fill oreo cookies</Text>
                            <Text>■ 1 egg</Text>
                            <Text>■ 1 cup milk{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text>■ Whisk in the eggs, milk, and 2 tsp vegetable oil.{"\n"}</Text>
                            <Text>■ Mix in gradually the pancake mix. Make sure no lumps are left and it becomes a smooth mixture.{"\n"}</Text>
                            <Text>■ Now heat the fryer to 375 degrees and dip the cookies in the batter and put them in the hot oil. Fry in batches of 4-5 and when they are golden brown, take them out on an absorbent paper.{"\n"}</Text>
                            <Text>■ Serve hot.{"\n"}</Text>
                            
                           
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