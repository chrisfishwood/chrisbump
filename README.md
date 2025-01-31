<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>FlashJS examples | BetaWeb</title>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <link rel="stylesheet" href="../dist/flash.css">
</head>

  

<body>
  <h1>FlashJS examples</h1>

  <!-- Flash messages container -->
  <div class="flash-container">

    <!-- With vanilla JS -->
    <div class="flash-message js-msg" data-type="success" data-timeout="20000" data-theme="dark" data-progress>My awesome success message !</div>
    <div class="flash-message js-msg" data-type="error" data-timeout="20000" data-theme="dark" data-progress>My sadly sad error message !</div>

    <!-- With jQuery -->
    <div class="flash-message flash-success jq-msg" data-type="success" data-theme="dark" data-timeout="20000">My awesome success message with jQuery plugin !</div>
    <div class="flash-message flash-error jq-msg" data-type="error" data-theme="dark" data-timeout="20000">My sadly sad error message with jQuery plugin !</div>
  </div>

  <button
    id="flash-btn"
    data-type="success"
    data-message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam beatae unde quisquam maiores dolorem ad facilis corporis ipsum reprehenderit."
    data-timeout="20000"
  >Success flash</button>

  <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
  <script src="../dist/flash.min.js"></script>
  <script src="../dist/flash.jquery.min.js"></script>
  <script src="../dist/app.js"></script>
  <script>
    function bumpIt(){
      alert("BUMPED!");
    }
  </script>
  <button onclick="bumpIt()">🤜🤛</button>

</body>
</html>

