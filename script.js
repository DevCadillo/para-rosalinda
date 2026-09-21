/* =========================================
   VARIABLES
========================================= */

let musicaActiva = false;
let indiceMensaje = 0;
let finalEjecutado = false;


/* =========================================
   MENSAJES ROMÁNTICOS
========================================= */

const mensajes = [

    "Porque después de todos estos años todavía consigues hacerme sonreír como al principio. ❤️",

    "Porque contigo he vivido momentos que guardaré para siempre en mi corazón. 🌻",

    "Porque no solamente eres mi novia, también eres mi compañera y una persona muy importante en mi vida. 💕",

    "Porque amo tu sonrisa y esa forma tan tuya de hacer especiales hasta los momentos más sencillos. 🥰",

    "Porque hemos crecido juntos, aprendido juntos y todavía tenemos muchísimo por vivir. ❤️",

    "Porque cada recuerdo contigo forma parte de nuestra historia, y amo la historia que estamos construyendo. ✨",

    "Porque incluso después de tanto tiempo sigo encontrando nuevas razones para amarte. 💛",

    "Porque hemos tenido días fáciles y otros no tanto, pero seguimos aquí, caminando juntos. ❤️",

    "Porque cuando pienso en muchos de mis mejores recuerdos, inevitablemente apareces tú. 🌻",

    "Porque quiero seguir celebrando contigo muchos cumpleaños, aniversarios, logros, viajes y sueños. 💕",

    "Porque todo lo que hemos vivido hasta ahora solamente es una parte de todo lo bonito que todavía nos espera. ✨",

    "Porque quiero seguir creando contigo esos pequeños momentos que después terminan convirtiéndose en grandes recuerdos. ❤️",

    "Porque entre tantas personas que existen en este mundo, mi corazón tuvo la fortuna de encontrarte a ti. 🌻",

    "Porque no quiero agradecer solamente por lo que ya vivimos, sino también ilusionarme por todo lo que todavía nos espera. 💛",

    "Y porque después de todas las razones posibles, hay una que resume todo: te amo, Rosalinda. ❤️🌻"

];


/* =========================================
   ABRIR EL REGALO
========================================= */

function abrirRegalo(){

    iniciarMusica();

    explosion(30);

    setTimeout(() => {

        lluviaFlores();

    },300);


    setTimeout(() => {

        document
            .getElementById("bienvenida")
            .scrollIntoView({
                behavior:"smooth"
            });

    },850);

}


/* =========================================
   MÚSICA
========================================= */

function iniciarMusica(){

    const musica =
        document.getElementById("musica");

    musica.volume = 0.45;

    const promesa =
        musica.play();

    if(promesa !== undefined){

        promesa
        .then(() => {

            musicaActiva = true;

            actualizarBotonMusica();

        })
        .catch(() => {

            musicaActiva = false;

            actualizarBotonMusica();

        });

    }

}


function controlMusica(){

    const musica =
        document.getElementById("musica");

    if(musicaActiva){

        musica.pause();

        musicaActiva = false;

    }else{

        musica.play()
        .then(() => {

            musicaActiva = true;

            actualizarBotonMusica();

        })
        .catch(() => {

            musicaActiva = false;

        });

    }

    actualizarBotonMusica();

}


function actualizarBotonMusica(){

    const boton =
        document.getElementById("btnMusica");

    if(musicaActiva){

        boton.innerHTML =
            "⏸️ <span>Pausar</span>";

    }else{

        boton.innerHTML =
            "🎵 <span>Música</span>";

    }

}


/* =========================================
   MOSTRAR RAZONES
========================================= */

function nuevoMensaje(){

    const caja =
        document.getElementById(
            "mensajeCambiante"
        );

    const contador =
        document.getElementById(
            "contadorMensajes"
        );

    caja.style.opacity = "0";

    caja.style.transform =
        "translateY(12px)";


    setTimeout(() => {

        caja.innerHTML =
            mensajes[indiceMensaje];

        caja.style.opacity = "1";

        caja.style.transform =
            "translateY(0)";


        contador.innerHTML =
            `Razón ${
                indiceMensaje + 1
            } de ${
                mensajes.length
            } ❤️`;


        indiceMensaje++;


        if(
            indiceMensaje >=
            mensajes.length
        ){

            indiceMensaje = 0;

        }

    },300);


    explosion(7);

}


/* =========================================
   ABRIR CARTA
========================================= */

function abrirCarta(){

    const modal =
        document.getElementById(
            "modalCarta"
        );

    modal.classList.add(
        "activo"
    );

    document.body.classList.add(
        "bloqueado"
    );

    explosion(18);

}


/* =========================================
   CERRAR CARTA
========================================= */

function cerrarCarta(){

    const modal =
        document.getElementById(
            "modalCarta"
        );

    modal.classList.remove(
        "activo"
    );

    document.body.classList.remove(
        "bloqueado"
    );

}


