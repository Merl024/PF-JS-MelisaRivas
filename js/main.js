//variables
//MASA
// libras a kg
let formLb = document.querySelector("#conLb")
let lbInput = document.querySelector("#lbInput")
let btnConvertirLb = document.querySelector("#btnConvertirLb")
let resultadoKg = document.querySelector("#resultadoKg")
// LB A G
let formG = document.querySelector("#conG")
let gInput = document.querySelector("#gInput")
let btnConvertirG = document.querySelector("#btnConvertirG")
let resultadoG = document.querySelector("#resultadoG")
// Toneladas a kg
let formconKg = document.querySelector("#conKg")
let kgInput = document.querySelector("#kgInput")
let btnConvertirKg = document.querySelector("#btnConvertirKg")
let resultadoT = document.querySelector("#resultadoT")

// LONGITUDES
// ft a m
let formconM = document.querySelector("#conM")
let mInput = document.querySelector("#mInput")
let btnConvertirM = document.querySelector("#btnConvertirM")
let resultadoM = document.querySelector("#resultadoM")
// m a ft
let formconFt = document.querySelector("#conFt")
let ftInput = document.querySelector("#ftInput")
let btnConvertirFt = document.querySelector("#btnConvertirFt")
let resultadoFt = document.querySelector("#resultadoFt")
// cm a inch
let formconI = document.querySelector("#conI")
let iInput = document.querySelector("#iInput")
let btnConvertirI = document.querySelector("#btnConvertirI")
let resultadoI = document.querySelector("#resultadoI")

//VOLUEMEN
// l a gal
let formL = document.querySelector("#conL")
let lInput = document.querySelector("#lInput")
let btnConvertirL = document.querySelector("#btnConvertirL")
let resultadoGal = document.querySelector("#resultadoGal")

// l a oz
let formOz = document.querySelector("#conOz")
let ozInput = document.querySelector("#ozInput")
let btnConvertirOz = document.querySelector("#btnConvertirOz")
let resultadoOz = document.querySelector("#resultadoOz")

// oz a ml
let formMl = document.querySelector("#conMl")
let mlInput = document.querySelector("#mlInput")
let btnConvertirMl = document.querySelector("#btnConvertirMl")
let resultadoMl = document.querySelector("#resultadoMl")


//FUNCTIONS:  
// Funciones de la seccion de MASA
// LB A KG
function lbAkg(){
    let conversionKg = (lbInput.value / 2.20462)
    if(isNaN(conversionKg)){
        resultadoKg.innerHTML = `<p class="m-2 inText" style = "text-align: center; color:rgb(125, 24, 37);">Solo puede ingresar números</p>`
    }
    else if(conversionKg == 0){
        resultadoKg.innerHTML = `<p class="m-2 inText" style = "text-align: center; color:rgb(125, 24, 37);">Ingrese una cantidad</p>`
    }
    else{
        resultadoKg.innerHTML = 
        `<p class="m-2 inText" style = "text-align: center; color:rgb(125, 24, 37);" >R// ${lbInput.value}lb a kilogramos son ${conversionKg.toFixed(2)}kg</p>`
    }
}
// LB A G
function lbAG(){
    let conversionG = (gInput.value * 453.592)
    if(isNaN(conversionG)){
        resultadoG.innerHTML = `<p class="m-2 inText" style = "text-align: center; color:rgb(125, 24, 37);">Solo puede ingresar números</p>`
    }
    else if(conversionG == 0){
        resultadoG.innerHTML = `<p class="m-2 inText" style = "text-align: center; color:rgb(125, 24, 37);">Ingrese una cantidad</p>`
    }
    else{
        resultadoG.innerHTML = 
        `<p class="m-2 inText" style = "text-align: center; color:rgb(125, 24, 37);" >R// ${gInput.value}lb a gramos son ${conversionG.toFixed(2)}g</p>`
    }
}
// KG A T
function kgAT(){
    let conversionT = (kgInput.value / 1000)
    if(isNaN(conversionT)){
        resultadoT.innerHTML = `<p class="m-2 inText" style = "text-align: center; color:rgb(125, 24, 37);">Solo puede ingresar números</p>`
    }
    else if(conversionT == 0){
        resultadoT.innerHTML = `<p class="m-2 inText" style = "text-align: center; color:rgb(125, 24, 37);">Ingrese una cantidad</p>`
    }
    else{
        resultadoT.innerHTML = 
        `<p class="m-2 inText" style = "text-align: center; color:rgb(125, 24, 37);" >R// ${kgInput.value}kg a toneladas son ${conversionT.toFixed(2)}t</p>`
    }
}

