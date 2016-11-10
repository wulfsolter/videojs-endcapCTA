/**
 * Video.js Endcap CTA
 * Created by Wulf Sölter
 * License information: https://github.com/wulfsolter/videojs-endcapCTA/blob/master/LICENSE
 * Plugin details: https://github.com/wulfsolter/videojs-endcapCTA
 */

(function(videojs) {
  'use strict';

  videojs.plugin('endcapCTA', function(opts) {
    opts = opts || {
      html: '<h1>Header</h1><p>Some content here...</p>',
      };
    var player = this;
    var _content;

    /**
     * Generate the DOM elements for the suggested video endcap content
     * @type {function}
     */
    function constructContent() {
      var _frag   = document.createDocumentFragment();
      var _aside  = document.createElement('aside');

      _aside.className = 'vjs-endcapCTA';
      _aside.innerHTML = opts.html;

      _content = _aside;
      _frag.appendChild(_aside);
      player.el().appendChild(_frag);
    }

    // attach VideoJS event handlers
    player.on('ended', function() {
      _content.classList.add('is-active');
      if (opts.run) opts.run();
    });
    player.on('play', function() {
      if (_content) {
        _content.classList.remove('is-active');
      }
    });
    player.ready(function() {
      constructContent();
    });

  });
}(window.videojs));