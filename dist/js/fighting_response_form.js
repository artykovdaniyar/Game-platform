import formValidChecker from "./modules/formValidChecker.js";
const input = document.querySelector(".page__input")
const responseBtn = document.querySelector(".fighting__response-btn")
const balanceInfo = document.querySelector(".balance");
let balance = 4000;
const fightingPrice = document.querySelector(".fighting__response-price-sum").textContent.replace(/[а-я]{1,}/, "")

formValidChecker(input)
responseBtn.addEventListener("click", (e) => {
    if(input.value == ""){
        e.preventDefault()
        input.classList.add("invalid__input")
    }else if(fightingPrice > balance){
        e.preventDefault()
        balanceInfo.style.display = "flex"
    }

})
