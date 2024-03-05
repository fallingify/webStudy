let msg = "GLOBAL";

function outer(){
    let msg = "outer";
    console.log(msg);
    if(true){
        let msg = "block";
        console.log(msg);
    }
}
outer();