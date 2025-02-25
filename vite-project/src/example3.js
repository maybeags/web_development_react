// Javascript 복습 및 React 활용 문법 # 3

// 클래스와 상속

/**
 * 기본적으로 JS(ES6)에서의 클래스의 정의 Java와 유사합니다. 
 * 클래스 정의 방식
 */
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
/**
 * 상속 : extends 키워드를 사용.
 */

class Employee extends Person {
  // 생성자 명령어
  constructor(firstName, lastName, salary) {
    // 부모 클래스의 생성자 불러오는 키워드 super()
    super(firstName, lastName);
    this.salary = salary;
  }
}


