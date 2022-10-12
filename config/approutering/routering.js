// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import First from '../../screens/first';
import Signup from '../../screens/second';
import Third from '../../screens/third';
import Fourt from '../../screens/fourt';
import Five from '../../screens/five';
import SixxScreen from '../../screens/six';
import Seven from '../../screens/seven';
import Eight from '../../screens/eight';
import Nine from '../../screens/nine';



const Stack = createNativeStackNavigator();

export default function Routering() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="first"
                    options={{
                        headerShown: false
                    }}
                    component={First} />
                <Stack.Screen name="signup"
                    options={{
                        headerShown: false
                    }}

                    component={Signup} />

                <Stack.Screen name="Third"
                    options={{
                        headerShown: false
                    }}

                    component={Third} />
                <Stack.Screen name="fourt"
                    options={{
                        headerShown: false
                    }}

                    component={Fourt} />
                <Stack.Screen name="five"
                    options={{
                        headerShown: false
                    }}

                    component={Five} />

                <Stack.Screen name="screen"
                    options={{
                        headerShown: false
                    }}

                    component={SixxScreen} />

                <Stack.Screen name="seven"
                    options={{
                        headerShown: false
                    }}

                    component={Seven} />
                <Stack.Screen name="eightt"
                    options={{
                        headerShown: false
                    }}

                    component={Eight} />

                <Stack.Screen name="ninee"
                    options={{
                        headerShown: false
                    }}

                    component={Nine} />


            </Stack.Navigator>
        </NavigationContainer>
    );
}
