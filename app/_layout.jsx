import { UserProvider } from './context/UserContext';
import { Slot } from 'expo-router';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function RootLayout() {
  return (
    <UserProvider>
    
        <Slot />  {/* Aqui o Router vai renderizar todas as telas */}
      
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3EFEA' },
});;