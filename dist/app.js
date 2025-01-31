(function (window, document, $, undefined) {

  'use strict';

  // With vanilla JavaScript
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('flash-btn').addEventListener('click', function () {
    new window.FlashMessage(
	this.dataset.message,
	this.dataset.type,
        {
          timeout: this.dataset.timeout,
          progress: true,
          // thumb: 'https://pbs.twimg.com/profile_images/659436766420672512/-pS2Bgfl.jpg'
        });

    });

  }, false);

})(window, document)
