$(document).ready(function () {
    prepareContent();
    prepareAjax();
    initTooltips();
    prepareLightSlider();
});

function prepareContent() {
    $("#content").load('main.html', function () {
        $("#content").fadeIn(1000);
    });
}

function prepareLightSlider() {
    $('#image-gallery').lightSlider({
        item: 1,
        thumbItem: 3,
        pause: 4000,
        slideMargin: 0,
        speed: 1400,
        auto: true,
        loop: true,
        pager: false,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',
        onSliderLoad: function () {
            $('#image-gallery').removeClass('cS-hidden');
        }
    });
}

function initializeOSM() {
    $(document).ready(function () {
            var map = L.map('map').setView([51.505, -0.09], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([51.5, -0.09]).addTo(map)
                .bindPopup('A Tutaj jest Londyn<br> Podobno lubią pomidory, wszyscy lubią pomidory')
                .openPopup();
        }
    );
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

function initTooltips() {
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
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
            eventBackgroundColor: '#F3969A',
            eventBorderColor: '#000',
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

function validate_2() {
    var form = $('#contact_form');

    if (form[0].checkValidity() === false) {
        return false;
    }
}

function showFriendEmailInput() {
    $('#friend-email-group').toggle();
    $('#friend-firstname-group').toggle();
    $('#friend-lastname-group').toggle();
}

