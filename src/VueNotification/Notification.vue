<template>
  <div
    class="vn-notification"
    :class="'vn-notif'+ uuid"
    :style="{backgroundColor: backgroundColor, color: textColor}"
  >
    <div class="vn-container">
      <div :class="{'vn-icn-left': showLeftIcn}" :style="{fill: textColor}">
        <svg
          class="vn-icone"
          width="14"
          height="20"
          viewBox="0 0 14 20"
          xmlns="http://www.w3.org/2000/svg"
          v-if="showLeftIcn"
        >
          <path
            d="M3.99346 19C3.99346 19.2652 4.09882 19.5196 4.28635 19.7071C4.47389 19.8946 4.72824 20 4.99346 20H8.99346C9.25868 20 9.51303 19.8946 9.70057 19.7071C9.8881 19.5196 9.99346 19.2652 9.99346 19V18H3.99346V19ZM6.99346 0C5.50444 0.00139123 4.05466 0.477563 2.85479 1.35932C1.65492 2.24108 0.767486 3.48248 0.321445 4.90312C-0.124597 6.32376 -0.106005 7.84963 0.374519 9.25898C0.855044 10.6683 1.77246 11.8877 2.99346 12.74V15C2.99346 15.2652 3.09882 15.5196 3.28635 15.7071C3.47389 15.8946 3.72824 16 3.99346 16H9.99346C10.2587 16 10.513 15.8946 10.7006 15.7071C10.8881 15.5196 10.9935 15.2652 10.9935 15V12.74C12.2145 11.8877 13.1319 10.6683 13.6124 9.25898C14.0929 7.84963 14.1115 6.32376 13.6655 4.90312C13.2194 3.48248 12.332 2.24108 11.1321 1.35932C9.93226 0.477563 8.48248 0.00139123 6.99346 0V0ZM9.84346 11.1L8.99346 11.7V14H4.99346V11.7L4.14346 11.1C3.26823 10.4928 2.60979 9.622 2.26409 8.61445C1.91839 7.60689 1.90351 6.51525 2.22161 5.49865C2.53971 4.48204 3.17417 3.59359 4.03252 2.96278C4.89087 2.33197 5.92824 1.99178 6.99346 1.99178C8.05867 1.99178 9.09605 2.33197 9.9544 2.96278C10.8128 3.59359 11.4472 4.48204 11.7653 5.49865C12.0834 6.51525 12.0685 7.60689 11.7228 8.61445C11.3771 9.622 10.7187 10.4928 9.84346 11.1V11.1Z"
          ></path>
        </svg>
      </div>

      <div>
        <p class="vn-title" v-if="title !== null && title !== undefined && title !== ''">{{title}}</p>
        <p class="vn-message">{{message}}</p>
      </div>

      <div @click="remove()" :style="{fill: textColor}" class="vn-closeButton">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          xmlns="http://www.w3.org/2000/svg"
          v-if="showCloseIcn"
        >
          <path
            d="M10 1.00714L8.99286 0L5 3.99286L1.00714 0L0 1.00714L3.99286 5L0 8.99286L1.00714 10L5 6.00714L8.99286 10L10 8.99286L6.00714 5L10 1.00714Z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { TimlineMax } from "gsap";

let uuid = 0;
export default {
  name: "Notification",
  data: function() {
    return {
      notification: `.vn-notification`,
      notificationEl: `.vn-notif${this.uuid}`,
      notificationElContent: `.vn-notif${this.uuid} .vn-container`,
      notificationTitle: `.vn-notif${this.uuid} .vn-title`,
      notificationMessage: `.vn-notif${this.uuid} .vn-message`,
      notificationIcone: `.vn-notif${this.uuid} .vn-icone`,
      notificationIconeClose: `.vn-notif${this.uuid} .vn-closeButton`
    };
  },
  props: {
    message: {
      type: String,
      default: "🚧 You miss something ..."
    },
    title: {
      type: String,
      default: null
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
      default: false
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
          color: "#5E6372",
          titleColor: ""
        };
      }
    },
    success: {
      type: Object,
      default: function() {
        return {
          background: "#609a22",
          color: "#E4E4E4"
        };
      }
    },
    error: {
      type: Object,
      default: function() {
        return {
          background: "#B00002",
          color: "#E4E4E4"
        };
      }
    },
    warning: {
      type: Object,
      default: function() {
        return {
          background: "#FFDE03",
          color: "#2F3C5F"
        };
      }
    },
    dark: {
      type: Object,
      default: function() {
        return {
          background: "#2F3C5F",
          color: "#E4E4E4"
        };
      }
    },
    animateIn: {
      type: Function,
      default: function() {
        var tl = new TimelineMax()
          .from(`.vn-notif${this.uuid}`, 0.6, {
            opacity: 0
          })
          .from(this.notificationEl, 0.4, {
            borderRadius: 100,
            width: 30,
            height: 30
          })
          .from(`.vn-notif${this.uuid}>div`, 0.3, {
            opacity: 0
          });
        tl.pause();
        return tl;
      }
    },
    animateOut: {
      type: Function,
      default: function() {
        var tl = new TimelineMax({})
          .to(`.vn-notif${this.uuid}>div`, 0.4, {
            opacity: 0,
            ease: Power3.easeOut
          })
          .to(`.vn-notif${this.uuid}`, 0.3, {
            borderRadius: 100,
            width: 30,
            height: 30
          })
          .to(`.vn-notif${this.uuid}`, 0.7, {
            opacity: 0
          });

        return tl;
      }
    }
  },
  methods: {
    getContainer: function() {
      // Create the vn-container if they don't exist or return it
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

      var tl = new TimelineMax({
        onComplete: () => {
          window.clearTimeout(this.timeout);
          this.$notification.remove(this);
          notificationContainer.removeChild(this.$el);
          this.$destroy();
        }
      }).add(this.animateOut().play(0));
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
  beforeCreate() {
    this.uuid = uuid.toString();
    uuid += 1;
  },
  beforeMount() {
    let notificationContainer = this.getContainer();
    this.initColors();
    notificationContainer.appendChild(this.$el);
    notificationContainer.classList.add(this.position);
  },
  mounted() {
    this.handleTimeout();
    this.animateIn().play(0);
  },
  beforeDestroy() {}
};
</script>

<style lang="scss">
.notificationCenter {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  position: absolute;
  width: 300px;
  max-width: 90vw;
  top: 0;
  right: 0;
  z-index: 50;
  margin: 0 8px;

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
    margin: auto;
  }

  &.bottomCenter {
    left: 50%;
    bottom: 0;
    top: initial;
    right: initial;
    transform: translate3d(-50%, 0, 0);
    margin: auto;
  }

  .vn-notification {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    margin: 8px auto;
    border-radius: 5px;

    .vn-container {
      position: relative;
      padding: 16px 24px 16px 16px;
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;

      .vn-title {
        font-size: 17px;
        transform: translateY(-5px);
        font-weight: 500;
      }

      p {
        margin: 0;
        font-size: 14px;
      }

      .vn-icn-left {
        margin-right: 16px;
      }

      .vn-closeButton {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 8px;
      }
    }
  }
}
</style>


