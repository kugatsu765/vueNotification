import Notif from "./Notification.vue";

const NotificationCenter = {
  install: function(Vue, options = {}) {
    function createNotification(lConf) {
      var ComponentClass = Vue.extend(Notif);
      let newComponent = new ComponentClass({
        el: document.createElement("div"),
        propsData: {
          ...options,
          ...lConf
        }
      });
      notifications.push(newComponent);
    }

    function removeNotification(component) {
      notifications = notifications.filter(c => c !== component);
    }

    function removeNotifications() {
      notifications.forEach(c => c.remove());
      notifications = [];
    }

    // Expose utilities
    let notifications = [];
    Vue.prototype.$notification = {
      new: function(message, lConf = {}) {
        lConf.type = "primary";
        lConf.message = message;
        return createNotification(lConf);
      },
      success: function(message, lConf = {}) {
        lConf.type = "success";
        lConf.message = message;
        return createNotification(lConf);
      },
      error: function(message, lConf = {}) {
        lConf.type = "error";
        lConf.message = message;
        return createNotification(lConf);
      },
      warning: function(message, lConf = {}) {
        lConf.type = "warning";
        lConf.message = message;
        return createNotification(lConf);
      },
      info: function(message, lConf = {}) {
        lConf.type = "info";
        lConf.message = message;
        return createNotification(lConf);
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
