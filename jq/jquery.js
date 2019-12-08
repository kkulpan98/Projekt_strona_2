$(document).ready(function () {
    prepareContent();
    prepareAjax();
    initTooltips();
});

function prepareContent() {
    $("#content").load('main.html', function () {
        $("#content").fadeIn(1000);
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

function checkString(str, msg) {
    if (isWhiteSpace(str) || isEmpty(str)) {
        return msg + ", ";
    } else return "";
}

function validate() {
    if (isEmpty(isValid())) {
        return true;
    } else {
        $("#form_error").html(isValid());
        console.log(isValid());
        startTimer();
        return false;
    }
}

function startTimer() {
    window.setTimeout("clearError()", 5000);
}

function clearError() {
    $("#form_error").html("");
}


function isValid() {
    return checkString($("#firstname").val(), "Imie żle") +
        checkString($("#lastname").val(), "Nazwisko źle ") +
        checkPhoneNumberRegEx($("#phone_number").val()) +
        checkEmailRegEx($("#email").val());
}

function checkEmailRegEx(str) {
    var email = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    if (email.test(str)) return ""; else return (" Podaj właściwy e-mail");
}

function checkPhoneNumberRegEx(str) {
    var number = /^(\+{1}\d{2,3}\s?[(]{1}\d{1,3}[)]{1}\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}$/;
    if (number.test(str)) return ""; else return (" Podaj właściwy numer");
}

function isWhiteSpace(str) {
    var ws = "\t\n\r ";
    for (let i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (ws.indexOf(c) > -1) {
            return true;
        }
    }
    return false;
}

function isEmpty(str) {
    return (!str || str.length === 0);
}

