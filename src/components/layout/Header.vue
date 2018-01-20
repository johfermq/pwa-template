<template>
  <div>
    <v-navigation-drawer
      fixed
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      app
    >

      <v-list>
        <router-link to="Home">        
          <v-list-tile class="menu-item">
            <v-list-tile-action>
              <v-icon light>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>

      <v-list>
        <router-link to="Country">
          <v-list-tile class="menu-item">
            <v-list-tile-action>
              <v-icon light>flag</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Country info</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>

    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" light></v-toolbar-side-icon>

      <v-spacer></v-spacer>

    </v-toolbar>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        miniVariant: false,
        right: true,
        rightDrawer: false
      }
    }
  }

</script>