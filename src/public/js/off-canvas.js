(function ($) {
    $(() => {
        $('[data-toggle="offcanvas"]').on('click', () => {
            $('.sidebar-offcanvas').toggleClass('active');
        });
    });
}(jQuery));
