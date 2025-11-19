import { Image, StyleSheet, Text, View, Pressable, ScrollView, TouchableOpacity,Linking } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {router, useLocalSearchParams} from "expo-router";

import { MaterialCommunityIcons } from "@expo/vector-icons";

// Componentes
import Boll from '../components/BollGeneric';
import Stars from "../components/Stars";
import FoodTruckCard from '../components/FoodTruckCard';
import {useEffect, useState} from "react";
import RestaurantEntity from "../entities/restaurants";
import {getById, getFavoritos, favoritar, deleteFavorito} from "../services/RestaurantService";

export default function FoodTruckView() {
  const {restauranteId, distance}  = useLocalSearchParams()
  const [restaurant, setRestaurant] = useState(new RestaurantEntity("1", "aguardando", 5, {cep: {logradouro: true, localidade: true}}));
  const [isFavorito, setIsFavotito] = useState(false);
  const [arquivo, setArquivo] = useState("");
  const [cont, setCont] = useState(0);

  useEffect(() => {
    console.log(distance);
    const loadRestaurante = async () => {
      let res = await getById(restauranteId)
      console.log(res)
      setRestaurant(res);
    }
    loadRestaurante()
    setCont(1)
  }, [])

  useEffect(() => {
    const loadFavorito = async () => {
      let res = await getFavoritos();
      for (let estabelecimentos of res) {
        if (estabelecimentos.id === restaurant.id){
          setIsFavotito(true);
          setArquivo(require('../assets/images/icons/coracao.png'))
          return;
        }
      }
      setIsFavotito(false);
      setArquivo(require("../assets/images/icons/icons8-coração-96.png"));
    }
    loadFavorito()
  }, [cont])

  const favoritarTela = (id) => {
    if (isFavorito) {
      deleteFavorito(id)
      setIsFavotito(false);
      setArquivo(require("../assets/images/icons/icons8-coração-96.png"));

    } else {
      favoritar(id)
      setIsFavotito(true);
      setArquivo(require('../assets/images/icons/coracao.png'))
    }
  }

  return (

    <View style={{ backgroundColor: '#F3EFEA', flex: 1 }}>
      <ScrollView>
        {/* HEADER */}
        <LinearGradient
          colors={["#FAB418", "#FFB40C"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.yellowBox}
        >
          <Boll style={styles.componentBoll}>
            <Text onPress={() => router.push('/')}>
              <MaterialCommunityIcons name="chevron-left" size={40} color="black" /></Text>
          </Boll>
        </LinearGradient>


        <View style={{ alignItems: 'center', height: 80 }}>
          <Image style={styles.imageRestaurant} source={{ uri: restaurant.image}}></Image>
          <Text style={styles.Textdistance}>{distance} km</Text>
          <TouchableOpacity style={styles.pressable} onPress={() => {favoritarTela(restaurant.id, isFavorito)}}>
            <Image source={arquivo} style={styles.iconfavorite} />
          </TouchableOpacity>
          <View style={styles.infoRestaurant}>
            <View style={styles.nameandstars}>
              <Text style={styles.Textname}> {restaurant.name} <Stars avaliacao={"5"} style={styles.starandvalue}></Stars></Text>
            </View>
            <View style={styles.endereço}>
              <Text style={styles.Textendereço}>{restaurant.adress.cep.logradouro}, {restaurant.adress.numero}. {restaurant.adress.cep.localidade}</Text>
            </View>
            <View style={styles.mapContainer}>
              <TouchableOpacity onPress={() => Linking.openURL(restaurant.urlMap)} style={styles.map}>
                <Image source={require('../assets/images/icons/marcador.png')} style={{ width: 18, height: 18, marginHorizontal: 5 }} /><Text style={styles.maptext}>ABRIR NO MAPA</Text>
              </TouchableOpacity>
          </View>
            </View>
        </View>

        {/* MAIN */}
        <View style={styles.main}>
          <Text style={styles.textCardapio}>Cardápio</Text>
          <FoodTruckCard data={restaurant.id}></FoodTruckCard>
        </View>

      </ScrollView>
    </View>

  );
};


const styles = StyleSheet.create({
  iconfavorite: {
    width: 25,
    height: 25
  },
  yellowBox: {
    height: 162,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 12,
  },
  componentBoll: {
    marginTop: 50,
    marginLeft: 25,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageRestaurant: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
    width: 150,
    height: 150,
    position: "relative",
    bottom: '100%',
    margin: 'auto',
    borderRadius: 20
  },
  infoRestaurant: {
    position: 'relative',
    bottom: 60,
    alignItems:'center'
  },
  pressable: {
    backgroundColor:'#ffffff',
    padding:3,
    borderRadius:10,
    position: 'absolute',
    top: 10,
    right: 20,
  },
  Textdistance: {
    position: 'absolute',
    top: 10,
    left: 20,
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 20,
    color: "#939393"
  },
  nameandstars: {
    flexDirection: 'row'
  },
  Textname: {
    textAlign: 'center',
    width: '100%',
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 32,
  },
  Textendereço: {
    color: '#919191',
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 14,
    width: '100%',
    textAlign:'center'
  },
  mapContainer: {
    width: '100%'
  },
  maptext: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 18,
    color: '#919191'
  },
  map: {
    flexDirection: 'row',
    marginTop: 20,
    paddingVertical:10,
    paddingHorizontal:10,
    backgroundColor: '#ffffff',
    borderRadius: 15
  },
  main: {
  
    position: 'relative',
    top: 150
  },
  textCardapio:{
    marginLeft:20,
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 20,
    color: '#363636',
  }
})