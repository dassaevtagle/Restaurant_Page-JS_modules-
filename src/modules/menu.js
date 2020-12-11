const createMenuTab = () => {
  const tabWrapper = document.querySelector(".tab-wrap")
  const contentContainer = document.createElement("div")

  contentContainer.className = "tab__content menu"

  let content = `<br>
  <h2>Entrada</h2>
  <p>Ensalada estilo caprecce con arugula (servida en torre) con aderezo de albahaca y pepitas verdes</p>
  <br>
  <h2>Crema</h2>
  <p>Poro con papa y pesto de cilantro</p>
  <br>
  <h2>Plato fuerte</h2>
  <p>Medallón de filete de res (con fritura de poro, salsa de 3 chiles y parmesano
    Servido sobre hoja de plátano) con chile relleno de tamal y suflé de elote.</p>
  <p>O</p>
  <p>Filete en salsa de vino tinto y champiñones con espárragos y puré de papa gratinado</p>
    <br>
  <h2>Postre</h2>
  <p>Tarta de manzana con almendra</p>`

  contentContainer.innerHTML = content

  tabWrapper.append(contentContainer)
}

export { createMenuTab }