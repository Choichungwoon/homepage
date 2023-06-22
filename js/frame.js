$(function () {


    const $topBtn = document.querySelector(".moveTopBtn");

    // 버튼 클릭 시 맨 위로 이동
    $topBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // const $bottomBtn = document.querySelector(".moveBottomBtn");

    // // 버튼 클릭 시 페이지 하단으로 이동
    // $bottomBtn.onclick = () => {
    //     window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    // };

    $('.btns').hide();
    //스크롤이 내려가면 버튼 보이기
    $(window).scroll(function () {
        var scrT = $(window).scrollTop();
        // alert(scrT); //스크롤 값 확인용
        if (scrT > 400) {
            $('.btns').fadeIn();
        } else {
            $('.btns').fadeOut();
        }
    });
});