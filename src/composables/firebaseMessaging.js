import { getToken } from "firebase/messaging"; 
import { messaging } from "../firebase";

export function obtenerTokenFCM() {
  return getToken(messaging, { 
    vapidKey: 'BBaCgc9snIa4Ge2qMfubxh-EP-uwSOYPSM-Aqq91uZCoLH2LHJoNO3XRB5cGET2QC335dQdQpKBFMPC4Wql-kNI'
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log('¡Token FCM obtenido con éxito!', currentToken);
        return currentToken;
      } else {
        console.log('No se pudo generar el token, solicita permisos de notificación.');
        return null;
      }
    })
    .catch((err) => {
      console.error('Error al obtener el token FCM:', err);
      return null;
    });
}
