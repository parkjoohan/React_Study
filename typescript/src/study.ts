import { isConstructorDeclaration } from "typescript";

// typescript는 변수의 형태를 지정한다.
let 이름 :string = "park";

// 어떤 변수들이 들어가는 배열인지 지정한다.
let 이름: string[] = ["park", "kim"];

// Object 타입도 지정한다
let 이름: { name: string } = { name: 'park' }

// 다양한 타입이 들어올 수 있게 하는 Union type 가능
let 이름: string | number = 'park';

// 타입을 변수에 담아 사용 가능 (보통 타입의 변수는 대문자로 시작)
type Name = string | number

let 이름 :Name = 123;

// 함수에 타입지정 가능
function 함수(x: number) :number {
    return x * 2;
}

// array에 쓸 수 있는 tuple 타입
type Member = [number, boolean];    // => 무조건 첫째는 number, 둘째는 boolean
let john: Member = [123, true];

// Object에 타입지정해야할 속성이 너무 많으면
type Member = {
    // string으로 들어오는 모든 Object 속성들이 string으로 가져야한다.
    [key :string] : string
}
let john: Member = { name: 'park' };

// class 타입 지정 가능
class User {
    name; 
    constructor(name: string) {
        this.name = name;
    }
}

// 문자 or 숫자 들어올 수 있는 변수는 어떻게 만드는 지 (Union 타입) => 할당하게 되면 타입이 고정된다.
let 회원:(number | string) = 123; 

// 숫자 or 문자가 가능한 array/object 타입 지정은?
let 회원들 :(number | string)[] = [1, '2', 3];
let 오브젝트: { a: string | number } = { a: '123' }

// 모든 타입의 자료형을 허용 (any 타입)
let 이름: any;
이름 = 123;
이름 = {};

// 모든 자료형을 허용해줌 (unknown 타입)
let 이름: unknown;
이름 = 123;
이름 = {};

// 간단한 수학연산도 타입이 맞아야 가능 => unknown은 number타입이 아님
// string타입 +1 (허용), number타입 +1 (허용), string|number타입 +1 (허용X)
let 나이: string | number;
나이 + 1