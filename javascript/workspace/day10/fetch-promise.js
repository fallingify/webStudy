fetch("https://jsonplaceholder.typicode.com/posts/100")
.then((response) => {
    if(!response.ok){//성공아니면
        throw new Error(`response: ${response.status}`); //상태코드200 -> 성공, 다른코드 -> 에러발생시킨다
    }

    return response.json(); //json형식으로 변환된 응답데이터 반환
})
//위의 then 메소드에서 반환된 json데이터를 받아옴
.then((post) => { 
    //받아온 데이터가 없다면 에러를 발생시킴
    if(!post) {
        throw new Error(`none result`)
    }
    //받아온 데이터가 있다면 id, title 정보를 반환
    return {id: post.id, title: post.title}
})
//최종적으로 받아온데이터를 콘솔에 출력
.then(console.log)
//위 .then()에서 발생한 에러를 처리
.catch((error) => {console.log(error); console.log(`error`)})
