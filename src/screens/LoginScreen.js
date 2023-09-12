import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";
import Spacer from "../components/Spacer";
import { Button } from "@rneui/themed";
import Line from "../components/Line";
import FormInputI from "../components/FormInputI";

const LoginScreen = ({navigation}) =>{
    return <View style = {styles.backgroundContainer}> 
              
              <Image source = {require("../../assets/Logo.jpeg")} style = {styles.imageStyle2}/>

              <View style = {styles.rectangleStyle}></View>

              <FormInputI 
                placeholder = "finally lunch" 
                header="Email"
                />

              <FormInputI 
                placeholder = "party time **" 
                header="Password"
                protectedMode = {true}
                />

              <Spacer>
                <TouchableOpacity onPress={()=> {navigation.navigate("Signup")}}>
                  <Text style = {styles.signupStyle}>Don't Have an account? Sign up</Text>
                </TouchableOpacity>
              </Spacer>

              <Spacer>
                <Line/>
              </Spacer>

              <Spacer>
                <TouchableOpacity onPress={()=> {navigation.navigate("ForgetPassword1")}}>
                  <Text style = {styles.forgotStyle}>Forgot password?</Text>
                </TouchableOpacity>
              </Spacer>

              <Spacer>
              <Button
                title="I'm Hungry!"
                buttonStyle={{ backgroundColor: '#5E714E', alignSelf: "center",  borderRadius: 10 }}
                titleStyle={{
                  color: 'white',
                  marginHorizontal: 70
                }}
                onPress={()=> {navigation.navigate("Landing")}}
              />
          </Spacer>
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
        width: 150,
        height: 150,
        alignSelf: "center",
        position: 'absolute',
        marginTop: "20%"
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
      }
});

export default LoginScreen;