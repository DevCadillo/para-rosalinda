let musicaActiva = false;
let indice = 0;

const mensajes = [

    "Porque tienes una sonrisa capaz de hacer más bonito un momento sencillo. 🌻",

    "Porque tienes una manera muy tuya de ser... y precisamente eso te hace especial. 💛",

    "Porque existen personas que simplemente se conocen, pero otras consiguen dejar bonitos recuerdos. ✨",

    "Porque incluso sin darte cuenta puedes ser el motivo de una sonrisa. 😊",

    "Porque tu presencia puede hacer diferente un momento completamente normal. 🌼",

    "Porque mereces recibir cosas bonitas sin necesitar una ocasión especial. 💕",

    "Porque nunca necesitas parecerte a alguien más para destacar. 🌻",

    "Porque hay personas que llegan haciendo ruido y otras que simplemente llegan... y terminan siendo especiales. 💛",

    "Porque entre tantas personas que uno puede conocer, algunas tienen algo difícil de explicar. ✨",

    "Y la última razón es la más sencilla: porque eres tú, Rosalinda. 🌻💛"

];


/* ======================================
   ABRIR REGALO
====================================== */

function abrirRegalo(){

    iniciarMusica();

    explosion(35);

    lluviaFlores();

    setTimeout(() => {

        document
            .getElementById("bienvenida")
            .scrollIntoView({
                behavior:"smooth"
            });

    },900);
}


/* ======================================
   MÚSICA
====================================== */

function iniciarMusica(){

    const musica =
        document.getElementById("musica");

    musica.volume = 0.45;

    musica.play()
    .then(() => {

        musicaActiva = true;

        document.getElementById("btnMusica")
            .innerHTML = "⏸️ <span>Pausar</span>";

    })
    .catch(() => {

        console.log(
            "El navegador espera interacción del usuario."
        );

    });
}


function controlMusica(){

    const musica =
        document.getElementById("musica");

    if(musicaActiva){

        musica.pause();

        musicaActiva = false;

        document.getElementById("btnMusica")
            .innerHTML =
            "🎵 <span>Música</span>";

    }else{

        musica.play();

        musicaActiva = true;

        document.getElementById("btnMusica")
            .innerHTML =
            "⏸️ <span>Pausar</span>";
    }
}


/* ======================================
   MENSAJES
====================================== */

function nuevoMensaje(){

    const caja =
        document.getElementById(
            "mensajeCambiante"
        );

    caja.style.opacity = "0";

    caja.style.transform =
        "translateY(10px)";

    setTimeout(() => {

        caja.innerHTML =
            mensajes[indice];

        caja.style.opacity = "1";

        caja.style.transform =
            "translateY(0)";

        indice++;

        if(indice >= mensajes.length){
            indice = 0;
        }

    },300);

    explosion(8);
}


/* ======================================
   CARTA
====================================== */

function abrirCarta(){

    document
        .getElementById("modalCarta")
        .classList.add("activo");

    document.body.classList.add(
        "bloqueado"
    );

    explosion(20);
}


function cerrarCarta(){

    document
        .getElementById("modalCarta")
        .classList.remove("activo");

    document.body.classList.remove(
        "bloqueado"
    );
}


document
.getElementById("modalCarta")
.addEventListener(
    "click",
    function(event){

        if(event.target === this){
            cerrarCarta();
        }

    }
);


/* ======================================
   PARTÍCULA
====================================== */

function crearParticula(
    emoji = null
){

    const elemento =
        document.createElement("div");

    elemento.className =
        "particula";

    const opciones = [
        "💛",
        "💕",
        "💖",
        "🌻",
        "✨"
    ];

    elemento.innerHTML =
        emoji ||
        opciones[
            Math.floor(
                Math.random()
                * opciones.length
            )
        ];

    elemento.style.left =
        Math.random()*100 + "vw";

    elemento.style.fontSize =
        (18 + Math.random()*25)
        + "px";

    elemento.style.animationDuration =
        (4 + Math.random()*4)
        + "s";

    document.body.appendChild(
        elemento
    );

    setTimeout(() => {

        elemento.remove();

    },8500);
}


/* ======================================
   EXPLOSIÓN
====================================== */

function explosion(cantidad){

    for(
        let i=0;
        i<cantidad;
        i++
    ){

        setTimeout(() => {

            crearParticula();

        },i*60);
    }
}


/* ======================================
   LLUVIA FLORES
====================================== */

function lluviaFlores(){

    const flores = [
        "🌻",
        "🌼",
        "💛",
        "✨"
    ];

    for(
        let i=0;
        i<35;
        i++
    ){

        setTimeout(() => {

            const flor =
                document.createElement(
                    "div"
                );

            flor.className =
                "flor-caida";

            flor.innerHTML =
                flores[
                    Math.floor(
                        Math.random()
                        * flores.length
                    )
                ];

            flor.style.left =
                Math.random()*100
                + "vw";

            flor.style.fontSize =
                (20 +
                Math.random()*35)
                + "px";

            flor.style.animationDuration =
                (4 +
                Math.random()*5)
                + "s";

            document.body
                .appendChild(flor);

            setTimeout(() => {

                flor.remove();

            },9500);

        },i*80);
    }
}


/* ======================================
   GRAN FINAL
====================================== */

function granFinal(){

    const normal =
        document.getElementById(
            "finalNormal"
        );

    const escena =
        document.getElementById(
            "escenaFinal"
        );

    normal.style.display =
        "none";

    escena.classList.add(
        "activa"
    );

    explosion(45);

    escribirNombre();

    setTimeout(() => {

        document
            .getElementById(
                "corazonFlores"
            )
            .classList.add(
                "mostrar"
            );

        lluviaFlores();

    },3200);


    setTimeout(() => {

        document
            .getElementById(
                "textoFinal"
            )
            .classList.add(
                "mostrar"
            );

    },5000);
}


/* ======================================
   NOMBRE LETRA POR LETRA
====================================== */

function escribirNombre(){

    const nombre =
        "ROSALINDA";

    const contenedor =
        document.getElementById(
            "nombreFinal"
        );

    contenedor.innerHTML = "";

    nombre
    .split("")
    .forEach(
        (letra,i) => {

            const span =
                document.createElement(
                    "span"
                );

            span.innerHTML =
                letra;

            span.className =
                "letra-final";

            span.style.animationDelay =
                (i*.25)
                + "s";

            contenedor
                .appendChild(span);
        }
    );
}


/* ======================================
   CORAZONES AUTOMÁTICOS
====================================== */

setInterval(() => {

    if(
        Math.random() > .55
    ){

        crearParticula(
            Math.random() > .5
            ? "💛"
            : "🌻"
        );

    }

},1800);


/* ======================================
   CLICK CON DESTELLO
====================================== */

document.addEventListener(
    "click",
    function(event){

        const brillo =
            document.createElement(
                "div"
            );

        brillo.innerHTML =
            Math.random() > .5
            ? "✨"
            : "💛";

        brillo.style.position =
            "fixed";

        brillo.style.left =
            event.clientX + "px";

        brillo.style.top =
            event.clientY + "px";

        brillo.style.zIndex =
            "99999";

        brillo.style.pointerEvents =
            "none";

        brillo.style.fontSize =
            "18px";

        brillo.style.transition =
            "1s ease";

        document.body
            .appendChild(brillo);

        requestAnimationFrame(() => {

            brillo.style.transform =
                "translateY(-60px) scale(1.8)";

            brillo.style.opacity =
                "0";

        });

        setTimeout(() => {

            brillo.remove();

        },1000);
    }
);