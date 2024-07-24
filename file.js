let a=document.getElementById('logic');
let plus=document.getElementById('plus');
let del=document.getElementById('del');
let equal=document.getElementById('equal');
let minus=document.getElementById('minus');
let multi=document.getElementById('multi');
let mod=document.getElementById('mod');
let dot=document.getElementById('dot');
let divide=document.getElementById('divide');
function clearscreen(){
    a.value="";
}

function cross(){
    const myarr=Array.from(a.value);
    console.log(myarr);
    myarr.pop();
    a.value=myarr.join("")
}

function funplus(){
    a.value=a.value+'+';
}

function funminus(){
    a.value=a.value+'-';
}

function funmulti(){
    a.value=a.value+'x';
}

function fundvide(){
    a.value=a.value+'/';
}

function fundot(){
    a.value=a.value+'.';
}

function funmod(){
    a.value=a.value+'%';
}

let zero=document.getElementById('zero');
function fun(){
    a.value=a.value+'0';
}


let one=document.getElementById('one');
function fun1(){
    a.value=a.value+'1';
}

let two=document.getElementById('two');
function fun2(){
    a.value=a.value+'2';
}

let three=document.getElementById('three');
function fun3(){
    a.value=a.value+'3';
}

let four=document.getElementById('four');
function fun4(){
    a.value=a.value+'4';
}
function fun5(){
    let five=document.getElementById('five');
    a.value=a.value+'5';
}
function fun6(){
    let six=document.getElementById('six');
    a.value=a.value+'6';
}
function fun7(){
    let seven=document.getElementById('seven');
    a.value=a.value+'7';
}
function fun8(){
    let eight=document.getElementById('eight');
    a.value=a.value+'8';
}
function fun9(){
    let nine=document.getElementById('nine');
    a.value=a.value+'9';
}


function funequal(){
    let arr=Array.from(a.value);
    console.log(arr);
}