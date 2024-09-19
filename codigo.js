document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('form-contacto').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que se recargue la página al enviar el formulario

        // Cargar los datos del formulario
        const formData = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            asunto: document.getElementById('asunto').value,
        };

        // Enviar el formulario a través de EmailJS
        emailjs.send('service_u0fr5ec', 'template_glezl2p', formData)
            .then(function(response) {
                console.log('Correo enviado con éxito', response.status, response.text);
                alert('El mensaje fue enviado con éxito.');
            }, function(error) {
                console.log('Falló el envío', error);
                alert('Hubo un error al enviar el mensaje.');
            });
    });
});
