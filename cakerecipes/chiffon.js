import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class chiffon extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/cakes/chiffon.jpg')}
                            />
                            <Text style={styles.cardText}>Chiffon Cake</Text>
                            <Text>This is a favorite for children's birthday parties. Serve with fruit or decorate with Butter Cream Frosting.!{"\n"}
                            </Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>
                            <Text style={styles.subheader}>Cake:{"\n"}</Text>

                            <Text>■ 2 cups sifted cake flour</Text>
                            <Text>■ 1 ½ cups white sugar</Text>
                            <Text>■ 1 tablespoon baking powder</Text>
                            <Text>■ 1 teaspoon salt</Text>
                            <Text>■ ½ cup vegetable oil</Text>
                            <Text>■ 7 egg yolks</Text>
                            <Text>■ ¾ cup cold water</Text>
                            <Text>■ 2 teaspoons vanilla extract</Text>
                            <Text>■ 1 teaspoon lemon extract</Text>
                            <Text>■ 7 egg whites</Text>
                            <Text>■ ½ teaspoon cream of tartar</Text>
                            <Text>■ 1 recipe Williamsburg Butter Frosting{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text style={styles.subheader}>Cake:{"\n"}</Text>
                            <Text>■ Preheat oven to 325 degrees F (165 degrees C). Wash a 10 inch angel food tube pan in hot soapy water to ensure it is totally grease free.{"\n"}</Text>
                            <Text>■ Measure flour, sugar, baking powder, and salt into sifter. Sift into bowl. Make a well; add oil, egg yolks, water, vanilla, and lemon flavoring to the well in the order that is given. Set aside. Don't beat.{"\n"}</Text>
                            <Text>■ In a large mixing bowl, beat egg whites and cream of tartar until very stiff. Set aside.{"\n"}</Text>
                            <Text>■ Using same beaters, beat egg yolk batter until smooth and light. Pour gradually over egg whites, folding in with rubber spatula. Do not stir. Pour batter into angel food tube pan.{"\n"}</Text>
                            <Text>■ Bake for 55 minutes. Increase heat to 350 degrees F (175 degrees C), and bake 10 to 15 minutes until done. Invert pan until cool.{"\n"}</Text>
                            <Text>■ Decorate as desired with fruits and/or buttercream icing.{"\n"}</Text>
                            
                           
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