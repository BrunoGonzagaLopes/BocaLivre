import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style';
import { useRouter } from 'expo-router';
import {getAllHTTP, getById} from '../../services/RestaurantService';
import '../../components/Stars';
import Stars from "../Stars";

async function navToEstabelecimento(id){
  let restaurante = await getById(id);
  console.log(restaurante);
}

const RestaurantCard = ({ data = null, texto = "" }) => {
  const [restaurants, setRestaurants] = useState(data || []);
  const [loading, setLoading] = useState(!data);
  const router = useRouter();

  useEffect(() => {
    if (data) return;

    const loadRestaurants = async () => {
      setLoading(true);
      let dados = { distancia: 20000, nome: texto}
      const response = await getAllHTTP(dados);

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
          <TouchableOpacity style={styles.ContainerCard} onPress={() => navToEstabelecimento(item.id)}>
            <LinearGradient
              colors={["#FFFFFF", "#f3f3f3"]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              style={styles.RestaurantInfoCard}
            >
              <Image style={styles.RestaurantImageCard} source={{ uri: item.image }} />
              <View style={styles.ContainerTextInfoCard}>
                <Text style={styles.ValueInfo}>
                  <Stars avaliacao={item.rating}></Stars>
                </Text>
                <Text style={styles.Textname}>{item.name}</Text>
                <View style={styles.Distance}>
                  <Image source={require('../../assets/images/icons/marcador.png')} style={{ width: 15, height: 15 }} />
                  <Text style={styles.TextDistance}>{item.distance} Km</Text>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default RestaurantCard;