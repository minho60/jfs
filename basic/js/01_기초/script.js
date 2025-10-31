// 함수 작성
function fn2(){
    //js 실행 문장
    alert('javascript');
}
//버튼 선택

//자바스크립트는 명령어의 대소문자를 구분(카멜표기법)
var btn2=document.getElementById('btn2');

// 클릭 이벤트 작성
btn2.onclick= function(){
    fn2();
};