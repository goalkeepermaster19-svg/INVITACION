// ========================================
// KALLPA360 - INVITACIONES
// ========================================


// ========================================
// NOMBRES
// ========================================

document.title =
    `${boda.novia} & ${boda.novio} | Nuestra Boda`;

document.getElementById("nombreNovia").textContent =
    boda.novia;

document.getElementById("nombreNovio").textContent =
    boda.novio;

document.getElementById("nombresFinales").textContent =
    `${boda.novia} & ${boda.novio}`;


// ========================================
// MENSAJE
// ========================================

document.querySelector(".mensaje").textContent =
    boda.mensaje;


// ========================================
// FOTO PRINCIPAL
// ========================================

document.querySelector(".portada").style.backgroundImage =
    `url("${boda.fotoPrincipal}")`;


// ========================================
// FECHA
// ========================================

const fecha =
    new Date(boda.fechaContador);

const numeroDia =
    fecha.getDate();

const meses = [
    "ENERO",
    "FEBRERO",
    "MARZO",
    "ABRIL",
    "MAYO",
    "JUNIO",
    "JULIO",
    "AGOSTO",
    "SEPTIEMBRE",
    "OCTUBRE",
    "NOVIEMBRE",
    "DICIEMBRE"
];

const nombreMes =
    meses[fecha.getMonth()];

const año =
    fecha.getFullYear();

document.getElementById("numeroDia").textContent =
    numeroDia;

document.getElementById("mesAnio").innerHTML =
    `${nombreMes}<br><strong>${año}</strong>`;


// ========================================
// EVENTOS
// ========================================

document.getElementById("fechaCeremonia").textContent =
    `📅 ${boda.fecha}`;

document.getElementById("horaCeremonia").textContent =
    `🕐 ${boda.horaCeremonia}`;

document.getElementById("lugarCeremonia").textContent =
    `📍 ${boda.lugarCeremonia}`;

document.getElementById("horaRecepcion").textContent =
    `🕐 ${boda.horaRecepcion}`;

document.getElementById("lugarRecepcion").textContent =
    `📍 ${boda.lugarRecepcion}`;


// ========================================
// GALERÍA
// ========================================

document.getElementById("fotoGaleria1").src =
    boda.fotoGaleria1;

document.getElementById("fotoGaleria2").src =
    boda.fotoGaleria2;

document.getElementById("fotoGaleria3").src =
    boda.fotoGaleria3;


// ========================================
// ABRIR INVITACIÓN
// ========================================

const botonAbrir =
    document.getElementById("abrirInvitacion");

const contenido =
    document.getElementById("contenido");

botonAbrir.addEventListener("click", function () {

    contenido.classList.remove("oculto");

    contenido.scrollIntoView({
        behavior: "smooth"
    });

});


// ========================================
// CUENTA REGRESIVA
// ========================================

function actualizarContador() {

    const fechaBoda =
        new Date(boda.fechaContador).getTime();

    const ahora =
        new Date().getTime();

    const diferencia =
        fechaBoda - ahora;


    if (diferencia <= 0) {

        document.getElementById("dias").textContent =
            "00";

        document.getElementById("horas").textContent =
            "00";

        document.getElementById("minutos").textContent =
            "00";

        document.getElementById("segundos").textContent =
            "00";

        return;
    }


    const dias =
        Math.floor(
            diferencia /
            (1000 * 60 * 60 * 24)
        );

    const horas =
        Math.floor(
            (diferencia /
            (1000 * 60 * 60)) % 24
        );

    const minutos =
        Math.floor(
            (diferencia /
            (1000 * 60)) % 60
        );

    const segundos =
        Math.floor(
            (diferencia / 1000) % 60
        );


    document.getElementById("dias").textContent =
        String(dias).padStart(2, "0");

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");

}

actualizarContador();

setInterval(
    actualizarContador,
    1000
);


// ========================================
// VISOR DE GALERÍA
// ========================================

const fotosGaleria = [

    boda.fotoGaleria1,
    boda.fotoGaleria2,
    boda.fotoGaleria3

];

let fotoActual = 0;


const visorFoto =
    document.getElementById("visorFoto");

const fotoGrande =
    document.getElementById("fotoGrande");

const cerrarFoto =
    document.getElementById("cerrarFoto");

const fotoAnterior =
    document.getElementById("fotoAnterior");

const fotoSiguiente =
    document.getElementById("fotoSiguiente");


// ========================================
// ABRIR FOTO
// ========================================

document
    .querySelectorAll(".galeria-grid img")
    .forEach(function (imagen, indice) {

        imagen.addEventListener("click", function () {

            fotoActual = indice;

            mostrarFoto();

            visorFoto.style.display = "flex";

        });

    });


