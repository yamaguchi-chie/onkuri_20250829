jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
//ドロワーメニュー
  $("#menu_btn").click(function () {
    $("#sp_nav").toggleClass("js-open");
    $(".menu-trigger>span").toggleClass("js-open");
    $("#menu_btn").toggleClass("js-open");
  });

});
