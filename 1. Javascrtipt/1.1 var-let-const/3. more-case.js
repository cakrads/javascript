function varFunc() {
  if (false) {
    var varLang = "Javascript";
  } else {
    console.log(varLang);
  }
}
varFunc(); // undefined

function letFunc() {
  if (false) {
    let letLang = "Javascript";
  } else {
    console.log(letLang);
  }
}
letFunc(); // ReferenceError: letLang is not defined

function letFunc2() {
  let letLang;
  if (false) {
    letLang = "Javascript";
  } else {
    console.log(letLang);
  }
}
letFunc2(); // undefined
