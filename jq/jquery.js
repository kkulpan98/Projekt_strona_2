$(document).ready(function () {
    prepareContent();
    prepareAjax();
    preparePlot();
});

function prepareContent() {
    $("#content").load('main.html', function () {
        $("#content").fadeIn(1000);
    });
}

function prepareAjax() {
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
}

function prepareSlider() {
    poprz = $(".slider-prev");
    nast = $(".slider-next");
    slide = $("#slider .slider-item");
    aktualny = 0;
    liczba = slide.length;
    nast.click(function () {
        if (aktualny === liczba - 1)
            aktualny = 0;
        else
            aktualny++;
        wyswietlSlajd(aktualny);
    });
    poprz.click(function () {
        if (aktualny === 0)
            aktualny = liczba - 1;
        else
            aktualny--;
        wyswietlSlajd(aktualny);
    });

}

function wyswietlSlajd(aktualny) {
    sliderCurrent = $(".slider-active");
    sliderCurrent.fadeOut(400, function () {
        sliderCurrent.removeClass("slider-active");
        slide.eq(aktualny).fadeIn(1000).addClass("slider-active");
    });
}

function prepareCalendar() {

    document.addEventListener('DOMContentLoaded', function () {
        var calendarEl = document.getElementById('calendar');

        var calendar = new FullCalendar.Calendar(calendarEl, {
            locale: 'pl',
            plugins: ['interaction', 'dayGrid'],
            editable: true,
            eventTextColor: '#ffffff',
            buttonText: {
                today: 'dzisiaj',
                month: 'miesiąc',
                week: 'tydzień',
                day: 'dzień',
                list: 'lista'
            },
            eventLimit: true,
            events: [
                {
                    title: 'Pomidorkowe wydarzenie',
                    start: '2019-12-01'
                },
                {
                    title: 'Pomidorkowe wydarzenie',
                    start: '2019-12-07',
                    end: '2019-12-10'
                },
                {
                    groupId: 999,
                    title: 'Pomidorkowe wydarzenie',
                    start: '2019-12-09T16:00:00'
                },
                {
                    groupId: 999,
                    title: 'Pomidorkowe wydarzenie',
                    start: '2019-12-16T16:00:00'
                },
                {
                    title: 'Pomidorkowe wydarzenie',
                    start: '2019-12-11',
                    end: '2019-12-13'
                },
                {
                    title: 'Pomidorkowe wydarzenie',
                    start: '2019-12-12T10:30:00',
                    end: '2019-12-12T12:30:00'
                },
                {
                    title: 'Pomidorkowe wydarzenie',
                    start: '2019-12-12T12:00:00'
                },
                {
                    title: 'Pomidorkowe wydarzenie',
                    start: '2019-12-12T14:30:00'
                },
                {
                    title: 'Pomidorkowe wydarzenie',
                    start: '2019-12-12T17:30:00'
                },
                {
                    title: 'Pomidorkowe wydarzenie',
                    start: '2019-12-12T20:00:00'
                },
                {
                    title: 'Pomidorkowe wydarzenie',
                    start: '2019-12-13T07:00:00'
                },
                {
                    title: 'Pomidorkowe wydarzenie',
                    start: '2019-12-28'
                }
            ]
        });

        calendar.render();
    });
}