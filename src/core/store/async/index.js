import geo from 'mapbox-geocoding'

export const mapboxGeocode = address => new Promise((resolve, reject)=>{
  geo.setAccessToken(process.env.REACT_APP_MAPBOX);
  geo.geocode('mapbox.places', address, function (err, geoData) {
    resolve(geoData)
  });
})

export const mapboxGeocodeReverse = address => new Promise((resolve, reject)=>{
  geo.setAccessToken(process.env.REACT_APP_MAPBOX);
  geo.geocode('mapbox.places', 'Dam Square, Amsterdam', function (err, geoData) {
    resolve(geoData)
  });
})
