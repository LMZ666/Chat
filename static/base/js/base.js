$(function () {
    var flag = false
    $("#audio")[0].load()

    $("#play-mp3").click(function(){
        flag = !flag
        if(flag){
            $(this).find("a").html("停止播放")
            $("#audio")[0].play()
        }
        else{
            $(this).find("a").html("开始播放")
            $("#audio")[0].pause()
        }
    })
})