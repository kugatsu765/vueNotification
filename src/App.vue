<template>
  <div id="app">
    <button @click="notif('new')">notification</button>
    <br>
    <button @click="notif('success')">notification success</button>
    <br>
    <button @click="notif('error')">notification error</button>
    <br>
    <button @click="notif('warning')">notification warning</button>
    <br>
    <button @click="notif('info')">notification info</button>
    <br>
    <button @click="remove()">remove</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      count: 0
    };
  },
  components: {},
  methods: {
    notif: function(type) {
      this.count++;
      console.log(this.$notification[type]);

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

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
