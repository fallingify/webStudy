// await 문법으로 바꾸기 <- 미완성
async function getZip(){
    return fetch("https://jsonplaceholder.typicode.com/users");
}

async function printZip(){
    const zipcode = await getZip();
    console.log(zipcode);
    
}
printZip();