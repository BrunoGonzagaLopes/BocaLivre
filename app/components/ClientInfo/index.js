import React from 'react';
import { View, Text } from 'react-native';
import clients from '../../entities/clients.json'; 
import styles from './style';
import { useUser } from '../../context/UserContext';

export default function ClientCard() {
  const { user } = useUser(); 
  const client = clients[user]; 

  if (!client) return <Text>Cliente não encontrado</Text>;

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{client.nome}</Text>
      <Text style={styles.info}>{client.telefone}</Text>
      <Text style={styles.info}>{client.email}</Text>
    </View>
  );
};