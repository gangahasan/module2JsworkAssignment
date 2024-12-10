
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

function createBankAccount(){
  let balance = 0;
  return {
    deposit:function(depositamount){
      balance += depositamount;
      return `Deposited: ${balance}`;
    },
    withdraw: function(withdraw){
      if(withdraw<=balance){
        balance = balance-withdraw;
        return `Withdrawn: ${withdraw}`;
      }else{
        return "Insufficient balance";
      }
    },
    balance:function(){
      return balance;
    },
  }
}
const account = createBankAccount();
console.log(account.deposit(500)); // Output: Deposited: 500
console.log(account.withdraw(200)); // Output: Withdrawn: 200
console.log(account.withdraw(400)); // Output: Insufficient balance
console.log(account.balance()); 