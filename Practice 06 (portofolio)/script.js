const nav = document.querySelector("nav");
const judulSatu = document.querySelector(".headerSatu h3");
const judulDua = document.querySelector(".headerSatu h1");
const judulTiga = document.querySelector(".headerSatu h2");
const about = document.querySelector(".about");
const layoutDua = document.querySelector(".layoutDua")
const navLink = document.querySelector(".navLink");
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");
const footer = document.querySelector("footer");

/* navbar section start */

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show(){
    navLink.style.top = "0";
};

function close(){
    navLink.style.top = "-1000%";
};

/* navbar section end */

/* document ready start */
$(document).ready((landing)=>{

function landing(){
        $(nav).css({
            'top' : '0'
        });

        $(judulSatu).css({
            'left' : '0'
        });

        $(judulDua).css({
            'right' : '0'
        });

        $(judulTiga).css({
            'bottom' : '0'
        });

        $(about).css({
            'left' : '0'
        });
}
        setTimeout(landing, 200)
});
/* document ready end */

/* scroll efects start */
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    console.log(wScroll);

    if(wScroll >= 400){
        $(layoutDua).css({
            'left' : '0'
        });
    } else if(wScroll < 400){
        $(layoutDua).css({
            'left' : '-200%'
        });
    }

    if(wScroll >= 888){
        $(footer).css({
            'right' : '0'
        });
    } else if(wScroll < 888){
        $(footer).css({
            'right' : '-200%'
        });
    }
    setTimeout(landing, 500)
});
/* scroll efects end */


