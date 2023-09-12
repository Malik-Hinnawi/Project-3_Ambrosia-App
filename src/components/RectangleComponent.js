import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const RectangleComponent = ({ caption, navigationDestination}) =>{
    return <TouchableOpacity onPress={()=>{navigationDestination()}}>
        <View style = {styles.rectangleStyle}>
            <Text style = {styles.textStyle}>{caption}</Text>
        </View>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    rectangleStyle:{
        width:150,
        height: 125,
        backgroundColor: "#425340",
        borderRadius: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    textStyle:{
        fontWeight: "bold",
        color: "#fff",
    }
});

export default RectangleComponent