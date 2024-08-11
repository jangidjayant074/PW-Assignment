class Person{
    constructor(name ="unknown", age = 0){
        this.name = name;
        this.age = age;
    }
    getDetails(){
        return`Name : ${this.name} Age : ${this.age}`
    }
}

const personInfo1 = new Person("Shivank Tyagi", 21);
console.log(personInfo1.getDetails());

const personInfo2 = new Person();
console.log(personInfo2.getDetails());