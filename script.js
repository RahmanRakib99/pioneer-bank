//1: Login Button click handle

const loginBtn=document.getElementById("login-button");
loginBtn.addEventListener("click",function(){

   const loginArea=document.getElementById("login-area");
   loginArea.style.display="none";

   const transactionArea=document.getElementById("transaction-area");
   transactionArea.style.display="block";
})

//2:deposite button click handle
const getDepoBtn=document.getElementById("Deposite-btn");
getDepoBtn.addEventListener("click",function(){
    const getInputValue=document.getElementById("deposite-input-text").Value;
    const getInputNumber= parseFloat(getInputValue);

    const currentDeposite=document.getElementById("currentDeposite").innerText;
    const currentDepositeNumber=parseFloat(currentDeposite);
const totalDeposite=getInputNumber+currentDepositeNumber;
   
document.getElementById("currentDeposite").innerText=totalDeposite;
})