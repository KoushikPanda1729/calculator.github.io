let string = "";

let allButtons = document.querySelectorAll(".button");
let input = document.querySelector(".input");
let equal = document.querySelector(".equal");


allButtons.forEach(button => {


    button.addEventListener("click", (event) => {
        if (event.target.innerText == '=') {
            string = eval(string);
            input.value = string;
        }
        else if (event.target.innerText == 'Ac') {
            string = "";
            input.value = string;
        }
        else {
            string += event.target.innerText;
            if (string == "*" || string == "/" || string == "-" || string == "+") {
                equal.style.opacity = "0.2";
                equal.style.cursor = "not-allowed";
                string = "";
                return;
            }
            else {
                equal.style.opacity = "1";
                equal.style.cursor = "allowed";
                input.value = string;
            }
        }


    })
})