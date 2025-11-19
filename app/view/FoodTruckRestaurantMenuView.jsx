import { Image, StyleSheet, Text, View, Pressable, ScrollView, TouchableOpacity,Linking } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

import { MaterialCommunityIcons } from "@expo/vector-icons";

// Componentes
import Boll from '../components/BollGeneric';
import Stars from "../components/Stars";
import FoodTruckCard from '../components/FoodTruckCard';


export default function FoodTruckView() {
  

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
            <Text onPress={() => router.back('/')}>
              <MaterialCommunityIcons name="chevron-left" size={40} color="black" /></Text>
          </Boll>
        </LinearGradient>

        <View style={{ alignItems: 'center', height: 80 }}>
          <Image style={styles.imageRestaurant} source={{ uri: 'https://app-restaurante-bucket.s3.sa-east-1.amazonaws.com/master_itaupower400440png.webp' }}></Image>
          <Text style={styles.Textdistance}>15 km</Text>
          <TouchableOpacity style={styles.pressable}>
            <Image source={require('../assets/images/icons/coracao.png')} style={styles.iconfavorite} />
          </TouchableOpacity>
          <View style={styles.infoRestaurant}>
            <View style={styles.nameandstars}>
              <Text style={styles.Textname}> Bar do sr zé <Stars avaliacao={"5"} style={styles.starandvalue}></Stars></Text>
            </View>
            <View style={styles.endereço}>
              <Text style={styles.Textendereço}>Rua nem criatividade agora, 0000. Belo Horizonte</Text>
            </View>
            <View style={styles.mapContainer}>
              <TouchableOpacity /*onPress={() => Linking.openURL(link)}*/ style={styles.map}>
                <Text style={styles.maptext}><Image source={require('../assets/images/icons/marcador.png')} style={{ width: 18, height: 18 }} />ABRIR NO MAPA</Text>
              </TouchableOpacity>
          </View>
            </View>
        </View>

        {/* MAIN */}
        <View style={styles.main}>
          <Text style={styles.textCardapio}>Cardápio</Text>
          <FoodTruckCard></FoodTruckCard>
        </View>

      </ScrollView>
    </View>

  );
};


const styles = StyleSheet.create({
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
    justifyContent:'center',
    width: '100%',
  },
  maptext: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 18,
    color: '#919191',
    textAlign: 'center'
  },
  map: {
    padding: 5 ,
    alignContent: 'center',
    width: '65%',
    marginTop: 20,
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