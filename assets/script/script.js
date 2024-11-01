const inputDate = document.querySelector('.inputDate');

const button = document.getElementById('button');
const articleSpan = document.querySelector('.articleSpan');
const spanErrorText = document.querySelector('.spanTextError');
const spanText = document.querySelector('.spanText');

button.addEventListener('click', function(){
if(inputDate.value === ''){
    spanErrorText.style.display = 'block';
}
else{
    spanErrorText.style.display = 'none';
    const currentDate = new Date();
const birthday = new Date(inputDate.value);
const timeDiff = Math.abs(currentDate - birthday);
const amountOfDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

let daysText;
if(amountOfDays===1){
daysText='день'
} else if(amountOfDays>=2 && amountOfDays<=4){
daysText='дня'
} else if(amountOfDays>=5){
daysText='дней'
}

spanText.style.display='block';
spanText.textContent=`До вашего дня рождения осталось ${amountOfDays} ${daysText}.`;
}
}
)