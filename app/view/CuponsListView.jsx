import { router } from "expo-router";
import {useEffect, useState} from "react";
import { useUser } from '../context/UserContext';
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import BollGereric from '../components/BollGeneric'
import Points from "../components/Points";
import CuponsCard from "../components/CuponsCard";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {getAllCupons, getAllCuponsByUsuario} from '../services/BeneficiosSevice';
import {dataMaisProxima} from '../services/Util';

export default function CreateRestaurant() {
  const { user } = useUser();
  const [cupons, setCupons] = useState(Array)
  const [cuponsUruario, setCuponsUruario] = useState(Array)

  useEffect(() => {
    const loadCupom = async () => {
      const response = await getAllCupons();
      console.log(response);
      setCupons(response);
    }

    const loadCupomUsuario = async () => {
      const response = await getAllCuponsByUsuario();
      console.log(response);
      setCuponsUruario(response);
    }

    loadCupom();
    loadCupomUsuario();
  }, []);
  return (

    <View style={{ backgroundColor: '#F3EFEA', flexDirection: "column", flex: 1 }}>
      <ScrollView>

      {/* Header */}
      <View style={styles.containerHeader}>
        <BollGereric style={styles.positionBoll} onPress={() => router.push('/')}>
          <MaterialCommunityIcons name="chevron-left" size={40} color="black" />
        </BollGereric>

        <View style={styles.ContainerPoints}>
          <Text style={styles.Points}>Meus Pontos</Text>
          <Points></Points>
        </View>

        <BollGereric
          style={styles.positionBoll}
          onPress={() => router.push('/view/QrScannerView')}
        >
          <Ionicons name="qr-code" size={32} color="black" />
        </BollGereric>


      </View>
      {/* Cupons do usuario  */}
      <View style={styles.ContainerMain}>
        <View style={{flexDirection:'row',justifyContent:'space-between' }}>
          <Text style={styles.textcupons}>Meus Cupons</Text>
          <Text style={styles.textcupons}>Histórico</Text>
        </View>
        {cuponsUruario.map((cupon) => (
            <CuponsCard key={cupon.nome} valor={cupon.codigo} desconto={cupon.cupom.desconto} dataLimite={dataMaisProxima(cupon.cupom.dataLimite, cupon.dataExpiracao)}></CuponsCard>
        ))}
      </View>

      {/* Cupons gerais  */}
      <View style={styles.ContainerMain}>
        <Text style={styles.textcupons}>Cupons Disponíveis</Text>
        {cupons.map((cupon) => (
            <CuponsCard key={cupon.nome} valor={cupon.valor} desconto={cupon.desconto} dataLimite={cupon.dataLimite}></CuponsCard>
        ))}
      </View>
      </ScrollView>
    </View>

  )

}
const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 'auto'

  },
  ContainerPoints: {
    marginTop: 80,
  },
  positionBoll: {
    marginTop: 60,
    marginBottom: 10,
    marginHorizontal: 20
  },

  Points: {
    color: '#939393',
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: 'center'
  },
  ContainerMain: {
    marginTop: 30,
    marginHorizontal: 15
  },
  textcupons: {
    color: '#595959',
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 16
  }
});