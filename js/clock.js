//디지털 시계, clock.js


        function digitalClock() {

            //변수선언
            const date = new Date();
            const clockbox= document.getElementById('clock');
            let day //요일을 담을 변수
            let clock;


            //처리
            // break 를 만나면 switch문을 빠져나온다.
            switch (date.getDay()) {
                case 0:
                    day = '일';
                    break;
                case 1:
                    day = '월';
                    break;
                case 2:
                    day = '화';
                    break;
                case 3:
                    day = '수';
                    break;
                case 4:
                    day = '목';
                    break;
                case 5:
                    day = '금';
                    break;
                case 6:
                    day = '토'
                    break;
                default: day = '없는요일';
            }


            //출력
            clock =
                date.getFullYear() + '년' +
                (date.getMonth()+1) + '월' +
                date.getDate() + '일' +
                '('+ day +')'+
                date.getHours() + ':' +
                date.getMinutes() + ':' +
                date.getSeconds();

                clockbox.innerHTML=clock;

        }
      
        setInterval(digitalClock, 1000);

