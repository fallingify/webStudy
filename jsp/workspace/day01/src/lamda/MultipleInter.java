package lamda;

@FunctionalInterface
public interface MultipleInter {
	// 맴버 : 상수, 추상메소드
	// interface 추상메소드만 가능하지만 
	// 추상메소드는 선언부만 존재
	// 디폴트 메소드와 static메소드 구현됨 
	abstract int method01(int num1, int num2);

	
	//람다식은 함수형인터페이스에서만 가능
	
	

}
