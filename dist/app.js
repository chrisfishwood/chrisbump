(function (window, document, undefined) {

  'use strict';

  const names = [
    "Chris Steinmeyer",
    "Chris Frost",
    "Chris Prewitt"
  ];

  function randomChris() {
    return names[Math.floor(Math.random() * names.length)];
  }

  function fistBump(btn) {
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
    new window.FlashMessage(
      `You fistbumped ${randomChris()}! Life is good!`,
      btn.dataset.type,
      { timeout: btn.dataset.timeout, progress: true }
    );
  }

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('fistbump-btn');

    // touchend fires immediately without 300ms delay; preventDefault blocks the ghost click
    btn.addEventListener('touchend', function (e) {
      e.preventDefault();
      fistBump(this);
    });

    btn.addEventListener('click', function () {
      fistBump(this);
    });
  }, false);

})(window, document);
