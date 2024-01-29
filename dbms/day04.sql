CREATE TABLE WEB_STUDENT(
	STUDENT_NUMBER NUMBER,
	STUDENT_NAME VARCHAR2(1000),
	STUDENT_MATH NUMBER,
	STUDENT_ENG NUMBER,
	STUDENT_KOR NUMBER,
	STUDENT_GRADE VARCHAR2(1000)
);
-- 항상 만들고 확인하기
SELECT * FROM WEB_STUDENT;

--1. 학생 테이블에 데이터를 추가한다.
--학생번호, 이름, 수학, 영어, 국어
--1, '김철수', 90, 90, 90
--2, '홍길동', 70, 25, 55
--3, '이유리', 89, 91, 77
--4, '김웅이', 48, 100, 92
--5, '신짱구', 22, 13, 9

INSERT INTO WEB_STUDENT(
	STUDENT_NUMBER,
	STUDENT_NAME,
	STUDENT_MATH,
	STUDENT_ENG,
	STUDENT_KOR)
VALUES (5, '신짱구', 22, 13, 9);

SELECT * FROM WEB_STUDENT;

-- 2. 전체 학생들의 이름과 평균점수를 조회하기 (별칭도 넣기)
SELECT STUDENT_NAME 이름,
	(STUDENT_MATH + STUDENT_ENG + STUDENT_KOR) / 3 평균
FROM WEB_STUDENT;

-- 3. 학생의 평균점수를 구하고 학점을 수정하기
-- A : 90점 이상
-- B : 80점 이상 90점 미만
-- C : 50점 이상 80점 미만
-- F : 50점 미만
UPDATE WEB_STUDENT
SET STUDENT_GRADE = 'A'
WHERE (STUDENT_MATH + STUDENT_ENG + STUDENT_KOR) / 3 >= 90;

UPDATE WEB_STUDENT
SET STUDENT_GRADE = 'B'
WHERE (STUDENT_MATH + STUDENT_ENG + STUDENT_KOR) / 3 >= 80
AND (STUDENT_MATH + STUDENT_ENG + STUDENT_KOR) / 3 < 90;

UPDATE WEB_STUDENT
SET STUDENT_GRADE = 'C'
WHERE  (STUDENT_MATH + STUDENT_ENG + STUDENT_KOR) / 3 >= 50
AND (STUDENT_MATH + STUDENT_ENG + STUDENT_KOR) / 3 < 80;

UPDATE WEB_STUDENT
SET STUDENT_GRADE = 'F'
WHERE (STUDENT_MATH + STUDENT_ENG + STUDENT_KOR) / 3 < 50;



-- 4. 학점이 잘 들어갔는지 확인하기 위해서 학생 번호, 이름, 평균, 학점 조회하기 (별칭 넣기)
SELECT STUDENT_NUMBER "학생 번호",
	STUDENT_NAME 이름,
	(STUDENT_MATH + STUDENT_ENG + STUDENT_KOR) / 3 평균,
	STUDENT_GRADE 학점
FROM WEB_STUDENT;


-- 5. 학생의 수학, 영어, 국어 점수 중 한 과목이라도 50점 미만이 아니고
--		학점이 B이상인 학생만 학생 번호, 이름, 학점 출력하기
SELECT STUDENT_NUMBER "학생 번호",
	STUDENT_NAME 이름,
	STUDENT_GRADE 학점
FROM WEB_STUDENT
WHERE NOT (STUDENT_MATH < 50 OR STUDENT_ENG < 50 OR STUDENT_KOR < 50)
	AND (STUDENT_GRADE = 'B' OR STUDENT_GRADE = 'A');


SELECT * FROM WEB_STUDENT;
-- 6. 학생의 수학, 영어, 국어점수 중 한 과목이라도 30점이면 퇴학시키기(DB테이블에서 삭제)
DELETE FROM WEB_STUDENT
WHERE STUDENT_MATH < 30 OR STUDENT_ENG < 30 OR STUDENT_KOR < 30;

