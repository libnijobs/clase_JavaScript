const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  function parent() { // function interna
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
      console.log(inner, myNumber, myGlobal);
    }

    return child();
  }

  return parent();
}

myFunction();

//////////////////////////////////////////////////////////////////////////////////////////////////////

function sumWithClosure(firstNum) {
    console.log(firstNum);
    return function hijo(secondNum = 0) {
      console.log(firstNum + secondNum);
      return function hijo2(therNum){
        console.log(firstNum + secondNum + therNum); 
      }
    }
  }
  sumWithClosure(5)(5)(5)