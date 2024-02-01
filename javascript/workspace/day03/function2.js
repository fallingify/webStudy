function Player(name, number, goals, position) {
    this.name = name;
    this.number = number;
    this.goals = goals;
    this.position = position;
}
//국가대표 객체 생성
const nationalTeam = new Object();

//선수객체 생성
const p1 = new Player("손흥민", 7, 4, "미드필드");
const p2 = new Player("조규성", 9, 1, "공격수");
const p3 = new Player("조현우", 21, 0, "골키퍼");

nationalTeam.p1 = p1;
nationalTeam.p2 = p2;
nationalTeam.p3 = p3;

console.log("카타르 아시안컵 국가대표 선수 목록");
for (let i in nationalTeam) {
    console.log(
        "이름 : " + nationalTeam[i].name,
        ", 포지션 : " + nationalTeam[i].position
    );
}


