        
        // light/Dark Mode
        const home = document.getElementById('home');
  

        // 현재 시각에 따라 자동 적용
        function applyThemeByTime() {
            const now = new Date();
            const hour = now.getHours();

           
            if (hour >= 18 || hour < 7) {
                home.classList.add('dark');
                
            } else {
                home.classList.remove('dark');  
            }
        };


        // 페이지 로드 시 자동 설정
        applyThemeByTime();
