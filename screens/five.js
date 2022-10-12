import { View, Text, ImageBackground, ScrollView, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native'
import React from 'react'

const Five = ({ navigation }) => {
    const backroute = () => {
        navigation.navigate("signup")

    }

    const nextrouter = () => {
        navigation.navigate("screen")

    }
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require("../config/images/fivee.png")} style={{ width: "100%", height: "100%" }}>
                <ScrollView>
                    <View style={{ alignItems: "center", marginTop: 40, marginRight: 235 }}>
                        <Image style={{ width: 60, height: 60 }} source={require("../config/images/emoji.png")} />
                    </View>
                    <View>
                        <Text style={{ color: "white", textAlign: "center", fontSize: 22, marginTop: 93, fontWeight: "900", marginBottom: 2, letterSpacing: 1 }}>YOU REALLY SEEM LIKE A</Text>
                        <Text style={{ color: "white", textAlign: "center", fontSize: 22, fontWeight: "900", marginBottom: 10, letterSpacing: 1 }}>PERSON WHO CAN DO THIS</Text>
                    </View>
                    <View style={{ width: 90, height: 3, backgroundColor: "white", borderRadius: 20, marginLeft: 135 }}>
                    </View>

                    <View style={{ alignItems: "center", marginTop: 70, marginBottom: 30 }}>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 17, marginBottom: 20 }}>DO YOU BELIEVE YOU HAVE THE </Text>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 17, marginBottom: 20 }}>ABILITY TI CHANGE YOURSELF AND </Text>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 17, marginBottom: 20 }}>TRANSFORM YOUR BEHAVIOR FOR</Text>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 17, marginBottom: 20 }}>THE BETTER?</Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flexDirection: "row" }}>

                            <View style={{ backgroundColor: "white", opacity: .2, width: 145, height: 50, alignItems: "center", borderRadius: 30, marginTop: 30, marginLeft: 29 }}>
                                <TouchableOpacity  >
                                    <Text onPress={backroute} style={{ color: "white", fontWeight: "bold", fontSize: 18, opacity: .9, marginTop: 10, marginRight: 5 }}>  NO</Text>
                                </TouchableOpacity>
                            </View>


                        </View>

                        <View style={{ flexDirection: "row" }}>
                            <StatusBar backgroundColor="#0072B7" />

                            <View style={{ backgroundColor: "white", opacity: .2, width: 145, height: 50, alignItems: "center", borderRadius: 30, marginLeft: 10, marginTop: 30 }}>
                            </View>
                            <TouchableOpacity >
                                <Text  onPress={nextrouter} style={{ color: "white", fontWeight: "bold", fontSize: 18, position: "relative", top: 42, bottom: 10, right: 0, left: -97 }}>  YES</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: 103, marginTop: 85 }}>
                        <View style={{ borderColor: "white", width: 10, height: 10, borderWidth: 1, marginBottom: 30, marginLeft: 50, borderRadius: 10 }}>
                        </View>
                        <View style={{ borderColor: "white", width: 10, height: 10, borderWidth: 1, marginBottom: 30, borderRadius: 10, marginLeft: 10 }}>
                        </View>
                        <View style={{ borderColor: "white", width: 10, height: 10, borderWidth: 1, marginBottom: 30, borderRadius: 10, marginLeft: 10, backgroundColor: "white" }}>
                        </View>


                    </View>
                </ScrollView>

            </ImageBackground>

        </View>
    )
}

export default Five