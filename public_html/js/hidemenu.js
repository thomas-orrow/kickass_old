//Отдельно задаём убирание выпадашек при клике вне выпадашек:
//Задаём переменные, что кликается первый раз ДЛЯ КАЖДОЙ выпадашки
var firstClick = [true, true, true, true, true];
//Если идет щелчок в любом месте на документе
$( document ).on( 'click.myEvent', function(e) {
    for (var i = 0; i < firstClick.length; i++) {
        var menu = $('.menu'+i);
//	то проверяем открыто ли меню
        if (menu.css('display') === 'block') {
//    если открыто i-е меню и клик не первый и клик не в i-м меню, то скрыть i-е меню, выйти из цикла
            if ( (!firstClick[i]) && ($(e.target).closest('menu').length === 0) ) {
                menu.hide();
                firstClick[i] = true;
                break;
            } else {
//  если же меню открыто, но либо первый клик, либо клик не снаружи от меню, то ставим, что клик не первый
               firstClick[i] = false;
            }
        }
    }   
});