$(function () {
	$('.container').fullpage({
	    sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        scrollingSpeed:1000,
        afterLoad: function (link, index) {
            $('.section').eq(index - 1).addClass('now')
        },
        onLeave: function (index, nextIndex, direction) {
            if(index == 2 && nextIndex == 3){
                $('.section').eq(index-1).addClass('leaved');
            }
        }
	});
})
