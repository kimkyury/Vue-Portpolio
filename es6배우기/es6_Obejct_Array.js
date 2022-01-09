/* 구조 분해 */
var lordify =({cheese}) => {
    console.log(`서브웨이에서 주문한 치즈의 종류는 ${cheese}`)
}
var sandwich = {
    bread: "위트",
    meat: "터키",
    cheese: "슈레드",
}
var {bread, meat} = sandwich // 좌측 변수들에 (우측)sandwich 내부의 bread, meat의 값이 대입됨
console.log(bread, meat) //출력결과 '위트', '터키'
lordify(sandwich) //출력결과 '슈레드'

/* 구조 분해2 */
var [subway] = ["썹도그", "에그마요", "쉬림프", ]
var [,,subway2] = ["썹도그", "에그마요", "쉬림프"]
console.log(subway) //출력결과, 첫번째 원소 "썹도그"
console.log(subway2) //출력결과, 세번째 원소 "쉬림프" (콤마 수 만큼 뒤의 원소를 뱉음)

/* 객체 리터럴 개선 */
var level = "어른"
var age = 30
var print = function() {
    console.log(`${this.age}살이면 ${this.level}입니다.`)
}
var person = {level, age,print} 
console.log(person) // 출력결과, "level='어른', age: 20, print: f"
person.print() //출력결과, '30살이면 어른입니다'
