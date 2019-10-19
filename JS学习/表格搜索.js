window.onload = function () {
    var oTab = document.getElementById("tab1");
    var oBtn = document.getElementById("btn1");
    var oName = document.getElementById("name");

    oBtn.onclick = function () {
        for (var i = 0; i < oTab.tBodies[0].rows.length; i ++)
        {
            // 转换小写
            var sTab = oTab.tBodies[0].rows[i].cells[1].innerHTML.toLowerCase();
            var sTxt = oName.value.toLowerCase();
            var arr = sTxt.split(" ");
            oTab.tBodies[0].rows[i].style.display = "none";

            /*模糊搜索
            if (sTab.search(sTxt) != -1) {
                oTab.tBodies[0].rows[i].style.background = "red";
            }
            else {
                oTab.tBodies[0].rows[i].style.background = "";
            }
        } */
            oTab.tBodies[0].rows[i].style.background = "";
            for ( var j = 0; j < arr.length; j ++) {
                if (sTab.search(arr[j]) !== -1) {

                    //高亮显示

                    oTab.tBodies[0].rows[i].style.background = "red";

                    //筛选

                    oTab.tBodies[0].rows[i].style.display = "block";
                }
            }
        }
    }
};