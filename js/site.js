$(document).ready(function () {

    $("#workarea").height($('body').height() * .49);
    $("#fridge").height($('body').height() * .49);
    var value = [
        "action", "are", "be", "choose", "coalition", "compose",
        "embodies", "for", "future", "he", "it", "lived", "living",
        "love", "mind", "mine", "now", "people", "person", "runs",
        "scholars", "she", "speaks", "spoken", "the", "theory",
        "thought", "we", "were", "who", "words", "write", "writing", "you",
        "a", "at", "run", "speak", "they", "to", "too", "two", 
        "women", "yours", "I", "is"];

    var playList = [];

    var audio1, audio2;
    var jPlaylist = [];

    var playlistPosition = 0;

    audiojs.events.ready(function () {
        var audios = document.getElementsByTagName('audio');
        audio1 = audiojs.create(
                audios[0],
                {
                    css: false
                }
        );
        audio2 = audiojs.create(
                audios[1],
                {
                    css: false,
                    trackEnded: function () {
                       
                        if (playlistPosition < jPlaylist.length) {
                            audio2.load(jPlaylist[playlistPosition]);
                            audio2.play();
                            playlistPosition++;
                        }

                    }
                }
        );
    });

    for (var i = 0; i < value.length; i++) {

        $("#workarea")
                .append("<div class='draggable btn btn-primary' role='button' id='"
                        + value[i] + "'></div>");
        $("#" + value[i]).append("<p>" + value[i] + "</p>");
    }

    $('.draggable').each(function (i, el) {
        $(el).attr("number", i);
    });
    var draggable = $('.draggable').draggabilly({
        grid: [20, 20],
        container: "#workarea"

    });
    function playFile(url) {

        audio1.load(url);
        audio1.play();
    }

    function sortByOffset(a, b) {

        var aLeftOffset = a.left;
        var bLeftOffset = b.left;
        return ((aLeftOffset < bLeftOffset) ? -1 : ((aLeftOffset > bLeftOffset) ? 1 : 0));
    }

    function check(aValue, bArray) {

        var pos = -1, i = 0;
        while (i < bArray.length) {
            if (bArray[i].url === aValue.url) {
                pos = i;
            }
            i++;
        }

        return pos;
    }

    function remove(aValue, bArray) {

        var i = check(aValue, bArray);
        if (i !== -1) {
            bArray.splice(i, 1);
        }

    }

    function listener() {

        // Construct URL for playlist
        var url = "sounds/" + value[$(this).attr("number")] + ".mp3";
        // Play initial sound
        playFile(url);
        // Build a playListEntry
        var playListEntry = {
            url: url,
            left: $(this).offset().left

        };
        // Check horizontal alignment
        if ($(this).offset().left >= $("#fridge").offset().left) {

            // Check if not already in array
            if (check(playListEntry, playList) === -1) {

                // If not, add the entry
                playList.push(playListEntry);
            }

        } else {

            // Since the placement is outside of the 'fridge,'
            //  check if we need to remove it from the playlist
            remove(playListEntry, playList);
        }

        // Now that the list has been updated, sort everything
        playList.sort(sortByOffset);
    }

    draggable.on('mouseup', listener);
    $(".about").click(function (e) {

        e.preventDefault();
        $("#workarea").hide();
        $("#information").show();
        $(".about").addClass("active");
        $(".home").removeClass("active");
    });

    $(".home").click(function (e) {

        e.preventDefault();
        $("#workarea").show();
        $("#information").hide();
        $(".home").addClass("active");
        $(".about").removeClass("active");
    });

    $("#playButton").click(function (e) {

        e.preventDefault();
        jPlaylist = [];
        playlistPosition = 0;

        // Build the play objects
        for (var i = 0; i < playList.length; i++) {
            jPlaylist.push(playList[i].url);
        }

        // As long as there is at least one entry in the playlist...
        if (jPlaylist.length >= 1) {
            // play it and then...
            audio2.load(jPlaylist[playlistPosition]);
            audio2.play();
            // update the index.
            playlistPosition++;
        }

    });
});
