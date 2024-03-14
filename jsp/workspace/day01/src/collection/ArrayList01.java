package collection;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

public class ArrayList01 {
   public static void main(String[] args) {
      //1부터 20까지 정수 중 무작위로 5개의 값을 list에 저장
      //랜덤값을 저장하고 숫자 맞추는 게임
      //Random 클래스 -> .nextInt(20) + 1 
      //1~20까지 무작위 정수 생성
      
      //5번 시도 => 포함된 숫자면 정답입니다
      //포함된 숫자가 아니라면 오답입니다 출력하기
      
      //5번 시도 후 정답 숫자들 출력하기
   
      List<Integer> list = new ArrayList<>();
      Random random = new Random();
      for(int i = 0; i < 5; i++) {
         int number = random.nextInt(20);
         list.add(number);
      }
      
      //list 오름차순 정렬
      Collections.sort(list);

      Scanner sc = new Scanner(System.in);
      System.out.println("1부터 20까지 숫자중 5개가 랜덤으로 저장되었습니다");
      System.out.println("숫자를 맞춰보세요!");
      
      for (int i = 0; i < 5 ; i++) {
         System.out.println("추측한 숫자 입력 : ");
         int choice = sc.nextInt();
         
         if(list.contains(choice)) {
            System.out.println("정답입니다");
         }else {
            System.out.println("오답입니다");
         }
      }
      
      System.out.println("게임종료 정답숫자들 : " + list);
   }
}