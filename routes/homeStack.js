import * as React from 'react';
import { View, Button, Text, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from '@react-navigation/native';
import frontpage from '../Screens/frontpage';
import Login from '../Screens/login';
import homepage from '../Screens/homepage';
import cakes from '../Screens/cakes';
import cookies from '../Screens/cookies';
import deepfried from '../Screens/deepfried';
import frozen from '../Screens/frozen';
import pies from '../Screens/pies';
import pastries from '../Screens/pastries';
import blackForest from '../cakerecipes/blackForest';
import redvelvet from '../cakerecipes/redvelvet';
import tiramisu from '../cakerecipes/tiramisu';
import genoise from '../cakerecipes/genoise';
import chiffon from '../cakerecipes/chiffon';
import pineapple from '../cakerecipes/pineapple';
import snickerdoodles from '../cookierecipes/snickerdoodles';
import lemoncrinkle from '../cookierecipes/lemoncrinkle';
import snowball from '../cookierecipes/snowball';
import dropcookies from '../cookierecipes/dropcookies';
import biscotti from '../cookierecipes/biscotti';
import whoopie from '../cookierecipes/whoopie';
import beignets from '../deepfriedrecipes/beignets';
import malasadas from '../deepfriedrecipes/malasadas';
import friedicecream from '../deepfriedrecipes/friedicecream';
import funnelcake from '../deepfriedrecipes/funnelcake';
import churros from '../deepfriedrecipes/churros';
import friedoreos from '../deepfriedrecipes/friedoreos';
import smoothie from '../frozenrecipes/smoothie';
import batterpops from '../frozenrecipes/batterpops';
import orangeshake from '../frozenrecipes/orangeshake';
import shortcakepop from '../frozenrecipes/shortcakepop';
import lemonpie from '../pierecipes/lemonpie';
import blackberry from '../pierecipes/blackberry';
import bostonpie from '../pierecipes/bostonpie';
import blueberrypie from '../pierecipes/blueberrypie';
import applecobbler from '../pierecipes/applecobbler';
import eclairs from '../pastryrecipes/eclairs';
import millefeuille from '../pastryrecipes/millefeuille';
import creamhorns from '../pastryrecipes/creamhorns';
import cannolis from '../pastryrecipes/cannolis';
import signup from '../Screens/signup';


const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator

        >
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="frontpage"
                component={frontpage}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Login"
                component={Login}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Sign Up"
                component={signup}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Browse"
                component={homepage}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Cakes"
                component={cakes}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Cookies"
                component={cookies}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Deep Fried"
                component={deepfried}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Frozen"
                component={frozen}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Pies and Cobblers"
                component={pies}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Pastries"
                component={pastries}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Black Forest Gateau"
                component={blackForest}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Red Velvet Cake"
                component={redvelvet}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Tiramisu"
                component={tiramisu}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Genoise Cake"
                component={genoise}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Chiffon Cake"
                component={chiffon}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Pineapple Upside Down Cake"
                component={pineapple}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Snickerdoodles"
                component={snickerdoodles}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Lemon Crinkle Cookies"
                component={lemoncrinkle}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Chocolate Chip Snowball Cookies"
                component={snowball}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Brownie Drop Cookies"
                component={dropcookies}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Chocolate Mint Biscotti"
                component={biscotti}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Whoopie Pies"
                component={whoopie}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Beignets"
                component={beignets}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Malasadas"
                component={malasadas}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Fried Icecream"
                component={friedicecream}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Funnel Cake"
                component={funnelcake}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Chocolate Dipped Churros"
                component={churros}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Fried Oreos"
                component={friedoreos}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Strawberry Banana Smoothie"
                component={smoothie}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Cake Batter Pops"
                component={batterpops}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Orange Creamsicle Shake"
                component={orangeshake}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Strawberry Shortcake Icecream Pop"
                component={shortcakepop}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Lemon Meringue Pie"
                component={lemonpie}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Blackberry Cobbler"
                component={blackberry}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Boston Creme Pie"
                component={bostonpie}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Blueberry Pie"
                component={blueberrypie}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Apple Cobbler"
                component={applecobbler}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Chocolate Chip Cannolis"
                component={cannolis}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Chocolate Drizzle Cream Horns"
                component={creamhorns}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Eclairs"
                component={eclairs}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffa8d5'
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}
                name="Mille Feuille"
                component={millefeuille}
            />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyStack initialRouteName="frontpage" />
        </NavigationContainer>
    );
}