// Global variables
var Vars = new Object();
Vars.width1 = 600; // первая граница адаптивки, до которой показывается одна колонка
Vars.width2 = 900; // вторая граница адаптивки, до которой показывается две колонки
Vars.delay = 100; //задержка при перерисовке
Vars.initialHeight;
Vars.currentHeight;
Vars.initialWidth;
Vars.currentWidth;
Vars.initialColumns;
Vars.currentColumns;
Vars.initialStatus;
Vars.currentStatus;
Vars.activeTab;
Vars.activeLine = new Array();
Vars.myWindow = document.documentElement;
Vars.markRector = 3; //амплитуда колебания
Vars.markStopIt = 0;
Vars.markA = 1;
Vars.shakeCounter = 1;
Vars.moreBtns = '';
Vars.dotsSize;
Vars.toolbarSize;
Vars.lineStatus;
Vars.lineParty;
var User = new Object();
//тестовые данные юзера
User.name = 'username2';
User.id = 'userid_08973625';
var Shake = new Object();
var GridList = new Object();
var TabGrid = new Object();
var MessagesList = new Object();
function isEmpty(objName) {
    for (var key in objName) {
        return false;
    }
    return true;
}
function countKeys(objName) {
    var keyCounter = 0;
    for (var key in objName) {
        keyCounter++;
    }
    return keyCounter;
}
// Column pcs
function classifyWidth(measuredWidth) {
    if (measuredWidth < Vars.width1) {
        return 1;
    } else {
        if (measuredWidth < Vars.width2) {
            return 2;
        } else {
            return 3;
        }
    }
}
function iniStat(startColumns) {
    switch (startColumns) {
        case 1:
            Vars.initialStatus = 1;
            break;
        case 2:
            Vars.initialStatus = 4;
            break;
        case 3:
            Vars.initialStatus = 7;
            break;
    }
    return Vars.initialStatus;
}
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
    var sizeOfBody = $('body').outerHeight(true); //зачем это надо?
    var sizeOfContainer = Vars.myWindow.clientHeight - sizeOfInterface;
    return sizeOfContainer;
}
// AJAX
function requestCommutator(fname, firstArg, secondArg, thirdArg) {
    switch (fname) {
        case 'getList':
            //firstArg содержит имя вкладки, secondArc - номер страницы
            switch (firstArg) {
                case  'inbox':
                    if (thirdArg === 'reload') {
                        //отправляем на сарвер, что перезагрузка
                    }
                    //дальше надо добавить, какой пейдж грузим или просто ещё 10
                    GridList = {
                        "352": {
                            "priority": "high",
                            "subj": "Только что поставленная прочитанная важная задача с кучей переписки",
                            "read": true,
                            "status": "usual",
                            "overdue": null,
                            "archive": false,
                            "from": "username1",
                            "fromid": "userid_08973626",
                            "to": "username2",
                            "toid": "userid_08973625",
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
                            "fromid": "userid_08973626",
                            "to": "username2",
                            "toid": "userid_08973625",
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
                            "fromid": "userid_08973626",
                            "to": "username2",
                            "toid": "userid_08973625",
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
                            "fromid": "userid_08973626",
                            "to": "username2",
                            "toid": "userid_08973625",
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
                            "fromid": "userid_08973626",
                            "to": "username2",
                            "toid": "userid_08973625",
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
                            "fromid": "userid_08973626",
                            "to": "username2",
                            "toid": "userid_08973625",
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
                            "fromid": "userid_08973626",
                            "to": "username2",
                            "toid": "userid_08973625",
                            "envelope": "1",
                            "flag": false,
                            "files": false
                        }
                    };
                    break;
                case 'archive':
                    GridList = {
                        "461": {
                            "priority": "normal",
                            "subj": "Обычная непрочитанная неутвержденная старая задача",
                            "read": false,
                            "status": "completed",
                            "overdue": null,
                            "archive": true,
                            "from": "username1",
                            "fromid": "userid_08973626",
                            "to": "username2",
                            "toid": "userid_08973625",
                            "envelope": "0",
                            "flag": false,
                            "files": false
                        },
                        "463": {
                            "priority": "normal",
                            "subj": "Обычная прочитанная утвержденная старая задача",
                            "read": true,
                            "status": "confirmed",
                            "overdue": null,
                            "archive": true,
                            "from": "username2",
                            "fromid": "userid_08973625",
                            "to": "username1",
                            "toid": "userid_08973626",
                            "envelope": "0",
                            "flag": false,
                            "files": false
                        },
                        "462": {
                            "priority": "high",
                            "subj": "Важная прочитанная и утвержденная старая задача",
                            "read": true,
                            "status": "confirmed",
                            "overdue": true,
                            "archive": true,
                            "from": "username1",
                            "fromid": "userid_08973626",
                            "to": "username2",
                            "toid": "userid_08973625",
                            "envelope": "0",
                            "flag": false,
                            "files": false
                        },
                        "464": {
                            "priority": "urgent",
                            "subj": "Срочная непрочитанная и утвержденная старая задача",
                            "read": false,
                            "status": "confirmed",
                            "overdue": true,
                            "archive": true,
                            "from": "username1",
                            "fromid": "userid_08973626",
                            "to": "username2",
                            "toid": "userid_08973625",
                            "envelope": "0",
                            "flag": false,
                            "files": false
                        }
                    };
                    break;
                default:
                    GridList = {
                        "352": {
                            "priority": "high",
                            "subj": "Только что поставленная прочитанная важная задача с кучей переписки",
                            "read": true,
                            "status": "usual",
                            "overdue": null,
                            "archive": false,
                            "from": "username1",
                            "fromid": "userid_08973626",
                            "to": "username2",
                            "toid": "userid_08973625",
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
                        "477": {
                            "priority": "normal",
                            "subj": "От меня",
                            "read": false,
                            "status": "usual",
                            "overdue": null,
                            "archive": false,
                            "from": "username2",
                            "fromid": "userid_08973625",
                            "to": "username1",
                            "toid": "userid_08973626",
                            "envelope": "0",
                            "flag": false,
                            "files": false
                        },
                        "444": {
                            "priority": "urgent",
                            "subj": "Выполняемая срочная непрочитанная задача",
                            "read": false,
                            "status": "accepted",
                            "overdue": null,
                            "archive": false,
                            "from": "username1",
                            "fromid": "userid_08973626",
                            "to": "username2",
                            "toid": "userid_08973625",
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
                            "fromid": "userid_08973626",
                            "to": "username2",
                            "toid": "userid_08973625",
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
                            "fromid": "userid_08973626",
                            "to": "username3",
                            "toid": "userid_08973618",
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
                            "from": "username2",
                            "fromid": "userid_08973625",
                            "to": "username1",
                            "toid": "userid_08973626",
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
                            "fromid": "userid_08973626",
                            "to": "username2",
                            "toid": "userid_08973625",
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
                            "from": "username2",
                            "fromid": "userid_08973625",
                            "to": "username1",
                            "toid": "userid_08973626",
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
                            "fromid": "userid_08973626",
                            "to": "username2",
                            "toid": "userid_08973625",
                            "envelope": "0",
                            "flag": false,
                            "files": false
                        },
                        "463": {
                            "priority": "normal",
                            "subj": "Обычная прочитанная утвержденная старая задача",
                            "read": true,
                            "status": "confirmed",
                            "overdue": null,
                            "archive": true,
                            "from": "username1",
                            "fromid": "userid_08973626",
                            "to": "username2",
                            "toid": "userid_08973625",
                            "envelope": "0",
                            "flag": false,
                            "files": false
                        },
                        "462": {
                            "priority": "high",
                            "subj": "Важная прочитанная и утвержденная старая задача",
                            "read": true,
                            "status": "confirmed",
                            "overdue": true,
                            "archive": true,
                            "from": "username1",
                            "fromid": "userid_08973626",
                            "to": "username2",
                            "toid": "userid_08973625",
                            "envelope": "0",
                            "flag": false,
                            "files": false
                        },
                        "464": {
                            "priority": "urgent",
                            "subj": "Срочная непрочитанная и утвержденная старая задача",
                            "read": false,
                            "status": "confirmed",
                            "overdue": true,
                            "archive": true,
                            "from": "username1",
                            "fromid": "userid_08973626",
                            "to": "username2",
                            "toid": "userid_08973625",
                            "envelope": "0",
                            "flag": false,
                            "files": false
                        }
                    };
                    break;
            }
            if (isEmpty(GridList) === true) {
                return TabGrid[firstArg];
            } else {
                if (isEmpty(TabGrid[firstArg]) === true) {
                    TabGrid[firstArg] = GridList;
                    GridList = new Object();
                } else {
                    for (var key in GridList) {
                        var divId = 'div#' + key;
                        if (GridList[key].removed === true) {
                            if (TabGrid[firstArg][key] !== undefined) {
                                delete TabGrid[firstArg][key];
                                if (Vars.activeTab === firstArg) {
                                    $(divId).remove();
                                }
                            }
                        } else {
                            if (TabGrid[firstArg][key] !== undefined) {
                                TabGrid[firstArg][key] = GridList[key];
                                if (Vars.activeTab === firstArg) {
                                    $(divId).remove();
                                    showLine(firstArg, key);
                                }
                            } else {
                                TabGrid[firstArg][key] = GridList[key];
                                if (Vars.activeTab === firstArg) {
                                    showLine(firstArg, key);
                                }
                            }
                        }
                        delete GridList[key];
                    }
                }
            }
            return TabGrid[firstArg];
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
function getSubject(tabName, recordId) {
    // получение в объекте GridList темы по ID
    var recSubject = 'Текст сообщения найти не удалось...';
    if (isEmpty(TabGrid[tabName]) === false) {
        recSubject = TabGrid[tabName][recordId].subj;
    }
    return recSubject;
}
function showLine(tabName, lineId) {
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
    switch (TabGrid[tabName][lineId].archive) {
        case true:
            subjArchived = 'archive-true';
            break;
        case false:
            subjArchived = 'archive-false';
            break;
    }
    switch (TabGrid[tabName][lineId].overdue) {
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
    switch (TabGrid[tabName][lineId].status) {
        case 'usual':
            subjStatus = 'status-usual';
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
        case 'confirmed':
            subjStatus = 'status-confirmed';
            coverImg = 'grad_lightskyblue.png';
            break;
    }
    switch (TabGrid[tabName][lineId].priority) {
        case 'low':
            priorityClass = 'class=\"grid-line priority-low ' + subjArchived + ' ' + subjStatus + '\"';
            break;
        case 'normal':
            priorityClass = 'class=\"grid-line priority-normal ' + subjArchived + ' ' + subjStatus + '\"';
            break;
        case 'high':
            priorityClass = 'class=\"grid-line priority-high ' + subjArchived + ' ' + subjStatus + '\"';
            break;
        case 'urgent':
            priorityClass = 'class=\"grid-line priority-urgent ' + subjArchived + ' ' + subjStatus + '\"';
            break;
        case 'extra':
            priorityClass = 'class=\"grid-line priority-extra ' + subjArchived + ' ' + subjStatus + '\"';
            break;
    }
    switch (TabGrid[tabName][lineId].read) {
        case true:
            subjRead = 'read-true';
            break;
        case false:
            subjRead = 'read-false';
            break;
    }
    switch (tabName) {
        case 'inbox':
            fromTo = '        <span>' + Text[401] + ' ' + '<\/span><span class=\"user-name\">' + TabGrid[tabName][lineId].from + '<\/span>\n';
            break;
        case 'outbox':
            fromTo = '        <span>' + Text[402] + ' ' + '<\/span><span class=\"user-name\">' + TabGrid[tabName][lineId].to + '<\/span>\n';
            break;
        case 'all':
            fromTo = '        <span>' + Text[401] + ' ' + '<\/span><span class=\"user-name\">' + TabGrid[tabName][lineId].from + ';&nbsp;&nbsp;<\/span>        <span>' + Text[402] + ' ' + '<\/span><span class=\"user_name\">' + TabGrid[tabName][lineId].to + '<\/span>\n';
            break;
    }
    switch (TabGrid[tabName][lineId].flag) {
        case true:
            flagIcon = 'flag-true';
            break;
        case false:
            flagIcon = 'flag-false';
            break;
    }
    if (TabGrid[tabName][lineId].envelope === '0') {
        enveIcon = '<div class=\"mark envelope envelope-false\">';
    } else {
        enveIcon = '<div class=\"mark envelope envelope-true\"><span>' + TabGrid[tabName][lineId].envelope + '</span>';
    }
    if (TabGrid[tabName][lineId].files === false) {
        clipIcon = '<div class=\"mark clip clip-false menu-btn\" data-group=\"mt_' + lineId + '\"><div>\n    <img src="img/noclip24.png" alt=""/>\n<\/div>\n<div class=\"mt-menu menu5\" data-group="mt_' + lineId + '\">\n<ul>\n<li><span class=\"file-add\" id=\"' + lineId + '\">attach file<\/span><\/li>\n<\/ul>\n<\/div>\n';
    } else {
        var filesMenu = '';
        for (var filekey in TabGrid[tabName][lineId].files) {
            filesMenu = '' + filesMenu + '<li><a href=\"' + TabGrid[tabName][lineId].files[filekey].fileurl + '\">' + TabGrid[tabName][lineId].files[filekey].filename + '<\/a><\/li>\n';
        }
        clipIcon = '<div class=\"mark clip clip-true menu-btn\" data-group=\"mt_' + lineId + '\"><div>\n    <img src="img\/isclip24.png" alt=""/>\n<\/div>\n<div class=\"mt-menu menu5\" data-group="mt_' + lineId + '\">\n<ul>\n' + filesMenu + '<li><span class=\"file-add\" id=\"' + lineId + '\">attach file<\/span><\/li>\n<\/ul>\n<\/div>\n';
    }
    lineCode = '\n<div ' + priorityClass + ' id=\"' + lineId + '\" data-active=\"false\">\n    <span><\/span>\n    <div class=\"subj ' + subjRead + ' ' + subjOverdue + '\">\n' + TabGrid[tabName][lineId].subj + '<img class=\"cover\" width=\"48\" height=\"24\" alt=\"\" src=\"img\/' + coverImg + '\">\n<\/div>\n    <div>\n        ' + clipIcon + '<\/div>\n        ' + enveIcon + '<\/div>\n        <div class=\"mark flag ' + flagIcon + '\"><\/div>\n' + fromTo + '    <\/div>\n<\/div>\n';
    return lineCode;
}
function showGrid(tabName) {
    for (var key in TabGrid[tabName]) {
        var line = showLine(tabName, key);
        $('.grid-box').append(line);
    }
}
function showMessages(recId) {
    var mesCode = '';
    var to;
    var mesDate;
    var mesTime;
    var mesText;
    MessagesList = requestCommutator('getMessages', recId);
    for (var key in MessagesList) {
        switch (MessagesList[key].date) {
            case 'today':
                mesDate = '    <span>' + Text[1001] + '<\/span>\n';
                break;
            default:
                mesDate = '    <span>' + MessagesList[key].date + '<\/span>\n';
                break;
        }
        if (MessagesList[key].to === null) {
            to = '';
        } else {
            switch (MessagesList[key].reply) {
                case null:
                    to = '    <span>' + Text[1002] + '<\/span>\n<span class=\"user-name\" data-user=\"' + MessagesList[key].to + '\">' + MessagesList[key].toName + '<\/span>\n';
                    break;
                default:
                    to = '    <span><a href=\"#mes_' + key + '\">' + Text[1003] + '<\/a><\/span>\n<span class=\"user-name\" data-user=\"' + MessagesList[key].to + '\">' + MessagesList[key].toName + '<\/span>\n';
                    break;
            }
        }
        switch (MessagesList[key].read) {
            case true:
                mesText = '\" data-read=\"true\">' + MessagesList[key].text + '';
                break;
            case false:
                mesText = '\" data-read=\"false\">' + MessagesList[key].text + '';
                break;
        }
        mesCode = '' + mesCode + '<div>\n    <a name=\"mes_' + key + '\"><\/a>\n    <span class=\"user-name\" data-user=\"' + MessagesList[key].from + '\">' + MessagesList[key].fromName + '<\/span>\n' + to + '<span class=\"message' + mesText + '<\/span>\n' + mesDate + '    <span>' + MessagesList[key].time + '<\/span>\n    <span class=\"reply\">' + Text[1004] + '</span>\n<\/div>\n';
    }
    $('.messages-list').empty();
    $('.messages-list').append(mesCode);
}
function txtAdd() {
    $('.txt').each(function () {
        var txtId = $(this).attr('data-txtid');
        $(this).append(Text[txtId]);
    });
}
function showInbox() {
    requestCommutator('getList', 'inbox', 1, 'reload'); //тестовый вызов при старте, чтобы получить массив
    // заполнение строками
    showGrid('inbox', 1);
    $('[tab-id="inbox"]').attr('tab-active', 'true');
    Vars.activeTab = 'inbox';
}
//Toolbar functions
function drawButton(btName) {
    var btnTxtId = Buttons[btName].text;
    var btnTxt = Text[btnTxtId];
    var buttonCode = '    <span class=\"toolbar-button\" btn-id=\"' + btName + '\"><span class=\"t-text\">' + btnTxt + '<\/span><\/span>\n';
    return buttonCode;
}
function showDots(moreBtns) {
    var dotsCode = '';
    dotsCode = '                    <div class="menu-btn more" data-group="mt_more">\n                        <div>\n                            ...\n                        </div>\n                        <div class="mt-menu menu4" data-group="mt_more">\n' + moreBtns + '                        </div>\n                    </div>\n';
    return dotsCode;
}
function buttonSizes() {
    $('.ruler').append(showDots(''));
    Vars.dotsSize = $('.ruler .more').outerWidth(true);
    Vars.toolbarSize = $('.ruler').outerWidth(true);
    for (var key in Buttons) {
        $('.ruler').append(drawButton(key));
        var btnId = '.ruler [btn-id="' + key + '"]';
        var btnWidth = $(btnId).outerWidth(true);
        Buttons[key].width = btnWidth;
    }
    $('.ruler').empty();
}
function showToolbar(lineStatus, lineParty) {
    var restWidth = Vars.toolbarSize;
//    var toolbarLength = Object.keys(Toolbar[status][party]).length;
//    alert(toolbarLength);
    var toolbarCode = '';
    var moreCode = '';
    var btName = '';
    for (var key in Toolbar[lineStatus][lineParty]) {
        btName = Toolbar[lineStatus][lineParty][key];
        restWidth = restWidth - Buttons[btName].width;
        if (restWidth > Vars.dotsSize) {
            toolbarCode = '' + toolbarCode + drawButton(btName);
        } else {
            moreCode = '' + moreCode + drawButton(btName);
            restWidth = restWidth + Buttons[btName].width;
        }
    }
    $('.toolbar').empty();
    if (moreCode !== '') {
        $('.toolbar').append(showDots(moreCode));
    }
    $('.toolbar').append(toolbarCode);
}
// Rattle hover function
function rattleInit(which) {
    Vars.markStopIt = 0;
    Shake = which;
    $(Shake).css('left', 0);
    $(Shake).css('top', 0);
}
function rattleImage() {
    var markTop;
    var markLeft;
    if ((!document.all && !document.getElementById) || Vars.markStopIt === 1 || Vars.shakeCounter > 3) {
        return;
    }
    switch (Vars.markA) {
        case 1:
            markTop = parseInt($(Shake).css('top')) + Vars.markRector;
            $(Shake).css('top', markTop);
            break;
        case 2:
            markLeft = parseInt($(Shake).css('left')) + Vars.markRector;
            $(Shake).css('left', markLeft);
            break;
        case 3:
            markTop = parseInt($(Shake).css('top')) - Vars.markRector;
            $(Shake).css('top', markTop);
            break;
        default:
            markLeft = parseInt($(Shake).css('left')) - Vars.markRector;
            $(Shake).css('left', markLeft);
            break;
    }
    if (Vars.markA < 4) {
        Vars.markA++;
    } else {
        Vars.markA = 1;
        Vars.shakeCounter++;
    }
    setTimeout(rattleImage, 50);
}
function stopRattle(which) {
    Vars.markStopIt = 1;
    Vars.shakeCounter = 1;
    $(which).css('left', 0);
    $(which).css('top', 0);
}
function startRattle() {
    $('.grid-box').on('mouseover', '.mark', function () {
        rattleInit(this);
        rattleImage();
    });
    $('.grid-box').on('mouseout', '.mark', function () {
        stopRattle(this);
    });
}
// Height setting
function setInitialHeight() {
    var newSize = newSizeOfContainer();
    $(".tab-container").height(newSize);
    $(".grid-box").height(newSize);
    $(".record-box").height(newSize);
    $(".message-box").height(newSize);
    $(".message-call").height(newSize);
    $(".message-remove").height(newSize);
    var mesSize = newSize - $('.block-caption').outerHeight(true) - $('.messages-toolbar').outerHeight(true) - $('.message-add').outerHeight(true);
    $(".messages-list").height(mesSize);
}
//STATUS functions:
// Subject click
function clickSubject() {
    $('.grid-box').on('click', '.grid-line', function (f) {
        var isActive = $(this).attr('data-active');
        // сначала проверяем активна ли строка
        if (isActive === 'false') {
            $('[data-active="true"]').attr('data-active', 'false'); // активные делаем неактивными
            $(this).attr('data-active', 'true'); // делаем активной текущую
            var currentId = $(this).attr('id'); // получаем id текущей строки
            Vars.activeLine[Vars.activeTab] = currentId; // проставляем переменную активной строки
            if (TabGrid[Vars.activeTab][currentId].deleted === true) {
                Vars.lineStatus = 'deleted';
            } else {
                if (TabGrid[Vars.activeTab][currentId].archive === true) {
                    Vars.lineStatus = 'archived';
                } else {
                    Vars.lineStatus = TabGrid[Vars.activeTab][currentId].status;
                }
            }
            if (TabGrid[Vars.activeTab][currentId].fromid === User.id) {
                Vars.lineParty = 'sender';
            } else {
                if (TabGrid[Vars.activeTab][currentId].toid === User.id) {
                    Vars.lineParty = 'receiver';
                } else {
                    Vars.lineParty = 'reader';
                }
            }
            showToolbar(Vars.lineStatus, Vars.lineParty);
            var recordText = requestCommutator('getText', currentId);// получаем по ajax текст сообщения по полученному id
            var recordSubject = getSubject(Vars.activeTab, currentId);
            $('.record').children('h3').empty();// заполнение темы рекорда
            $('.record').children('h3').append(recordSubject);
            $('.record').children('p').empty();// заполнение темы рекорда
            $('.record').children('p').append(recordText);
            showMessages(currentId); //в любом случае показываем сообщения хоть и на заднем плане
        }
// функция перехода со статуса 1 на статус 2 (открытие рекорда в одноколоночном варианте)
        if ((Vars.currentStatus === 1 || Vars.currentStatus === 2 || Vars.currentStatus === 3) && ($(f.target).closest('.envelope').length === 0) && ($(f.target).closest('.clip').length === 0) && ($(f.target).closest('.flag').length === 0)) {
            $('.message-box').hide();
            $('.grid-box').hide();
            $('.message-remove').hide();
            $('.record-box').show();
            $('.record-box').css('display', 'inline-block');
            $('.message-call').show();
            $('.message-call').css('display', 'inline-block');
//            var currentId = $( this ).attr( 'id' ); // получаем id текущей строки
//            showMessages(currentId);
            Vars.currentStatus = 2;
        }
// функция перехода со статуса 5 на статус 4 (закрытие сообщений и возврат к списку с текстом в двухколоночном варианте)
        if ((Vars.currentStatus === 5) && ($(f.target).closest('.envelope').length === 0) && ($(f.target).closest('.clip').length === 0) && ($(f.target).closest('.flag').length === 0)) {
            $('.message-box').hide();
            $('.message-remove').hide();
            $('.record-box').show();
            $('.record-box').css('display', 'inline-block');
            $('.message-call').show();
            $('.message-call').css('display', 'inline-block');
            Vars.currentStatus = 4;
        }
// функция перехода со статуса 4 на статус 4 (просто открытие сообщения)
//        if ((currentStatus === 4) && ($(f.target).closest('.envelope').length === 0) && ($(f.target).closest('.clip').length === 0) && ($(f.target).closest('.flag').length === 0) ) {
//            var currentId = $( this ).attr( 'id' ); // получаем id текущей строки
//            showMessages(currentId);
//        }
    });
}
//Envelope click
function clickEnvelope() {
    $('.grid-box').on('click', '.envelope', function () {
        var recId = $(this).parents('.grid-line:first').attr('id');
        showMessages(recId);
// функция перехода со статуса 1 на статус 3 (открытие сообщений из списка в одноколоночном варианте)
        if (Vars.currentStatus === 1) {
            $('.grid-box').hide();
            $('.record-box').hide();
            $('.message-call').hide();
            $('.message-remove').show();
            $('.message-remove').css('display', 'inline-block');
            $('.message-box').show();
            $('.message-box').css('display', 'inline-block');
            Vars.currentStatus = 3;
        }
// функция перехода со статуса 4 на статус 5 (открытие сообщений из списка в двухколоночном варианте)
        if (Vars.currentStatus === 4) {
            $('.record-box').hide();
            $('.message-call').hide();
            $('.message-remove').show();
            $('.message-remove').css('display', 'inline-block');
            $('.message-box').show();
            $('.message-box').css('display', 'inline-block');
            Vars.currentStatus = 5;
        }
    });
}
//Message call click
function clickMessagesCall() {
//клик на вызов сообщений из текста задачи
//функция перехода со статуса 2 на статус 3 (открытие сообщений из рекорда в одноколоночном варианте)
    $('.message-call').on('click', function () {
        if (Vars.currentStatus === 2) {
            $('.record-box').hide();
            $('.message-call').hide();
            $('.message-remove').show();
            $('.message-remove').css('display', 'inline-block');
            $('.message-box').show();
            $('.message-box').css('display', 'inline-block');
            Vars.currentStatus = 3;
        }
//функция перехода со статуса 4 на статус 5 (открытие сообщений из рекорда в двухколоночном варианте)
        if (Vars.currentStatus === 4) {
            $('.record-box').hide();
            $('.message-call').hide();
            $('.message-remove').show();
            $('.message-remove').css('display', 'inline-block');
            $('.message-box').show();
            $('.message-box').css('display', 'inline-block');
            Vars.currentStatus = 5;
        }
    });
}
//Message remove click
function clickMessagesRemove() {
// клик на скрытие сообщений (не на крест)
    $('.message-remove').on('click', function () {
// функция перехода со статуса 3 на статус 2 (возврат к рекорду из сообщений в одноколоночном варианте)
        if (Vars.currentStatus === 3) {
            $('.message-remove').hide();
            $('.message-box').hide();
            $('.record-box').show();
            $('.record-box').css('display', 'inline-block');
            $('.message-call').show();
            $('.message-call').css('display', 'inline-block');
            Vars.currentStatus = 2;
        }
// функция перехода со статуса 5 на статус 4 (возврат к рекорду из сообщений в двухколоночном варианте)
        if (Vars.currentStatus === 5) {
            $('.message-remove').hide();
            $('.message-box').hide();
            $('.record-box').show();
            $('.record-box').css('display', 'inline-block');
            $('.message-call').show();
            $('.message-call').css('display', 'inline-block');
            Vars.currentStatus = 4;
        }
    });
}
//Record cross click
function clickRecordCross() {
    $('.record-close').on('click', function () {
// функция перехода со статуса 2 на статус 1 (закрытие рекорда в одноколоночном варианте)
        if (Vars.currentStatus === 2) {
            $('.record-box').hide();
            $('.message-call').hide();
            $('.grid-box').show();
            $('.grid-box').css('display', 'inline-block');
            Vars.currentStatus = 1;
        }
    });
}
//Message cross click
function clickMessageCross() {
    $('.message-close').on('click', function () {
// функция перехода со статуса 3 на статус 1 (закрытие сообщений и возврат к списку в одноколоночном варианте)
        if (Vars.currentStatus === 3) {
            $('.message-box').hide();
            $('.message-remove').hide();
            $('.grid-box').show();
            $('.grid-box').css('display', 'inline-block');
            Vars.currentStatus = 1;
        }
// функция перехода со статуса 5 на статус 4 (закрытие сообщений и возврат к списку в одноколоночном варианте)
        if (Vars.currentStatus === 5) {
            $('.message-box').hide();
            $('.message-remove').hide();
            $('.record-box').show();
            $('.record-box').css('display', 'inline-block');
            $('.grid-box').show();
            $('.grid-box').css('display', 'inline-block');
            $('.message-call').show();
            $('.message-call').css('display', 'inline-block');
            Vars.currentStatus = 4;
        }
    });
}
//Horizontal resize
function resizeWidth() {
    $(window).resize(function () {
        var newWidth;
        var endWidth;
        newWidth = Vars.myWindow.clientWidth;
        function stopWidth() {
            endWidth = Vars.myWindow.clientWidth;
            if (endWidth === newWidth) {
                var endColumns = classifyWidth(endWidth);
                if (endColumns !== Vars.currentColumns) {
// здесь все варианты смены статусов и перерисовки
                    switch (Vars.currentColumns) {
                        case 1: //было 1
                            switch (endColumns) {
                                //стало 2
                                case 2:
                                    switch (Vars.currentStatus) {
                                        //был статус 1
                                        case 1:
                                            $('.record-box').show();
                                            $('.record-box').css('display', 'inline-block');
                                            $('.message-call').show();
                                            $('.message-call').css('display', 'inline-block');
                                            Vars.currentStatus = 4;
                                            break;
                                            //был статус 2
                                        case 2:
                                            $('.grid-box').show();
                                            $('.grid-box').css('display', 'inline-block');
                                            Vars.currentStatus = 4;
                                            break;
                                            //был статус 3
                                        case 3:
                                            $('.grid-box').show();
                                            $('.grid-box').css('display', 'inline-block');
                                            Vars.currentStatus = 5;
                                            break;
                                    }
                                    break;
                                    //стало 3
                                case 3:
                                    $('.grid-box').show();
                                    $('.grid-box').css('display', 'inline-block');
                                    $('.record-box').show();
                                    $('.record-box').css('display', 'inline-block');
                                    $('.message-box').show();
                                    $('.message-box').css('display', 'inline-block');
                                    $('.message-call').hide();
                                    $('.message-remove').hide();
                                    Vars.currentStatus = 7;
                                    break;
                            }
                            break;
                        case 2: //было 2
                            switch (endColumns) {
                                //стало 1
                                case 1:
                                    switch (Vars.currentStatus) {
                                        //был статус 4
                                        case 4:
                                            Vars.currentStatus = 1;
                                            break;
                                            //был статус 5
                                        case 5:
                                            $('.grid-box').hide();
                                            $('.message-remove').show();
                                            $('.message-remove').css('display', 'inline-block');
                                            $('.message-box').show();
                                            $('.message-box').css('display', 'inline-block');
                                            Vars.currentStatus = 3;
                                            break;
                                    }
                                    break;
                                    //стало 3
                                case 3:
                                    $('.grid-box').show();
                                    $('.grid-box').css('display', 'inline-block');
                                    $('.record-box').show();
                                    $('.record-box').css('display', 'inline-block');
                                    $('.message-box').show();
                                    $('.message-box').css('display', 'inline-block');
                                    $('.message-call').hide();
                                    $('.message-remove').hide();
                                    Vars.currentStatus = 7;
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
                                    Vars.currentStatus = 4;
                                    break;
                                    //стало 1
                                case 1:
                                    $('.message-box').hide();
                                    $('.message-remove').hide();
                                    $('.message-call').hide();
                                    $('.record-box').hide();
                                    Vars.currentStatus = 1;
                                    break;
                            }
                            break;
                    }
                    Vars.currentColumns = endColumns;
                }
            }
        }
        setTimeout(stopWidth, Vars.delay);
    });
}
//Vertical resize
function resizeHeight() {
    $(window).resize(function () {
        var newHeight;
        var endHeight;
        newHeight = Vars.myWindow.clientHeight;
        function stopHeight() {
            endHeight = Vars.myWindow.clientHeight;
            if ((endHeight === newHeight) && (endHeight !== Vars.currentHeight)) {
                var newHeightOfContainer = newSizeOfContainer();
                $(".tab-container").height(newHeightOfContainer);
                $(".grid-box").height(newHeightOfContainer);
                $(".record-box").height(newHeightOfContainer);
                $(".message-box").height(newHeightOfContainer);
                $(".message-call").height(newHeightOfContainer);
                $(".message-remove").height(newHeightOfContainer);
                var mesSize = newHeightOfContainer - $('.block-caption').outerHeight(true) - $('.messages-toolbar').outerHeight(true) - $('.message-add').outerHeight(true);
                $(".messages-list").height(mesSize);
                Vars.currentHeight = endHeight;
            }
        }
        setTimeout(stopHeight, Vars.delay);
    });
}
//Tab selection
function clickTab() {
    $('.tab-bar li').on('click', function () {
        var tabStatus = $(this).attr('tab-active');
        if (tabStatus === 'false') {
            $('.tab-bar li').each(function () {
                $(this).attr('tab-active', 'false');
            });
            $(this).attr('tab-active', 'true');
            var tabName = $(this).attr('tab-id');
            requestCommutator('getList', tabName, 1);
            $('.grid-box').empty();
            showGrid(tabName, 1);
            Vars.activeTab = tabName;
            var currentId;
            if (Vars.activeLine[Vars.activeTab] !== undefined) {
                var divId = 'div#' + Vars.activeLine[Vars.activeTab];
                currentId = Vars.activeLine[Vars.activeTab];
                $(divId).attr('data-active', 'true');
                if (TabGrid[Vars.activeTab][currentId].deleted === true) {
                    Vars.lineStatus = 'deleted';
                } else {
                    if (TabGrid[Vars.activeTab][currentId].archive === true) {
                        Vars.lineStatus = 'archived';
                    } else {
                        Vars.lineStatus = TabGrid[Vars.activeTab][currentId].status;
                    }
                }
                if (TabGrid[Vars.activeTab][currentId].fromid === User.id) {
                    Vars.lineParty = 'sender';
                } else {
                    if (TabGrid[Vars.activeTab][currentId].toid === User.id) {
                        Vars.lineParty = 'receiver';
                    } else {
                        Vars.lineParty = 'reader';
                    }
                }
            } else {
                Vars.lineStatus = 'unfocus';
                Vars.lineParty = 'sender';
            }
            showToolbar(Vars.lineStatus, Vars.lineParty);
        }
    });
}
$(document).ready(function () {
    Vars.initialHeight = Vars.myWindow.clientHeight;
    Vars.currentHeight = Vars.initialHeight;
    Vars.initialWidth = Vars.myWindow.clientWidth;
    Vars.currentWidth = Vars.initialWidth;
    Vars.initialColumns = classifyWidth(Vars.initialWidth);
    Vars.currentColumns = Vars.initialColumns;
    Vars.initialStatus = iniStat(Vars.initialColumns);
    Vars.currentStatus = Vars.initialStatus;
    Vars.lineStatus = 'unfocus';
    Vars.lineParty = 'sender';
    setInitialHeight();
    showInbox();
    txtAdd();
    startRattle();
    clickSubject();
    clickEnvelope();
    clickMessagesCall();
    clickMessagesRemove();
    clickRecordCross();
    clickMessageCross();
    resizeWidth();
    resizeHeight();
    clickTab();
    buttonSizes();
    showToolbar(Vars.lineStatus, Vars.lineParty);
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