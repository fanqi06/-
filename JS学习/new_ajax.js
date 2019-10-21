function ajax(url,fnSucc,fnFailed) {
    //1.创建Ajax对象
    var oAjax = new XMLHttpRequest();

    //2.连接服务器
    //open(方法，文件名，异步传输)
    oAjax.open("GET",url,true);

    //3.发送请求
    oAjax.send();

    //4.接收返回
    oAjax.onreadystatechange = function () {
      if (oAjax.readyState === 4) {
          if (oAjax.status === 200) {
              fuSucc(oAjax.responseText);
          }
          else {
              if (fnFailed) {
                  fnFailed(oAjax.status);
              }
          }
      }
    };
}