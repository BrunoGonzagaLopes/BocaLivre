import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  gradient: {
    position: "absolute",
    bottom: 0,
    width: screenWidth, 
    height: 81,
    opacity: 1,
    transform: [{ rotate: "0deg" }],
  },
});