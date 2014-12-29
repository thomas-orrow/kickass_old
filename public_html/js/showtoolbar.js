//unfix выключает bar и включает иконку
$(document).ready(function(){
    $('.fixbar').bind('click', function() {
        var mtGroup = $( this ).attr( 'data-group' );
        $(".bar[data-group='" +mtGroup+ "']").show();
        $(".menu_btn[data-group='" +mtGroup+ "']").hide();
    });
});
$(document).ready(function(){
    $('.unfixbar').bind('click', function() {
        var mtGroup = $( this ).attr( 'data-group' );
        $(".bar[data-group='" +mtGroup+ "']").hide();
        $(".menu_btn[data-group='" +mtGroup+ "']").show();
    });
});