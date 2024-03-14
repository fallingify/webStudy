package task;

public class Main {
	public static void main(String[] args) {
		// Main 클래스
		// 아이디, 비밀번호 이름. 나이를 넣은 객체 1개 생성 
		// 아이디 중복검사 메소드 호출 
		// 로그인 메소드 호출
		
		UserService service = new UserService();
		UserVO user = new UserVO("abc", "1111", "홍길동", 20);
		
		if(service.checkId(user.getId())) {
			service.join(user);
			System.out.println(user.toString()
					+ "가입이 완료되었습니다");
		}else {
			System.out.println("중복된 아이디 ");
		}
		
		user = service.login("abc", "111");
		
		if(user!=null) {
			System.out.println(user.getName() + "가입완료 ");
		} else {
			System.out.println("가입실패 ");
		}
		
	}
}
