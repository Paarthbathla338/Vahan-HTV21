import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"

export default function Categories() {
    return (
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly',padding:15,backgroundColor: '#00b3b3', borderBottomRightRadius: 35,borderTopRightRadius: 35,flex:1,height:"100%",width:90,marginLeft:5}}>

            <TouchableOpacity style={{ alignItems: "center",justifyContent:"center", marginRight: 30,marginLeft: 30, resizeMode: "contain", marginTop: 5 }} >
                <Ionicons name="fitness-outline" size={24} paddingRight={10} color="red" />
                <Text style={{ fontSize: '13', fontWeight: '900',textAlign:"center", color:"white"}}>Med Support</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignItems: "center", marginRight: 30,marginLeft: 30, resizeMode: "contain", marginTop: 5 }} >
                <Ionicons name="bandage-outline" size={24} paddingRight={10} color="grey" />
                <Text style={{ fontSize: '13', fontWeight: '900' ,textAlign:"center",color:"white"}}>Counselling</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignItems: "center", marginRight: 30,marginLeft: 30, resizeMode: "contain", marginTop: 5 }} >
                <Ionicons name="happy-outline" size={24} paddingRight={10} color="#FFBF00" />
                <Text style={{ fontSize: '13', fontWeight: '900',textAlign:"center" ,color:"white"}}>Therapy</Text>
            </TouchableOpacity>







        </View>






    )
}
