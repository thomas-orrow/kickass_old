$(document).ready(function(){
    $('.menu-btn').on('click', function() {
        var mtGroup = $( this ).attr( 'data-group' );
        $(".mt-menu[data-group='" +mtGroup+ "']").show();
    });
});