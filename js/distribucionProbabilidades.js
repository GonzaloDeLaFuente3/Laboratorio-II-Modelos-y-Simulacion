const cantidadDias = document.getElementById("dias");
const probabilidadAlfajor = document.getElementById("probabilidad");
const valorA = document.getElementById("valorA");
const valorB = document.getElementById("valorB");
const cantidadEventoContinuo = document.getElementById("cantE");
const displayTablaR = document.getElementById("displayTabla");
const contenedorTablaResultados = document.getElementById("contenedorResultados");
const btnDistribucionProbabilidad = document.getElementById("botonCalcularDistribucionProbabilidad");



function simularXDias(){
    
    displayTablaR.removeAttribute('hidden');
    
    let cantidadOfertas=0;
    let a = valorA.value;
    let b = valorB.value;
    let consumoCliente=0;
    let cmd = 0;
    let pp = 1;
    let bpoisson = Math.pow(Math.E,-cantidadEventoContinuo.value);

    for(dia=1;dia<=cantidadDias.value;dia++){
        
        valoresUi.forEach(ui => {
            if(ui<= probabilidadAlfajor.value){
                consumoCliente = a+(b-a)*ui;

                while(pp>bpoisson){
                    pp = pp * ui;
                    cmd++;
                }
            }else{
                cantidadOfertas++;
            }
        })
        
    }

    const trCO = document.createElement('tr');
    trCO.innerHTML = `
    <td scope="row">CF: Cantidad de ofertas realizadas en el año hasta la primer venta</th>
    <td>${cantidadOfertas}</td>
    `

    const trCC = document.createElement('tr');

    trCC.innerHTML = `
    <td scope="row">CC: Consumo de los clientes en el año en el rango de horario de ${valorA.value} y ${valorB.value}</th>
    <td>${parseFloat(consumoCliente).toFixed(2)}</td>
    `
    
    const trCMD = document.createElement('tr');
    trCMD.innerHTML = `
    <td scope="row">CMD: Cantidad de ventas realizadas en el año de "Mogul Dientes"</th>
    <td>${cmd}</td>
    `
    
    contenedorTablaResultados.appendChild(trCO);
    contenedorTablaResultados.appendChild(trCC);
    contenedorTablaResultados.appendChild(trCMD);

    const resultados = document.createElement('div');
    resultados.innerHTML = `
    <label class="col-form-label">RESULTADOS:</label> </br>
    <label class="col-form-label">En ${cantidadDias.value} dias se realizaron un total de
    ${cantidadOfertas} ofertas, hasta obtener la primer venta de "alfajor jorgito"</label> </br>
    <label class="col-form-label">El consumo de los clientes en el rango horario de ${valorA.value} y ${valorB.value} en un año
    fue de ${parseFloat(consumoCliente).toFixed(2)} horas</label> </br>
    <label class="col-form-label">La cantidad de ventas realizadas en el año de "Mogul Dientes" fue de ${cmd}</label>
    `
    resultados.classList.add('text-center');

    displayTablaR.appendChild(resultados);
}


btnDistribucionProbabilidad.addEventListener("click", simularXDias);





