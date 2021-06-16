const allClass = document.getElementsByClassName("button");
for (let i = 0; i < allClass.length; i++) {
    const element = allClass[i];
    element.addEventListener("click", function () {
        const check = this.innerText;
        let inputShower = document.getElementById("input-shower");
        if (check == "C") {
            inputShower.value = "";
        }
        else if (check == "<") {
            let getValue = inputShower.value;
            // const sp =  getValue.split('');
            // const len = sp.length;
            // const last = sp[len-1];
            //  console.log(typeof(last));
            //  console.log( getValue,last);

            //  getValue = getValue - last;
            const slice = getValue.slice(0, -1);
            inputShower.value = slice;


        }
        else {
            let add = inputShower.value + check;
            inputShower.value = add;
        }
    })

}
// genaret pin 
function checks() {
    let randomNum = Math.random() * 10000;
    randomNum = Math.round(randomNum);
    const randomNumString = randomNum + "";
    if (randomNumString.length == 4) {
        document.getElementById("random-show").value = randomNum;
    }
    else {
        console.log(randomNum);
        checks();
    }
}

document.getElementById("generate-btn").addEventListener("click", function () {
    checks();

})
//submit 
function toNum(id) {
    const value = document.getElementById(id).value;
    const valueNum = parseInt(value);
    return valueNum;
}
function submit() {
    const generate = toNum("random-show");
    const pin = toNum("input-shower");
    if (generate == pin) {
        document.getElementById("pass-right").style.display = 'block';
        document.getElementById("pass-wrong").style.display = 'none'; 
    }
    else {
        document.getElementById("pass-right").style.display = 'none';
        document.getElementById("pass-wrong").style.display = 'block';
    }
}

// function display(rightOrWrong){
//  if(rightOrWrong = "right"){
//      document.getElementById("pass-"+rightOrWrong).style.display = 'block';
//  }
//  else if(rightOrWrong = "wrong"){
//      document.getElementById("pass-"+rightOrWrong).style.display = 'block';
//  }
// }