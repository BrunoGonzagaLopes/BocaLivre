import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style';
import {getCardapio} from '../../services/RestaurantService';

const foodTruckCard = ({ data }) => {
  const [foodTruck, setfoodTruck] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadfoodTruck = async () => {
      const response = await getCardapio("076ca2c9-5e73-499f-99bb-99a50a0384e1");
      setfoodTruck([]);
      setLoading(false);
    };

    loadfoodTruck();
    alert(foodTruck);
  }, []);


  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

 
  return (
      <FlatList
          data={foodTruck}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ card }) => (
          <TouchableOpacity style={styles.ContainerCard}>
            <LinearGradient
              colors={["#FEFEFB", "#F3F3F3"]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              style={styles.InfoCard}
            >
              <Image style={styles.ImageCard} source={{ uri: card.image }} />
              <View style={styles.ContainerTextInfoCard}>
                <Text style={styles.ValueInfo}> R${card.preco}</Text>
                <Text style={styles.Textname}>{card.nome}</Text>
                <Text style={styles.DescriptionCard}>{card.descricao}</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          )}
      />
  );
};

export default foodTruckCard;