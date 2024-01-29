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

-- 테이블 삭제(WEB_GIFT_LIST, WEB_PRODUCT)
DROP TABLE WEB_GIFT_LIST;
DROP TABLE WEB_PRODUCT;

-- 상품테이블 생성(제약조건을 테이블 레벨에서 작성)
CREATE TABLE WEB_PRODUCT( 
	PRODUCT_NUMBER NUMBER,
	PRODUCT_NAME VARCHAR2(1000), 
	PRODUCT_PRICE NUMBER,
	CONSTRAINT PK_PRODUCT PRIMARY KEY(PRODUCT_NUMBER)
);

SELECT * FROM WEB_PRODUCT;

-- PRODUCT 테이블에 데이터 저장
INSERT INTO WEB_PRODUCT
VALUES(1, '아이패드', 800000);

INSERT INTO WEB_PRODUCT
VALUES(2, '플스5', 800000);

INSERT INTO WEB_PRODUCT
VALUES(5, '아이폰', 1500000);

INSERT INTO WEB_PRODUCT
VALUES(3, '갤럭시워치', 500000);

INSERT INTO WEB_PRODUCT
VALUES(4, '노트북', 2000000);

--INSERT INTO WEB_PRODUCT
--VALUES(2, '노트북', 2000000); --상품번호가 PK기 때문에 중복값 허용하지 않음

--INSERT INTO WEB_PRODUCT
--VALUES(NULL, '노트북', 2000000); --상품번호가 PK기 때문에 NULL값 허용하지 않음

-- 선물 목록 테이블(WEB_GIFT_LIST)
CREATE TABLE WEB_GIFT_LIST( 
	GIFT_ID NUMBER,
	GIFT_NAME VARCHAR2(1000),
	PRODUCT_NUMBER NUMBER,
	CONSTRAINT PK_GIFT PRIMARY KEY(GIFT_ID),
	CONSTRAINT FK_PRODUCT FOREIGN KEY(PRODUCT_NUMBER) REFERENCES WEB_PRODUCT(PRODUCT_NUMBER)
);

SELECT * FROM WEB_GIFT_LIST;
SELECT * FROM WEB_PRODUCT;


DROP TABLE WEB_GIFT_LIST;

-- WEB_GIFT_LIST 테이블에 값추가
INSERT INTO WEB_GIFT_LIST
VALUES (1, '생일선물', 1);

--INSERT INTO WEB_GIFT_LIST
--VALUES(100, '크리스마스선물', 100); -- 오류발생 상품번호 100번은 존재하지 않음
-- SQL Error [2291] [23000]: ORA-02291: integrity constraint (HR.FK_PRODUCT) violated - parent key not found

INSERT INTO WEB_GIFT_LIST
VALUES(2, '크리스마스 선물', 3);

INSERT INTO WEB_GIFT_LIST
VALUES(3, '기념일 선물', 2);

INSERT INTO WEB_GIFT_LIST
VALUES(4, '크리스마스 선물', 5);

INSERT INTO WEB_GIFT_LIST
VALUES(5, '크리스마스 선물', 5);
-- FK는 중복가능, PK 중복불가

INSERT INTO WEB_GIFT_LIST
VALUES(6, '생일선물', NULL);
-- PK는 NULL값 불가, FK는 NULL값 가능
-- 외래키 제약조건은 한 테이블의 열(또는 열들)이 다른 테이블의 기본 키의 값을 참조하도록 하는 규칙
-- 데이터의 무결성을 유지하고 관련된 테이블들의 일관성을 제공함

SELECT * FROM WEB_GIFT_LIST;

DROP TABLE WEB_CAR;
DROP TABLE WEB_CHRISTMAS_GIFTS;
DROP TABLE WEB_GIFT_LIST;
DROP TABLE WEB_PRODUCT;
DROP TABLE WEB_STUDENT;
DROP TABLE WEB_MEMBER;


