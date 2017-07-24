/**
 * Created by Administrator on 2017/7/24 0024.
 */
function  init() {
    $(".header-top-login").click(function () {
     new Login(function (user) {
        $(".header-top-menu ul li:first-child").html("<a href='#'>"+user.username+"</a>")
         });
    });
}


init();