SELECT * FROM WEB_STUDENT;
   
-- DDL
-- 1. CREATE : 테이블 생성
CREATE TABLE WEB_USER(
	USER_NAME VARCHAR2(100),
	USER_AGE NUMBER
	);
-- 테이블을 만들때는 앞에 테이블을 의미하는 TBL_테이블명 붙여서 생성(지금은 WEB_테이블명 형식으로 사용)
-- 컬럼명을 작성할 때는 어떤 테이블의 컬럼명인지 알려주기 위해서 명시한다 테이블명_컬럼명

SELECT * FROM WEB_USER;

DROP TABLE WEB_USER;

-- USER 테이블을 수정 2. ALTER
-- 테이블명수정
ALTER TABLE WEB_USER RENAME TO WEB_MY_USER; 
-- 컬럼 추가
ALTER TABLE WEB_MY_USER ADD(USER_GENDER CHAR(4));
-- 컬럼명 수정
ALTER TABLE WEB_MY_USER RENAME COLUMN USER_NAME TO USER_NICKNAME;
-- 컬럼 삭제
ALTER TABLE WEB_MY_USER DROP COLUMN USER_GENDER;
-- 컬럼 타입 수정
ALTER TABLE WEB_MY_USER MODIFY(USER_NICKNAME VARCHAR2(500));

SELECT * FROM WEB_MY_USER;

-- WEB_MY_USER 테이블에 값 추가하기
INSERT INTO WEB_MY_USER 
VALUES('A', 20);

-- 3. TRUNCATE : 모든 데이터만 삭제
TRUNCATE TABLE WEB_MY_USER;

SELECT * FROM WEB_MY_USER;

-- 4. DROP : 테이블 삭제
DROP TABLE WEB_MY_USER;

-- 실습
-- 자동차 테이블 생성(WEB_CAR)
-- 컬럼 : 자동차 번호, 자동차 이름, 자동차 브랜드, 출시 날짜, 색상, 가격
-- CAR_NUMBER
-- CAR_NAME
-- CAR_BRAND
-- CAR_RELEASE_DATE
-- CAR_COLOR
-- CAR_PRICE

-- 잘못 만들었으면 DROP하기
-- ERD 확인하기
CREATE TABLE WEB_CAR( 
	CAR_NUMBER NUMBER,
	CAR_NAME VARCHAR2(1000),
	CAR_BRAND VARCHAR2(1000),
	CAR_RELEASE_DATE DATE,
	CAR_COLOR VARCHAR2(1000),
	CAR_PRICE NUMBER
	);

SELECT * FROM WEB_CAR;

-- PK 설정하기 : CAR_NUMBER
-- 테이블 수정 PK 지정하기
ALTER TABLE WEB_CAR ADD CONSTRAINT PK_CAR PRIMARY KEY(CAR_NUMBER);
-- ALTER TABLE WEB_CAR : WEB_CAR 테이블을 수정하겠다
-- ADD : 추가한다
-- CONSTRAINT : 제약조건
-- PK_CAR : 제약조건의 이름
-- PRIMARY KEY(CAR_NUMBER) : PK라는 제약조건을 (CAR_NUMBER)컬럼에

-- 제약조건 삭제
ALTER TABLE WEB_CAR DROP CONSTRAINT PK_CAR;
-- 제약조건을 지울 때는 제약조건의 이름만 지정하면 된다

-- 테이블 생성하면서 제약조건 넣기
DROP TABLE WEB_CAR;


CREATE TABLE WEB_CAR(
	CAR_NUMBER NUMBER CONSTRAINT PK_CAR PRIMARY KEY,
	CAR_BRAND VARCHAR2(1000),
	CAR_RELEASE_DATE DATE,
	CAR_COLOR VARCHAR2(1000),
	CAR_PRICE NUMBER
);

SELECT * FROM WEB_CAR;

