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
    if (btn.classList.contains('bumping')) return;

    btn.classList.add('bumping');

    // Haptic fires at the moment of impact (70% through the 600ms animation)
    setTimeout(function () {
      if ('vibrate' in navigator) navigator.vibrate(50);
    }, 420);

    setTimeout(function () {
      btn.classList.remove('bumping');
      new window.FlashMessage(
        `You fistbumped ${randomChris()}! Life is good!`,
        btn.dataset.type,
        { timeout: btn.dataset.timeout, progress: true }
      );
    }, 650);
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
