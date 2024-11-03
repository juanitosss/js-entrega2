// Edad de ingreso
const edadIngreso = parseInt(prompt("Ingresa tu edad"));

if (edadIngreso >= 18) {
    console.log("La persona puede entrar");
} else {
    console.log("La persona no entra");
}

// Tabla de multiplicación del 5
const tablaDelCinco = 5;
for (let i = 1; i <= 10; i++) {
    const resultado = tablaDelCinco * i;
    console.log(`${tablaDelCinco} x ${i} = ${resultado}`);
}

// Verificación de contraseña
let clave;
do {
    clave = prompt('Ingresa la contraseña');
} while (clave !== 'contraseña');
alert("Contraseña correcta");

// Datos personales
const nombreUsuario = prompt("Ingresa tu nombre");
const apellidoUsuario = prompt("Ingresa tu apellido");
const edadUsuario = parseFloat(prompt("Ingresa tu edad"));

// Función para mostrar los datos personales
function datos(nombre, apellido, edad) {
    console.log(`El nombre es ${nombre} ${apellido} y su edad es ${edad}`);
}

datos(nombreUsuario, apellidoUsuario, edadUsuario);

/* Objetos */
const producto = {
    id: 1, 
    nombre: "Buceo en playa", 
    duracion: "45 minutos",
    profundidad: "18 mts"
};
console.log(producto.nombre);
console.log(producto.profundidad);

// Forma alternativa de definir un objeto
const producto2 = {
    id: 2, 
    nombre: "Buceo en Cozumel", 
    duracion: "55 minutos",
    profundidad: "25 mts"
};
console.log(producto2["nombre"]);

// Objeto constructor para inmersiones
function Inmersion(lugar, profundidad, tiempo) {
    this.lugar = lugar;
    this.profundidad = profundidad;
    this.tiempo = tiempo;
}

const inmersion1 = new Inmersion('jardines', '12 mts', '55 minutos');
const inmersion2 = new Inmersion('sabalos', '15 mts', '50 minutos');
console.log(inmersion1);
console.log(inmersion2);

/* Versión calculadora */
const tripPrices = [2000, 1200, 1500, 3000];

const trip1 = parseInt(prompt("Cantidad de personas para Estados Unidos y Canadá ($2000):")) || 0;
const trip2 = parseInt(prompt("Cantidad de personas para Egipto y Marruecos ($1200):")) || 0;
const trip3 = parseInt(prompt("Cantidad de personas para Indonesia, Filipinas y Tailandia ($1500):")) || 0;
const trip4 = parseInt(prompt("Cantidad de personas para Francia, España, Inglaterra ($3000):")) || 0;

const totalFinal = (trip1 * tripPrices[0]) +
                   (trip2 * tripPrices[1]) +
                   (trip3 * tripPrices[2]) +
                   (trip4 * tripPrices[3]);

alert(`Total cost for your trips: $${totalFinal}`);