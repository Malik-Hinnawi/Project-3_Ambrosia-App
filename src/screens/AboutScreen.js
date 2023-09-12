import React from "react";
import { View, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";


const AboutScreen = ({navigation}) =>{
    

    return  <View style = {styles.backgroundContainer}> 
            <ImageBackground source={require("../../assets/Page7.png")} resizeMode = 'cover' style = {styles.imageStyle}>

            </ImageBackground>
            
            
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
      
});

export default AboutScreen;