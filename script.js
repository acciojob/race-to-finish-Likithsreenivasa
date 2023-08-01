// window.promises = [];
// // Function to create a promise that resolves after a random time between 1 and 5 seconds
// function getRandomPromise() {
//   const randomTime = Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(`Promise resolved after ${randomTime} milliseconds`);
//     }, randomTime);
//   });
// }

// // Array of five promises
// const promises = [
//   getRandomPromise(),
//   getRandomPromise(),
//   getRandomPromise(),
//   getRandomPromise(),
//   getRandomPromise()
// ];

// // Using Promise.any() to wait for the first promise to resolve
// Promise.any(promises)
//   .then(result => {
//     const outputDiv = document.getElementById('output');
//     outputDiv.textContent = result;
//   })
//   .catch(error => {
//     console.error(error);
//   });

function createRandomPromise() {
  const randomTime = Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds in milliseconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise resolved after ${Math.floor(randomTime / 1000)} seconds`);
    }, randomTime);
  });
}

window.promises = [
  createRandomPromise(),
  createRandomPromise(),
  createRandomPromise(),
  createRandomPromise(),
  createRandomPromise()
];

Promise.any(window.promises)
  .then((result) => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = result;
  })
  .catch((error) => console.error("Error:", error));


// Do not change the code above this
// add your promises to the array `promises`
