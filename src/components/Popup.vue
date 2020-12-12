<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="indigo darken-4"
          class="mb-10"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Add New Project
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">New Project</span>
        </v-card-title>

        <v-card-text>
          <v-form class="px-3">
            <v-container>
              <v-row>
                <v-col cols="12" sm="4" md="4">
                  <v-text-field
                    label="Title*"
                    hint="write title project name"
                    prepend-icon="mdi-folder"
                    required
                    v-model="title"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="5">
                  <v-text-field
                    label="Legal Person name"
                    hint="you can write name and family"
                    prepend-icon="mdi-person"
                    v-model="person"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="3">
                  <v-select
                    :items="['overdue', 'complete', 'ongoing']"
                    label="status"
                    required
                    v-model="status"
                  ></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12">
                  <v-textarea
                    label="Legal information"
                    hint="description for project"
                    prepend-icon="mdi-edit"
                    v-model="content"
                  >
                  </v-textarea>
                </v-col>
              </v-row>
              <v-row>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Birthday date"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    ref="picker"
                    v-model="date"
                    :max="new Date().toISOString().substr(0, 10)"
                    min="1950-01-01"
                    @change="save"
                    locale="fa-ir"
                  ></v-date-picker>
                </v-menu>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="submit"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      date: null,
      menu: false,
      title: "",
      content: "",
      status: "",
      person: "",
    };
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },
  methods: {
    submit() {
      this.dialog = false;
    },
    save(date) {
      this.$refs.menu.save(date);
    },
  },
};
</script>
