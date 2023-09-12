import React, {useState} from "react";
import { View, ImageBackground, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import Spacer from "../components/Spacer";
import { Button } from "@rneui/themed";
import LongLine from "../components/LongLine";
import FormInputI from "../components/FormInputI";

const AboutScreen2 = ({navigation}) =>{
    

    return  <View style = {styles.backgroundContainer}> 
            <ImageBackground source={require("../../assets/Page8.png")} resizeMode = 'cover' style = {styles.imageStyle}>

            
            </ImageBackground>
            <TouchableOpacity onPress={()=> navigation.navigate("About")}>
              <View style = {styles.rectangleStyle}/>
            </TouchableOpacity>
            
         </View>
   

};

const styles = StyleSheet.create({
    backgroundContainer: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flex:1,
        height: "100%",
        flexDirection:"column",
        backgroundColor: "#FFFFFF"
      },
      imageStyle:{
        flex: 1,
        paddingHorizontal: "10%",
        paddingVertical: "30%"
      },
      imageStyle2:{
        width: 70,
        height: 70,
        position: 'absolute',
        marginTop: "5%"
      },
      rectangleStyle:{
        width: 450,
        height: 50,
        backgroundColor: 'rgba(0,0,0,0)',
        bottom: 0,
        alignSelf: 'center'
      }
      ,
      textStyle:{
        marginTop: "12%",
        textAlign: "center",
        fontWeight: '800',
        color:"#5E714E",
        fontSize: 18
      }
});

export default AboutScreen2;