/* =========================================
   CERRAR CARTA AL TOCAR FUERA
========================================= */

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


/* =========================================
   CERRAR CARTA CON ESC
========================================= */

document.addEventListener(
    "keydown",
    function(event){

        if(event.key === "Escape"){

            cerrarCarta();

        }

    }
);


/* =========================================
   CREAR PARTÍCULA
========================================= */

function crearParticula(
    emoji = null
){

    const elemento =
        document.createElement(
            "div"
        );

    elemento.className =
        "particula";


    const opciones = [

        "❤️",
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
        Math.random()
        * 100
        + "vw";


    elemento.style.fontSize =
        (
            17 +
            Math.random()
            * 27
        )
        + "px";


    elemento.style.animationDuration =
        (
            4 +
            Math.random()
            * 4
        )
        + "s";


    document.body.appendChild(
        elemento
    );


    setTimeout(() => {

        elemento.remove();

    },8500);

}


/* =========================================
   EXPLOSIÓN DE CORAZONES
========================================= */

function explosion(cantidad){

    for(
        let i = 0;
        i < cantidad;
        i++
    ){

        setTimeout(() => {

            crearParticula();

        },i * 55);

    }

}


/* =========================================
   LLUVIA DE FLORES
========================================= */

function lluviaFlores(){

    const flores = [

        "🌻",
        "🌼",
        "💛",
        "❤️",
        "✨"

    ];


    for(
        let i = 0;
        i < 38;
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
                Math.random()
                * 100
                + "vw";


            flor.style.fontSize =
                (
                    20 +
                    Math.random()
                    * 35
                )
                + "px";


            flor.style.animationDuration =
                (
                    4 +
                    Math.random()
                    * 5
                )
                + "s";


            document.body.appendChild(
                flor
            );


            setTimeout(() => {

                flor.remove();

            },9500);


        },i * 75);

    }

}


/* =========================================
   GRAN FINAL
========================================= */

function granFinal(){

    if(finalEjecutado){
        return;
    }

    finalEjecutado = true;


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

        const corazon =
            document.getElementById(
                "corazonFlores"
            );

        corazon.classList.add(
            "mostrar"
        );

        lluviaFlores();

    },3200);


    setTimeout(() => {

        const texto =
            document.getElementById(
                "textoFinal"
            );

        texto.classList.add(
            "mostrar"
        );

    },5000);


    setTimeout(() => {

        explosion(30);

    },7000);

}


/* =========================================
   ESCRIBIR ROSALINDA LETRA POR LETRA
========================================= */

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
        (letra,indice) => {

            const span =
                document.createElement(
                    "span"
                );


            span.innerHTML =
                letra;


            span.className =
                "letra-final";


            span.style.animationDelay =
                (
                    indice
                    * .25
                )
                + "s";


            contenedor.appendChild(
                span
            );

        }
    );

}


/* =========================================
   CORAZONES AUTOMÁTICOS
========================================= */

setInterval(() => {

    if(
        Math.random()
        > .58
    ){

        const opciones = [
            "❤️",
            "💛",
            "🌻"
        ];


        crearParticula(

            opciones[
                Math.floor(
                    Math.random()
                    * opciones.length
                )
            ]

        );

    }

},1900);


/* =========================================
   EFECTO AL HACER CLICK
========================================= */

document.addEventListener(
    "click",
    function(event){

        const brillo =
            document.createElement(
                "div"
            );


        brillo.className =
            "destello-click";


        const efectos = [
            "✨",
            "💛",
            "❤️"
        ];


        brillo.innerHTML =
            efectos[
                Math.floor(
                    Math.random()
                    * efectos.length
                )
            ];


        brillo.style.left =
            event.clientX
            + "px";


        brillo.style.top =
            event.clientY
            + "px";


        document.body.appendChild(
            brillo
        );


        requestAnimationFrame(() => {

            brillo.style.transform =
                "translateY(-65px) scale(1.8)";

            brillo.style.opacity =
                "0";

        });


        setTimeout(() => {

            brillo.remove();

        },1000);

    }
);


/* =========================================
   ANIMACIÓN AL HACER SCROLL
========================================= */

const observador =
    new IntersectionObserver(

        function(entradas){

            entradas.forEach(
                function(entrada){

                    if(
                        entrada.isIntersecting
                    ){

                        entrada.target
                            .classList
                            .add(
                                "visible"
                            );

                    }

                }
            );

        },

        {
            threshold:0.15
        }

    );


document
.querySelectorAll(
    ".aparecer-scroll"
)
.forEach(
    function(elemento){

        observador.observe(
            elemento
        );

    }
);


/* =========================================
   DETALLE EXTRA:
   FLORES AL TOCAR DOS VECES
========================================= */

let ultimoClick = 0;


document.addEventListener(
    "click",
    function(){

        const ahora =
            Date.now();


        if(
            ahora -
            ultimoClick
            < 350
        ){

            explosion(12);

        }


        ultimoClick =
            ahora;

    }
);
