import Vue from "vue";
import App from "./App.vue";
import NotificationVuejs from "./NotificationsVuejs";

Vue.config.productionTip = false;
Vue.use(NotificationVuejs, {
  timer: 10
});

new Vue({
  render: h => h(App)
}).$mount("#app");
