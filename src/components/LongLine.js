import React from "react";
import { View, StyleSheet } from "react-native";

const LongLine = () => {
    return (
        <View style = {styles.lineStyle}></View>
    )
};

const styles = StyleSheet.create({
    lineStyle: {
        length: "30%",
        borderColor: "#5E714E",
        borderWidth: "1",
        marginHorizontal: "5%"
    }
});

export default LongLine;