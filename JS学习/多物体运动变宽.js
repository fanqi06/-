window.onload = function () {
  var aDiv = document.getElementsByTagName("div");
  for (var i = 0; i < aDiv.length; i++) {

      //每个div设定一个定时器

      aDiv[i].timer = null;
      aDiv[i].onmouseover = function () {
          move(this,400);
      };
      aDiv[i].onmouseout = function () {
          move(this,100);
      };
  }
};
//var timer = null;
function move(obj,iTarget) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {

        var speed = (iTarget -obj.offsetWidth)/6;
        speed = speed>0 ? Math.ceil(speed):Math.floor(speed);

        if (obj.offsetWidth == iTarget){
            clearInterval(obj.timer);
        }
        else {
            obj.style.width = obj.offsetWidth + speed +"px";
        }
    },30);
}