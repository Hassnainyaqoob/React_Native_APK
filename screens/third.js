import { View, Text, TouchableOpacity, ImageBackground, Image, TextInput, ScrollView, StatusBar } from 'react-native'
import React, { useState } from 'react'


const Third = ({ navigation }) => {
    const [email, setEmail] = useState("")

    const handle = () => {
        if (email < 1) {
            alert("Please Type Your a Name")
        } else {

            navigation.navigate("fourt")
            setEmail("")
        }

    }
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor="#A70029" />

            <ImageBackground source={require("../config/images/third.png")} style={{ width: "100%", height: "100%" }}>
                <ScrollView>
                    <View style={{ alignItems: "center", marginTop: 40, marginRight: 235 }}>
                        <Image style={{ width: 60, height: 60 }} source={require("../config/images/emoji.png")} />
                    </View>
                    <View>
                        <Text style={{ color: "white", textAlign: "center", fontSize: 22, marginTop: 100, fontWeight: "900", marginBottom: 10, letterSpacing: 1 }}>WHAT'S YOUR NAME</Text>
                    </View>
                    <View style={{ width: 90, height: 4, backgroundColor: "white", borderRadius: 20, marginLeft: 135 }}>
                    </View>

                    <View style={{ alignItems: "center", marginTop: 135, marginBottom: 30 }}>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>WHAT SHOULD WE CALL YOU?</Text>
                    </View>
                    <View>
                        <TextInput placeholder='ENTER YOUR NAME' value={email} onChangeText={e => setEmail(e)} placeholderTextColor={"gray"} style={{ backgroundColor: "white", opacity: .2, borderRadius: 25, width: "83%", alignSelf: "center", paddingLeft: 75, fontSize: 17 }} />
                    </View>

                    <View style={{ flexDirection: "row" }}>

                        <View style={{ backgroundColor: "white", opacity: .2, width: 180, height: 45, alignItems: "center", borderRadius: 30, marginLeft: 90, marginTop: 70 }}>
                        </View>
                        <TouchableOpacity >
                            <Text onPress={handle} style={{ color: "white", fontWeight: "bold", fontSize: 18, position: "relative", top: 80, right: 130, marginLeft: 9 }}>  NEXT</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: 103, marginTop: 85 }}>
                        <View style={{ borderColor: "white", width: 10, height: 10, borderWidth: 1, marginBottom: 30, marginLeft: 50, borderRadius: 10, backgroundColor: "white" }}>
                        </View>
                        <View style={{ borderColor: "white", width: 10, height: 10, borderWidth: 1, marginBottom: 30, borderRadius: 10, marginLeft: 10 }}>
                        </View>
                        <View style={{ borderColor: "white", width: 10, height: 10, borderWidth: 1, marginBottom: 30, borderRadius: 10, marginLeft: 10 }}>
                        </View>


                    </View>
                </ScrollView>

            </ImageBackground>

        </View>
    )
}

export default Third