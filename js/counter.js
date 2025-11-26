  $(function () {
            function runCounter($counter) {
                const target = parseInt($counter.attr("data-target"))
                let count = 0,
                    speed = 50;

                $counter.text(0);

                var counterInterval = setInterval(function () {
                    // count += Math.ceil(target / 100);
                    count++;
                    if (count >= target) {
                        // count = target;
                        clearInterval(counterInterval);
                    }
                    $counter.text(count);
                }, speed);
            } // runCounter function end

            function checkScroll() {
                const scrollTop = $(window).scrollTop(),
                    windowHeight = $(window).height();

                $(".counter").each(function () {
                    const $this = $(this),
                        elementTop = $this.offset().top;

                    if (scrollTop + windowHeight > elementTop + 50 && scrollTop < elementTop + $this.outerHeight()) {
                        if (!$this.hasClass("active")) {
                            $this.addClass("active");
                            runCounter($this);
                        }
                    } else {
                        $this.removeClass("active");
                        $this.text(0);
                    }
                });
            } // checkScroll function end
            // $.throttle(시간, 함수)
            // -> 시간은 ms, 예)100 -> 0.1초
            $(window).on("scroll", $.throttle(100, checkScroll));
            checkScroll();
        });