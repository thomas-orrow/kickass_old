var Buttons = new Object();
var Toolbar = new Object();
Buttons = {
    "t-new": {
        "text": "501",
        "function": "addTask();"
    },
    "t-archive": {
        "text": "504",
        "function": "archiveTask(currentId);"
    },
    "t-return": {
        "text": "514",
        "function": "returnTask(currentId);"
    },
    "t-delete": {
        "text": "505",
        "function": "deleteTask(currentId);"
    },
    "t-restore": {
        "text": "515",
        "function": "restoreTask(currentId);"
    },
    "t-edit": {
        "text": "502",
        "function": "editTask(currentId);"
    },
    "t-begin": {
        "text": "506",
        "function": "beginTask(currentId);"
    },
    "t-stop": {
        "text": "510",
        "function": "stopTask(currentId);"
    },
    "t-revoke": {
        "text": "503",
        "function": "cancelTask(currentId);"
    },
    "t-reject": {
        "text": "507",
        "function": "cancelTask(currentId);"
    },
    "t-force": {
        "text": "509",
        "function": "forceTask(currentId);"
    },
    "t-complete": {
        "text": "508",
        "function": "completeTask(currentId);"
    },
    "t-redo": {
        "text": "512",
        "function": "redoTask(currentId);"
    },
    "t-confirm": {
        "text": "511",
        "function": "confirmTask(currentId);"
    },
    "t-notconfirm": {
        "text": "513",
        "function": "notconfirmTask(currentId);"
    },
    "t-savetask": {
        "text": "516",
        "function": "saveTask(currentId);"
    },
    "t-canceledit": {
        "text": "517",
        "function": "cancelEdit(currentId);"
    }
};
Toolbar = {
    "unfocus": {
        "sender": {
            "1": "t-new"
        },
        "receiver": {
            "1": "t-new"
        },
        "reader": {
            "1": "t-new"
        }
    },
    "archived": {
        "sender": {
            "1": "t-new",
            "2": "t-return"
        },
        "receiver": {
            "1": "t-new"
        },
        "reader": {
            "1": "t-new"
        }
    },
    "deleted": {
        "sender": {
            "1": "t-new",
            "2": "t-restore"
        },
        "receiver": {
            "1": "t-new"
        },
        "reader": {
            "1": "t-new"
        }
    },
    "usual": {
        "sender": {
            "1": "t-new",
            "2": "t-edit",
            "3": "t-complete",
            "4": "t-revoke",
            "5": "t-delete",
            "6": "t-archive"
        },
        "receiver": {
            "1": "t-new",
            "2": "t-begin",
            "3": "t-reject",
            "4": "t-complete"
        },
        "reader": {
            "1": "t-new"
        }
    },
    "rejected": {
        "sender": {
            "1": "t-new",
            "2": "t-edit",
            "3": "t-complete",
            "4": "t-force",
            "5": "t-delete",
            "6": "t-archive"
        },
        "receiver": {
            "1": "t-new",
            "2": "t-force",
            "3": "t-begin",
            "4": "t-complete"
        },
        "reader": {
            "1": "t-new"
        }
    },
    "accepted": {
        "sender": {
            "1": "t-new",
            "2": "t-complete",
            "3": "t-revoke",
            "4": "t-archive"
        },
        "receiver": {
            "1": "t-new",
            "2": "t-complete",
            "3": "t-stop",
            "4": "t-reject"
        },
        "reader": {
            "1": "t-new"
        }
    },
    "completed": {
        "sender": {
            "1": "t-new",
            "2": "t-confirm",
            "3": "t-redo",
            "4": "t-archive"
        },
        "receiver": {
            "1": "t-new",
            "2": "t-redo"
        },
        "reader": {
            "1": "t-new"
        }
    },
    "confirmed": {
        "sender": {
            "1": "t-new",
            "2": "t-notconfirm",
            "3": "t-archive"
        },
        "receiver": {
            "1": "t-new"
        },
        "reader": {
            "1": "t-new"
        }
    }
};