<template>
  <div class="notification">
    <div>
      <p>🎉 Tada</p>
    </div>
    <div>
      <button @click="remove()">do</button>
    </div>
  </div>
</template>

<script>
import { log } from "util";

export default {
  name: "Notification",
  methods: {
    getContainer: function() {
      // Create the container if they don't exist or return it
      let notificationContainer = document.querySelector(`.notificationCenter`);
      if (!notificationContainer) {
        notificationContainer = document.createElement("div");
        notificationContainer.classList.add("notificationCenter");
        document.body.appendChild(notificationContainer);
      }
      return notificationContainer;
    },
    remove: function() {
      let notificationContainer = this.getContainer();
      this.$notification.remove(this);
      notificationContainer.removeChild(this.$el);
      this.$destroy();
    }
  },
  beforeMount() {
    let notificationContainer = this.getContainer();
    notificationContainer.appendChild(this.$el);
  },
  destroyed() {
    log("🔥");
  }
};
</script>

<style lang="scss">
.notificationCenter {
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;

  .notification {
    background-color: white;
    border: 1px solid lightgray;
    margin: 16px;
    padding: 16px;
    border-radius: 4px;

    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    p {
      margin: 0;
    }
  }
}
</style>


