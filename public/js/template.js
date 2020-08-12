(function ($) {
    $(() => {
        const body = $('body');
        const contentWrapper = $('.content-wrapper');
        const scroller = $('.container-scroller');
        const footer = $('.footer');
        const sidebar = $('.sidebar');
        console.log('ok vao day');
        // Add active class to nav-link based on url dynamically
        // Active class can be hard coded directly in html file also as required
        // eslint-disable-next-line no-restricted-globals
        const current = location.pathname.split('/').slice(-1)[0].replace(/^\/|\/$/g, '');
        function addActiveClass(element) {
            if (current === '') {
                // for root url
                if (element.attr('href').indexOf('/') && element.attr('href').indexOf('/') !== -1) {
                    element.parents('.nav-item').last().addClass('active');
                    if (element.parents('.sub-menu').length) {
                        element.closest('.collapse').addClass('show');
                        element.addClass('active');
                    }
                }
            } else {
                // for other url
                // eslint-disable-next-line no-lonely-if
                if (element.attr('href').indexOf(current) && element.attr('href').indexOf(current) !== -1) {
                    element.parents('.nav-item').last().addClass('active');
                    if (element.parents('.sub-menu').length) {
                        element.closest('.collapse').addClass('show');
                        element.addClass('active');
                    }
                    if (element.parents('.submenu-item').length) {
                        element.addClass('active');
                    }
                }
            }
        }

        $('.nav li a', sidebar).each(function () {
            const $this = $(this);
            console.log('sidebar');
            addActiveClass($this);
        });

        $('.horizontal-menu .nav li a').each(function () {
            const $this = $(this);
            addActiveClass($this);
        });

        // Close other submenu in sidebar on opening any

        sidebar.on('show.bs.collapse', '.collapse', () => {
            console.log('hide');
            sidebar.find('.collapse.show').collapse('hide');
        });

        // Change sidebar and content-wrapper height

        function applyStyles() {
            // Applying perfect scrollbar
            if (!body.hasClass('rtl')) {
                if ($('.settings-panel .tab-content .tab-pane.scroll-wrapper').length) {
                    const settingsPanelScroll = new PerfectScrollbar('.settings-panel .tab-content .tab-pane.scroll-wrapper');
                }
                if ($('.chats').length) {
                    const chatsScroll = new PerfectScrollbar('.chats');
                }
                if (body.hasClass('sidebar-fixed')) {
                    if ($('#sidebar').length) {
                        const fixedSidebarScroll = new PerfectScrollbar('#sidebar .nav');
                    }
                }
            }
        }
        applyStyles();

        $('[data-toggle="minimize"]').on('click', () => {
            if ((body.hasClass('sidebar-toggle-display')) || (body.hasClass('sidebar-absolute'))) {
                body.toggleClass('sidebar-hidden');
            } else {
                body.toggleClass('sidebar-icon-only');
            }
        });

        // checkbox and radios
        $('.form-check label,.form-radio label').append('<i class="input-helper"></i>');

        // Horizontal menu in mobile
        $('[data-toggle="horizontal-menu-toggle"]').on('click', () => {
            $('.horizontal-menu .bottom-navbar').toggleClass('header-toggled');
        });
        // Horizontal menu navigation in mobile menu on click
        const navItemClicked = $('.horizontal-menu .page-navigation >.nav-item');
        navItemClicked.on('click', function (event) {
            if (window.matchMedia('(max-width: 991px)').matches) {
                if (!($(this).hasClass('show-submenu'))) {
                    navItemClicked.removeClass('show-submenu');
                }
                $(this).toggleClass('show-submenu');
            }
        });

        $(window).scroll(() => {
            if (window.matchMedia('(min-width: 992px)').matches) {
                const header = $('.horizontal-menu');
                if ($(window).scrollTop() >= 70) {
                    $(header).addClass('fixed-on-scroll');
                } else {
                    $(header).removeClass('fixed-on-scroll');
                }
            }
        });
    });
}(jQuery));
