import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import Categories from '../components/Categories'
import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import RestaurantItem from "../components/RestaurantItem"

export default function Home() {
    return (
        <SafeAreaView style={{ backgroundColor: "#eeee", flex: 1 }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <Header />
                <SearchBar />


            </View>
            <View>
                <Categories />
                <RestaurantItem />
            </View>
        </SafeAreaView>
    )
}
