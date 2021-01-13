var total = 0;

function showSlide(){

    document.querySelector(".Body-container-intro-detail").classList.remove('off');

    document.querySelector(".myItem-1").classList.add('opacity-off');
    document.querySelector(".myItem-2").classList.add('opacity-off');
    document.querySelector(".myItem-3").classList.add('opacity-off');
    document.querySelector(".myItem-4").classList.add('opacity-off');
    document.querySelector(".myItem-5").classList.add('opacity-off');

    total++;

    if( total % 2 == 0){
        showText();
    }else{
        showText1();
    } 

    function showText(){
        var dot = document.querySelectorAll(".dot");
        dot[0].classList.remove('active-on');
        dot[1].classList.add('active-on');
        
        var text1 = document.querySelectorAll(".myItem-1");
        text1[0].style.display = "none";
        text1[1].style.display = "block";
     

        function showSlides1(){
            function Hidden1(){
                document.querySelector(".myItem-1").classList.remove('opacity-off');
                document.querySelector(".myItem-1").classList.add('opacity-on');
                document.querySelector(".myItem-1").classList.add('duration');
            }
            function Hidden2(){
                document.querySelector(".myItem-2").classList.remove('opacity-off');
                document.querySelector(".myItem-2").classList.add('opacity-on');
                document.querySelector(".myItem-2").classList.add('duration');
            }
            function Hidden3(){
                document.querySelector(".myItem-3").classList.remove('opacity-off');
                document.querySelector(".myItem-3").classList.add('opacity-on');
                document.querySelector(".myItem-3").classList.add('duration');
            }
            function Hidden4(){
                document.querySelector(".myItem-4").classList.remove('opacity-off');
                document.querySelector(".myItem-4").classList.add('opacity-on');
                document.querySelector(".myItem-4").classList.add('duration');
            }
            function Hidden5(){
                document.querySelector(".myItem-5").classList.remove('opacity-off');
                document.querySelector(".myItem-5").classList.add('opacity-on');
                document.querySelector(".myItem-5").classList.add('duration');
            }

            function Show() {
                setTimeout(Hidden1, 1000);
                setTimeout(Hidden2, 1500);
                setTimeout(Hidden3, 2000);
                setTimeout(Hidden4, 2500);
                setTimeout(Hidden5, 3000);
            }
            Show();
        }  
        showSlides1();
    }

    function showText1(){
        var dot = document.querySelectorAll(".dot");
        dot[1].classList.remove('active-on');
        dot[0].classList.add('active-on');

        var text1 = document.querySelectorAll(".myItem-1");
        text1[0].style.display = "block";
        text1[1].style.display = "none";
        
        
        function showSlides1(){
            function Hidden1(){
                document.querySelector(".myItem-1").classList.remove('opacity-off');
                document.querySelector(".myItem-1").classList.add('opacity-on');
                document.querySelector(".myItem-1").classList.add('duration');
            }
            function Hidden2(){
                document.querySelector(".myItem-2").classList.remove('opacity-off');
                document.querySelector(".myItem-2").classList.add('opacity-on');
                document.querySelector(".myItem-2").classList.add('duration');
            }
            function Hidden3(){
                document.querySelector(".myItem-3").classList.remove('opacity-off');
                document.querySelector(".myItem-3").classList.add('opacity-on');
                document.querySelector(".myItem-3").classList.add('duration');
            }
            function Hidden4(){
                document.querySelector(".myItem-4").classList.remove('opacity-off');
                document.querySelector(".myItem-4").classList.add('opacity-on');
                document.querySelector(".myItem-4").classList.add('duration');
            }
            function Hidden5(){
                document.querySelector(".myItem-5").classList.remove('opacity-off');
                document.querySelector(".myItem-5").classList.add('opacity-on');
                document.querySelector(".myItem-5").classList.add('duration');
            }
         
            function Show() {
                setTimeout(Hidden1, 1000);
                setTimeout(Hidden2, 1500);
                setTimeout(Hidden3, 2000);
                setTimeout(Hidden4, 2500);
                setTimeout(Hidden5, 3000);
            }
            Show();
        }  
        showSlides1();
    }
}

function clearSlide(){
    document.querySelector(".Body-container-intro-detail").classList.add('off');
}

setInterval(clearSlide,5000);
setInterval(showSlide,5000);

// =============================================================================

function changeHeight(){
    document.querySelector(".Header").classList.toggle('change-Height');
}

