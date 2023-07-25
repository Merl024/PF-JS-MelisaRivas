//Creando class de nutricion para una seccion de comida saludable con sus detalles
class Comida{
    constructor(id, nombre, calorias, categoria, proteinas, grasas){
        this.id = id
        this.nombre =  nombre,
        this.categoria = categoria,
        this.calorias = calorias,
        this.proteinas = proteinas,
        this.grasas = grasas
    }
}

//variables
let comida = document.querySelector("#comidas")
let h6Cmd = document.querySelector("#h6Cmd")
let spinnerCmd = document.querySelector("#spinnerCmd")

//Creamos array para poder meter las comidas a las class para luego imprimirlas en el dom
const comidas = []
const menuComidas = async () => {
    const cmd = await fetch("../comidas.json")
    const detalle = await cmd.json()

    for(let comida of detalle ){
        let comidaData = new Comida(comida.id, comida.nombre, comida.calorias, comida.categoria, comida.proteinas, comida.grasas)
        comidas.push(comidaData)
    }
}
//Funcion en donde imprimimos el array al dom
function verComidas(array){
    comida.innerHTML = ""
    // Empezamos para poder mostrar cards con las comidas
    for( let data of array){
        dataDiv = document.createElement("div")
        dataDiv.className = "col-12 col-xl-4"
        dataDiv.innerHTML = 
        `
        <div id= "id${data.id}" class="card m-3 ">
            <div class="card-body m-2">
                <h4 class="card-title titleCmd" style = "text-align: center"> ${data.id}. ${data.nombre} </h4>
                <p class = "mt-0" >Categoria: ${data.categoria}</p>
                <p class = "mt-0" >Calorias: ${data.calorias}kcal</p>
                <p class = "mt-0" >Proteina: ${data.proteinas}g</p>
                <p class = "mt-0" >Grasas: ${data.grasas}g</p>
                <p class = "text-muted">Cada dato presentado es por una porción de 100g. </p>
            </div>
        </div>
        `
        comida.appendChild(dataDiv)
    }
}

//Metemos las comidas al local storage
localStorage.getItem("comidas") ? (registro = JSON.parse(localStorage.getItem('comidas'))) : (menuComidas())

//Funcion para avisarle al usuario que ya se cargaron sus datos
function noti(){
    Toastify(
        {
        text: `Menú cargado.`,
        duration: 2000,
        gravity: "top",
        position: "right",
            style: {
                color: "black",
                background: "linear-gradient(to bottom, rgb(199, 149, 156), rgb(255, 191, 199))"
            }
        }
    ).showToast()
}

setTimeout(() => {
    spinnerCmd.remove()
    h6Cmd.remove()
    noti()
    verComidas(comidas)
}, 2500)