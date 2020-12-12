<template>
  <div class="team">
    <v-container>
      <v-row class="white pa-3 flat mb-1">
        <v-col cols="12" xs="12" sm="12" md="3" v-for="i in team" :key="i.name">
          <v-card max-width="400">
            <v-responsive class="pt-4">
              <v-row justify="center">
                <v-avatar size="100">
                  <img :src="i.avatar" />
                </v-avatar>
              </v-row>
            </v-responsive>
            <v-row justify="center">
              <v-card-subtitle class="pb-1">{{ i.name }}</v-card-subtitle>
            </v-row>
            <v-row justify="center">
              <v-card-subtitle class="pb-1">{{ i.role }}</v-card-subtitle>
            </v-row>
            <v-card-actions>
              <v-btn color="grey" text>
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
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
      team: [
        {
          name: "Mehran Kamrani",
          role: "backend Developer",
          avatar: "/1.jpg",
        },
        {
          name: "Mehran Mohammadi farokhad",
          role: "front Developer",
          avatar: "/2.jpg",
        },
        {
          name: "ali Mohammadi maava",
          role: "front and english languech",
          avatar: "/3.jpg",
        },
        {
          name: "farshad Hossein poor",
          role: "backend Developer",
          avatar: "/4.jpg",
        },
      ],
    };
  },
};
</script>
