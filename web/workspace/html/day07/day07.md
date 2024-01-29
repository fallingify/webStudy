day07
복습 -> 가상선택자 -> transform -> transition -> animation

0. 복습

1) position
   HTML 요소를 배치하는 속성

static position 속성의 기본값, 일반적인 흐름으로 배치된다
relative 현재 자신의 위치를 기준으로 배치를 변경할 수 있다
top, right, bottom, left 속성을 사용한다
absolute 일반적인 흐름과 무관하게 배치할 수 있다
static이 아닌 부모요소를 기준으로 배치한다
fixed 브라우저 화면상으로 보이는 영역(viewport)에 고정되도록 배치한다
sticky 스크롤이 특정 위치에 도달하면 fixed처럼 화면에 고정된다
부모 요소에 height가 지정되어 있어야만 작동한다

z-index 요소가 배치될 때 겹치는 경우 어떤 요소가 위로 올라올지 순서를 정하는 속성

2. 고급선택자

1) 연결선택자
   하위 선택자 상위요소 하위요소 {}
   상위 요소에 포함된 모든 하위 요소를 선택한다
   자식 선택자 부모요소 > 자식요소 {}
   부모요소 바로 아래에 속한 자식 요소를 선택한다
   인접형제선택자 요소1 + 요소2
   형제 선택자 요소1 ~ 요소2

2) 속성선택자
   선택자[속성]
   선택자[속성=속성값]

---

1. 가상선택자

1) 가상 클래스
   선택자:가상클래스 {}
   실제 존재하는 요소의 특정상태에 따라 css를 주고 싶을 때 사용

link : href속성을 가진 태그 중 아직 방문하지 않은 상태
visited : 이미 방문한 상태
hover : 사용자가 마우스를 올린 상태
focus : 입력가능한 칸을 선택한 상태
nth-child : 형제 중 순서로 선택함
not(선택자) : 해당 선택자를 제외하고 선택함.

2. 가상 요소
   선택자::가상요소 {}
   요소의 특정 부분에 스타일을 지정하거나 새로운 요소를 삽입하기 위해 사용한다.

first-letter : 첫 글자만 선택(블록요소에도 가능)
first-line : 첫 줄만 선택(블록요소에도 가능)
before : 선택한 요소의 컨텐츠 앞에 다른 요소 삽입
after : 선택한 요소의 컨텐츠 뒤에 다른 요소 삽입

2. transform, transition

1) transform
   요소의 크기 조절, 이동, 회전 효과를 나타낼 때 사용한다.
   transform 함수를 사용한다.
   주의사항 : 요소의 display 속성이 block 또는 inline-block이어야 한다.

transform 함수
translate(x, y) , translateX(x), translateY(y)
매개변수로 넘겨준 만큼 x, y좌표 이동

      scale(x, y), scaleX(x), scaleY(y)
      넘겨준 값 만큼 확대 축소

      rotate(각도deg)
      넘겨준 값만큼 회전

2. transition
   단순한 변형을 수행한다.
   변형에 시간을 설정하여 마치 하나의 애니메이션처럼 표현할 수 있다.
   tranform과 달리 완전히 다른 스타일 변경시킬 수 있다.

transition의 속성
transition-property : all | none | 속성명
트랜지션을 적용한 속성을 설정한다.

transition-duration : 시간s
트랜지션 시간을 초단위로 설정할 수 있다.

transition-timing-function : 속성값
ease : 천천히 - 점점빨리 - 천천히(기본값)
linear : 시작부터 끝까지 같은 속도로
ease-in : 느리게 시작
ease-out: 느리게 끝나
ease-in-out : 느리게 시작해서 느리게 끝나

transition-delay : 시간s
트랜지션을 바로 시작하지 않고 지연시간을 설정한다.

transition : property | duration | timing-function | delay
위의 모든 속성을 간편하게 설정한다.

3. animation
   CSS로 애니메이션 효과를 만들기 위한 속성
   transition보다 더 쉽고 상세하게 애니메이션 효과를 설정할 수 있다.
   animation속성은 특정 지점에서 스타일을 바꿀 수 있는데 그 지점을 keyframe이라고 한다.
   keyframe을 미리 만들어주고 적용시키고 싶은 요소에 다양한 속성으로 애니메이션을 적용시킨다.

