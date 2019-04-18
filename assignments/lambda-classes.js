// CODE here for your Lambda Classes
class Person{
    constructor(person){
        this.name = person.name;
        this.age = person.age;
        this.location = person.location;
        this.gender = person.gender;

    }

speaks(){
    return `Hello my name is ${name}, I am from ${location}`
}
}
