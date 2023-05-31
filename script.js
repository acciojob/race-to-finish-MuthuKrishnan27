
const outputDiv = document.getElementById('output');

// Function to generate a random number between min and max (inclusive)
function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create an array of promises with random timeouts
const promarr = [];
for (let i = 0; i < 5; i++) {
  const timeout = getRandomTime(1000, 5000);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved after ${timeout} milliseconds`);
    }, timeout);
  });
  promarr.push(promise);
}

window.promises = Promise.any(promarr);
promises.then((result)=>{
	outputDiv.textContent = result;
})


// Use Promise.any() to wait for the first promise to resolve
// Promise.any(promises)
//   .then((result) => {
//     outputDiv.textContent = result;
//   })
//   .catch((error) => {
//     console.log('Error:', error);
//   });

// Do not change the code above this
// add your promises to the array `promises`
