
CREATE TABLE web_stu( 
	stu_studentID NUMBER PRIMARY KEY,
	stu_studentName varchar2(100) NOT null,
	stu_phonenumber varchar2(100),
	stu_age NUMBER,
	stu_subject varchar2(100)
);

INSERT INTO web_stu
values(1, '조승우', '010-1111-1111', 30, 'java');

INSERT INTO web_stu
values(2, '이동욱', '010-2222-2222', 30, 'java');

INSERT INTO web_stu
values(3, '김소현', '010-3333-3333', 26, 'dbms');

INSERT INTO web_stu
values(4, '김남길', '010-1111-2222', 25, 'dbms');

INSERT INTO web_stu
values(5, '강하늘', '010-1111-3333', 25, 'java');

INSERT INTO web_stu
values(6, '공유', '010-1111-4444', 27, 'dbms');

INSERT INTO web_stu
values(7, '박은빈', '010-1111-5555', 24, 'java');

INSERT INTO web_stu
values(8, '이종혁', '010-2222-1111', 31, 'java');

SELECT * FROM web_stu;

-- 1. 과목종류 검색
SELECT DISTINCT stu_subject 
FROM web_stu;

-- 2. 각 과목별 학생 수 조회
SELECT stu_subject, count(*)
FROM web_stu
GROUP BY stu_subject;

-- 3. 과목별 평균나이 조회
SELECT stu_subject, avg(stu_age)
FROM web_stu
GROUP BY stu_subject;

-- 4. 과목별 30살 이상인 학생수 조회
SELECT stu_subject, count(*)
FROM web_stu
WHERE stu_age >= 30
GROUP BY stu_subject;

-- EMPLOYEES 테이블에서 서브쿼리 진행
SELECT * FROM EMPLOYEES;

-- 모든직원의 이름 조회
SELECT first_name
FROM EMPLOYEES;

-- 모든 직원의 이름과 해당 직원의 부서 평균 급여를 조회
SELECT first_name,
	(SELECT avg(salary) FROM employees e2 WHERE e2.department_id = e1.department_id)
FROM employees e1;


SELECT DEPARTMENT_ID, AVG(SALARY)
FROM EMPLOYEES
GROUP BY DEPARTMENT_ID;

-- 급여의 평균보다 적은 사원의 사원번호, 이름, 급여, 부서 번호를 출력
SELECT * FROM EMPLOYEES;

SELECT employee_id, first_name, salary, department_id
FROM EMPLOYEES
WHERE salary < (SELECT avg(salary) FROM EMPLOYEES);

-- 사원번호가 123인 사원의 직업과 같은 사원의 사원번호, 이름, 직업, 급여 출력하기
SELECT * FROM EMPLOYEES
WHERE employee_id = 123;

SELECT * FROM employees
WHERE job_id = 'ST_MAN';

SELECT EMPLOYEE_ID, FIRST_NAME, JOB_ID, SALARY
FROM EMPLOYEES
WHERE JOB_ID = 'ST_MAN';

SELECT EMPLOYEE_ID, FIRST_NAME, JOB_ID, SALARY
FROM EMPLOYEES
WHERE JOB_ID = (SELECT JOB_ID FROM EMPLOYEES WHERE EMPLOYEE_ID = 123);

-- EMPLOYEES 테이블에서 가장 많은 사원을 갖는 MANAGER의 사원번호를 출력
SELECT * FROM EMPLOYEES;

SELECT MANAGER_ID, COUNT(*)
FROM EMPLOYEES
GROUP BY MANAGER_ID;


SELECT MANAGER_ID, COUNT(*)
FROM EMPLOYEES
GROUP BY MANAGER_ID
HAVING COUNT(MANAGER_ID) = (SELECT MAX(COUNT(*)) FROM EMPLOYEES GROUP BY MANAGER_ID);
-- 그룹화된 결과에 대한 조건을 설정

-- DEPARTMENT_ID가 (50의 최고 급여) 사원보다 더 많은 급여를 받은 사원들의
-- 사원번호, FIRST_NAME, JOB_ID, SLARY 조회하기

-- 단, 50번은 제외

-- DEPARTMENT_ID가 (50의 최고 급여) 조회
SELECT MAX(SALARY)
FROM EMPLOYEES
WHERE DEPARTMENT_ID = 50;

-- 서브쿼리로 한번에 쿼리
SELECT EMPLOYEE_ID, FIRST_NAME, JOB_ID, SALARY, DEPARTMENT_ID
FROM EMPLOYEES
WHERE SALARY > (SELECT MAX(SALARY) FROM EMPLOYEES WHERE DEPARTMENT_ID = 50)
AND DEPARTMENT_ID <> 30;


-- EMPLOYEES 테이블에서 가장 많은 사원이 속해있는 부서번호와 사원수를 출력하기
SELECT DEPARTMENT_ID, count(*)
FROM EMPLOYEES
GROUP BY DEPARTMENT_ID
HAVING COUNT(*) = (SELECT MAX(COUNT(*)) FROM EMPLOYEES GROUP BY DEPARTMENT_ID);

-- EMPLOYEES 테이블에서 사원번호가 123인 사원의 직업과 같고 사원번호가 192인 사원의 급여보다 많은
-- 사원의 사원번호, 이름, 직업, 급여, 매니저ID 출력하기
SELECT EMPLOYEE_ID, FIRST_NAME, JOB_ID, SALARY, MANAGER_ID
FROM EMPLOYEES
WHERE JOB_ID = (SELECT JOB_ID FROM EMPLOYEES WHERE EMPLOYEE_ID = 123)
	AND SALARY > (SELECT SALARY FROM EMPLOYEES WHERE EMPLOYEE_ID = 192);

