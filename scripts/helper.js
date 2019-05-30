class Helper{


  helper (song) {
    playPauseAndUpdate(song);

  };

  playPauseAndUpdate(song) {
     player.playPause(song);
     const duration = player.getDuration();
     $('#time-control .total-time').text( duration );
     };

}


var helper = new Helper();
