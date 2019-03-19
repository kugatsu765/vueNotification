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
        <v-btn color="primary" @click="notif('new')">Primary</v-btn>
        <br>
        <v-btn color="success" @click="notif('success')">success</v-btn>
        <br>
        <v-btn color="error" @click="notif('error')">error</v-btn>
        <br>
        <v-btn color="warning" @click="notif('warning')">warning</v-btn>
        <br>
        <v-btn color="info" @click="notif('info')">info</v-btn>
        <br>
        <v-btn @click="remove()">Remove All</v-btn>
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
      count: 0
    };
  },
  methods: {
    notif: function(type) {
      this.count++;
      this.$notification[type]({
        message: "Sample of notification throw with number " + this.count
      });
    },
    remove: function() {
      this.$notification.removeAll();
    }
  }
};
</script>
