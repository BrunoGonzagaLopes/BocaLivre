import { CameraView, useCameraPermissions } from 'expo-camera';
import { router } from "expo-router";
import {adicionarPontos} from "../services/BeneficiosSevice";

export function useQrCodeService() {
  const [permission, requestPermission] = useCameraPermissions();

  async function handleBarCodeScanned({ data }, setScanned) {
    setScanned(true);
    alert(`QR Code lido: ${data}`);
    adicionarPontos(data)
    router.push('/view/assessView')
  }

  return {
    permission,
    requestPermission,
    handleBarCodeScanned,
  };
}