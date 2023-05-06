var active = $(".disabled_btn2");

active.click(function(){
        $(".h12").removeClass("disabled");
        $(".h11").addClass("disabled");
})

var active1 = $(".disabled_btn1");

active1.click(function(){
        $(".h11").removeClass("disabled");
        $(".h12").addClass("disabled");
})
