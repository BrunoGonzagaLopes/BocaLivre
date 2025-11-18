import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style';
import { useRouter } from 'expo-router';
import {getAllHTTP} from '../../services/RestaurantService';
import {dataMaisProxima} from '../../services/Util';
import AsyncStorage from "@react-native-async-storage/async-storage";

const RestaurantCard = ({ data = null }) => {
  const [restaurants, setRestaurants] = useState(data || []);
  const [loading, setLoading] = useState(!data);
  const router = useRouter();

  useEffect(() => {
    if (data) return;

    const loadRestaurants = async () => {
      setLoading(true);
      let dados = { distancia: 10000 }
      const response = await getAllHTTP(dados);
      console.log(AsyncStorage.getItem("token"));
      setRestaurants(response);
      setLoading(false);
    };

    loadRestaurants();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (!restaurants.length) {
    return <Text style={{ textAlign: 'center', marginTop: 50 }}>Nenhum restaurante encontrado.</Text>;
  }

  return (
    < >
      <FlatList
        data={restaurants}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.ContainerCard}>
            <LinearGradient
              colors={["#FEFEFB", "#F3F3F3"]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              style={styles.RestaurantInfoCard}
            >
              <Image style={styles.RestaurantImageCard} source={{ uri: item.image }} />
              <View style={styles.ContainerTextInfoCard}>
                <Text style={styles.ValueInfo}>
                  <Image source={require('../../assets/images/icons/Star.png')} style={{ width: 12, height: 12 }} /> {item.rating ?? 0}
                </Text>
                <Text style={styles.Textname}>{item.name}</Text>
                <Text style={styles.Distance}>
                  <Image source={require('../../assets/images/icons/marcador.png')} style={{ width: 10, height: 10 }} /> {item.distance}Km
                </Text>

                <Text style={styles.DescriptionCard}>{item.description}</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default RestaurantCard;