//建立输出, 删除：yaDebug.html("");
$("body").append('<div id="yaDebug"></div>');
var yaDebug = $("#yaDebug");
var yaGridCell;
yaDebug.css({"z-index":1024,"position":"fixed","width":"320px","height":"50%","background-color":"rgba(0, 0, 0, 0.7)","color":"#FFF","left":0,"bottom":0,"overflow-y":"scroll","border":"#000 solid 3px"});
function yalog(yaLogInfo) {
    yaDebug.append("<div>"+yaLogInfo+"</div>");
}