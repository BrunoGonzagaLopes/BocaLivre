import React, { useEffect, useState } from 'react';
import {Image, Text, View } from "react-native";
import styles from "./style";

const Stars = ({ avaliacao }) => {
  const [avaliacaoValue, setAvaliacaoValue] = useState("");

  useEffect(() => {
    setAvaliacaoValue(avaliacao);
  }, [])

  if(avaliacaoValue === "Novo"){
    return (
        <>
          <View style={styles.ContainerWithStars}>
            <Text style={styles.TextStar}>{avaliacaoValue}</Text>
          </View>
        </>
    );
  }
  return (
      <View style={styles.Container}>
        <Image source={require('../../assets/images/icons/Star.png')} style={styles.Star} />
        <Text style={styles.TextStar}>{avaliacaoValue}</Text>
      </View>
  );
};

export default Stars;