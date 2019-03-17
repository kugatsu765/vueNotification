import Notif from "./Notification.vue";

const NotificationCenter = {
  install: function(Vue, options = {}) {
    console.log("Notification center registred");

    function createNotification() {
      var ComponentClass = Vue.extend(Notif);
      let newComponent = new ComponentClass({
        el: document.createElement("div")
      });
      notifications.push(newComponent);
    }
    function removeNotifications() {
      notifications.forEach(c => c.remove());
      notifications = [];
    }

    // Expose utilities
    let notifications = [];
    Vue.prototype.$notification = {
      new: function() {
        return createNotification();
      },
      removeAll: function() {
        return removeNotifications();
      }
    };
  }
};

export default NotificationCenter;
