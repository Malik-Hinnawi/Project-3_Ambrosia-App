import React from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity } from "react-native";
import Spacer from "./Spacer";

const MenuComponent = ({title, imageUrl, content})=>{
    return  <View style = {styles.constainerStyle}>
        
        <Image source = {imageUrl} style = {styles.imageStyle2}/>
        
        <View style = {styles.rectangeStyle}>
            <Text style = {styles.titleStyle}>{title}</Text>
            <Text style = {styles.contentStyle}>{content}</Text>
        </View>
    </View>
    
    
    
};

const styles = StyleSheet.create({
    constainerStyle:{
        position: "relative",
        top: "30%",
        bottom: 0,
        left: 0,
        right: 0,
        flex:1,
        height: 190,
        flexDirection:"column",
        backgroundColor: "red",
        alignItems: "center"
    },
    imageStyle2:{
        width: "100%",
        height: "100%",
        alignSelf: "center",
        position: 'relative'
      },
      rectangeStyle: {
        backgroundColor: "#5E714E",
        width: "100%",
        height: 60,
        position: "absolute",
        justifyContent: "center", // Align the content vertically in the center
        bottom: 0, // Position the rectangle at the bottom
        padding: 10
      },
      titleStyle: {
        color: "#ffdca9",
        fontSize: 20
      },
      contentStyle: {
        color: "#f0efec",
        fontSize: 12,
        fontFamily: "SnellRoundhand"
      }
});

export default MenuComponent;