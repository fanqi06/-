window.onload = function () {
    var oDiv = document.getElementById("div1");
    var oBtn = document.getElementById("btn1");

    function move(iTarget) {
        setInterval(function () {
            var speed = (iTarget-oDiv.offsetLeft)/10;
            //speed = Math.ceil(speed);
            //左右 上下取整
            speed = speed > 0? Math.ceil(speed):Math.floor(speed);
            oDiv.style.left = oDiv.offsetLeft + speed +"px";
            document.title = oDiv.offsetLeft + "," +speed;
        },30);
    }

    oBtn.onclick = function () {
        move(300);
    };
    oBtn.onmouseout = function () {

    };
};