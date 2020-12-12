<template>
  <div class="project">
    <v-container>
      <v-row justify="center">
        <v-expansion-panels popout>
          <v-expansion-panel v-for="item in myProjects" :key="item.title">
            <v-expansion-panel-header>{{
              item.title
            }}</v-expansion-panel-header>
            <v-expansion-panel-content class="grey--text">
              <div class="font-weight-bold">due by {{ item.due }}</div>
              <div>{{ item.content }}</div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
          content: "lfsjlfjljfs",
        },
        {
          title: "Code up the homepage",
          person: "zali",
          due: "14/5/1398",
          status: "complete",
          content: "lfsjlfjljfs",
        },
        {
          title: "Design video thumbnails",
          person: "hossein",
          due: "1/11/1395",
          status: "complete",
          content: "lfsjlfjljfs",
        },
        {
          title: "Create a community forum",
          person: "farshad",
          due: "9/2/1401",
          status: "overdue",
          content: "lfsjlfjljfs",
        },
      ],
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter((project) => {
        return project.person === "mehran";
      });
    },
  },
};
</script>
