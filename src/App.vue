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
            <v-flex xs12>
              <v-text-field v-model="title" :counter="80" label="Title" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="message" :counter="160" label="Message" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              Position
              <v-select
                v-model="position"
                :items="positions"
                label="Position"
                :disabled="buttonClicked"
              ></v-select>
            </v-flex>
            <v-flex xs6>
              Timer
              <v-slider v-model="timer" thumb-label="always"></v-slider>
            </v-flex>
            <v-flex xs6>
              infinteTimer
              <v-checkbox
                v-model="infiniteTimer"
                label="Allow you to display a notification whitout timer"
              ></v-checkbox>
            </v-flex>
            <v-flex xs6>
              showLeftIcn
              <v-checkbox v-model="showLeftIcn" label="Allow you to display hide the left icone"></v-checkbox>
            </v-flex>
            <v-flex xs6>
              showCloseIcn
              <v-checkbox v-model="showCloseIcn" label="Allow you to display hide the close button"></v-checkbox>
            </v-flex>
            <v-flex xs6>
              messageIsHTML
              <v-checkbox v-model="isHtml" label="Allow you to write message with html"></v-checkbox>
            </v-flex>

            <v-flex xs12>
              <v-btn color @click="notif('new')">Primary</v-btn>
              <v-btn color="black" style="color: white" @click="notif('dark')">dark</v-btn>
              <v-btn color="success" @click="notif('success')">success</v-btn>
              <v-btn color="error" @click="notif('error')">error</v-btn>
              <v-btn color="warning" @click="notif('warning')">warning</v-btn>
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
      showCloseIcn: true,
      isHtml: false,
      count: 0,
      buttonClicked: false,
      title: "Vue Notification",
      message:
        "Lorsque l’expérience de l’utilisateur est supérieure à l’attente de l’utilisateur, la confiance est établie.",
      config: {}
    };
  },
  computed: {
    getConfig: function() {
      return (this.config = {
        position: this.position,
        timer: this.timer,
        infiniteTimer: this.infiniteTimer,
        showLeftIcn: this.showLeftIcn,
        showCloseIcn: this.showCloseIcn,
        title: this.title,
        messageIsHTML: this.isHtml
      });
    }
  },
  methods: {
    notif: function(type) {
      this.count++;

      let config = this.getConfig;
      this.buttonClicked = true;

      this.$notification[type](this.message + this.count, {
        ...config
      });
    },
    remove: function() {
      this.$notification.removeAll();
    }
  }
};
</script>
