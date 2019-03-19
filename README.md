# Notification Vue JS 🚀
🚧 Development in progress

The **Notification vue** plugin allow you to display notifications from all your app. Just with one ligne of code.

## How to use it

Install with pm

```console
npm i @kugatsu/vuenotification --save
```

Import with ES6

```javascript
import VueNotification from "@kugatsu/vuenotification";

Vue.use(VueNotification, {
  timer: 20
});
```

Throw notification where you want.

```javascript
this.$notification.new("hello world", {  timer: 10 });
this.$notification.error("hello world", { infiniteTimer: false });
...
```

## Parameters

| Name          | Type    |               Default value |
| ------------- | ------- | --------------------------: |
| message       | String  | "🚧 You miss something ..." |
| timer         | Number  |                        5(s) |
| infiniteTimer | Boolean |                       false |
| position      | String  |                    topRight |
| type          | String  |                     primary |
| [type]        | Object  |        ( See type section ) |
| showLeftIcn   | Boolean |                        true |
| showCloseIcn  | Boolean |                       false |

#### position

| Name          |        Value |
| ------------- | -----------: |
| top center    |     topRight |
| top left      |      topLeft |
| top right     |     topRight |
| bottom center | bottomCenter |
| bottom left   |   bottomLeft |
| bottom right  |  bottomRight |

#### Type

There is 5 notifications types.

- primary
- info
- success
- warning
- error

To custom the colors of the notification you can do globaly or localy :

```javascript
// Sample to change all error notification
Vue.use(NotificationVuejs, {
  error: {
    background: "green",
    color: "red"
  }
});
```

## Credit

##### Icones

<div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a>, <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
