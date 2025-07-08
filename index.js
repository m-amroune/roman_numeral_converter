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

const convertNumber = () => {
  convertBtn.addEventListener("click", (event) => {
    event.preventDefault();

    if (userNumber.value === "") {
      output.innerHTML = "Please enter a valid number";
    } else{
        converter(Number(userNumber.value))
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

