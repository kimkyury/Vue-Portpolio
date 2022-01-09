/*const 전역변수*/
var boolean =true
boolean = false
console.log(boolean) //출력결과는 flase


/*let, 지역변수, 영역제한*/
var topic = "js"
if(topic) {
    var topic = 'react'
    console.log('블록', topic) // 출력결과 react
}
console.log('글로벌', topic) // 출력결과 react

var topic = "js"
if(topic) {
    let topic = 'react'
    console.log('블록', topic) // 출력결과 react
}
console.log('글로벌', topic) // 출력결과 js

/* 템플릿 문자열 */
console.log(lastName+ ", " + firstName + " " + middleName) // +, 전통적 방법
console.log(`${lastName}, ${firstName} ${middleName}`) // ${}, 공백 유지함

/* 디폴트 파라미터 */
function logActivity(name="규리", activity="걷기"){
    console.log(`${name}는 ${activity}를 했어요`)
}

var defaultPerson = {
    name: {firist:"규리", last:"김"},
    activity:"걷기"
}
function logActivity(p=defaultPerson){
    console.log(`p.name.first}는 ${p.activity}를 했어요`)
}

/* 화살표 함수 */
var lordify = function(firstname) { return `김 ${firstname}`}
var lordify = firstname => `김 ${firstname}` // 위 코드와 똑같음

var lordify2 = function(firstname, lastname) {return `${lastname} ${firstname}`}
var lordify2 = (firstname, lastname) => `${lastname} ${firstname}` //위 코드와 동일

