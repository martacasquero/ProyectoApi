// cargo los platos al inicio
async function cargarMenu() {

    const respuesta = await fetch('/api/platos'); //espera la respuesta de la APIrest en la url /api/platos (GET)
    const platos = await respuesta.json(); //Convierto la respuesta json a un array de objetos
    const menu = document.getElementById('menu'); //obtengo el elemento html que tiene el id menu donde voy a mostrar los platos
    menu.innerHTML = '<h2>Nuestro Menú</h2>';  //reemplazo el contenido del menu por el titulo

    console.log('Platos recibidos:', platos); // veo si los he recibido

    platos.forEach(plato => {
        console.log('Pintando plato:', plato);

        const item = document.createElement('div'); // creo dinámicamente un elemento <div> en el DOM
        item.className = 'menu-item'; //le asigno la clase menu-item para que se asocie con styles.css

        //defino el contenido del html interno con los datos del plato en el div
        item.innerHTML = `
        <h3>${plato.plato}</h3> //muestro el nombre del plato como título
        <p>${plato.descripcion}</p> //muestro la descripción del plato en un párrafo
        <span>€${plato.precio.toFixed(2)}</span>
         `;

        menu.appendChild(item); //inserto el div item dentro del elemento con id menu
    });


}

// espero que el dom cargue
document.addEventListener('DOMContentLoaded', () => {
    cargarMenu(); //cargo el menu
    const formulario = document.getElementById('formAgregar');
    if (formulario) {
        formulario.addEventListener('submit', async function (e) { //añado un evento para que cuendo se envie el fomulario de agregar el playo
           e.preventDefault();
           const plato = {
               plato: document.getElementById('nombrePlato').value,
               precio: parseFloat(document.getElementById('precioPlato').value),
               descripcion: document.getElementById('descripcionPlato').value
           };


            const res = await fetch('/api/platos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(plato)
            });

            if (res.ok) {
                alert('Plato añadido con éxito');
                cargarMenu(); // recargar lista
                this.reset();
            } else {
                alert('Error al añadir el plato');
            }
        });
    }
});
