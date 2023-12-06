window.onload = function() {
  const kindWrap = document.querySelector('.kind_wrap');
  const slider = kindWrap.querySelector('.slider');
  const slideLis = slider.querySelectorAll('li');
  const moveButton = kindWrap.querySelector('.arrow');

  const liWidth = slideLis[0].clientWidth;
  const sliderWidth = liWidth * slideLis.length;
  slider.style.width = `${sliderWidth}px`;

  let currentIdx = 0;
  let translate = 0;

  moveButton.addEventListener('click', moveSlide);

  // 추가: 일정 간격으로 자동으로 슬라이드 이동
  const intervalId = setInterval(autoMoveSlide, 3000); // 3초마다 이동

  function moveSlide(event) {
    event.preventDefault();
    clearInterval(intervalId); // 사용자가 수동으로 슬라이드 이동 시 자동 이동 중지

    if (event.target.className === 'next') {
      if (currentIdx !== slideLis.length - 1) {
        translate -= liWidth;
        slider.style.transform = `translateX(${translate}px)`;
        currentIdx += 1;
      }
    } else if (event.target.className === 'prev') {
      if (currentIdx !== 0) {
        translate += liWidth;
        slider.style.transform = `translateX(${translate}px)`;
        currentIdx -= 1;
      }
    }
  }

  function autoMoveSlide() {
    if (currentIdx !== slideLis.length - 1) {
      translate -= liWidth;
      slider.style.transform = `translateX(${translate}px)`;
      currentIdx += 1;
    } else {
      // 마지막 슬라이드에 도달하면 처음으로 돌아감
      translate = 0;
      slider.style.transform = `translateX(${translate}px)`;
      currentIdx = 0;
    }
  }

  $(document).ready(function($) {

    $(".scroll_move").click(function(event){         

            event.preventDefault();

            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);

    });

});
};
