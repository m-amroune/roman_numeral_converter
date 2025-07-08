const userNumber = document.querySelector("#number");
const convertBtn = document.querySelector("#convert-btn");
const output = document.querySelector("#output");

const numbers = 
  {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }
;

const validateInput = (input) => {
  if(input === ""){
    return "Please enter a valid number"
  } else if(input < 1){
    return "Please enter a number greater than or equal to 1"
  } else if(input >= 4000){
    return "Please enter a number less than or equal to 3999"
  }
  return null;
}

const convertNumber = () => {
  convertBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const userInput = Number(userNumber.value);
    const errorMessage = validateInput(userInput)

    if(errorMessage){
      output.innerHTML = errorMessage
    } else{
      converter(userInput)
    }
  });
};
convertNumber();

const converter = (userNumber) => {
    let result = ""
    const numbersTypes = Object.entries(numbers).sort((a,b) => b[1] - a[1]);

    for(let [roman, arabic] of numbersTypes){
        while(userNumber >= arabic ){
            result += roman;
          userNumber -= arabic 
        }
    }
    output.innerHTML = `${result}`;
}

