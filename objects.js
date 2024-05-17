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

const checkNumbers=(numbers) => {
    for (let num =1;num<=100; num++){
        if(num%3==0 && num%5==0){
            console.log('fizz buzz')
        }
        else if(num%3==0){
            console.log('fizz')
        }
        else if (num%5==0){
            console.log('buzz')
        }
        else{
            console.log(num);
        }
    }
};
checkNumbers();




    

    const books = [
        {title:'The Catcher in the Rye', author:'JD Salinger',publicationYear:1951, isAvailable:true},
        {title:'Great Expectations', author:'Charles Dickens',publicationYear:1861, isAvailable:false},
        {title:'Crime and Punishment', author:'Fzgeralsyodor',publicationYear:1866, isAvailable:true},
        {title:'The Great Gatsby', author:'F. Scott Fit',publicationYear:1925, isAvailable:false},
        {title:'The Odyssey', author:'Charles Dickens',publicationYear:-800, isAvailable:true}
    ]

    function getBooksByAuthor(author){
        let name= Object.groupBy(books, ({author}) => author)
            console.log(name);
    }
    getBooksByAuthor('Charles Dickens');
   


