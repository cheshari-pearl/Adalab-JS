function Person(name,age){
    this.name = name;
    this.age = age;
    this.greet= function (){
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old.`);
    }
};

const adam = new Person('Adam',30);
console.log({adam});
adam.language = 'English';
console.log({adam});

const eve = new Person('Eve', 20);
console.log({eve});
//prototype
Person.prototype.nationality= 'Kenyan';
console.log({adam});
console.log('adam-nationality', adam.nationality);
console.log('eve-nationality', eve.nationality);

eve.nationality = 'Ugandan';
console.log({eve});
console.log({adam});

adam.greet();
