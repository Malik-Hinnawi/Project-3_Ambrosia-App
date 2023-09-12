import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import Spacer from "../components/Spacer";
import { Button } from "@rneui/themed";
import LongLine from "../components/LongLine";
import FormInputI from "../components/FormInputI";

const StartScreen = ({navigation}) =>{
    

    return  <View style = {styles.backgroundContainer}> 
            
              <Image source = {require("../../assets/Logo.jpeg")} style = {styles.imageStyle2}/>
              
              <View style = {styles.rectangleStyle}></View>
             
              <View style={{flexDirection: "column"}}>
                <Text style={{alignSelf:"center"}}>
                 <Text style={{color: "#FDBA74"}}>
                    Allergy-free meals 
                 </Text>
                {" "}
                are prepared by our most sensitive Chefs
                </Text>
            </View>
            
              <Spacer>
                <LongLine/>
              </Spacer>
            <Spacer />
            <Spacer />
              <Spacer>
              <Button
                title="Get Started"
                buttonStyle={{ backgroundColor: '#5E714E', alignSelf: "center",  borderRadius: 10 }}
                titleStyle={{
                  color: 'white',
                  marginHorizontal: 70
                }}
                onPress={()=> {navigation.navigate("Login")}}
              />
          </Spacer>

          <TouchableOpacity onPress={()=> navigation.navigate("About2")}>
            <View style = {{backgroundColor: "white", bottom:-10, width:450, height:150, alignSelf:"center"}}/> 
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
        paddingHorizontal: "10%",
        paddingVertical: "30%",
        backgroundColor: "#FFFFFF"
      },
      backdrop: {
        flex:1,
        flexDirection: 'column'
      },
      imageStyle:{
        flex: 1,
        paddingHorizontal: "10%",
        paddingVertical: "30%"
      },
      imageStyle2:{
        width: 250,
        height: 270,
        alignSelf: "center",
        position: 'absolute',
        marginTop: "20%"
      },
      rectangleStyle: {
        length: "25%",
        height: "50%%"
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
      }
});

export default StartScreen;