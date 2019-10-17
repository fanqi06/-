window.onload = function () {
    var oBtn = document.getElementById("btn1");
    var oUl = document.getElementById("ul1");
    var oTxt = document.getElementById("txt1");

    oBtn.onclick = function () {
        var oLi = document.createElement("li");
        var aLi = document.getElementsByTagName("li");
        oLi.innerHTML = oTxt.value;
        //oUl.appendChild(oLi); 插到末尾
        if (aLi.length > 0){
            //插到谁之前
            oUl.insertBefore(oLi, aLi[0]);
        }
        else {
            oUl.appendChild(oLi);
        }
    };
};