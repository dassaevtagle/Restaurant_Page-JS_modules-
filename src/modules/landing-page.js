const createLayout = () => {
    const mainContainer =  document.querySelector("#content")
    
    const imageContainer = document.createElement("div")
    const logo = document.createElement("img")
    const mainImage = document.createElement("img")

    const mainTextContainer = document.createElement("div")
    let text = `<p>En <i>Bourbon & Bones</i> disfrutará de una experiencia gastrónomica única e inigualable al degustar nuestros selectos cortes de carne preparados por nuestro chef argentino de talla internacional.</p>
    <p>Ya sean reuniones con amigos, familiares o una cena romántica, su visita siempre será bienvenida. Reserve ahora o consulte nuestros horarios. En <i>Bourbon & Bones</i> los estaremos esperando.</p>`

    let hrFancy = document.createElement("hr")
    hrFancy.className = "fancy"

    logo.src = "./assets/images/Logo.png"
    logo.alt = "Bourbon & Bones"

    mainImage.src = "assets/images/dish.jpg"
    mainImage.id = "dish"

    imageContainer.className = "img-container"

    mainContainer.append(imageContainer)
    mainContainer.append(mainTextContainer)
    mainContainer.append(hrFancy)

    imageContainer.append(logo)
    imageContainer.append(mainImage)

    mainTextContainer.className = "text"
    mainTextContainer.innerHTML = text

    
}

export { createLayout }