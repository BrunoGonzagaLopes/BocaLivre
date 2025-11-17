import { View, Text, Image, TouchableOpacity, Pressable} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { UserProvider } from "../../context/UserContext";
import styles from './style'

const card = [
  { icon: require('../../assets/images/icons/coracao.png'), description: 'Favorito', view:"view/FavoriteRestaurantsListView/" },
  { icon: require('../../assets/images/icons/marcador.png'), description: 'Endereço', view:"/" },
  { icon: require('../../assets/images/icons/pontos.png'), description: 'Meus Pontos', view:"/" },
  { icon: require('../../assets/images/icons/notificacao.png'), description: 'Notificações', view:"/" },
];
export default function Category() {
    return(
      <UserProvider>
      <View style={styles.container}>
        {card.map((item)=>(
            // eslint-disable-next-line react/jsx-key
            <TouchableOpacity style={styles.ContainerCard} onPress={() => router.push(item.view)}>
                <LinearGradient
                   colors={["#FEFEFB", "#F3F3F3"]}
                   start={{ x: 0.5, y: 0 }}
                   end={{ x: 0.5, y: 1 }}
                   style={styles.cardInfo}
                >

                <Image style={styles.iconStyles} source={item.icon}/>
                <Text>{item.description}</Text>

                </LinearGradient>
           </TouchableOpacity>
        ))}
       
      </View>
      </UserProvider>
    )
};