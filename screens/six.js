import { View, Text, ImageBackground, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'

const SixxScreen = ({ navigation }) => {

    const next = () => {
        navigation.navigate("seven")

    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor="#0072B7" />

            <ImageBackground source={require("../config/images/fivee.png")} style={{ width: "100%", height: "100%" }}>
                <View style={{ alignItems: "center", marginTop: 40, marginRight: 235 }}>
                    <Image style={{ width: 55, height: 55 }} source={require("../config/images/emoji.png")} />
                </View>
                <View style={{ backgroundColor: "white", width: 310, height: 410, borderRadius: 15, alignSelf: "center", marginTop: 90, opacity: .4 }}>

                </View>
                <View style={{ position: "absolute", top: 220, right: 73 }}>

                    <Text style={{ color: "white", fontWeight: "900", fontSize: 21, textAlign: "center" }}>YOU KNOW YOURSELF</Text>
                    <Text style={{ color: "white", fontWeight: "900", fontSize: 21, textAlign: "center" }}>BEST!</Text>
                    <View style={{ width: 53, height: 3, backgroundColor: "white", borderRadius: 20, marginLeft: 82, marginTop: 5 }}>
                    </View>

                </View>
                <View style={{ position: "absolute", top: 315, right: 53 }}>
                    <Text style={{ color: "white", fontWeight: "bold", marginBottom: 20 }}>YOU KNOW YOURSELF BEST, AND WE</Text>
                    <Text style={{ color: "white", fontWeight: "bold", marginBottom: 20 }}>TRUST YOUR JUDGMENT. TOGETHER,</Text>
                    <Text style={{ color: "white", fontWeight: "bold", marginBottom: 20 }}>WE'LL FIGURE OUT A WAY TO MODILFY</Text>
                    <Text style={{ color: "white", fontWeight: "bold" }}>YOU HABITS TO SUITE YOUR LIESTYLE</Text>
                </View>
                <View style={{ position: "absolute", top: 495, right: 75 }}>
                    <TouchableOpacity  style={{ backgroundColor: "#277BC0", width: 210, height: 50, borderRadius: 35 }}>
                        <Text onPress={next} style={{ color: "white", fontWeight: "bold", textAlign: "center", fontSize: 20, marginTop: 10 }}>LET'S DO IT</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

        </View>
    )
}

export default SixxScreen