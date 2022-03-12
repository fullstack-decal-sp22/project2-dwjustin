let total=0;
let operator=null;
let strbuffer="0";

function calculations() {
    const intBuffer = parseInt(strbuffer); 
    if (operator === "+") {
        total+= intBuffer;
    }
    else if (operator==="-"){
        total -= intBuffer;
    }
    else if (operator === "x") {
        total *= intBuffer;
    }
    else if (operator==="÷"){
        total /= intBuffer;
    }
}

function makesNumber(value) {
    if (strbuffer === "0") {
        strbuffer = value;
    } else {
        strbuffer=strbuffer+value;
    }
}

function makesSymbol(symbol) {
    if(symbol==="C"){
        strbuffer="0";
        total=0;
        operator='null';
        document.querySelector(".result-screen").innerHTML= strbuffer;
    }
    else if(symbol==="←"){
        strbuffer=String(strbuffer);
        if(strbuffer.length!==1){
            strbuffer=strbuffer.slice(0,-1);
        }
        else{
            strbuffer="0";
            document.querySelector(".result-screen").innerHTML= strbuffer;
        } 
    }
    else if(symbol==="="){
        strbuffer=strbuffer.substring(1);
        calculations();
        strbuffer=String(total);
        console.log(total);
    }
    else { 
        const intBuffer = parseInt(strbuffer);
        if(total===0){
            total=intBuffer;
        }else{
            total=intBuffer;   
        }
        operator=symbol;
        strbuffer=symbol; 
        
    }
}

function setListeners() {
    let buttons = document.querySelectorAll('button');     
    for (item of buttons) {
        item.addEventListener('click',(event)=>
        {
            tmp=event.target.innerText;
            console.log(tmp);
            buttonClicked(tmp);
        })
    }
}

function buttonClicked(valueClicked) {
    if (isNaN(parseInt(valueClicked))) { 
        makesSymbol(valueClicked);
    } else {
        makesNumber(valueClicked);
    }
    document.querySelector(".result-screen").innerHTML= strbuffer;
}

setListeners();

