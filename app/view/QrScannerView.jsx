import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CameraView } from 'expo-camera';
import  useQrCodeService from '../services/qrCodeService';
import { router } from 'expo-router';
export default function QrScannerView() {
  const [scanned, setScanned] = useState(false);
  const { permission, requestPermission, handleBarCodeScanned } = useQrCodeService();

  if (!permission) return <Text>Solicitando permissão...</Text>;

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text>Permissão negada</Text>
        <Text onPress={requestPermission}>Toque para permitir</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing="back"
        onBarcodeScanned={scanned ? undefined : (data) => handleBarCodeScanned(data, setScanned)}
      />

      <View style={styles.overlay}>
        <View style={styles.focusBox} />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/view/CuponsListView')}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  focusBox: {
    width: 250,
    height: 250,
    borderWidth: 4,
    borderColor: '#FCC419',
    borderRadius: 25,
  },
  button: {
    position: 'absolute',
    bottom: 80,
    alignSelf: 'center',
    backgroundColor: '#FCC419',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 30,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});