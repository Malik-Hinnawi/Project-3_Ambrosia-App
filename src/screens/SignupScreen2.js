import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";
import Spacer from "../components/Spacer";
import { Button } from "@rneui/themed";
import FormInputI from "../components/FormInputI";
import FormInputII from "../components/FormInputII";
import FormInputIII from "../components/FormInputIII";

const SignupScreen2 = ({navigation}) =>{
    return <View style = {styles.backgroundContainer}> 
                <ImageBackground source={require("../../assets/plant123.png")} resizeMode = 'cover' style = {styles.imageStyle}> 
                <Image source = {require("../../assets/Logo.jpeg")} style = {styles.imageStyle2}/>
                
                <View style = {styles.rectangleStyle}></View>

                

                <FormInputI 
                  placeholder = "Insert your name" 
                  header="Name"
                  />
                
                <FormInputI I
                  placeholder = "Insert your age" 
                  header="Age"
                  numericMode={true}
                  />
                
                <FormInputIII I
                  placeholder = "Most Allergic Ingredient" 
                  header="Most Allergic Ingredient"
                />
          
                <Button
                  title="I'm Ready"
                  buttonStyle={{ backgroundColor: '#5E714E', alignSelf: "center", borderRadius: 10 }}
                  titleStyle={{
                    color: 'white',
                    marginHorizontal: 20,
                  }}
                  onPress={()=> {navigation.pop(2)}}
                />
           
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
      imageStyle:{
        flex: 1,
        paddingHorizontal: "10%",
        paddingVertical: "30%"
      },
      imageStyle2:{
        width: 120,
        height: 120,
        alignSelf: "center",
        position: 'absolute',
        marginTop: "15%"
      },
      rectangleStyle: {
        length: "25%",
        height: "15%"
      }
      ,
      backStyle:{
        color: "#8f8E8E"
      }
});

export default SignupScreen2;