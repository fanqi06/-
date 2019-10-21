function createPerson(name,qq) {                        //构造函数
    var obj = new Object();
    obj.name = name;
    obj.qq = qq;
    obj.showName = function () {
        alert("我的名字叫" + this.name);
    };
    obj.showQq = function () {
        alert("我的QQ号：" + this.qq);
    };
    return obj;
}
var obj = createPerson("fanqi","534228572");
obj.showName();
obj.showQq();