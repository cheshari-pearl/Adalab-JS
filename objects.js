const cup = {
    color: 'red',
    size: 'small',
    texture: 'smooth',
    shape: 'round',
    functionality: {
        drinkType: 'tea',
        temperature: 'hot'
    },
    drink: function(){
        console.log('Use me to drink');
        console.log(`My main purpose is to drink ${this.functionality.temperature} ${this.functionality.drinkType}`);
    }
};
console.log({color: cup.color});
console.log('size', cup.size);
console.log('temperature', cup.functionality.temperature)
console.log('texture', cup['texture']);

//add or change value using .aa= ''
cup.model = 'glass';
console.log({cup});

delete cup.model
console.log({cup});

cup.color = 'green';
console.log({cup});

cup.drink();


//getting all the keys on an object
const keys = Object.keys(cup);
console.log({keys});

const values = Object.values(cup);
console.log(values);


//looping
const loop = Object.keys(cup).map(item => {
    return ({keys:item, value:cup[item]});
})
console.log({loop});

Object.keys(cup).forEach(item => {
    console.log({keys:item, value:cup[item]});
})