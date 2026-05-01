/* text_iife.js */
// 텍스트 작성과 삭제 즉시 실행 함수
(function(){
  const spanEl = document.querySelector("main h2 span");
  const txtArr = ['정찬희 개인페이지입니다', '어떻게 살아왔는지! ', '어떻게 살것인지! ', '어떤희망으로 살것인지 ! ', '정찬희의 생각을 말합니다', '정찬희의 철학을 말합니다', '정찬희의 꿈을 말합니다', '정찬희의 목표를 말합니다', '정찬희의 비전을 말합니다', '정찬희의 미래를 말합니다'];
  let index = 0;
  let currentTxt = txtArr[index].split("");
  function writeTxt(){
    spanEl.textContent  += currentTxt.shift(); 
    if(currentTxt.length !== 0){ 
      setTimeout(writeTxt, Math.floor(Math.random() * 100));
    }else{
      currentTxt = spanEl.textContent.split("");
      setTimeout(deleteTxt, 3000);
    }
  }
  function deleteTxt(){
    currentTxt.pop();
    spanEl.textContent = currentTxt.join("");
    if(currentTxt.length !== 0){
      setTimeout(deleteTxt, Math.floor(Math.random() * 100))
    }else{
      index = (index + 1) % txtArr.length;
      currentTxt = txtArr[index].split("");
      writeTxt();
    }
  }
  writeTxt();
})();
/* end text_iife.js */


function applyTargetBlank() {
  var anchors = document.querySelectorAll('a');
  anchors.forEach((item) => {
    item.target = "_blank";
  });
}

window.addEventListener("load", applyTargetBlank);

/* scroll_request.js */
/* 수직 스크롤이 발생하면 header 태그에 active 클래스 추가 및 삭제 */
const headerEl = document.querySelector("header");
window.addEventListener('scroll', function(){
  requestAnimationFrame(scrollCheck);
});
function scrollCheck(){
  let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
  if(browerScrollY > 0){
    headerEl.classList.add("active");
  }else{
    headerEl.classList.remove("active");
  }
}
/* end scroll_request.js */

/* move.js */
/* 애니메이션 스크롤 이동 */
const animationMove = function(selector){
  // ① selector 매개변로 이동할 대상 요소 노드 가져오기
  const targetEl = document.querySelector(selector);
  // ② 현재 브라우저의 스크롤 정보(y 값)
  const browserScrollY = window.pageYOffset;
  // ③ 이동할 대상의 위치(y 값)
  const targetScorllY = targetEl.getBoundingClientRect().top + browserScrollY;
  // ④ 스크롤 이동
  window.scrollTo({ top: targetScorllY, behavior: 'smooth' });
};
// 스크롤 이벤트 연결하기
const scollMoveEl = document.querySelectorAll("[data-animation-scroll='true']"); 
for(let i = 0; i < scollMoveEl.length; i++){
  scollMoveEl[i].addEventListener('click', function(e){
    const target = this.dataset.target;
    animationMove(target);
  });
}
/* End move.js */
/* portfolio_logic.js */
// 필터링 기능
const filterBtns = document.querySelectorAll('.filter-btn');
const aiContent = document.querySelector('.ai-content');
const d3Content = document.querySelector('.d3-content');

filterBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    // 버튼 활성화 클래스 관리
    filterBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    // 콘텐츠 표시/숨김
    const filter = this.dataset.filter;
    if(filter === 'ai') {
      aiContent.classList.add('active');
      d3Content.classList.remove('active');
    } else {
      aiContent.classList.remove('active');
      d3Content.classList.add('active');
    }
  });
});

// 모달 팝업 기능
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const portfolioInners = document.querySelectorAll(".portfolio-inner");

portfolioInners.forEach(inner => {
  inner.addEventListener('click', function() {
    const img = this.querySelector('img');
    const h3 = this.querySelector('h3');
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = h3.innerHTML;
  });
});

// 모달 닫기
const closeModal = document.querySelector(".close-modal");
closeModal.onclick = function() {
  modal.style.display = "none";
}

// 모달 바깥쪽 클릭 시 닫기
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
/* End portfolio_logic.js */