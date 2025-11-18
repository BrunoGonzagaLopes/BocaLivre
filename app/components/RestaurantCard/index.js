import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style';
import { useRouter } from 'expo-router';
import {getAllHTTP} from '../../services/RestaurantService';

const RestaurantCard = ({ cpfDono = null, data = null, editable = false }) => {
  const [restaurants, setRestaurants] = useState(Array);
  const [loading, setLoading] = useState(!data);
  const router = useRouter();

  useEffect(() => {
    const loadRestaurants = async () => {
      setLoading(true);
      let dados = {distancia: 5000}
      const response = await getAllHTTP(dados);
      console.log(response);
      setRestaurants(response);

      setLoading(false);
    };

    loadRestaurants();
  }, [cpfDono, data]);

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
      {!data && <Text style={styles.textChamada}>Restaurantes para conhecer</Text>}

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
                {data && (<Text style={styles.Distance}>
                  <Image source={require('../../assets/images/icons/marcador.png')} style={{ width: 10, height: 10 }} /> {item.adress}
                </Text>)}
                {!data && (<Text style={styles.Distance}>
                  <Image source={require('../../assets/images/icons/marcador.png')} style={{ width: 10, height: 10 }} /> {item.distance}Km
                </Text>)}

                <Text style={styles.DescriptionCard}>{item.description}</Text>
              </View>

              {editable && (
                <TouchableOpacity
                  style={styles.EditIcon}
                  onPress={() => router.push({ pathname: '/view/EditMyRestaurantView', params: { id: item.id } })}
                >
                  <Image source={require('../../assets/images/icons/edit.png')} style={{ width: 20, height: 20 }} />
                </TouchableOpacity>
              )}
            </LinearGradient>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default RestaurantCard;