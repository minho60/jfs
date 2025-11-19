   
   
   $(window).scroll(function () {
            //변수 선언

            let windowHeight = $(window).height();
            let windowScrollTop = $(window).scrollTop();
            const speed = 1000,
                easing = "easeOutExpo",
                pos = 0,
                offset = 3;

            // 오른쪽 상단에 스크롤양과 창 높이 값 출력
            console.log(windowScrollTop + " , " + windowHeight);


            if (windowScrollTop > windowHeight / offset) {
                //참일 경우
                for (let i = 0; i < 4; i++) {
                    $(".motion").eq(i).stop().animate({ top: pos, opacity: 1 }, speed * (i + 2) / 2, easing);
                };

            } else {
                //거짓일 경우
                $(".motion").stop().animate({ top: pos + 1000, opacity: 1 }, speed, easing);
            }
        });
