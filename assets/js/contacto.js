(function () {
	if (typeof emailjs === 'undefined') return;

	emailjs.init('LaStg3-uehMh1-AHr');

	var form = document.getElementById('form-contacto');
	if (!form) return;

	var estado = document.getElementById('contacto-estado');

	form.addEventListener('submit', function (event) {
		event.preventDefault();
		var boton = form.querySelector('input[type="submit"]');
		boton.disabled = true;

		emailjs.sendForm('service_nf2e86j', 'template_ae8jyas', form)
			.then(function () {
				return emailjs.sendForm('service_nf2e86j', 'template_zmq909a', form);
			})
			.then(function () {
				if (estado) estado.textContent = 'Mensaje enviado. Gracias.';
				form.reset();
			})
			.catch(function () {
				if (estado) estado.textContent = 'No se pudo enviar. Escribe a markitos1989@gmail.com o llama al 629 777 043.';
			})
			.finally(function () {
				boton.disabled = false;
			});
	});
})();
