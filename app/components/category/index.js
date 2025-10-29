import { View, Text, Image} from "react-native";
import Boll from '../BollGeneric'
import styles from './style'
const categorias = [
  { id: 1, image: require('../../assets/images/icons/almoco.png'), description: 'Almoço' },
  { id: 2, image: require('../../assets/images/icons/bolo.png'), description: 'Bolos' },
  { id: 3, image: require('../../assets/images/icons/cafe.png'), description: 'Café' },
  { id: 4, image: require('../../assets/images/icons/sorvete.png'), description: 'Sorvete' },
  { id: 5, image: require('../../assets/images/icons/hamburguer.png'), description: 'Lanches' },
];
export default function Category() {
  return (
    <View style={styles.containerCategory}>
      {categorias.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
         <Boll style={styles.categoryBoll}><Image source={item.image} style={styles.iconBoll}/></Boll>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      ))}
    </View>
  );
};