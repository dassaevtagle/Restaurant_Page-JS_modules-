import { createMenuTab } from './modules/menu'
import { createUbicacionTab } from './modules/ubicacion'
import { createContactoTab } from './modules/contacto'
import { createLayout } from './modules/landing-page'

const createTabs = (tabNames) => {
  const mainContainer = document.querySelector("#content")
  const tabWrapper = document.createElement("div")

  tabWrapper.className = "tab-wrap"

  mainContainer.append(tabWrapper) 

  for (var i = 0; i < tabNames.length; i++){
    let radioBtn = document.createElement("input")
    let label = document.createElement("label")
    let name = tabNames[i]

    radioBtn.id = `tab${i+1}`
    radioBtn.type = "radio"
    radioBtn.name = "tabGroup1"
    radioBtn.className = "tab"
    if(i == 0){
      radioBtn.checked = true
    }

    label.setAttribute("for", radioBtn.id)
    label.innerHTML = name

    tabWrapper.append(radioBtn)
    tabWrapper.append(label)
  }

}

const addFancyHr = () => {
  const mainContainer = document.querySelector("#content")

  const hr = document.createElement("hr")
  hr.className = "another-fancy"

  mainContainer.append(hr)
}


const showPage = () => {
    createLayout()
    createTabs(["Menú", "Ubicación", "Contacto"])
    createMenuTab()
    createUbicacionTab()
    createContactoTab()
    addFancyHr()
}

showPage()