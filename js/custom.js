var nav = $("#navbarSupportedContent");
var btn = $(".custom_menu-btn");

btn.click(function (e) {
    e.preventDefault();
    nav.toggleClass("lg_nav-toggle");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
});

// Close menu when clicking outside on small screens
$(document).click(function(event) {
    if (!$(event.target).closest('.custom_nav-container').length && nav.hasClass('lg_nav-toggle')) {
        nav.removeClass('lg_nav-toggle');
        document.querySelector(".custom_menu-btn").classList.remove("menu_btn-style");
    }
});

function getCurrentYear() {
    var d = new Date();
    var currentYear = d.getFullYear();
    $("#displayDate").html(currentYear);
}

getCurrentYear();
