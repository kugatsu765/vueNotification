<template>
  <div class="notification">
    <div class="icn-left">
      <img src="./assets/notification.svg" alt="check" width="20px">
    </div>
    <div>
      <p>{{message}}</p>
    </div>
    <div class="icn-right" @click="remove()">
      <img src="./assets/error.svg" alt="check" width="20px">
    </div>
  </div>
</template>

<script>
import { log } from "util";
import { timeout } from "q";

export default {
  name: "Notification",
  props: {
    message: {
      type: String,
      default: "🚧 You miss something ..."
    },
    timer: {
      type: Number,
      default: 5
    },
    timeout: {
      type: Object,
      default: null
    },
    infiniteTimer: {
      type: Boolean,
      default: false
    }
  },
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
      window.clearTimeout(this.timeout);
      this.$notification.remove(this);
      notificationContainer.removeChild(this.$el);
      this.$destroy();
    },
    handleTimeout: function() {
      if (!this.infiniteTimer) {
        this.timeout = setTimeout(() => {
          this.remove();
        }, this.timer * 1000);
      }
    }
  },
  beforeMount() {
    log("🚀");
    let notificationContainer = this.getContainer();
    notificationContainer.appendChild(this.$el);
  },
  mounted() {
    this.handleTimeout();
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
    grid-template-columns: auto 1fr auto;
    align-items: center;
    p {
      margin: 0;
    }

    .icn-left {
      margin-right: 16px;
    }

    .icn-right {
      margin-left: 8px;
    }
  }
}
</style>


