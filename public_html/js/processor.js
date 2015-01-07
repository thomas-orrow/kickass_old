// определение глобальных переменных
var width1 = 600; // первая граница адаптивки, до которой показывается одна колонка
var width2 = 900; // вторая граница адаптивки, до которой показывается две колонки
var initialHeight;
var currentHeight;
var initialWidth;
var currentWidth;
var intitialColumns;
var currentColumns;
var intitialStatus;
var currentStatus;
var myWindow = document.documentElement;
var GridList = new Object();
var MessagesList = new Object();
var markRector = 3; //амплитуда колебания
var markStopIt = 0;
var markA = 1;
var shakeCounter = 1;
var shake = new Object();
// функция определения стартового состояния приложения
function classifyWidth(measuredWidth) {
    if (measuredWidth < width1) {
        return 1;
    } else {
        if (measuredWidth < width2) {
            return 2;
        } else {
            return 3;
        }
    }
}
function iniStat(startColumns) {
    switch (startColumns) {
        case 1:
            initialStatus = 1;
            break;
        case 2:
            initialStatus = 4;
            break;
        case 3:
            initialStatus = 7;
            break;
    }
    return initialStatus;
}
//высота футера
function footerSize() {
    var footerShow = $('.main-footer').css('display');
    if (footerShow === 'block') {
        var footerSize = $('.main-footer').outerHeight(true);
    } else {
        var footerSize = 0;
    }
    return footerSize;
}
//высота контейнера
function newSizeOfContainer() {
    var sizeOfHead = $('.main-caption').outerHeight(true);
    var sizeOfTabs = $('.tab-bar').outerHeight(true);
    var sizeOfToolbar = $('.toolbar').outerHeight(true);
    var sizeOfPanels = $('.panel-container').outerHeight(true);
    var sizeOfFooter = footerSize();
    var sizeOfInterface = sizeOfHead + sizeOfTabs + sizeOfToolbar + sizeOfPanels + sizeOfFooter;
    var sizeOfBody = $('body').outerHeight(true); //зачем это надо?
    var sizeOfContainer = myWindow.clientHeight - sizeOfInterface;
    return sizeOfContainer;
}
//ФУНКЦИЯ ОБЩЕНИЯ ПО AJAX (получение данных)
function requestCommutator(fname, firstArg) {
    switch (fname) {
        case 'getList':
            GridList =  {
                    "352": {
                        "priority": "high",
                        "subj": "Только что поставленная прочитанная важная задача с кучей переписки",
                        "read": true,
                        "status": "acquaintance",
                        "overdue": null,
                        "archive": false,
                        "from": "username1",
                        "to": "username2",
                        "envelope": "1025",
                        "flag": false,
                        "files": {
                            "1234": {
                                "filename": "file1.doc",
                                "fileurl": "http://domain.com/file1.doc"
                            },
                            "5637": {
                                "filename": "file2.doc",
                                "fileurl": "http://domain.com/file2.doc"
                            },
                            "5639": {
                                "filename": "file3.doc",
                                "fileurl": "http://domain.com/file3.doc"
                            }
                        }
                    },
                    "444": {
                        "priority": "urgent",
                        "subj": "Выполняемая срочная непрочитанная задача",
                        "read": false,
                        "status": "accepted",
                        "overdue": null,
                        "archive": false,
                        "from": "username1",
                        "to": "username2",
                        "envelope": "2", 
                        "flag": true,
                        "files": false
                    },
                    "447": {
                        "priority": "normal",
                        "subj": "Выполняемая обычная прочитанная задача",
                        "read": true,
                        "status": "accepted",
                        "overdue": null,
                        "archive": false,
                        "from": "username1",
                        "to": "username2",
                        "envelope": "0", 
                        "flag": false,
                        "files": false
                    },
                    "448": {
                        "priority": "extra",
                        "subj": "Выполняемая авральная прочитанная задача",
                        "read": true,
                        "status": "accepted",
                        "overdue": false,
                        "archive": false,
                        "from": "username1",
                        "to": "username2",
                        "envelope": "0", 
                        "flag": false,
                        "files": false
                    },
                    "449": {
                        "priority": "low",
                        "subj": "Выполняемая маловажная прочитанная задача",
                        "read": true,
                        "status": "accepted",
                        "overdue": null,
                        "archive": false,
                        "from": "username1",
                        "to": "username2",
                        "envelope": "0", 
                        "flag": false,
                        "files": false
                    },
                    "445": {
                        "priority": "low",
                        "subj": "Отклоненная неважная прочитанная задача, край которой красиво исчезает",
                        "read": true,
                        "status": "rejected",
                        "overdue": false,
                        "archive": false,
                        "from": "username1",
                        "to": "username2",
                        "envelope": "0", 
                        "flag": false,
                        "files": false
                    },
                    "446": {
                        "priority": "normal",
                        "subj": "Выполненная обычная непрочитанная задача, которую надо проверить и у которой очень длинное название, которое не влезет в поле...",
                        "read": false,
                        "status": "completed",
                        "overdue": false,
                        "archive": false,
                        "from": "username1",
                        "to": "username2",
                        "envelope": "1", 
                        "flag": false,
                        "files": false
                    },
                    "461": {
                        "priority": "normal",
                        "subj": "Обычная непрочитанная неутвержденная старая задача",
                        "read": false,
                        "status": "completed",
                        "overdue": null,
                        "archive": true,
                        "from": "username1",
                        "to": "username2",
                        "envelope": "0",
                        "flag": false,
                        "files": false
                    },
                    "463": {
                        "priority": "normal",
                        "subj": "Обычная прочитанная утвержденная старая задача",
                        "read": true,
                        "status": "approved",
                        "overdue": null,
                        "archive": true,
                        "from": "username1",
                        "to": "username2",
                        "envelope": "0",
                        "flag": false,
                        "files": false
                    },
                    "462": {
                        "priority": "high",
                        "subj": "Важная прочитанная и утвержденная старая задача",
                        "read": true,
                        "status": "approved",
                        "overdue": true,
                        "archive": true,
                        "from": "username1",
                        "to": "username2",
                        "envelope": "0",
                        "flag": false,
                        "files": false
                    },
                    "464": {
                        "priority": "urgent",
                        "subj": "Срочная непрочитанная и утвержденная старая задача",
                        "read": false,
                        "status": "approved",
                        "overdue": true,
                        "archive": true,
                        "from": "username1",
                        "to": "username2",
                        "envelope": "0",
                        "flag": false,
                        "files": false
                    }
                };
            return GridList;
            break;
        case 'getText':
            var txtId = firstArg;
            var recordText = 'Тестовый текст главного поля рекорда';
            return recordText;
            break;
        case 'getMessages':
            var mesId = firstArg;
            MessagesList[mesId] = {
                "5": {
                    "date": "today",
                    "time": "10:00",
                    "from": "userid_08973626",
                    "to": null,
                    "fromName": "Ivan Pushilin",
                    "toName": null,
                    "personal": false,
                    "reply": null,
                    "read": true,
                    "text": "Сообщение, написанное сегодня!"
                },
                "4": {
                    "date": "15/01/2015",
                    "time": "14:30",
                    "from": "userid_08973626",
                    "to": "userid_08973625",
                    "fromName": "Ivan Pushilin",
                    "toName": "Igor Ivanov",
                    "personal": false,
                    "reply": 2,
                    "read": false,
                    "text": "Сообщение-ответ к задаче, адресованное лично, но видимое всем"
                },
                "3": {
                    "date": "14/01/2015",
                    "time": "11:07",
                    "from": "userid_08973625",
                    "to": "userid_08973626",
                    "fromName": "Igor Ivanov",
                    "toName": "Ivan Pushilin",
                    "personal": true,
                    "reply": null,
                    "read": true,
                    "text": "Сообщение к задаче, адресованное лично, невидимое всем"
                },
                "2": {
                    "date": "14/01/2015",
                    "time": "11:05",
                    "from": "userid_08973625",
                    "to": "userid_08973626",
                    "fromName": "Igor Ivanov",
                    "toName": "Ivan Pushilin",
                    "personal": false,
                    "reply": null,
                    "read": true,
                    "text": "Сообщение к задаче, адресованное лично, но видимое всем"
                },
                "1": {
                    "date": "12/01/2015",
                    "time": "16:01",
                    "from": "userid_08973625",
                    "to": null,
                    "fromName": "Igor Ivanov",
                    "toName": null,
                    "personal": false,
                    "reply": null,
                    "read": true,
                    "text": "Сообщение к задаче, адресованное всем, кто видит эту задачу"
                }
            };
            return MessagesList[mesId];
            break;
    }
}
function getSubject(recordId) {
    // получение в объекте GridList темы по ID
    var recSubject = 'Текст сообщения найти не удалось...';
    if (GridList) {
        recSubject = GridList[recordId].subj;
    }
    return recSubject;
}
function showGrid(tabName, pageNumber) {
    var lineCode;
    var fromTo;
    var priorityClass;
    var subjStatus;
    var subjRead;
    var subjArchived;
    var subjOverdue;
    var coverImg;
    var flagIcon;
    var clipIcon;
    var enveIcon;
    $('.grid-box').empty();
    for (var key in GridList) {
        switch (GridList[key].archive) {
            case true:
                subjArchived = 'archive-true';
                break;
            case false:
                subjArchived = 'archive-false';
                break;
        }
        switch (GridList[key].overdue) {
            case true:
                subjOverdue = 'overdue-true';
                break;
            case false:
                subjOverdue = 'overdue-false';
                break;
            default:
                subjOverdue = '';
                break;
        }
        switch (GridList[key].status) {
            case 'acquaintance':
                subjStatus = 'status-acquaintance';
                coverImg = 'grad_white.png';
                break;
            case 'rejected':
                subjStatus = 'status-rejected';
                coverImg = 'grad_lightpink.png';
                break;
            case 'accepted':
                subjStatus = 'status-accepted';
                coverImg = 'grad_gainsboro.png';
                break;
            case 'completed':
                subjStatus = 'status-completed';
                coverImg = 'grad_lightgreen.png';
                break;
            case 'approved':
                subjStatus = 'status-approved';
                coverImg = 'grad_lightskyblue.png';
                break;
        }
        switch(GridList[key].priority) {
            case 'low':
                 priorityClass = 'class=\"grid-line priority-low '+subjArchived+' '+subjStatus+'\"';
                 break;
            case 'normal':
                 priorityClass = 'class=\"grid-line priority-normal '+subjArchived+' '+subjStatus+'\"';
                 break;
            case 'high':
                 priorityClass = 'class=\"grid-line priority-high '+subjArchived+' '+subjStatus+'\"';
                 break;
            case 'urgent':
                 priorityClass = 'class=\"grid-line priority-urgent '+subjArchived+' '+subjStatus+'\"';
                 break;
            case 'extra':
                 priorityClass = 'class=\"grid-line priority-extra '+subjArchived+' '+subjStatus+'\"';
                 break;
        }
        switch (GridList[key].read) {
            case true:
                subjRead = 'read-true';
                break;
            case false:
                subjRead = 'read-false';
                break;
        }
        switch(tabName) {
            case 'inbox':
                fromTo = '        <span>'+Text[401]+' '+'<\/span><span class=\"user-name\">'+GridList[key].from+'<\/span>\n';
                break;
            case 'outbox':
                fromTo = '        <span>'+Text[402]+' '+'<\/span><span class=\"user-name\">'+GridList[key].to+'<\/span>\n';
                break;
            case 'all':
                fromTo = '        <span>'+Text[401]+' '+'<\/span><span class=\"user-name\">'+GridList[key].from+';&nbsp;&nbsp;<\/span>        <span>'+Text[402]+' '+'<\/span><span class=\"user_name\">'+GridList[key].to+'<\/span>\n';
                break;
        }
        switch(GridList[key].flag) {
            case true:
                flagIcon = 'flag-true';
                break;
            case false:
                flagIcon = 'flag-false';
                break;
        }
        if ( GridList[key].envelope === '0') {
                enveIcon = '<div class=\"mark envelope envelope-false\">';
            } else {
                enveIcon = '<div class=\"mark envelope envelope-true\"><span>'+GridList[key].envelope+'</span>';
        }
        if ( GridList[key].files === false) {
                clipIcon = '<div class=\"mark clip clip-false menu-btn\" data-group=\"mt_'+key+'\"><div>\n    <img src="img/noclip24.png" alt=""/>\n<\/div>\n<div class=\"mt-menu menu5\" data-group="mt_'+key+'\">\n<ul>\n<li><span class=\"file-add\" id=\"'+key+'\">attach file<\/span><\/li>\n<\/ul>\n<\/div>\n';
            } else {
                var filesMenu = '';
                for (var filekey in GridList[key].files) {
                    filesMenu = ''+filesMenu+'<li><a href=\"'+GridList[key].files[filekey].fileurl+'\">'+GridList[key].files[filekey].filename+'<\/a><\/li>\n';
                }
                clipIcon = '<div class=\"mark clip clip-true menu-btn\" data-group=\"mt_'+key+'\"><div>\n    <img src="img\/isclip24.png" alt=""/>\n<\/div>\n<div class=\"mt-menu menu5\" data-group="mt_'+key+'\">\n<ul>\n'+filesMenu+'<li><span class=\"file-add\" id=\"'+key+'\">attach file<\/span><\/li>\n<\/ul>\n<\/div>\n';
        }
        lineCode = '\n<div '+priorityClass+' id=\"'+key+'\" data-active=\"false\">\n    <span><\/span>\n    <div class=\"subj '+subjRead+' '+subjOverdue+'\">\n'+GridList[key].subj+'<img class=\"cover\" width=\"48\" height=\"24\" alt=\"\" src=\"img\/'+coverImg+'\">\n<\/div>\n    <div>\n        '+clipIcon+'<\/div>\n        '+enveIcon+'<\/div>\n        <div class=\"mark flag '+flagIcon+'\"><\/div>\n'+fromTo+'    <\/div>\n<\/div>\n';
        $('.grid-box').append(lineCode);
    }
}

