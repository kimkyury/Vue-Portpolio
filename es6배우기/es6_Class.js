//기존 방식은 다음과 같음 (프로토타입을 이용한다는 게 잘 들어남)
function Vacation2(destination, length) {
    this.destination = destination
    this.length = length
}
Vacation2.prototype.print = function() {
    console.log(this.destination + "까지 " + this.length + "시간 걸립니다")
}
var busan = new Vacation2("부산", 4)
busan.print() //출력: "부산까지 4시간 걸립니다"

//기존처럼 함수는 객체며 상속은 프로토타입을 통해 처리됨
//문법자체는 class를 사용하는 구문을 이용함
class Vacation {
    constructor(destination, length) {
        this.destination = destination
        this.length = length
    }
    print() {
        console.log(`${this.destination}까지 ${this.length}시간 걸립니다`)
    }
}
var kimhae = new Vacation("김해", 3)
kimhae.print() //출력: "김해까지 3시간 걸립니다"


//클래스 확장 가능

class Expedition extends Vacation {
        constructor(destination, length, gear) {
            super(destination, length)
            this.gear = gear
        }

        print() {
            super.print()
            console.log(`당신의 ${this.gear.join("과 당신의 ")}를 가져오세요.`)
        }
}

const trip = new Expedition("서울", 1, ["롱패딩", "지갑"])
trip.print()