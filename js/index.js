// 左箭头
// $('.slide_arrow_left').click(function () {
//     const playlist = $(this).parent().find('.playlist_list');
//     const dot = $(this).parent().find('.slide_switch_item i');
//     let left = parseInt(playlist.css('left'));
//     if (left == 0) {
//         playlist.css('left', '-2400px');

//     } else {
//         playlist.css('left', left + 1200);
//     }

//     // 小圆点处理
//     left = parseInt(playlist.css('left'));
//     const index = Math.abs(left / 1200);
//     dot.each(function () {
//         $(this).css('background-color', '')
//     }).eq(index).css('background-color', 'rgba(0, 0, 0, .3)');
// })

// // 右箭头
// $('.slide_arrow_right').click(function () {
//     const playlist = $(this).parent().find('.playlist_list');
//     const dot = $(this).parent().find('.slide_switch_item i');
//     let left = parseInt(playlist.css('left'));
//     if (left == -2400) {
//         playlist.css('left', 0);
//     } else {
//         playlist.css('left', left - 1200);
//     }

//     // 小圆点处理
//     left = parseInt(playlist.css('left'));
//     const index = Math.abs(left / 1200);
//     dot.each(function () {
//         $(this).css('background-color', '')
//     }).eq(index).css('background-color', 'rgba(0, 0, 0, .3)');
// })

// // 轮播切换小圆点
// $('.slide_switch_item').click(function (e) {
//     const playlist = $(this).parent().parent().find('.playlist_list');
//     const dot = $(this).parent().find('.slide_switch_item i');
//     const index = $(this).index();
//     playlist.css('left', index * -1200);
//     dot.each(function () {
//         $(this).css('background-color', '')
//     }).eq(index).css('background-color', 'rgba(0, 0, 0, .3)');
// })

$(function () {
    // 动态生成对应数量的小圆点
    function createPoint() {
        $('.slide_switch').empty().each(function (index, e) {
            var current = $(e).siblings('.slide_list').find('.current');
            var str = '';
            for (var i = 0; i < Math.ceil(current.children().width() / w); i++) {
                str += '<a class="slide_switch_item"><i></i></a>';
            }
            $(e).append($(str)).children().eq(0).addClass('current_point');
            // 点击小圆点
            $(e).children().click(function () {
                $(this).addClass('current_point').siblings().removeClass('current_point');
                $(this).parent().siblings('.slide_list').children('.current').children().css('left', -$(this).index() * w);
            });
        });
    }
    // 节流
    var slide_flag = true;
    // 轮播图宽度
    var w = 1200;
    createPoint();

    // 右箭头翻页
    $('.slide_arrow_right').click(function () {
        if (slide_flag) {
            // 点击的箭头对应模块显示的轮播图
            var current = $(this).siblings('.slide_list').children('.current').children();
            // 当前轮播图的偏移距离
            var left = parseInt(current.position().left);
            if (-left >= current.width() - w) {
                left = 0;
            } else {
                left -= w;
            }
            $(this).siblings('.slide_switch').children().eq(-left / w).addClass('current_point').siblings().removeClass('current_point');
            current.css('left', left);
            slide_flag = false;
            setTimeout(() => slide_flag = true, 510);
        }
    });
    // 左箭头翻页
    $('.slide_arrow_left').click(function () {
        if (slide_flag) {
            // 点击的箭头对应模块显示的轮播图
            var current = $(this).siblings('.slide_list').children('.current').children();
            // 当前轮播图的偏移距离
            var left = parseInt(current.position().left);
            if (left >= 0) {
                left = w - current.width();
            } else {
                left += w;
            }
            $(this).siblings('.slide_switch').children().eq(-left / w).addClass('current_point').siblings().removeClass('current_point');
            current.css('left', left);
            slide_flag = false;
            setTimeout(() => slide_flag = true, 510);
        }
    });
    // tab 栏切换
    $('a.tab_item').click(function () {
        $(this).parent().siblings(".slide_list").find('.current').children().css('left', 0);
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parent().siblings('.slide_list').children().eq($(this).index()).addClass('current').siblings().removeClass('current');
        createPoint();
    });

    // 模态框
    $('.slide_list a').click(function () {
        $('.mask').show();
        $('.login_modal').show();
        $('body').css({
            overflow: 'hidden',
            paddingRight: '10px',
        });
    });
    $('.btn_close').click(function () {
        $('.mask').hide();
        $('.login_modal').hide();
        $('body').css({
            overflow: '',
            paddingRight: '',
        });
    });
    $('.login_hd a').click(function () {
        $(this).addClass('current').siblings().removeClass('current');
        $('.login_bd>div').eq($(this).index()).addClass('current').siblings().removeClass('current');
    });
});