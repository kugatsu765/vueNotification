import Notif from "./Notification.vue";

const NotificationCenter = {
  install: function(Vue, options = {}) {
    console.log("Notification center registred");

    function createNotification() {
      var ComponentClass = Vue.extend(Notif);
      let newComponent = new ComponentClass({
        el: document.createElement("div"),
        propsData: { type: "primary" }
      });
      notifications.push(newComponent);
    }

    function removeNotification(component) {
      let index = notifications.indexOf(component);
      notifications = notifications.filter(c => c !== component);
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
      remove: function(comp) {
        return removeNotification(comp);
      },
      removeAll: function() {
        return removeNotifications();
      }
    };
  }
};

export default NotificationCenter;
