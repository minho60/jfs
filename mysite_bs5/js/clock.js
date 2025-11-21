//디지털 시계, clock.js

function digitalClock() {
    //변수선언
    const date = new Date();
    const clockbox = document.getElementById("clock");
    let day; //요일을 담을 변수
    let clock;
    //날짜
    let yy = date.getFullYear(); // 년
    let mm = date.getMonth()+1;// 월
    let dd =date.getDate(); // 일
    // 시간
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    //처리
    // if else 문
    // if(date.getDay()===0){
    //     day='일';
    // } else if(date.getDay()===1){
    //     day='월';
    // } else if(date.getDay()===2){
    //     day='화';
    // } else if(date.getDay()===3){
    //     day='수';
    // } else if(date.getDay()===4){
    //     day='목';
    // } else if(date.getDay()===5){
    //     day='금';
    // }else {
    //     day='토';
    // }

    // switch문
    // 요일 숫자에서 문자열로 바꾸기
    switch (date.getDay()) {
        case 0:
            day = "일";
            break;

        case 1:
            day = "월";
            break;

        case 2:
            day = "화";
            break;

        case 3:
            day = "수";
            break;

        case 4:
            day = "목";
            break;

        case 5:
            day = "금";
            break;

        default:
            day = "토";
    }

    // 시간: AM/PM, 12시간제로 바꾸기
 
    // AM/PM 3항 연산자 사용
    const ampm = hour >= 12 ? "PM" : "AM";

    // 12시간제로 바꾸기
    hour = hour % 12;
    // 0~11 까지는 나머지가 0~11
    // 12~23 까지는 나머지가 0~11
    hour = hour ? hour : 12;

    //두 자리 맞추기
    // if(hour<10){
    //     hour='0'+hour;
    // }else{
    //     hour=hour;
    // }

    // // 분
    //  if(minute<10){
    //     minute='0'+minute;
    // }else{
    //     minute=minute;
    // }

    // // 초
    // if(second<10){
    //     second='0'+second;
    // }else{
    //     second=second;
    // }

    // 반복 코드를 재사용 할 떄 함수를 사용한다.
    // 선언적 함수 사용하기
    // 함수명? twoDigit
    // 매개변수(parameter)? timePara
    function twoDigit(timePara) {
        if (timePara < 10) {
            timePara = "0" + timePara;
        } else {
            timePara = timePara;
        }
        return timePara; // timePara를 호출한 문장에 값을 되돌려준다.
    }
    // 삼항연산자
    // timePara = timePara < 10 ? "0" + timePara : timePara;
    // return timePara;

    // 함수 호출
    hour = twoDigit(hour);
    minute = twoDigit(minute);
    second = twoDigit(second);

    //출력
    clock =  yy + "년" +mm +"월" +dd +"일" +"(" + day +")" +ampm +hour +":" +minute +":" +second;
        // 템플릿 리터럴(ver.ES6): 기호는 백틱(`)
        // 문자열과 표현식(변수, 연산, 함수 호출) 구별: ${표현식}
        clock=`${yy}년${mm}월${dd}일(${day})${ampm}${hour}:${minute}:${second}`

    clockbox.innerHTML = clock;
}

setInterval(digitalClock, 1000);
