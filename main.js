const allClass = document.getElementsByClassName("button");
for (let i = 0; i < allClass.length; i++) {
    const element = allClass[i];
    element.addEventListener("click", function (e) {
        const check = e.target.innerText;
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
        return randomNum;
    }
    else {
        console.log(randomNum);
        return checks();
    }
}

document.getElementById("generate-btn").addEventListener("click", function () {
    document.getElementById("random-show").value = checks();;

    document.getElementById("input-shower").value = "";
    document.getElementById("try").innerText = 3;

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

    const tryString = document.getElementById("try").innerText;
    let tryNum = parseInt(tryString);
    if (generate == pin && tryNum > 0) {
        document.getElementById("pass-right").style.display = 'block';
        document.getElementById("pass-wrong").style.display = 'none';
    }
    else {
        document.getElementById("pass-right").style.display = 'none';
        document.getElementById("pass-wrong").style.display = 'block';

        //try
        if (tryNum == 0) {
            alert(" Sorry you have block try to regenerate pin ");
        }
        else {
            tryNum--;
            document.getElementById("try").innerText = tryNum;
        }

    }
}