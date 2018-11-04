const Link = (label, url) => `<a href="${url}" target="_blank" class="no-underline text-blue-primary font-bold">${label}</a>`;

const Everymundo = Link('Everymundo','https://everymundo.com');
const Universo = Link('El Universo','https://eluniverso.com');
const Wife = Link('wife','https://twitter.com/@heydisrrael');


export default{
    "greeting": "Hello I'm",
    "name": "Ramón Chancay",
    "fullName": "Ramón Chancay Ortega",
    "position": "Front-end Engineer",
    "about": [
        "Front-end / Back-end Developer in Guayaquil Ecuador.",
        `Currently at ${Everymundo}, previously at ${Universo}.`,
        "I enjoy teaching and sharing what I know.",
        "I give professional advice to developers and companies.",
        `My ${Wife} and my children are everything in my life.`
    ],
    "postTile": "Last posts (in Spanish)"
}