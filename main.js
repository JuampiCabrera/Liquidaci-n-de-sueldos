
function calcularLiquidacion() {
    let nombre = document.getElementById('nombre').value;
    let horasPorDia = parseFloat(document.getElementById('horas').value);
    let diasTrabajados = parseInt(document.getElementById('dias').value);
    let valorHora = parseFloat(document.getElementById('valorHora').value);

    if (!nombre || isNaN(horasPorDia) || isNaN(diasTrabajados) || isNaN(valorHora)) {
        alert('Por favor complete todos los campos correctamente.');
        return;
    }

    let horasTotales = horasPorDia * diasTrabajados;
    let sueldoBruto = horasTotales * valorHora;

    let resultadoHTML = `
        <h3>Resultado para ${nombre}</h3>
        <p>Horas totales trabajadas: ${horasTotales.toFixed(2)}</p>
        <p>Sueldo Bruto: $${sueldoBruto.toFixed(2)}</p>
    `;
    document.getElementById('resultado').innerHTML = resultadoHTML;
}