// playerbox effect
$(document).ready(function() {
    $('#playerBox').click(function() {
    $('.player').fadeToggle();

        var wH = $(window).width();
        if (wH > 767) {
            $('.player').toggleClass('push-content');
        }
        $this = $(this);
        if ($this.hasClass('is-open')) {
            $this.addClass('is-close').removeClass('is-open');
            $('body').css('overflowY', 'visible');
            $('.player').show();
            } else {
                $this.removeClass('is-close').addClass('is-open');
                $('body').css('overflowY', 'hidden');
            }
    });
});

// songs
var songs = new Array();

songs.push({
    song: 'audio/thexx.mp3',
    coverSong: 'img/1.png',
    albumTitle: 'Coexist',
    songTitle: 'Intro',
    artist: 'The Xx'
});

songs.push({
    song: 'audio/shine.mp3',
    coverSong: 'img/2.jpg',
    albumTitle: 'Acoustique',
    songTitle: 'Shine',
    artist: 'Acoustique'
});

var player = document.querySelector('.player');

var song = new Audio(songs[0].song);
song.play();

var songIndex = 0;


//icons control
$("#play").click(function() {
    if (!song.paused) {
        $("#play").html('<i class=\'material-icons\'>pause</i>')
        song.pause();
    } else {
        $("#play").html('<i class=\'material-icons\'>play_arrow</i>');
        song.play();
    }
});
$("#next").click(function() {
    if ((songIndex + 1) < songs.length) {
        song.pause();
        songIndex++;
        song = new Audio(songs[songIndex].song);
        song.play();
    } else {
        song.pause();
        songIndex--;
        song = new Audio(songs[songIndex].song);
        song.play();
    }// // playerbox
    // $('#coverSong') = ('#coverSong')++;
});
$("#previous").click(function() {
    if ((songIndex - 1) > songs.length) {
        song.pause();
        songIndex--;
        song = new Audio(songs[songIndex].song);
        song.play();
    } else {
        song.pause();
        songIndex++;
        song = new Audio(songs[songIndex].song);
        song.play();
    }
});


//progressbar control
// $().ready(function progressTime('#progressTime') {
//     var hours = Math.floor(time / 3600);
//     var mins = Math.floor((time % 3600) / 60);
//     var secs = Math.floor(time % 60);
//
//     if (secs < 10) {
//         secs = "0" + secs;
//     }
//
//     if (hours) {
//         if (mins < 10) {
//             mins = "0" + mins;
//         }
//
//         return hours + ":" + mins + ":" + secs; // hh:mm:ss
//     } else {
//         return mins + ":" + secs; // mm:ss
//     }
// }



// mouse position
/*        function getMousePosition(event) {
            return {
                x: event.pageX,
                y: event.pageY
            };
        }


// element position
        function getPosition(element) {
            var top = 0,
                left = 0;

            do {
                top += element.offsetTop;
                left += element.offsetLeft;
            } while (element = element.offsetParent);

            return {
                x: left,
                y: top
            };
        }


        function clickProgress(idplayer, control, event) {

        // La position absolue de la progressBar
            var parent = getPosition(control);

        // L'endroit de la progressBar où on a cliqué
            var target = getMousePosition(event); 
            var player = document.querySelector('#' + idPlayer);

            var x = target.x - parent.x;
            var wrapperWidth = document.querySelector('#seekbar').offsetWidth;

            var percent = Math.ceil((x / wrapperWidth) * 100);
            var duration = player.duration;

            player.currentTime = (duration * percent) / 100;
        }
*/
