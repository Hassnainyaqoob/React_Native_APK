import { View, Text, TextInput, ScrollView, ImageBackground, Image, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'

const Fourt = ({ navigation }) => {

    const [email, setEmail] = useState("")

    const nextRoute = () => {
        if (email < 1) {
            alert("Please Type Your a Email")
        } else {

            navigation.navigate("five")
            setEmail("")
        }
    }


    const Handle = () => {
        alert("Timing In Process")
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor="#B4551F" />

            <ImageBackground source={require("../config/images/fourt.png")} style={{ width: "100%", height: "100%" }}>
                <ScrollView>

                    {/* <View style={{ alignItems: "center", marginTop: 40, marginRight: 235 }}> */}
                    <View style={{ alignItems: "center", marginTop: 10, marginRight: 235 }}>
                        <Image style={{ width: 60, height: 60 }} source={require("../config/images/emoji.png")} />
                    </View>
                    <View>
                        <Text style={{ color: "white", textAlign: "center", fontSize: 22, marginTop: 100, fontWeight: "900", marginBottom: 10, letterSpacing: 1 }}>WHEN DO YOU WAKE UP</Text>
                        <Text style={{ color: "white", textAlign: "center", fontSize: 22, fontWeight: "900", marginBottom: 10, letterSpacing: 1 }}>GENERALLY?</Text>
                    </View>
                    <View style={{ width: 64, height: 4, backgroundColor: "white", borderRadius: 20, marginLeft: 145 }}>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 30 }}>
                        <Text style={{ color: "white", marginLeft: 30 }}>5:00 AM</Text>
                        <Text style={{ color: "white", marginLeft: 30, opacity: .9 }}>7:00 AM</Text>
                        <Text style={{ color: "white", marginLeft: 30, opacity: .9 }}>9:00 AM</Text>
                        <Text onPress={Handle} style={{ color: "white", marginLeft: 30, opacity: .9 }}>CUSTOM</Text>
                    </View>

                    <View style={{ alignItems: "center", marginTop: 25, marginBottom: 30 }}>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>HOW SHOULD WE CONTACT YOU?</Text>
                    </View>
                    <View>
                        <TextInput placeholder='ENTER YOUR Email' keyboardType={"email-address"} value={email} onChangeText={e => setEmail(e)} placeholderTextColor={"gray"} style={{ backgroundColor: "white", opacity: .2, borderRadius: 25, width: "83%", alignSelf: "center", paddingLeft: 75 }} />
                    </View>
                    <View>
                        <Text style={{ color: "white", textAlign: "center", marginTop: 17, marginBottom: 3 }}>BY COUNTINYING , YOU AGREE TO OUR</Text>
                        <Text style={{ color: "white", textAlign: "center" }}>TERMS AND CONDITION</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>

                        <View style={{ backgroundColor: "white", opacity: .2, width: 180, height: 45, alignItems: "center", borderRadius: 30, marginLeft: 90, marginTop: 27 }}>
                        </View>
                        <TouchableOpacity  >
                            <Text onPress={nextRoute} style={{ color: "white", fontWeight: "bold", fontSize: 18, position: "relative", top: 38, right: 130, marginLeft: 9 }}>  NEXT</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: 103, marginTop: 85 }}>
                        <View style={{ borderColor: "white", width: 10, height: 10, borderWidth: 1, marginBottom: 30, marginLeft: 50, borderRadius: 10 }}>
                        </View>
                        <View style={{ borderColor: "white", width: 10, height: 10, borderWidth: 1, marginBottom: 30, borderRadius: 10, marginLeft: 10, backgroundColor: "white" }}>
                        </View>
                        <View style={{ borderColor: "white", width: 10, height: 10, borderWidth: 1, marginBottom: 30, borderRadius: 10, marginLeft: 10 }}>
                        </View>


                    </View>
                </ScrollView>

            </ImageBackground>

        </View>
    )
}

export default Fourt