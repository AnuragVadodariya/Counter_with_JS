const btnMinus=document.getElementById('lower');
const btnPlus=document.getElementById('upper');

//all addEventListener here
btnPlus.addEventListener('click',plusValue);
btnMinus.addEventListener('click',minusValue);

function plusValue(){
    let Num=document.getElementById('counter').innerHTML;
    let Strconvert=Number(Num);
    let plusval=Strconvert+1;
    document.getElementById('counter').innerHTML=plusval;
}

function minusValue(){
    let Num=document.getElementById('counter').innerHTML;
    let Strconvert=Number(Num);
    let minusval=Strconvert-1;
    document.getElementById('counter').innerHTML=minusval;
}