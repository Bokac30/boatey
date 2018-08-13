<template>
  <div class="row">
    <div class="col-md">
      <canvas id="items_chart" width="200" height="100"></canvas>
    </div>
    <div class="col-md">
      <div id="world_map" class="custom-world-map"></div>
      <div>
        {{ip}}
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'
import mapboxgl from 'mapbox-gl'
import axios from 'axios'

export default {
  name: 'WorldMap',
  data () {
    return {
      ip: '',
      accToken: 'pk.eyJ1IjoidGVzdC10cC1iIiwiYSI6ImNqazJrMmhtcDB0Mzcza210ZmQ2cTdzaGEifQ.HucFeeBxc3o3AUx1nD9e4Q'
    }
  },
  mounted () {
    // Chart instance
    let ctx = document.getElementById('items_chart')
    var myChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: ['Returned Items', 'Expected Items', 'Not Found Items', 'Faulty Items'],
        datasets: [
          {
            label: '# of Items',
            data: [13, 50, 10, 7],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    })
    console.log(myChart)

    // Map instance
    mapboxgl.accessToken = this.accToken
    const map = new mapboxgl.Map({
      container: 'world_map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [13.4805846, 55.6001911],
      zoom: 1
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

    this.test()
  },

  methods: {
    test () {
      axios({ method: 'GET', 'url': 'https://httpbin.org/ip' }).then(result => {
        this.ip = result.data.origin
      }, error => {
        console.error(error)
        this.ip = error
      })
    }
  }
}
</script>

<style>
.custom-world-map {
  width: 100%;
  height: 300px;
}
</style>
