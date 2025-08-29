const displayInput = document.getElementById("display")
const btns = document.querySelectorAll(".charKey")


btns.forEach((btn) => {
    btn.addEventListener('click', function(){
        insertToDisplay(btn.textContent)
    })
})

function insertToDisplay(data){
    displayInput.value += data
    //alert(data)
}

//botão de limpar (C)
const btnClear = document.getElementById("btn-clear")
btnClear.addEventListener('click', function(){
     displayInput.value = ""
})

//botão apagar (<)
const btnRemove = document.getElementById("btn-remove")
btnRemove.addEventListener('click', function(){
    displayInput.value = displayInput.value.slice(0, -1)
})

//botão calcular (=)
const btnResult = document.getElementById("btn-result")
btnResult.addEventListener('click', function(){
    try {
        displayInput.value = eval(displayInput.value)
    } catch {
        displayInput.value = 'Error'
    }
})

//Trocar de tema
const btnTheme = document.getElementById("btn-Theme")
const img = document.querySelector(".sunImg")

btnTheme.addEventListener('click', () => {
    if(img.classList.contains('sunImg')){
        //Trocar para Lua
        img.src = 'midias/lua.png'
        img.classList.remove('sunImg')
        img.classList.add('moonImg')


        updateTheme("moon") 
        localStorage.setItem('theme', 'moon')
    } else {
        //Trocar para Sol
        img.src = 'midias/brilho-do-sol.png'
        img.classList.remove('moonImg')
        img.classList.add('sunImg')

        updateTheme("sun")
        localStorage.setItem('theme', 'sun')
    }
    
})

function updateTheme(theme){
    const body = document.body.style

    if(theme === "moon"){
        body.backgroundColor = 'rgba(237, 237, 237, 1)'
    } else {
        body.backgroundColor = '#1C1B1B'
    }
    
}

//Recarregar tema escolhido
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme')

    if(savedTheme){
        updateTheme(savedTheme)
        if(savedTheme === "moon") {
            img.src = 'midias/lua.png'
            img.classList.remove('sunImg')
            img.classList.add('moonImg')

        } else {
            img.src = 'midias/brilho-do-sol.png'
            img.classList.remove('moonImg')
            img.classList.add('sunImg')
        }
    }
})




