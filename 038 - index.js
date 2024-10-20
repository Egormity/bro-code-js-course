const person1 = {
   name: `Spongebob`,
   favFood: `hamburgers`,
   sayHello: function(){console.log(`Hi! I am ${person1.name}`)},
   eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}
const person2 = {
   name: `Patric`,
   favFood: `Pizza`,
   sayHello: function(){console.log(`Hi! I am ${person1.name}`)},
   eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.sayHello();
person1.eat();
person1.sayHello();
person2.eat();