import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import RestaurantCard from '../components/RestaurantCard';
import { useUser } from '../context/UserContext';
import RestaurantService from '../services/RestaurantService';
import Boll from '../components/BollGeneric';


export default function MyBusinesses() {
  const { user } = useUser();


  const [restaurantsList, setRestaurantsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadRestaurants = async () => {
      try {
        const response = await RestaurantService.getByCpf(user); 
        setRestaurantsList(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadRestaurants();
  }, [user]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Boll style={styles.componentBoll}>
        <Text style={styles.iconBoll} onPress={() => router.push('/view/UserProfileView')}>
          {'<'}
        </Text>
      </Boll>

      <Text style={styles.title}>Meus Favoritos</Text>
      <RestaurantCard data={restaurantsList} editable={true} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3EFEA',
    flex: 1
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  componentBoll: {
    marginTop: 50,
    marginLeft: 25,
    height: 50,
    width: 50, justifyContent: 'center',
    alignItems: 'center'
  },
  iconBoll: {
    fontWeight: '700',
    color: '#747474',
    fontSize: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 25,
    marginBottom: 15
  },
});