

// let randomArray = [0 , 36, 72, 108, 144, 180, 216, 252, 288, 324, 360]
// let randomDegreeOutput = randomArray



// console.log(randomDegreeOutput);




function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

let items = [0 , 36, 72, 108, 144, 180, 216, 252, 288, 324, 360];

let randomDegree = random_item(items)


console.log(randomDegree);

document.getElementById("wheel").style.transform = "rotate("+randomDegree+"deg)";

