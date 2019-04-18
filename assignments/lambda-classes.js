// CODE here for your Lambda Classes
class Person{
    constructor(person){
        this.name = person.name;
        this.age = person.age;
        this.location = person.location;
        this.gender = person.gender;

    }

speaks(){
    return `Hello my name is ${name}, I am from ${location}.`
}
}

class Instructor{
    constructor(person){
        this.name = Derrick;
        this.age = person.age;
        this.location = person.location;
        this.gender = person.gender;
        this.specialty = person.specialty;
        this.favLanguage = person.favLanguage;
        this.catchPhrase = person.catchPhrase 
    }
    demo(){
       return `Today we are learning about ${this.subject}.`
    }
    grade(){
        return `${student.name}receives a perfect score on ${this.subject}.`
    }
}
