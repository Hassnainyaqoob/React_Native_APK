import { View, Text, ImageBackground, Image, TouchableOpacity, SafeAreaView, FlatList, StatusBar } from 'react-native'
import React from 'react'

const Signup = ({ navigation }) => {

    const Nextrote = () => {
        navigation.navigate("Third")

    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor="#11B9C4" />

            <ImageBackground source={require("../config/images/second.png")} style={{ width: "100%", height: "100%" }}>

                <View style={{ alignItems: "center", marginTop: 55 }}>
                    <Image style={{ width: 70, height: 70 }} source={require("../config/images/emoji.png")} />
                </View>
                <View>
                    <Text style={{ color: "white", textAlign: "center", fontSize: 22, marginTop: 50, fontWeight: "900", marginBottom: 10 }}>THINGS YOU CAN CONTROL</Text>
                </View>
                <View style={{ width: 180, height: 4, backgroundColor: "white", borderRadius: 20, marginLeft: 90 }}>

                </View>
                <View>
                    <View style={{ padding: 20, marginTop: 17 }}>
                        <FlatList
                            data={[
                                { key: 'YOUR SLEEP ROUTINE' },
                                { key: 'HOW YOU SPEAK TO YOURSELF' },
                                { key: 'WHO YOU FOLLOW ON SOCIAL MEDIA' },
                                { key: 'WHAT YOU EAT' },
                                { key: 'Mexico City' },
                                { key: 'YOUR MINDSET' },
                                { key: 'THE WAY YOU TREAT OTHERS' },
                                { key: 'YOUR LEVEL OF HONESTY' },
                                { key: 'YOUR OUTLOOK' },
                                { key: 'HOW SOON YRY AGIAN AFTER YOU FAIL ' },
                            ]}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ fontSize: 15, color: "white", fontWeight: "bold", }}>{`\u29BF  ${item.key}`}</Text>
                                    </View>
                                );
                            }}
                        />
                    </View>
                </View>

                <View style={{ flexDirection: "row" }}>

                    <View style={{ backgroundColor: "white", opacity: .2, width: 160, height: 45, alignItems: "center", borderRadius: 30, marginLeft: 103, marginTop: 10 }}>
                    </View>

                    <TouchableOpacity  >
                        <Text onPress={Nextrote} style={{ color: "white", fontWeight: "bold", fontSize: 18, position: "relative", top: 20, right: 130, }}>  CONTINUE</Text>
                    </TouchableOpacity>

                </View>

            </ImageBackground>

        </View>
    )
}

export default Signup