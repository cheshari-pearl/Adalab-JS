//promise takes one argument as a callback function
//the callback takes 2 functions - callback1, callback2

let internship = false;

let ourPromise = new Promise((resolve, reject) => {
  if (internship) {
    resolve("I made it");
  } else {
    reject("I will try harder");
  }
});
//do not use semi-colon when chaining

ourPromise
  .then((response) => {
    console.log("I will continue working hard");
  })
  .catch((error) => {
    console.log({ error });
    console.log("I will continue applying for jobs");
  })
  .finally(() => {
    console.log("I will be a Software Engineer");
  });

console.log(ourPromise);

//ASYNC
async function myAkiraChixDream() {
  try {
    console.log("This is my dream");
    await ourPromise;
  } catch {
    console.log("Our dream is not yet successful");
  }
}

myAkiraChixDream();





