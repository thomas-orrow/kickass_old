$(function() {
 var box = $("#fixhead"); // float-fixed block
 $("#fixcell").css("margin-top", 0 );
 $("#fixmenu").css("margin-top", 0 );
 var margin = parseFloat(box.css("margin-top").replace(/auto/, 0));
 var top = box.position().top - margin;
 $(window).scroll(headPlace = function(){
  var windowpos = $(window).scrollTop();
  if ( windowpos < top ) {
   box.css("top", $("#fixstring").outerHeight(true) - windowpos + "px" );
  } else {
   box.css("top", 0);
   if ( windowpos < box.position().top ) {
    box.css("margin-top", $("#fixstring").outerHeight(true) + margin - windowpos + "px" );
   } else {
    box.css("margin-top",0);
   };
  };
  div2top = box.position().top + box.outerHeight();
  $("#fixcell").css("top", div2top + "px" );
  if ( $("#fixcell").css("display") !== "none" ) {
	$("#fixmenu").css("top", $("#fixcell").outerHeight(true) + div2top - 1 + "px" );
  } else {
	$("#fixmenu").css("top", div2top - 1 + "px" );
  };
 })
 .resize(headPlace);
 headPlace();
});