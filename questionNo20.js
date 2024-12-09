
function createCounter(){
    let count =0;
     return {
       increment: function () {
         count++;
         return `Current count: ${count}`;
       },
       decrement: function () {
         count--;
         return`Current count: ${count}`;
       },
        display: function () {
        return`Current count: ${count}`;
       },
     };
}
const counter = createCounter();
console.log(counter.increment()); 
console.log(counter.increment()); 
console.log(counter.decrement()); 