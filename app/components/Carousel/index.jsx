import React, { useState, useRef } from "react";
import { View, FlatList, Image, Dimensions } from "react-native";
import styles from "./style";

const images = [
  require('../../assets/images/icons/01.png'),
  require('../../assets/images/icons/02.png'),
  require('../../assets/images/icons/03.png'),
  require('../../assets/images/icons/04.png'),
];

const { width: screenWidth } = Dimensions.get("window");
const ITEM_WIDTH = screenWidth * 0.9;
const SIDE_PADDING = (screenWidth - ITEM_WIDTH) / 2;
const ITEM_MARGIN = 10;

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const flatListRef = useRef();

  const handleScroll = (event) => {
    const slideIndex = Math.round(
      event.nativeEvent.contentOffset.x / (ITEM_WIDTH + ITEM_MARGIN)
    );
    setIndex(slideIndex);
  };

  return (
    <View style={{marginTop:20}}>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingHorizontal: SIDE_PADDING }}
        snapToInterval={ITEM_WIDTH + ITEM_MARGIN}
        decelerationRate="fast"
        renderItem={({ item }) => (
          <View style={{ width: ITEM_WIDTH, marginHorizontal: ITEM_MARGIN / 1}}>
            <Image source={item} style={styles.image} />
          </View>
        )}
      />

      <View style={styles.dotsContainer}>
        {images.map((_, i) => (
          <View
            key={i}
            style={[styles.dot, i === index && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};