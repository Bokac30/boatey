<template>
  <div>
    <div id='distributionMap' class='custom-map'>
      <!-- <img src='/static/images/map.jpg' alt='Distribution Info' class='w-100'> -->
    </div>
    <div>
      {{selectedNode}}
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
import EventBus from '../../event-bus'
import axios from 'axios'

export default {
  name: 'DistributionMap',
  data () {
    return {
      map: null,
      selectedNode: '',
      accToken: 'pk.eyJ1IjoidGVzdC10cC1iIiwiYSI6ImNqazJrMmhtcDB0Mzcza210ZmQ2cTdzaGEifQ.HucFeeBxc3o3AUx1nD9e4Q'
    }
  },
  methods: {
    getRoute () {
      var start = [13.0038, 55.605]
      var end = [13.083698, 55.610588]
      var directionsRequest = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] + '?geometries=geojson&access_token=' + mapboxgl.accessToken
      axios({ method: 'GET', 'url': directionsRequest }).then((response) => {
        var route = response.data.routes[0].geometry
        this.map.addLayer({
          id: 'route1',
          type: 'line',
          source: {
            type: 'geojson',
            data: {
              type: 'Feature',
              geometry: route
            }
          },
          paint: {
            'line-width': 2
          }
        })
      })
    },
    getRoute2 () {
      var start = [13.0038, 55.605]
      var end = [13.097102, 55.541131]
      var directionsRequest = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] + '?geometries=geojson&access_token=' + mapboxgl.accessToken
      axios({ method: 'GET', 'url': directionsRequest }).then((response) => {
        var route = response.data.routes[0].geometry
        this.map.addLayer({
          id: 'route2',
          type: 'line',
          source: {
            type: 'geojson',
            data: {
              type: 'Feature',
              geometry: route
            }
          },
          paint: {
            'line-width': 2
          }
        })
      })
    },
    getRoute3 () {
      var start = [13.0038, 55.605]
      var end = [13.259255, 55.597705]
      var directionsRequest = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] + '?geometries=geojson&access_token=' + mapboxgl.accessToken
      axios({ method: 'GET', 'url': directionsRequest }).then((response) => {
        var route = response.data.routes[0].geometry
        this.map.addLayer({
          id: 'route3',
          type: 'line',
          source: {
            type: 'geojson',
            data: {
              type: 'Feature',
              geometry: route
            }
          },
          paint: {
            'line-width': 2
          }
        })
      })
    }
  },
  created () {
    EventBus.$on('NODE_SELECTED', (selectedNodeName) => {
      this.selectedNode = selectedNodeName
      if (selectedNodeName === '') return

      if (selectedNodeName === 'Pallets') {
        this.getRoute()
      } else {
        this.getRoute3()
      }
    })
  },
  mounted () {
    mapboxgl.accessToken = this.accToken
    let map = new mapboxgl.Map({
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

    this.map = map
  }
}
</script>

<style>
.custom-map {
  width: 100%;
  height: 400px;
}
</style>
