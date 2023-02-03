function ibg(){
    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}

ibg();


const iconMenu = document.querySelector('.header-menu__icon');
if(iconMenu){
    const menuBody = document.querySelector('.header-menu');
    iconMenu.addEventListener("click",function (e){
        menuBody.classList.toggle('active')
        iconMenu.classList.toggle('active');
       document.body.classList.toggle('lock')
    });
}

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}

window.initMap = initMap;









