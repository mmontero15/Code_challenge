document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('registroForm');

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;

        const data = {
            nombre,
            apellido,
            fechaNacimiento,
        };

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log('Respuesta del servidor:', responseData);
                alert('Registro exitoso');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Error en el registro');
            });
    });
});