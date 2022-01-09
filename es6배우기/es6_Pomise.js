
//함수 getFakeMembers는 count변수를 받아오고, Promise를 리턴시킴
const getFakeMembers = count => new Promise((resolves, rejects) => { //새로운 프라미스 반환하는 함수, getFakeMembers
    const api = `https://api.randomuser.me/?nat=US&results=${count}`
    const request = new XMLHttpRequest()
    request.open('GET', api) // randomuser.me API에 요청을 보냄
    request.onload=() =>
        (request.status === 200) ? //응답 성공시 데이터를 제대로 받아옴. 실패하면 오류 발생
        resolves(JSON.parse(request.response).results) : //성공
        reject(Error(request.statusText)) //오류
    request.onerror = (err) => rejects(err)
    request.send()
})

// 가져오고 싶은 멤버 수를 getFakeMembers 함수에 전달, 호출하면 실제 프라미스 사용가능
// 프라미스 성공 후 처리할 작업을 기술하기 위한 than함수 작성,
// then함수를 프라미스 뒤에 연쇄(체이닝, chaning)시킴. (error 처리를 위한 콜백도 제공)
getFakeMembers(5).then(
    members => console.log(members),
    err => console.error(
        new Error("randomuser.me에서 멤버를 가져올 수 없습니다."))
)