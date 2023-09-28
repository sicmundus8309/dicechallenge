function imgret(num){
    switch (num) {
        case 1:
            return "./Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice1.png";
            
        case 2:
            return "./Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice2.png";
            
        case 3:
            return "./Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice3.png";
            
        case 4:
            return "./Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice4.png";
            
        case 5:
            return "./Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice5.png";
            
        case 6:
            return "./Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice6.png";
    }
}

function results(num1 , num2 ,p1 , p2){
    if(num1==num2){
        return "Match Tied";
    }
    else if(num1>num2){
        return p1+" Won the Match";
    }
    else{
        return p2+" Won the match"
    }
}

let p1 = prompt("Enter the name of player1 : "); 
let p2 = prompt("Enter the name of player2 : "); 
document.getElementsByClassName("dice1")[0].querySelector("p").innerHTML=p1;
document.getElementsByClassName("dice2")[0].querySelector("p").innerHTML=p2;
let dice = [1,2,3,4,5,6];
let num1 = Math.random()*100;
num1=Math.floor(num1);
num1=num1%7;
if(num1==0){
    num1++;
}
let num2 = Math.random()*100;
num2=Math.floor(num2);
num2=num2%7;
if(num2==0){
    num2++;
}
document.querySelectorAll("img")[0].src=imgret(num1);
document.querySelectorAll("img")[1].src=imgret(num2);
document.getElementsByClassName("result")[0].querySelector("h3").innerHTML=results(num1,num2,p1,p2);

