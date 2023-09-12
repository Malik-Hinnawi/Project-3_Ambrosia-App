import React from "react";
import { View, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import Spacer from "../components/Spacer";
import RectangleComponent from "../components/RectangleComponent";
import { MaterialIcons } from '@expo/vector-icons'; 


const LandingScreen = ({navigation}) =>{
    return <View style = {styles.backgroundContainer}> 
               <ImageBackground source={require("../../assets/Background_Page4.png")} resizeMode = 'cover' style = {styles.imageStyle}>
                
                <TouchableOpacity style = {styles.iconStyle} onPress={()=>navigation.navigate("Profile")}>
                  <MaterialIcons name="account-circle" size={35} color="#737373" />
                </TouchableOpacity>
               
               
                <View style = {styles.lineStyle}/>
                <View style = {styles.rectangleStyle}></View>
                
                <View style={{flexDirection: "row", flexWrap: "wrap", width: "100%"}}>
                    <RectangleComponent caption="Personalized" navigationDestination={()=>{}}/>
                    <Spacer></Spacer>
                    <RectangleComponent caption="Normal" navigationDestination={()=>{}}/>
                </View>
                <Spacer></Spacer>
                <View style={{flexDirection: "row"}}>
                  <RectangleComponent caption="Vegan" navigationDestination={()=> {navigation.navigate("VeganMenu")}}/>
                  <Spacer></Spacer>
                  <RectangleComponent caption="Vegetarian" navigationDestination={()=>{}}/>
                </View>
                <Spacer></Spacer>
                <View style={{flexDirection: "row"}}>
                  <RectangleComponent caption="Gluten-Free" navigationDestination={()=>{}}/>
                  <Spacer></Spacer>
                  <RectangleComponent caption="Family" navigationDestination={()=>{}}/>
                </View>
                

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
        paddingVertical: "30%",
      },
      imageStyle2:{
        width: 100,
        height: 100,
        alignSelf: "center",
        position: 'absolute',
        marginTop: "10%"
      },
      rectangleStyle: {
        length: "25%",
        height: "20%"
      },
      iconStyle:{
        position: "absolute",
        right:-70,
        top: 30,
        padding: 0,
        width: 120,
        height: 120
      },
      lineStyle: {
        length: "50%",
        width: "50%",
        borderColor: "#5E714E",
        borderWidth: "1",
        marginHorizontal: "20%",
        position: "absolute",
        top: 150,
        alignSelf: "center"
    }
});

export default LandingScreen;