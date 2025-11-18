import { CameraView, useCameraPermissions } from 'expo-camera';
import { router } from "expo-router";

export default function useQrCodeService() {
  const [permission, requestPermission] = useCameraPermissions();

  async function handleBarCodeScanned({ data }, setScanned) {
    setScanned(true);
    router.push('/view/assessView')
    alert(`QR Code lido: ${data}`);
    
  }

  return {
    permission,
    requestPermission,
    handleBarCodeScanned,
  };
}