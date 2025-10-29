// app/components/ProfileBola.jsx
import React from "react";
import { Image } from "react-native";
import Boll from "../BollGeneric";
import styles from "./style";

export default function ProfileBola({ uri, style, imageStyle, onPress }) {
  return (
    <Boll style={style} onPress={onPress}>
      <Image
        source={{ uri: 'https://i.pinimg.com/originals/36/84/29/368429cd6b25322a48c0f25aec4e8295.jpg' }}
        style={[styles.imageBoll, imageStyle]}
        resizeMode="cover"
      />
    </Boll>
  );
};