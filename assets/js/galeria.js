(function () {
	var root = document.getElementById('main');
	if (!root || !window.OBRAS) return;

	root.innerHTML = window.OBRAS.slice().reverse().map(function (obra) {
		var alt = obra.titulo || 'Cuadro de Chema Martín';
		var caption = '';
		if (obra.titulo) caption += '<h2>' + obra.titulo + '</h2>';
		if (obra.texto) caption += '<p>' + obra.texto + '</p>';
		return (
			'<article class="thumb">' +
				'<a href="' + obra.imagen + '" class="image">' +
					'<img src="' + obra.thumb + '" alt="' + alt + '" />' +
				'</a>' +
				caption +
			'</article>'
		);
	}).join('');
})();
