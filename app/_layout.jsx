import { UserProvider } from './context/UserContext';
import { Slot } from 'expo-router';
import {StyleSheet } from 'react-native';

export default function RootLayout() {
  return (
    <UserProvider>
    
        <Slot /> 
      
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3EFEA' },
});;