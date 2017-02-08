$(function () {		

	// LNB 아코디언
	$('#cssmenu li.active').addClass('open').children('ul').show();
	$('#cssmenu li.has-sub>a').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp(200);
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown(200);
			element.siblings('li').children('ul').slideUp(200);
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp(200);
		}
	});

	//텝메뉴
	$(function () {	
		$(".tabCont").hide();
		$(".tabCont:first").show();	
		
		$("ul.tabDesign li").click(function () {
			$("ul.tabDesign li").removeClass("on");
			$(this).addClass("on");
			$(".tabCont").hide();
			var activeTab = $(this).attr("rel");
			$("#" + activeTab).fadeIn();
		});		
	});

	// 달력 UI
	$(".datepicker").datepicker({
		showOn: "both", // 버튼과 텍스트 필드 모두 캘린더를 보여준다.
		buttonImage: "../../resource/images/common/datepick_icon.png", // 버튼 이미지.
		dateFormat: "yy-mm-dd", // 텍스트 필드에 입력되는 날짜 형식.
		changeMonth: true ,
		changeYear: true,
		nextText: '다음 달', // next 아이콘의 툴팁.
		prevText: '이전 달', // prev 아이콘의 툴팁.
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dayNames: ['일','월','화','수','목','금','토'],
		dayNamesShort: ['일','월','화','수','목','금','토'],
		dayNamesMin: ['일','월','화','수','목','금','토'],
		showButtonPanel: true,
		currentText: '오늘' , // 오늘 날짜로 이동하는 버튼 패널
		closeText: '닫기',  // 닫기 버튼 패널
	});	

	$(window).scroll(function(){
		if($(this).scrollTop() > 0){
			$(".scrollGoTop").fadeIn();
		}else{
			$(".scrollGoTop").fadeOut();
		}
	});
	$(".scrollGoTop").click(function () {
		$("html, body").animate({scrollTop: 0}, 450);
		return false;
	});

});

//layer popup
function layer_open(el) {
	$('#layer1, #layer2, #layer3').css('display', 'none'); //팝업 레이어 n개수
	var temp = $('#' + el);
	var bg = temp.parents('bg');
	if (bg) {
		$('.layer').fadeIn();
	} else {
		temp.fadeIn();
	}

	temp.css('display', 'block');
	if (temp.outerHeight() < $(document).height()) temp.css('margin-top', '-' + temp.outerHeight() / 2 + 'px');
	else temp.css('top', '0px');
	if (temp.outerWidth() < $(document).width()) temp.css('margin-left', '-' + temp.outerWidth() / 2 + 'px');
	else temp.css('left', '0px');

	//$("body").attr("style", "overflow-y:hidden");

	temp.find('a.cbtn').click(function (e) {
		if (bg) {
			$('.layer').fadeOut();
		} else {
			temp.fadeOut();
		}
		e.preventDefault();
		//$("body").attr("style", "overflo-y:scroll");
	});

	$('.layer .bg').click(function (e) {
		$('.layer').fadeOut();
		e.preventDefault();
		//$("body").attr("style", "overflow-y:scroll");
	});
};


// LNB메뉴 열고닫기
$(function(){
	$(".lnbBtn").click(function(){
		if(!$(this).hasClass("on")){
			$(".lnbArea").hide();
			//$( '.subBody').removeClass('line');
			$( '.container').css('margin-left','0');
			$( '.lnbBtn').css('left','20px');
			$(this).addClass("on");
			$("#jqGrid").setGridWidth($('.jqGridArea').width());
		}else{
			$(".lnbArea").show();
			//$( '.subBody').addClass('line');
			$( '.container').css('margin-left','220px');
			$( '.lnbBtn').css('left','-49px');
			$(this).removeClass("on");
			$("#jqGrid").setGridWidth($('.jqGridArea').width());
		}
	});	
});
