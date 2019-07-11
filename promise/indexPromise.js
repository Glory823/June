/*console.log(1);

setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3);
  });
});

new Promise((resolve, reject) => {
  console.log(4);

  resolve(5);
}).then(data => {
  console.log(data);

  Promise.resolve()
    .then(() => {
      console.log(6);
    })
    .then(() => {
      console.log(7);
      setTimeout(() => {
        console.log(8);
      }, 0);
    });
});

setTimeout(() => {
  console.log(9);
});

console.log(10);

// 1  4  10  5  6  7  2  9  8  3
*/

//--------------------------------------

/*console.log("1");


setTimeout(function() {
  console.log("2");
  process.nextTick(function() {
    console.log("3");
  });
  new Promise(function(resolve) {
    console.log("4");
    resolve();
  }).then(function() {
    console.log("5");
  });
});


process.nextTick(function() {
  console.log("6");
});


new Promise(function(resolve) {
  console.log("7");
  resolve();
}).then(function() {
  console.log("8");
});



setTimeout(function() {
  console.log("9");
  process.nextTick(function() {
    console.log("10");
  });
  new Promise(function(resolve) {
    console.log("11");
    resolve();
  }).then(function() {
    console.log("12");
  });
});



// 1  7  6  8  2  4   3  5  9  11  10  12*/

//---------------------------------

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
console.log("script start");
setTimeout(function() {
  console.log("setTimeout");
}, 0);
async1();
new Promise(function(resolve) {
  console.log("promise1");
  resolve();
}).then(function() {
  console.log("promise2");
});
console.log("script end");

// 'script start'   'async1 start'   'async2'   'promise1'   'script end'    'promise2'   'async1 end'   'setTimeout'
