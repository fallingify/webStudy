package lamda;

public class Lamda01 {

	public static void main(String[] args) {
		//함수형 인터페이스 multipleInter 람다식
		//재정의   
		
		//람다식으로 재정의 
		MultipleInter mp1 = (num1, num2) -> {
			int result = num1 * num2;
			return result;
		};
		
		System.out.println(mp1.method01(10, 5));
		
	};
}
