import React from 'react'
import { View, Text } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"

export default function Categories() {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

            <View style={{ alignItems: "center", marginRight: 30, resizeMode: "contain", marginTop: 5 }} >
                <Ionicons name="fitness-outline" size={24} paddingRight={10} color="red" />
                <Text style={{ fontSize: '13', fontWeight: '900' }}>Med-Support</Text>
            </View>

            <View style={{ alignItems: "center", marginRight: 30, resizeMode: "contain", marginTop: 5 }} >
                <Ionicons name="bandage-outline" size={24} paddingRight={10} color="grey" />
                <Text style={{ fontSize: '13', fontWeight: '900' }}>Counselling</Text>
            </View>

            <View style={{ alignItems: "center", marginRight: 30, resizeMode: "contain", marginTop: 5 }} >
                <Ionicons name="happy-outline" size={24} paddingRight={10} color="#FFBF00" />
                <Text style={{ fontSize: '13', fontWeight: '900' }}>Therapy</Text>
            </View>







        </View>






    )
}
