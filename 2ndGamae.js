//VARRIABLES
let score = 0;
let time = 0
let title = document.getElementById("score")
let timer = document.getElementById("timer")
title.innerHTML = 'score = ' + score
//IF statments
if (score == 50){
    title.style.color = 'orange'
}
else if(score == 100){
    title.style.color = 'darkorange'
}
else if(score == 200){
    title.style.color = 'red'
}
else if(score == 300){
    title.style.color = 'darkred'
}
else if(score === 500){
    title.style.color = 'lightblue'
}
else if(score === 700){
    title.style.color = 'blue'
}
else if(score === 1000){
    title.style.color = 'darkblue'
}
//FUNCTIONS
 function hit1(){
    const block1 = document.getElementById("block1");
    if (score == 50){
        title.style.color = 'orange'
    }
    else if(score == 100){
        title.style.color = 'darkorange'
    }
    else if(score == 200){
        title.style.color = 'red'
    }
    else if(score == 300){
        title.style.color = 'darkred'
    }
    else if(score === 500){
        title.style.color = 'lightblue'
    }
    else if(score === 700){
        title.style.color = 'blue'
    }
    else if(score === 1000){
        title.style.color = 'darkblue'
    }
    title.innerHTML = 'score = ' + score
    if (block1.innerHTML == 'click'){
        score += 1
        title.innerHTML = 'score = ' + score
    }
    else if(block1.innerHTML == 'd\'ont click'){
        score -= 2
        title.innerHTML = 'score = ' + score
    }
    else if(block1.innerHTML == 'go!'){
        score +=20
        title.innerHTML = 'score = ' + score
    }
}
//BUTTON FUNCTION
const btn = document.getElementById("btn")
let savescore;
btn.addEventListener("click",clickbtn)
function clickbtn(){
    savescore = score
    console.log(savescore)
    location.reload()
}
//GREEN RED YELLOW RANDOMISE
setInterval(function(){block1.style.backgroundColor = 'red'
block1.innerHTML = 'd\'ont click'} , 7000)
setInterval(function(){block1.style.backgroundColor = 'forestgreen';block1.innerHTML = 'click'} , 10000)
setInterval(function(){block1.style.backgroundColor = 'yellow';block1.innerHTML = 'go!'}, 10000)
setInterval(function(){block1.style.backgroundColor = 'forestgreen';block1.innerHTML = 'click'}, 10400)
setInterval(function(){block1.style.backgroundColor = 'red';block1.innerHTML = 'd\'ont click'}, 3000)
setInterval(function(){block1.style.backgroundColor = 'forestgreen';block1.innerHTML = 'click'}, 3900)
setInterval(function(){time += 1;timer.innerHTML = ('timer = ' + time)}, 1000)
setInterval(function(){document.write("your score is = " + score)}, 100.5 * 1000)