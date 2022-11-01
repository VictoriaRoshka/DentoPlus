let isOpen = false
function addMenu(){
    const dentoplus_menu = document.getElementById("menu")
    const closeicon = document.getElementById("closeicon")
    const menuicon = document.getElementById("menuicon")

    if (isOpen){
        dentoplus_menu.style.display = "none"
        closeicon.style.display = "none"
        menuicon.style.display = "flex"
        
        
        isOpen = false
    }
    else{
        dentoplus_menu.style.display = "flex"
        menuicon.style.display = "none"
        closeicon.style.display =  "flex"

        isOpen = true
    }
}