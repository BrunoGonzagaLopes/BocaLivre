import { Image, StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { UserProvider } from "../context/UserContext";
// Componentes
import Boll from '../components/BollGeneric';
import Profile from '../components/Profile';
import ClientInfo from '../components/ClientInfo';
import CardConfig from '../components/ProfileMenu';

export default function UserProfileView() {
  return (
    <View style={{ backgroundColor: '#F3EFEA', flex: 1 }}>
      
      {/* HEADER */}
      <LinearGradient
        colors={["#FAB418", "#FFB40C"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.yellowBox}
      >
        <Boll style={styles.componentBoll}>
          <Text style={styles.iconBoll} onPress={() => router.push('/')}> {'<'} </Text>
        </Boll>
      </LinearGradient>

      <View style={{ alignItems: 'center', height: 80 }}>
        <Profile style={styles.profileCircle} />
        <Pressable style={styles.editPressable} onPress={() => router.push('/')}>
          <Image source={require('../assets/images/icons/edit.png')} />
        </Pressable>
      </View>
    <UserProvider>
      {/* MAIN */}
      <ClientInfo />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <CardConfig />
      </ScrollView>
</UserProvider>
      {/* FOOTER */}
      <Pressable onPress={() => router.push('/')}>
        <Text style={styles.LogOut}>Encerrar sessão</Text>
      </Pressable>
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
  iconBoll: {
    fontWeight: 700,
    color: '#747474',
    fontSize: 20,
    includeFontPadding: false,
  },

  profileCircle: {
    width: 150,
    height: 150,
    position: "relative",
    bottom: '50%',
    margin: 'auto',
  },
  editPressable:{
  position:'absolute',
  top:10,
  right:20,
  },
LogOut:{
  textAlign:'center',
  color:'#F0150E',
  paddingBottom: 20,
  fontSize:19

}
})