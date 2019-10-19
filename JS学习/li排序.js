window.onload = function () {
    var oUl1 = document.getElementById("ul1");
    var oBtn = document.getElementById("btn1");

    oBtn.onclick = function () {
        var aLi = oUl1.getElementsByTagName("li");
        //aLi.sort();
        var arr1 =[];
        for (var i =0; i<aLi.length; i++) {
            arr1[i] = aLi[i];
        }
        arr1.sort(function (li1,li2) {
            var n1 = parseInt(li1.innerHTML);
            var n2 = parseInt(li2.innerHTML);
            return n1-n2;
        });
        for (var j=0; j<arr1.length; j++) {
            oUl1.appendChild(arr1[j]);
        }
    };
};