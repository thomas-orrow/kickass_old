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
Vars.myWindow = document.documentElement;
Vars.markRector = 3; //амплитуда колебания
Vars.markStopIt = 0;
Vars.markA = 1;
Vars.shakeCounter = 1;
var Shake = new Object();
var GridList = new Object();
var MessagesList = new Object();
var Toolbar = new Object();
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
function requestCommutator(fname, firstArg, secondArg) {
    switch (fname) {
        case 'getList':
            //firstArg содержит имя вкладки, secondArc - номер страницы
            switch (firstArg) {
                case  'inbox':
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
                    }
                };
                break;
            case 'archive':
            GridList =  {
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
                break;
            default:
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
                break;
        }
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
            case 'toolbar':
                Toolbar = {
                    "unfocus": {
                        "new": {
                            "order": 0,
                            "text": "501",
                            "icon": "toolbar-new.png",
                            "function": "addTask();"
                        }
                    },
                    "archived": {
                        "return": {
                            "order": 0,
                            "text": "514",
                            "icon": "toolbar-return.png",
                            "function": "returnTask(currentId);"
                        }
                    },
                    "deleted": {
                        "return": {
                            "order": 0,
                            "text": "515",
                            "icon": "toolbar-restore.png",
                            "function": "restoreTask(currentId);"
                        }
                    },
                    "usual": {
                        "sender": {
                            "new": {
                                "order": 1,
                                "text": "501",
                                "icon": "toolbar-new.png",
                                "function": "addTask();"
                            },
                            "edit": {
                                "order": 2,
                                "text": "502",
                                "icon": "toolbar-edit.png",
                                "function": "editTask(currentId);"
                            },
                            "complete": {
                                "order": 3,
                                "text": "508",
                                "icon": "toolbar-complete.png",
                                "function": "completeTask(currentId);"
                            },
                            "revoke": {
                                "order": 4,
                                "text": "503",
                                "icon": "toolbar-cancel.png",
                                "function": "cancelTask(currentId);"
                            },
                            "delete": {
                                "order": 5,
                                "text": "505",
                                "icon": "toolbar-delete.png",
                                "function": "deleteTask(currentId);"
                            },
                            "archive": {
                                "order": 6,
                                "text": "504",
                                "icon": "toolbar-archive.png",
                                "function": "archiveTask(currentId);"
                            }
                        },
                        "receiver": {
                            "new": {
                                "order": 1,
                                "text": "501",
                                "icon": "toolbar-new.png",
                                "function": "addTask();"
                            },
                            "begin": {
                                "order": 2,
                                "text": "506",
                                "icon": "toolbar-begin.png",
                                "function": "beginTask(currentId);"
                            },
                            "reject": {
                                "order": 3,
                                "text": "507",
                                "icon": "toolbar-reject.png",
                                "function": "cancelTask(currentId);"
                            },
                            "complete": {
                                "order": 4,
                                "text": "508",
                                "icon": "toolbar-complete.png",
                                "function": "completeTask(currentId);"
                            }
                        }
                    },
                    "rejected": {
                        "sender": {
                            "new": {
                                "order": 1,
                                "text": "501",
                                "icon": "toolbar-new.png",
                                "function": "addTask();"
                            },
                            "edit": {
                                "order": 2,
                                "text": "502",
                                "icon": "toolbar-edit.png",
                                "function": "editTask(currentId);"
                            },
                            "complete": {
                                "order": 3,
                                "text": "508",
                                "icon": "toolbar-complete.png",
                                "function": "completeTask(currentId);"
                            },
                            "force": {
                                "order": 4,
                                "text": "509",
                                "icon": "toolbar-force.png",
                                "function": "forceTask(currentId);"
                            },
                            "delete": {
                                "order": 5,
                                "text": "505",
                                "icon": "toolbar-delete.png",
                                "function": "deleteTask(currentId);"
                            },
                            "archive": {
                                "order": 6,
                                "text": "504",
                                "icon": "toolbar-archive.png",
                                "function": "archiveTask(currentId);"
                            }
                        },
                        "receiver": {
                            "new": {
                                "order": 1,
                                "text": "501",
                                "icon": "toolbar-new.png",
                                "function": "addTask();"
                            },
                            "force": {
                                "order": 2,
                                "text": "509",
                                "icon": "toolbar-force.png",
                                "function": "forceTask(currentId);"
                            },
                            "begin": {
                                "order": 3,
                                "text": "506",
                                "icon": "toolbar-begin.png",
                                "function": "beginTask(currentId);"
                            },
                            "complete": {
                                "order": 4,
                                "text": "508",
                                "icon": "toolbar-complete.png",
                                "function": "completeTask(currentId);"
                            }
                        }
                    },
                    "processed": {
                        "sender": {
                            "new": {
                                "order": 1,
                                "text": "501",
                                "icon": "toolbar-new.png",
                                "function": "addTask();"
                            },
                            "complete": {
                                "order": 2,
                                "text": "508",
                                "icon": "toolbar-complete.png",
                                "function": "completeTask(currentId);"
                            },
                            "revoke": {
                                "order": 3,
                                "text": "503",
                                "icon": "toolbar-cancel.png",
                                "function": "cancelTask(currentId);"
                            },
                            "archive": {
                                "order": 4,
                                "text": "504",
                                "icon": "toolbar-archive.png",
                                "function": "archiveTask(currentId);"
                            }
                        },
                        "receiver": {
                            "new": {
                                "order": 1,
                                "text": "501",
                                "icon": "toolbar-new.png",
                                "function": "addTask();"
                            },
                            "complete": {
                                "order": 2,
                                "text": "508",
                                "icon": "toolbar-complete.png",
                                "function": "completeTask(currentId);"
                            },
                            "stop": {
                                "order": 3,
                                "text": "510",
                                "icon": "toolbar-stop.png",
                                "function": "stopTask(currentId);"
                            },
                            "reject": {
                                "order": 4,
                                "text": "507",
                                "icon": "toolbar-reject.png",
                                "function": "cancelTask(currentId);"
                            }
                        }
                    },
                    "completed": {
                        "sender": {
                            "new": {
                                "order": 1,
                                "text": "501",
                                "icon": "toolbar-new.png",
                                "function": "addTask();"
                            },
                            "confirm": {
                                "order": 2,
                                "text": "511",
                                "icon": "toolbar-confirm.png",
                                "function": "confirmTask(currentId);"
                            },
                            "redo": {
                                "order": 3,
                                "text": "512",
                                "icon": "toolbar-redo.png",
                                "function": "redoTask(currentId);"
                            },
                            "archive": {
                                "order": 4,
                                "text": "504",
                                "icon": "toolbar-archive.png",
                                "function": "archiveTask(currentId);"
                            }
                        },
                        "receiver": {
                            "new": {
                                "order": 1,
                                "text": "501",
                                "icon": "toolbar-new.png",
                                "function": "addTask();"
                            },
                            "redo": {
                                "order": 2,
                                "text": "512",
                                "icon": "toolbar-redo.png",
                                "function": "redoTask(currentId);"
                            }
                        }
                    },
                    "confirmed": {
                        "sender": {
                            "new": {
                                "order": 1,
                                "text": "501",
                                "icon": "toolbar-new.png",
                                "function": "addTask();"
                            },
                            "notconfirm": {
                                "order": 2,
                                "text": "513",
                                "icon": "toolbar-notconfirm.png",
                                "function": "notconfirmTask(currentId);"
                            },
                            "archive": {
                                "order": 3,
                                "text": "504",
                                "icon": "toolbar-archive.png",
                                "function": "archiveTask(currentId);"
                            }
                        },
                        "receiver": {
                            "new": {
                                "order": 1,
                                "text": "501",
                                "icon": "toolbar-new.png",
                                "function": "addTask();"
                            }
                        }
                    }
                };
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
function txtAdd() {
    $('.txt').each(function() {
        var txtId = $(this).attr('data-txtid');
        $(this).append(Text[txtId]);
    });
}
function showInbox() {
    requestCommutator('getList', 'inbox', 1); //тестовый вызов при старте, чтобы получить массив
    // заполнение строками
    showGrid('inbox', 1);
    $('[tab-id="inbox"]').attr('tab-active','true');
}
// Rattle hover function
function rattleInit(which){
    Vars.markStopIt = 0;
    Shake = which;
    $(Shake).css('left', 0);
    $(Shake).css('top', 0);
}
function rattleImage(){
    var markTop;
    var markLeft;
    if ((!document.all && !document.getElementById) || Vars.markStopIt === 1 || Vars.shakeCounter > 3) {
        return;
    }
    switch (Vars.markA) {
        case 1:
            markTop = parseInt($(Shake).css('top')) + Vars.markRector;
            $(Shake).css('top',markTop);
            break;
        case 2:
            markLeft = parseInt($(Shake).css('left')) + Vars.markRector;
            $(Shake).css('left',markLeft); 
            break;
        case 3:
            markTop = parseInt($(Shake).css('top')) - Vars.markRector;
            $(Shake).css('top',markTop);
            break;
        default:
            markLeft = parseInt($(Shake).css('left')) - Vars.markRector;
            $(Shake).css('left',markLeft); 
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
function stopRattle(which){
    Vars.markStopIt = 1;
    Vars.shakeCounter = 1;
    $(which).css('left',0);
    $(which).css('top',0);
}
function startRattle() {
    $('.grid-box').on('mouseover','.mark',function() {
        rattleInit(this);
        rattleImage();
    });
    $('.grid-box').on('mouseout','.mark',function() {
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
    $('.grid-box').on('click','.grid-line', function(f) {
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
        if ((Vars.currentStatus === 1 || Vars.currentStatus === 2 || Vars.currentStatus === 3) && ($(f.target).closest('.envelope').length === 0) && ($(f.target).closest('.clip').length === 0) && ($(f.target).closest('.flag').length === 0) ) {
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
        if ((Vars.currentStatus === 5) && ($(f.target).closest('.envelope').length === 0) && ($(f.target).closest('.clip').length === 0) && ($(f.target).closest('.flag').length === 0) ) {
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
    $('.grid-box').on('click','.envelope', function() {
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
    $('.message-call').on('click', function() {
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
    $('.message-remove').on('click', function() {
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
    $('.record-close').on('click', function() {
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
    $('.message-close').on('click', function() {
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
    $(window).resize(function(){
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
    $(window).resize(function(){
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
    $('.tab-bar li').on('click', function() {
        var tabStatus = $(this).attr('tab-active');
        if ( tabStatus === 'false' ) {
            $('.tab-bar li').each(function() {
                $(this).attr('tab-active','false');
            });
            $(this).attr('tab-active','true');
            var tabName = $(this).attr('tab-id');
            requestCommutator('getList', tabName, 1);
            $('.grid-box').empty();
            showGrid(tabName, 1);
        }
    });
}
$(document).ready(function(){
    Vars.initialHeight = Vars.myWindow.clientHeight;
    Vars.currentHeight = Vars.initialHeight;
    Vars.initialWidth = Vars.myWindow.clientWidth;
    Vars.currentWidth = Vars.initialWidth;
    Vars.initialColumns = classifyWidth(Vars.initialWidth);
    Vars.currentColumns = Vars.initialColumns;
    Vars.initialStatus = iniStat(Vars.initialColumns);
    Vars.currentStatus = Vars.initialStatus;
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
    //добавить размещение пейджинга
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