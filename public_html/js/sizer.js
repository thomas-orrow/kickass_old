var myWindow = document.documentElement;
var currentHeight = myWindow.clientHeight;
function footerSize() {
    var footerShow = $('.main-footer').css('display');
    if (footerShow === 'block') {
        var footerSize = $('.main-footer').outerHeight(true);
    } else {
        var footerSize = 0;
    }
    return footerSize;
}
function newSizeOfContainer() {
    var sizeOfHead = $('.main-caption').outerHeight(true);
    var sizeOfTabs = $('.tab-bar').outerHeight(true);
    var sizeOfToolbar = $('.toolbar').outerHeight(true);
    var sizeOfPanels = $('.panel-container').outerHeight(true);
    var sizeOfFooter = footerSize();
    var sizeOfInterface = sizeOfHead + sizeOfTabs + sizeOfToolbar + sizeOfPanels + sizeOfFooter;
    var sizeOfBody = $('body').outerHeight(true);
    var sizeOfContainer = sizeOfBody - sizeOfInterface;
    return sizeOfContainer;
}
$(document).ready(function(){
    var newSize = newSizeOfContainer();
    $(".tab-container").height(newSize);
    var mesFrame = '<iframe width="100%" height="'+newSize+'" src="messages.html">';
    $(".message-box").empty();
    $(".message-box").append(mesFrame);
});
$(window).resize(function(){
    var newHeight;
    var endHeight;
    newHeight = myWindow.clientHeight;
    function stopHeight() {
        endHeight = myWindow.clientHeight;
            if ((endHeight === newHeight) && (endHeight !== currentHeight)) {
                var newSize = newSizeOfContainer();
                $(".tab-container").height(newSize);
                var mesFrame = '<iframe width="100%" height="'+newSize+'" src="messages.html">';
                $(".message-box").empty();
                $(".message-box").append(mesFrame);
                currentHeight = endHeight;
            }
    }
    setTimeout(stopHeight, 500);
});