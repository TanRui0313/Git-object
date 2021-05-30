/*
 * @Author: your name
 * @Date: 2021-05-25 15:27:57
 * @LastEditTime: 2021-05-25 16:54:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \QQ音乐\js\common.js
 */
$(function () {
    // 显示隐藏子导航
    // $('.nav_subnav').hover(function () {
    //     $('.download').show()
    // }, function () {
    //     $('.download').hide()
    // })

    // 显示隐藏搜索历史
    $('.search_input').focus(function () {
        $('.concael').stop().slideToggle()
    })
    $('.search_input').blur(function () {
        $('.concael').stop().slideToggle()
    })

    // 返回顶部
    $(window).scroll(fn);

    function fn() {
        if ($(document).scrollTop() >= 400) {
            $('.btn_bottom_top').show()
        } else {
            $('.btn_bottom_top').hide()
        }
    }
    fn();
    // console.log($('.btn_bottom_top').offset().top);
    // console.log($(document).scrollTop());

    // 点击返回顶部 
    $('.btn_bottom_top').click(function () {
        $('html,body').stop().animate({
            scrollTop: 0
        }, 60)
    })
})