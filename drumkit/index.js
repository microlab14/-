const playSound = k => { 
    let audio = $(`audio[data-key=${k}]`); 
    $(`button[data-key=${k}]`).addClass('pressed');

    if (!audio.length) return;
    audio[0].currentTime = 0;
    audio[0].play();

    setTimeout(() => {$(`button[data-key=${k}]`).removeClass('pressed')}, 100);
}

$(function() { 
    $('button').on('click', function(e) {
        console.log($(this));
        playSound($(this).data('key'));
    });
    $(window).on('keydown', function(e) {
        playSound(e.keyCode);
    });
});
