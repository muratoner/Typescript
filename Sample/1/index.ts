class Person{
    constructor(public greeting: string){
        
    }
    GetName(){
        return `<h1>${this.greeting}</h1>`;
    }
}
var person = new Person("Murat ÖNER");
document.body.innerHTML = person.GetName();