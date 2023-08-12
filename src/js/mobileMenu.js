const boton = document.querySelector('.boton-menu');

function mostrar_ocultar_menu() {
    const menu = document.querySelector('.menu');

    menu.classList.toggle('mobile-menu');

    if(menu.classList.contains('mobile-menu')){
        bloquearScroll();
    } else {
        desbloquearScroll();
    }
}

function bloquearScroll(){
    const anchoVentana = window.innerWidth;

    if(anchoVentana < 768){
        document.body.style.overflow = 'hidden';
    }
}

function desbloquearScroll(){
    document.body.style.overflow = '';
}

boton.onclick = mostrar_ocultar_menu;
