import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import RestaurantService from '../services/RestaurantService';
import Boll from '../components/BollGeneric';
import { UserProvider } from "../context/UserContext";

export default function EditRestaurant() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [restaurant, setRestaurant] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [adress, setAdress] = useState('');
  const [cpfDono, setCpfDono] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const loadRestaurant = async () => {
      const rest = await RestaurantService.getById(id);
      if (rest) {
        setRestaurant(rest);
        setName(rest.name);
        setDescription(rest.description);
        setAdress(rest.adress);
        setCpfDono(rest.cpfDono);
        setImage(rest.image);
      }
    };
    loadRestaurant();
  }, [id]);

  const handleSave = async () => {
    const success = await RestaurantService.update(id, {
      name,
      description,
      adress,
      cpfDono,
      image,
    });
    if (success) {
      Alert.alert('Sucesso', 'Restaurante atualizado!');
      router.back();
    } else {
      Alert.alert('Erro', 'Não foi possível atualizar.');
    }
  };

  const handleDelete = async () => {
    const success = await RestaurantService.delete(id);
    if (success) {
      Alert.alert('Excluído', 'Restaurante removido!');
      router.back();
    } else {
      Alert.alert('Erro', 'Não foi possível remover.');
    }
  };

  if (!restaurant) return <Text>Carregando...</Text>;

  return (
    <View style={styles.container}>
      <Boll style={styles.componentBoll}>
        <Text style={styles.iconBoll} onPress={() => router.push('./view/MyBusinesses')}> {'<'} </Text>
      </Boll>

      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Text style={styles.label}>Endereço</Text>
      <TextInput style={styles.input} value={adress} onChangeText={setAdress} />

      <Text style={styles.label}>CPF do Dono</Text>
      <TextInput style={styles.input} value={cpfDono} onChangeText={setCpfDono} />

      <Text style={styles.label}>URL da Imagem</Text>
      <TextInput style={styles.input} value={image} onChangeText={setImage} />

      <Button title="Salvar" onPress={handleSave} />
      <Button title="Excluir" color="red" onPress={handleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F3EFEA'
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});