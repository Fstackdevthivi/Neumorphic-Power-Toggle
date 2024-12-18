$(function () {
    const wdIcon= document.querySelector("#eye");
    $("#wd-btn").click(
        function () {
            // Lors du survol
            this.classList.toggle("fa-sun");
            $('body').toggleClass("d-mode");
            
        }/*,
        function () {
            // Lorsque le survol est terminé
            $('.sp').css({
                "background": "linear-gradient(90deg, #866ee7, #ea60da, #ed8f57, #fbd41d, #2cca91)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
                "background-clip": "text",
                "text-fill-color": "transparent",
                "display": "block"
            });
        }*/
    );
    /*
    const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});
    */
});