<template>
  <div class="dashboard grey lighten-4">
    <v-row justify="center">
      <h1 class="subheading blue--text align-center">dashboard</h1>
    </v-row>

    <v-container class="my-5">
      <v-row align="left" class="mb-5">
        <v-btn
          tile
          color="grey lighten-4"
          small
          elevation="5"
          @click="sortBy('title')"
        >
          <v-icon small left>mdi-folder</v-icon>
          <span class="caption">by project name </span>
        </v-btn>
        <v-btn
          tile
          color="grey lighten-4"
          small
          class="ml-3"
          elevation="5"
          @click="sortBy('person')"
        >
          <v-icon small left>mdi-person</v-icon>
          <span class="caption">by person</span>
        </v-btn>
      </v-row>
      <v-row
        v-for="project in projects"
        :key="project.title"
        class="white pa-3 flat mb-1"
      >
        <div flat :class="`project ${project.status}`"></div>
        <v-col cols="11" sm="11" md="6">
          <div class="caption font-weight-black grey--text">Project title</div>
          <div>{{ project.title }}</div>
        </v-col>
        <v-col cols="11" sm="11" md="2">
          <div class="caption font-weight-black grey--text">Project title</div>
          <div>{{ project.person }}</div>
        </v-col>
        <v-col cols="11" sm="11" md="2">
          <div class="caption font-weight-black grey--text">Due by</div>
          <div>{{ project.due }}</div>
        </v-col>
        <v-col cols="11" sm="11" md="1">
          <div>
            <v-chip small :class="`${project.status} white--text caption`">
              {{ project.status }}</v-chip
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "mehran",
          due: "12/9/1399",
          status: "ongoing",
        },
        {
          title: "Code up the homepage",
          person: "zali",
          due: "14/5/1398",
          status: "complete",
        },
        {
          title: "Design video thumbnails",
          person: "hossein",
          due: "1/11/1395",
          status: "complete",
        },
        {
          title: "Create a community forum",
          person: "farshad",
          due: "9/2/1401",
          status: "overdue",
        },
      ],
    };
  },
  methods: {
    sortBy(prob) {
      this.projects.sort((a, b) => (a[prob] < b[prob] ? -1 : 1));
    },
  },
};
</script>
<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete {
  background: #3cd1c2 !important;
}
.v-chip.ongoing {
  background: #ffaa2c !important;
}
.v-chip.overdue {
  background: #f83e70 !important;
}
</style>
