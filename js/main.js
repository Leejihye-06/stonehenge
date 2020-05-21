/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 *
 by.
      _
  ___(_)_     _
 / __| | \   / |
 \__ \ |  \_/  |
 |___/_|_|\_/|_|

 Version : 1.5.0
 Author  : SeonBeom Sim
 Website : https://github.com/simseonbeom

 - KindTiger -


 */


$(document).ready(function () {//HTML 과 CSS 의 모든 로딩이 끝나면 J-Query 를 실행.
    Logic();



    $("#container,.sc02_hori_scroll,.sc03_hori_scroll").niceScroll({
        cursorcolor: "#000",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });

    // =========================
    // on event section      ===
    //==========================


    $('#section01').addClass('on');





    const container = document.querySelector('#container');
    const stage = $('#container .main');



    function nextPager(nextPage,index){
        stage.css('transform',`translateY(-${innerHeight * index}px)`);

        container.removeAttribute('class');

        setTimeout(()=>{
            container.setAttribute('class',nextPage);
        },1000);

    }
    function wheelFunc(e){


        if(e.deltaY < 0){ //up

            if(container.classList.contains('page-4')){ // 4 > 3

                nextPager('page-3',2);

            }else if(container.classList.contains('page-3')){ // 3 > 2

                nextPager('page-2',1);

            }


            // }else if(container.classList.contains('page-2')){ // 2 > 1
            //
            // nextPager('page-1',0);
            //
            // }
            //





        }else{ //down

            if(container.classList.contains('page-1')){ // 1 > 2

                nextPager('page-2',1);

                $('#section02').delay(1000).queueAddClass('on');

            }else if(container.classList.contains('page-2')){ // 2 > 3
                //

            }else if(container.classList.contains('page-3')){ // 3 > 4

                nextPager('page-4',3);
            }





        }


    }


    container.addEventListener('wheel',wheelFunc)





    $('.sc02_hori_scroll').scroll(function () {  //가로스크롤 구동지점
        var scrollLeft = $('.sc02_hori_scroll').scrollLeft();

        console.log(scrollLeft);


        // =========================
        // scroll event section  ===
        //==========================

        if(scrollLeft === 0){
            nextPager('page-1',0);
        }

        if(scrollLeft >= $('.sc02_hori_scroll .inner').width() - innerWidth){
            nextPager('page-3',2);
        }

        if(scrollLeft >= 500){
            $('.text_box02').addClass('on');
            $('#section02').removeClass('on');
        }




    });




//==============================================================
});


$(function () {

    // scroll event
    $('#container').scroll(function () {
        var scrollTop = $('#container').scrollTop();
        $('.posNum').text(scrollTop); // 스크롤값


        // =========================
        // scroll event section  ===
        //==========================






        // $("").stop().animate({"margin-top": -scrollTop * 0.1}, 200);





        //===================================================================
        // nav on/off event
        $('#container .main > section').each(function (i) {
            var fastNum = 100;
            var firstY = $('#container .main > section:first').position().top;
            var posY = $(this).position().top;
            if (scrollTop <= firstY - fastNum) {
                $('#nav').each(function () {
                    $('li', this).removeClass('on').eq(0).addClass('on');
                })
            } else if (scrollTop >= posY - fastNum) {
                $('#nav').each(function () {
                    $('li', this).removeClass('on').eq(i).addClass('on');
                })
            }
        })

    });
});












