function resetGame(){
    const numList = document.getElementById('numList');
    while(numList.hasChildNodes()){
        numList.removeChild(numList.firstChild);
    }
    randomNum = 0;
    checkStart = 0;
    guide.innerHTML = '취소되었습니다.'
}
document.getElementById('resetGame').addEventListener('click', function(){
    if (checkStart === 1){
        resetGame();
    }
});