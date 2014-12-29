$(document).ready(function(){
    $('.menu_btn').bind('click', function() {
        var mtGroup = $( this ).attr( 'data-group' );
        $(".mt_menu[data-group='" +mtGroup+ "']").show();
    });
});