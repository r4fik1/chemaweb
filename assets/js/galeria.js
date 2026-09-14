(function () {
	var root = document.getElementById('galeria');
	if (!root || !window.OBRAS) return;

	var styles = ['style1', 'style2', 'style3', 'style4', 'style5', 'style6'];

	root.innerHTML = window.OBRAS.map(function (obra, i) {
		var alt = obra.titulo || 'Cuadro de Chema Martín';
		var titulo = obra.titulo || '';
		var texto = obra.texto || '';
		return (
			'<article class="' + styles[i % styles.length] + '">' +
				'<span class="image">' +
					'<img src="' + obra.thumb + '" alt="' + alt + '" />' +
				'</span>' +
				'<a href="obra.html?id=' + encodeURIComponent(obra.id) + '">' +
					(titulo ? '<h2>' + titulo + '</h2>' : '') +
					(texto ? '<div class="content"><p>' + texto + '</p></div>' : '') +
				'</a>' +
			'</article>'
		);
	}).join('');
})();