-- 1. 동물 테이블 생성 WEB_ANIMAL(10분)
-- 동물번호, 종류, 나이, 먹이 컬럼 생성
-- ANIMAL_NUMBER
-- ANIMAL_KIND
-- ANIMAL_AGE
-- ANIMAL_FEED
CREATE TABLE WEB_ANIMAL( 
	ANIMAL_NUMBER NUMBER,
	ANIMAL_KIND VARCHAR2(1000),
	ANIMAL_AGE NUMBER,
	ANIMAL_FEED VARCHAR2(1000)
);

-- 2. 동물 테이블 조회
SELECT * FROM WEB_ANIMAL;

-- 3. 제약조건 추가(PK)
-- PK_ANIMAL 제약조건 이름
-- ANIMAL_NUMBER 컬럼에 추가
ALTER TABLE WEB_ANIMAL ADD CONSTRAINT PK_ANIMAL PRIMARY KEY(ANIMAL_NUMBER);

-- 4. 컬럼 추가
-- 성별 ANIMAL_GENDER CHAR(1)
ALTER TABLE WEB_ANIMAL ADD ANIMAL_GENDER CHAR(1);

-- 5. 컬럼이름 수정
-- ANIMAL_NUMBER -> ANIMAL_NUM
ALTER TABLE WEB_ANIMAL RENAME COLUMN ANIMAL_NUMBER TO ANIMAL_NUM;

-- 6. 컬럼 삭제(먹이)
ALTER TABLE WEB_ANIMAL DROP COLUMN ANIMAL_FEED;

-- 7. 컬럼 수정(종류 컬럼은 다른 자료형으로 NUMBER)
ALTER TABLE WEB_ANIMAL MODIFY ANIMAL_KIND NUMBER;

-- 8. 고양이 데이터 추가(데이터 값은 마음대로 1행만 추가)  => 숫자 임의로 지정
INSERT INTO WEB_ANIMAL 
VALUES(1, 1, 3, 'F');


-- 동물테이블 삭제
DROP TABLE WEB_ANIMAL;

-- 상품 테이블(WEB_PRODUCT)
CREATE TABLE WEB_PRODUCT( 
	PRODUCT_NUMBER NUMBER CONSTRAINT PK_PRODUCT PRIMARY KEY,
	PRODUCT_NAME VARCHAR2(1000),
	PRODUCT_PRICE NUMBER
)

-- 조회
SELECT * FROM WEB_PRODUCT;

-- PRODUCT 테이블에 데이터 저장
INSERT INTO WEB_PRODUCT
VALUES(1, '아이패드', 800000);

--INSERT INTO WEB_PRODUCT
--VALUES(1, '맥북프로', 2000000); -- 상품번호가 PK라서 중복을 허용하지 않음
--SQL Error [1] [23000]: ORA-00001: unique constraint (HR.PK_PRODUCT) violated

INSERT INTO WEB_PRODUCT
VALUES(2, '맥북프로', 2000000);

--INSERT INTO WEB_PRODUCT
--VALUES(NULL, '애플워치', 500000); -- 상품번호가 PK라서 NULL 허용하지 않음
--SQL Error [1400] [23000]: ORA-01400: cannot insert NULL into ("HR"."WEB_PRODUCT"."PRODUCT_NUMBER")

INSERT INTO WEB_PRODUCT
VALUES(3, '애플워치', 500000);

-- FK설정
-- 선물 목록 테이블(WEB_GIFT_LIST)
CREATE TABLE WEB_GIFT_LIST( 
	GIFT_ID NUMBER CONSTRAINT PK_GIFT PRIMARY KEY,
	GIFT_NAME VARCHAR2(1000),
	PRODUCT_NUMBER NUMBER,
	CONSTRAINT FK_PRODUCT FOREIGN KEY(PRODUCT_NUMBER)
	REFERENCES WEB_PRODUCT (PRODUCT_NUMBER)
);












