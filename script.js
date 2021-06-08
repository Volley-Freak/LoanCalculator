document.querySelector('.loan-form').addEventListener('submit',result);
// document.querySelector('.loan-form').addEventListener('submit',showLoading);

//loading function
function showLoading(){
    let loading=document.querySelector('.image');
    let result=document.querySelector('.calculate-result');
    loading.style.display='block';
    result.style.display='none';

    setTimeout(clearLoading,2000);
    // showResult();

}

//clear loading function
function clearLoading(){
    let loading=document.querySelector('.image');
    loading.style.display='none';
}


function showResult(){
    // showLoading();
    let result=document.querySelector('.calculate-result');
    // result.style.display='block';

    //user inputs
    let loanAmount=document.getElementById('loan-amount');
    let interest = document.getElementById('interest');
    let years=document.getElementById('years-to-repay');

    //result inputs
    let monthlyPayment=document.getElementById('monthly-payment');
    let totalPayment=document.getElementById('total-payment');
    let totalInterest=document.getElementById('total-interest');

    let principal=parseFloat(loanAmount.value);
    let calculatedInterest=parseFloat(interest.value)/100/12;
    let calculatedPayments=parseFloat(years.value)*12;

    //computing monthly payments
    let x=Math.pow(1+calculatedInterest, calculatedPayments);
    let monthly=(principal*x*calculatedInterest)/(x-1);

    
    if(isFinite(monthly)) {

        result.style.display='block';
        monthlyPayment.value=monthly.toFixed(2);
        totalInterest.value=((monthly * calculatedPayments)-principal).toFixed(2);
        totalPayment.value=(monthly*calculatedPayments).toFixed(2);

    }
    else{
        showError()
    }

    // e.preventDefault();
}

function showError(){
    let alert=document.querySelector('.error');
    alert.style.display='block';

    setTimeout(clearError,3000);
}

//function to clear the error
function clearError() {

    let alert=document.querySelector('.error');
    alert.style.display='none';
}


//result function

function result(e){

    showLoading();
    setTimeout(showResult,2000);

    e.preventDefault();
}