-- 학생 테이블 생성(WEB_STUDENT)
-- 학생번호 STUDENT_NUMBER
-- 학생 아이디 STUDENT_ID
-- 학생 이름 STUDENT_NAME
-- 전공	STUDENT_MAJOR
-- 성별 STUDENT_GENDER CHAR(1) => M OR W만 저장할것이기 때문에 고정크기1로 한다

CREATE TABLE WEB_STUDENT( 
	STUDENT_NUMBER NUMBER,
	STUDENT_ID VARCHAR2(1000), -- CONSTRAINT UK_STUDENT UNIQUE, -- 컬럼 레벨
	STUDENT_NAME VARCHAR2(1000),
	STUDENT_MAJOR VARCHAR2(1000),
	STUDENT_GENDER CHAR(1) DEFAULT 'W' NOT NULL CHECK(STUDENT_GENDER = 'M' OR STUDENT_GENDER = 'W'),
	CONSTRAINT PK_STUDENT PRIMARY KEY(STUDENT_NUMBER),
	CONSTRAINT UK_STUDENT UNIQUE (STUDENT_ID)
);

SELECT * FROM WEB_STUDENT;

INSERT INTO WEB_STUDENT (STUDENT_NUMBER, STUDENT_ID, STUDENT_NAME, STUDENT_MAJOR)
VALUES (1, 'AA', '김철수', '컴퓨터전공');
-- 성별을 생략하게 되면 디폴트값인 W가 들어간다

--INSERT INTO WEB_STUDENT
--VALUES(2, 'AA', '신짱구', '컴공', 'M');
-- 오류 ID는 UK
-- SQL Error [1] [23000]: ORA-00001: unique constraint (HR.UK_STUDENT) violated

INSERT INTO WEB_STUDENT
VALUES(2, 'BB', '신짱구', '컴공', 'M');

INSERT INTO WEB_STUDENT
VALUES(3, 'CC', '신짱구', '컴공', 'M');

INSERT INTO WEB_STUDENT
VALUES(4, 'DD', '신짱아', '컴퓨터보안', 'W');

SELECT * FROM WEB_STUDENT;


DROP TABLE WEB_STUDENT;


-- 조합키
-- PK를 1개의 컬럼이 아닌 2개의 컬럼으로 조합해서 설정하는 것

CREATE TABLE TBL_FLOWER( 
	FLOWER_NAME VARCHAR2(1000),
	FLOWER_COLOR VARCHAR2(1000),
	FLOWER_PRICE NUMBER,
	CONSTRAINT PK_FLOWER PRIMARY KEY(FLOWER_NAME, FLOWER_COLOR)
);

INSERT INTO TBL_FLOWER
VALUES('해바라기', '노랑', 5000);

INSERT INTO TBL_FLOWER
VALUES('해바라기', '빨강', 4000);

INSERT INTO TBL_FLOWER
VALUES('튤립', '노랑', 9000);

INSERT INTO TBL_FLOWER
VALUES('튤립', '노랑', 5000); -- 조합키 2개의 컬럼이 모두 일치하기 때문에 오류 발생


DROP TABLE TBL_FLOWER;

CREATE TABLE WEB_ORDER(
	ORDER_NUMBER NUMBER,
	ORDER_DATE DATE,
	ORDER_ID VARCHAR2(1000),
	CONSTRAINT PK_ORDER PRIMARY KEY (ORDER_NUMBER, ORDER_DATE)
);


INSERT INTO WEB_ORDER
VALUES(1, TO_DATE('2023-12-01', 'YYYY-MM-DD'), 101);

INSERT INTO WEB_ORDER
VALUES(2, TO_DATE('2023-12-01', 'YYYY-MM-DD'), 102);

SELECT * FROM WEB_ORDER;

-- 조합키를 사용한 조회
SELECT * FROM WEB_ORDER
WHERE ORDER_NUMBER = 1 AND ORDER_DATE = TO_DATE('2023-12-01', 'YYYY-MM-DD');




