<template>
  <div class="dashboard grey lighten-4">
    <v-row justify="center">
      <h1 class="subheading blue--text align-center">dashboard</h1>
    </v-row>
    <v-container class="my-5">
      <v-row
        v-for="project in projects"
        :key="project.title"
        class="white pa-3 flat"
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
          person: "ali",
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
