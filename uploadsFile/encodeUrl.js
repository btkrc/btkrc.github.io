function func1(ev){
      var urlText = $('#urlText').val();
        $('#outUrl').text(encodeURIComponent(urlText));
}

function func2(ev){
        var urlText = $('#urlText').val();
        $('#outUrl').text(decodeURIComponent(urlText));
}

    $('#encodeUrl').off('click', func1);
    $('#decodeUrl').off('click', func2);

    $('#encodeUrl').on('click', func1);
    $('#decodeUrl').on('click', func2);