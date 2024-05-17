function greet(userName, callback){
    console.log(`Hello there ${userName}`);

    callback();  //call it same way you call functions
}

function intro(){
    console.log('This is me');
};

greet("Hellen", intro);


setTimeout(intro, 2000);

setInterval(function(){
    console.log('This is an interval');
}, 3000);

//clearInterval()


