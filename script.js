
function toggleMode() {
  const html = document.documentElement

  html.classList.toggle('light') /* LIGA/DESLIGA A LUZ*/

  /* TROCA DA IMAGEM DE PERFIL */

  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')) {
    img.setAttribute("src", "./assets/assets/1.png") /* setAttribute: add ou modifica um atributo*/
  } else {
    img.setAttribute("src", "./assets/assets/2.png") 
  } 

}