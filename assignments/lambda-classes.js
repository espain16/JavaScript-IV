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
}//base-class

class Instructor{
    constructor(person){
        super(InstructorPerson); 
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
}//instructor

class student{
    constructor(person){
        
    }
}

