  $(function () {
            function runCounter($counter) {
                const target = parseInt($counter.attr("data-target"))
                let count = 0,
                    speed = 50;

                $counter.text(0);

                var counterInterval = setInterval(function () {
                    count++;
                    if (count >= target) {
                        clearInterval(counterInterval);
                    }
                    $counter.text(count);
                }, speed);
            } // runCounter function end

            function checkScroll() {
                const scrollTop = $(window).scrollTop(),
                      windowHeight = $(window).height(),
                      elementTop = $(".counter").offset().top;

                $(".counter").each(function () {
                    const $this = $(this)

                    if (scrollTop + windowHeight > elementTop + 50 ) {
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
            $(window).on("scroll", $.throttle(100, checkScroll));
            checkScroll();
        });//$(document).ready() end