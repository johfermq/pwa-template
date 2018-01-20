<template>
  <div>
    <div v-if="isPageReady">
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <v-card class="card">
            <v-card-media src="/static/img/france.jpg" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ countryInfo.name }}</h3>
                <div>Capital : {{ countryInfo.capital }}</div>
                <div>Region : {{ countryInfo.region }}</div>
                <div>Population : {{ countryInfo.population }}</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange" href="https://www.france.com/">Visit!</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>      
    </div>
    <div v-else>
      <div class="spinner-1"></div>
    </div>
  </div>
</template>

<script>
import Api from '../../services/api'
import { EventBus } from '../../event_bus/event_bus'

const api = new Api()

export default {
  name: 'Countries',
  data () {
    return {
      isPageReady: false,
      countryInfo: {},
      countryChosen: 'france'
    }
  },

  mounted () {
    api.getCountryInfo(this.countryChosen).then(results => {
      this.countryInfo = results.data[0]
      this.isPageReady = true
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped style="scss">
.card {
  margin: 50px;
}
</style>
