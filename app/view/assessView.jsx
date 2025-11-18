import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Star, X } from "phosphor-react-native"; 
import { useNavigation } from '@react-navigation/native'; 
import { router } from 'expo-router';
export default function RatingScreen() {
  const [rating, setRating] = useState(0);
  const navigation = useNavigation();

  const handleSubmit = () => {

    
  }

  const handleClose = () => {
    router.push('/')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
        <X size={30} color="#999" weight="bold" />
      </TouchableOpacity>

      <Text style={styles.title}>Avalie o Restaurante</Text>

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

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Enviar Avaliação</Text>
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
  closeButton: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 10,
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
  submitButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 25,
    position: 'absolute',
    bottom: 40,
  },
  submitText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});