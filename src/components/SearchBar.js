import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons'; 



const SearchBar = ({term, onTermChange, onTermSubmit}) =>{
    return <View style = {styles.backgroundStyle}>
        <Feather name = "search" style = {styles.iconStyle}/>
        <TextInput 
            autoCapitalize="none"
            autoCorrect = {false}
            placeholder="Search"
            style = {styles.inputStyle}
            value = {term}
            onChangeText = {onTermChange}
            onEndEditing = {onTermSubmit}
        />
        
    </View>
};

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#E0E0E0',
        height: 35,
        borderRadius: 25,
        marginHorizontal: 45,
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 10,
        flex: 0.9
    },
    inputStyle: {
        flex:1
    },
    iconStyle:{
        fontSize: 20,
        alignSelf: "center",
        marginHorizontal: 15
    }
});

export default SearchBar;