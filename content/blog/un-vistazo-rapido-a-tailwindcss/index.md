---
path: '/blog/2018/06/25/un-vistazo-rapido-a-tailwindcss'
image: './hero.jpg'
title: 'Un vistazo rápido a Tailwindcss'
date: '2018-06-25T02:04:20.769Z'
---

[Tailwindcss](https://tailwindcss.com/docs/what-is-tailwind/) es un framework para el desarrollo de interfaces personalizadas de forma rápida, a diferencia de bootstrap, foundation, semantic-ui, bulmacss y similares que te proveen abstracciones habituales tipo botones, cards, menus, formularios.

En su lugar tailwind te proporciona clases css de bajo nivel muy adaptable a componentes, sin la necesidad de que tus sitios se vean igual.

### Component friendly

Aunque usar/combinar las clases parece una excelente idea, también tenemos la opción de irnos por componentes en ciertos casos es la mejor decisión, podemos aprovechar herramientas para extraer clases de componentes en lugar de repetirlos.

### Personalizable

Tailwind está escrito en postCss y configurado con Javascript, en dichas configuraciones incluimos colores, tamaños de bordes, pesos de fuentes, utilidades de espaciado, breakpoints, sombras y mucho más.

<hr/>

### Instalación

Tenemos dos opciones:

_Desde la CDN:_ esta opción tiene sus limitaciones en cuanto a la personalización, pero es más que suficiente cuando necesitamos hacer un prototipo rápido de una aplicación. Como se encuentra en la documentación puedes agregar _todas_ las utilidades de Tailwind o hacerlo por separado.

```html
<!-- Todo -->
<link
  href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css"
  rel="stylesheet"
/>
<!-- Por separado -->
<link
  href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/preflight.min.css"
  rel="stylesheet"
/>

<link
  href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/utilities.min.css"
  rel="stylesheet"
/>
```

_Usando npm/yarn:_ Al dia de hoy tailwind se encuentra en su version v0.6.1 en npm.

```bash
#con npm
npm install tailwindcss --save-dev
#con yarn
yarn add tailwindcss --dev
```

[En la documentación oficial](https://tailwindcss.com/docs/installation/) puedes encontrar la configuración para gulp, grunt, webpack, Laravel Mix y Brunch.

#### Usa tailwind en tu css

Luego de terminar la configuraciones de tus herramientas es momento de utilizar tailwind con las siguientes directivas.

#### Preflight

`@tailwind preflight;` incluye los estilos de normalize.css y adicionales para tener una base css similar en todos los navegadores.

#### Components

`@tailwind components;` Esto inyecta cualquier clase de componente personalizado y los plugins.

#### Utilities

`@tailwind utilities;` Esto inyecta todas las clases utilitarias de tailwindcss basadas en el archivo de configuración tailwind.js.

### Archivo de configuración

Se puede decir que la mayor parte de la magia está en este archivo, es la base de todas las clases utilitarias de tailwind aquí definimos variables tales como colores, tamaños y peso de fuentes, breakpoints, tipografías y más, aquí podemos definir nuestra guía de estilo ( yo tengo la guía de estilos de cierto sitio web de noticias)

En conclusión, tailwind es un poderosísima herramienta para la creación de interfaces personalizadas/sitios web/componentes.

Estoy escribiendo otro post, dónde les voy a compartir mi configuración para React/Vue y solo html, y unos repositorios donde hago “clones” de sitios/aplicaciones web.
