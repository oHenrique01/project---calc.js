//4 funções - inserir elementos, limpar, remover e calcular

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

