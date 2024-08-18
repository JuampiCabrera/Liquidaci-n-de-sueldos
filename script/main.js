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
        <p>Jornada Laboral: ${jornadaSelect.value}</p>
        <p>Convenio: ${convenioSelect.value}</p>
    `;
    document.getElementById('resultado').innerHTML = resultadoHTML;

    localStorage.setItem("nombre",nombre);
    localStorage.setItem("fecha de liquidacion", fecha)
    localStorage.setItem("horas totales",horasTotales)
    localStorage.setItem("sueldo bruto", sueldoBruto)
}

let btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener('click',() => {
    calcularLiquidacion()
})

document.addEventListener("DOMContentLoaded", function() {
    // Función para cargar el archivo JSON y crear las opciones
    function cargarJornadas() {
        fetch('../json/jornadas.json')
            .then(response => response.json())
            .then(data => {
                const selectElement = document.getElementById('jornadaSelect');
                data.jornadas.forEach(jornada => {
                    const option = document.createElement('option');
                    option.value = jornada.tipo;
                    option.textContent = `${jornada.tipo} - ${jornada.horas} horas`;
                    selectElement.appendChild(option);
                });
            })
            .catch(error => console.error('Error cargando el JSON:', error));
    }
    cargarJornadas()
});

document.addEventListener("DOMContentLoaded", function() {
    // Función para cargar el archivo JSON y crear las opciones
    function cargarConvenios() {
        fetch('../json/convenios.json')
            .then(response => response.json())
            .then(data => {
                const selectElement = document.getElementById('convenioSelect');
                const opciones = new Set();
                data.convenios.forEach(convenio => {
                    // Crear una clave única para cada combinación de tipo y categoría
                    const clave = `${convenio.tipo} - ${convenio.categoria}- $${convenio.remuneracionBasica}`;
                    
                    if (!opciones.has(clave)) {
                        const option = document.createElement('option');
                        option.value = clave;
                        option.textContent = clave;
                        selectElement.appendChild(option);
                        opciones.add(clave);
                    }
                });
            })
            .catch(error => console.error('Error cargando el JSON:', error));
    }

    cargarConvenios();
});