window.onload = function () {
    var oTab = document.getElementById("tab1");
    var oBtn = document.getElementById("btn1");
    var oName = document.getElementById("name");
    var oAge = document.getElementById("age");
    var id = oTab.tBodies[0].rows.length + 1;

    oBtn.onclick = function () {
        var oTr = document.createElement("tr");
        var oTd = document.createElement("td");
        oTd.innerHTML = id ++;
        oTr.appendChild(oTd);

        var oTd1 = document.createElement("td");
        oTd1.innerHTML = oName.value;
        oTr.appendChild(oTd1);

        var oTd2 = document.createElement("td");
        oTd2.innerHTML = oAge.value;
        oTr.appendChild(oTd2);

        var oTd3 = document.createElement("td");
        oTd3.innerHTML = "<a href='javascript:;'>删除</a>";
        oTr.appendChild(oTd3);
        oTab.tBodies[0].appendChild(oTr);

        oTd3.getElementsByTagName("a")[0].onclick = function () {
          oTab.tBodies[0].removeChild(this.parentNode.parentNode);
        };
    }
};
