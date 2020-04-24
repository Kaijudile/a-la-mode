import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import Navigator from '../routes/homeStack';

export default class genoise extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('../assets/recipeImages/cakes/Genoise.jpg')}
                            />
                            <Text style={styles.cardText}>Genoise Cake</Text>
                            <Text>The classic European sponge cake. No chemical leavener, just air that is beaten into the eggs. 
                                Folding (stirring without deflating) is the biggest factor. Be gentle!{"\n"}
                            </Text>

                            <Text style={styles.header}>INGREDIENTS{"\n"}</Text>
                            <Text style={styles.subheader}>Sponge Cake:{"\n"}</Text>

                            <Text>■ 9oz Unrefined golden caster sugar</Text>
                            <Text>■ 8 Eggs</Text>
                            <Text>■ 9oz Plain white flour</Text>
                            <Text>■ 2oz unsalted, melted butter{"\n"}</Text>

                            <Text style={styles.subheader}>Filling:{"\n"}</Text>

                            <Text>■ 18 fl oz Double whipped cream</Text>
                            <Text>■ Berries as desired</Text>
                            <Text>■ Icing sugar as desired{"\n"}</Text>

                            <Text style={styles.header}>INSTRUCTIONS{"\n"}</Text>

                            <Text style={styles.subheader}>Cake:{"\n"}</Text>
                            <Text>■ Preheat the oven to 180°C (160°C fan, gas mark 4) and line, grease and dust two 22cm cake tins with flour.{"\n"}</Text>
                            <Text>■ Put the sugar and eggs in a heat proof bowl and place over a bowl of simmering water. Beat them together until hot in temperature then whisk the hot mixture in a mixer at full speed for 10 minutes until the mixture doubles in volume and creates a "ribbon" effect when dripping from the whisk.{"\n"}</Text>
                            <Text>■ Sift in the flour and fold it gently into the mixture with a large metal spoon. Add the melted butter to the batter, being careful not to overmix at this stage as this will prevent the cake rising well.{"\n"}</Text>
                            <Text>■ Divide the mixture between the two tins and bake for 30 minutes or until a skewer comes out clean.{"\n"}</Text>
                            <Text>■ Leave in the tin for 10 minutes and then turn out on a wire rack to cool.{"\n"}</Text>
                            <Text>■ Once ready to serve, slice the cakes in half into two thin layers for each sandwich, making a total of four layers. Then layer each sandwich with fresh whipped cream and berries. Decorate the top with more berries and a dusting of icing sugar.{"\n"}</Text>
                            
                           
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