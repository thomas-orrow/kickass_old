+ //0 - сделать overflow направо вместе с white_space = nowrap
        + //1 - сделать полупрозрачную иконку для затухания текста справа.
        + //2 - как сделать резиновую колонку с оверфлоу?
        + //3 - сделать ховерные иконки у флагов для обоих состояний или сделать рамку с прозрачной рамкой в базе
        + //4 - забыл про просрочку
        + //5 - сделать див с прокруткой вниз для сообщений (не работает)
//6 - починить скрытие/открытие меню
        + //7 - почему в шейкере в последнем элементе трясётся весь блок?
        + //8 - почему у зеленого и синего затухания неправильный цвет?
        + //9 - Как подсветить в данный момент выделенную задачу?
        + //10 - Написать функции для крестиков
//11 - Что-то растягивает окно
//12 - разобраться с высотой
//13 - сделать тултип для реплай и подсветку при переходе
//      (!!! - сначала проверка, выведено ли оно,
//      потом, если нет, запрос на сервер
//      потом тултип)
//      с переходом тоже засада - надо обсудить
        + //14 - сделать прочитанное/непрочитанное в сообщениях
        + //15 - как сделать так, чтобы при возврату к списку он был на том же месте?
//16 - как быть с определением статуса в случае смартфонов???? - !!! очень важно!
//17 - где-то при горизонтальной смене не учитывается футер!!!!
//18 - на границе между первым и вторым разрешением глючит отображение по перерисовке
        + //19 - после перехода на закладку перестает работать вывод сообщений и текста задачи !!!
//20 - при горизонтальном ресайзе не учитывается появление/исчезновение футера
//21 - на двух колонках мессаджи открываются прям на футер
//22 - спец комменты, которые всегда прочитаны и генерируются при смене статусов и заполнении сообщений
//Kickass: user user_name set "activity" on task[ and wrote a message:
//bla-bla].
//date/time
        + //23 - надо сохранять выдачу, а при изменении переписывать и догружать вниз
//24 при догрузке надо изменять верх?
        + //25 - слетела раскраска в голубой, проверить термины
//26 - не работает создание 3 точек
        + //27 - при ресайзе надо рефрешить тулбар
//28 - при переходе к 1 колонке паразитный конвертик
//29 - в гриде юзер если не помещается, перепрыгивает на вторую строку, а надо - оверфлоу хидден
        + //30 - на закладках надписи наезжают на иконке (раньше убирать надписи)
//31 - при убирании пунктов под спойлер переделать, чтоб если без спойлера поместится, чтоб отображался.
        + //32 - при смене закладок меняется грид, но не меняется текст и переписка!
//33 - сделать фикс шапки
//34 в "Shared", а также в архиве и удалённых в юзерах стоит undefined
//35 при малом экране грид растягивает окно
//36 сообщения не достают до правой части экрана
        + //37 как сделать потерю фокуса всеми элементами формы - решено через CLOSEST
//38 как сделать проверку, что что-то внесено.
//39 ошибка в алгоритме первых кликов - меню скрываются в том случае, когда клик идет на само меню тоже!!! - заменить на метод, используемый для формочек
//40 проверить почему на формочки влияет счетчик кликов
//41 new task должен не только доп раскрывать, а всю форму
//42 при нажатии на пункт внутри more что-то растягивает окно и оно прыгает (появляется полоса прокрутки) - только при неполной вертикали
//43 если щёлкать туда-сюда по вкладкам, в конце концов появится "new message"



        < div class = "message-list" >
        < div >
        < a name = "mes_5" > < /a>
        < span data - user = "userid_08973626" > Ivan Pushilin < /span>
        < span > to: < /span>\n\
        < span data - user = "userid_08973625" > Igor Ivanov < /span>
        < span class = "message" > Текст сообщения < /span>
        < span > 12 / 01 / 2015 < /span>
        < span > 15:30 < /span>
        < span > reply & gt; < /span>
        < /div>

        --Проблемы
сообщений
//1 Надо определять сегодня (в базе?)
//2 Что делать с часовыми поясами (в базе?)
//


НАВСЕГДА:

        $('.grid-box').on('click', '.envelope', function () {
});


1.
Есть
кнопки, которые
есть
        всегда (add, delete, new )
        Доп.кнопки
по
статусам:
        новая
2.
""


Статусы + archived
unfocus
usual
rejected
processed
completed
confirmed

addTask();
editTask(currentId);
cancelTask(currentId);
archiveTask(currentId);
deleteTask(currentId);
beginTask(currentId);
rejectTask(currentId);
completeTask(currentId);
forceTask(currentId);
stopTask(currentId);
confirmTask(currentId);
redoTask(currentId);
notconfirmTask(currentId);
returnTask(currentId);
restoreTask(currentId);


при
клике
на
строку
определяем
её
        статус (может, ещё при отрисовке запоминаем)