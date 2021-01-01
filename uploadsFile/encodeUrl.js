jQuery(function () {
    $('#encodeUrl').on('click', function (ev) {
        var urlText = $('#urlText').val();
        $('#outUrl').text(encodeURIComponent(urlText));
    })

    $('#decodeUrl').on('click', function (ev) {
        var urlText = $('#urlText').val();
        $('#outUrl').text(decodeURIComponent(urlText));
    })
})