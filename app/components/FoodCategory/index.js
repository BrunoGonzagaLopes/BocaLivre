import { View, Text, Image} from "react-native";
import Boll from '../BollGeneric'
import styles from './style'
import {getAll} from "../../services/CategoriaSevice";
import {useEffect, useState} from "react";

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
    <View style={styles.containerCategory}>
      {categories.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
         <Boll style={styles.categoryBoll}><Image source={item.image} style={styles.iconBoll}/></Boll>
          <Text style={styles.description}>{item.name}</Text>
        </View>
      ))}
    </View>
  );
};