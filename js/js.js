$(document).ready(function () {

    //주메뉴 오버시마다 서브박스가 나옴
    $(".menu>li").hover(function () {
        $(this).find(">ul").stop(true, true).fadeIn(); //서브메뉴 보이게 함
        $(".nav_bg").stop(true, true).animate({"width": "25%"}, 300); //서브박스  
    }, function () {
        $(this).find(">ul").stop(true, true).fadeOut("fast");
        // $("p").stop(true,true).animate({"left":"0px"},300);  
    });


    /*서브박스p가 메뉴안에서는 열려져있는 상태를 유지하기 위해 
    ==>위 소스에서 아웃시에 서브박스 p 부분을 삭제해야 함.*/
    $(".menu").mouseleave(function () {
        $(".nav_bg").stop(true, true).animate({
            "width": "15%"
        }, 300);
    });

    var mySwiper1 = new Swiper('.gallery1', {
        loop: true, //순환유무	 
        pagination: '.nav1', //네비게이션class명
        grabCursor: true, //커서 손모양
        autoplay: 3000, //자동진행
        effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

        //이전 다음 버튼
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });



    $("dd:not(:first)").css("display", "none");
    //초기상태를 만들어줌 첫번째 dd를 제외하고보이지않게 
    $("dt:first").addClass("selected");
    //첫번째 dd는 선택된 상태의 클래스를 불러옴 

    $("dl dt").click(function () {

        if ($(this).find("+dd").css("display") == "none") {
            //(+동위선택자)클릭한 dt바로뒤에 위치한 dd가 보이지 않으면
            $("dd").slideUp("slow"); //현재 열려있는 dd 올라감
            $(this).find("+dd").slideDown("slow");
            //선택한 dt바로다음 dd내려감
            $("dt").removeClass("selected"); //기존 선택상태 제거
            $(this).addClass("selected"); //새로 선택된곳에 선택상태주기
        }

    }).mouseover(function () {
        $(this).addClass("over");
    }).mouseout(function () {
        $(this).removeClass("over");
    });

    	$(".gnb").hide();  /*display:none*/

	$(".search_toggle_btn").click(function(){
		$(".search_bar").stop(true,true).fadeToggle("fast");
	}); 
    
    	$(".search_bar").hide();  /*display:none*/

	$(".menu_toggle_btn").click(function(){
		$(this).toggleClass("menu-open");
		$(".gnb").stop(true,true).slideToggle("fast");
        
	}); 
    
    
    $(".gnb_sub_list").hide();
    $(".gnb_list>li").click(function(){
        $(this).find(">ul").stop(true,true).slideToggle("fast");
    });
    
    
/*
     따라다니는 퀵메뉴 
	$(window).scroll(function(){ //브라우저에 스크롤이 발생하는 순간부터 
		var curpos=$(window).scrollTop()+150;  //스크롤상단 위치값을 저장
 		$(".quick_in").stop().animate({"top":curpos}); 
	});
    
    $(".quick_menu li").click(function(){
        $(".quick_menu li").stop(true, true).animate({"width": "400px"}, 300);
        
    });
*/





});
