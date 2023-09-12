import React from "react";
import { StyleSheet, TextInput, Text } from "react-native";
import Spacer from "./Spacer";

const FormInputI = ({placeholder, header, protectedMode, numericMode}) => {
    return <>
         <Spacer>
             <Text style = {styles.textStyle}>{header}</Text>
        </Spacer>
        {numericMode? 
        <TextInput placeholder={placeholder}
            style = {styles.inputStyle}
            keyboardType="numeric"
            returnKeyType="done"
        />:
        <TextInput placeholder={placeholder}
            style = {styles.inputStyle}
            secureTextEntry = {protectedMode? true: false}
            autoCapitalize="none"
            autoComplete="off"
        />
        }
        
    </>
};

const styles = StyleSheet.create({
    inputStyle:{
        height: "10%",
        width: "80%",
        backgroundColor: "#e6e6e6",
        padding: 10,
        marginHorizontal: "10%",
        borderRadius: 50,
        borderColor: "#5E714E",
        borderWidth: 1
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
        color: "#8f8E8E"
      }
});

export default FormInputI;