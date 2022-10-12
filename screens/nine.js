
import { View, Text, StatusBar, ImageBackground, Image, ScrollView } from 'react-native'
import React from 'react'


const Nine = () => {
    return (

        <View style={{ flex: 1 }}>

            <ImageBackground source={require("../config/images/eight.png")} style={{ width: "100%", height: "100%" }}>

                <StatusBar backgroundColor="lightgray" />

                <ScrollView>
                    <View style={{ alignItems: "center", marginTop: 40, marginRight: 235 }}>
                        <Image style={{ width: 60, height: 60 }} source={require("../config/images/emoji.png")} />
                    </View>
                    <View>
                        <Text style={{ color: "white", textAlign: "center", fontSize: 19, marginTop: 50, fontWeight: "900", marginBottom: 10, letterSpacing: 1 }}>HOW OFTEN DO YOU FOCUS ON</Text>
                        <Text style={{ color: "white", textAlign: "center", fontSize: 19, fontWeight: "900", marginBottom: 10, letterSpacing: 1 }}>THE PAST OR FUTURE </Text>
                    </View>
                    <View style={{ width: 64, height: 4, backgroundColor: "white", borderRadius: 20, marginLeft: 145 }}>
                    </View>

                    <View style={{ backgroundColor: "white", width: 310, height: 70, borderRadius: 15, alignSelf: "center", marginTop: 40, opacity: .3 }}>

                    </View>
                    <View style={{ position: "absolute", top: 262, right: 100 }} >

                        <Text style={{ fontWeight: "900", color: "white", fontSize: 23, textAlign: "center", marginTop: 10, marginBottom: 3 }}>Never</Text>
                        <Text style={{ color: "white", textAlign: "center", letterSpacing: 1 }}>I LIVE IN THE PRESENT</Text>
                    </View>


                    <View style={{ backgroundColor: "white", width: 310, height: 70, borderRadius: 15, alignSelf: "center", marginTop: 25, opacity: .3 }}>

                    </View>
                    <View style={{ position: "absolute", top: 358, right: 100 }} >

                        <Text style={{ fontWeight: "900", color: "white", fontSize: 23, textAlign: "center", marginTop: 10, marginBottom: 3 }}>Never</Text>
                        <Text style={{ color: "white", textAlign: "center", letterSpacing: 1 }}>I LIVE IN THE PRESENT</Text>
                    </View>

                    <View style={{ backgroundColor: "white", width: 310, height: 70, borderRadius: 15, alignSelf: "center", marginTop: 25, opacity: .3 }}>

                    </View>
                    <View style={{ position: "absolute", top: 454, right: 100 }} >

                        <Text style={{ fontWeight: "900", color: "white", fontSize: 23, textAlign: "center", marginTop: 10, marginBottom: 3 }}>Never</Text>
                        <Text style={{ color: "white", textAlign: "center", letterSpacing: 1 }}>I LIVE IN THE PRESENT</Text>
                    </View>

                    <View style={{ backgroundColor: "white", width: 310, height: 70, borderRadius: 15, alignSelf: "center", marginTop: 25, opacity: .3 }}>

                    </View>
                    <View style={{ position: "absolute", top: 546, right: 100 }} >

                        <Text style={{ fontWeight: "900", color: "white", fontSize: 23, textAlign: "center", marginTop: 10, marginBottom: 3 }}>Never</Text>
                        <Text style={{ color: "white", textAlign: "center", letterSpacing: 1 }}>I LIVE IN THE PRESENT</Text>
                    </View>


                </ScrollView>

                <View style={{ flexDirection: "row", marginLeft: 62, marginBottom: 60 }}>

                    <View style={{ borderColor: "white", width: 10, height: 10, borderWidth: 1, marginBottom: 30, marginLeft: 50, borderRadius: 10 }}>
                    </View>
                    <View style={{ borderColor: "white", width: 10, height: 10, borderWidth: 1, marginBottom: 30, borderRadius: 10, marginLeft: 10 }}>
                    </View>
                    <View style={{ borderColor: "white", width: 10, height: 10, borderWidth: 1, marginBottom: 30, borderRadius: 10, marginLeft: 10, backgroundColor: "white" }}>
                    </View>
                    <View style={{ borderColor: "white", width: 10, height: 10, borderWidth: 1, marginBottom: 30, borderRadius: 10, marginLeft: 10 }}>
                    </View>
                    <View style={{ borderColor: "white", width: 10, height: 10, borderWidth: 1, marginBottom: 30, borderRadius: 10, marginLeft: 10 }}>
                    </View>
                    <View style={{ borderColor: "white", width: 10, height: 10, borderWidth: 1, marginBottom: 30, borderRadius: 10, marginLeft: 10 }}>
                    </View>
                    <View style={{ borderColor: "white", width: 10, height: 10, borderWidth: 1, marginBottom: 30, borderRadius: 10, marginLeft: 10 }}>

                    </View>

                </View>

            </ImageBackground>

        </View>
    )
}

export default Nine