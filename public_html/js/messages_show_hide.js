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
    var textBorder = 600;
    var mesBorder = 900;
    var docWindow = document.documentElement;
    var initialWidth = docWindow.clientWidth;
    function classifyWidth(measuredWidth) {
        if (measuredWidth < textBorder) {
            return 1;
        } else {
            if (measuredWidth < mesBorder) {
                return 2;
            } else {
                return 3;
            }
        }
    }
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
        }
        if (orderChanged === 'false') {
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
            setTimeout(stopWidth, 500);
        }
    });
});