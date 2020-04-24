import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class blueberrypie extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/pies/blueberry_pie.jpg')}
                            />
                            <Text style={styles.cardText}>Blueberry Pie</Text>
                            <Text>This is the best when made with fresh picked blueberries! It is a beautiful sight with a lattice top.{"\n"}
                            </Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>

                            <Text>■ ¾ cup white sugar</Text>
                            <Text>■ 3 tablespoons cornstarch</Text>
                            <Text>■ ¼ teaspoon salt</Text>
                            <Text>■ ½ teaspoon ground cinnamon</Text>
                            <Text>■ 4 cups fresh blueberries</Text>
                            <Text>■ 1 recipe pastry for a 9 inch double crust pie</Text>
                            <Text>■ 1 tablespoon butter{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text>■ Preheat oven to 375 degrees F (190 degrees C).{"\n"}</Text>
                            <Text>■ Mix sugar, cornstarch, salt, and cinnamon, and sprinkle over blueberries.{"\n"}</Text>
                            <Text>■ Line pie dish with one pie crust. Pour berry mixture into the crust, and dot with butter. Cut remaining pastry into 1/2 - 3/4 inch wide strips, and make lattice top. Crimp and flute edges.{"\n"}</Text>
                            <Text>■ Bake pie on lower shelf of oven for about 50 minutes, or until crust is golden brown.{"\n"}</Text>

                           
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