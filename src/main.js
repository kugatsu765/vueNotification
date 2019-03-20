import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import NotificationVuejs from "./VueNotification/index";

Vue.config.productionTip = false;
Vue.use(NotificationVuejs, {
  timer: 20,
  position: "topRight",
  animateIn: function() {
    var tl = new TimelineMax()
      .from(this.notificationEl, 0.6, {
        opacity: 0
      })
      .from(this.notificationEl, 0.4, {
        borderRadius: 100,
        width: 58,
        height: 58
      })
      .from(this.notificationElContent, 0.3, {
        opacity: 0
      });
    return tl;
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
