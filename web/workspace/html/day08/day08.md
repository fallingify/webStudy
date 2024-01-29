day08
복습 -> form(input) -> textarea, select, button -> 반응형 웹 -> css우선순위

0. 복습

1) input 태그
   <input type ="사용할타입" />
   text 텍스트 형태로 사용자에게 입력 받는다
   password 패스워드를 입력받는다
   date 년, 월, 일을 선택하여 입력받는다
   submit 전송버튼을 만든다
   reset 리셋버튼을 만든다
   file 첨부파일 버튼을 만든다
   hidden 화면에 보이지 않는 칸을 만든다
   radio 라디오 버튼을 만든다(여러선택지 중 하나만 선택한다)
   checkbox 체크박스 버튼을 만든다(여러 선택지 중 여러개 선택한다)

2) label 태그
   <label for="name">이름 :
   <input type ="" id="name" />
   </label>

3) fieldset과 legend
   fieldset은 여러 label을 묶을때 사용한다
   legend는 fieldset의 설명을 나타낸다

1. form

1) textarea 태그
   <textarea cols ="가로너비" rows ="세로 길이">내용</textarea>
   텍스트를 여러줄로 입력하는 영역을 만드는 태그

2) select, option 태그
   여러 옵션중 하나를 선택하는 드롭다운 목록을 만드는 태그
   <select>
      <option value ="값1">내용1</option>
      <option value ="값2">내용2</option>
   </select>

   option태그의 value가 실질적으로 서버에 넘어가는 값이다
   selected 속성을 이용하면 페이지 진입시 선택되는 옵션을 설정할 수 있다

3) button태그
   <button type="submit | reset | button">내용</button>
   버튼을 만드는 태그이다

2. 반응형 웹
   반응형(reponsive) 웹
   사용자의 화면 크기에 반응하는 사이트를 만들게 된다
   반응형 웹 사이트 : 기존 내용을 그대로 유지하면서 사용자의 화면 크기에 맞게
   재배치하고 다시 표현한다

viewport(뷰포트)
사용자 기기에서 실제 내용이 표시되는 화면 영역
pc와 모바일의 뷰포트는 크기가 다르기 때문에 반응형 웹에서 그에 맞는 화면을 보여줘야한다

뷰포트 메타태그

   <meta name="viewport" content="속성1=값1, 속성2=값2,...">
   뷰포트를 지정하는 태그

뷰포트 메타태그의 속성
width
뷰포트 너비를 설정한다
device-width값을 주면 디바이스의 너비에 맞게 설정된다
height
뷰포트 높이를 설정한다
device-height 값을 주면 디바이스의 높이에 맞게 설정된다
user-scalable
확대, 축소 가능 여부를 설정한다
yes, no로 설정한다(기본값 yes)
initial-scale
처음 페이지 진입시 확대, 축소값을 설정한다
1~10까지로 설정한다(기본값 1)
maximum-scale, minimum-scale
최대, 최소의 확대 비율을 설정한다

   <meta name="viewport" content="width=device-width, initial-scale=1.0">

뷰포트 단위
vw(view width)
100vw : 뷰포트너비의 100%
vh(view height)
100vh : 뷰포트높이의 100%
vmin(view minimum)
1vmin : 너비와 높이중 작은거에 1%

vmax(view maximum)
1vmax : 너비와 높이중 큰거에 1%

3. 미디어 쿼리
   사용자 디바이스 뷰포트에 따라 다른 css를 적용한다
   @media 속성을 사용해 특정 디바이스에 어떤 css를 적용할 지 설정한다

@media [only | not] 미디어디바이스유형 [and 조건] \* [and 조건]

[only | not]
특정 디바이스 유형만 적용시키거나 적용시키지 않을 디바이스를 설정할 수 있다
잘 사용하지 않는다

미디어 유형
여러 디바이스 유형을 설정할 수 있으나 보통 all 또는 screen을 사용한다
all : 어떤 유형이든 다 적용한다(기본값)
screen : pc나 모바일 유형을 의미한다

ex) @media all {}
ex) @media (width: 400px) {}

미디어쿼리의 조건으로 사용하는 가로 너비, 세로 높이 측정
width, height : 너비 높이
min-width, min-height: 최소 너비와 길이
max-width, max-height: 최대 너비와 길이

+) float속성
원래 이미지와 텍스트 배치 용도로 등장했으나 요즘엔 레이아웃용으로 사용
inherit : 부모요소에서 상속
left : 왼쪽에 블록박스를 생성, 페이지 내용은 박스 오른쪽에 위치하며 위에서 아래로
이후 요소에 clear속성이 있으면 달라짐
none이 아니라면 display속성은 무시된다.
none: 요소를 부유시키지 않음

4. css 우선순위

   1. 속성값 뒤에 !important
   2. 인라인스타일을 적용
   3. 선택자로 id를 사용한 경우
   4. 선택자로 class를 사용한 경우
   5. 선택자로 tag를 사용한 경우

   우선순위가 같으면 선택자를 상세하게 작성한 css가 작용됨
   선택자가 동일하다면 나중에 작성한 css가 적용됨
