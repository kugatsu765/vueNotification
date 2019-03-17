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

| Name          | Type    |               Default value |
| ------------- | ------- | --------------------------: |
| message       | String  | "🚧 You miss something ..." |
| timer         | Number  |                        5(s) |
| infiniteTimer | Boolean |                       false |
| position      | String  |                    topRight |

### position

| Name          | Value        |
| ------------- | ------------ |
| top center    | topRight     |
| top left      | topLeft      |
| top right     | topRight     |
| bottom center | bottomCenter |
| bottom left   | bottomLeft   |
| bottom right  | bottomRight  |

## Credit

### Icones

<div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a>, <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

## Todo's

- [x] Add delay
- [ ] Add multiple type
- [ ] Custum icon

```

```
