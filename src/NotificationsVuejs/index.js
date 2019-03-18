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
      new: function(lConf) {
        lConf.type = "primary";
        return createNotification(lConf);
      },
      success: function(lConf) {
        lConf.type = "success";
        return createNotification(lConf);
      },
      error: function(lConf) {
        lConf.type = "error";
        return createNotification(lConf);
      },
      warning: function(lConf) {
        lConf.type = "warning";
        return createNotification(lConf);
      },
      info: function(lConf) {
        lConf.type = "info";
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
