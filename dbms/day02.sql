-- 주석 : ctrl + / 설명문
-- hr 계정내에 존재하는 employees테이블
-- 11개의 컬럼, 107개의 행
-- 107명의 직원 데이터를 저장해 놓은 연습용 테이블

-- 한줄 주석 : 컴퓨터가 해석하지 않는다
-- 실행시키지 않고 설명을 작성할 때 사용한다

-- SELECT를 사용하여 employess 테이블의 first_name 컬럼만 선택하여 조회하기
-- SELTCT 컬럼명 FROM 테이블명;
SELECT first_name FROM employees;
SELECT last_name FROM hr.employees;
-- 테이블 명을 작성 시 정확하게 작성하려면 계정명을 작성하고
-- .을 써줘야한다
-- . ~안에 있는 이라는 의미이다

-- 대소문자를 구분하지 않는다
SELECT FIRST_NAME 
FROM EMPLOYEES;

-- first_name과 last_name을 같이 조회하는 경우
SELECT first_name, last_name
FROM EMPLOYEES;

-- 실습> 직원의 성, 이름, 핸드폰번호, 이메일 주소, 사원번호를 한번에 조회하기
-- (순서대로 조회되어야한다)
SELECT last_name, 
	first_name, 
	phone_number, 
	email, 
	employee_id 
FROM EMPLOYEES;

-- 모든 컬럼 조회하기
-- * : 모든, all
SELECT * FROM employees;

-- 정렬해서 조회하기
-- ORDER BY절
-- 사원의 이름, 성, 봉급을 봉급 낮은 순서부터 조회하기
SELECT first_name, last_name, salary
FROM employees
ORDER BY salary ASC;
-- ORDER BY 정렬하겠다 salary 컬럼 기준 ASC 오름차순으로

-- 내림차순 정렬하기
SELECT first_name, last_name, salary
FROM EMPLOYEES
ORDER BY salary DESC;

-- 실습 >  직원의 이름, 성, 고용일을 고용일 순서로 정렬
-- 날짜값도 정렬이 가능하다
SELECT first_name, last_name, HIRE_DATE
FROM employees
ORDER BY hire_date ASC;
-- 날짜데이터인 경우는 ASC = 오래된 날부터 최신날짜 순으로 정렬
-- DESC = 최신날짜부터 오래된 날짜 순으로 정렬

-- 직원의 이름, 성 오름차순으로 정렬
SELECT first_name, last_name
FROM EMPLOYEES
ORDER BY last_name, first_name;

-- first_name, salary, hire_data
-- salary, hire_data컬럼에 오름차순 정렬
SELECT first_name, salary, hire_date
FROM EMPLOYEES
ORDER BY hire_date, salary;

-- 회사에 존재하는 직급(job_id) 조회하기
SELECT job_id
FROM EMPLOYEES;

-- job_id의 모든 결과가 아닌 어떤 종류들이 존재하는지 확인
-- 중복 제거 : DISTINCT
SELECT DISTINCT job_id
FROM EMPLOYEES;

-- 컬럼을 여러개 넣으면 DISTINCT는 어떻게 작동할까?
-- job_id, hire_date 컬럼에 모두 중복값이 있는 행만 제거된다
-- 총 107row -> 105row
SELECT DISTINCT job_id, hire_date
FROM EMPLOYEES;

-- 정렬 기준을 내가 조회하려는 컬럼으로 사용하지 않아도 도니다
SELECT first_name, last_name
FROM EMPLOYEES
ORDER BY SALARY;

-- 테이블의 컬럼 이름을 바꿔서 조회하고 싶은 경우
-- 영어컬럼 -> 한글컬럼
SELECT first_name AS "이름",
	last_name AS "성",
	salary AS "봉급",
	employee_id AS "사원 번호"
FROM employees;

-- AS 생략가능, 띄어쓰기 없다면 "" 생략 가능
SELECT first_name 이름,
	last_name 성,
	salary 봉급,
	employee_id "사원 번호"
FROM employees;

