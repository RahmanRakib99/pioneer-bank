//login btn click handle
const loginBtn=document.getElementById("login-button");
loginBtn.addEventListener("click",function(){
    const loginArea=document.getElementById("login-area");
   loginArea.style.display="none";

   const transactionArea=document.getElementById("transaction-area");
transactionArea.style.display="block";
})
//deposit btn  click handle
const depositBtn=document.getElementById("addDeposit");
depositBtn.addEventListener("click",function(){
     const depositAmount=document.getElementById("depositAmount").value;
    const depositNumber=parseFloat(depositAmount);

    const currentDeposit=document.getElementById("currentDeposit").innerText;
    const currentDepositNumber=parseFloat(currentDeposit);
    const totalDeposit=depositNumber+currentDepositNumber;
    document.getElementById("currentDeposit").innerText=totalDeposit;
    //samevhabe balance add
    const currentBalance=document.getElementById("currentBalance").innerText;
    const currentBalanceNumber=parseFloat(currentBalance);
    const totalBalance=currentBalanceNumber+depositNumber;
    document.getElementById("currentBalance").innerText=totalBalance;


    document.getElementById("depositAmount").value="";//depo input ke empty korar jnnw; 
})
// withdraw Btn click handle
const withdrawBtn=document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click",function(){
     const withdrawAmount=document.getElementById("withdrawAmount").value;
     const withdrawAmountNumber=parseFloat(withdrawAmount);

     const currentWithdraw=document.getElementById("currentWithdraw").innerText;
     const currentWithdrawNumber=parseFloat( currentWithdraw);
     const totalWithdraw=withdrawAmountNumber+currentWithdrawNumber;
     document.getElementById("currentWithdraw").innerText=totalWithdraw;
     //samevhabe balance theke remove hobe
     const currentWithdrawBalance=document.getElementById("currentBalance").innerText;
     const currentWithdrawBalanceNumber=parseFloat(currentWithdrawBalance);
     const totalWithdrawBalance=currentWithdrawBalanceNumber-withdrawAmountNumber;
     document.getElementById("currentBalance").innerText= totalWithdrawBalance;

     document.getElementById("withdrawAmount").value="";
})
