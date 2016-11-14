$(function() {
    $('#send').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/khrystyna@yandex.ua",
            method: "POST",
            data: {
                userName: $('#userName').val()
            },
            dataType: "json"
        })
        .done(function() {
            $('form').html('<h1>Thank you!</h1>')
        })
        .fail(function() {
            $('form').html('<h1>Error</h1>')
        });
    });
});