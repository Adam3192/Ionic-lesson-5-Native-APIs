import { Redirect, Route } from 'react-router-dom'
import {
  IonApp,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import Camera from './pages/Camera'
import Dialog from './pages/Dialog'
import Geo from './pages/Geo'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

setupIonicReact()

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu side="start" menuId="custom" contentId="main">
        <IonHeader>
          <IonToolbar color="tertiary">
            <IonTitle>App Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem routerLink="dialog">Dialog</IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem routerLink="geo">Geolocation</IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem routerLink="camera">Camera</IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id='main'>
        <Route exact path="/dialog">
          <Dialog />
        </Route>
        <Route exact path="/geo">
          <Geo />
        </Route>
        <Route exact path="/camera">
          <Camera />
        </Route>
        <Route exact path="/">
          <Redirect to="/dialog" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)

export default App
