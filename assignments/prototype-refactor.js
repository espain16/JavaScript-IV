/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string 'GameObject was removed from the game.' 
*/
// function GameObject(options) {
//     this.createdAt = options.createdAt;
//     this.dimensions = options.dimensions;
//     this.name = options.name;
//   }
  
//   GameObject.prototype.destroy = function () {
//     return `${this.name} was removed from the game.`;
//   };

class GameObject{
    constructor(options){
        this.createdAt = options.createdAt;
        this.dimensions = options.dimensions;
        this.name = options.name;  
    }

    destroy(){
        return `${this.name} was removed from the game.`;
    }
}