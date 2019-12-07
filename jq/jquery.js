$(document).ready(function () {
    prepareContent();
    prepareAjax();
    preparePlot();
    prepareCalendar()
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
            plugins: ['interaction', 'dayGrid'],
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            events: [
                {
                    title: 'All Day Event',
                    start: '2019-08-01'
                },
                {
                    title: 'Long Event',
                    start: '2019-08-07',
                    end: '2019-08-10'
                },
                {
                    groupId: 999,
                    title: 'Repeating Event',
                    start: '2019-08-09T16:00:00'
                },
                {
                    groupId: 999,
                    title: 'Repeating Event',
                    start: '2019-08-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: '2019-08-11',
                    end: '2019-08-13'
                },
                {
                    title: 'Meeting',
                    start: '2019-08-12T10:30:00',
                    end: '2019-08-12T12:30:00'
                },
                {
                    title: 'Lunch',
                    start: '2019-08-12T12:00:00'
                },
                {
                    title: 'Meeting',
                    start: '2019-08-12T14:30:00'
                },
                {
                    title: 'Happy Hour',
                    start: '2019-08-12T17:30:00'
                },
                {
                    title: 'Dinner',
                    start: '2019-08-12T20:00:00'
                },
                {
                    title: 'Birthday Party',
                    start: '2019-08-13T07:00:00'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2019-08-28'
                }
            ]
        });

        calendar.render();
    });
}

function preparePlot() {

    /* exemple 1 */

    $(function () {
        var previousPoint;

        var d1 = [];
        for (var i = 0; i <= 10; i += 1)
            d1.push([i, parseInt(Math.random() * 30)]);

        var d2 = [];
        for (var i = 0; i <= 10; i += 1)
            d2.push([i, parseInt(Math.random() * 30)]);

        var d3 = [];
        for (var i = 0; i <= 10; i += 1)
            d3.push([i, parseInt(Math.random() * 30)]);

        var ds = new Array();

        ds.push({
            data: d1,
            bars: {
                show: true,
                barWidth: 0.2,
                order: 1,
                lineWidth: 2
            }
        });
        ds.push({
            data: d2,
            bars: {
                show: true,
                barWidth: 0.2,
                order: 2
            }
        });
        ds.push({
            data: d3,
            bars: {
                show: true,
                barWidth: 0.2,
                order: 3
            }
        });

        //tooltip function
        function showTooltip(x, y, contents, areAbsoluteXY) {
            var rootElt = 'body';

            $('<div id="tooltip" class="tooltip-with-bg">' + contents + '</div>').css({
                position: 'absolute',
                display: 'none',
                'z-index': '1010',
                top: y,
                left: x
            }).prependTo(rootElt).show();
        }

        //Display graph
        $.plot($("#placeholder1"), ds, {
            grid: {
                hoverable: true
            }
        });

        //Display horizontal graph
        var d1_h = [];
        for (var i = 0; i <= 5; i += 1)
            d1_h.push([parseInt(Math.random() * 30), i]);

        var d2_h = [];
        for (var i = 0; i <= 5; i += 1)
            d2_h.push([parseInt(Math.random() * 30), i]);

        var d3_h = [];
        for (var i = 0; i <= 5; i += 1)
            d3_h.push([parseInt(Math.random() * 30), i]);

        var ds_h = new Array();
        ds_h.push({
            data: d1_h,
            bars: {
                horizontal: true,
                show: true,
                barWidth: 0.2,
                order: 1,
                lineWidth: 2
            }
        });
        ds_h.push({
            data: d2_h,
            bars: {
                horizontal: true,
                show: true,
                barWidth: 0.2,
                order: 2
            }
        });
        ds_h.push({
            data: d3_h,
            bars: {
                horizontal: true,
                show: true,
                barWidth: 0.2,
                order: 3
            }
        });
        $.plot($("#placeholder1_h"), ds_h, {
            grid: {
                hoverable: true
            }
        });

//add tooltip event
        $("#placeholder1").bind("plothover", function (event, pos, item) {
            if (item) {
                if (previousPoint != item.datapoint) {
                    previousPoint = item.datapoint;

                    //delete de prĂŠcĂŠdente tooltip
                    $('.tooltip-with-bg').remove();

                    var x = item.datapoint[0];

                    //All the bars concerning a same x value must display a tooltip with this value and not the shifted value
                    if (item.series.bars.order) {
                        for (var i = 0; i < item.series.data.length; i++) {
                            if (item.series.data[i][3] == item.datapoint[0])
                                x = item.series.data[i][0];
                        }
                    }

                    var y = item.datapoint[1];

                    showTooltip(item.pageX + 5, item.pageY + 5, x + " = " + y);

                }
            } else {
                $('.tooltip-with-bg').remove();
                previousPoint = null;
            }

        });


    });

    /* Exemple 2 */

    $(function () {

        var d1 = [[2, 3], [1, 2], [0, 1], [0, 0], [1, 1], [2, 2]];

        var ds = new Array();

        ds.push({
            data: d1,
            lines: {
                show: true,
                fill: true
            }
        });

        //Display graph
        $.plot($("#placeholder2"), ds, {
            grid: {
                hoverable: true
            }
        });

    });

    /*sampe3*/
    $(function () {

        var d1 = [];
        for (var i = 10; i >= 0; i -= 1)
            d1.push([i, parseInt(Math.random() * 30)]);

        for (var i = 1; i <= 10; i += 1)
            d1.push([i, parseInt(Math.random() * 30)]);

        var ds = new Array();

        ds.push({
            data: d1,
            lines: {
                show: true,
                fill: true
            }
        });

        //Display graph
        $.plot($("#placeholder3"), ds, {
            grid: {
                hoverable: true
            }
        });

    });
}