animation의 속성
@keyframes : 특정지점을 설정한다.
만들고 싶은 애니메이션 이름을 설정한다.
from(시작), to(끝), percent(진행도)를 선택자로 사용한다.

      @keyframes 키프레임이름{
            선택자 {스타일; }
      }

적용시키고 싶은요소에 사용하는 속성
animation-name : 키프레임 이름
적용시키고 싶은 요소에 애니메이션 효과를 설정한다.
미리 만들어둔 키프레임이름을 사용하면 된다.

animation-duration
애니메이션의 실행 시간을 설정

animation-iteration-count : 반복횟수 | infinite
애니메이션 반복횟수 설정

animation-delay
애니메이션 시작시간 설정

animation
애니메이션 속성을 간편하게 설정한다.

4. form 태그
   <form action="데이터를 처리할 주소" method="get|post">폼요소</form>

   form 태그는 사용자에게 입력받은 데이터를 서버로 전송하기 위해 작성한다
   입력받은 데이터를 폼 데이터, 필드라고 부른다
   form 태그의 내부 요소 input, textarea, select, option 태그 등을 가질 수 있다
   주요 속성값
   action : form 태그 내부 요소에 작성된 데이터를 처리할 서버쪽의 파일 주소를 작성한다
   method : 서버에 데이터를 넘겨주는 방법을 작성한다

+) http 메소드
get : 리소스 요청
정보를 서버로 요청할 때 사용된다
요청 파라미터는 url의 쿼리스트링(query string)으로 전달되며
검색 결과나 페이지 이동 등에 사용된다
post : 대기 리소스 추가 요청이나 수정/삭제 목적으로 사용한다
서버로 데이터를 제출할 때 사용된다
요청 파라미터는 http 요청 본문(body)에 포함되며 데이터는 숨겨져 전송된다
put : 리소스 수정 요청
delete : 리소스 삭제 요청
options : 웹서버가 지원하는 메소드 종류 반환 요청
trace : 클라이언트(사용자)의 요청을 그대로 반환

1. input 태그
   <input type="사용할 타입">
   실질적으로 사용자에게 입력을 받는 태그
   form 태그 내부에 작성해야 서버쪽에 데이터를 넘겨줄 수 있다
   type 속성 값에 따라 입력받는 방식이 바뀐다

type 속성
text : 텍스트형태로 사용자에게 입력을 받는다(아이디, 주소 등)
password : 패스워드를 입력받는다(화면에 입력한 값이 보이지 않음)
date : 년, 월, 일을 선택하여 입력받는다
submit : 전송 버튼을 만든다
reset : 리셋버튼을 만든다
file : 첨부파일을 버튼을 만든다
hidden : 화면에는 보이지 않는 칸을 만든다
=> name과 value 속성을 주로 같이 사용한다

radio : 라디오 버튼을 만든다
여러 선택지 중 하나만 선택한다
checkbox : 체크박스를 만든다
여러 선택지 중 여러개를 선택한다
=> name, value, checked 속성을 사용한다

2. label태그
   사용자가 입력하는 input태그에 대한 설명이다.
   웹 접근성이 좋기 때문에 적극적으로 사용하는 게 좋다.

   <label></label>태그를 사용하고 하위 태그 <input> 태그를 사용하면 된다.
   for와 id속성을 사용하여 연결할 수 있다.

3. fieldset과 legend
   fieldset은 여러 label을 묶을 때 사용한다.
   legend는 fieldset의 설명을 나타낸다.

4) input태그의 주요 속성
   autofocus 페이지에 진입시 자동으로 focus됨
   마우스 커서가 자동으로 input에서 깜빡거림

   readonly 읽기전용으로 설정
   사용자가 입력할 수 없다.

   disabled 해당 태그를 비활성화시켜 필드데이터를 서버로 전송하지 않음

   placeholder 안내문구쓸때

   required 필수 필드
   필드의 데이터들을 submit버튼을 눌러 전송할때 필수 필드에 데이터가 있는지확인함.

   value 텍스트를 입력하는 input에 미리 데이터를 채울 수 있다.

   submit버튼의 텍스트를 변경할 수 있다.

   name 서버 쪽에 데이터를 보낼ㄸ째 데이터가 무슨 데이터인지 이름을 붙여보냄
