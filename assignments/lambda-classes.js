// CODE here for your Lambda Classes
class Person{
    constructor(person){
        this.name = person.name;
        this.age = person.age;
        this.location = person.location;
        this.gender = person.gender;

    }

speaks(){
    return `Hello my name is ${this.name}, I am from ${this.location}.`
}
}//base-class

class Instructor{
    constructor(person){
        super(InstructorPerson); 
            this.specialty = person.specialty;
            this.favLanguage = person.favLanguage;
            this.catchPhrase = person.catchPhrase;
        
    }
    demo(){
       return `Today we are learning about ${this.subject}.`
    }
    grade(){
        return `${student.name}receives a perfect score on ${this.subject}.`
    }
}//instructor

class Student{
    constructor(person){
    super(StudentPerson);
     this.previousBackground = person.previousBackground;
     this.className = person.className;
     this.favSubjects = person.favSubjects;   
    }
    listsSubjects(){
        // return `apples`.
    }
    PRAssignment(){
        //answer here
    }
    sprintChallenge(){
        //answer here`student.name has begun sprint challenge on {subject}`
    }
}//student

class ProjectManager {
    constructor(person){
        super(ProjectManagerPerson);
        this.gradClassName = person.gradClassName;
        this.favInstructor = person.favInstructor;
    }
    standUp(){
        //answer
    }
    debugsCode(){
        //answer
    }
}//Project Manager

