<template>
  <div class="notification" :style="{backgroundColor: backgroundColor, color: textColor}">
    <div :class="{'icn-left': showLeftIcn}">
      <img v-if="showLeftIcn" src="./assets/notification.svg" alt="check" width="20px">
    </div>
    <div>
      <p>{{message}}</p>
    </div>
    <div :class="{'icn-right': showCloseIcn}" @click="remove()">
      <img v-if="showCloseIcn" src="./assets/error.svg" alt="check" width="20px">
    </div>
  </div>
</template>

<script>
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
    },
    position: {
      type: String,
      default: "topRight"
    },
    showLeftIcn: {
      type: Boolean,
      default: true
    },
    showCloseIcn: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "primary"
    },
    primary: {
      type: Object,
      default: function() {
        return {
          background: "#fff",
          color: "#000"
        };
      }
    },
    success: {
      type: Object,
      default: function() {
        return {
          background: "#B2DFDB",
          color: "#000"
        };
      }
    },
    error: {
      type: Object,
      default: function() {
        return {
          background: "#FFCDD2",
          color: "#000"
        };
      }
    },
    warning: {
      type: Object,
      default: function() {
        return {
          background: "#FFE0B2",
          color: "#000"
        };
      }
    },
    info: {
      type: Object,
      default: function() {
        return {
          background: "#B3E5FC",
          color: "#000"
        };
      }
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
    },
    initColors: function() {
      this.backgroundColor = this[this.type].background;
      this.textColor = this[this.type].color;
    }
  },
  beforeMount() {
    let notificationContainer = this.getContainer();
    this.initColors();
    notificationContainer.appendChild(this.$el);
    notificationContainer.classList.add(this.position);
  },
  mounted() {
    this.handleTimeout();
  }
};
</script>

<style lang="scss">
.notificationCenter {
  position: absolute;
  width: 400px;
  top: 0;
  right: 0;

  &.topLeft {
    top: 0;
    left: 0;
    bottom: initial;
    right: initial;
  }

  &.topRight {
    top: 0;
    right: 0;
    bottom: initial;
    left: initial;
  }

  &.bottomLeft {
    bottom: 0;
    left: 0;
    top: initial;
    right: initial;
  }

  &.bottomRight {
    bottom: 0;
    right: 0;
    top: initial;
    left: initial;
  }

  &.topCenter {
    top: 0;
    left: 50%;
    right: initial;
    bottom: initial;
    transform: translate3d(-50%, 0, 0);
  }

  &.bottomCenter {
    left: 50%;
    bottom: 0;
    top: initial;
    right: initial;
    transform: translate3d(-50%, 0, 0);
  }

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
      cursor: pointer;
    }
  }
}
</style>


