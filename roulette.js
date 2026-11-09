let sayiRoulette = Math.floor(Math.random() * 6 + 1);
console.log(sayiRoulette);
let sayiHT = Math.floor(Math.random() * 2 + 1);
let heads = document.getElementById("heads");
let tails = document.getElementById("tails");
let expired = 0
let div2 = document.getElementById("xy");
if (div2){
div2.style.display = "none";
}
let div3 = document.getElementById("siraSende");
if (div3){
div3.style.display = "none";}
let role = "oyuncu"
let div4 = document.getElementById("div4");
div4.style.display = "none";
let divSon = document.getElementById("divSon");
divSon.style.display = "none";


let div1 = document.getElementById("button");

if (sayiHT == 1) {
sayiHT = "heads";
} else {
sayiHT = "tails";
}
function abc(id) {
    div2 = document.getElementById("xy"); 

    if (id == sayiHT) {
        alert( " its " + sayiHT + " you win | you start");
        if(div2){div2.style.display = "block"};
        if(div1){div1.style.display = "none";}
        if(div3){div3.style.display = "block";}
    } else {
        alert( " its " + sayiHT + " you loose | computer starts");
        if(div1){div1.style.display = "none";}
        if(div2){div2.style.display = "block";}

etc()
    }
}

function fox(){
    
    
    expired += 1
    if (expired == sayiRoulette){
resim.src = '5.jpg';
    if(div4){
div4.style.display = 'none';

setTimeout(function() {
        alert ("You lost")
        divSon.style.display = 'block';

    }, 1000);

    }
    }
    else {
        role = "bilgisayar"
        console.log(role)
        resim.src = '8.png';
    setTimeout(function() {
        resim.src = '2.png';


if(div4){
div4.style.display = 'none'
    }
    if ( role == "bilgisayar"){
        etc()
    }

    }, 1000);
    
    }
    
}
function etc (){ 
    
    resim.src = '2.png'; 

setTimeout(function() {
    let bilgisayarSayi = Math.floor(Math.random() * 2 + 1);
    
    if (bilgisayarSayi == 1) {
        
        
        resim.src = '7.png'; 
        
        
        sayiRoulette = Math.floor(Math.random() * 6 + 1);
        console.log(sayiRoulette);
        expired = 0;
        expired += 1;
        
        
        setTimeout(function() {
            resim.src = '1.png'; 
        }, 1500);
        
        
        setTimeout(function() {
            if (expired == sayiRoulette) {
                resim.src = '4.png';
                 setTimeout(function() { 
        alert("you won"); 
        divSon.style.display = 'block';
    }, 1000); 

            
            } else {
                resim.src = '9.png'; 
                setTimeout(function() {
                    resim.src = '2.png';
                     role = "oyuncu"
                    
                }, 1000);
                
                if (div4 && div3) {
                    div4.style.display = 'none';
                    div3.style.display = 'block'
                }
            }
        }, 2500);

    } else {
             expired += 1
    if (expired == sayiRoulette){
resim.src = '1.png';
setTimeout(function() {
      resim.src = '4.png';
      
     setTimeout(function() { 
        alert("you won"); 
        divSon.style.display = 'block';
    }, 1000); 

    }, 500);

    }

    else {
        resim.src = '1.png';
        setTimeout(function() {
        resim.src = '9.png';
    }, 500);
        
    setTimeout(function() {
        resim.src = '2.png';
    }, 1000);
    if(div4 , div3){
div4.style.display = 'none'
div3.style.display = 'block'
    }
    }

        }
    }, 1000);
}
