import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class lemoncrinkle extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/cookies/lemon_crinkle.jpg')}
                            />
                            <Text style={styles.cardText}>Lemon Crinkle Cookies</Text>
                            <Text>Sweet and tart crinkle cookies bursting with bright lemon flavor.{"\n"}
                            </Text>
                            <Text style={styles.subheader}>Servings: 1 Dozen Cookies{"\n"}</Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>

                            <Text>■ 1 and 1/2 cup all purpose flour</Text>
                            <Text>■ ¼ teaspoon salt</Text>
                            <Text>■ ¼ teaspoon baking powder</Text>
                            <Text>■ ⅛ teaspoon baking soda</Text>
                            <Text>■ ½ cup (1 stick) unsalted butter softened to room temperature</Text>
                            <Text>■ 1 cup granulated sugar</Text>
                            <Text>■ 1 teaspoon vanilla extract</Text>
                            <Text>■ 1 large egg room temperature*</Text>
                            <Text>■ 1 and 1/2 Tablespoons fresh lemon juice</Text>
                            <Text>■ zest of one lemon</Text>
                            <Text>■ 4 drops yellow food coloring if desired</Text>
                            <Text>■ ½ cup powdered sugar{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text>■ In a medium size bowl, toss together the flour, salt, baking powder, and baking soda. Set aside.{"\n"}</Text>
                            <Text>■ In a large bowl with a hand mixer or the bowl of a stand mixer fitted with the paddle attachment, cream the butter and sugar together until light and fluffy (approximately 2-3 minutes). Beat in vanilla, egg, lemon juice, and lemon zest. Scrape down the sides of the bowl with a spatula as necessary.{"\n"}</Text>
                            <Text>■ Reduce mixer speed to low and gradually add flour mixture. Add the food coloring, is using. Mix until just combined. Cover bowl and chill in the refrigerator at least 1 hour and up to 3 days. If chilling longer than 1 hour, allow to sit at room temperature about 15 minutes before rolling into balls.{"\n"}</Text>
                            <Text>■ When you are ready to bake the cookies, preheat the oven to 350ºF. Line a baking sheet with parchment paper or a silicone baking mat. Set aside.{"\n"}</Text>
                            <Text>■ Pour the powdered sugar onto a large plate. Using a large cookie scoop, scoop the dough out of the bowl and roll into a ball with your hands. Dough ball does not need to be perfect. Roll the ball of dough generously in the powdered sugar. Place no more than 8 balls of dough on a baking sheet at one time (4 rows of 2). Chill dough you are not using.{"\n"}</Text>
                            <Text>■ Bake cookies for 13-14 minutes or until cookies look mostly matte (not wet or shiny). Remove from oven and cool on the baking sheet for 3 minutes before transferring to cooling rack to cool completely. Store cookies in an airtight container at room temperature up to 10 days. Baked cookies freeze well, up to 2 months. Rolled cookie dough can be frozen up to 3 months. Roll in powdered sugar before baking and bake frozen. Add another 1-2 minutes to baking time.{"\n"}</Text>
                           
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