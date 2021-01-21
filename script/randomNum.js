sliderValue.innerHTML = slider.value*10;

slider.oninput = function() {
    sliderValue.innerHTML = this.value*10;
}
let randomNum = 0;
let checkStart = 0;
function createRandom(value){
    if (value === '0'){
        guide.innerHTML = '';
        alert('고를 수 없는 숫자 입니다.')
    }else{
        randomNum = Math.ceil(Math.random() * value*10);
        guide.innerHTML = '시작합니다.'
    }
}
startGame.addEventListener('click', function(){
    resetGame;
    checkStart = 1;
    createRandom(slider.value)
})