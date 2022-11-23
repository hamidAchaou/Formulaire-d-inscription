//-------------------- VALIDATION SUBMIT --------------------------------------------==

document.getElementById("button").onclick = function(e){
    e.preventDefault();
// Validation name
let resultNameSub = document.getElementById("result-name")
let namSub = document.querySelector("#name");
let regNamSub = /^[a-zA-\s]+$/i;
const arr = [] ;
 

if (namSub.value.length === 0) {
    resultNameSub.innerHTML="Please choose your Last Name"
    resultNameSub.style.color = "red";
} else if( namSub.value.length > 15 ){
    resultNameSub.innerHTML="il ya plus de 15 charactere"
    resultNameSub.style.color = "red";
} else if( regNamSub.test(namSub.value) === false ){
    resultNameSub.innerHTML="seules les lettres sont autorisees"
    resultNameSub.style.color = "red";
}else {
    resultNameSub.innerHTML=" ";
    arr.push(true);
}

// Validation prénom
let Prénom = document.getElementById("Prénom");
let resultPrébom = document.getElementById("result-Prénom");
let regPrénom = /[a-z]{1,30}/i

if (Prénom.value.length === 0) {
    resultPrébom.innerHTML="Please choose your First name"
    resultPrébom.style.color = "red";
} else if( Prénom.value.length > 15 ){
    resultPrébom.innerHTML="il ya plus de 15 charactere"
    resultPrébom.style.color = "red";
} else if( regPrénom.test(Prénom.value) === false ){
    resultPrébom.innerHTML="seules les lettres sont autorisees"
    resultPrébom.style.color = "red";
}else {
    resultPrébom.innerHTML=" ";
    arr.push(true);
}

// Validation email 
let Email = document.getElementById("Email");
let resultEmail = document.getElementById("result-Email");
let regEmail = /\w+@gmail.com/ig;

if (Email.value.length === 0) {
    resultEmail.innerHTML="Please choose your Email"
    resultEmail.style.color = "red";
} else if( regEmail.test(Email.value) === false ){
    resultEmail.innerHTML="ce nest pas email"
    resultEmail.style.color = "red";
}else {
    resultEmail.innerHTML=" ";
    arr.push(true);
}

// Validation phone number
let phoneNumber = document.getElementById("phone-number");
let resultPhone = document.getElementById("result-phone");
// let regPhone = /^[(07|06|05)\d]{8,8}/
let regPhone = /(07|06|05)[0-9]{8,}/


if (phoneNumber.value.length === 0) {
    resultPhone.innerHTML="Please choose your phone number"
    resultPhone.style.color = "red";
} else if( regPhone.test(phoneNumber.value) === false ){
    resultPhone.innerHTML="ce nest pas phone Number"
    resultPhone.style.color = "#ec3051;";
} else {
    resultPhone.innerHTML=" " ;
    arr.push(true);
}

// cheacked Genre
    let Genre = document.getElementsByName("gen");
    let resultGenre = document.getElementById("resultGenre");

    resultGenre.innerHTML=" " ;
    if(Genre[0].checked === false &&  Genre[1].checked == false ){
        resultGenre.innerHTML="Please choose your gender";
        resultGenre.style.color = "red";
    } else {
        resultGenre.innerHTML=" " ;
        arr.push(true);
    }

//cheacked Groupe
let allGroup = document.querySelectorAll(".Groupe");
let allClub = document.querySelectorAll(".club");
let resGroup = document.querySelector("#res-group");

let chec = false ;
for(let i = 0 ; i < allGroup.length ; i++){
    if (allGroup[i].checked === true) {
        chec = true
        break;
    }

}

if(chec === false){
    resGroup.innerHTML="Please choose your group"
    resGroup.style.color = "red"
    }else {
        resGroup.innerHTML=" " ;
        arr.push(true);
    }
    let tester2 = false ;
    let num = 0 ;
    for(let i = 0 ; i < allClub.length ; i++){
        // console.log(i);
        if (allClub[i].checked === true) {
            tester2 = true ;
            num += 1 ;
        }
    }


//cheacked Club
let resultClub = document.querySelector("#resultClub");

    if(sel.selectedOptions.length === 0){
    resultClub.innerHTML="Please choose your Club"
    resultClub.style.color = "red"
    } else if(sel.selectedOptions.length > 3){
    resultClub.innerHTML="max is 3"
    resultClub.style.color = "red"
    }else {
        resultClub.innerHTML=" " ;
        arr.push(true);
    }

let form = document.getElementById("form")
if(arr.length === 7){
form.submit();
}

}