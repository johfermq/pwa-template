<template>
  <v-app light>
    <Header/>
    <v-content>
      <vue-progress-bar/>
      <transition name="fade" mode="out-in">
        <router-view class="content"/>
      </transition>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import { EventBus } from './event_bus/event_bus'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'

  export default {
    components: { Footer, Header },

    computed: {
    },

    methods: {
    },

    mounted () {
    }
  }
</script>

<style lang="scss">
@import '../static/basik.css';

.content {
  background: #8e9eab;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #eef2f3, #8e9eab);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #eef2f3, #8e9eab); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

input {
  border: 0;
}

.menu-item {
  cursor: pointer;
}

.title {
  font-size: 30px !important;
  padding: 30px;
  text-align: center;
}

a {
  text-decoration: none;
}

.spinner-1 {
  display: block;
  margin: auto;
  margin-top: 15%;
}
</style>