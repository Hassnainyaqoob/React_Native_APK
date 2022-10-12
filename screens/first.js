import { View, Text, TouchableOpacity, ImageBackground, Image, StatusBar } from 'react-native'
import React from 'react'

export default function First({ navigation }) {

    const NextRoute = () => {
        navigation.navigate("signup")

    }

    return (

        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor="black"  />
            <ImageBackground source={require("../config/images/first.png")} style={{ width: "100%", height: "100%" }}>

                <View style={{ alignItems: "center", marginTop: 320 }}>
                    <Image style={{ width: 135, height: 135 }} source={require("../config/images/emoji.png")} />
                </View>

                <View style={{ backgroundColor: "black", opacity: .5, width: 150, height: 45, alignItems: "center", borderRadius: 30, marginLeft: 103, marginTop: 150 }}>
                    <TouchableOpacity onPress={NextRoute}>
                        <Text style={{ color: "white", fontSize: 25, textAlign: "center", marginTop: 5 }}>Hello</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

        </View>

    )
}