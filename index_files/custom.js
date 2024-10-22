$(".move").mouseenter(function () {
    $(this).animate({
        top: (Math.random() - 0.5) * 500
    }, 100);
    $(this).animate({
        left: (Math.random() - 0.5) * 900
    }, 100);
});