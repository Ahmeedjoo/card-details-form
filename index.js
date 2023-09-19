let cardName = document.getElementById("cardName"),
  cardNumber = document.getElementById("cardNumber"),
  mm = document.getElementById("mm"),
  yy = document.getElementById("yy"),
  cvc = document.getElementById("cvc"),
  cardNumTxt = document.getElementById("cardNumTxt"),
  cardUserName = document.getElementById("cardUserName"),
  wrongNum = document.getElementById("wrongNum"),
  date = document.getElementById("date"),
  mSpan = document.getElementById("mSpan"),
  ySpan = document.getElementById("ySpan"),
  Confiemm = document.getElementById("Confiem"),
  cardCvc = document.getElementById("card-cvc"),
  expWrong = document.getElementById("expWrong"),
  cvcWrong = document.getElementById("cvcWrong"),
  form = document.getElementById("form"),
  nameWrong = document.getElementById("nameWrong"),
  complate = document.getElementById("complate")
;

let wrong = false;

function inputCardInfo() {
  cardUserName.innerHTML = `${cardName.value}`
  if (cardNumber.value == Number(cardNumber.value)) {
    if(cardName.value != ''){
      nameWrong.innerHTML = ''
    }
    var x = cardNumber.value;
    const str_a = x.toString();
    // console.log(Number(str_a.slice(0, 4)) + "   " + Number(str_a.slice(4, 8)));
    cardNumTxt.innerHTML =
      Number(str_a.slice(0, 4)) +
      "  " +
      Number(str_a.slice(4, 8)) +
      "  " +
      Number(str_a.slice(8, 12)) +
      "  " +
      Number(str_a.slice(12, 16))
    ;
    cardNumber.classList.remove("wrong-number");
    wrongNum.innerHTML = ""  ;

    if (mm.value == Number(mm.value) && yy.value == Number(yy.value)) {
      expWrong.innerText = ""
      if(Number(mm.value) < 10){
        mSpan.innerHTML = `0${mm.value}`
      }else if(Number(mm.value) > 12){
        console.log("undifind date")
        wrong = true;
        expWrong.innerText = "coudn`t be blank"
        mm.classList.add("redBorder")
      }
      else{
        mSpan.innerHTML = `${mm.value}`
        expWrong.innerText = ""
        mm.classList.remove("redBorder")
      }
      if(Number(yy.value) > 30 ){
        wrong = true;
        expWrong.innerText = "coudn`t be blank"
        yy.classList.add("redBorder")
      }else if(Number(yy.value) < 23  ){
        expWrong.innerText = "coudn`t be blank"
      } else {
        ySpan.innerHTML = `${yy.value}`
        expWrong.innerText = ""
        yy.classList.remove("redBorder")
      }
    }
    else{
      expWrong.innerText = "coudn`t be blank"
      wrong = true;
    }
  }else {
    cardNumber.classList.add("wrong-number");
    wrongNum.innerHTML = "Wrong format , numbers only";
    wrong = true;
  }

  if (cvc.value == Number(cvc.value)){
    cardCvc.innerHTML = `${Number(cvc.value)}`
    cvcWrong.innerText = ""
    cvc.classList.remove("redBorder")
  }
  else{
    wrong = true;
    cvcWrong.innerText = "coudn`t be blank"
    cvc.classList.add("redBorder")
  }
}
Confiemm.addEventListener('click' , function(){
  if(wrong == true){
    console.log("wrong input info");
  } else  if(mm.value == ''&& yy.value == ''){
    expWrong.innerHTML = 'Inter Exp Info, Please!'
  }else if(cardName.value == ''){
    nameWrong.innerHTML = 'Inter card name, please'
  }else if(cardNumber.value == ''){
    wrongNum.innerHTML = "Inter card number, please"
  }else if(cvc.value == ''){
    cvcWrong.innerHTML = "Inter card cvc, please"
  }
  
  if(wrong != true && 
    cvc.value != '' &&
    cardNumber.value != '' &&
    cardName.value != '' &&
    mm.value != ''&& yy.value != ''){

    form.style.display = "none"
    complate.style.display = "flex"
    cardNumTxt.innerHTML = "0000 0000 0000 0000"
    cardUserName.innerHTML = "Ahmed Yousef"
    mSpan.innerHTML = "00"
    ySpan.innerHTML = "00"
    cardCvc.innerHTML = ""
  }
})
