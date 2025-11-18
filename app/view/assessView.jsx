import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function RatingScreen() {
  const [rating, setRating] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avalie o Aplicativo</Text>

      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => setRating(star)}>
            <Star
              size={40}
              weight={rating >= star ? "fill" : "regular"}
              color={rating >= star ? "#FFD700" : "#999"}
              style={styles.star}
            />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={() => setRating(0)}>
        <Text style={styles.resetText}>Não avaliar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
  },
  starsContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },
  star: {
    marginHorizontal: 5,
  },
  resetButton: {
    backgroundColor: "#e5e5e5",
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 20,
  },
  resetText: {
    color: "#555",
    fontSize: 16,
  },
});
