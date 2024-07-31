class Jornada {
    constructor (tipoDeJornada,cantidadDeHoras,){
        this.tipo=tipoDeJornada;
        this.horas=cantidadDeHoras;
    }
}
const Jornada1= new Jornada (document.getElementById('jornada') ,48);
const Jornada2 = new Jornada (document.getElementById('jornada') , 32);
const Jornada3 =new Jornada (document.getElementById('jornada') , 28);

function calcularLiquidacion() {
    let nombre = document.getElementById('nombre').value;
    let fecha = document.getElementById('fecha').value;
    let diasTrabajados = document.getElementById('dias').value;
    let horasPorDia = parseFloat(document.getElementById('horas').value);
    let valorHora = parseFloat(document.getElementById('valorHora').value);

    if (!nombre || isNaN(horasPorDia) || isNaN(diasTrabajados) || isNaN(valorHora)) {
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
    `;
    document.getElementById('resultado').innerHTML = resultadoHTML;
}

let btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener('click',() => {
    calcularLiquidacion()
})