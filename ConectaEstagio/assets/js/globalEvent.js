window.addEventListener("click", ({target}) => {

    ValidateDropdownHeader(target.id)

    ValidateAside(target.id)

    
})

function ValidateDropdownHeader(value) {
    
    if ( value === 'card-img-header' || value === 'img-header' || value === 'name-and-icon-header' || value === 'name-header'  || value === 'icon-header'  )
        return DropdownHeader(true)
    
    return DropdownHeader(false)

}

function DropdownHeader( state ) {

    const listDropdownHeader = document.querySelector('#list-dropdown-header')

    if (state) 
        return listDropdownHeader.setAttribute('style', 'display: flex')

    return listDropdownHeader.setAttribute('style', 'display: none')
  
}

function ValidateAside(value) {

    if (value == "btn-state-aside") 
        return AsideBar(true)

    return AsideBar(false)

}

function AsideBar( state ) {

    if (state)
        return document.querySelector("#asideBar").setAttribute("style", "bottom: 1rem")

    return document.querySelector("#asideBar").setAttribute("style", "bottom: -10rem")

}