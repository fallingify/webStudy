package task;

public class UserVO {
	//  UserVO 클래스를 선언한다.
	//  - 아이디, 비밀번호, 이름, 나이
	//  - 모든 필드는 private으로 선언하고 생성자를 통해서만 초기화한다.
	//  - toString()을 재정의하여 모든 필드의 값을 확인할 수 있도록한다.
	//  - 모든 필드의 getter메소드를 만든다.
	private String id;
	private String pw;
	private String name;
	private int age;
	
	@Override
	public String toString() {
		return "UserVO [id=" + id + ", pw=" + pw + ", name=" + name + ", age=" + age + "]";
	}

	
	public UserVO(String id, String pw, String name, int age) {
		super();
		this.id = id;
		this.pw = pw;
		this.name = name;
		this.age = age;
	}

	//option+command+S
	public String getId() {
		return id;
	}


	public String getPw() {
		return pw;
	}


	public String getName() {
		return name;
	}


	public int getAge() {
		return age;
	}

//  UserService 클래스를 선언한다.
//  - 회원정보를 저장할 List를 private으로 선언한다.
//  - 아이디 중복검사 메소드 정의
//  - 회원가입 메소드 정의
//  - 로그인 메소드 정의
	
// Main 클래스
// 아이디, 비밀번호 이름. 나이를 넣은 객체 1개 생성 
// 아이디 중복검사 메소드 호출 
// 로그인 메소드 호출
}

