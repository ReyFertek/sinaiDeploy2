/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: [
    "./index.html",   // se o seu HTML estiver aqui
    "./src/**/*.{js,jsx,ts,tsx}", // se você estiver usando React, por exemplo
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",   // se o seu HTML estiver aqui
    ".projetos.html",
    ".contato.html",
    ".sobre-nos.html",
    "./src/**/*.{js,jsx,ts,tsx}", // se você estiver usando React, por exemplo
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}