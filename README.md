# videojs-endcapCTA
Endcap Call-To-Action plugin for video.js

At the end of a video, display your custom HTML/JS Call To Action.

Such as:
*  Contact Us form
*  Links to more information
*  Redirect to store / product

![Example Screenshot](https://raw.githubusercontent.com/wulfsolter/videojs-endcapCTA/master/example1.png)

## Usage

```javascript
// Get the video.js object
var video = videojs('video-id', {
  "controls": true
});

// Add a the endcap content
video.endcapCTA({
  html: '<section class="endcapCallToActionContent">....</section>',
  run: function() {
    // This runs upon creation of endcapCTA, just after video starts playing
  }
});
```
