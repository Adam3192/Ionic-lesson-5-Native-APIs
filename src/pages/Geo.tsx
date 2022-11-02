import { Position } from '@capacitor/geolocation'
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { useState } from 'react'
import { useGeo } from '../hooks/useGeo'

const Geo: React.FC = () => {
  const { getCurrentPosition } = useGeo()
  const [position, setPosition] = useState<Position>()

  const getGPS = () => {
    getCurrentPosition().then((pos: Position) => {
      setPosition(pos)
    })
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Geolocation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {position ? (
          <>
            <p>
              <strong>Timestamp:</strong> {position.timestamp}
            </p>
            <p>
              <strong>Latitude:</strong> {position.coords.latitude}
            </p>
            <p>
              <strong>Longitude:</strong> {position.coords.longitude}
            </p>
          </>
        ) : (
          <></>
        )}
        <IonButton color="warning" onClick={getGPS}>
          Get GPS Data!
        </IonButton>
      </IonContent>
    </IonPage>
  )
}

export default Geo
