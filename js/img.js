$('button').click(function () {
    $('#advice').text('select your favorite colour among the colours');
    $('#sel').text('Your favorite colours in order:');
    $('#img1').attr('src', 'img/red.jpg').attr('alt', 'red');
    $('#img2').attr('src', 'img/blue.jpg').attr('alt', 'blue');
    $('#img3').attr('src', 'img/yellow.jpg').attr('alt', 'yellow');
});

$('img').click(function () {
    $('#selection ul').append($('<li>' + $(this).attr('alt') + '</li>'));
    $(this).remove();
});