function showMessages(recId) {
    var mesCode = '';
    var to;
    var mesDate;
    var mesTime;
    var mesText;
    MessagesList = requestCommutator('getMessages',recId);
    for (var key in MessagesList) {
        switch (MessagesList[key].date) {
            case 'today':
                mesDate = '    <span>'+Text[1001]+'<\/span>\n';
                break;
            default:
                mesDate = '    <span>'+MessagesList[key].date+'<\/span>\n';
                break;
        }
        if (MessagesList[key].to === null) {
            to = '';
        } else {
            switch (MessagesList[key].reply) {
                case null:
                    to = '    <span>'+Text[1002]+'<\/span>\n<span class=\"user-name\" data-user=\"'+MessagesList[key].to+'\">'+MessagesList[key].toName+'<\/span>\n';
                    break;
                default:
                    to = '    <span><a href=\"#mes_'+key+'\">'+Text[1003]+'<\/a><\/span>\n<span class=\"user-name\" data-user=\"'+MessagesList[key].to+'\">'+MessagesList[key].toName+'<\/span>\n';
                    break;
            }
        }
        switch (MessagesList[key].read) {
            case true:
                mesText = '\" data-read=\"true\">'+MessagesList[key].text+'';
                break;
            case false:
                mesText = '\" data-read=\"false\">'+MessagesList[key].text+'';
                break;
        }
        mesCode = ''+mesCode+'<div>\n    <a name=\"mes_'+key+'\"><\/a>\n    <span class=\"user-name\" data-user=\"'+MessagesList[key].from+'\">'+MessagesList[key].fromName+'<\/span>\n'+to+'<span class=\"message'+mesText+'<\/span>\n'+mesDate+'    <span>'+MessagesList[key].time+'<\/span>\n    <span class=\"reply\">'+Text[1004]+'</span>\n<\/div>\n';
    }
    $('.messages-list').empty();
    $('.messages-list').append(mesCode);
}

