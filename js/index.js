
//Destinos elegibles y valores a calcular 

document.addEventListener('DOMContentLoaded', () => {
    const destinos = [
        { nombre: 'París', precio: 120000 },
        { nombre: 'Londres', precio: 150000 },
        { nombre: 'Roma', precio: 180000 },
        { nombre: 'Praga', precio: 550000 },
        { nombre: 'Tokio', precio: 2800000 }
    ];

    const formulario = document.getElementById('viajeForm');


//Creacion del formulario indicando datos basicos , y selecion de destino y cuotas

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();



        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const edad = document.getElementById('edad').value;
        const email = document.getElementById('email').value;
        const destinoSeleccionado = document.getElementById('destino').value;
        const cuotasSeleccionadas = parseInt(document.getElementById('cuotas').value);

        const destino = destinos.find(d => normalizeString(d.nombre).toLowerCase() === normalizeString(destinoSeleccionado).toLowerCase());

        if (destino) {
            const precio = destino.precio;
            const cuotaMensual = calcularCuotaMensual(precio, cuotasSeleccionadas);

            const resultado = `
                Nombre: ${nombre} ${apellido}\n
                Edad: ${edad}\n
                Email: ${email}\n
                Destino: ${destino.nombre}\n
                Precio Total: $${precio}\n
                ${cuotasSeleccionadas} cuotas de: $${cuotaMensual} cada una
            `;
            alert(resultado);
        } else {
            alert('Destino no encontrado.');
        }
    });

//Funcion calculadora 12 y  cuotas

    function calcularCuotaMensual(precio, numCuotas) {
        return (precio / numCuotas).toFixed(2);
    }


    function normalizeString(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
});
