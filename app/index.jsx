import React, { useEffect, useState } from "react"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router"
import { getCurrentAddress } from "./services/locationService";

import Boll from './components/BollGeneric';
import Carousel from './components/Carousel';
import FoodCategory from "./components/FoodCategory";
import RestaurantCard from './components/RestaurantCard';
import Search from './components/Search';
import Profile from './components/Profile';
import CuponsCard from './components/CuponsCard'



export default function Index() {

  // const [Address, setAddress] = useState(null);

  // useEffect(() => {
  //   const load = async () => {
  //     const data = await getCurrentAddress();
  //     setAddress(data);
  //   };
  //   load();
  // }, []);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#F3EFEA' }}>
      <View style={{ backgroundColor: '#F3EFEA', flexDirection: "column" }}>

        {/* Header */}
        <View style={styles.containerHeader}>
          <Boll style={styles.positionBoll} onPress={() => router.push('/view/CuponsListView')}>
            <Image source={require('./assets/images/icons/vale.png')} style={styles.iconBoll} />
          </Boll>

          <View style={styles.ContainerTextEndereco}>
            <Text style={styles.Textendereco}>Endereço</Text>

            {/* <Text style={styles.myLocalization}>
              <Image source={require('./assets/images/icons/marcador.png')} style={{ width: 8, height:8 }} />
              {Address ? `${Address.street} - ${Address.streetNumber}` : "Carregando..."}
            </Text> */}
          </View>

          <Profile
            style={styles.positionBoll}
            onPress={() => router.push('/view/UserProfileView')}
          />
        </View>

        <Search />
        <Carousel style={styles.Carouselmargin}/>
        <FoodCategory />
        <RestaurantCard />
      </View>
    </ScrollView>
  );
}





const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 'auto'

  },
  ContainerTextEndereco: {
    marginTop: 60,
  },
  positionBoll: {
    marginTop: 60,
    marginBottom: 10,
    marginHorizontal: 20
  },
  iconBoll: {
    width: '66%',
    height: '66%',
    margin: 'auto'
  }
  ,
  Textendereco: {
    color: '#939393',
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: 'center'
  },
  myLocalization: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 10,
    lineHeight: 14,
    letterSpacing: 0.5,
    textAlign: 'center'
  },

  imageBoll: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    borderColor: '#FAB418',
    borderWidth: 3
  },
  Carouselmargin:{
    marginTop:20
  }
});