// Funciones de la seccion de LONGITUD
// ft a m
function ftaM(){
    let conversionFt = (mInput.value / 3.28084)
    if(isNaN(conversionFt)){
        resultadoM.innerHTML = `<p class="m-2 inText" style = "text-align: center; color:rgb(125, 24, 37);">Solo puede ingresar números</p>`
    }
    else if(conversionFt == 0){
        resultadoM.innerHTML = `<p class="m-2 inText" style = "text-align: center; color:rgb(125, 24, 37);">Ingrese una cantidad</p>`
    }
    else{
        resultadoM.innerHTML = 
        `<p class="m-2 inText" style = "text-align: center; color:rgb(125, 24, 37);" >R// ${mInput.value}ft a metros son ${conversionFt.toFixed(2)}m</p>`
    }
}
// m a ft
function mAFt(){
    let conversionM = (ftInput.value * 3.28084)
    if(isNaN(conversionM)){
        resultadoFt.innerHTML = `<p class="m-2 inText" style = "text-align: center; color:rgb(125, 24, 37);">Solo puede ingresar números</p>`
    }
    else if(conversionM == 0){
        resultadoFt.innerHTML = `<p class="m-2 inText" style = "text-align: center; color:rgb(125, 24, 37);">Ingrese una cantidad</p>`
    }
    else{
        resultadoFt.innerHTML = 
        `<p class="m-2 inText" style = "text-align: center; color:rgb(125, 24, 37);" >R// ${ftInput.value}m a pies son ${conversionM.toFixed(2)}ft</p>`
    }
}
// cm a inch
function cmAInch(){
    let conversionI = (iInput.value / 2.54)
    if(isNaN(conversionI)){
        resultadoI.innerHTML = `<p class="m-2 inText" style = "text-align: center; color:rgb(125, 24, 37);">Solo puede ingresar números</p>`
    }
    else if(conversionI == 0){
        resultadoI.innerHTML = `<p class="m-2 inText" style = "text-align: center; color:rgb(125, 24, 37);">Ingrese una cantidad</p>`
    }
    else{
        resultadoI.innerHTML = 
        `<p class="m-2 inText" style = "text-align: center; color:rgb(125, 24, 37);" >R// ${iInput.value}cm a pulgadas son ${conversionI.toFixed(2)}inch</p>`
    }
}
// Funciones de la seccion de VOLUMEN
// l a gal
function lAGal(){
    let conversionL = (lInput.value / 3.78541)
    if(isNaN(conversionL)){
        resultadoGal.innerHTML = `<p class="m-2 inText" style = "text-align: center; color:rgb(125, 24, 37);">Solo puede ingresar números</p>`
    }
    else if(conversionL == 0){
        resultadoGal.innerHTML = `<p class="m-2 inText" style = "text-align: center; color:rgb(125, 24, 37);">Ingrese una cantidad</p>`
    }
    else{
        resultadoGal.innerHTML = 
        `<p class="m-2 inText" style = "text-align: center; color:rgb(125, 24, 37);" >R// ${lInput.value}l a galones son ${conversionL.toFixed(2)}gal</p>`
    }
}
// l a oz
function lAOz(){
    let conversionOz = (ozInput.value * 33.814)
    if(isNaN(conversionOz)){
        resultadoOz.innerHTML = `<p class="m-2 inText" style = "text-align: center; color:rgb(125, 24, 37);">Solo puede ingresar números</p>`
    }
    else if(conversionOz == 0){
        resultadoOz.innerHTML = `<p class="m-2 inText" style = "text-align: center; color:rgb(125, 24, 37);">Ingrese una cantidad</p>`
    }
    else{
        resultadoOz.innerHTML = 
        `<p class="m-2 inText" style = "text-align: center; color:rgb(125, 24, 37);" >R// ${ozInput.value}l a onzas son ${conversionOz.toFixed(2)}oz</p>`
    }
}
//oz a ml
function ozAMl(){
    let conversionMl = (mlInput.value * 29.5735)
    if(isNaN(conversionMl)){
        resultadoMl.innerHTML = `<p class="m-2 inText" style = "text-align: center; color:rgb(125, 24, 37);">Solo puede ingresar números</p>`
    }
    else if(conversionMl == 0){
        resultadoMl.innerHTML = `<p class="m-2 inText" style = "text-align: center; color:rgb(125, 24, 37);">Ingrese una cantidad</p>`
    }
    else{
        resultadoMl.innerHTML = 
        `<p class="m-2 inText" style = "text-align: center; color:rgb(125, 24, 37);" >R// ${mlInput.value}oz a mililitros son ${conversionMl.toFixed(2)}ml</p>`
    }
}


//EVENTOS:
btnConvertirLb.addEventListener("click", ()=>{
    lbAkg()
})
btnConvertirG.addEventListener("click", ()=>{
    lbAG()
})
btnConvertirKg.addEventListener("click", ()=>{
    kgAT()
})
btnConvertirL.addEventListener("click", ()=>{
    lAGal()
})
btnConvertirMl.addEventListener("click", ()=> {
    ozAMl()
})
btnConvertirOz.addEventListener("click", ()=>{
    lAOz()
})
btnConvertirM.addEventListener("click", ()=>{
    ftaM()
})
btnConvertirFt.addEventListener("click", ()=>{
    mAFt()
})
btnConvertirI.addEventListener("click", ()=>{
    cmAInch()
})