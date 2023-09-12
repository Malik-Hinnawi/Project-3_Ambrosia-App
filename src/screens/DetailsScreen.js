import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, FlatList } from "react-native";
import Spacer from "../components/Spacer";
import MenuComponent from "../components/MenuComponent";
import { MaterialIcons } from '@expo/vector-icons';
import SearchBar from "../components/SearchBar";
import { Ionicons } from '@expo/vector-icons';
import { Button } from "@rneui/base";

const DetailsScreen = ({ navigation }) => {
  

  

  return <View style={styles.backgroundContainer}>
    <ImageBackground source={require("../../assets/TofuDetails.png")} resizeMode='cover' style={styles.imageStyle}>
          

    </ImageBackground>
    <Button
                title="Add to Cart"
                buttonStyle={{ backgroundColor: '#5E714E', alignSelf: "center",  borderRadius: 10 }}
                titleStyle={{
                  color: 'white',
                  marginHorizontal: 15,
                  fontSize: 15
                }}
                style={{marginBottom: 20, alignSelf:"flex-end", marginRight: 10}}
    />
  </View>

};

const styles = StyleSheet.create({
  backgroundContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    height: "100%",
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  imageStyle: {
    flex: 1,
    paddingTop: "30%"
  },
  backStyle: {
    color: "#8f8E8E"
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 20
  },
  iconStyle: {
    position: "absolute",
    right: -70,
    top: 30,
    padding: 0,
    width: 120,
    height: 120
  },
  containerStyle: {
    width: "100%",
    height: "40%",
    backgroundColor: "#ececec",
    marginTop: 20,
  },
  labelsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  labelText: {
    fontSize: 16,
    fontWeight: "bold",
    width: "50%"
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  },
  buttonStyle: {
    marginLeft: 10,
    backgroundColor: "lightgray",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: '40%'
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonStyle2: {
    backgroundColor: "#7daa7b",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 120,
    marginHorizontal: 10,
  },
  buttonStyle3: {
    backgroundColor: "#ff914d",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 120,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 14,
    color: "white",
  },
  

});

export default DetailsScreen;