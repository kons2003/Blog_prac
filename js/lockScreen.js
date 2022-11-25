// 조건 만족할 때, 클릭 시 버튼색 변경
const btn = document.querySelector(".loginBtn");

btn.addEventListener("keyup", function(e){
  const loginButton = document.querySelector("button");
  const inputId = document.querySelector('.id').value;
  const inputPw = document.querySelector('.pwd').value;
  if(inputId.length >= 1 && inputPw.length >= 4){
    loginButton.style.backgroundColor = "#0095F6";
  }else{
    alert("내용을 입력해 주세요");
    loginButton.style.backgroundColor = "default";
  }
  return false;
})