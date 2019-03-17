<template>
  <div id="app">
    <button @click="notif()">notification throw</button>
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
    notif: function() {
      this.count++;
      this.$notification.new({
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
