define(['jquery', 'hand'], function($, hand) {
    var html = $('.tel').html()
    var fun = hand.compile(html)
    $.ajax({
        url: '/index',
        dataType: 'json',
        success: function(d) {
            $('.banner>ul').html(fun(d))
        }
    })
})