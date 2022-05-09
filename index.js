const cardList = document.querySelector('.cardList');

const score = document.querySelector('.score');
let points = 0;

const mayo = document.querySelector('.mayo');

function addCard(value){
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('active');
    card.innerHTML = value;
    cardList.appendChild(card);
}

function buildBoard(){
    for (let i=0; i<12; i++){
        addCard('starter');
    }
}

cardList.addEventListener('click', function(e){
    console.log(e.target);
    if (e.target.matches('cardList')){
        return
    }
    if (e.target.classList.contains('active')){
        e.target.classList.remove('active');
        e.target.classList.add('inactive');
        points++;
        score.textContent = points;
        return
    }
    e.target.remove();
    points +=2;
    score.textContent = points;
    let children = cardList.children;
    if (children.length < 1){
        clearInterval(interval);
    }
});

mayo.addEventListener('click', function(){
        points +=5;
        score.textContent = points;
});
buildBoard();

let interval = setInterval(function(){
    addCard(cardList.children.length + 1)
}, 2000);

