import { getPackedSettings } from "http2";
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
let john :Member = { name: 'park' };

// class 타입 지정 가능
class User {
    name; 
    constructor(name :string) {
        this.name = name;
    }
}

// 문자 or 숫자 들어올 수 있는 변수는 어떻게 만드는 지 (Union 타입) => 할당하게 되면 타입이 고정된다.
let 회원:(number | string) = 123; 

// 숫자 or 문자가 가능한 array/object 타입 지정은?
let 회원들 :(number | string)[] = [1, '2', 3];
let 오브젝트: { a: string | number } = { a: '123' }

// 모든 타입의 자료형을 허용 (any 타입)
let 이름 :any;
이름 = 123;
이름 = {};

// 모든 자료형을 허용해줌 (unknown 타입)
let 이름 :unknown;
이름 = 123;
이름 = {};

// 간단한 수학연산도 타입이 맞아야 가능 => unknown은 number타입이 아님
// string타입 +1 (허용), number타입 +1 (허용), string|number타입 +1 (허용X)
let 나이 :string | number;
나이 + 1

// 함수 만들 시 파라미터 타입 지정 안 하면 :any로 선언된다. 따라서, 따로 타입 지정이 필요하다
// 함수() 밖에 따로 지정하여 return의 타입을 지정한다.
function 함수(x :number) :number {
    return x * 2;
}

// 함수에서 void 타입 활용 가능 => 실수로 return하는 것을 사전에 막을 수 있음
function 함수(x :number) :void {
    1 + 1;
}

// 자바스크립트와의 다른 점
// - 타입지정된 파라미터는 무조건 사용
// - 파라미터가 옵션일 경우엔 "파라미터변수? :타입"
function 함수(x? :number): void {
    
}

함수()

// "파라미터변수? :타입"은 "변수 :타입 | undefined"와 같다
function 함수(x: number | string): void {
    console.log(x + 3)         // ==> string+number은 가능, number+number은 가능 그외는 불가능
}

함수(2)

// ==> 아래와 같이 변경해준다
function 함수(x: number | string): void {
    if (x의 타입이 숫자면) {
        console.log(x + 3)         
    }
}

함수(2)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////  Narrowing & Assertion  /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// type이 아직 하나로 확정되지 않았을 경우 type narrowing을 써야한다
function 내함수(x: number | string) {
    if (typeof x === 'string') {        // ==> typeof를 통해 type을 확인한다
        return x + '1'
    } else {
        return x + 1
    }
}

내함수(123);

// 어떤 변수가 타입이 아직 불확실하면 if문 등으로 Narrowing 해줘야 조작가능
// Narrowing으로 판정해주는 문법들 : typeof 변수, 속성명 in 오브젝트자료, 인스턴스 instanceof 부모
function 내함수(x: number | string) {
    
    let array: number[] = [];
    if (typeof x === 'number') {
        array[0] = x;
    } else {
        // else 안 쓰면 에러 날 수도 있음
    }
}

내함수(123);

// Assertion 문법 : 타입 덮어쓰기
// 1. Narrowing할때 사용한다. (타입을 a에서 b로 바꾸는 문법이 아니라 x :number | string와 같이 정해지지 않았을 경우 선택해주는 문법)
// 2. 무슨 타입이 들어올 지 100% 확실할 때 사용
function 내함수(x :number | string) {
    
    let array: number[] = [];
    array[0] = x as number;
}

내함수(123);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////  타입도 변수에 담아쓰세요 type 키워드 써서 & readonly //////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// type alias 만드는 법
type Animal = string | number | undefined;      // == let 동물 :string | number | undefined;
let 동물 :Animal = 123;
let 동물2: Animal = 'dog';

type People = { name: string, age: number };    // == let 사람 :{ name: string, age: number } = { name : 'park', age : 20 }
let 사람: People = { name: 'park', age: 20 };

// const 변수 : 절대 변경할 수 없는 변수를 제작하는 방법 (등호로 제할당만 막는 역할)
const 출생지역 = 'seoul';   
const 출생지역2 = { region: 'seoul' }      // => const로 담은 object 수정은 자유롭게 가능

// 하지만 typescript를 사용하면 object 자료 수정도 막을 수 있음 (readonly 사용)
type Girlfriend = {
    readonly name : string
}

const 여친 :Girlfriend = {
    name : '앰버'
}

// objext 속성 안에도 ? 사용 가능
type Girlfriend = {
    name? : string | undefined
}

const 여친 :Girlfriend = {
    name : '앰버'
}

// type 변수 => 당연히 union type으로 합치기 가능
type Name = string;
type Age = number;
type Person = Name | Age;

// &연산자로 object 타입 extend 하기
type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY        // { x: number, y: number };

let position: NewType = { x: 10, y: 20 }