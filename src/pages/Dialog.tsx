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
import { useDialog } from '../hooks/useDialog'


const Dialog: React.FC = () => {
 const { showAlert, showConfirm, showPrompt } = useDialog();
 
  const alert = async () => {
    await showAlert('Alert!', 'This is an alert!')
  }

  const confirm = async () => {
    showConfirm('Wait!', 'Are you sure?').then((confirmed) => {
      console.log('Confirmed: ' + confirmed)
    })
  }

  const prompt = async () => {
    showPrompt('Hey!', "What's your favorite color?").then((color) => {
      console.log('Favorite Color: ' + color)
    })
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Dialog</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton color="danger" onClick={alert}>
          Alert
        </IonButton>
        <IonButton color="tertiary" onClick={confirm}>
          Confirm
        </IonButton>
        <IonButton color="secondary" onClick={prompt}>
          Prompt
        </IonButton>
      </IonContent>
    </IonPage>
  )
}

export default Dialog
