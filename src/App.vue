<template>
  <div id="app">
    <button @click="notif()">notification throw</button>
    <button @click="remove()">remove</button>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  methods: {
    notif: function() {
      this.$notification.new();
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
