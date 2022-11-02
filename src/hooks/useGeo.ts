import { Geolocation } from '@capacitor/geolocation';

const getCurrentPosition = () => {
 return Geolocation.getCurrentPosition();
};

export function useGeo() {
 return {
     getCurrentPosition
 }
}
