var Person = (function () {
    function Person(greeting) {
        this.greeting = greeting;
    }
    Person.prototype.GetName = function () {
        return "<h1>" + this.greeting + "</h1>";
    };
    return Person;
}());
var person = new Person("Murat ÖNER");
document.body.innerHTML = person.GetName();
//# sourceMappingURL=index.js.map