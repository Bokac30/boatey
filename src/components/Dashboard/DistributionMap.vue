<template>
  <div>
    <div id='distributionMap' class='custom-map'>
      <!-- <img src='/static/images/map.jpg' alt='Distribution Info' class='w-100'> -->
    </div>
    <div>
        <div class='bg-light p-1 mt-2'>
          <h6>DISTRIBUTION INFO</h6>
        </div>
        <ul>
          <li>A item Produced in <span class='badge badge-primary'>Factory</span></li>
          <li>Item Distribution</li>
          <li>Distribution <span class='badge badge-success'>Warehouse no#4</span></li>
          <li>Received by the retailer</li>
      </ul>
      </div>
  </div>
</template>

<script>
// import * as L from 'leaflet/src/leaflet'

import mapboxgl from 'mapbox-gl'

export default {
  name: 'DistributionMap',
  data () {
    return {
      accToken: 'pk.eyJ1IjoidGVzdC10cC1iIiwiYSI6ImNqazJrMmhtcDB0Mzcza210ZmQ2cTdzaGEifQ.HucFeeBxc3o3AUx1nD9e4Q'
    }
  },
  mounted () {
    // initialize the map on the 'map' div with a given center and zoom
    // L.map('distributionMap', { center: [51.505, -0.09], zoom: 13 })
    // var mymap = L.map('distributionMap').setView([51.505, -0.09], 10)

    // L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/10/51.505/100.png?access_token=${this.accToken}`, {
    //   attribution: 'Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>',
    //   maxZoom: 18,
    //   id: 'mapbox.streets',
    //   accessToken: this.accToken
    // }).addTo(mymap)

    mapboxgl.accessToken = this.accToken
    const map = new mapboxgl.Map({
      container: 'distributionMap',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [13.4805846, 55.6001911],
      zoom: 7
    })

    map.on('load', function () {
      map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': {
          'type': 'geojson',
          'data':
          {
            'type': 'FeatureCollection',
            'features': [{
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [12.8758903, 55.5700886]
              },
              'properties': {
                'title': 'Malmö',
                'icon': 'harbor'
              }
            },
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [13.7817877, 55.4347876]
              },
              'properties': {
                'title': 'Retail',
                'icon': 'monument'
              }
            }]
          }
        },
        'layout': {
          'icon-image': '{icon}-15',
          'text-field': '{title}',
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 0.6],
          'text-anchor': 'top'
        }
      })
    })
    console.log(map)
  }
}
</script>

<style>
.custom-map {
  width: 100%;
  height: 400px;
}
</style>
