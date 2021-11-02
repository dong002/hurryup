 import { getAnswer, setAnswer } from './utils/storage.js';
let today = new Date();
let nowday = ('0'+ (today.getDate())).slice(-2);
let nowmonth = ('0'+(today.getMonth() + 1)).slice(-2);
let tid = nowmonth+nowday;
const day = document.getElementById("day");
const month = document.getElementById("month");
const text = document.getElementById("answer-input");

const getQuestions = () => {
    return fetch("../db/data.json",{
    })
      .then((res) => res.json())
      .then((json) => json.questions);
  };

function time() {
    nowday = ('0'+ (today.getDate())).slice(-2);
    nowmonth = ('0'+(today.getMonth() + 1)).slice(-2);
    tid = nowmonth+nowday;
    month.textContent = tid.slice(0,2);
    day.textContent = tid.slice(-2);
}
function show() {
    getQuestions().then((data) => {
        const questions = data.filter((q) => q.id === tid)  ;
        document.getElementById("question").textContent = questions[0].question;
        return;
    });
}
function redirect(){
    time();
    show();
    if (localStorage.getItem(tid)!=null){
        text.value = localStorage.getItem(tid)
    }
    else{
        text.value = null
    }
}
/**
 * 저장 버튼 클릭 함수
 */
function handleSave() {
    alert("저장되었습니다")
    setAnswer(tid,text.value);
}

/**
 * 오른쪽 화살표 버튼 클릭 함수
 */
function handleNext() {

    if(tid==1120){
        alert("마지막임 ㅇㅇ")
    }
    else{
        today.setDate(today.getDate()+1);
        redirect();
    }

}

/**
 * 왼쪽 화살표 버튼 클릭 함수
 */
function handlePrev() {
    if(tid==1025){
        alert("마지막임 ㅇㅇ")
    }
    else{
        today.setDate(today.getDate()-1);
        redirect();
    }
}

/**
 * 서비스 초기화 함수
 */
function init() {
  redirect();
  document.getElementById("next-btn").addEventListener("click",handleNext)
  document.getElementById("prev-btn").addEventListener("click",handlePrev)
  document.getElementById("save-btn").addEventListener("click",handleSave)

}

init();