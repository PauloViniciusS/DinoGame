const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;


function handleKeyUp(event){
    if(event.keyCode === 32){
        if(!isJumping){
            jump();
        }
    }
}

function jump(){
    isJumping = true;

    let upInterval = setInterval(() => {
        if(position >= 150){
            clearInterval(upInterval);
            
            //down
            let downInterval = setInterval(() => {
                if(position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                }else{
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
              //up
            },20);
        }else{
            position += 20;
            dino.style.bottom = position + 'px';
        }
       
    }, 20);
}

function createCactus(){
    const cactus = document.createElement('div');

    let cactusposition = 1000;
    let randomTime = Math.random() * 5000;


    cactus.classList.add('cactus');
    background.appendChild(cactus);
    cactus.style.left = 1000 + 'px';

    let leftInterval = setInterval(() => {
        if(cactusposition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else if(cactusposition > 0 && cactusposition < 60 && position < 60){
           clearInterval(leftInterval);
           document.body.innerHTML = '<h1 class="game-over">fim de jogo</h1>';
        }else{
            cactusposition -= 10;
            cactus.style.left = cactusposition + 'px';
        }
    },20);
    setTimeout(createCactus, randomTime);
}



createCactus();
document.addEventListener('keyup', handleKeyUp);
