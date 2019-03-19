<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vue</span>
        <span class="font-weight-light">Notification</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/kugatsu765/vueNotification/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <div id="app">
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs12>Position
              <v-select
                v-model="position"
                :items="positions"
                label="Position"
                :disabled="buttonClicked"
              ></v-select>
            </v-flex>
            <v-flex xs12>Timer
              <v-slider v-model="timer" thumb-label="always"></v-slider>
            </v-flex>
            <v-flex xs12>infinteTimer
              <v-checkbox
                v-model="infiniteTimer"
                label="Allow you to display a notification whitout timer"
              ></v-checkbox>
            </v-flex>
            <v-flex xs12>showLeftIcn
              <v-checkbox v-model="showLeftIcn" label="Allow you to display hide the left icone"></v-checkbox>
            </v-flex>
            <v-flex xs12>
              <v-btn color="primary" @click="notif('new')">Primary</v-btn>
              <v-btn color="success" @click="notif('success')">success</v-btn>
              <v-btn color="error" @click="notif('error')">error</v-btn>
              <v-btn color="warning" @click="notif('warning')">warning</v-btn>
              <v-btn color="info" @click="notif('info')">info</v-btn>
              <v-btn @click="remove()">Remove All</v-btn>
            </v-flex>

            <v-flex xs12>
              <p>{{getConfig}}</p>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: function() {
    return {
      positions: [
        "topLeft",
        "topCenter",
        "topRight",
        "bottomLeft",
        "bottomCenter",
        "bottomRight"
      ],
      position: "topRight",
      timer: 5,
      infiniteTimer: false,
      showLeftIcn: true,
      count: 0,
      buttonClicked: false,
      config: {}
    };
  },
  computed: {
    getConfig: function() {
      return (this.config = {
        position: this.position,
        timer: this.timer,
        infiniteTimer: this.infiniteTimer,
        showLeftIcn: this.showLeftIcn
      });
    }
  },
  methods: {
    notif: function(type) {
      this.count++;

      let config = this.getConfig;
      this.buttonClicked = true;

      this.$notification[type](
        "Sample of notification throw with number " + this.count,
        {
          ...config
        }
      );
    },
    remove: function() {
      this.$notification.removeAll();
    }
  }
};
</script>
