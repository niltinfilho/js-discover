function toggleMode() {
  const html = document.documentElement;

  // if(html.classList.contains('light')) {
  //   html.classList.remove('light');
  // } else {
  //   html.classList.add('light');
  // }

  html.classList.toggle('light')

  // pegar a tag img
  const img = document.querySelector("#profile img");

  //substituir a imagem
  if(html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', 'assets/avatar-light.png');
    img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos escuros e uma jaqueta preta, com o fundo rosa e azul.')
  } else {
    // se tiver dark mode, manter a imagem original
    img.setAttribute('src', 'assets/avatar.png');
    img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos de grau e uma jaqueta preta, com o fundo rosa e azul.')
  }
}