function checkAnswer(value,num){
    if (checkStart === 0){
        alert('게임을 시작해주세요');
    }else{
        const node = document.createElement("li");
        const textnode = document.createTextNode(value);
        node.appendChild(textnode);
        numList.appendChild(node);
        if(value<num){
            guide.innerHTML = '좀 더 큰 숫자입니다.'
        }else if (value === num){
            guide.innerHTML = '정답입니다.'
        }else{
            guide.innerHTML = '좀 더 작은 숫자입니다.'
        }
    }
    answerBox.value = '';
}
answerBox.addEventListener('keypress',function(e){
    if (e.keyCode === 13){
        checkAnswer(answerBox.value,randomNum);
    }
})