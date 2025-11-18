import { View, Text, Image} from "react-native";
import Boll from '../BollGeneric'
import styles from './style'
import {getAll} from "../../services/CategoriaSevice";
import {useEffect, useState} from "react";
import { ScrollView } from "react-native";
export default function FoodCategory() {
  let [categories, setCategories] = useState(Array);

  useEffect(() => {
    async function fetchCategories() {
      let cat = await getAll();
      setCategories(cat);
    }
    fetchCategories();
  }, []);

  return (
    <ScrollView 
  horizontal 
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={{ paddingHorizontal: 10 }}
>
    <View style={styles.containerCategory}>
      {categories.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
         <Boll style={styles.categoryBoll}><Image source={{ uri: item.image }} style={styles.iconBoll}/></Boll>
          <Text style={styles.description}>{item.name}</Text>
        </View>
      ))}
    </View></ScrollView>
  );
};