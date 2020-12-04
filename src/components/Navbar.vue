<template>
    <nav>
    <v-toolbar dark app src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
     <v-app-bar-nav-icon class="grey--text" @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class=" text-uppercase">my todo app</v-toolbar-title>

      <v-spacer></v-spacer>
      <span right class="grey--text">SIGN OUT</span>
      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" temporary absolute class="indigo">
    <p>hello</p>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
    data(){
        return{
            drawer:false,
        }
    }
    
}
</script>