const createUbicacionTab = () => {
  const tabWrapper = document.querySelector(".tab-wrap")
  const contentContainer = document.createElement("div")

  contentContainer.className = "tab__content menu"

  let content = `<div class="img-container">
                 <img id="map" src="assets/images/map.png">
                 </div><p>Travesía Lorem, 251A C. Comercial Lorem, 112 5ºA Calle Lorem ipsum dolor sit, 232B</p>`

  contentContainer.innerHTML = content

  tabWrapper.append(contentContainer)
}

export { createUbicacionTab }