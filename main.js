let cantidad = prompt('¿cuantos empleados son?')
let empleadosTotales = [];

for (i = 0; i < cantidad; i++) {
    empleadosTotales [i] = [prompt("Nombre y Apellido del empleado " + (i+1)), 0];
}

const contadorHorasTrabajadas = (nombre,horasTrabajadas)=>{
    let horaDeEntrada = prompt("hora de entrada")
    let horaDeSalida = prompt("hora de salida")
    alert(horasTrabajadas)
}


for (i = 0; i < 30; i++){
    for (empleado in empleadosTotales){
        contadorHorasTrabajadas(empleadosTotales[empleado][0], empleado);
    }
}

let resultado = `${empleadosTotales[empleado][0]}:
cantidad de horas trabajadas:${empleadosTotales[empleado][1]}`

console.log(resultado);
