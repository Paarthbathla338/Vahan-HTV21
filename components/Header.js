import React,{useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {useFonts,Oswald_400Regular,Ephesis_400Regular} from "@expo-google-fonts/dev"

export default function Header() {
    const [activeTab,setActiveTab]= useState("Find Doctors")
    return (
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <HeaderButton text="Find Doctors" btnColor="black" textColor="white" activeTab={activeTab} setActiveTab={setActiveTab} paddingTop="50"/>
            <HeaderButton text="Book an Appointment" btnColor="white" textColor="black" activeTab={activeTab} setActiveTab={setActiveTab}/>



        </View>
    )
}
const HeaderButton=(props)=> 

<TouchableOpacity style={{backgroundColor:props.activeTab===props.text?"black":"white", paddingVertical:6, paddingHorizontal:14,borderRadius:30}} onPress={()=>props.setActiveTab(props.text)}>
<Text style={{color:props.activeTab===props.text?"white":"black",fontSize:15,fontWeight:"900"}}>{props.text}</Text>
</TouchableOpacity>

