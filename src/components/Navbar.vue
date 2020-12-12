<template>
  <nav>
    <v-toolbar
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon
        class="font-weight-bold"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-bold">my todo app</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <span right class="white--text font-weight-black">SIGN OUT</span>
      <v-btn icon>
        <v-icon class="font-weight-bold">mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      absolute
      class="light-blue darken-4"
    >
      <v-responsive class="pt-4">
        <v-row justify="center">
          <v-avatar size="100">
            <img src="/1.jpg" />
          </v-avatar>
          <p class="white--text">Mehran Kamrani</p>
        </v-row>
      </v-responsive>
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" color="white">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            router
            :to="item.rout"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      selectedItem: 0,
      items: [
        { text: "Dashboard", icon: "mdi-view-dashboard", rout: "/" },
        { text: "my project", icon: "mdi-folder", rout: "/project" },
        { text: "team", icon: "mdi-account-multiple", rout: "/team" },
      ],
    };
  },
};
</script>
