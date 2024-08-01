// class Jornada {
//     constructor (tipoDeJornada,cantidadDeHoras,){
//         this.tipo=tipoDeJornada;
//         this.horas=cantidadDeHoras;
//     }
// }
// const jornada1= new Jornada ("Jornada Completa" ,48);
// const jornada2 = new Jornada ("Media Jornada" , 32);
// const jornada3 =new Jornada ("Jornada 3/4", 28);


function calcularLiquidacion() {
    let nombre = document.getElementById('nombre').value;
    let fecha = document.getElementById('fecha').value;
    let diasTrabajados = document.getElementById('dias').value;
    let horasPorDia = parseFloat(document.getElementById('horas').value);
    let valorHora = parseFloat(document.getElementById('valorHora').value);
    let selectedJornadas = document.getElementById('jornadas');
    let valueTexto = selectedJornadas.options[selectedJornadas.selectedIndex].text;

    if ( !nombre || isNaN(horasPorDia) || isNaN(diasTrabajados) || isNaN(valorHora)) {
        alert('Por favor complete todos los campos correctamente.');
        return;
    }

    let horasTotales = horasPorDia * diasTrabajados;
    let sueldoBruto = horasTotales * valorHora;

    let resultadoHTML = `
        <h3>Resultado para ${nombre}</h3>
        <p>Fecha de liquidacion ${fecha}</p>
        <p>Horas totales trabajadas: ${horasTotales.toFixed(2)}</p>
        <p>Sueldo Bruto: $${sueldoBruto.toFixed(2)}</p>
        <p>Tipo de jornada ${valueTexto}</p>
    `;
    document.getElementById('resultado').innerHTML = resultadoHTML;
}

let btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener('click',() => {
    calcularLiquidacion()
})

function guardarDatosLocalStorage(nombre, horasTotales, sueldoBruto) {
    localStorage.nombre = nombre;
    localStorage.horasTotales = horasTotales;
    localStorage.sueldoBruto = sueldoBruto ;
}