//Функция замены маркера текстом
function txtAdd() {
    $('.txt').each(function() {
        var txtId = $(this).attr('data-txtid');
        $(this).append(Text[txtId]);
    });
}

//ИНИЦИАЛИЗАЦИЯ ОКНА
$(document).ready(function(){
    // меряем размеры загруженного окна
    initialHeight = myWindow.clientHeight;
    currentHeight = initialHeight;
    initialWidth = myWindow.clientWidth;
    currentWidth = initialWidth;
    initialColumns = classifyWidth(initialWidth);
    currentColumns = initialColumns;
    initialStatus = iniStat(initialColumns);
    currentStatus = initialStatus;
    requestCommutator('getList'); //тестовый вызов при старте, чтобы получить массив
    // заполнение строками
    showGrid('inbox', 1);
    txtAdd();
    //добавить размещение пейджинга
});
//Функция ховера картинки
function rattleInit(which){
    markStopIt = 0;
    shake = which;
    $(shake).css('left', 0);
    $(shake).css('top', 0);
}
function rattleImage(){
    var markTop;
    var markLeft;
    if ((!document.all && !document.getElementById) || markStopIt === 1 || shakeCounter > 3) {
        return;
    }
    switch (markA) {
        case 1:
            markTop = parseInt($(shake).css('top')) + markRector;
            $(shake).css('top',markTop);
            break;
        case 2:
            markLeft = parseInt($(shake).css('left')) + markRector;
            $(shake).css('left',markLeft); 
            break;
        case 3:
            markTop = parseInt($(shake).css('top')) - markRector;
            $(shake).css('top',markTop);
            break;
        default:
            markLeft = parseInt($(shake).css('left')) - markRector;
            $(shake).css('left',markLeft); 
            break;
    }
    if (markA < 4) {
        markA++;
    } else {
        markA = 1;
        shakeCounter++;
    }
    setTimeout(rattleImage, 50);
}
function stopRattle(which){
    markStopIt = 1;
    shakeCounter = 1;
    $(which).css('left',0);
    $(which).css('top',0);
}
$(document).ready(function() {
    $('.mark').mouseover(function() {
        rattleInit(this);
        rattleImage();
    });
    $('.mark').mouseout(function() {
        stopRattle(this);
    });
});
$(document).ready(function(){
// первичная отстройка гридов по высоте
    var newSize = newSizeOfContainer();
    $(".tab-container").height(newSize);
    $(".grid-box").height(newSize);
    $(".record-box").height(newSize);
    $(".message-box").height(newSize);
    $(".message-call").height(newSize);
    $(".message-remove").height(newSize);
    var mesSize = newSize - $('.block-caption').outerHeight(true) - $('.messages-toolbar').outerHeight(true) - $('.message-add').outerHeight(true);
    $(".messages-list").height(mesSize);
//ФУНКЦИИ СМЕН СТАТУСОВ БЕЗ РЕСАЙЗА (щелчки по кнопкам)
    $('.grid-line').on('click', function(f) { // проверить, можно ли фокус или писать неповторный клик
        var isActive = $( this ).attr( 'data-active' );
        // сначала проверяем активна ли строка
        if ( isActive === 'false' ) {
            $('[data-active="true"]').attr( 'data-active', 'false' ); // активные делаем неактивными
            $( this ).attr( 'data-active', 'true' ); // делаем активной текущую
            var currentId = $( this ).attr( 'id' ); // получаем id текущей строки
            var recordText = requestCommutator('getText', currentId);// получаем по ajax текст сообщения по полученному id
            var recordSubject = getSubject(currentId);
            $('.record').children('h3').empty();// заполнение темы рекорда
            $('.record').children('h3').append(recordSubject);
            $('.record').children('p').empty();// заполнение темы рекорда
            $('.record').children('p').append(recordText);
            showMessages(currentId); //в любом случае показываем сообщения хоть и на заднем плане
        }
// функция перехода со статуса 1 на статус 2 (открытие рекорда в одноколоночном варианте)
        if ((currentStatus === 1 || currentStatus === 2 || currentStatus === 3) && ($(f.target).closest('.envelope').length === 0) && ($(f.target).closest('.clip').length === 0) && ($(f.target).closest('.flag').length === 0) ) {
            $('.message-box').hide();
            $('.grid-box').hide();
            $('.message-remove').hide();
            $('.record-box').show();
            $('.record-box').css('display', 'inline-block');
            $('.message-call').show();
            $('.message-call').css('display', 'inline-block');
//            var currentId = $( this ).attr( 'id' ); // получаем id текущей строки
//            showMessages(currentId);
            currentStatus = 2;
        }
// функция перехода со статуса 5 на статус 4 (закрытие сообщений и возврат к списку с текстом в двухколоночном варианте)
        if ((currentStatus === 5) && ($(f.target).closest('.envelope').length === 0) && ($(f.target).closest('.clip').length === 0) && ($(f.target).closest('.flag').length === 0) ) {
            $('.message-box').hide();
            $('.message-remove').hide();
            $('.record-box').show();
            $('.record-box').css('display', 'inline-block');
            $('.message-call').show();
            $('.message-call').css('display', 'inline-block');
            currentStatus = 4;
        }
// функция перехода со статуса 4 на статус 4 (просто открытие сообщения)
//        if ((currentStatus === 4) && ($(f.target).closest('.envelope').length === 0) && ($(f.target).closest('.clip').length === 0) && ($(f.target).closest('.flag').length === 0) ) {
//            var currentId = $( this ).attr( 'id' ); // получаем id текущей строки
//            showMessages(currentId);
//        }
    });
//клик на КОНВЕРТЕ
    $('.envelope').on('click', function() {
        var recId = $(this).parents('.grid-line:first').attr('id');
        showMessages(recId);
// функция перехода со статуса 1 на статус 3 (открытие сообщений из списка в одноколоночном варианте)
        if (currentStatus === 1) {
            $('.grid-box').hide();
            $('.record-box').hide();
            $('.message-call').hide();
            $('.message-remove').show();
            $('.message-remove').css('display', 'inline-block');
            $('.message-box').show();
            $('.message-box').css('display', 'inline-block');
            currentStatus = 3;
        }
// функция перехода со статуса 4 на статус 5 (открытие сообщений из списка в двухколоночном варианте)
        if (currentStatus === 4) {
            $('.record-box').hide();
            $('.message-call').hide();
            $('.message-remove').show();
            $('.message-remove').css('display', 'inline-block');
            $('.message-box').show();
            $('.message-box').css('display', 'inline-block');
            currentStatus = 5;
        }
    });
//клик на крест у рекорда
    $('.record-close').on('click', function() {
// функция перехода со статуса 2 на статус 1 (закрытие рекорда в одноколоночном варианте)
        if (currentStatus === 2) {
            $('.record-box').hide();
            $('.message-call').hide();
            $('.grid-box').show();
            $('.grid-box').css('display', 'inline-block');
            currentStatus = 1;
        }
    });
//клик на вызов сообщений из текста задачи
//функция перехода со статуса 2 на статус 3 (открытие сообщений из рекорда в одноколоночном варианте)
    $('.message-call').on('click', function() {
        if (currentStatus === 2) {
            $('.record-box').hide();
            $('.message-call').hide();
            $('.message-remove').show();
            $('.message-remove').css('display', 'inline-block');
            $('.message-box').show();
            $('.message-box').css('display', 'inline-block');
            currentStatus = 3;
        }
//функция перехода со статуса 4 на статус 5 (открытие сообщений из рекорда в двухколоночном варианте)
        if (currentStatus === 4) {
            $('.record-box').hide();
            $('.message-call').hide();
            $('.message-remove').show();
            $('.message-remove').css('display', 'inline-block');
            $('.message-box').show();
            $('.message-box').css('display', 'inline-block');
            currentStatus = 5;
        }
    });
// клик на скрытие сообщений (не на крест)
    $('.message-remove').on('click', function() {
// функция перехода со статуса 3 на статус 2 (возврат к рекорду из сообщений в одноколоночном варианте)
        if (currentStatus === 3) {
            $('.message-remove').hide();
            $('.message-box').hide();
            $('.record-box').show();
            $('.record-box').css('display', 'inline-block');
            $('.message-call').show();
            $('.message-call').css('display', 'inline-block');
            currentStatus = 2;
        }
// функция перехода со статуса 5 на статус 4 (возврат к рекорду из сообщений в двухколоночном варианте)
        if (currentStatus === 5) {
            $('.message-remove').hide();
            $('.message-box').hide();
            $('.record-box').show();
            $('.record-box').css('display', 'inline-block');
            $('.message-call').show();
            $('.message-call').css('display', 'inline-block');
            currentStatus = 4;
        }
    });
//клик на крест у сообщений
    $('.message-close').on('click', function() {
// функция перехода со статуса 3 на статус 1 (закрытие сообщений и возврат к списку в одноколоночном варианте)
        if (currentStatus === 3) {
            $('.message-box').hide();
            $('.message-remove').hide();
            $('.grid-box').show();
            $('.grid-box').css('display', 'inline-block');
            currentStatus = 1;
        }
// функция перехода со статуса 5 на статус 4 (закрытие сообщений и возврат к списку в одноколоночном варианте)
        if (currentStatus === 5) {
            $('.message-box').hide();
            $('.message-remove').hide();
            $('.record-box').show();
            $('.record-box').css('display', 'inline-block');
            $('.grid-box').show();
            $('.grid-box').css('display', 'inline-block');
            $('.message-call').show();
            $('.message-call').css('display', 'inline-block');
            currentStatus = 4;
        }
    });
//функция ресайза и смены статусов - временно выключена !!!!!!
    $(window).resize(function(){
            var newWidth;
            var endWidth;
            newWidth = myWindow.clientWidth;
            function stopWidth() {
                endWidth = myWindow.clientWidth;
                    if (endWidth === newWidth) {
                        var endColumns = classifyWidth(endWidth);
                            if (endColumns !== currentColumns) {
// здесь все варианты смены статусов и перерисовки
                                //
                                switch (currentColumns) {
                                    case 1: //было 1
                                        switch (endColumns) {
                                            //стало 2
                                            case 2:
                                                switch (currentStatus) {
                                                    //был статус 1
                                                    case 1:
                                                        $('.record-box').show();
                                                        $('.record-box').css('display', 'inline-block');
                                                        $('.message-call').show();
                                                        $('.message-call').css('display', 'inline-block');
                                                        currentStatus = 4;
                                                        break;
                                                    //был статус 2
                                                    case 2:
                                                        $('.grid-box').show();
                                                        $('.grid-box').css('display', 'inline-block');
                                                        currentStatus = 4;
                                                        break;
                                                    //был статус 3
                                                    case 3:
                                                        $('.grid-box').show();
                                                        $('.grid-box').css('display', 'inline-block');
                                                        currentStatus = 5;
                                                        break;
                                                }
                                                break;
                                            //стало 3
                                            case 3:
                                                switch (currentStatus) {
                                                    //был статус 1
                                                    case 1:
                                                        $('.record-box').show();
                                                        $('.record-box').css('display', 'inline-block');
                                                        $('.message-box').show();
                                                        $('.message-box').css('display', 'inline-block');
                                                        currentStatus = 7;
                                                        break;
                                                    //был статус 2
                                                    case 2:
                                                        $('.grid-box').show();
                                                        $('.grid-box').css('display', 'inline-block');
                                                        $('.message-call').hide();
                                                        $('.message-box').show();
                                                        $('.message-box').css('display', 'inline-block');
                                                        currentStatus = 7;
                                                        break;
                                                    //был статус 3
                                                    case 3:
                                                        $('.grid-box').show();
                                                        $('.grid-box').css('display', 'inline-block');
                                                        $('.message-remove').hide();
                                                        $('.record-box').show();
                                                        $('.record-box').css('display', 'inline-block');
                                                        currentStatus = 7;
                                                        break;
                                                }
                                                break;
                                        }
                                        break;
                                    case 2: //было 2
                                        switch (endColumns) {
                                        //стало 1
                                        case 1:
                                            switch (currentStatus) {
                                                //был статус 4
                                                case 4:
                                                    currentStatus = 1;
                                                    break;
                                                //был статус 5
                                                case 5:
                                                    $('.grid-box').hide();
                                                    $('.message-remove').show();
                                                    $('.message-remove').css('display', 'inline-block');
                                                    $('.message-box').show();
                                                    $('.message-box').css('display', 'inline-block');
                                                    currentStatus = 3;
                                                    break;
                                            }
                                            break;
                                        //стало 3
                                        case 3:
                                            switch (currentStatus) {
                                                //был статус 4
                                                case 4:
                                                    $('.message-remove').hide();
                                                    $('.message-call').hide();
                                                    $('.message-box').show();
                                                    $('.message-box').css('display', 'inline-block');
                                                    $('.record-box').show();
                                                    $('.record-box').css('display', 'inline-block');
                                                    currentStatus = 7;
                                                    break;
                                                //был статус 5
                                                case 5:
                                                    $('.message-remove').hide();
                                                    $('.message-call').hide();
                                                    $('.message-box').show();
                                                    $('.message-box').css('display', 'inline-block');
                                                    $('.record-box').show();
                                                    $('.record-box').css('display', 'inline-block');
                                                    currentStatus = 7;
                                                    break;
                                            }
                                            break;
                                        }
                                        break;
                                    case 3: //было 3
                                        switch (endColumns) {
                                            //стало 2
                                            case 2:
                                                $('.message-box').hide();
                                                $('.message-remove').hide();
                                                $('.message-call').show();
                                                $('.message-call').css('display', 'inline-block');
                                                currentStatus = 4;
                                                break;
                                            //стало 1
                                            case 1:
                                                $('.message-box').hide();
                                                $('.message-remove').hide();
                                                $('.message-call').hide();
                                                $('.record-box').hide();
                                                currentStatus = 1;
                                                break;
                                        }
                                        break;
                                }
                                currentColumns = endColumns;
                            }
                    }
            }
            setTimeout(stopWidth, 500);
    });
//ресайз высоты -! работает на следующем шаге !!!!
    $(window).resize(function(){
        var newHeight;
        var endHeight;
        newHeight = myWindow.clientHeight;
        function stopHeight() {
            endHeight = myWindow.clientHeight;
            if ((endHeight === newHeight) && (endHeight !== currentHeight)) {
                var newHeightOfContainer = newSizeOfContainer();
                $(".tab-container").height(newHeightOfContainer);
                $(".grid-box").height(newHeightOfContainer);
                $(".record-box").height(newHeightOfContainer);
                $(".message-box").height(newHeightOfContainer);
                $(".message-call").height(newHeightOfContainer);
                $(".message-remove").height(newHeightOfContainer);
                var mesSize = newHeightOfContainer - $('.block-caption').outerHeight(true) - $('.messages-toolbar').outerHeight(true) - $('.message-add').outerHeight(true);
                $(".messages-list").height(mesSize);
                currentHeight = endHeight;
            }
        }
        setTimeout(stopHeight, 500);
    });
});



//
//
//
//
//
////$(document).ready(function() {
 //$.getJSON('http://imho-design.ru/examples/json-test.js', function(json) { // получение информации о пользователе @ usejquery 
 //$('#twitter_followers').text(json.followers_count); // получение числа фоллоуверов из json объекта и размещение в 
 //});
//});