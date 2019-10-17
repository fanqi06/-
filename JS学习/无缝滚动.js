window.onload = function () {
    var oDiv = document.getElementById("div1");
    var oUl = document.getElementsByTagName("ul")[0];
    var aLi = document.getElementsByTagName("li");
    var aA = document.getElementsByTagName("a");
    var speed=2;

    //两组图片

    oUl.innerHTML += oUl.innerHTML;

    //宽度为图片组长度

    oUl.style.width = aLi[0].offsetWidth*aLi.length + "px";
    function move() {
        if (oUl.offsetLeft < -oUl.offsetWidth/2){
            oUl.style.left = "0";
        }
        if (oUl.offsetLeft > 0){
            oUl.style.left = -oUl.offsetWidth/2 + "px";
        }
        oUl.style.left = oUl.offsetLeft + speed + "px";
    }
    var timer = setInterval(move,30);
    oDiv.onmouseover = function () {
        clearInterval(timer);
    };
    oDiv.onmouseout = function () {
        timer = setInterval(move,30);
    };
    aA[0].onclick = function () {
        speed = -2;
    };
    aA[1].onclick = function () {
        speed = 2
    }
};