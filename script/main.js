const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'login.html'
}

const logout = document.getElementById('logout')

logout.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    localStorage.removeItem('login_success')
    window.location.href = 'login.html'
})

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

function guardarDatosLocalStorage(nombre, horasTotales, sueldoBruto, valueTexto) {
    localStorage.nombre = nombre;
    localStorage.horasTotales = horasTotales;
    localStorage.sueldoBruto = sueldoBruto ;
    localStorage.valueTexto = valueTexto
}

fetch('/datos.json')
.then(response => response.json())
.then(data => {
    console.log(data)
})