let string = "";
const inp = document.getElementById('enter-the-number');

let btn = document.querySelectorAll('button');
Array.from(btn).forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                inp.value = string;
            } catch {
                inp.value = "Error";
                string = "";
            }
        } 
        else if (e.target.innerHTML == 'AC') {
            string = "";
            inp.value = "Enter a number";
        } 
        else if (e.target.innerHTML == '<i class="ri-delete-back-2-line"></i>') {
            string = string.slice(0, -1);
            inp.value = string;
        } 
        else if (e.target.innerHTML == 'x') {
            string += '*';
            inp.value = string;
        } 
        else {            
            string += e.target.innerHTML;
            inp.value = string;
        }
    });
});
