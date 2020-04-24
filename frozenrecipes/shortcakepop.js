import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class shortcakepop extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/frozen/shortcake_pop.jpg')}
                            />
                            <Text style={styles.cardText}>Strawberry Shortcake Icecream Pop</Text>
                            <Text>These brightly hued pops pack a double dose of berry flavor from their creamy centers and buttery crumb coatings.{"\n"}
                            </Text>
                            <Text style={styles.subheader}>Servings: 10 Bars{"\n"}</Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>

                            <Text>■ 2 cups (10oz/284g) fresh strawberries, hulled and diced small</Text>
                            <Text>■ 1 tablespoon sugar</Text>
                            <Text>■ 1 cup (8floz/225ml) heavy whipping cream</Text>
                            <Text>■ 1 teaspoon vanilla extract</Text>
                            <Text>■  3/4 cup (7½ oz/213g) sweetened condensed milk, cold</Text>
                            <Text>■ 2 cups (6oz/120g) shortbread cookies, or any vanilla cookie</Text>
                            <Text>■ ⅓ cup (1oz/28g) freeze dried strawberries</Text>
                            <Text>■ 2 tablespoon (1oz/57g) butter, melted{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text>■ Using a food processor or blender, lightly puree the strawberries and sugar until they have just broken down into a textured puree. If you don't have a food processor you can mash the strawberries and sugar by hand until they are broken down. Set aside. {"\n"}</Text>
                            <Text>■ In a large bowl, whip the cream to soft peaks. Once you've reached soft peaks add in the vanilla and cold condensed milk and whip until stiff peaks form.{"\n"}</Text>
                            <Text>■ Fold the strawberry puree into the ice cream base.{"\n"}</Text>
                            <Text>■ Using a spoon, divide the strawberry ice cream between the wells of the popsicle molds, filling them just below the top leaving some room for the ice cream to expand. Place your top on the popsicle mold then insert the sticks in each bar.{"\n"}</Text>
                            <Text>■ Freeze the ice cream bars for a minimum of 6 hours but preferably overnight. {"\n"}</Text>

                            <Text style={styles.subheader}>Cookie Crumb{"\n"}</Text>
                            <Text>■ I suggest you watch the video above for an easy step by step instruction. Place the cookies in the food processor and pulse them into a medium crumb. Remove 1/2 of the crumbs and set aside. {"\n"}</Text>
                            <Text>■ To the food processor add in the freeze-dried berries to the remaining cookie crumbs then pulse until you're left with fine crumbs.   {"\n"}</Text>
                            <Text>■ Combine the 2 batches of cookies together and stir in the melted butter. Feel free to mix the butter in with your fingertips until evenly distributed. Transfer the cookie crumb to a small cookie sheet and set aside.  {"\n"}</Text>
                            <Text>■ Remove the ice cream bars from the freezer. Run the mold under hot water until you see the sides of the ice cream bars releasing from the mold. {"\n"}</Text>
                            <Text>■ One by one lay the ice cream bars on the cookie sheet with the cookie crumbs. Gently press the crumbs onto all sides of the bars, ensuring they are evenly coated. If the ice cream bars are slightly soft that is ok, as this helps the crumbs adhere to the bars.  {"\n"}</Text>
                            <Text>■ Once all of the bars have been coated, place them on a clean cookie sheet and return to the freezer to set for 20-30 minutes.  {"\n"}</Text>
                            <Text>■ Remove from the freezer and enjoy! Cover and store the ice cream bars in an airtight container in the freezer for up to 4 weeks. {"\n"}</Text>
                            
                           
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