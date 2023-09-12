import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, FlatList } from "react-native";
import Spacer from "../components/Spacer";
import MenuComponent from "../components/MenuComponent";
import { MaterialIcons } from '@expo/vector-icons';
import SearchBar from "../components/SearchBar";
import { Ionicons } from '@expo/vector-icons';

const VeganMenuScreen = ({ navigation }) => {
  const [clicked, setClicked] = useState(false);
  const [displayedLabels, setDisplayedLabels] = useState([]);

  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Tofu Bowl',
      imageUrl: require("../../assets/VeganMenu/Photo1.jpeg"),
      content: "Tofu, tomato, susami, cucumber, spinach, carrot, chickpee"
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad54abb28ba',
      title: 'Chickpea & Cabbage Bowl',
      imageUrl: require("../../assets/VeganMenu/Photo2.jpg"),
      content: "Chickpea, cucumber, soy, basmati rice, wasa, lettuce"
    },
    {
      id: 'bd7acbea-c1b1-36c2-aed5-3ad54abb28ba',
      title: 'Vegan Spaghetti',
      imageUrl: require("../../assets/VeganMenu/Photo3.jpg"),
      content: "Onion, garlic, and tomato paste, gluten-free pasta"
    },
  ]
  const labels = [
    "Meal type",
    "Meal Type",
    "Order",
    "Price Range",
    "Allergy Type",
    "Order in price"
  ]

  useEffect(() => {
    if (clicked) {
      // Display the labels in groups of 2
      const updatedLabels = [];
      for (let i = 0; i < labels.length; i += 2) {
        const label1 = labels[i];
        const label2 = labels[i + 1];
        updatedLabels.push([label1, label2]);
      }
      setDisplayedLabels(updatedLabels);
    } else {
      setDisplayedLabels([]);
    }
  }, [clicked]);

  return <View style={styles.backgroundContainer}>
    <ImageBackground source={require("../../assets/Background_Page5.png")} resizeMode='cover' style={styles.imageStyle}>
      <TouchableOpacity style={styles.iconStyle} onPress={()=>navigation.navigate("Profile")}>
        <MaterialIcons name="account-circle" size={35} color="#737373" />
      </TouchableOpacity>

      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <SearchBar />
        <TouchableOpacity onPress={() => { setClicked(!clicked) }}>
          <Ionicons name="ios-filter" size={24} color="black" style={{ marginRight: 30 }} />
        </TouchableOpacity>
      </View>

      {clicked &&
        <View style={styles.containerStyle}>
          {displayedLabels.map((labelsRow, index) => (
            <View key={index} style={styles.labelsRow}>
              {labelsRow.map((label, labelIndex) => (
                <View key={labelIndex} style={styles.labelContainer}>
                  <Text style={styles.labelText}>{label}</Text>
                  <TouchableOpacity style={styles.buttonStyle}>
                    <Text></Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ))}
          <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonStyle2}>
                  <Text style={styles.buttonText}>Apply Filters</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle3}>
                  <Text style={styles.buttonText}>Clear Filters</Text>
                </TouchableOpacity>
              </View>
        </View>
      }

      <ScrollView contentContainerStyle={styles.scrollView}>
        {data.map(item => (
          <View key={item.id}>
            <TouchableOpacity onPress = {()=>navigation.navigate("Details")}>           
               <MenuComponent title={item.title} imageUrl={item.imageUrl} content={item.content} />
            </TouchableOpacity>

            <Spacer />
          </View>
        ))}
      </ScrollView>


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
    flex: 1,
    height: "100%",
    flexDirection: "column"
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

export default VeganMenuScreen;