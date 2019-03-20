import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import NotificationVuejs from "./VueNotification/index";

Vue.config.productionTip = false;
Vue.use(NotificationVuejs, {
  timer: 20,
  title: "Vue notification",
  position: "topRight",
  animateIn: function() {
    var tl = new TimelineMax()
      .from(this.notificationEl, 0.7, {
        css: { opacity: 0 }
      })
      .from(this.notificationEl, 0.4, {
        borderRadius: 100,
        width: 30,
        height: 30
      })
      .from(this.notificationElContent, 0.3, {
        css: { opacity: 0 }
      });
    return tl;
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
