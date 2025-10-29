import React from "react";
import styles from "./style";
import { LinearGradient } from "expo-linear-gradient";

export default function GradientBottom() {
  return <LinearGradient colors={["rgba(217,217,217,0)", "#F3EFEA"]} style={styles.gradient} />;
};
