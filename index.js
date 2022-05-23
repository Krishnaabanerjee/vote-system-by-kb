let a = document.querySelector('.party-1');
let b = document.querySelector('.party-2');
let c = document.querySelector('.party-3');
let sum = document.querySelector('.result');
let pA = document.querySelector('.p1');
let pB = document.querySelector('.p2');
let pC = document.querySelector('.p3');

let count1 = 0;

a.addEventListener('click', () => {
     count1++
    pA.innerHTML = count1;
    console.log('clicked');
    
});

let count2 =0;
b.addEventListener('click', () => {
    count2++
   pB.innerHTML = count2;
   console.log('clicked');
   
});

let count3 = 0;
c.addEventListener('click', () => {
    count3++
   pC.innerHTML = count3;
   console.log('clicked');
   
});
sum.addEventListener('click', () => {
        sum.innerHTML = count1 + count2 + count3;
        console.log('result');
        alert(`Total Vote For Party-1 is ${count1}
        Total Vote For Party-2 is ${count2}
        Total Vote For Party-3 is ${count3} ` );
});
