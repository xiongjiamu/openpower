    $(".tab").find("a").hover(function(){
       var ind =$(this).index();
       $(this).addClass("cur").siblings().removeClass("cur");
       $(".items").find(".item").eq(ind).addClass("cur").siblings().removeClass("cur");
    });