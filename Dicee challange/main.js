
let randomnumber1 = Math.floor((Math.random() * 6) + 1) ;
let randomnumber2 = Math.floor((Math.random() * 6) + 1) ;

let randomDice1 = `dice${randomnumber1}.png`;
let randomDice2 = `dice${randomnumber2}.png`;

let randomImgDice1 = `images/${randomDice1}`;
let randomImgDice2 = `images/${randomDice2}`;

document.querySelectorAll("img")[0].setAttribute("src", randomImgDice1);
document.querySelectorAll("img")[1].setAttribute("src", randomImgDice2);



if(randomnumber1 > randomnumber2){
    document.querySelectorAll("h1")[0].innerHTML = "Player 1 Wins! &#128681";
} else if (randomnumber1 < randomnumber2) {
    document.querySelectorAll("h1")[0].innerHTML = "Player 2 Wins! &#128681";
} else {
    document.querySelectorAll("h1")[0].innerHTML = "Draw !";
}


