//建立输出, 删除：yaDebug.html("");
$("body").append('<div id="yaDebug"></div>');
var yaDebug = $("#yaDebug");
var yaGridCell;
yaDebug.css({"z-index":1024,"position":"fixed","width":"320px","height":"50%","background-color":"rgba(0, 0, 0, 0.7)","color":"#FFF","left":0,"bottom":0,"overflow-y":"scroll","border":"#000 solid 3px"});
function yalog(yaLogInfo) {
    yaDebug.append("<div>"+yaLogInfo+"</div>");
}
function yaRL() {
    yaDebug.html("");
    var yaGridTimelineItems = $(".GridTimeline-items");
    var yaGridCell = yaGridTimelineItems.find(".Grid-cell");
    yaShowHide(yaGridCell,true);
    yalog("雅诗推特跟随者过滤工具 已加载<br>请在控制台输入以下命令：<br>重新载入：<code>yaRL();</code><br>显示无背景图用户：<code>yaTBG();</code><br>显示无头像用户：<code>yaTBG();</code><br>疑似随机用户名：<code>yaTRO();</code><hr>已扫描人员数量："+yaGridCell.length);
}
yaRL();
function yaShowHide(yaObj,yaisshow) {
    if (yaisshow) {
        yaObj.css("display","inline-block");
    } else { 
        yaObj.css("display","none");
    }
}
//筛选资料卡图片
function yaTBG() {
    yaRL();
    yaGridCell.each(function(){
        let yaCellN = $(this).find(".u-linkComplex-target").text();
        let yaCell = $(this).find(".ProfileCard-bg").css("background-image");
        if (yaCell == "none") {
            yalog("无背景："+yaCellN);
            yaShowHide($(this),true);
        } else {
            yaShowHide($(this),false);
        }
    });
}
//筛选空白头像
function yaTBG() {
    yaRL();
    yaGridCell.each(function(){
        let yaCellN = $(this).find(".u-linkComplex-target").text();
        let yaCell = $(this).find(".ProfileCard-avatarImage").attr("src");
        if (yaCell == "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png") {
            yalog("无头像："+yaCellN);
            yaShowHide($(this),true);
        } else {
            yaShowHide($(this),false);
        }
    });
}