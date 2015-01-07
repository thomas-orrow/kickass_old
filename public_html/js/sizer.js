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





var orderChanged = 'false';
$(document).ready(function(){
    $('.message-call').on('click', function() {
        $('.record-box').hide();
        $('.message-call').hide();
        $('.message-remove').show();
        $('.message-remove').css('display', 'table-cell');
        $('.message-box').show();
        $('.message-box').css('display', 'table-cell');
        orderChanged = 'true';
    });
});
$(document).ready(function(){
    $('.message-remove').on('click', function() {
        $('.message-remove').hide();
        $('.message-box').hide();
        $('.record-box').show();
        $('.message-call').show();
        orderChanged = 'true';
    });
});
$(document).ready(function(){
    var docWindow = document.documentElement;
    var initialWidth = docWindow.clientWidth;
    var initialRange = classifyWidth(initialWidth);
    $(window).resize(function(){
        if (orderChanged === 'true') {
            var newWidth;
            var endWidth;
            newWidth = docWindow.clientWidth;
            function stopWidth() {
                endWidth = docWindow.clientWidth;
                    if (endWidth === newWidth) {
                        var endRange = classifyWidth(endWidth);
                            if (endRange !== initialRange) {
                                window.location.reload();
                            }
                    }
            }
            setTimeout(stopWidth, 500);
        } else {
            var newWidth;
            var endWidth;
            newWidth = docWindow.clientWidth;
            function stWidth() {
                endWidth = docWindow.clientWidth;
                    if (endWidth === newWidth) {
                        var endRange = classifyWidth(endWidth);
                            if (endRange !== initialRange) {
                                initialRange = endRange;
                            }
                    }
            }
            setTimeout(stWidth, 500);
        }
    });
});