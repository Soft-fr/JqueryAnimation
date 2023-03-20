let numImg = 1;
const maxImg = 8;

$(document).ready(function() {
    $('.popup').hide();
    $('#film').hide();
    $('#charge-title').hide();
    $('#title-charge').hide();
    $('.bar').hide();
    $('.circle').mouseover(function() {
        $(this).animate({
            top: "50%",
        }, 1500).animate({
            top: "94%"
        }, 1000).animate({
            top: "55%"
        }, 1000).animate({
            top: "94%"
        }, 800).animate({
            top: "70%"
        }, 500).animate({
            top: "89%"
        }, 300).animate({
            top: "94%"
        }, 200)
    });

    setTimeout(function() {
        $('.popup').fadeIn(2500, function() {
            $('.popup').show();
        })
    }, 2000);

    $('.close-popup').click(function() {
        $('.popup').fadeOut(1500, function() {
            $(this).hide();
        })
        setTimeout(function() {
            $('.open-popup').fadeIn(2500, function() {
                $('.open-popup').css("display", "block");
            })
        }, 2000);
    });

    $('.open-popup').click(function() {
        $(this).fadeOut(1500, function() {
            $(this).hide();
        })
        setTimeout(function() {
            $('.popup').fadeIn(2500, function() {
                $('.popup').show();
            })
        }, 2000);
    });

    $('.chargement').click(function() {
        $(this).fadeOut(500, function() {
            $(this).hide();
        })
        $('.bar').fadeIn(4000, function() {
            $('.bar').show();
            $('#charge-title').show();
        });
        setInterval(function() {
            $('.progress-bar').animate({
                width: '+=10%'
            })
        }, 3000);

        setTimeout(function() {
            clearInterval();
            $('#charge-title').hide();
            $('.bar').hide();
            $('#title-charge').show();
            $('#film').show();
        }, 30000);
    })

    $("#next").click(function () {
        $("#img" + numImg).fadeOut(1000);
        numImg = numImg + 1;
        if (numImg > maxImg) {
            numImg = 1;
        }
        $("#img" + numImg).fadeIn(1000);
    });

    $("#before").click(function () {
        $("#img" + numImg).fadeOut(1000);
        numImg = numImg - 1;
        if (numImg < 1) {
            numImg = maxImg;
        }
        $("#img" + numImg).fadeIn(1000);
    });
});