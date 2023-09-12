import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";
import Spacer from "../components/Spacer";
import { Button } from "@rneui/themed";
import Line from "../components/Line";
import { Ionicons } from '@expo/vector-icons';

import FormInputI from "../components/FormInputI";

const ForgetPasswordScreen2 = ({navigation}) =>{
    return <View style = {styles.backgroundContainer}> 
                <ImageBackground source={require("../../assets/ambrosia.png")} resizeMode = 'cover' style = {styles.imageStyle}> 
                <Image source = {require("../../assets/Logo.jpeg")} style = {styles.imageStyle2}/>

                <View style = {styles.rectangleStyle}></View>

               
                <TouchableOpacity onPress={()=> {navigation.pop()}} style = {styles.iconStyle}>
                    <Ionicons name="ios-chevron-back-circle-sharp" size={50} color="rgba(0,0,0,0.5)"/>
                    </TouchableOpacity>
               

                <FormInputI
                  placeholder = "Ex: 1111116" 
                  header="Confirmation Code"
                  numericMode = {true}
                />

                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>

                <Spacer>
                <Button
                  title="Continue"
                  buttonStyle={{ backgroundColor: '#5E714E', alignSelf: "center", marginTop: "30%", borderRadius: 10 }}
                  titleStyle={{
                    color: 'white',
                    marginHorizontal: 20,
                  }}
                  onPress={()=> {navigation.navigate("ForgetPassword3")}}
                />
            </Spacer>
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
        flexDirection:"column"
      },
      inputStyle:{
        height: "10%",
        width: "80%",
        backgroundColor: "#e6e6e6",
        padding: 10,
        marginHorizontal: "10%",
        borderRadius: "50%",
        borderColor: "#5E714E",
        borderWidth: 1
      },
      containerStyle:{
        flex: 1
      },
      textStyle:{
        marginLeft: "8%",
        textShadowColor: "rgba(255,255,255,0.8)",
        textShadowOffset: {
            width: 0,
            height: 0,    
        },
        textShadowRadius: 10,
        fontSize: 17,
        fontWeight: "bold"
      },
      imageStyle:{
        flex: 1,
        paddingHorizontal: "10%",
        paddingVertical: "30%"
      },
      imageStyle2:{
        width: 200,
        height: 200,
        alignSelf: "center",
        position: 'absolute',
        marginTop: "15%"
      },
      rectangleStyle: {
        length: "25%",
        height: "28%"
      }
      ,
      signupStyle:{
        alignSelf: "center",
        color: "#8f8E8E"
      },
      forgotStyle:{
        alignSelf: "center",
        color: "#8f8E8E",
        textDecorationLine: "underline",
        textDecorationStyle: "solid"
      },
      iconStyle:{
        position: "absolute",
        top: "50%",
        position: "absolute", 
        marginTop: "10%", 
        flexDirection: "row",
        zIndex: 100,
        left:5
      }
});

export default ForgetPasswordScreen2;