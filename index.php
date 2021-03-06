<?php

require_once('lib/PlaylistBuilder.php');

$playlist = new PlaylistBuilder('sounds');

?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Arrange words and hear them spoken">
        <meta name="author" content="Women">
        <link rel="icon" href="favicon.ico">
        <title>Words on a Digital Fridge</title>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/jquery.gridster.css" rel="stylesheet">
        <link href="css/jquery.mobile.structure-1.4.5.min.css" rel="stylesheet" type="text/css"/>
        <link href="css/jquery.mobile.icons.min.css" rel="stylesheet" type="text/css"/>
        <link href="css/test.min.css" rel="stylesheet" type="text/css"/>
        <link href="css/site.css" rel="stylesheet">
        <script src="js/jquery-2.2.0.min.js" type="text/javascript"></script>
        <script src="js/jquery.mobile-1.4.5.min.js" type="text/javascript"></script>
        <script src="js/audio.min.js" type="text/javascript"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/dragabilly.js"></script>
        <script>
            var playlistTotal = <?php echo $playlist->getPlaylist() ?>;
        </script>
        <script src="js/site.js"></script>
    </head>

    <body>
        <div data-role="page" class="jqm-demos" id="panel-fixed-page1" data-title="Words on a Digital Fridge" data-url="panel-fixed-page1">
            <div id="header" data-role="header" data-position="fixed">
                    <h1>Words on a Digital Fridge</h1>
            </div>
                <div role="main" data-role="main" class="ui-content jqm-content jqm-fullwidth">
                <div class="ui-grid-a ui-responsive">
                    <div id="workarea" class="ui-block-a"></div>
                    <div id="fridge" class="ui-block-b">
                         <button id="playButton" type="button" class="btn btn-success">Play</button>  
                    </div>
                    <audio preload></audio>
                    <audio preload></audio>
                </div>
            </div>
            <div id="footer" data-role="footer" data-position-fixed="true">
                <h3>
                    Special thanks to Shelley Rodrigo, Jenn Fishman,
                    Joanna Howard, Megan Mize,<br> Sarah McGinley, Sarah Moesley,
                    Jennifer Hewerdine, Pamela VanHaitsma, <br> Dawn Opel, and Laurie Ann Britt-Smith.
                </h3>
                <h4>
                    <a href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike (CC BY-SA)</a>
                </h4>       
            </div>
        </div>
    </body>
</html>
