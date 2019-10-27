function Person(name,age,job) {
    this.name = name;
    this.age = age;
    this.job = job;
    if (typeof this.sayName != "function"){
        Person.prototype.sayName = function () {
            alert(this.name);
        };
    }
}
var friend1 = new Person("fanqi",24,"student");
var friend2 = new Person("blue",35,"teacher");
friend1.sayName();
friend2.sayName();