-- 실습> 사원의 이름, 성, 봉급, 핸드폰 번호를 봉급의 내림차순으로 정렬하여 조회하기
SELECT first_name 이름,
	last_name 성,
	salary 봉급,
	phone_number "핸드폰 번호"
FROM EMPLOYEES
ORDER BY 봉급 ASC;

SELECT * FROM EMPLOYEES;

-- 연산자
-- 1. 연결연산자
SELECT 10 || 20
FROM ; --오류
-- 두 값의 연결 결과를 조회하는 것
SELECT 10 || 20
FROM dual;
-- dual 테이블 : 다른 테이블을 참조할 필요가 없이 값을 확인하고 싶을때
-- 사용하는 테이블(오라클에서 지원하는 테이블)

SELECT '안녕'||'하세요'
FROM dual;

SELECT first_name || last_name AS "성함"
FROM employees;

SELECT hire_date || ' 안녕'
FROM employees;

-- 실습 >  사원의 이름과 메일 주소를출력하기
-- 이름은 first_name, last_name이 띄어쓰기로 이어져 있고
-- 메일 주소는 사원메일주소@koreait.com이다
-- 컬럼명 이름, 이메일

SELECT first_name ||' '||last_name 이름,
	email || '@koreait.com' 이메일
FROM employees;

-- 2. 산술연산자
SELECT employee_id,
	employee_id  + 10,
	employee_id - 10,
	employee_id * 2,
	employee_id / 2
FROM EMPLOYEES;
-- employee_id는 숫자타입이므로 산술연산이 가능하다

-- 날짜데이터와 숫자 데이터타입의 +, - 연산은 날짜데이터 타입이다
SELECT hire_date,
	hire_date + 10,
	hire_date - 10
FROM EMPLOYEES;

-- 날짜데이터와 날짜 데이터 타입의 - 연산은 숫자데이터 타입이다
-- 날짜에 일수를 더할 때 + 연산자를 사용
-- 날짜데이터 사이의 일수를 확인할 때는 날짜데이터 - 날짜데이터로 사용
SELECT TO_DATE('2023-12-31', 'YYYY-MM-DD') - TO_DATE('2022-12-25', 'YYYY-MM-DD')
FROM dual;

-- 실습> 직원의 이름, 봉급, 인상봉급, 감축봉급 조회하기
-- 이름은 성과 함께 띄어쓰기로 연결되어있다
-- 인상봉급은 기존 봉급에서 10% 증가되었다  * 1.1
-- 감축봉급은 기존 봉급에서 5% 감소되었다	 * 0.95
-- 결과를 기존 봉급 오름차순으로 정렬하여 조회한다

SELECT first_name || ' ' ||last_name 이름,
	salary 봉급,
	salary * 1.1 인상봉급,
	salary * 0.95 감축봉급
FROM employees
ORDER BY salary ASC;


-- 날짜 + 숫자 => 날짜타입
-- 날짜 - 숫자 => 날짜타입
-- sysdate : 현재 날짜와 시간 정보를 가지고 있고 오라클에서 기본적으로 제공한다
SELECT sysdate
FROM dual;

-- 날짜와 날짜 연산
-- 날짜 - 날짜 연산 : 며칠이 지났는지 결과로 나온다
-- 연산 결과는 숫자타입이다
SELECT hire_date,
	sysdate,
	sysdate - hire_date
	-- sysdate + hire_date : 오류발생
FROM employees;

-- 시간 연산? => 시간을 일 환산하면 된다
-- 12시간 0.5일, 24시간 1일
SELECT sysdate,
	sysdate + 0.5,
	sysdate - 0.5
	-- sysdate - 12/24 -- 12시간
	-- sysdate - 1/ 24 -- 1시간
	-- sysdate - 30 / 60 / 24 -- 30분
FROM dual;
-- 날짜와 숫자 사이의 연산에서 기본적으로 숫자는 일수를 의미하기 때문에
-- 시간, 분 단위로 연산하고 싶다면 일(24h)로 환산해야한다


















