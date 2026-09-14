(function () {
	var root = document.getElementById('galeria');
	if (!root || !window.OBRAS) return;

	var styles = ['style1', 'style2', 'style3', 'style4', 'style5', 'style6'];

	root.innerHTML = window.OBRAS.map(function (obra, i) {
		var titulo = obra.titulo || 'Obra';
		var texto = obra.texto || '';
		return (
			'<article class="' + styles[i % styles.length] + '">' +
				'<span class="image">' +
					'<img src="' + obra.thumb + '" alt="' + titulo + '" />' +
				'</span>' +
				'<a href="obra.html?id=' + encodeURIComponent(obra.id) + '">' +
					'<h2>' + titulo + '</h2>' +
					(texto ? '<div class="content"><p>' + texto + '</p></div>' : '') +
				'</a>' +
			'</article>'
		);
	}).join('');
})();
