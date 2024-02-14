document.querySelector('input')
    .addEventListener('click', changeMention1);

function changeMention1(e){
    if(e.target.value === "클릭 또는 마우스를 올려보세요!"){
        e.target.value = "버튼이 클릭되었습니다";
    } else{
        e.target.value= "클릭 또는 마우스를 올려보세요!"
    }
}

document.querySelector('input')
    .addEventListener('mouseover', changeMention2);

function changeMention2(e){
    e.style.backgroundColor = 'lightblue';
    e.target.value = "마우스가 버튼위에 있습니다";
}

document.querySelector('input')
    .addEventListener('mouseout', changeMention3);

function changeMention3(e){
    e.style.backgroundColor = "";
    e.target.textContent = "클릭 또는 마우스를 올려보세요!"
}

