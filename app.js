const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const  totalExpensesOutput= document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');


let total = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
}

confirmBtn.addEventListener('click',()=>{
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if(enteredReason.trim().length <=0 || enteredAmount<=0 || enteredAmount.trim().length <=0){
        alertCtrl.create({
            message:'Please enter a valid Reason and Amount',
            header:'Invalid parameters',
            buttons:['Okay']
        }).then(alertElement => {
            alertElement.present();
        });
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': ' + enteredAmount + '€' ;

    expensesList.appendChild(newItem);

    total += +enteredAmount;
    console.log(total);
    totalExpensesOutput.textContent = total + '€';

    clear();
});

cancelBtn.addEventListener('click', clear);



