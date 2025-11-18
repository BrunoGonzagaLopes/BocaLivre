import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useUser } from '../context/UserContext';
import RestaurantService from '../services/RestaurantService';
import Boll from '../components/BollGeneric';

export default function CreateRestaurant() {
  const { user } = useUser(); 
  const router = useRouter();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [adress, setAdress] = useState('');
  const [image, setImage] = useState('');

  const handleCreate = async () => {
    if (!name || !description || !adress) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios.');
      return;
    }

    await RestaurantService.create({
      name,
      description,
      adress,
      cpfDono: user ?? '',
      image,
    });

    Alert.alert('Sucesso', 'Restaurante criado!');
    router.back(); 
  };

  return (
    <View style={styles.container}>
      <Boll style={styles.componentBoll}>
        <Text style={styles.iconBoll} onPress={() => router.back()}> {'<'} </Text>
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
      <TextInput style={styles.input} value={user ?? ''} editable={false} />

      <Text style={styles.label}>URL da Imagem</Text>
      <TextInput style={styles.input} value={image} onChangeText={setImage} />

      <Button title="Criar Restaurante" onPress={handleCreate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F3EFEA' },
  label: { fontWeight: 'bold', marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});