import React from "react";
import { View, StyleSheet } from "react-native";

const Line = () => {
    return (
        <View style = {styles.lineStyle}></View>
    )
};

const styles = StyleSheet.create({
    lineStyle: {
        length: "30%",
        borderColor: "#5E714E",
        borderWidth: "1",
        marginHorizontal: "20%"
    }
});

export default Line;