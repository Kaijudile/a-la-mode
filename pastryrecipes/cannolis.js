import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class cannolis extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/pastries/cannoli.jpg')}
                            />
                            <Text style={styles.cardText}>Chocolate Chip Cannolis</Text>
                            <Text>Special equipment is needed such as cannoli tubes, a pasta machine and a pastry bag to help make these cannoli come out just like the ones at Italian restaurants and bakeries. Start with 1/2 cup of confectioners' sugar, and then add more to taste.{"\n"}
                            </Text>
                            <Text style={styles.subheader}>Servings: 30 Cannoli{"\n"}</Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>

                            <Text style={styles.subheader}>Shells:{"\n"}</Text>

                            <Text>■ 3 cups all-purpose flour</Text>
                            <Text>■ ¼ cup white sugar</Text>
                            <Text>■ ¼ teaspoon ground cinnamon</Text>
                            <Text>■ 3 tablespoons shortening</Text>
                            <Text>■ 1 egg</Text>
                            <Text>■ 1 egg yolk</Text>
                            <Text>■ ½ cup sweet Marsala wine</Text>
                            <Text>■ 1 tablespoon distilled white vinegar</Text>
                            <Text>■ 2 tablespoons water</Text>
                            <Text>■ 1 egg white</Text>
                            <Text>■ 1 quart oil for frying, or as needed{"\n"}</Text>

                            <Text style={styles.subheader}>Filling: {"\n"}</Text>

                            <Text>■ 1 (32 ounce) container ricotta cheese</Text>
                            <Text>■ ½ cup confectioners' sugar</Text>
                            <Text>■ 1 teaspoon lemon zest, or to taste</Text>
                            <Text>■ 4 ounces semisweet chocolate chips{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text>■ In a medium bowl, mix together the flour, sugar and cinnamon. Cut in the shortening until it is in pieces no larger than peas. Make a well in the center, and pour in the egg, egg yolk, Marsala wine, vinegar and water. Mix with a fork until the dough becomes stiff, then finish it by hand, kneading on a clean surface. Add a bit more water if needed to incorporate all of the dry ingredients. Knead for about 10 minutes, then cover and refrigerate for 1 to 2 hours.{"\n"}</Text>
                            <Text>■ Divide the cannoli dough into thirds, and flatten each one just enough to get through the pasta machine. Roll the dough through successively thinner settings until you have reached the thinnest setting. Dust lightly with flour if necessary. Place the sheet of dough on a lightly floured surface. Using a form or large glass or bowl, cut out 4 to 5 inch circles. Dust the circles with a light coating of flour. This will help you later in removing the shells from the tubes. Roll dough around cannoli tubes, sealing the edge with a bit of egg white.{"\n"}</Text>
                            <Text>■ Heat the oil to 375 degrees F (190 degrees C) in a deep-fryer or deep heavy skillet. Fry shells on the tubes a few at a time for 2 to 3 minutes, until golden. Use tongs to turn as needed. Carefully remove using the tongs, and place on a cooling rack set over paper towels. Cool just long enough that you can handle the tubes, then carefully twist the tube to remove the shell. Using a tea towel may help you get a better grip. Wash or wipe off the tubes, and use them for more shells. Cooled shells can be placed in an airtight container and kept for up to 2 months. You should only fill them immediately or up to 1 hours before serving.{"\n"}</Text>
                            <Text>■ To make the filling, stir together the ricotta cheese and confectioners' sugar using a spoon. Fold in lemon zest and chocolate. Use a pastry bag to pipe into shells, filling from the center to one end, then doing the same from the other side. Dust with additional confectioners' sugar and grated chocolate for garnish when serving.{"\n"}</Text>
                           
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