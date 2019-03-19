<template>
  <div class="notification" :style="{backgroundColor: backgroundColor, color: textColor}">
    <div :class="{'icn-left': showLeftIcn}">
      <svg
        v-if="showLeftIcn"
        width="20px"
        heigth="20px"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style="enable-background:new 0 0 512 512;"
        xml:space="preserve"
      >
        <g>
          <g>
            <path
              d="M467.819,431.851l-36.651-61.056c-16.896-28.181-25.835-60.437-25.835-93.312V224
			c0-82.325-67.008-149.333-149.333-149.333S106.667,141.675,106.667,224v53.483c0,32.875-8.939,65.131-25.835,93.312
			l-36.651,61.056c-1.984,3.285-2.027,7.403-0.149,10.731c1.899,3.349,5.461,5.419,9.301,5.419h405.333
			c3.84,0,7.403-2.069,9.301-5.419C469.845,439.253,469.803,435.136,467.819,431.851z M72.171,426.667l26.944-44.907
			C118.016,350.272,128,314.219,128,277.483V224c0-70.592,57.408-128,128-128s128,57.408,128,128v53.483
			c0,36.736,9.984,72.789,28.864,104.277l26.965,44.907H72.171z"
            ></path>
          </g>
        </g>
        <g>
          <g>
            <path
              d="M256,0c-23.531,0-42.667,19.136-42.667,42.667v42.667C213.333,91.221,218.112,96,224,96s10.667-4.779,10.667-10.667
			V42.667c0-11.776,9.557-21.333,21.333-21.333s21.333,9.557,21.333,21.333v42.667C277.333,91.221,282.112,96,288,96
			s10.667-4.779,10.667-10.667V42.667C298.667,19.136,279.531,0,256,0z"
            ></path>
          </g>
        </g>
        <g>
          <g>
            <path
              d="M302.165,431.936c-3.008-5.077-9.515-6.741-14.613-3.819c-5.099,2.987-6.805,9.536-3.819,14.613
			c2.773,4.715,4.288,10.368,4.288,15.936c0,17.643-14.357,32-32,32c-17.643,0-32-14.357-32-32c0-5.568,1.515-11.221,4.288-15.936
			c2.965-5.099,1.259-11.627-3.819-14.613c-5.141-2.923-11.627-1.259-14.613,3.819c-4.715,8.064-7.211,17.301-7.211,26.731
			C202.667,488.085,226.581,512,256,512s53.333-23.915,53.376-53.333C309.376,449.237,306.88,440,302.165,431.936z"
            ></path>
          </g>
        </g>
      </svg>
    </div>
    <div>
      <p>{{message}}</p>
    </div>
    <div :class="{'icn-right': showCloseIcn}" @click="remove()">
      <svg
        width="20px"
        v-if="showCloseIcn"
        x="0px"
        y="0px"
        viewBox="0 0 52 52"
        style="enable-background:new 0 0 52 52;"
        xml:space="preserve"
      >
        <g>
          <path
            d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26
		S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"
          ></path>
          <path
            d="M35.707,16.293c-0.391-0.391-1.023-0.391-1.414,0L26,24.586l-8.293-8.293c-0.391-0.391-1.023-0.391-1.414,0
		s-0.391,1.023,0,1.414L24.586,26l-8.293,8.293c-0.391,0.391-0.391,1.023,0,1.414C16.488,35.902,16.744,36,17,36
		s0.512-0.098,0.707-0.293L26,27.414l8.293,8.293C34.488,35.902,34.744,36,35,36s0.512-0.098,0.707-0.293
		c0.391-0.391,0.391-1.023,0-1.414L27.414,26l8.293-8.293C36.098,17.316,36.098,16.684,35.707,16.293z"
          ></path>
        </g>
      </svg>
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
  z-index: 50;

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


