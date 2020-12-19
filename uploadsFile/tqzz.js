jQuery(function () {
    var mVideo = $('<video autoplay loop muted></video>');
    mVideo.prop('src', 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/5.mp4')
    mVideo.css({
        'width': '100%',
        'height': '100%',
        'object-fit': 'fill',
    });
    mVideo.on('contextmenu', function (e) {
        e.preventDefault();
    })
    $('.full_page').append(mVideo);
})