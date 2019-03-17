import Vue from "vue";
import App from "./App.vue";
import NotificationVuejs from "./NotificationsVuejs";

Vue.config.productionTip = false;
Vue.use(NotificationVuejs, {
  timer: 20,
  position: "topRight"
});

new Vue({
  render: h => h(App)
}).$mount("#app");
