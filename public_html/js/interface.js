//function classifyWidth(measuredWidth) {
//    var textBorder = 600;
//    var mesBorder = 900;
//    if (measuredWidth < textBorder) {
//        return 1;
//    } else {
//        if (measuredWidth < mesBorder) {
//            return 4;
//        } else {
//            return 7;
//        }
//    }
//}
//var orderChanged = 'false';
//$(document).ready(function(){
//    $('.message-call').on('click', function() {
//        $('.record-box').hide();
//        $('.message-call').hide();
//        $('.message-remove').show();
//        $('.message-remove').css('display', 'table-cell');
//        $('.message-box').show();
//        $('.message-box').css('display', 'table-cell');
//        orderChanged = 'true';
//    });
//});
//$(document).ready(function(){
//    $('.message-remove').on('click', function() {
//        $('.message-remove').hide();
//        $('.message-box').hide();
//        $('.record-box').show();
//        $('.message-call').show();
//        orderChanged = 'true';
//    });
//});
//$(document).ready(function(){
//    var docWindow = document.documentElement;
//    var initialWidth = docWindow.clientWidth;
//    var initialRange = classifyWidth(initialWidth);
//    $(window).resize(function(){
//        if (orderChanged === 'true') {
//            var newWidth;
//            var endWidth;
//            newWidth = docWindow.clientWidth;
//            function stopWidth() {
//                endWidth = docWindow.clientWidth;
//                    if (endWidth === newWidth) {
//                        var endRange = classifyWidth(endWidth);
//                            if (endRange !== initialRange) {
//                                window.location.reload();
//                            }
//                    }
//            }
//            setTimeout(stopWidth, 500);
//        } else {
//            var newWidth;
//            var endWidth;
//            newWidth = docWindow.clientWidth;
//            function stWidth() {
//                endWidth = docWindow.clientWidth;
//                    if (endWidth === newWidth) {
//                        var endRange = classifyWidth(endWidth);
//                            if (endRange !== initialRange) {
//                                initialRange = endRange;
//                            }
//                    }
//            }
//            setTimeout(stWidth, 500);
//        }
//    });
//});



//var myWindow = document.documentElement;
//var currentHeight = myWindow.clientHeight;
//function footerSize() {
//    var footerShow = $('.main-footer').css('display');
//    if (footerShow === 'block') {
//        var footerSize = $('.main-footer').outerHeight(true);
//    } else {
//        var footerSize = 0;
//    }
//    return footerSize;
//}
//function newSizeOfContainer() { //перенесено в проц
//    var sizeOfHead = $('.main-caption').outerHeight(true);
//    var sizeOfTabs = $('.tab-bar').outerHeight(true);
//    var sizeOfToolbar = $('.toolbar').outerHeight(true);
//    var sizeOfPanels = $('.panel-container').outerHeight(true);
//    var sizeOfFooter = footerSize();
//    var sizeOfInterface = sizeOfHead + sizeOfTabs + sizeOfToolbar + sizeOfPanels + sizeOfFooter;
//    var sizeOfBody = $('body').outerHeight(true);
//    var sizeOfContainer = sizeOfBody - sizeOfInterface;
//    return sizeOfContainer;
//}

//$(window).resize(function(){
//    var newHeight;
//    var endHeight;
//    newHeight = myWindow.clientHeight;
//    function stopHeight() {
//        endHeight = myWindow.clientHeight;
//            if ((endHeight === newHeight) && (endHeight !== currentHeight)) {
//                var newSize = newSizeOfContainer();
//                $(".tab-container").height(newSize);
//                var mesFrame = '<iframe width="100%" height="'+newSize+'" src="messages.html">';
//                $(".message-box").empty();
//                $(".message-box").append(mesFrame);
//                currentHeight = endHeight;
//            }
//    }
//    setTimeout(stopHeight, 500);
//});





//var orderChanged = 'false';
//$(document).ready(function(){
//    $('.message-call').on('click', function() {
//        $('.record-box').hide();
//        $('.message-call').hide();
//        $('.message-remove').show();
//        $('.message-remove').css('display', 'table-cell');
//        $('.message-box').show();
//        $('.message-box').css('display', 'table-cell');
//        orderChanged = 'true';
//    });
//});
//$(document).ready(function(){
//    $('.message-remove').on('click', function() {
//        $('.message-remove').hide();
//        $('.message-box').hide();
//        $('.record-box').show();
//        $('.message-call').show();
//        orderChanged = 'true';
//    });
//});
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
//вставка значений в строки
var gridList =  {
                    "352": {
                        "priority": "high",
                        "subj": "Сделать котлеты по-киевски",
                        "read": true,
                        "status": "new",
                        "overdue": null,
                        "archive": false,
                        "from": "username1",
                        "to": "username2",
                        "envelope": "1025",
                        "flag": false,
                        "files": [
                            "http://domain.com/file1.doc",
                            "http://domain.com/file2.doc",
                            "http://domain.com/file3.doc"
                        ]
                    },
                    "444": {
                        "priority": "urgent",
                        "subj": "Сходить в магазин",
                        "read": true,
                        "status": "progress",
                        "overdue": false,
                        "archive": false,
                        "from": "username1",
                        "to": "username2",
                        "envelope": "2", 
                        "flag": true,
                        "files": false
                    },
                    "461": {
                        "priority": "normal",
                        "subj": "Доделать внешний функционал Kick-ass",
                        "read": false,
                        "status": "complete",
                        "overdue": true,
                        "archive": true,
                        "from": "username1",
                        "to": "username2",
                        "envelope": "0",
                        "flag": false,
                        "files": false
                    }
                };
$(document).ready(function(){
    
    
    
});