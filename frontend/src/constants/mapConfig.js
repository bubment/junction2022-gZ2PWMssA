import mapStyle from './wiseMapStyle'

export default function mapConfig() {
    return {
        zoom: 14,
        center: { lat: 47.4995792, lng: 19.0565597 },
        disableDefaultUI: true,
        styles: mapStyle(),
    }
}


