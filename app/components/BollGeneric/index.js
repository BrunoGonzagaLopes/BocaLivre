
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // se estiver usando expo
import styles from "./style";

export default function Bola({ style, children, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={["#FEFEFB", "#F3F3F3"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={[styles.bola, style]} >
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};