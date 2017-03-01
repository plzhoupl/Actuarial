$(function(){
    if(window.location.search) {
        var state = window.location.search.substring(4);
        $(".about-all .left-nav li:nth-child(" + state + ")").siblings('li').removeClass('active');
        $(".about-all .left-nav li:nth-child(" + state + ")").addClass('active');
        var preid = $(".about-all .left-nav li:nth-child(" + state + ")").attr("id");
        $("[id=" + preid + "-box]").addClass('us-box active');
        $("[id=" + preid + "-box]").siblings('ul').removeClass('active');
    }
    $(".about-all .left-nav li").click(function(){
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
        var preid=$(this).attr("id");
        $("[id="+preid+"-box]").addClass('us-box active');
        $("[id="+preid+"-box]").siblings('ul').removeClass('active');
    });
})

$(function(){
    if(window.location.search) {
        var state = window.location.search.substring(4);
        $(".message-all .message-left li:nth-child(" + state + ")").siblings('li').removeClass('active');
        $(".message-all .message-left li:nth-child(" + state + ")").addClass('active');
        var preid = $(".message-all .message-left li:nth-child(" + state + ")").attr("id");
        $("[id=" + preid + "-box]").addClass('message-box active');
        $("[id=" + preid + "-box]").siblings('ul').removeClass('active');
    }
    $(".message-all .message-left li").click(function(){
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
        var preid=$(this).attr("id");
        $("[id="+preid+"-box]").addClass('message-box active');
        $("[id="+preid+"-box]").siblings('ul').removeClass('active');
        onresizess();
    });
})
//ÑéÖ¤Âë
function yzm(){
    var arr = ['0','1','2','3','4','5','6','7','8','9'];
    var str = '';
    for(var i = 0 ; i < 4 ; i ++ )
        str += ''+arr[Math.floor(Math.random() * arr.length)];
    return str;
}

$(function() {
    $("#checkAll_1").click(function() {
        $('input[name="subBox"]').prop("checked",this.checked);
    });
    var $subBox = $("input[name='subBox']");
    $subBox.click(function(){
        $("#checkAll_1").prop("checked",$subBox.length == $("input[name='subBox']:checked").length ? true : false);
    });
    $("#checkAll_2").click(function() {
        $('input[name="sumBox"]').prop("checked",this.checked);
    });
    var $sumBox = $("input[name='subBox']");
    $sumBox.click(function(){
        $("#checkAll_2").prop("checked",$sumBox.length == $("input[name='sumBox']:checked").length ? true : false);
    });
    $("#checkAll_3").click(function() {
        $('input[name="supBox"]').prop("checked",this.checked);
    });
    var $supBox = $("input[name='supBox']");
    $supBox.click(function(){
        $("#checkAll_3").prop("checked",$supBox.length == $("input[name='supBox']:checked").length ? true : false);
    });

    $("#checkAll_4").click(function() {
        $('input[name="bubBox"]').prop("checked",this.checked);
    });
    var $bubBox = $("input[name='bubBox']");
    $bubBox.click(function(){
        $("#checkAll_4").prop("checked",$bubBox.length == $("input[name='bubBox']:checked").length ? true : false);
    });
    $("#checkAll_5").click(function() {
        $('input[name="bumBox"]').prop("checked",this.checked);
    });
    var $bumBox = $("input[name='bubBox']");
    $bumBox.click(function(){
        $("#checkAll_5").prop("checked",$bumBox.length == $("input[name='bumBox']:checked").length ? true : false);
    });
    $("#checkAll_6").click(function() {
        $('input[name="bupBox"]').prop("checked",this.checked);
    });
    var $bupBox = $("input[name='bupBox']");
    $bupBox.click(function(){
        $("#checkAll_6").prop("checked",$bupBox.length == $("input[name='bupBox']:checked").length ? true : false);
    });
    $("#select_1").click(function() {
        $('input[name="select_11"]').prop("checked",this.checked);
    });
    var $select_11 = $("input[name='select_11']");
    $select_11.click(function(){
        $("#select_1").prop("checked",$select_11.length == $("input[name='select_11']:checked").length ? true : false);
    });
});

$(".show_input1").click(function(){
    $(".show_input1").hide();
    $(".hide_input1").show();
});
$(".hide_div1").click(function(){
    $(".show_input1").show();
    $(".hide_input1").hide();
});

$(".show_input2").click(function(){
    $(".show_input2").hide();
    $(".hide_input2").show();
});
$(".hide_div2").click(function(){
    $(".show_input2").show();
    $(".hide_input2").hide();
});




