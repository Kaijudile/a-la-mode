import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class dropcookie extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/cookies/drop_cookie.jpg')}
                            />
                            <Text style={styles.cardText}>Brownie Drop Cookies</Text>
                            <Text>These Brownie Drop Cookies are just like fudge brownies in a cookie form. They’re soft, rich and completely decadent!{"\n"}
                            </Text>
                            <Text style={styles.subheader}>Servings: 2 Dozen Cookies{"\n"}</Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>

                            <Text>■ 2 ounce packages Baker's German Sweet Chocolate chopped, 4-</Text>
                            <Text>■ 1 tablespoon butter</Text>
                            <Text>■ 2 eggs</Text>
                            <Text>■ 3/4 cup granulated sugar</Text>
                            <Text>■ 1/4 cup all-purpose flour</Text>
                            <Text>■ 1/4 teaspoon baking powder</Text>
                            <Text>■ 1/4 teaspoon cinnamon</Text>
                            <Text>■ 1/8 teaspoon salt</Text>
                            <Text>■ 1/2 teaspoon vanilla extract</Text>
                            <Text>■ 3/4 cup finely chopped pecans{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text>■ Preheat oven to 350 degrees F.{"\n"}</Text>
                            <Text>■ Place the chocolate and butter in a large glass bowl set over a pan of simmering water. Stir until melted.
{"\n"}</Text>
                            <Text>■ When the chocolate is just melted, remove from the heat and stir to cool.{"\n"}</Text>
                            <Text>■ In a separate bowl, beat the eggs until foamy, then slowly add the sugar. Beat until thickened, about 3 minutes.{"\n"}</Text>
                            <Text>■ Blend in the chocolate, flour, baking powder, cinnamon, salt and vanilla.{"\n"}</Text>
                            <Text>■ Stir in the pecans.{"\n"}</Text>
                            <Text>■ Drop by spoonfuls onto a well-greased or parchment paper lined baking sheet.{"\n"}</Text>
                            <Text>■ Bake for 8 to 10 minutes or until cookies feel firm when lightly touched.{"\n"}</Text>
                            <Text>■ Let sit on pan for 5 minutes, than transfer to rack to cool.{"\n"}</Text>
                           
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