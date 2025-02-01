(function (window, document, $, undefined) {

  'use strict';

  function randomChris() {
    const array = ["Chris Steinmeyer",
		   "Chris Frost",
		   "Chris Prewitt"];

    const randomIndex = Math.floor(Math.random() * array.length);
    const randomElement = array[randomIndex];

    console.log(randomElement);
    return randomElement;
  }
  document.addEventListener('DOMContentLoaded', function () {
    //remove first h1 on the page
    document.getElementById('fistbump-btn').addEventListener('click', function () {
    new window.FlashMessage(
        `You fistbumped  ${randomChris()}! Life is good!`,
	this.dataset.type,
        {
          timeout: this.dataset.timeout,
          progress: true
        });

    });

  }, false);

})(window, document)
