window.addEventListener('load', function () {
    //隐藏与显示
    var nav_li = document.querySelector('.nav_li')
    var nav_dropdown = document.querySelector('.nav_dropdown')
    nav_li.addEventListener('mouseover', function () {
        nav_dropdown.style.display = 'block'
    })
    nav_li.addEventListener('mouseout', function () {
        nav_dropdown.style.display = 'none'
    })
    //背景图和字的变化
    var banner_show = document.querySelector('.banner_show')
    var ul = banner_show.querySelector('ul')
    var li = ul.querySelector('li')
    //点击框
    var banner_show_nav = document.querySelector('.banner_show_nav')
    var banner_show_title = document.querySelector('.banner_show_title')
    var banner_show__text = document.querySelector('.banner_show__text')
    var ab = banner_show_nav.querySelectorAll('a')
    for (let i = 0; i < ab.length; i++) {
        ab[i].addEventListener('click', function () {
            // index = this.getAttribute('index')
            // animate(ul, -index * focusWidth);
            li.innerHTML = '<a href="#"><img src="./uploads/banner_thumb_' + (i + 1) + '.jpg" alt=""></a>'
            banner_show_title.style.backgroundPosition = '0 ' + -100 * i + 'px'
            banner_show__text.style.backgroundPosition = '0 ' + (-300 - 30 * i) + 'px'
            // Reveal()
        })
    }
    //精灵图颜色改变
    for (let i = 0; i < ab.length; i++) {
        ab[i].addEventListener('click', function () {
            for (let i = 0; i < ab.length; i++) {
                ab[i].style.backgroundPosition = ''
                ab[0].style.backgroundPosition = '-509px 0px'
            }
            ab[i].style.backgroundPosition = '-809px ' + -100 * i + 'px'
            // console.log(banner_show__title);
            // setTimeout(function () { $(banner_show__title).fadeIn() }, 2000)
        })
    }
    //电梯导航
    //点击改变位置事件
    var flag = true
    $(".mod_tag li").click(function () {
        flag = false
        var index = $(this).index()
        var current = $('.play').eq(index).offset().top;
        //页面滚动
        $('body,html').stop().animate({
            scrollTop: current
        }, function () {
            flag = true
        })
        $(this).addClass('current').siblings().removeClass('current');
    })
    //滑动改变li的current,
    $(window).scroll(function () {
        if (flag) {
            $(".play").each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top - 10) {
                    $('.mod_tag li').eq(i).addClass('current').siblings().removeClass('current');
                }

            })
        }
    })
    // setTimeout(function () { $(".feature_item_shape").fadeIn() }, 2000)//1000是1秒
    ScrollReveal().reveal('.feature_item_shape--1_1,.feature_item_shape--1_2,.feature_item_shape--1_3,.feature_item_shape--3_1,.feature_item_shape--3_2,.feature_item_shape--3_3', {
        distance: '150px',
        duration: 1000,
        easing: 'ease-out',
        interval: 500,
        origin: 'right',
        reset: true
    })
    ScrollReveal().reveal('.feature_item_shape--2_1,.feature_item_shape--2_2,.feature_item_shape--2_3,.feature_item_shape--4_1,.feature_item_shape--4_2,.feature_item_shape--4_3,.feature_item_shape--4_4', {
        distance: '150px',
        duration: 1000,
        easing: 'ease-out',
        interval: 500,
        origin: 'left',
        reset: true
    })
    ScrollReveal().reveal('.feature_intro_son,.feature_con,.ft_privi', {
        distance: '150px',
        duration: 1000,
        easing: 'ease-out',
        interval: 300,
        origin: 'bottom',
        reset: true
    })
    Reveal()

    function Reveal() {
        ScrollReveal().reveal('.banner_show_title,.banner_show__text,.dome_three', {
            distance: '150px',
            duration: 500,
            easing: 'ease-out',
            interval: 100,
            origin: 'top',
        })
    }

    // 模态框
    $('.mod_identity a').click(function () {
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
})