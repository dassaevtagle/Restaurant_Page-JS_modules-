const createContactoTab = () => {
  const tabWrapper = document.querySelector(".tab-wrap")
  const contentContainer = document.createElement("div")

  contentContainer.className = "tab__content menu"

  let content = `<p>Tel. 8871122608</p>
  <p>blorem@blorem.net</p>
  
  <h4>Escríbenos</h4>
  <input type="text" placeholder="Correo electrónico">
  <br>
  <br>
  <textarea id="" cols="30" rows="10"></textarea>`

  contentContainer.innerHTML = content

  tabWrapper.append(contentContainer)
}

export { createContactoTab }