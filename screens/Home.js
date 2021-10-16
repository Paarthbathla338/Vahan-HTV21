import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Header from "../components/Header"
import SearchBar from "../components/SearchBar"

export default function Home() {
    return (
        <SafeAreaView style={{backgroundColor:"#eeee",flex:1}}>
        <View style={{backgroundColor:"white",padding:15}}>
        <Header/>
        <SearchBar/>


        </View>
        </SafeAreaView>
    )
}
