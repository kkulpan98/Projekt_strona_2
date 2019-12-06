$(document).ready(function () {
    $("#content").load('main.html', function () {
        $("#content").fadeIn(1000);
    });

    $('.nav-a').click(function () {
        $('a').removeClass('selected-item');
        var chosen = $(this);
        $("#content").fadeOut(1000, function () {
            $("#content").load(chosen.attr('href'), function () {
                $("#content").fadeIn(1000);
            });
        });
        chosen.addClass("selected-item");
        return false;
    });
});