# 🚧 Notification Vue JS 🚧

The **Notification vue** plugin allow you to display notifications from all your app. Just with one ligne of code.

## How to use it

Install with pm

```
🚧 npm .....
```

Import with ES6

```javascript
🚧
import NotificationVuejs from "NotificationsVuejs";

Vue.use(NotificationVuejs, {
  timer: 1
});
```

Throw notification where you want.

```javascript
this.$notification.new({ message: "hello world", timer: 10 });
```

## Parameters

| Name    | Type   |               Default value |
| ------- | ------ | --------------------------: |
| message | String | "🚧 You miss something ..." |
| timer   | Number |                        5(s) |

## Todo's

- [x] Add delay
- [ ] Add multiple type
- [ ] Custum icon

```

```