// ========================================
// MOSTRAR FOTO
// ========================================

function mostrarFoto() {

    fotoGrande.src =
        fotosGaleria[fotoActual];

}


// ========================================
// CERRAR FOTO
// ========================================

cerrarFoto.addEventListener(
    "click",
    function () {

        visorFoto.style.display =
            "none";

    }
);


// ========================================
// FOTO ANTERIOR
// ========================================

fotoAnterior.addEventListener(
    "click",
    function () {

        fotoActual--;

        if (fotoActual < 0) {

            fotoActual =
                fotosGaleria.length - 1;

        }

        mostrarFoto();

    }
);


// ========================================
// FOTO SIGUIENTE
// ========================================

fotoSiguiente.addEventListener(
    "click",
    function () {

        fotoActual++;

        if (
            fotoActual >=
            fotosGaleria.length
        ) {

            fotoActual = 0;

        }

        mostrarFoto();

    }
);


// ========================================
// CERRAR TOCANDO EL FONDO
// ========================================

visorFoto.addEventListener(
    "click",
    function (evento) {

        if (
            evento.target === visorFoto
        ) {

            visorFoto.style.display =
                "none";

        }

    }
);


// ========================================
// RSVP - GOOGLE SHEETS
// ========================================

const URL_GOOGLE_SHEETS =
    "https://script.google.com/macros/s/AKfycbzcIx_kJdwonaR1EG9mZTQkPfl12ueVlDnvXVU4CHAaJlyzu-lY7qnwi7DrvnEhkDR7hw/exec";


const formularioRSVP =
    document.getElementById("formularioRSVP");

const mensajeRSVP =
    document.getElementById("mensajeRSVP");


if (formularioRSVP) {

    formularioRSVP.addEventListener(
        "submit",
        function (evento) {

            evento.preventDefault();


            // ========================================
            // OBTENER DATOS
            // ========================================

            const campoNombre =
                document.getElementById(
                    "nombreInvitado"
                );

            const asistenciaSeleccionada =
                document.querySelector(
                    'input[name="asistencia"]:checked'
                );

            const campoPases =
                document.getElementById(
                    "cantidadPases"
                );


            const nombre =
                campoNombre.value.trim();

            const asistencia =
                asistenciaSeleccionada
                    ? asistenciaSeleccionada.value
                    : "";

            const pases =
                campoPases.value;


            // ========================================
            // VALIDACIONES
            // ========================================

            if (nombre === "") {

                mostrarMensajeRSVP(
                    "Por favor, escribe tu nombre.",
                    "error"
                );

                campoNombre.focus();

                return;
            }


            if (asistencia === "") {

                mostrarMensajeRSVP(
                    "Por favor, indica si asistirás.",
                    "error"
                );

                return;
            }


            if (pases === "") {

                mostrarMensajeRSVP(
                    "Por favor, selecciona el número de pases.",
                    "error"
                );

                campoPases.focus();

                return;
            }


            // ========================================
            // BOTÓN ENVIANDO
            // ========================================

            const botonRSVP =
                document.getElementById(
                    "botonRSVP"
                );

            botonRSVP.disabled = true;

            botonRSVP.textContent =
                "Enviando respuesta...";


            // ========================================
            // PREPARAR DATOS
            // ========================================

            const datos =
                new URLSearchParams();

            datos.append(
                "nombre",
                nombre
            );

            datos.append(
                "asistencia",
                asistencia
            );

            datos.append(
                "pases",
                pases
            );


            // ========================================
            // ENVIAR A GOOGLE APPS SCRIPT
            // ========================================

            fetch(
                URL_GOOGLE_SHEETS,
                {
                    method: "POST",
                    mode: "no-cors",
                    body: datos
                }
            )
            .then(function () {

                mostrarMensajeRSVP(
                    `Gracias, ${nombre}. Tu respuesta fue registrada correctamente.`,
                    "exito"
                );


                formularioRSVP.reset();


                botonRSVP.disabled =
                    false;

                botonRSVP.textContent =
                    "Confirmar asistencia";

            })
            .catch(function (error) {

                console.error(
                    "Error al enviar RSVP:",
                    error
                );


                mostrarMensajeRSVP(
                    "No se pudo registrar tu respuesta. Intenta nuevamente.",
                    "error"
                );


                botonRSVP.disabled =
                    false;

                botonRSVP.textContent =
                    "Confirmar asistencia";

            });

        }
    );

}


// ========================================
// MOSTRAR MENSAJES DEL FORMULARIO
// ========================================

function mostrarMensajeRSVP(
    texto,
    tipo
) {

    if (!mensajeRSVP) {
        return;
    }


    mensajeRSVP.textContent =
        texto;


    mensajeRSVP.className =
        `mensaje-rsvp ${tipo}`;

}