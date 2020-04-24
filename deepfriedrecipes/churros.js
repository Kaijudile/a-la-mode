import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class churros extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/deepfried/dipped_churros.jpg')}
                            />
                            <Text style={styles.cardText}>Chocolate Dipped Churros</Text>
                            <Text>You can make these delicious Chocolate-Dipped Churros with just a handful of ingredients that you probably already have on hand in your pantry.{"\n"}
                            </Text>
                            <Text style={styles.subheader}>Servings: 4 to 6{"\n"}</Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>
                            <Text style={styles.subheader}>Churros:{"\n"}</Text>

                            <Text>■ 1/4 cup superfine sugar</Text>
                            <Text>■ 2 teaspoons ground cinnamon</Text>
                            <Text>■ 2/3 cup plus 2 tablespoons all-purpose flour</Text>
                            <Text>■ 1 teaspoon baking powder</Text>
                            <Text>■ 1 tablespoon olive oil</Text>
                            <Text>■ 1 cup freshly boiled water</Text>
                            <Text>■ 2 cups corn or vegetable oil, for deep-frying{"\n"}</Text>

                            <Text style={styles.subheader}>Chocolate Sauce:{"\n"}</Text>
                            <Text>■ 4 ounces good-quality dark chocolate (or 1/2 cup chips)</Text>
                            <Text>■ 1-ounce milk chocolate (or 2 tablespoons chips)</Text>
                            <Text>■ 1 tablespoon golden syrup (recommended: Lyle's), or corn syrup</Text>
                            <Text>■ 2/3 cup double cream</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text style={styles.subheader}>Churros:{"\n"}</Text>
                            <Text>■ Mix the sugar and cinnamon for the churros in a wide, shallow dish; this is for coating the cooked churros.{"\n"}</Text>
                            <Text>■ Churros: Put the flour into a bowl and stir in the baking powder, then beat in the olive oil and 1 cup freshly boiled water. Keep mixing until you have a warm sticky dough, and let rest for about 10 minutes or for as long as it takes for the corn oil to heat up.{"\n"}</Text>
                            <Text>■ Heat the oil in a smallish saucepan; it should come about a third of the way up the sides of the pan. When you think it's hot enough, toss in a cube of bread and see if it sizzles and browns. If it browns in about 30 seconds, it's hot enough; or if you're using an electric deep-fat fryer regulate the temperature, it should be at 325 degrees F. Keep a watchful eye on your hot oil pan at all times.{"\n"}</Text>
                            <Text>■ Preheat the oven to 175 degrees F.{"\n"}</Text>
                            <Text>■ When you are ready, load up a piping bag with a large star shaped nozzle (8mm) and fill it with the churro dough. Squeeze short lengths, approximately 1 1/2 to 2 inches, of dough into the hot oil, snipping them off with a pair of scissors as you go. Cook about 3 or 4 at a time. Once they turn a rich golden brown, fish them out with a slotted spoon or tongs onto a kitchen towel lined baking sheet. To keep the churros warm while you fry the remaining dough. Blot them with paper towels and transfer them to a parchment lined baking sheet. Put the baking sheet into the oven to keep the churros warm. Even if you let them sit out of the oven, they do need 5 to 10 minutes to rest before you eat them, to allow them to set inside.{"\n"}</Text>
                            <Text>■ Toss the hot churros into the sugar and cinnamon mixture and shake them about to get a good covering, just before serving. Arrange the churros on a serving platter and serve.{"\n"}</Text>

                            <Text style={styles.subheader}>Chocolate Sauce:{"\n"}</Text>
                            <Text>■ Melt all of the chocolate sauce ingredients in a heavy based saucepan over low heat. Once combined and the chocolate has melted, remove the pan from the heat and set it aside in a warm place.{"\n"}</Text>
                            <Text>■ Pour the chocolate sauce into individual pots for serving (to avoid the double dipping dilemma) and dip'n'dunk away.{"\n"}</Text>
                            
                            
                           
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