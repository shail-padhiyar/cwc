////////// select 2 initialization //////////
$(document).ready(function() {
    $('.select2-initialization').select2({
        minimumResultsForSearch: -1 // for remove select 2 default search field
    });
});
////////// select 2 initialization //////////

$(window).ready(function(){
    ////////// Toggle Sidebar //////////
    $("#toggleSidebar, .close-sidebar-ico").click(function(){
        $("#sidebar").toggleClass('active')
    });

    ////////// on LOAD get window size and set sidebar //////////
    if (window.innerWidth < 1200) {
        $("#sidebar").removeClass('active')
    }
    else{
        $("#sidebar").addClass('active')
    }

    ////////// on RESIZE get window size and set sidebar //////////
    $(window).on("resize", function () {
        if (window.innerWidth < 1200) {
            $("#sidebar").removeClass('active')
        }
        else{
            $("#sidebar").addClass('active')
        }
    });
});