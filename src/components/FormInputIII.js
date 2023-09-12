import React, {useEffect, useState} from "react";
import { TextInput, StyleSheet,  Text,View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import Spacer from "./Spacer";
import { Picker } from "@react-native-picker/picker";
import { TouchableOpacity } from "react-native-gesture-handler";





const FormInputIII = ({placeholder, header}) => {
    const [selectedValue, setSelectedValue] = useState("java");
    const [clicked, setClick] = useState(false)
    useEffect(()=>{

    },[clicked])

    return <>
        
         <Spacer>
             <Text style = {styles.textStyle}>{header}</Text>
        </Spacer>
        <TouchableOpacity style = {styles.inputStyle}onPress={()=>setClick(!clicked)}>
          <View >
            <Text></Text>
            <AntDesign name="down" size={30} color="black" style = {styles.iconStyle}/>
          </View>
          {clicked?<Picker
          selectedValue={selectedValue}
          style={styles.pickerStyle}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
        <Picker.Item label="Peanuts" value="java" />
        <Picker.Item label="Fish" value="js" />
        <Picker.Item label="Milk" value="js" />
      </Picker>:null}
          </TouchableOpacity>
          
        
       
        
      <Spacer>

      </Spacer>
      
        
        
      
        
    </>
};



const styles = StyleSheet.create({
    inputStyle:{
      height: "30%",
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
      },
      containerStyle: {
        flex: 1,
      },
      spacerStyle: {
        marginBottom: 15,
      },
      safeContainerStyle: {
        flex: 1,
        margin: 20,
        justifyContent: "center",
      },
      pickerStyle:{
        top:0,
        height: "1%",
        backgroundColor: "#e6e6e6",
        marginHorizontal: "10%",
      },
      iconStyle: {
        position: "absolute",
        right: 0
      }
});


export default FormInputIII;