const Link = (label, url) => `<a href="${url}" target="_blank" class="no-underline text-blue-primary font-bold">${label}</a>`;

const Everymundo = Link('Everymundo','https://everymundo.com');
const Universo = Link('El Universo','https://eluniverso.com');
const Wife = Link('esposa','https://twitter.com/@heydisrrael');


export default {
    "greeting": "Hola soy",
    "name": "Ramón Chancay",
    "position": "Front-end Engineer",
    "fullName": "Ramón Chancay Ortega",
    "about": [
        "Front-end / Back-end Developer en Guayaquil Ecuador.",
        `Actualmente en ${Everymundo}, antes en ${Universo}.`,
        "Me gusta enseñar y compartir lo que sé.",
        "Doy asesoramiento profesional a desarrolladores y empresas.",
        `Mi ${Wife} y mis hijos lo son todo en mi vida.`
    ],
    "postTile": "Últimos posts"
}