SELECT EMPLOYEE_ID, SALARY
FROM EMPLOYEES
WHERE EMPLOYEE_ID = 192;

-- ROWNUM
-- 컬럼처럼 사용하면된다
-- *을 다른 컬럼과 함께 조회하게 되면 소속을 명시해줘야한다
-- 그러므로 테이블에 ALIAS를 부여하고 해당 별칭을 *에 명시해준다

SELECT ROWNUM, E.* FROM EMPLOYEES e;

SELECT ROWNUM, FIRST_NAME FROM EMPLOYEES;

-- EMPLOYEES 테이블에서 SALARY를 내림차순으로 정렬한 후
-- ROWNUM 붙여서 조회하기
SELECT ROWNUM, E.*
FROM EMPLOYEES e
ORDER BY SALARY DESC;
-- SELECT 절은 ORDER BY 절 전에 실행된다
-- 즉, ROWNUM은 ORDER BY 이전에 부여된다

SELECT ROWNUM, E2.*
FROM ( SELECT * FROM EMPLOYEES e
	ORDER BY SALARY DESC ) E2;

-- EMPLOYEES 테이블에서 연봉 1위부터 5위까지 조회
SELECT ROWNUM, E2.*
FROM ( SELECT * FROM EMPLOYEES e 
	ORDER BY SALARY DESC
) E2
WHERE ROWNUM BETWEEN 1 AND 5;

--SELECT ROWNUM R, E2.*
--FROM (SELECT * FROM EMPLOYEES e
--	ORDER BY SALARY DESC
--) E2
--WHERE R BETWEEN 1 AND 5;
-- SELECT 절보다 WHERE 절이 먼저 실행되기 때문에 오류 발생
-- 별칭을 주기 전에 WHERE절이 먼저 실행된다


-- EMPLOYEES 테이블에서 연봉 상위 6위부터 10위까지 조회
SELECT ROWNUM, E2.*
FROM ( SELECT * FROM EMPLOYEES e 
	ORDER BY SALARY DESC
) E2;


SELECT ROWNUM, E2.*
FROM (SELECT ROWNUM AS RN, E.* FROM (SELECT SALARY FROM EMPLOYEES ORDER BY SALARY DESC) E) E2
WHERE RN BETWEEN 6 AND 10;

-- 1 	SELECT SALARY FROM EMPLOYEES ORDER BY SALARY DESC) E : 내림차순 정렬 E 별칭
-- 2	SELECT ROWNUM AS RN, E.* FROM (SELECT SALARY FROM EMPLOYEES ORDER BY SALARY DESC) E) E2
--		: 내림차순으로 정렬된 결과에 대해 ROWNUM을 포함한 서브쿼리를 RN 별칭 추가, 원본테이블에서 정렬된 순서대로
-- 		번호가 매겨진 RN 결과 E2 별칭
-- 3 
-- 	SELECT ROWNUM, E2.*
-- 	FROM (SELECT ROWNUM AS RN, E.* FROM (SELECT SALARY FROM EMPLOYEES ORDER BY SALARY DESC) E) E2
-- 	WHERE RN BETWEEN 6 AND 10;
-- RN과 E의 결과를 다시한 번 조회, ROWNUM 을 기반으로 6번째부터 10번째가지의 행만 선택한다

--
CREATE TABLE web_stu (
  stu_StudentID number PRIMARY KEY,
  stu_StudentName varchar2(100) NOT NULL,
  stu_phonenumber varchar2(100),
  stu_Age number,
  stu_Department varchar2(100)
);

DROP TABLE web_stu;


INSERT INTO web_stu
VALUES (1, '조승우', '010-8901-8888', 30, '교육학과');

INSERT INTO web_stu
VALUES (2, '이동욱', '010-9012-9999', 30, '컴퓨터 공학과');

INSERT INTO web_stu
VALUES (3, '김소현', '010-9876-1234', 20, '방송연예과');

INSERT INTO web_stu
VALUES (4, '김남길', '010-5050-1222', 26, '컴퓨터 공학과');

INSERT INTO web_stu
VALUES (5, '강하늘', '010-5111-5151', 22, '방송연예과');

INSERT INTO web_stu
VALUES (6, '공유', '010-5050-5151', 30, '컴퓨터 공학과');

INSERT INTO web_stu
VALUES (7, '이종혁', '010-1213-2222', 34, '방송연예과');

INSERT INTO web_stu
VALUES (8, '박은빈', '010-1213-2222', 20, '방송연예과');

SELECT * FROM web_stu;


-- 1. stu_age가 25세 이상인 학생만 조회(이름)
-- where
SELECT stu_STUDENTNAME
FROM WEB_STU
WHERE stu_age >= 25;

-- stu_age가 최대값인 학생 이름
SELECT stu_studentname
FROM web_stu
WHERE stu_age >= (SELECT max(stu_age) FROM web_stu);

-- 2. 학생의 이름과 나이를 함께 조회(student_id = 2)
-- select
SELECT stu_studentname,
	(SELECT stu_age FROM web_stu WHERE stu_studentid = 2)
FROM web_stu
WHERE stu_studentid = 2;

-- 3. 학과별 평균 나이를 계산하고 전체 평균 나이보다 높은 학과만 조회
-- group by / having
SELECT stu_department, avg(stu_age)
FROM web_stu
GROUP BY stu_department
HAVING avg(stu_age) > (SELECT avg(stu_age) FROM web_stu);

--SELECT avg(stu_age) FROM web_stu;

-- 4. 나이가 가장 많은 학생부터 가장 어린 학생순으로 내림차순 정렬()
-- order by
SELECT stu_studentname, stu_age
FROM web_stu
ORDER BY (SELECT max(stu_age) FROM web_stu) DESC, stu_studentname asc;




















