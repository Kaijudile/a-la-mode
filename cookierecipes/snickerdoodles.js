import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class snickerdoodles extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/cookies/snickerdoodle.jpg')}
                            />
                            <Text style={styles.cardText}>Snickerdoodles</Text>
                            <Text>These wonderful cinnamon-sugar cookies became very popular with my friends at church. My pastor loves them! You will too! Crispy edges, and chewy centers; these cookies are a crowd pleaser for sure!{"\n"}
                            </Text>
                            <Text style={styles.subheader}>Servings: 4 Dozen Cookies{"\n"}</Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>

                            <Text>■ ½ cup butter, softened</Text>
                            <Text>■ 1½ cup shortening</Text>
                            <Text>■ 1 ½ cups white sugar</Text>
                            <Text>■ 2 eggs</Text>
                            <Text>■ 2 teaspoons vanilla extract</Text>
                            <Text>■ 2 ¾ cups all-purpose flour</Text>
                            <Text>■ 2 teaspoons cream of tartar</Text>
                            <Text>■ 1 teaspoon baking soda</Text>
                            <Text>■ ¼ teaspoon salt</Text>
                            <Text>■ 2 tablespoons white sugar</Text>
                            <Text>■ 2 teaspoons ground cinnamon{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text>■ Preheat oven to 400 degrees F (200 degrees C).{"\n"}</Text>
                            <Text>■ Cream together butter, shortening, 1 1/2 cups sugar, eggs, and vanilla. Blend in flour, cream of tartar, soda, and salt. Shape dough by rounded spoonfuls into balls.{"\n"}</Text>
                            <Text>■ Mix 2 tablespoons sugar and cinnamon together. Roll balls of dough in mixture. Place 2 inches apart on ungreased baking sheets.{"\n"}</Text>
                            <Text>■ Bake 8 to 10 minutes, or until set but not too hard. Remove immediately from baking sheets.{"\n"}</Text>
                            
                           
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